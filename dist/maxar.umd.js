(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["maxar"] = factory();
	else
		root["maxar"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0961":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreeQuarters_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a78b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreeQuarters_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreeQuarters_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreeQuarters_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0fd2":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8bc2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4db7a9c8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "0ff6":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6614");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("c0d059b0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "2009":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("82c2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("de5c9986", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2017":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.FullWidthHeightImageComponent{width:100%}.FullWidthHeightImageComponent img{max-width:100%;width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "2182":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.toggles{background:rgba(0,0,0,.8);-webkit-box-sizing:border-box;box-sizing:border-box;padding:1em;position:absolute;top:1em;left:1em;max-width:400px;z-index:2}@media(max-width:768px){.toggles{width:100%;max-width:unset;left:0;top:0}}.toggles .toggleItem{display:-webkit-box;display:-ms-flexbox;display:flex;margin:1em 0}.toggles label,.toggles span{color:#fff;font-size:18px;font-family:Blender;font-weight:500;text-transform:uppercase}.toggles .label-container{display:block;position:relative;padding-left:35px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.toggles .label-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.toggles .label-container .checkmark{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;top:-3px;left:0;height:24px;width:24px;background-color:transparent;border:2px solid #fff}.toggles .label-container .checkmark:after{content:\"\";position:absolute;display:none}.toggles .label-container:hover input~.checkmark{background-color:transparent}.toggles .label-container input:checked~.checkmark{background-color:#0e9797}.toggles .label-container input:checked[data-toggle-color=\"#4E103B\"]~.checkmark{background-color:#4e103b}.toggles .label-container input:checked[data-toggle-color=\"#074B4B\"]~.checkmark{background-color:#074b4b}.toggles .label-container input:checked[data-toggle-color=\"#cfd8fe\"]~.checkmark{background-color:#cfd8fe}.toggles .label-container input:checked[data-toggle-color=\"#4164fb\"]~.checkmark{background-color:#4164fb}.toggles .label-container input:checked[data-toggle-color=\"#1b2b66\"]~.checkmark{background-color:#1b2b66}.toggles .label-container input:checked[data-toggle-color=\"#0e9797\"]~.checkmark{background-color:#0e9797}.toggles .label-container input:checked[data-toggle-color=\"#68164f\"]~.checkmark{background-color:#68164f}.toggles .label-container input:checked[data-toggle-color=\"#f04923\"]~.checkmark{background-color:#f04923}.toggles .label-container input:checked[data-toggle-color=\"#6b6965\"]~.checkmark{background-color:#6b6965}.toggles .label-container input:checked~.checkmark:after{display:block}.toggles .label-container .checkmark:after{top:9px;left:9px;width:8px;height:8px;border-radius:50%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "24f9":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.HomeHeroComponent{display:-webkit-box;display:-ms-flexbox;display:flex;height:66vh;overflow:hidden;padding-bottom:0}@media(max-width:1024px){.HomeHeroComponent{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:75vh}}.HomeHeroComponent__copy{-ms-flex-item-align:start;align-self:flex-start;border-left:2px solid #fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;margin:20px 0 0 24px;padding:0 24px 20px 24px;padding-top:0;width:500px;max-width:calc(100% - 20px)}.HomeHeroComponent__copy p{padding-right:40px}@media(min-width:1440px){.HomeHeroComponent__copy{width:690px;-webkit-box-sizing:content-box;box-sizing:content-box;margin:20px 0 0 56px;padding:0 56px 20px 56px}.HomeHeroComponent__copy p{padding-right:160px}}.HomeHeroComponent img{-webkit-box-flex:1;-ms-flex:1;flex:1;-o-object-fit:cover;object-fit:cover;-o-object-position:center right;object-position:center right;overflow:hidden}@media(max-width:1024px){.HomeHeroComponent img{-o-object-position:center right;object-position:center right}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "290b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a5c3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("7a2668be", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2a73":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("95b0");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2b0e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) { var repeat, classify, classifyRE, hasConsole; }

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (false) {}
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {}
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     false && false;
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     false && false;
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       false && false;

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     false && false;
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {}
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {}
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {}
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {}
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {}

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {}
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    false
  ) {}
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {}
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {}
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) { var getHandler, hasHandler, isBuiltInModifier, hasProxy, warnReservedPrefix, warnNonPresent, allowedGlobals; }

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (false) { var perf; }

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       false && false;
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) { var keyInLowerCase; }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {} else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {}
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {}
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       false && false;
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       false && false;
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (false) {}
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (false) {}
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {}
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     false && false;
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {}
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (false) {}
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {} else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {} else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {}
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       false && false;
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? (undefined)
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) { var lowerCaseEvent; }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {}
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {} else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {}

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {}
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {}
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {}
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (false) {}
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? undefined
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       false && false;
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) { var hyphenatedKey; } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     false && false;
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {}
    if (props && hasOwn(props, key)) {
       false && false;
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {}

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {}
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (false) {}
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {}
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {}
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {}

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {} else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {}

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (false
  ) {}
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {}

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {}
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {}
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       false && false;
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {}

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {}
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {}
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {}

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (false) {}
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {}
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {}
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {}

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {}

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     false && false;
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {}

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {}

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) { var name, opts; }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        false
      ) {}
    }
    if (false
    ) {}
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["a"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "34a1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8fff");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("bd97e7c0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3c9a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("24f9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("8c5f644c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "3d45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3c9a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeHero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4fa6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("290b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "53b0":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f86d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3bc09cd8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5439":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullWidthHeightImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dddc");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullWidthHeightImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullWidthHeightImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullWidthHeightImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5619":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("76d0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("58a09678", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5af8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MasonryGrid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7a81");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MasonryGrid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MasonryGrid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MasonryGrid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5d44":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("77a0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("724a1fba", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5d97":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatBlock_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8787");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatBlock_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatBlock_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatBlock_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6282":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaxarMap_vue_vue_type_style_index_0_id_6b03a789_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("53b0");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaxarMap_vue_vue_type_style_index_0_id_6b03a789_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaxarMap_vue_vue_type_style_index_0_id_6b03a789_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaxarMap_vue_vue_type_style_index_0_id_6b03a789_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "6614":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.CarouselComponent{position:relative}@media(min-width:1024px){.CarouselComponent{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;margin-left:0;margin-right:0}}.CarouselComponent .images{background:#f5f5f5;overflow-x:hidden;width:100%}@media(min-width:1024px){.CarouselComponent .images{background:#fff;width:50%}}.CarouselComponent .images .slider{height:100%}.CarouselComponent .images .slide{-webkit-transition:-webkit-transform .4s ease-in-out;transition:-webkit-transform .4s ease-in-out;transition:transform .4s ease-in-out;transition:transform .4s ease-in-out,-webkit-transform .4s ease-in-out;height:0;width:0}@media(min-width:1024px){.CarouselComponent .images .slide{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}.CarouselComponent .images .slide img{display:block;height:100%;width:100%}.CarouselComponent .images .slide.active{height:100%;width:100%}@media(min-width:1024px){.CarouselComponent .images .slide.active{-webkit-transform:translateX(0);transform:translateX(0)}}.CarouselComponent .copy{background:#434343;color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:-80px;overflow-x:hidden;width:100%}@media(min-width:1024px){.CarouselComponent .copy{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-top:0}}.CarouselComponent .copy .indicators{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;height:80px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;z-index:3}@media(min-width:1024px){.CarouselComponent .copy .indicators{padding:0 0 40px 40px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}}@media(min-width:1440px){.CarouselComponent .copy .indicators{padding:0 0 80px 80px}}.CarouselComponent .copy .indicator{background-color:#fff;border:1px solid #fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:transparent;height:15px;margin:0 5px;padding:0;-webkit-transition:all .3s ease;transition:all .3s ease;width:15px}.CarouselComponent .copy .indicator:focus,.CarouselComponent .copy .indicator:hover{border-color:#fcaf17}@media(min-width:1024px){.CarouselComponent .copy .indicator{background-color:transparent;color:unset;height:40px;margin:0 20px;width:40px}}@media(min-width:1024px){.CarouselComponent .copy .indicator:first-of-type{margin-left:0}}.CarouselComponent .copy .indicator.active{background-color:#fcaf17;border-color:#fcaf17;color:transparent}.CarouselComponent .copy .indicator.active:focus{color:transparent!important}@media(min-width:1024px){.CarouselComponent .copy .indicator.active{color:#fff!important}.CarouselComponent .copy .indicator.active:focus{color:#fcaf17!important}}.CarouselComponent .copy .slider{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease;-webkit-transform:translateX(0);transform:translateX(0)}.CarouselComponent .copy .slide{padding:25px}@media(min-width:1024px){.CarouselComponent .copy .slide{padding:40px}}@media(min-width:1440px){.CarouselComponent .copy .slide{padding:80px}}.CarouselComponent .copy .slide .button{color:#fff}.CarouselComponent .copy .arrows{display:none}@media(min-width:1024px){.CarouselComponent .copy .arrows{display:block;padding:40px 0 0 40px}}@media(min-width:1440px){.CarouselComponent .copy .arrows{padding:80px 0 0 80px}}.CarouselComponent .copy .arrows .nextButton,.CarouselComponent .copy .arrows .previousButton{border:none;-webkit-box-sizing:border-box;box-sizing:border-box;color:transparent;margin-right:16px;padding:0;position:relative;height:40px;width:40px}.CarouselComponent .copy .arrows .nextButton:focus,.CarouselComponent .copy .arrows .nextButton:hover,.CarouselComponent .copy .arrows .previousButton:focus,.CarouselComponent .copy .arrows .previousButton:hover{background-color:transparent!important;color:transparent!important}.CarouselComponent .copy .arrows .nextButton:before,.CarouselComponent .copy .arrows .previousButton:before{background-size:contain!important;background-repeat:no-repeat!important;content:\" \";display:block;height:32px;left:0;position:absolute;top:0;width:16px}.sharedHeading{background-color:#434343;padding:40px}.sharedHeading h2{color:#fff;text-align:center;margin-bottom:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7222":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedResource_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("34a1");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedResource_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedResource_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedResource_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "732a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconBlock_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d6bb");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconBlock_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconBlock_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconBlock_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "76d0":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}nav{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:20px 56px 0 56px;position:relative;z-index:9999}nav,nav a:first-of-type{display:-webkit-box;display:-ms-flexbox;display:flex}nav a:first-of-type{-webkit-box-align:center;-ms-flex-align:center;align-items:center}nav label{display:none}nav hr{border-color:#fcaf17;margin-left:-20px;-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:-webkit-transform 1s ease-in-out;transition:-webkit-transform 1s ease-in-out;transition:transform 1s ease-in-out;transition:transform 1s ease-in-out,-webkit-transform 1s ease-in-out;width:80%}.navbg{background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;width:100%;position:absolute;top:0;left:0;z-index:-9}nav ul{padding:0;list-style:none}.navbar__brand{height:36px;max-width:200px;width:100%}@media(max-width:1100px){.navbar__brand{height:20px;max-width:111px;width:100%}}#siteSearch--mobile,.nav-mobile{display:none}#siteSearch--desktop{border:none}#siteSearch--desktop:focus,#siteSearch--desktop:hover{background:transparent!important}#siteSearch--desktop img.hidden{display:none}.siteSearch--desktop__form{background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;top:0;right:0;-webkit-transform:translateX(calc(100% + 56px));transform:translateX(calc(100% + 56px));-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out;height:100%;width:100%}.siteSearch--desktop__form.active{-webkit-transform:translateX(-61px);transform:translateX(-61px)}.siteSearch--desktop__form input{border:none;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;height:40px;padding-left:20px;right:0;width:300px}.siteSearch--desktop__form #siteSearch__submit{border:none!important;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);padding:0;height:40px;width:40px}.navbar__categories{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0}.navbar__categories__header{color:#000;cursor:pointer;display:block;padding:40px;position:relative;-webkit-transition:color .3s ease-in-out;transition:color .3s ease-in-out}.navbar__categories__header--active,.navbar__categories__header:focus,.navbar__categories__header:hover{color:#fcaf17}.navbar__category{background:#2e2e2e;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;min-height:45vh;left:-9999px;top:0;opacity:0;padding:20px;position:absolute;top:100%;-webkit-transform:translateY(-100%);transform:translateY(-100%);z-index:-10}.navbar__category h3{margin-left:10%}.navbar__category ul{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;height:200px;margin-left:20%;max-width:600px}.navbar__category--active{left:0;opacity:.98;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out;width:100%}.navbar__category--active hr{-webkit-transform:translateX(0);transform:translateX(0)}.navbar__category__item{margin-bottom:20px;width:200px}.navbar__link{color:#fff}.secondaryNav{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;overflow:hidden;position:relative;width:100%}.secondaryNav a,.secondaryNav button{border:none;color:#000;padding:8px 20px;-webkit-transition:color .3s ease-in-out;transition:color .3s ease-in-out}.secondaryNav a:focus,.secondaryNav a:hover,.secondaryNav button:focus,.secondaryNav button:hover{color:#fcaf17;background-color:transparent!important}#siteSearch--mobile__submit{display:none}@media(max-width:1024px){nav{-webkit-box-sizing:content-box;box-sizing:content-box;height:24px;padding:24px}nav label{color:#fcaf17;display:block}.navbar__categories__header{color:#fff;padding:20px;padding-left:0;position:relative;-webkit-transition:font-size .3s ease-in-out;transition:font-size .3s ease-in-out}.navbar__categories__header:before{background:#fcaf17;bottom:0;content:\"\";height:1px;left:-24px;position:absolute;width:calc(100% + 24px)}.navbar__categories__header:after{background-color:transparent;background-position:50%;background-repeat:no-repeat;background-size:contain;content:\"\";height:8px;left:calc(100% - 24px);top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%);width:13px}.navbar__categories__header--active{font-size:20px}.navbar__categories__header--active:after{-webkit-transform:translate(-100%,-50%) rotate(180deg);transform:translate(-100%,-50%) rotate(180deg);-webkit-transform-origin:center;transform-origin:center}.navbar__brand{height:17px;width:94px}.nav-mobile{border:none;cursor:pointer;display:block;height:24px;padding:0;position:absolute;right:24px;top:24px;z-index:1;width:48px}.nav-mobile img{height:100%;width:100%}.navbar{background:#2e2e2e;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;left:0;padding:24px;position:absolute;top:72px;-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out;width:100%;z-index:1}.navbar--active{-webkit-transform:translateX(0);transform:translateX(0)}#siteSearch--desktop{display:none}.navbar__link{display:inline-block}.navbar__categories{display:block}.navbar__category{height:auto;max-height:0;-webkit-transition:max-height .7s ease-in-out;transition:max-height .7s ease-in-out;z-index:unset}.navbar__category h3,.navbar__category hr{display:none}.navbar__category ul{display:block;height:auto;margin-left:0}.navbar__category--active{max-height:1000px;position:relative}.multi-col__category{position:relative}.secondaryNav{display:none}.loginListItem{display:block}#siteSearch--mobile{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;margin-bottom:40px;padding-left:20px;width:calc(100% - 45px)}#siteSearch--mobile,#siteSearch--mobile__submit{border:none;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;height:40px}#siteSearch--mobile__submit{background:#fff;margin-left:-5px;margin-top:-1px;padding:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);width:39px;width:40px}.navbg{display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "77a0":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.HeadlineCopyComponent{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.HeadlineCopyComponent,.HeadlineCopyComponent div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.HeadlineCopyComponent div{max-width:750px;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:40px 0;-webkit-box-sizing:border-box;box-sizing:border-box}.HeadlineCopyComponent h2{max-width:100%}.HeadlineCopyComponent h2.rule{padding-bottom:20px;margin-bottom:20px;position:relative}.HeadlineCopyComponent h2.rule:after{content:\"\";position:absolute;left:0;bottom:0;width:100%;height:2px;border-bottom:2px solid #fcaf17}.HeadlineCopyComponent .copy{max-width:100%}.HeadlineCopyComponent .copy p{margin:0}@media(min-width:768px){.HeadlineCopyComponent .copy{max-width:65%}}@media(max-width:950px){.HeadlineCopyComponent div{padding:40px 40px}.HeadlineCopyComponent .copy{padding:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "77cc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a601");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5baff944", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7a06":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5619");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7a81":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c98d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("597dd0de", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "8138":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c7ff");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("ef6a6d84", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "82c2":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.mapNav{background:#2e2e2e;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:20px 56px 0 56px;position:relative;z-index:9999}.mapNav,.mapNav__brand__wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.mapNav__brand__wrapper{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.mapNav__brand{height:36px;max-width:200px;width:100%}@media(max-width:1100px){.mapNav__brand{height:20px;max-width:111px;width:100%}}.mapNav__navbar__categories{-ms-flex-line-pack:center;align-content:center;display:-webkit-box;display:-ms-flexbox;display:flex;list-style:none;margin:0;padding:0}.mapNav__navbar__categories__header{color:#fff;cursor:pointer;display:block;font-size:16px;font-weight:900;line-height:1.5;padding:40px;position:relative;-webkit-transition:color .3s ease-in-out;transition:color .3s ease-in-out;text-transform:uppercase}.mapNav__navbar__categories__header:focus,.mapNav__navbar__categories__header:hover{color:#fcaf17}@media(max-width:1024px){.mapNav{-webkit-box-sizing:content-box;box-sizing:content-box;padding:24px}.mapNav__brand{height:17px;width:94px}.mapNav__navbar__categories__header{padding:0 24px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "857a":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "85fc":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.ThreeQuartersComponent{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}.ThreeQuartersComponent .three_quarters__col{height:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:#fff}.ThreeQuartersComponent .three_quarters__col-text{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:40px 160px 40px 160px}.ThreeQuartersComponent .three_quarters__col-img{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.ThreeQuartersComponent .three_quarters__col-img img{width:100%;max-width:100%;height:100%}.ThreeQuartersComponent .three_quarters__col:first-child{width:55%}.ThreeQuartersComponent .three_quarters__col:last-child{width:45%}.ThreeQuartersComponent.is_inverse{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}@media(max-width:1440px){.ThreeQuartersComponent .three_quarters__col-text{padding:40px 80px 40px 80px}.ThreeQuartersComponent .three_quarters__col:first-child{width:55%}.ThreeQuartersComponent .three_quarters__col:last-child{width:45%}}@media(max-width:950px){.ThreeQuartersComponent{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ThreeQuartersComponent .three_quarters__col-text{margin:0;padding:40px 40px 40px 40px}.ThreeQuartersComponent .three_quarters__col:first-child,.ThreeQuartersComponent .three_quarters__col:last-child{width:100%}.ThreeQuartersComponent.is_inverse{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ThreeQuartersComponent.is_inverse .three_quarters__col-text{margin:0;padding:40px 40px 40px 40px}}.ThreeQuartersComponent.white .three_quarters__col{background-color:#fff}.ThreeQuartersComponent.light_grey .three_quarters__col{background-color:#f5f5f5}.ThreeQuartersComponent.dark_grey .three_quarters__col{background-color:#2e2e2e}.component_form.three_quarters_components{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.component_form.three_quarters_components input[type=text]{width:100%}.component_form.three_quarters_components .tq_row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8787":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a7fc");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4e1a01c4", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8ae6":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.HeroComponent{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.HeroComponent__copy{-ms-flex-item-align:start;align-self:flex-start;border-left:2px solid #fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;margin:20px 0 20px 24px;padding:0 24px 20px 24px;padding-top:0;width:1280px;max-width:calc(100% - 20px)}@media(min-width:768px){.HeroComponent__copy{-webkit-box-sizing:content-box;box-sizing:content-box;margin:20px 0 40px 56px;padding:0 56px 20px 56px}}.HeroComponent__copy p{max-width:500px}.HeroComponent__image{width:100%;height:400px;background-repeat:no-repeat;background-size:cover;background-position:50%}@media(max-width:1200px){.HeroComponent__image{height:250px}}@media(max-height:900px){.HeroComponent__image{height:250px}}.HeroComponent img{width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;min-height:200px;max-height:400px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8bc2":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.RevealingStatCardsComponent{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media(max-width:1600px){.RevealingStatCardsComponent{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.RevealingStatCardsComponent__stat{background:#434343;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:450px;width:450px;max-width:100%;margin:0 20px 40px 20px;overflow:hidden;position:relative}.RevealingStatCardsComponent__stat__image{height:calc(100% - 90px);width:100%;z-index:2}.RevealingStatCardsComponent__stat img{width:100%;z-index:-1}.RevealingStatCardsComponent__stat__copy{background:#434343;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px;text-align:center;text-transform:uppercase;z-index:2}.RevealingStatCardsComponent__stat__reveal{background:rgba(253,185,19,.8);position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;top:0;left:0;height:100%;width:100%;opacity:0;z-index:3;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}.RevealingStatCardsComponent__stat__reveal p{font-size:24px;max-width:75%;text-align:center;text-transform:uppercase}.RevealingStatCardsComponent__stat:focus .RevealingStatCardsComponent__stat__reveal,.RevealingStatCardsComponent__stat:hover .RevealingStatCardsComponent__stat__reveal{opacity:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8cf1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0ff6");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8fff":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.FeaturedResource{background:#f5f5f5;border-top:2px solid #fcaf17;border-bottom:2px solid #fcaf17;margin-bottom:20px!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "9052":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullColorCta_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e006");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullColorCta_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullColorCta_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FullColorCta_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "95b0":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8ae6");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("a6ce2848", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "9911":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createHTML = __webpack_require__("857a");
var forcedStringHTMLMethod = __webpack_require__("af03");

// `String.prototype.link` method
// https://tc39.github.io/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a5c3":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.SquareVideoTwoColumnComponent,.TwoColumnComponent{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.SquareVideoTwoColumnComponent .two-column__col,.TwoColumnComponent .two-column__col{height:auto}.SquareVideoTwoColumnComponent .two-column__col-text,.TwoColumnComponent .two-column__col-text{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:100%;margin-left:40px;padding:0 80px}.SquareVideoTwoColumnComponent .two-column__col-text a,.TwoColumnComponent .two-column__col-text a{color:#000;text-decoration:underline;-webkit-text-decoration-color:#fcaf17;text-decoration-color:#fcaf17}.SquareVideoTwoColumnComponent .two-column__col-text a.button,.TwoColumnComponent .two-column__col-text a.button{text-decoration:none}.SquareVideoTwoColumnComponent .two-column__col-img,.TwoColumnComponent .two-column__col-img{display:block;width:100%;height:100%;min-height:480px;max-width:1080px;background-size:cover;background-position:50%;background-repeat:no-repeat}.SquareVideoTwoColumnComponent .two-column__col:first-child,.TwoColumnComponent .two-column__col:first-child{width:45%}.SquareVideoTwoColumnComponent .two-column__col:last-child,.TwoColumnComponent .two-column__col:last-child{width:55%}.SquareVideoTwoColumnComponent.right,.TwoColumnComponent.right{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.SquareVideoTwoColumnComponent.right .two-column__col-text,.TwoColumnComponent.right .two-column__col-text{margin-left:0;margin-right:40px}@media(max-width:1440px){.SquareVideoTwoColumnComponent .two-column__col:first-child,.TwoColumnComponent .two-column__col:first-child{width:60%}.SquareVideoTwoColumnComponent .two-column__col:last-child,.TwoColumnComponent .two-column__col:last-child{width:40%}}@media(max-width:1100px){.SquareVideoTwoColumnComponent,.TwoColumnComponent{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.SquareVideoTwoColumnComponent .two-column__col-text,.TwoColumnComponent .two-column__col-text{margin:0 0 40px 20px;padding:0 40px 0 20px;position:relative}.SquareVideoTwoColumnComponent .two-column__col-text a.button,.TwoColumnComponent .two-column__col-text a.button{margin-bottom:20px}.SquareVideoTwoColumnComponent .two-column__col-img,.TwoColumnComponent .two-column__col-img{height:300px;min-height:auto;margin-bottom:40px;background-size:cover}.SquareVideoTwoColumnComponent .two-column__col:first-child,.SquareVideoTwoColumnComponent .two-column__col:last-child,.TwoColumnComponent .two-column__col:first-child,.TwoColumnComponent .two-column__col:last-child{width:100%}.SquareVideoTwoColumnComponent.right,.TwoColumnComponent.right{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.SquareVideoTwoColumnComponent.right .two-column__col-text,.TwoColumnComponent.right .two-column__col-text{border-left:none;margin:0 20px 0 0;padding:0 20px 0 40px}}.dark_grey.SquareVideoTwoColumnComponent .two-column__col-text a,.dark_grey.TwoColumnComponent .two-column__col-text a{color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a601":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.MultilinkComponent{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media(max-width:1280px){.MultilinkComponent{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.MultilinkComponent__link{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 40px;min-width:250px}@media(max-width:1280px){.MultilinkComponent__link{width:30%;margin-bottom:40px}}@media(max-width:768px){.MultilinkComponent__link{width:100%}}.MultilinkComponent__link__title{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:900;text-transform:uppercase}.MultilinkComponent__link a{-ms-flex-item-align:start;align-self:flex-start}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a78b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("85fc");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("014ccc9e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "a7fc":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.StatsComponent{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.StatsComponent__image{width:55%}.StatsComponent__image img{width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}@media(max-width:1280px){.StatsComponent__image{width:50%}}@media(max-width:768px){.StatsComponent__image{width:100%}}.StatsComponent__stats{-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px 24px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-line-pack:center;align-content:center}@media(min-width:768px){.StatsComponent__stats{padding:20px 56px}}.StatsComponent__stats__stat{-ms-flex-item-align:start;align-self:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box;width:45%}.StatsComponent__stats__stat p{font-family:Blender,Arial,Helvetica,sans-serif}.StatsComponent__stats__stat p:first-of-type{line-height:1;font-size:60px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a9da":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreeCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bf0b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreeCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreeCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreeCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "af03":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "b16e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("77cc");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b549":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2182");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("275192c6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("dcab");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("6aad5f84", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "bf37":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/close.97c008fb.svg";

/***/ }),

