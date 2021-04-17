/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./components/webpack-assets/index.marko":
/*!***********************************************!*\
  !*** ./components/webpack-assets/index.marko ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marko_dist_runtime_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marko/dist/runtime/html */ "marko/dist/runtime/html");
/* harmony import */ var marko_dist_runtime_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marko_dist_runtime_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _marko_webpack_loader_manifest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!@marko/webpack/loader!?manifest */ "./src/loader/index.ts!?manifest");
/* harmony import */ var marko_dist_runtime_html_helpers_attr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marko/dist/runtime/html/helpers/attr */ "marko/dist/runtime/html/helpers/attr");
/* harmony import */ var marko_dist_runtime_html_helpers_attr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marko_dist_runtime_html_helpers_attr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var marko_dist_runtime_html_helpers_attrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marko/dist/runtime/html/helpers/attrs */ "marko/dist/runtime/html/helpers/attrs");
/* harmony import */ var marko_dist_runtime_html_helpers_attrs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marko_dist_runtime_html_helpers_attrs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var marko_dist_runtime_components_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! marko/dist/runtime/components/renderer */ "marko/dist/runtime/components/renderer");
/* harmony import */ var marko_dist_runtime_components_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(marko_dist_runtime_components_renderer__WEBPACK_IMPORTED_MODULE_4__);


const _marko_template = (0,marko_dist_runtime_html__WEBPACK_IMPORTED_MODULE_0__.t)();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_marko_template);




const _marko_componentType = "GHIxthSC",
      _marko_component = {};
_marko_template._ = marko_dist_runtime_components_renderer__WEBPACK_IMPORTED_MODULE_4___default()(function (input, out, _component, component, state) {
  const {
    entry,
    scriptAttrs,
    styleAttrs
  } = input;
  const assets = _marko_webpack_loader_manifest__WEBPACK_IMPORTED_MODULE_1__.default.getAssets(entry, out.global.buildName);
  const written = out.global.___writtenAssets || (out.global.___writtenAssets = new Set());

  if (assets.js) {
    const nonce = out.global.cspNonce;
    let _keyValue = 0;

    for (const js of assets.js) {
      const _keyScope = `[${_keyValue++}]`;

      if (!written.has(js)) {
        written.add(js);
        out.w(`<script${marko_dist_runtime_html_helpers_attrs__WEBPACK_IMPORTED_MODULE_3___default()({
          "src": __webpack_require__.p + js,
          "nonce": nonce,
          ...scriptAttrs
        })}></script>`);
      }
    }
  }

  if (assets.css) {
    let _keyValue2 = 0;

    for (const css of assets.css) {
      const _keyScope2 = `[${_keyValue2++}]`;

      if (!written.has(css)) {
        written.add(css);
        out.w(`<link${marko_dist_runtime_html_helpers_attrs__WEBPACK_IMPORTED_MODULE_3___default()({
          "rel": "stylesheet",
          "href": __webpack_require__.p + css,
          ...styleAttrs
        })}>`);
      }
    }
  }
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);

/***/ }),

/***/ "./src/__tests__/fixtures/asset-tag/test.marko":
/*!*****************************************************!*\
  !*** ./src/__tests__/fixtures/asset-tag/test.marko ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marko_dist_runtime_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marko/dist/runtime/html */ "marko/dist/runtime/html");
/* harmony import */ var marko_dist_runtime_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marko_dist_runtime_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_webpack_assets_index_marko__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/webpack-assets/index.marko */ "./components/webpack-assets/index.marko");
/* harmony import */ var marko_dist_runtime_helpers_render_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marko/dist/runtime/helpers/render-tag */ "marko/dist/runtime/helpers/render-tag");
/* harmony import */ var marko_dist_runtime_helpers_render_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marko_dist_runtime_helpers_render_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var marko_dist_runtime_components_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marko/dist/runtime/components/renderer */ "marko/dist/runtime/components/renderer");
/* harmony import */ var marko_dist_runtime_components_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marko_dist_runtime_components_renderer__WEBPACK_IMPORTED_MODULE_3__);


