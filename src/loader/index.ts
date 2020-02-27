"use strict";

import * as path from "path";
import * as loaderUtils from "loader-utils";
import ConcatMap from "concat-with-sourcemaps";
import getAssetCode from "./get-asset-code";
import { getVirtualModules } from "../shared/virtual";

const watchFiles = {
  style: {
    extensions: [".css", ".less", ".scss", ".stylus"],
    has(meta): boolean {
      return Boolean(
        meta.deps &&
          meta.deps.some(dep => {
            switch (typeof dep) {
              case "string":
                return watchFiles.style.extensions.includes(path.extname(dep));
              case "object":
                return watchFiles.style.extensions.includes(`.${dep.type}`);
            }
          })
      );
    }
  },
  component: {
    extensions: [".js", ".ts"],
    has(meta): boolean {
      return Boolean(meta.component);
    }
  },
  "component-browser": {
    extensions: [".js", ".ts"],
    has(meta): boolean {
      return (
        meta.deps &&
        meta.deps.some(dep => {
          return (
            typeof dep === "string" &&
            watchFiles["component-browser"].extensions.includes(
              path.extname(dep)
            )
          );
        })
      );
    }
  }
};

const DEFAULT_COMPILER = require.resolve("marko/compiler");
const cacheClearSetup = new WeakMap();
const browserJSONPrefix = "package: ";
let supportsBrowserJSON: boolean;

export default function(source: string): string {
  if (supportsBrowserJSON === undefined) {
    const resolveOptions = this._compiler.options.resolve;
    const compilerExtensions =
      (resolveOptions && resolveOptions.extensions) || [];
    supportsBrowserJSON = compilerExtensions.indexOf(".browser.json") !== -1;
  }

  const queryOptions = loaderUtils.getOptions(this); // Not the same as this.options
  const target = normalizeTarget(
    (queryOptions && queryOptions.target) || this.target
  );
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const markoCompiler = require((queryOptions && queryOptions.compiler) ||
    DEFAULT_COMPILER);
  const babelOptions = Object.assign(
    {},
    queryOptions && queryOptions.babelOptions
  );
  babelOptions.caller = Object.assign(
    {
      target: this.target,
      supportsStaticESM: true,
      supportsDynamicImport: true,
      supportsTopLevelAwait: true
    },
    babelOptions.caller
  );

  const dependenciesOnly = this.resource.endsWith("?dependencies");
  const hydrate = this.resource.endsWith("?hydrate");
  const assets = this.resource.endsWith("?assets");
  let sourceMaps =
    !queryOptions || queryOptions.sourceMaps === undefined
      ? this.sourceMap
      : queryOptions.sourceMaps;

  if (sourceMaps === "inline") {
    sourceMaps = true;
  }

  this.cacheable(false);
  if (!cacheClearSetup.has(this._compiler)) {
    this._compiler.hooks.watchRun.tap("clearMarkoTaglibCache", () => {
      markoCompiler.clearCaches();
    });
    cacheClearSetup.set(this._compiler, true);
  }

  if (assets) {
    return markoCompiler.compile(
      getAssetCode(this.resourcePath),
      this.resourcePath,
      {
        writeToDisk: false,
        requireTemplates: true,
        writeVersionComment: false,
        babelOptions
      }
    );
  } else if (hydrate) {
    return `
      if (window.$mwp) {
        __webpack_public_path__ = $mwp;
      }

      import ${JSON.stringify(
        `./${path.basename(this.resourcePath)}?dependencies`
      )};
      window.$initComponents && window.$initComponents();
    `;
  } else if (target !== "server" && markoCompiler.compileForBrowser) {
    const { code, meta, map } = markoCompiler.compileForBrowser(
      source,
      this.resourcePath,
      {
        sourceOnly: false,
        writeToDisk: false,
        writeVersionComment: false,
        sourceMaps,
        babelOptions
      }
    );

    getMissingWatchDeps(this.resourcePath, meta).forEach(dep =>
      this.addDependency(dep)
    );

    let dependencies = [];

    if (dependenciesOnly && meta.component) {
      dependencies = dependencies.concat(`
      import { register } from "marko/components";
      import component from ${JSON.stringify(meta.component)};
      register(${JSON.stringify(meta.id)}, component);
      `);
    }

    if (meta.deps) {
      dependencies = dependencies.concat(
        meta.deps.map(dependency => {
          if (!dependency.code) {
            if (
              supportsBrowserJSON &&
              dependency.startsWith(browserJSONPrefix)
            ) {
              dependency = dependency.slice(browserJSONPrefix.length);
            }
            // external file, just require it
            return `import ${JSON.stringify(dependency)};`;
          } else {
            // inline content, we'll create a virtual dependency.
            const virtualPath = path.resolve(
              path.dirname(this.resourcePath),
              dependency.virtualPath
            );
            const virtualModules = getVirtualModules(this._compiler);
            virtualModules.writeModule(virtualPath, dependency.code);
            return `import ${JSON.stringify(dependency.virtualPath)};`;
          }
        })
      );
    }

    if (dependenciesOnly && meta.tags) {
      // we need to also include the dependencies of
      // any tags that are used by this template
      dependencies = dependencies.concat(
        meta.tags
          .filter(tagPath => tagPath.endsWith(".marko"))
          .map(tagPath => {
            return `import ${JSON.stringify(tagPath + "?dependencies")};`;
          })
      );
    }

    if (!dependenciesOnly) {
      if (map) {
        if (dependencies.length) {
          const concat = new ConcatMap(true, "", ";");
          concat.add(null, dependencies.join("\n"));
          concat.add(this.resource, code, map);
          return this.callback(null, concat.content, concat.sourceMap);
        } else {
          this.callback(null, code, map);
        }
      } else {
        dependencies.push(code);
      }
    }

    return dependencies.join("\n");
  } else {
    const { code, meta, map } = markoCompiler.compile(
      source,
      this.resourcePath,
      {
        sourceOnly: false,
        writeToDisk: false,
        requireTemplates: true,
        writeVersionComment: false,
        sourceMaps,
        babelOptions
      }
    );

    getMissingWatchDeps(this.resourcePath, meta).forEach(dep =>
      this.addDependency(dep)
    );

    return this.callback(null, code, map);
  }
}

function getMissingWatchDeps(resource: string, meta): string[] {
  const watchDeps = [];
  const templateFileName = path.basename(resource, ".marko");
  const isIndex = templateFileName === "index";
  const depPathPrefix = isIndex ? "./" : `./${templateFileName}.`;
  for (const name in watchFiles) {
    const prefix = depPathPrefix + name;
    const { extensions, has } = watchFiles[name];
    if (!has(meta)) {
      for (const ext of extensions) {
        watchDeps.push(prefix + ext);
      }
    }
  }

  return watchDeps;
}

function normalizeTarget(target: string): string {
  switch (target) {
    case "server":
    case "node":
    case "async-node":
    case "atom":
    case "electron":
    case "electron-main":
      return "server";
    default:
      return "browser";
  }
}