/***/ "c002":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlineCopy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5d44");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlineCopy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlineCopy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeadlineCopy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c012":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/left-arrow.bd85a216.svg";

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c0f9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2009");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c635":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f677");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("68f737fe", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c7ff":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.WistiaVideoComponent article{margin:0 auto;max-width:1278px;position:relative}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c98d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.MasonryGridComponent{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}@media(max-width:1280px){.MasonryGridComponent{-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:24px;padding-right:24px}}.MasonryGridComponent h3,.MasonryGridComponent p{text-transform:none}.MasonryGridComponent p{font-weight:400}.MasonryGridComponent__featured{width:66%;margin-right:40px}.MasonryGridComponent__featured .MasonryGridComponent__card{height:100%}@media(max-width:1280px){.MasonryGridComponent__featured{width:100%;margin-right:0;margin-bottom:20px}}.MasonryGridComponent__right-column{-webkit-box-flex:1;-ms-flex:1;flex:1}.MasonryGridComponent__right-column .MasonryGridComponent__card:last-of-type{margin-bottom:0}@media(max-width:1280px){.MasonryGridComponent__right-column{width:100%}}.MasonryGridComponent__card{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;width:100%;margin-bottom:20px;overflow:hidden}.MasonryGridComponent__card__copy{background:#434343;color:#fff;padding:20px;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1}.MasonryGridComponent__card__copy:after{background:#fcaf17;content:\"\";position:absolute;height:100%;width:20px;right:0;bottom:0;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}.MasonryGridComponent__card:focus img,.MasonryGridComponent__card:hover img{-webkit-transform:scale(1.1);transform:scale(1.1)}.MasonryGridComponent__card:focus .MasonryGridComponent__card__copy:after,.MasonryGridComponent__card:hover .MasonryGridComponent__card__copy:after{opacity:1}.MasonryGridComponent img{height:100%;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "ceba":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevealingStatCards_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0fd2");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevealingStatCards_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevealingStatCards_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevealingStatCards_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d084":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.IconGridComponent{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.IconGridComponent,.IconGridComponent__container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.IconGridComponent__container{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:horizontal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-width:1440px;width:100%;padding:0 20px}@media(min-width:980px){.IconGridComponent__container{padding:0 0 0 0}}@media(min-width:1281px){.IconGridComponent__container{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.IconGridComponent__container.icon__count_1,.IconGridComponent__container.icon__count_2{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.IconGridComponent__cell{padding:24px 0 10px 0;-ms-flex-preferred-size:100%;flex-basis:100%;width:100%;-ms-flex:auto;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.IconGridComponent__cell:last-child{padding:24px 0 0 0}.IconGridComponent__cell:first-child{padding:0 0 0 0}@media(min-width:980px){.IconGridComponent__cell{padding:24px 0 10px 0;min-width:50%;max-width:55%;-ms-flex-preferred-size:100%;flex-basis:100%}.IconGridComponent__cell:last-child{padding:24px 0 0 0}.IconGridComponent__cell:first-child{padding:0 0 0 0}.IconGridComponent__cell:first-child:last-child{-ms-flex-preferred-size:100%;flex-basis:100%}}@media(min-width:1281px){.IconGridComponent__cell{padding:40px 40px 0 40px;min-width:25%;-ms-flex-preferred-size:33.33%;flex-basis:33.33%}.IconGridComponent__cell:first-child,.IconGridComponent__cell:last-child{padding:40px 40px 0 40px}.IconGridComponent__cell:first-child:last-child,.IconGridComponent__cell:first-child:nth-last-child(2),.IconGridComponent__cell:first-child:nth-last-child(2)~.IconGridComponent__cell{min-width:25%;-ms-flex-preferred-size:33.33%;flex-basis:33.33%}}.IconGridComponent img{height:78px;width:78px}.component_form.icon_grid_components{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.component_form.icon_grid_components input[type=text]{width:100%}.component_form.icon_grid_components .icongrid_row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "d1a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WistiaVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8138");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WistiaVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WistiaVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WistiaVideo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d369":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.FullcolorCtaComponent{padding-left:24px;padding-right:24px;padding-top:80px;padding-bottom:80px;background-color:#fcaf17;margin-top:-20px}@media(min-width:1280px){.FullcolorCtaComponent{padding-left:56px;padding-right:56px}}.FullcolorCtaComponent__container{position:relative;width:100%}@media(min-width:1000px){.FullcolorCtaComponent__container{width:50%}}@media(min-width:1280px){.FullcolorCtaComponent__container{width:33%}}.FullcolorCtaComponent__copy p{padding-bottom:1em}.FullcolorCtaComponent h2{color:#434343}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d6bb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d084");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("a5a16804", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "dcab":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.ThreeCardComponent{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}@media(min-width:1024px){.ThreeCardComponent{-ms-flex-wrap:nowrap;flex-wrap:nowrap}}@media(max-width:1280px){.ThreeCardComponent{padding-left:24px;padding-right:24px}}.ThreeCardComponent article{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:20px;overflow:hidden;width:100%}@media(min-width:1024px){.ThreeCardComponent article{margin-bottom:0}}.ThreeCardComponent article:focus,.ThreeCardComponent article:hover{cursor:pointer}.ThreeCardComponent article:focus img,.ThreeCardComponent article:hover img{-webkit-transform:scale(1.1);transform:scale(1.1)}.ThreeCardComponent article:focus a,.ThreeCardComponent article:hover a{color:#fcaf17}.ThreeCardComponent article:focus .ThreeCardComponent__copy:after,.ThreeCardComponent article:hover .ThreeCardComponent__copy:after{opacity:1}@media(min-width:1024px){.ThreeCardComponent article:nth-of-type(2){margin-left:20px;margin-right:20px}}@media(min-width:1280px){.ThreeCardComponent article:nth-of-type(2){margin-left:40px;margin-right:40px}}.ThreeCardComponent .button,.ThreeCardComponent a{color:#fff}.ThreeCardComponent img{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;height:25vh;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;width:100%}.ThreeCardComponent__copy{background:#434343;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:20px;position:relative}.ThreeCardComponent__copy:after{background:#fcaf17;content:\"\";position:absolute;height:100%;width:20px;right:0;bottom:0;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "dddc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2017");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("37bb37e2", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e006":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d369");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1c7f39a0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "e2bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumnTallIcons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c635");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumnTallIcons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumnTallIcons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumnTallIcons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "eab1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hamburger.60756ce1.svg";

/***/ }),