const _marko_template = (0,marko_dist_runtime_html__WEBPACK_IMPORTED_MODULE_0__.t)();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_marko_template);



const _marko_componentType = "wUwFs+xe",
      _marko_component = {};
_marko_template._ = marko_dist_runtime_components_renderer__WEBPACK_IMPORTED_MODULE_3___default()(function (input, out, _component, component, state) {
  out.w("<h1>Hello World</h1>");

  marko_dist_runtime_helpers_render_tag__WEBPACK_IMPORTED_MODULE_2___default()(_components_webpack_assets_index_marko__WEBPACK_IMPORTED_MODULE_1__.default, {
    "entry": "other"
  }, out, _component, "1");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);

/***/ }),

/***/ "./src/__tests__/fixtures/asset-tag/test.marko?server-entry":
/*!******************************************************************!*\
  !*** ./src/__tests__/fixtures/asset-tag/test.marko?server-entry ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var marko_dist_runtime_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marko/dist/runtime/html */ "marko/dist/runtime/html");
/* harmony import */ var marko_dist_runtime_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marko_dist_runtime_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test_marko__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.marko */ "./src/__tests__/fixtures/asset-tag/test.marko");
/* harmony import */ var _marko_webpack_loader_manifest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!@marko/webpack/loader!?manifest */ "./src/loader/index.ts!?manifest");
/* harmony import */ var marko_dist_core_tags_core_flush_here_and_after_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marko/dist/core-tags/core/__flush_here_and_after__.js */ "marko/dist/core-tags/core/__flush_here_and_after__.js");
/* harmony import */ var marko_dist_core_tags_core_flush_here_and_after_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marko_dist_core_tags_core_flush_here_and_after_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var marko_dist_runtime_helpers_render_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! marko/dist/runtime/helpers/render-tag */ "marko/dist/runtime/helpers/render-tag");
/* harmony import */ var marko_dist_runtime_helpers_render_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(marko_dist_runtime_helpers_render_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var marko_dist_core_tags_components_init_components_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! marko/dist/core-tags/components/init-components-tag.js */ "marko/dist/core-tags/components/init-components-tag.js");
/* harmony import */ var marko_dist_core_tags_components_init_components_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(marko_dist_core_tags_components_init_components_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var marko_dist_core_tags_core_await_reorderer_renderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! marko/dist/core-tags/core/await/reorderer-renderer.js */ "marko/dist/core-tags/core/await/reorderer-renderer.js");
/* harmony import */ var marko_dist_core_tags_core_await_reorderer_renderer_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(marko_dist_core_tags_core_await_reorderer_renderer_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var marko_dist_runtime_components_renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! marko/dist/runtime/components/renderer */ "marko/dist/runtime/components/renderer");
/* harmony import */ var marko_dist_runtime_components_renderer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(marko_dist_runtime_components_renderer__WEBPACK_IMPORTED_MODULE_7__);


const _marko_template = (0,marko_dist_runtime_html__WEBPACK_IMPORTED_MODULE_0__.t)();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_marko_template);




function renderAssets(out) {
  const entries = this.___entries;
  this.___entries = undefined;

  if (entries) {
    __webpack_require__.p && out.script(`$mwp=${JSON.stringify(__webpack_require__.p)}`);
    const buildName = this.buildName;
    const nonce = this.cspNonce;
    const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
    const written = this.___writtenAssets || (this.___writtenAssets = new Set());
    let scripts = "";
    let styles = "";

    for (const entry of entries) {
      const assets = _marko_webpack_loader_manifest__WEBPACK_IMPORTED_MODULE_2__.default.getAssets(entry, buildName);

      if (assets.js) {
        for (const href of assets.js) {
          if (!written.has(href)) {
            written.add(href);
            scripts += `<script src=${JSON.stringify(__webpack_require__.p + href)}${nonceAttr} async></script>`;
          }
        }
      }

      if (assets.css) {
        for (const href of assets.css) {
          if (!written.has(href)) {
            written.add(href);
            styles += `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + href)}>`;
          }
        }
      }
    }

    out.write(scripts + styles);
  }
}






