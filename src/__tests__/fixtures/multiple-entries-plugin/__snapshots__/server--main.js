/******/ ({

/***/ "./__MARKO_WEBPACK__MANIFEST.js":
/*!**************************************!*\
  !*** ./__MARKO_WEBPACK__MANIFEST.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  getBundleName: function(){return "browser"},
  entries: {"bar_aSxt":{"browser":{"js":["bar_aSxt~foo_3XPO.js","bar_aSxt.js"]}},"foo_3XPO":{"browser":{"js":["bar_aSxt~foo_3XPO.js","foo_3XPO.js"]}}}
}

/***/ }),

/***/ "./src/__tests__/fixtures/multiple-entries-plugin/bar.marko":
/*!******************************************************************!*\
  !*** ./src/__tests__/fixtures/multiple-entries-plugin/bar.marko ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.47 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(/*! marko/dist/html */ "marko/dist/html").t(__filename),
    marko_componentType = "/@marko/webpack-tests$x.x.x/fixtures/multiple-entries-plugin/bar.marko",
    marko_renderer = __webpack_require__(/*! marko/dist/runtime/components/renderer */ "marko/dist/runtime/components/renderer"),
    shared_template = __webpack_require__(/*! ./components/shared.marko */ "./src/__tests__/fixtures/multiple-entries-plugin/components/shared.marko"),
    marko_loadTag = __webpack_require__(/*! marko/dist/runtime/helpers/load-tag */ "marko/dist/runtime/helpers/load-tag"),
    shared_tag = marko_loadTag(shared_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<h1>Hello Bar</h1>");

  shared_tag({}, out, __component, "1");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/@marko/webpack-tests$x.x.x/fixtures/multiple-entries-plugin/bar.marko",
    tags: [
      "./components/shared.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),

/***/ "./src/__tests__/fixtures/multiple-entries-plugin/bar.marko?assets":
/*!*************************************************************************!*\
  !*** ./src/__tests__/fixtures/multiple-entries-plugin/bar.marko?assets ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.47 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(/*! marko/dist/html */ "marko/dist/html").t(__filename),
    marko_componentType = "/@marko/webpack-tests$x.x.x/fixtures/multiple-entries-plugin/bar.marko",
    marko_renderer = __webpack_require__(/*! marko/dist/runtime/components/renderer */ "marko/dist/runtime/components/renderer"),
    template = __webpack_require__(/*! ./bar.marko */ "./src/__tests__/fixtures/multiple-entries-plugin/bar.marko"),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(/*! ./../../../../__MARKO_WEBPACK__MANIFEST.js */ "./__MARKO_WEBPACK__MANIFEST.js"),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(/*! marko/dist/runtime/helpers/dynamic-tag */ "marko/dist/runtime/helpers/dynamic-tag"),
    marko_loadTag = __webpack_require__(/*! marko/dist/runtime/helpers/load-tag */ "marko/dist/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(__webpack_require__(/*! marko/dist/core-tags/components/init-components-tag */ "marko/dist/core-tags/components/init-components-tag"));

function renderAssets() {
  const assets = this.___assets;
  const nonce = this.global.cspNonce;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.script(`$mwp=${JSON.stringify(__webpack_require__.p)}`);

    if (assets.js) {
      const setNonce = nonce && `.setAttribute("nonce", ${JSON.stringify(nonce)})`;
      this.script(
        `(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;${setNonce ? `g${setNonce};` : ""}b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,${setNonce ? `a${setNonce},` : ""}b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["bar_aSxt"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/@marko/webpack-tests$x.x.x/fixtures/multiple-entries-plugin/bar.marko",
    tags: [
      "./bar.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),

/***/ "./src/__tests__/fixtures/multiple-entries-plugin/components/shared.marko":
/*!********************************************************************************!*\
  !*** ./src/__tests__/fixtures/multiple-entries-plugin/components/shared.marko ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.47 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(/*! marko/dist/html */ "marko/dist/html").t(__filename),
    marko_componentType = "/@marko/webpack-tests$x.x.x/fixtures/multiple-entries-plugin/components/shared.marko",
    marko_renderer = __webpack_require__(/*! marko/dist/runtime/components/renderer */ "marko/dist/runtime/components/renderer");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<h2>Shared</h2>");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/@marko/webpack-tests$x.x.x/fixtures/multiple-entries-plugin/components/shared.marko"
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),

/***/ "./src/__tests__/fixtures/multiple-entries-plugin/foo.marko":
/*!******************************************************************!*\
  !*** ./src/__tests__/fixtures/multiple-entries-plugin/foo.marko ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.47 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(/*! marko/dist/html */ "marko/dist/html").t(__filename),
    marko_componentType = "/@marko/webpack-tests$x.x.x/fixtures/multiple-entries-plugin/foo.marko",
    marko_renderer = __webpack_require__(/*! marko/dist/runtime/components/renderer */ "marko/dist/runtime/components/renderer"),
    shared_template = __webpack_require__(/*! ./components/shared.marko */ "./src/__tests__/fixtures/multiple-entries-plugin/components/shared.marko"),
    marko_loadTag = __webpack_require__(/*! marko/dist/runtime/helpers/load-tag */ "marko/dist/runtime/helpers/load-tag"),
    shared_tag = marko_loadTag(shared_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<h1>Hello Foo</h1>");

  shared_tag({}, out, __component, "1");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/@marko/webpack-tests$x.x.x/fixtures/multiple-entries-plugin/foo.marko",
    tags: [
      "./components/shared.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),

/***/ "./src/__tests__/fixtures/multiple-entries-plugin/foo.marko?assets":
/*!*************************************************************************!*\
  !*** ./src/__tests__/fixtures/multiple-entries-plugin/foo.marko?assets ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.47 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(/*! marko/dist/html */ "marko/dist/html").t(__filename),
    marko_componentType = "/@marko/webpack-tests$x.x.x/fixtures/multiple-entries-plugin/foo.marko",
    marko_renderer = __webpack_require__(/*! marko/dist/runtime/components/renderer */ "marko/dist/runtime/components/renderer"),
    template = __webpack_require__(/*! ./foo.marko */ "./src/__tests__/fixtures/multiple-entries-plugin/foo.marko"),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(/*! ./../../../../__MARKO_WEBPACK__MANIFEST.js */ "./__MARKO_WEBPACK__MANIFEST.js"),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(/*! marko/dist/runtime/helpers/dynamic-tag */ "marko/dist/runtime/helpers/dynamic-tag"),
    marko_loadTag = __webpack_require__(/*! marko/dist/runtime/helpers/load-tag */ "marko/dist/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(__webpack_require__(/*! marko/dist/core-tags/components/init-components-tag */ "marko/dist/core-tags/components/init-components-tag"));

function renderAssets() {
  const assets = this.___assets;
  const nonce = this.global.cspNonce;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.script(`$mwp=${JSON.stringify(__webpack_require__.p)}`);

    if (assets.js) {
      const setNonce = nonce && `.setAttribute("nonce", ${JSON.stringify(nonce)})`;
      this.script(
        `(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;${setNonce ? `g${setNonce};` : ""}b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,${setNonce ? `a${setNonce},` : ""}b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["foo_3XPO"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/@marko/webpack-tests$x.x.x/fixtures/multiple-entries-plugin/foo.marko",
    tags: [
      "./foo.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),

/***/ "./src/__tests__/fixtures/multiple-entries-plugin/server.js":
/*!******************************************************************!*\
  !*** ./src/__tests__/fixtures/multiple-entries-plugin/server.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const http = __webpack_require__(/*! http */ "http");
const foo = __webpack_require__(/*! ./foo.marko */ "./src/__tests__/fixtures/multiple-entries-plugin/foo.marko?assets");
const bar = __webpack_require__(/*! ./bar.marko */ "./src/__tests__/fixtures/multiple-entries-plugin/bar.marko?assets");

http
  .createServer((req, res) => {
    if (req.url === "/foo") foo.render({}, res);
    if (req.url === "/bar") bar.render({}, res);
  })
  .listen(0);


/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = http;

/***/ }),

/***/ "marko/dist/core-tags/components/init-components-tag":
/*!**********************************************************************!*\
  !*** external "marko/dist/core-tags/components/init-components-tag" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = marko/dist/core-tags/components/init-components-tag;

/***/ }),

/***/ "marko/dist/html":
/*!**********************************!*\
  !*** external "marko/dist/html" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = marko/dist/html;

/***/ }),

/***/ "marko/dist/runtime/components/renderer":
/*!*********************************************************!*\
  !*** external "marko/dist/runtime/components/renderer" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = marko/dist/runtime/components/renderer;

/***/ }),

/***/ "marko/dist/runtime/helpers/dynamic-tag":
/*!*********************************************************!*\
  !*** external "marko/dist/runtime/helpers/dynamic-tag" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = marko/dist/runtime/helpers/dynamic-tag;

/***/ }),

/***/ "marko/dist/runtime/helpers/load-tag":
/*!******************************************************!*\
  !*** external "marko/dist/runtime/helpers/load-tag" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = marko/dist/runtime/helpers/load-tag;

/***/ })

/******/ });