/***/ "f590":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/right-arrow.2018e8dd.svg";

/***/ }),

/***/ "f677":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html{font-size:18px}body{font-family:Blender,Arial,Helvetica,sans-serif}blockquote,h1,h2,h3,h4,h5,h6,hr,p{margin:0 0 20px 0}h1{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1{font-size:48px}}@media(min-width:1280px){h1{font-size:56px}}@media(min-width:1440px){h1{font-size:78px}}h2{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2{font-size:40px}}h3{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3{font-size:36px;letter-spacing:1.1px}}h4{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4{font-size:28px}}h5{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5{font-size:20px}}p{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p{font-size:20px;line-height:28px}}a.button,button,input[type=submit]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header{font-size:16px;font-weight:900;line-height:24px}.navbar__link,a{font-size:14px;text-decoration:none}.navbar__link,.typography--nav,a{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav{font-size:16px}blockquote{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body{margin:0;padding:0}section{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section:first-of-type{padding-top:0}@media(min-width:768px){section{padding:20px 56px}}section.dark_grey{background-color:#2e2e2e;color:#fff}section.light_grey{background-color:#f5f5f5}.edge_to_edge{padding-left:0;padding-right:0}.no_vertical_padding{padding-top:0;padding-bottom:0}.h_space_padding{padding:0 56px}@media(max-width:768px){.h_space_padding{padding:0 24px}}.h_space_margin{margin:0 56px}@media(max-width:768px){.h_space_margin{margin:0 24px}}.h_space_margin-double{margin:0 112px}@media(max-width:768px){.h_space_margin-double{margin:0 48px}}.alerts{width:100%;z-index:9999;position:fixed;top:0}.alert{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success{background-color:#4caf50}.alert .info{background-color:#2196f3}.alert .warning{background-color:#ff9800}.alert .text{padding:20px;width:60%;margin:0 auto}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}.button,button,input[type=submit]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button:focus,.button:hover,button:focus,button:hover,input[type=submit]:focus,input[type=submit]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey,button.gold_grey,input[type=submit].gold_grey{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey:focus,.button.gold_grey:hover,button.gold_grey:focus,button.gold_grey:hover,input[type=submit].gold_grey:focus,input[type=submit].gold_grey:hover{background-color:#434343;color:#fff}.dark_grey .button,.dark_grey button,.dark_grey input[type=submit]{color:#fff}hr{margin-bottom:20px}a.arrow,button.arrow{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a:hover,button:hover{color:#fcaf17}.TwoColumnTallIconsComponent{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%}.TwoColumnTallIconsComponent .column{width:100%}@media(min-width:768px){.TwoColumnTallIconsComponent .column:first-child{width:75%}.TwoColumnTallIconsComponent .column:last-child{width:25%}}@media(min-width:1280px){.TwoColumnTallIconsComponent .column:first-child,.TwoColumnTallIconsComponent .column:last-child{width:50%}}.TwoColumnTallIconsComponent .column.image{display:none}@media(min-width:768px){.TwoColumnTallIconsComponent .column.image{display:block;background-size:cover;background-position:0;background-repeat:no-repeat}}@media(min-width:1280px){.TwoColumnTallIconsComponent .column.image{display:block;background-size:contain;background-position:100% 0;background-repeat:no-repeat}}.TwoColumnTallIconsComponent article{padding-bottom:40px}.TwoColumnTallIconsComponent .headline_icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:40px}.TwoColumnTallIconsComponent .headline_icon img{padding-right:40px}.TwoColumnTallIconsComponent.flipped{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "f6ef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayerToggles_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b549");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayerToggles_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayerToggles_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayerToggles_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f86d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Heavy.ttf) format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Book.ttf) format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Blender;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/blender/Blender-Thin.ttf) format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_3_0.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Din;src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot);src:url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.eot#iefix) format(\"embedded-opentype\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff2) format(\"woff2\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.woff) format(\"woff\"),url(https://maxar-marketing.s3.amazonaws.com/fonts/din/387176_2_0.ttf) format(\"truetype\");font-weight:100;font-style:normal}html[data-v-6b03a789]{font-size:18px}body[data-v-6b03a789]{font-family:Blender,Arial,Helvetica,sans-serif}blockquote[data-v-6b03a789],h1[data-v-6b03a789],h2[data-v-6b03a789],h3[data-v-6b03a789],h4[data-v-6b03a789],h5[data-v-6b03a789],h6[data-v-6b03a789],hr[data-v-6b03a789],p[data-v-6b03a789]{margin:0 0 20px 0}h1[data-v-6b03a789]{font-size:40px;line-height:1;font-weight:900;letter-spacing:1.5px;margin:0 0 40px 0;text-transform:uppercase}@media(min-width:768px){h1[data-v-6b03a789]{font-size:48px}}@media(min-width:1280px){h1[data-v-6b03a789]{font-size:56px}}@media(min-width:1440px){h1[data-v-6b03a789]{font-size:78px}}h2[data-v-6b03a789]{font-size:28px;font-weight:700;line-height:1;text-transform:uppercase}@media(min-width:768px){h2[data-v-6b03a789]{font-size:40px}}h3[data-v-6b03a789]{font-size:26px;font-weight:400;line-height:1}@media(min-width:768px){h3[data-v-6b03a789]{font-size:36px;letter-spacing:1.1px}}h4[data-v-6b03a789]{font-size:24px;font-weight:700;line-height:1}@media(min-width:768px){h4[data-v-6b03a789]{font-size:28px}}h5[data-v-6b03a789]{font-size:18px;font-weight:900;letter-spacing:1.1px;line-height:1}@media(min-width:768px){h5[data-v-6b03a789]{font-size:20px}}p[data-v-6b03a789]{font-family:Din,Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;text-rendering:optimizeSpeed}@media(min-width:1280px){p[data-v-6b03a789]{font-size:20px;line-height:28px}}a.button[data-v-6b03a789],button[data-v-6b03a789],input[type=submit][data-v-6b03a789]{font-family:Blender,Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1;text-transform:none}.navbar__categories__header[data-v-6b03a789]{font-size:16px;font-weight:900;line-height:24px}.navbar__link[data-v-6b03a789],a[data-v-6b03a789]{font-size:14px;text-decoration:none}.navbar__link[data-v-6b03a789],.typography--nav[data-v-6b03a789],a[data-v-6b03a789]{font-family:Blender,Arial,Helvetica,sans-serif;font-weight:900;line-height:24px;text-transform:uppercase}.typography--nav[data-v-6b03a789]{font-size:16px}blockquote[data-v-6b03a789]{font-size:28px;font-weight:700;line-height:28px;text-transform:uppercase}body[data-v-6b03a789]{margin:0;padding:0}section[data-v-6b03a789]{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:20px 24px}section[data-v-6b03a789]:first-of-type{padding-top:0}@media(min-width:768px){section[data-v-6b03a789]{padding:20px 56px}}section.dark_grey[data-v-6b03a789]{background-color:#2e2e2e;color:#fff}section.light_grey[data-v-6b03a789]{background-color:#f5f5f5}.edge_to_edge[data-v-6b03a789]{padding-left:0;padding-right:0}.no_vertical_padding[data-v-6b03a789]{padding-top:0;padding-bottom:0}.h_space_padding[data-v-6b03a789]{padding:0 56px}@media(max-width:768px){.h_space_padding[data-v-6b03a789]{padding:0 24px}}.h_space_margin[data-v-6b03a789]{margin:0 56px}@media(max-width:768px){.h_space_margin[data-v-6b03a789]{margin:0 24px}}.h_space_margin-double[data-v-6b03a789]{margin:0 112px}@media(max-width:768px){.h_space_margin-double[data-v-6b03a789]{margin:0 48px}}.alerts[data-v-6b03a789]{width:100%;z-index:9999;position:fixed;top:0}.alert[data-v-6b03a789]{color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.alert .success[data-v-6b03a789]{background-color:#4caf50}.alert .info[data-v-6b03a789]{background-color:#2196f3}.alert .warning[data-v-6b03a789]{background-color:#ff9800}.alert .text[data-v-6b03a789]{padding:20px;width:60%;margin:0 auto}.closebtn[data-v-6b03a789]{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn[data-v-6b03a789]:hover{color:#000}.button[data-v-6b03a789],button[data-v-6b03a789],input[type=submit][data-v-6b03a789]{background:transparent;border-width:2px;border-style:solid;border-color:#fcaf17;-webkit-box-sizing:border-box;box-sizing:border-box;color:#000;cursor:pointer;display:inline-block;text-align:center;text-decoration:none;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;padding:8px 32px}.button[data-v-6b03a789]:focus,.button[data-v-6b03a789]:hover,button[data-v-6b03a789]:focus,button[data-v-6b03a789]:hover,input[type=submit][data-v-6b03a789]:focus,input[type=submit][data-v-6b03a789]:hover{background-color:#fcaf17;color:#fff}.button.gold_grey[data-v-6b03a789],button.gold_grey[data-v-6b03a789],input[type=submit].gold_grey[data-v-6b03a789]{background-color:#fcaf17;border-color:#434343;color:#434343}.button.gold_grey[data-v-6b03a789]:focus,.button.gold_grey[data-v-6b03a789]:hover,button.gold_grey[data-v-6b03a789]:focus,button.gold_grey[data-v-6b03a789]:hover,input[type=submit].gold_grey[data-v-6b03a789]:focus,input[type=submit].gold_grey[data-v-6b03a789]:hover{background-color:#434343;color:#fff}.dark_grey .button[data-v-6b03a789],.dark_grey button[data-v-6b03a789],.dark_grey input[type=submit][data-v-6b03a789]{color:#fff}hr[data-v-6b03a789]{margin-bottom:20px}a.arrow[data-v-6b03a789],button.arrow[data-v-6b03a789]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#000;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}a[data-v-6b03a789]:hover,button[data-v-6b03a789]:hover{color:#fcaf17}.map[data-v-6b03a789]{margin:0 auto;position:relative;z-index:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Hero.vue?vue&type=template&id=c2d4ad44&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"HeroComponent edge_to_edge"},[_c('div',{staticClass:"HeroComponent__copy"},[_c('h1',[_vm._v(_vm._s(_vm.hero.heading))]),_c('p',[_vm._v(_vm._s(_vm.hero.subheading))]),(_vm.hero.buttonEnabled)?_c('a',{staticClass:"button HeroComponent__button",attrs:{"href":_vm.hero.buttonLink}},[_vm._v(_vm._s(_vm.hero.buttonText))]):_vm._e()]),_c('div',{staticClass:"HeroComponent__image",style:(("background-image: url('" + (_vm.hero.backgroundImageUrl) + "')"))})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Hero.vue?vue&type=template&id=c2d4ad44&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Hero.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Herovue_type_script_lang_js_ = ({
  props: ["hero"]
});
// CONCATENATED MODULE: ./src/components/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Hero.vue?vue&type=style&index=0&lang=scss&
var Herovue_type_style_index_0_lang_scss_ = __webpack_require__("2a73");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Hero.vue






/* normalize component */

var component = normalizeComponent(
  components_Herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Hero = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HeadlineCopy.vue?vue&type=template&id=47bd4158&
var HeadlineCopyvue_type_template_id_47bd4158_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"HeadlineCopyComponent"},[_c('div',[_c('h2',{class:_vm.headlineCopy.copyEnabled ? '' : 'rule'},[_vm._v(_vm._s(_vm.headlineCopy.heading))]),(_vm.headlineCopy.copyEnabled)?_c('p',{staticClass:"copy"},[_vm._v(_vm._s(_vm.headlineCopy.copy))]):_vm._e(),(_vm.headlineCopy.buttonEnabled)?_c('a',{staticClass:"button",attrs:{"href":_vm.headlineCopy.buttonLink,"target":_vm.headlineCopy.buttonExternal ? '_blank' : ''}},[_vm._v(_vm._s(_vm.headlineCopy.buttonText))]):_vm._e()])])}
var HeadlineCopyvue_type_template_id_47bd4158_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/HeadlineCopy.vue?vue&type=template&id=47bd4158&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HeadlineCopy.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeadlineCopyvue_type_script_lang_js_ = ({
  props: ["headlineCopy"]
});
// CONCATENATED MODULE: ./src/components/HeadlineCopy.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeadlineCopyvue_type_script_lang_js_ = (HeadlineCopyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/HeadlineCopy.vue?vue&type=style&index=0&lang=scss&
var HeadlineCopyvue_type_style_index_0_lang_scss_ = __webpack_require__("c002");