const _marko_componentType = "wUwFs+xe",
      _marko_component = {};
_marko_template._ = marko_dist_runtime_components_renderer__WEBPACK_IMPORTED_MODULE_7___default()(function (input, out, _component, component, state) {
  out.global.___renderAssets = renderAssets;
  (out.global.___entries || (out.global.___entries = [])).push("test_wUwF");

  marko_dist_runtime_helpers_render_tag__WEBPACK_IMPORTED_MODULE_4___default()((marko_dist_core_tags_core_flush_here_and_after_js__WEBPACK_IMPORTED_MODULE_3___default()), {
    "renderBody": out => {
      out.global.___renderAssets && out.global.___renderAssets(out);
    }
  }, out, _component, "0");

  marko_dist_runtime_helpers_render_tag__WEBPACK_IMPORTED_MODULE_4___default()(_test_marko__WEBPACK_IMPORTED_MODULE_1__.default, input, out, _component, "1");

  marko_dist_runtime_helpers_render_tag__WEBPACK_IMPORTED_MODULE_4___default()((marko_dist_core_tags_components_init_components_tag_js__WEBPACK_IMPORTED_MODULE_5___default()), {}, out, _component, "2");

  marko_dist_runtime_helpers_render_tag__WEBPACK_IMPORTED_MODULE_4___default()((marko_dist_core_tags_core_await_reorderer_renderer_js__WEBPACK_IMPORTED_MODULE_6___default()), {}, out, _component, "3");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);

/***/ }),

/***/ "./src/loader/index.ts!?manifest":
/*!***************************************!*\
  !*** ./src/loader/index.ts!?manifest ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAssets(entry) {
    return this.build[entry];
  },
  build: {"other":{"js":["other.js"]},"test_wUwF":{"js":["test_wUwF.js"]}}
});

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ "marko/dist/core-tags/components/init-components-tag.js":
/*!*************************************************************************!*\
  !*** external "marko/dist/core-tags/components/init-components-tag.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("marko/dist/core-tags/components/init-components-tag.js");;

/***/ }),

/***/ "marko/dist/core-tags/core/__flush_here_and_after__.js":
/*!************************************************************************!*\
  !*** external "marko/dist/core-tags/core/__flush_here_and_after__.js" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("marko/dist/core-tags/core/__flush_here_and_after__.js");;

/***/ }),

/***/ "marko/dist/core-tags/core/await/reorderer-renderer.js":
/*!************************************************************************!*\
  !*** external "marko/dist/core-tags/core/await/reorderer-renderer.js" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("marko/dist/core-tags/core/await/reorderer-renderer.js");;

/***/ }),

/***/ "marko/dist/runtime/components/renderer":
/*!*********************************************************!*\
  !*** external "marko/dist/runtime/components/renderer" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("marko/dist/runtime/components/renderer");;

/***/ }),

/***/ "marko/dist/runtime/helpers/render-tag":
/*!********************************************************!*\
  !*** external "marko/dist/runtime/helpers/render-tag" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("marko/dist/runtime/helpers/render-tag");;

/***/ }),

/***/ "marko/dist/runtime/html":
/*!******************************************!*\
  !*** external "marko/dist/runtime/html" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("marko/dist/runtime/html");;

/***/ }),

/***/ "marko/dist/runtime/html/helpers/attr":
/*!*******************************************************!*\
  !*** external "marko/dist/runtime/html/helpers/attr" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("marko/dist/runtime/html/helpers/attr");;

/***/ }),

/***/ "marko/dist/runtime/html/helpers/attrs":
/*!********************************************************!*\
  !*** external "marko/dist/runtime/html/helpers/attrs" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("marko/dist/runtime/html/helpers/attrs");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************************!*\
  !*** ./src/__tests__/fixtures/asset-tag/server.js ***!
  \****************************************************/
const http = __webpack_require__(/*! http */ "http");
const test = __webpack_require__(/*! ./test.marko */ "./src/__tests__/fixtures/asset-tag/test.marko?server-entry");

http
  .createServer((req, res) => {
    test.render({}, res);
  })
  .listen(0);

})();

/******/ })()
;