// CONCATENATED MODULE: ./src/components/HeadlineCopy.vue






/* normalize component */

var HeadlineCopy_component = normalizeComponent(
  components_HeadlineCopyvue_type_script_lang_js_,
  HeadlineCopyvue_type_template_id_47bd4158_render,
  HeadlineCopyvue_type_template_id_47bd4158_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HeadlineCopy = (HeadlineCopy_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MasonryGrid.vue?vue&type=template&id=77b9ab20&
var MasonryGridvue_type_template_id_77b9ab20_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"MasonryGridComponent"},[_c('div',{staticClass:"MasonryGridComponent__featured"},[_c('a',{staticClass:"MasonryGridComponent__card",attrs:{"href":_vm.masonryGrid.cards[0].link,"target":_vm.masonryGrid.cards[0].linkIsExternal ? '_blank' : ''}},[_c('img',{attrs:{"src":_vm.masonryGrid.cards[0].imageUrl}}),_c('div',{staticClass:"MasonryGridComponent__card__copy"},[_c('h3',[_vm._v(_vm._s(_vm.masonryGrid.cards[0].heading))]),_c('div',{domProps:{"innerHTML":_vm._s(_vm.masonryGrid.cards[0].copy)}}),_vm._v(" "+_vm._s(_vm.masonryGrid.cards[0].linkText)+" ")])])]),_c('div',{staticClass:"MasonryGridComponent__right-column"},_vm._l((_vm.rightColumnCards),function(card,index){return _c('a',{key:card.link + index,staticClass:"MasonryGridComponent__card",attrs:{"href":card.link,"target":card.linkIsExternal? '_blank' : ''}},[_c('img',{attrs:{"src":card.imageUrl}}),_c('div',{staticClass:"MasonryGridComponent__card__copy"},[_c('h3',[_vm._v(_vm._s(card.heading))]),_c('div',{domProps:{"innerHTML":_vm._s(card.copy )}}),_vm._v(" "+_vm._s(card.linkText)+" ")])])}),0)])}
var MasonryGridvue_type_template_id_77b9ab20_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MasonryGrid.vue?vue&type=template&id=77b9ab20&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MasonryGrid.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MasonryGridvue_type_script_lang_js_ = ({
  computed: {
    rightColumnCards: function rightColumnCards() {
      return this.masonryGrid.cards.slice(1);
    }
  },
  props: ["masonryGrid"]
});
// CONCATENATED MODULE: ./src/components/MasonryGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MasonryGridvue_type_script_lang_js_ = (MasonryGridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/MasonryGrid.vue?vue&type=style&index=0&lang=scss&
var MasonryGridvue_type_style_index_0_lang_scss_ = __webpack_require__("5af8");

// CONCATENATED MODULE: ./src/components/MasonryGrid.vue






/* normalize component */

var MasonryGrid_component = normalizeComponent(
  components_MasonryGridvue_type_script_lang_js_,
  MasonryGridvue_type_template_id_77b9ab20_render,
  MasonryGridvue_type_template_id_77b9ab20_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MasonryGrid = (MasonryGrid_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ThreeQuarters.vue?vue&type=template&id=3d53f066&
var ThreeQuartersvue_type_template_id_3d53f066_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"ThreeQuartersComponent edge_to_edge"},[_c('div',{staticClass:"three_quarters__col"},[_c('div',{staticClass:"three_quarters__col-img"},[_c('img',{attrs:{"src":_vm.threeQuarters.imageUrl}})])]),_c('div',{staticClass:"three_quarters__col"},[_c('div',{staticClass:"three_quarters__col-text"},[_c('h2',[_vm._v(_vm._s(_vm.threeQuarters.headline))]),(_vm.threeQuarters.subheadEnabled)?_c('h2',[_vm._v(_vm._s(_vm.threeQuarters.subhead))]):_vm._e(),_c('div',{staticClass:"copy"},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.threeQuarters.copy)}}),(_vm.threeQuarters.buttonEnabled)?_c('a',{staticClass:"button",attrs:{"href":_vm.threeQuarters.buttonLink,"target":_vm.threeQuarters.linkIsExternal ? '_blank' : ''}},[_vm._v(_vm._s(_vm.threeQuarters.buttonText))]):_vm._e()])])])])}
var ThreeQuartersvue_type_template_id_3d53f066_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ThreeQuarters.vue?vue&type=template&id=3d53f066&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ThreeQuarters.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ThreeQuartersvue_type_script_lang_js_ = ({
  props: ["threeQuarters"]
});
// CONCATENATED MODULE: ./src/components/ThreeQuarters.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ThreeQuartersvue_type_script_lang_js_ = (ThreeQuartersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ThreeQuarters.vue?vue&type=style&index=0&lang=scss&
var ThreeQuartersvue_type_style_index_0_lang_scss_ = __webpack_require__("0961");

// CONCATENATED MODULE: ./src/components/ThreeQuarters.vue






/* normalize component */

var ThreeQuarters_component = normalizeComponent(
  components_ThreeQuartersvue_type_script_lang_js_,
  ThreeQuartersvue_type_template_id_3d53f066_render,
  ThreeQuartersvue_type_template_id_3d53f066_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ThreeQuarters = (ThreeQuarters_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TwoColumn.vue?vue&type=template&id=ff5d67d8&
var TwoColumnvue_type_template_id_ff5d67d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"TwoColumnComponent edge_to_edge"},[_c('div',{staticClass:"two-column__col"},[_c('div',{staticClass:"two-column__col-text"},[_c('h4',[_vm._v(_vm._s(_vm.twoColumn.headline))]),(_vm.twoColumn.subheadEnabled)?_c('h5',[_vm._v(_vm._s(_vm.twoColumn.subhead))]):_vm._e(),_c('div',{staticClass:"copy"},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.twoColumn.copy)}}),(_vm.twoColumn.buttonEnabled)?_c('a',{staticClass:"button",attrs:{"href":_vm.twoColumn.buttonLink,"target":_vm.twoColumn.buttonIsExternal ? '_blank' : ''}},[_vm._v(_vm._s(_vm.twoColumn.buttonText))]):_vm._e()])])]),_c('div',{staticClass:"two-column__col"},[_c('div',{staticClass:"two-column__col-img",style:('background-image: url(' + _vm.twoColumn.imageUrl + ')')})])])}
var TwoColumnvue_type_template_id_ff5d67d8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TwoColumn.vue?vue&type=template&id=ff5d67d8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TwoColumn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TwoColumnvue_type_script_lang_js_ = ({
  props: ["twoColumn"]
});
// CONCATENATED MODULE: ./src/components/TwoColumn.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TwoColumnvue_type_script_lang_js_ = (TwoColumnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/TwoColumn.vue?vue&type=style&index=0&lang=scss&
var TwoColumnvue_type_style_index_0_lang_scss_ = __webpack_require__("4fa6");

// CONCATENATED MODULE: ./src/components/TwoColumn.vue






/* normalize component */

var TwoColumn_component = normalizeComponent(
  components_TwoColumnvue_type_script_lang_js_,
  TwoColumnvue_type_template_id_ff5d67d8_render,
  TwoColumnvue_type_template_id_ff5d67d8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TwoColumn = (TwoColumn_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MaxarLogo.vue?vue&type=template&id=2850b386&
var MaxarLogovue_type_template_id_2850b386_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"228","height":"41","viewBox":"0 0 228 41"}},[_c('g',{attrs:{"data-name":"Group 900"}},[_c('path',{attrs:{"data-name":"Path 512","d":"M130 40.999h9v-9l-32-32h-9v9l11 12-11 11v9h9l11-11z","fill":"#fdb913"}}),_c('g',{attrs:{"data-name":"Group 899"}},[_c('path',{attrs:{"data-name":"Rectangle 1104","fill":"#fdb913","d":"M128-.001h11v11h-11z"}})])]),_c('path',{attrs:{"data-name":"Path 513","d":"M174 33l4 8h8v-9L172 1V0h-12v1l-15 31v9h9l4-8zm-8-22l5 13h-10z","fill":"#fdb913"}}),_c('path',{attrs:{"data-name":"Path 514","d":"M79 33l4 8h9v-9L77 1V0H65v1L51 32v9h8l4-8zm-8-22l5 13H66z","fill":"#fdb913"}}),_c('g',{attrs:{"data-name":"Group 901","fill":"#fdb913"}},[_c('path',{attrs:{"data-name":"Path 515","d":"M207 25.999l13 15h7v-8l-7-8 1-1a10.792 10.792 0 004-3 12.494 12.494 0 003-8 13.41 13.41 0 00-5-10c-2.619-2.158-5.728-3-10-3h-20v41h10v-15zm-4-9v-8h11c2.034 0 3 1.966 3 4s-.966 4-3 4h-11z"}}),_c('path',{attrs:{"data-name":"Path 516","d":"M34 40.999h10v-41H33l-1 1-10 17-10-17-1-1H0v41h10v-21l8 13h8l8-13z"}})])])}
var MaxarLogovue_type_template_id_2850b386_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MaxarLogo.vue?vue&type=template&id=2850b386&

// CONCATENATED MODULE: ./src/components/MaxarLogo.vue

var script = {}


/* normalize component */

var MaxarLogo_component = normalizeComponent(
  script,
  MaxarLogovue_type_template_id_2850b386_render,
  MaxarLogovue_type_template_id_2850b386_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MaxarLogo = (MaxarLogo_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ThreeCard.vue?vue&type=template&id=401275ea&
var ThreeCardvue_type_template_id_401275ea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"ThreeCardComponent"},_vm._l((_vm.threeCard.cards),function(card,index){return _c('article',{key:card.link + index,on:{"click":function($event){return _vm.pretendToBeALink(card)}}},[_c('img',{attrs:{"src":card.imageUrl}}),_c('div',{staticClass:"ThreeCardComponent__copy"},[_c('div',[_c('h4',[_vm._v(_vm._s(card.heading))]),_c('div',{domProps:{"innerHTML":_vm._s(card.copy)}})]),_c('a',{attrs:{"href":card.link,"target":card.linkIsExternal ? '_blank' : ''}},[_vm._v("Learn more")])])])}),0)}
var ThreeCardvue_type_template_id_401275ea_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ThreeCard.vue?vue&type=template&id=401275ea&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.link.js
var es_string_link = __webpack_require__("9911");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ThreeCard.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ThreeCardvue_type_script_lang_js_ = ({
  props: ["threeCard"],
  methods: {
    pretendToBeALink: function pretendToBeALink(card) {
      if (card.linkIsExternal) {
        window.open(card.link, "_blank");
      } else {
        window.open(card.link, "_self");
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/ThreeCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ThreeCardvue_type_script_lang_js_ = (ThreeCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ThreeCard.vue?vue&type=style&index=0&lang=scss&
var ThreeCardvue_type_style_index_0_lang_scss_ = __webpack_require__("a9da");

// CONCATENATED MODULE: ./src/components/ThreeCard.vue






/* normalize component */

var ThreeCard_component = normalizeComponent(
  components_ThreeCardvue_type_script_lang_js_,
  ThreeCardvue_type_template_id_401275ea_render,
  ThreeCardvue_type_template_id_401275ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ThreeCard = (ThreeCard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RevealingStatCards.vue?vue&type=template&id=1019dce3&
var RevealingStatCardsvue_type_template_id_1019dce3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"RevealingStatCardsComponent"},_vm._l((_vm.revealingStatCards.cards),function(card){return _c('div',{key:card.imageUrl,staticClass:"RevealingStatCardsComponent__stat"},[_c('div',{staticClass:"RevealingStatCardsComponent__stat__image"},[_c('img',{attrs:{"src":card.imageUrl}})]),_c('div',{staticClass:"RevealingStatCardsComponent__stat__copy"},[_c('h3',[_vm._v(_vm._s(card.question))])]),_c('div',{staticClass:"RevealingStatCardsComponent__stat__reveal"},[_c('p',[_vm._v(_vm._s(card.answer))])])])}),0)}
var RevealingStatCardsvue_type_template_id_1019dce3_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RevealingStatCards.vue?vue&type=template&id=1019dce3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RevealingStatCards.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var RevealingStatCardsvue_type_script_lang_js_ = ({
  props: ["revealingStatCards"]
});
// CONCATENATED MODULE: ./src/components/RevealingStatCards.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RevealingStatCardsvue_type_script_lang_js_ = (RevealingStatCardsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/RevealingStatCards.vue?vue&type=style&index=0&lang=scss&
var RevealingStatCardsvue_type_style_index_0_lang_scss_ = __webpack_require__("ceba");

// CONCATENATED MODULE: ./src/components/RevealingStatCards.vue






/* normalize component */

var RevealingStatCards_component = normalizeComponent(
  components_RevealingStatCardsvue_type_script_lang_js_,
  RevealingStatCardsvue_type_template_id_1019dce3_render,
  RevealingStatCardsvue_type_template_id_1019dce3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RevealingStatCards = (RevealingStatCards_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Carousel.vue?vue&type=template&id=17d77ec0&
var Carouselvue_type_template_id_17d77ec0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{on:{"!touchstart":function($event){return _vm.handleTouchstart($event)},"!touchend":function($event){return _vm.handleTouchend($event)}}},[(_vm.carousel.sharedHeadingEnabled)?_c('div',{staticClass:"sharedHeading"},[_c('h2',[_vm._v(_vm._s(_vm.carousel.sharedHeading))])]):_vm._e(),_c('div',{staticClass:"CarouselComponent"},[_c('div',{staticClass:"images"},[_c('div',{staticClass:"slider"},_vm._l((_vm.carousel.slides),function(slide,index){return _c('div',{key:slide.imageUrl,class:index === _vm.currentSlide ? 'slide active' : 'slide'},[_c('img',{attrs:{"src":slide.imageUrl}})])}),0)]),_c('div',{staticClass:"copy"},[_c('div',{staticClass:"indicators"},_vm._l((_vm.carousel.slides),function(slide,index){return _c('button',{key:slide.heading,class:index === _vm.currentSlide ? 'active indicator navbar__link ' : 'indicator navbar__link',attrs:{"data-index":index},on:{"click":function($event){_vm.currentSlide = index}}},[_vm._v(_vm._s(index + 1))])}),0),_c('div',{staticClass:"slider"},_vm._l((_vm.carousel.slides),function(slide,index){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(index === _vm.currentSlide),expression:"index === currentSlide"}],key:slide.buttonLink + index,class:index === _vm.currentSlide ? 'slide active' : 'slide',attrs:{"transition":"carousel"}},[_c('h2',[_vm._v(_vm._s(slide.heading))]),_c('div',{domProps:{"innerHTML":_vm._s(slide.body)}}),(slide.buttonEnabled)?_c('a',{staticClass:"button",attrs:{"href":slide.buttonLink,"target":slide.buttonIsExternal ? '_blank' : '_self'}},[_vm._v(_vm._s(slide.buttonText))]):_vm._e()])}),0),_c('div',{staticClass:"arrows"},[_c('button',{staticClass:"previousButton",style:(("background-image: url('" + (__webpack_require__("c012")) + "'); background-size: contain; background-repeat: no-repeat")),on:{"click":_vm.decrementCurrentSlide}},[_vm._v("Previous")]),_c('button',{staticClass:"nextButton",style:(("background-image: url('" + (__webpack_require__("f590")) + "'); background-size: contain; background-repeat: no-repeat")),on:{"click":_vm.incrementCurrentSlide}},[_vm._v("Next")])])])])])}
var Carouselvue_type_template_id_17d77ec0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Carousel.vue?vue&type=template&id=17d77ec0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Carousel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Carouselvue_type_script_lang_js_ = ({
  props: ["carousel"],
  data: function data() {
    return {
      currentSlide: 0,
      swipePixelLength: 100,
      touchStartLocation: null
    };
  },
  methods: {
    incrementCurrentSlide: function incrementCurrentSlide() {
      if (this.currentSlide < this.carousel.slides.length - 1) {
        this.currentSlide = this.currentSlide + 1;
      }
    },
    decrementCurrentSlide: function decrementCurrentSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide = this.currentSlide - 1;
      }
    },
    handleTouchstart: function handleTouchstart(event) {
      this.touchStartLocation = event.changedTouches[0].pageX;
    },
    handleTouchend: function handleTouchend(event) {
      var touchEndLocation = event.changedTouches[0].pageX;

      if (touchEndLocation - this.touchStartLocation > this.swipePixelLength) {
        event.preventDefault();
        this.incrementCurrentSlide();
      } else if (this.touchStartLocation - touchEndLocation > Math.abs(this.swipePixelLength)) {
        event.preventDefault();
        this.decrementCurrentSlide();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Carouselvue_type_script_lang_js_ = (Carouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Carousel.vue?vue&type=style&index=0&lang=scss&
var Carouselvue_type_style_index_0_lang_scss_ = __webpack_require__("8cf1");

// CONCATENATED MODULE: ./src/components/Carousel.vue






/* normalize component */

var Carousel_component = normalizeComponent(
  components_Carouselvue_type_script_lang_js_,
  Carouselvue_type_template_id_17d77ec0_render,
  Carouselvue_type_template_id_17d77ec0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Carousel = (Carousel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FullColorCta.vue?vue&type=template&id=05da17d7&
var FullColorCtavue_type_template_id_05da17d7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"FullcolorCtaComponent"},[_c('div',{staticClass:"FullcolorCtaComponent__container"},[_c('h2',[_vm._v(_vm._s(_vm.fullColorCta.heading))]),_c('div',{staticClass:"FullcolorCtaComponent__copy"},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.fullColorCta.copy)}}),(_vm.fullColorCta.buttonEnabled)?_c('a',{staticClass:"button gold_grey FullcolorCtaComponent__button",attrs:{"href":_vm.fullColorCta.buttonLink,"target":_vm.fullColorCta.buttonExternal ? '_blank' : '_self'}},[_vm._v(_vm._s(_vm.fullColorCta.buttonText))]):_vm._e()])])])}
var FullColorCtavue_type_template_id_05da17d7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FullColorCta.vue?vue&type=template&id=05da17d7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FullColorCta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FullColorCtavue_type_script_lang_js_ = ({
  props: ["fullColorCta"]
});
// CONCATENATED MODULE: ./src/components/FullColorCta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FullColorCtavue_type_script_lang_js_ = (FullColorCtavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FullColorCta.vue?vue&type=style&index=0&lang=scss&
var FullColorCtavue_type_style_index_0_lang_scss_ = __webpack_require__("9052");

// CONCATENATED MODULE: ./src/components/FullColorCta.vue






/* normalize component */

var FullColorCta_component = normalizeComponent(
  components_FullColorCtavue_type_script_lang_js_,
  FullColorCtavue_type_template_id_05da17d7_render,
  FullColorCtavue_type_template_id_05da17d7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FullColorCta = (FullColorCta_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FeaturedResource.vue?vue&type=template&id=408b78c5&
var FeaturedResourcevue_type_template_id_408b78c5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"FeaturedResource"},[_c('h4',[_vm._v(_vm._s(_vm.featuredResource.title))]),_c('h5',[_vm._v(_vm._s(_vm.featuredResource.subtitle))]),_c('a',{staticClass:"navbar__link arrow",attrs:{"href":_vm.featuredResource.link,"target":_vm.featuredResource.linkExternal ? '_blank' : '_self'}},[_vm._v(_vm._s(_vm.featuredResource.linkText))])])}
var FeaturedResourcevue_type_template_id_408b78c5_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FeaturedResource.vue?vue&type=template&id=408b78c5&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FeaturedResource.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FeaturedResourcevue_type_script_lang_js_ = ({
  props: ["featuredResource"]
});
// CONCATENATED MODULE: ./src/components/FeaturedResource.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FeaturedResourcevue_type_script_lang_js_ = (FeaturedResourcevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FeaturedResource.vue?vue&type=style&index=0&lang=scss&
var FeaturedResourcevue_type_style_index_0_lang_scss_ = __webpack_require__("7222");

// CONCATENATED MODULE: ./src/components/FeaturedResource.vue






/* normalize component */

var FeaturedResource_component = normalizeComponent(
  components_FeaturedResourcevue_type_script_lang_js_,
  FeaturedResourcevue_type_template_id_408b78c5_render,
  FeaturedResourcevue_type_template_id_408b78c5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FeaturedResource = (FeaturedResource_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StatBlock.vue?vue&type=template&id=76062482&
var StatBlockvue_type_template_id_76062482_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"StatsComponent edge_to_edge"},[_c('div',{staticClass:"StatsComponent__image"},[_c('img',{attrs:{"src":_vm.statBlock.imageUrl}})]),_c('div',{staticClass:"StatsComponent__stats"},_vm._l((_vm.statBlock.stats),function(stat){return _c('div',{key:stat.stat,staticClass:"StatsComponent__stats__stat"},[_c('p',[_vm._v(_vm._s(stat.stat))]),_c('p',[_vm._v(_vm._s(stat.description))])])}),0)])}
var StatBlockvue_type_template_id_76062482_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/StatBlock.vue?vue&type=template&id=76062482&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StatBlock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var StatBlockvue_type_script_lang_js_ = ({
  props: ["statBlock"]
});
// CONCATENATED MODULE: ./src/components/StatBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_StatBlockvue_type_script_lang_js_ = (StatBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/StatBlock.vue?vue&type=style&index=0&lang=scss&
var StatBlockvue_type_style_index_0_lang_scss_ = __webpack_require__("5d97");

// CONCATENATED MODULE: ./src/components/StatBlock.vue






/* normalize component */

var StatBlock_component = normalizeComponent(
  components_StatBlockvue_type_script_lang_js_,
  StatBlockvue_type_template_id_76062482_render,
  StatBlockvue_type_template_id_76062482_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StatBlock = (StatBlock_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/IconBlock.vue?vue&type=template&id=e3f26cf0&
var IconBlockvue_type_template_id_e3f26cf0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"IconGridComponent"},[_c('div',{staticClass:"IconGridComponent__container icon__count_<%= enabled['true'] %>"},_vm._l((_vm.iconBlock.icons),function(icon){return _c('div',{key:icon.heading,staticClass:"IconGridComponent__cell"},[_c('img',{staticClass:"IconGridComponent__icon",attrs:{"src":icon.iconUrl}}),_c('h4',[_vm._v(_vm._s(icon.heading))]),(icon.copyEnabled)?_c('div',[_c('div',{domProps:{"innerHTML":_vm._s(icon.copy)}})]):_vm._e()])}),0)])}
var IconBlockvue_type_template_id_e3f26cf0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/IconBlock.vue?vue&type=template&id=e3f26cf0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/IconBlock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var IconBlockvue_type_script_lang_js_ = ({
  props: ["iconBlock"]
});
// CONCATENATED MODULE: ./src/components/IconBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_IconBlockvue_type_script_lang_js_ = (IconBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/IconBlock.vue?vue&type=style&index=0&lang=scss&
var IconBlockvue_type_style_index_0_lang_scss_ = __webpack_require__("732a");

// CONCATENATED MODULE: ./src/components/IconBlock.vue






/* normalize component */

var IconBlock_component = normalizeComponent(
  components_IconBlockvue_type_script_lang_js_,
  IconBlockvue_type_template_id_e3f26cf0_render,
  IconBlockvue_type_template_id_e3f26cf0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconBlock = (IconBlock_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TwoColumnTallIcons.vue?vue&type=template&id=5e5d384e&
var TwoColumnTallIconsvue_type_template_id_5e5d384e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"TwoColumnTallIconsComponent edge_to_edge"},[_c('div',{staticClass:"column"},_vm._l((_vm.twoColumnTallIcons.bullets),function(bullet){return _c('article',{key:bullet.heading,staticClass:"h_space_margin-double"},[_c('div',{staticClass:"headline_icon"},[_c('img',{attrs:{"src":bullet.iconUrl}}),_c('h4',[_vm._v(_vm._s(bullet.heading))])]),_c('div',{domProps:{"innerHTML":_vm._s(bullet.copy)}})])}),0),_c('div',{staticClass:"column image",style:(("background-image: url('" + (_vm.twoColumnTallIcons.imageUrl) + "')"))})])}
var TwoColumnTallIconsvue_type_template_id_5e5d384e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TwoColumnTallIcons.vue?vue&type=template&id=5e5d384e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TwoColumnTallIcons.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TwoColumnTallIconsvue_type_script_lang_js_ = ({
  props: ["twoColumnTallIcons"]
});
// CONCATENATED MODULE: ./src/components/TwoColumnTallIcons.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TwoColumnTallIconsvue_type_script_lang_js_ = (TwoColumnTallIconsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/TwoColumnTallIcons.vue?vue&type=style&index=0&lang=scss&
var TwoColumnTallIconsvue_type_style_index_0_lang_scss_ = __webpack_require__("e2bf");

// CONCATENATED MODULE: ./src/components/TwoColumnTallIcons.vue






/* normalize component */

var TwoColumnTallIcons_component = normalizeComponent(
  components_TwoColumnTallIconsvue_type_script_lang_js_,
  TwoColumnTallIconsvue_type_template_id_5e5d384e_render,
  TwoColumnTallIconsvue_type_template_id_5e5d384e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TwoColumnTallIcons = (TwoColumnTallIcons_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FullWidthHeightImage.vue?vue&type=template&id=f9e842c0&
var FullWidthHeightImagevue_type_template_id_f9e842c0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"FullWidthHeightImageComponent edge_to_edge"},[_c('img',{attrs:{"src":_vm.fullWidthHeightImage.imageUrl}})])}
var FullWidthHeightImagevue_type_template_id_f9e842c0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FullWidthHeightImage.vue?vue&type=template&id=f9e842c0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FullWidthHeightImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var FullWidthHeightImagevue_type_script_lang_js_ = ({
  props: ["fullWidthHeightImage"]
});
// CONCATENATED MODULE: ./src/components/FullWidthHeightImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FullWidthHeightImagevue_type_script_lang_js_ = (FullWidthHeightImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FullWidthHeightImage.vue?vue&type=style&index=0&lang=scss&
var FullWidthHeightImagevue_type_style_index_0_lang_scss_ = __webpack_require__("5439");

// CONCATENATED MODULE: ./src/components/FullWidthHeightImage.vue






/* normalize component */

var FullWidthHeightImage_component = normalizeComponent(
  components_FullWidthHeightImagevue_type_script_lang_js_,
  FullWidthHeightImagevue_type_template_id_f9e842c0_render,
  FullWidthHeightImagevue_type_template_id_f9e842c0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FullWidthHeightImage = (FullWidthHeightImage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WistiaVideo.vue?vue&type=template&id=329be616&
var WistiaVideovue_type_template_id_329be616_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"WistiaVideoComponent"},[_c('article',[_c('script',{attrs:{"src":("https://fast.wistia.com/embed/medias/" + (_vm.wistiaVideo.wistiaId) + ".jsonp"),"type":"application/javascript","async":""}}),_c('script',{attrs:{"src":"https://fast.wistia.com/assets/external/E-v1.js","type":"application/javascript","async":""}}),_c('div',{staticClass:"wistia_responsive_padding",staticStyle:{"padding":"56.25% 0 0 0","position":"relative"}},[_c('div',{staticClass:"wistia_responsive_wrapper",staticStyle:{"height":"100%","left":"0","position":"absolute","top":"0","width":"100%"}},[_c('div',{class:("wistia_embed wistia_async_" + (_vm.wistiaVideo.wistiaId) + " videoFoam=true"),staticStyle:{"height":"100%","position":"relative","width":"100%"}},[_c('div',{staticClass:"wistia_swatch",staticStyle:{"height":"100%","left":"0","opacity":"0","overflow":"hidden","position":"absolute","top":"0","transition":"opacity 200ms","width":"100%"}},[_c('img',{staticStyle:{"filter":"blur(5px)","height":"100%","object-fit":"contain","width":"100%"},attrs:{"src":("https://fast.wistia.com/embed/medias/" + (_vm.wistiaVideo.wistiaId) + "/swatch"),"alt":"","aria-hidden":"true","onload":"this.parentNode.style.opacity=1;"}})])])])])])])}
var WistiaVideovue_type_template_id_329be616_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/WistiaVideo.vue?vue&type=template&id=329be616&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WistiaVideo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var WistiaVideovue_type_script_lang_js_ = ({
  props: ["wistiaVideo"]
});
// CONCATENATED MODULE: ./src/components/WistiaVideo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WistiaVideovue_type_script_lang_js_ = (WistiaVideovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/WistiaVideo.vue?vue&type=style&index=0&lang=scss&
var WistiaVideovue_type_style_index_0_lang_scss_ = __webpack_require__("d1a1");

// CONCATENATED MODULE: ./src/components/WistiaVideo.vue






/* normalize component */

var WistiaVideo_component = normalizeComponent(
  components_WistiaVideovue_type_script_lang_js_,
  WistiaVideovue_type_template_id_329be616_render,
  WistiaVideovue_type_template_id_329be616_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var WistiaVideo = (WistiaVideo_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MultiLink.vue?vue&type=template&id=172d1006&
var MultiLinkvue_type_template_id_172d1006_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"MultilinkComponent"},_vm._l((_vm.multiLink.links),function(link){return _c('div',{key:link.link,staticClass:"MultilinkComponent__link"},[_c('p',{staticClass:"MultilinkComponent__link__title"},[_vm._v(_vm._s(link.heading))]),_c('div',{domProps:{"innerHTML":_vm._s(link.copy)}}),_c('a',{staticClass:"button",attrs:{"href":link.link,"target":link.isExternal ? '_blank' : '_self'}},[_vm._v("Learn more")])])}),0)}
var MultiLinkvue_type_template_id_172d1006_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MultiLink.vue?vue&type=template&id=172d1006&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MultiLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MultiLinkvue_type_script_lang_js_ = ({
  props: ["multiLink"]
});
// CONCATENATED MODULE: ./src/components/MultiLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MultiLinkvue_type_script_lang_js_ = (MultiLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/MultiLink.vue?vue&type=style&index=0&lang=scss&
var MultiLinkvue_type_style_index_0_lang_scss_ = __webpack_require__("b16e");

// CONCATENATED MODULE: ./src/components/MultiLink.vue






/* normalize component */

var MultiLink_component = normalizeComponent(
  components_MultiLinkvue_type_script_lang_js_,
  MultiLinkvue_type_template_id_172d1006_render,
  MultiLinkvue_type_template_id_172d1006_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MultiLink = (MultiLink_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar/Navbar.vue?vue&type=template&id=df3b6c60&
var Navbarvue_type_template_id_df3b6c60_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"applicationNavbar"},[_c('div',{staticClass:"navbg"}),_c('AnchorLinkOrNuxtLink',{attrs:{"to":"/"}},[_c('MaxarLogo',{staticClass:"navbar__brand"})],1),_c('button',{staticClass:"nav-mobile",style:(_vm.active ? _vm.closeIcon : _vm.hamburgerIcon),on:{"click":function($event){_vm.active = !_vm.active}}}),_c('div',{class:_vm.active ? 'navbar navbar--active' : 'navbar'},[_c('ul',{staticClass:"navbar__categories"},_vm._l((_vm.navbar.categories),function(category){return _c('li',{key:category.label,staticClass:"navbar__categories__list-item",attrs:{"tabindex":"0"},on:{"focus":function($event){return _vm.handleToggleActivePanel(category.label)}}},[(category.type === 'top-level')?_c('AnchorLinkOrNuxtLink',{staticClass:"navbar__categories__header",attrs:{"to":category.link,"target":category.isExternal ? '_blank' : '_self',"nuxt":category.nuxt}},[_vm._v(_vm._s(category.title))]):_vm._e(),(category.type==='single')?_c('SingleColumnPanel',{attrs:{"activePanel":_vm.activePanel,"category":category,"tabindex":"0"},on:{"toggleActive":_vm.handleToggleActivePanel}}):_vm._e(),(category.type==='multi')?_c('MultiColumnPanel',{attrs:{"activePanel":_vm.activePanel,"category":category,"tabindex":"0"},on:{"toggleActive":_vm.handleToggleActivePanel}}):_vm._e()],1)}),0)])],1)}
var Navbarvue_type_template_id_df3b6c60_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Navbar/Navbar.vue?vue&type=template&id=df3b6c60&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/utilities/AnchorLinkOrNuxtLink.vue?vue&type=template&id=5f3cc0e7&
var AnchorLinkOrNuxtLinkvue_type_template_id_5f3cc0e7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isNuxtLink)?_c('nuxt-link',{attrs:{"to":_vm.to,"target":_vm.target ? _vm.target : '_self'}},[_vm._t("default")],2):_c('a',{attrs:{"href":_vm.to,"target":_vm.target ? _vm.target : '_self'}},[_vm._t("default")],2)}
var AnchorLinkOrNuxtLinkvue_type_template_id_5f3cc0e7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/utilities/AnchorLinkOrNuxtLink.vue?vue&type=template&id=5f3cc0e7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/utilities/AnchorLinkOrNuxtLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AnchorLinkOrNuxtLinkvue_type_script_lang_js_ = ({
  props: ["target", "to"],
  computed: {
    isNuxtLink: function isNuxtLink() {
      return this.$nuxt && this.to.substring(0, 1) === "/";
    }
  }
});
// CONCATENATED MODULE: ./src/components/utilities/AnchorLinkOrNuxtLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var utilities_AnchorLinkOrNuxtLinkvue_type_script_lang_js_ = (AnchorLinkOrNuxtLinkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/utilities/AnchorLinkOrNuxtLink.vue





/* normalize component */

var AnchorLinkOrNuxtLink_component = normalizeComponent(
  utilities_AnchorLinkOrNuxtLinkvue_type_script_lang_js_,
  AnchorLinkOrNuxtLinkvue_type_template_id_5f3cc0e7_render,
  AnchorLinkOrNuxtLinkvue_type_template_id_5f3cc0e7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AnchorLinkOrNuxtLink = (AnchorLinkOrNuxtLink_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar/SingleColumnPanel.vue?vue&type=template&id=09d04006&
var SingleColumnPanelvue_type_template_id_09d04006_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navbar__single-col-panel"},[_c('span',{class:("navbar__categories__header " + (_vm.activePanel === _vm.category.label ? 'navbar__categories__header--active' : '')),on:{"keydown":_vm.handleKeydown,"mousedown":_vm.handleMouseDown}},[_vm._v(_vm._s(_vm.category.label))]),_c('div',{class:("navbar__single-col navbar__category " + (_vm.activePanel === _vm.category.label ? 'navbar__category--active' : ''))},[_c('h3',[_vm._v(_vm._s(_vm.category.label))]),_c('hr'),_c('ul',_vm._l((_vm.category.links),function(link){return _c('li',{key:link.link,staticClass:"navbar__category__item"},[_c('AnchorLinkOrNuxtLink',{staticClass:"navbar__link",attrs:{"to":link.link,"target":link.isExternal ? '_blank' : '_self',"nuxt":link.nuxt}},[_vm._v(_vm._s(link.label))])],1)}),0)])])}
var SingleColumnPanelvue_type_template_id_09d04006_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Navbar/SingleColumnPanel.vue?vue&type=template&id=09d04006&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar/SingleColumnPanel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SingleColumnPanelvue_type_script_lang_js_ = ({
  components: {
    AnchorLinkOrNuxtLink: AnchorLinkOrNuxtLink
  },
  methods: {
    handleKeydown: function handleKeydown(event) {
      var KEY_ENTER = 13;
      var KEY_SPACE = 32;

      switch (event.which) {
        case KEY_ENTER:
        case KEY_SPACE:
          {
            this.$emit("toggleActive", this.category.label);
          }
      }
    },
    handleMouseDown: function handleMouseDown() {
      this.$emit("toggleActive", this.category.label);
    }
  },
  props: ["category", "activePanel"]
});
// CONCATENATED MODULE: ./src/components/Navbar/SingleColumnPanel.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_SingleColumnPanelvue_type_script_lang_js_ = (SingleColumnPanelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Navbar/SingleColumnPanel.vue





/* normalize component */

var SingleColumnPanel_component = normalizeComponent(
  Navbar_SingleColumnPanelvue_type_script_lang_js_,
  SingleColumnPanelvue_type_template_id_09d04006_render,
  SingleColumnPanelvue_type_template_id_09d04006_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SingleColumnPanel = (SingleColumnPanel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar/MultiColumnPanel.vue?vue&type=template&id=15705d42&
var MultiColumnPanelvue_type_template_id_15705d42_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navbar__multi-col-panel"},[_c('span',{class:("navbar__categories__header " + (_vm.activePanel === _vm.category.label ? 'navbar__categories__header--active' : '')),on:{"keydown":_vm.handleKeydown,"mousedown":_vm.handleMouseDown}},[_vm._v(_vm._s(_vm.category.label))]),_c('ul',{class:("navbar__multi-col navbar__category " + (_vm.activePanel === _vm.category.label ? 'navbar__category--active' : ''))},[_c('h3',[_vm._v(_vm._s(_vm.category.label))]),_c('hr'),_vm._l((_vm.category.columns),function(column){return _c('li',{key:column.label},[_c('span',[_vm._v(_vm._s(column.label))]),_c('ul',{staticClass:"multi-col__category"},_vm._l((column.links),function(link){return _c('li',{key:link.link,staticClass:"multi-col__category__item"},[_c('AnchorLinkOrNuxtLink',{staticClass:"navbar__link",attrs:{"nuxt":link.nuxt,"to":link.link,"target":link.isExternal ? '_blank' : '_self'}},[_vm._v(_vm._s(link.label))])],1)}),0)])})],2)])}
var MultiColumnPanelvue_type_template_id_15705d42_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Navbar/MultiColumnPanel.vue?vue&type=template&id=15705d42&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar/MultiColumnPanel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MultiColumnPanelvue_type_script_lang_js_ = ({
  components: {
    AnchorLinkOrNuxtLink: AnchorLinkOrNuxtLink
  },
  methods: {
    handleKeydown: function handleKeydown(event) {
      var KEY_ENTER = 13;
      var KEY_SPACE = 32;

      switch (event.which) {
        case KEY_ENTER:
        case KEY_SPACE:
          {
            this.$emit("toggleActive", this.category.label);
          }
      }
    },
    handleMouseDown: function handleMouseDown() {
      this.$emit("toggleActive", this.category.label);
    }
  },
  props: ["category", "activePanel"]
});
// CONCATENATED MODULE: ./src/components/Navbar/MultiColumnPanel.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_MultiColumnPanelvue_type_script_lang_js_ = (MultiColumnPanelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Navbar/MultiColumnPanel.vue





/* normalize component */

var MultiColumnPanel_component = normalizeComponent(
  Navbar_MultiColumnPanelvue_type_script_lang_js_,
  MultiColumnPanelvue_type_template_id_15705d42_render,
  MultiColumnPanelvue_type_template_id_15705d42_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MultiColumnPanel = (MultiColumnPanel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar/Navbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      active: false,
      activePanel: null,
      closeIcon: "background-image: url('".concat(__webpack_require__("bf37"), "');  background-position: center; background-repeat: no-repeat; background-size: contain;"),
      hamburgerIcon: "background-image: url('".concat(__webpack_require__("eab1"), "'); background-position: center; background-repeat: no-repeat; background-size: contain;")
    };
  },
  components: {
    AnchorLinkOrNuxtLink: AnchorLinkOrNuxtLink,
    MaxarLogo: MaxarLogo,
    MultiColumnPanel: MultiColumnPanel,
    SingleColumnPanel: SingleColumnPanel
  },
  methods: {
    handleToggleActivePanel: function handleToggleActivePanel(emitter) {
      if (this.activePanel === emitter) {
        this.activePanel = null;
      } else {
        this.activePanel = emitter;
      }
    }
  },
  props: ["maxarBrandIsNuxtLink", "navbar"]
});
// CONCATENATED MODULE: ./src/components/Navbar/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navbar_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Navbar/Navbar.vue?vue&type=style&index=0&lang=scss&
var Navbarvue_type_style_index_0_lang_scss_ = __webpack_require__("7a06");

// CONCATENATED MODULE: ./src/components/Navbar/Navbar.vue






/* normalize component */

var Navbar_component = normalizeComponent(
  Navbar_Navbarvue_type_script_lang_js_,
  Navbarvue_type_template_id_df3b6c60_render,
  Navbarvue_type_template_id_df3b6c60_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Navbar = (Navbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HomeHero.vue?vue&type=template&id=f3d409ec&
var HomeHerovue_type_template_id_f3d409ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"HomeHeroComponent edge_to_edge"},[_c('div',{staticClass:"HomeHeroComponent__copy"},[_c('h1',[_vm._v(_vm._s(_vm.homeHero.heading))]),_c('p',[_vm._v(_vm._s(_vm.homeHero.subHeading))]),(_vm.homeHero.buttonEnabled)?_c('a',{staticClass:"button",attrs:{"href":_vm.homeHero.link,"target":_vm.homeHero.buttonIsExternal ? '_blank' : '_self'}},[_vm._v(_vm._s(_vm.homeHero.buttonText))]):_vm._e()]),_c('img',{attrs:{"src":_vm.homeHero.image}})])}
var HomeHerovue_type_template_id_f3d409ec_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/HomeHero.vue?vue&type=template&id=f3d409ec&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HomeHero.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HomeHerovue_type_script_lang_js_ = ({
  props: ["homeHero"]
});
// CONCATENATED MODULE: ./src/components/HomeHero.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomeHerovue_type_script_lang_js_ = (HomeHerovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/HomeHero.vue?vue&type=style&index=0&lang=scss&
var HomeHerovue_type_style_index_0_lang_scss_ = __webpack_require__("3d45");

// CONCATENATED MODULE: ./src/components/HomeHero.vue






/* normalize component */

var HomeHero_component = normalizeComponent(
  components_HomeHerovue_type_script_lang_js_,
  HomeHerovue_type_template_id_f3d409ec_render,
  HomeHerovue_type_template_id_f3d409ec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HomeHero = (HomeHero_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Maps/MaxarMap.vue?vue&type=template&id=6b03a789&scoped=true&
var MaxarMapvue_type_template_id_6b03a789_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"map",staticClass:"map",style:(("height: " + _vm.height + "vh; width: " + _vm.width + "%"))},[(_vm.config.layerToggles.enabled)?_c('LayerToggles',{attrs:{"toggles":_vm.config.layerToggles.toggles,"map":_vm.map}}):_vm._e()],1)}
var MaxarMapvue_type_template_id_6b03a789_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Maps/MaxarMap.vue?vue&type=template&id=6b03a789&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Maps/LayerToggles.vue?vue&type=template&id=e1473938&
var LayerTogglesvue_type_template_id_e1473938_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"toggles"},_vm._l((_vm.toggles),function(state){return _c('div',{key:state.name,staticClass:"toggleItem"},[_c('label',{staticClass:"label-container"},[_vm._v(_vm._s(state.label)+" "),_c('input',{attrs:{"id":state.name,"data-toggle-color":state.toggleColor,"name":"layer","type":"checkbox","checked":""},domProps:{"value":state.label},on:{"click":_vm.handleToggle}}),_c('span',{staticClass:"checkmark"})]),_c('br')])}),0)}
var LayerTogglesvue_type_template_id_e1473938_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Maps/LayerToggles.vue?vue&type=template&id=e1473938&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Maps/LayerToggles.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LayerTogglesvue_type_script_lang_js_ = ({
  props: {
    map: {
      type: Object,
      default: null
    },
    toggles: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleToggle: function handleToggle(event) {
      var _this = this;

      var name = event.target.id;
      var visibility = event.target.checked;

      if (visibility === true && this.map !== null) {
        this.toggles[name].layers.forEach(function (layer) {
          _this.map.setLayoutProperty(layer, 'visibility', 'visible');
        });
      } else if (visibility === false && this.map !== null) {
        this.toggles[name].layers.forEach(function (layer) {
          _this.map.setLayoutProperty(layer, 'visibility', 'none');
        });
      } else if (this.map === null) {
        console.warn('The map has not finished loading yet');
      } else {
        console.error('The visiblity property on the payload is not a boolean value');
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Maps/LayerToggles.vue?vue&type=script&lang=js&
 /* harmony default export */ var Maps_LayerTogglesvue_type_script_lang_js_ = (LayerTogglesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Maps/LayerToggles.vue?vue&type=style&index=0&lang=scss&
var LayerTogglesvue_type_style_index_0_lang_scss_ = __webpack_require__("f6ef");

// CONCATENATED MODULE: ./src/components/Maps/LayerToggles.vue






/* normalize component */

var LayerToggles_component = normalizeComponent(
  Maps_LayerTogglesvue_type_script_lang_js_,
  LayerTogglesvue_type_template_id_e1473938_render,
  LayerTogglesvue_type_template_id_e1473938_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LayerToggles = (LayerToggles_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Maps/MaxarMap.vue?vue&type=script&lang=js&



//
//
//
//
//
//

/* harmony default export */ var MaxarMapvue_type_script_lang_js_ = ({
  props: {
    config: {
      type: Object,
      default: null
    },
    height: {
      type: Number,
      default: 100
    },
    width: {
      type: Number,
      default: 100
    }
  },
  components: {
    LayerToggles: LayerToggles
  },
  data: function data() {
    return {
      map: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.map = new window.mapboxgl.Map(_objectSpread2({}, this.config.mapProperties, {
      container: this.$refs.map
    }));
    this.map.on("load", function () {
      if (_this.config.navigationControl.enabled) {
        var nav = new window.mapboxgl.NavigationControl({
          options: _this.config.navigationControl
        });

        _this.map.addControl(nav, _this.config.navigationControl.position);
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/Maps/MaxarMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var Maps_MaxarMapvue_type_script_lang_js_ = (MaxarMapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Maps/MaxarMap.vue?vue&type=style&index=0&id=6b03a789&lang=scss&scoped=true&
var MaxarMapvue_type_style_index_0_id_6b03a789_lang_scss_scoped_true_ = __webpack_require__("6282");

// CONCATENATED MODULE: ./src/components/Maps/MaxarMap.vue






/* normalize component */

var MaxarMap_component = normalizeComponent(
  Maps_MaxarMapvue_type_script_lang_js_,
  MaxarMapvue_type_template_id_6b03a789_scoped_true_render,
  MaxarMapvue_type_template_id_6b03a789_scoped_true_staticRenderFns,
  false,
  null,
  "6b03a789",
  null
  
)

/* harmony default export */ var MaxarMap = (MaxarMap_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cf1e39f0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Maps/MapNav.vue?vue&type=template&id=c7f83b14&
var MapNavvue_type_template_id_c7f83b14_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"mapNav"},[_c('router-link',{staticClass:"mapNav__brand__wrapper",attrs:{"to":"/"}},[_c('MaxarLogo',{staticClass:"mapNav__brand"})],1),_c('div',{staticClass:"mapNav__navbar"},[_c('ul',{staticClass:"mapNav__navbar__categories"},_vm._l((_vm.navbar.links),function(link){return _c('li',{key:link.title,staticClass:"mapNav__navbar__categories__list-item"},[_c('router-link',{staticClass:"mapNav__navbar__categories__header",attrs:{"to":link.path}},[_vm._v(_vm._s(link.title))])],1)}),0)])],1)}
var MapNavvue_type_template_id_c7f83b14_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Maps/MapNav.vue?vue&type=template&id=c7f83b14&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Maps/MapNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MapNavvue_type_script_lang_js_ = ({
  components: {
    MaxarLogo: MaxarLogo
  },
  props: ["navbar"]
});
// CONCATENATED MODULE: ./src/components/Maps/MapNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var Maps_MapNavvue_type_script_lang_js_ = (MapNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Maps/MapNav.vue?vue&type=style&index=0&lang=scss&
var MapNavvue_type_style_index_0_lang_scss_ = __webpack_require__("c0f9");

// CONCATENATED MODULE: ./src/components/Maps/MapNav.vue






/* normalize component */

var MapNav_component = normalizeComponent(
  Maps_MapNavvue_type_script_lang_js_,
  MapNavvue_type_template_id_c7f83b14_render,
  MapNavvue_type_template_id_c7f83b14_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapNav = (MapNav_component.exports);
// CONCATENATED MODULE: ./src/components/index.js

























var Maxar = {
  Hero: Hero,
  HeadlineCopy: HeadlineCopy,
  MasonryGrid: MasonryGrid,
  ThreeQuarters: ThreeQuarters,
  TwoColumn: TwoColumn,
  MaxarLogo: MaxarLogo,
  ThreeCard: ThreeCard,
  RevealingStatCards: RevealingStatCards,
  Carousel: Carousel,
  FullColorCta: FullColorCta,
  FeaturedResource: FeaturedResource,
  StatBlock: StatBlock,
  IconBlock: IconBlock,
  TwoColumnTallIcons: TwoColumnTallIcons,
  FullWidthHeightImage: FullWidthHeightImage,
  WistiaVideo: WistiaVideo,
  MultiLink: MultiLink,
  Navbar: Navbar,
  HomeHero: HomeHero,
  MaxarMap: MaxarMap,
  MapNav: MapNav
};
Object.keys(Maxar).forEach(function (name) {
  vue_runtime_esm["a" /* default */].component(name, Maxar[name]);
});
/* harmony default export */ var components = (Maxar);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
});
//# sourceMappingURL=maxar.umd.js.map