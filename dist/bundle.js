/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".resourceGen {\\n  border: 3px solid #eee;\\n  overflow: auto;\\n  text-align: center;\\n}\\n.resourceGen:not(:last-child) {\\n  margin-bottom: 2rem;\\n}\\n.resourceGen .resourceFlex {\\n  padding: 1rem 3rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n.resourceGen .resourceFlex .progressBar[value] {\\n  appearance: none;\\n  width: 70%;\\n  height: 1.65rem;\\n}\\n.resourceGen .resourceFlex .progressBar[value]::-webkit-progress-bar {\\n  background-color: #333;\\n  border: 2px solid #888;\\n}\\n.resourceGen .resourceFlex .progressBar[value]::-webkit-progress-value {\\n  transition: all linear 0.5s;\\n  background-color: #aaa;\\n}\\n.resourceGen .resourceFlex .craftBtn {\\n  padding: 1rem 2rem;\\n  color: #ddd;\\n  background-color: #222;\\n  border: none;\\n  font-size: 1.5rem;\\n  float: right;\\n  transition: all 0.2s;\\n}\\n.resourceGen .resourceFlex .craftBtn:hover {\\n  background-color: #3c3c3c;\\n}\\n.resourceGen .resourceFlex .craftBtn:hover {\\n  background-color: #444;\\n}\\n.resourceGen .resourceFlex .amountDisplay {\\n  font-size: 1.5rem;\\n  color: #ddd;\\n  line-height: 8rem;\\n}\\n.resourceGen .resourceFlex .resName {\\n  font-size: 2rem;\\n  color: #ddd;\\n}\\n.resourceGen .resourceFlex .resourceIcon {\\n  width: 4rem;\\n}\\n.resourceGen .dropDownArrow {\\n  width: 4rem;\\n  margin: -2rem auto 1rem auto;\\n  height: 2rem;\\n  cursor: pointer;\\n  transition: all 0.3s;\\n}\\n.resourceGen .additionalInfo {\\n  width: 100%;\\n  height: 0;\\n  overflow: hidden;\\n  transition: all 0.5s ease-in-out;\\n}\\n.resourceGen .additionalInfo .infoPart {\\n  width: 50%;\\n  height: 90%;\\n}\\n.resourceGen .additionalInfo .infoPart:first-child {\\n  border-right: 1px solid #999;\\n}\\n.resourceGen .additionalInfo .infoPart .autoBtn {\\n  padding: 1rem 2rem;\\n  color: #ddd;\\n  background-color: #222;\\n  border: none;\\n  font-size: 2rem;\\n  margin-bottom: 1rem;\\n  transition: all 0.3s;\\n}\\n.resourceGen .additionalInfo .infoPart .autoBtn:hover {\\n  background-color: #3c3c3c;\\n}\\n.resourceGen .additionalInfo .infoPart .autoBtn:not(:last-of-type) {\\n  margin-right: 2rem;\\n}\\n.resourceGen .additionalInfo .infoPart .automatonDisplay {\\n  font-size: 1.5rem;\\n  padding: 1rem 2rem;\\n}\\n\\nhtml {\\n  background-color: black;\\n  color: #eee;\\n  font-size: 62.5%;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\nbody {\\n  margin-bottom: 3rem;\\n}\\n\\n.container {\\n  width: 90%;\\n  margin: auto;\\n  margin-top: 2rem;\\n}\\n\\n::-webkit-scrollbar {\\n  width: 1.5rem;\\n}\\n\\n::-webkit-scrollbar-track {\\n  background-color: #222;\\n}\\n\\n::-webkit-scrollbar-thumb {\\n  background-color: #001800;\\n}\\n\\n.notransition {\\n  transition: none !important;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://the_machine/./src/scss/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://the_machine/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://the_machine/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/svg/down_arrow.svg":
/*!********************************!*\
  !*** ./src/svg/down_arrow.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<?xml version=\\\"1.0\\\" encoding=\\\"iso-8859-1\\\"?>\\r\\n<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\\r\\n<svg version=\\\"1.1\\\" id=\\\"Layer_1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\"\\r\\n\\t viewBox=\\\"0 0 330 330\\\" style=\\\"enable-background:new 0 0 330 330;\\\" xml:space=\\\"preserve\\\">\\r\\n<path id=\\\"XMLID_225_\\\" d=\\\"M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393\\r\\n\\tc-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393\\r\\n\\ts7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z\\\"/>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n</svg>\\r\\n\");\n\n//# sourceURL=webpack://the_machine/./src/svg/down_arrow.svg?");

/***/ }),

/***/ "./src/svg/wood.svg":
/*!**************************!*\
  !*** ./src/svg/wood.svg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<?xml version=\\\"1.0\\\" encoding=\\\"iso-8859-1\\\"?>\\r\\n<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\\r\\n<svg version=\\\"1.1\\\" id=\\\"Layer_1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\"\\r\\n\\t viewBox=\\\"0 0 512 512\\\" style=\\\"enable-background:new 0 0 512 512;\\\" xml:space=\\\"preserve\\\">\\r\\n<g>\\r\\n\\t<g>\\r\\n\\t\\t<g>\\r\\n\\t\\t\\t<path d=\\\"M145.067,162.133c4.719,0,8.533-3.814,8.533-8.533c0-4.71,3.823-8.533,8.533-8.533c4.719,0,8.533-3.814,8.533-8.533\\r\\n\\t\\t\\t\\tS166.852,128,162.133,128c-14.114,0-25.6,11.486-25.6,25.6C136.533,158.319,140.348,162.133,145.067,162.133z\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M59.733,332.8c-14.114,0-25.6,11.486-25.6,25.6c0,4.719,3.814,8.533,8.533,8.533s8.533-3.814,8.533-8.533\\r\\n\\t\\t\\t\\tc0-4.71,3.823-8.533,8.533-8.533c4.719,0,8.533-3.814,8.533-8.533S64.452,332.8,59.733,332.8z\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M162.133,332.8c-14.114,0-25.6,11.486-25.6,25.6c0,4.719,3.814,8.533,8.533,8.533s8.533-3.814,8.533-8.533\\r\\n\\t\\t\\t\\tc0-4.71,3.823-8.533,8.533-8.533c4.719,0,8.533-3.814,8.533-8.533S166.852,332.8,162.133,332.8z\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M204.8,230.4c-14.114,0-25.6,11.486-25.6,25.6c0,4.719,3.814,8.533,8.533,8.533s8.533-3.814,8.533-8.533\\r\\n\\t\\t\\t\\tc0-4.71,3.823-8.533,8.533-8.533c4.719,0,8.533-3.814,8.533-8.533S209.519,230.4,204.8,230.4z\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M324.267,273.067c0,4.719,3.814,8.533,8.533,8.533H384c4.719,0,8.533-3.814,8.533-8.533c0-4.719-3.814-8.533-8.533-8.533\\r\\n\\t\\t\\t\\th-51.2C328.081,264.533,324.267,268.348,324.267,273.067z\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M341.333,230.4c-4.719,0-8.533,3.814-8.533,8.533s3.814,8.533,8.533,8.533h8.533c4.719,0,8.533-3.814,8.533-8.533\\r\\n\\t\\t\\t\\ts-3.814-8.533-8.533-8.533H341.333z\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M264.533,332.8c-14.114,0-25.6,11.486-25.6,25.6c0,4.719,3.814,8.533,8.533,8.533S256,363.119,256,358.4\\r\\n\\t\\t\\t\\tc0-4.71,3.823-8.533,8.533-8.533c4.719,0,8.533-3.814,8.533-8.533S269.252,332.8,264.533,332.8z\\\"/>\\r\\n\\t\\t\\t<path d=\\\"M477.867,366.933h33.451c0.401-2.799,0.683-5.632,0.683-8.533c0-2.901-0.282-5.734-0.683-8.533h-67.584\\r\\n\\t\\t\\t\\tc-4.719,0-8.533-3.814-8.533-8.533s3.814-8.533,8.533-8.533h62.421c-9.617-20.147-30.123-34.133-53.888-34.133h-18.014\\r\\n\\t\\t\\t\\tc6.281-6.135,11.162-13.653,14.268-22.033c0.102-0.23,0.162-0.461,0.247-0.7c2.227-6.246,3.499-12.937,3.499-19.934\\r\\n\\t\\t\\t\\tc0-6.997-1.271-13.687-3.499-19.934c-0.085-0.239-0.145-0.469-0.256-0.7c-8.422-22.784-30.302-39.1-55.979-39.1h-1.178\\r\\n\\t\\t\\t\\tc5.043-4.924,9.327-10.633,12.399-17.067h-28.288c-4.719,0-8.533-3.814-8.533-8.533s3.814-8.533,8.533-8.533h33.451\\r\\n\\t\\t\\t\\tc0.401-2.799,0.683-5.632,0.683-8.533c0-2.901-0.282-5.734-0.683-8.533h-67.584c-4.719,0-8.533-3.814-8.533-8.533\\r\\n\\t\\t\\t\\ts3.814-8.533,8.533-8.533h62.421c-9.617-20.147-30.123-34.133-53.888-34.133H162.133c-32.93,0-59.733,26.803-59.733,59.733\\r\\n\\t\\t\\t\\tc0,19.516,9.446,36.821,23.97,47.727c-7.347-3.234-15.445-5.06-23.97-5.06c-32.93,0-59.733,26.803-59.733,59.733\\r\\n\\t\\t\\t\\tc0,16.734,6.938,31.863,18.065,42.718c-0.333-0.009-0.657-0.051-0.998-0.051C26.803,298.667,0,325.47,0,358.4\\r\\n\\t\\t\\t\\ts26.803,59.733,59.733,59.733h102.4h102.4h187.733c23.765,0,44.271-13.986,53.888-34.133h-28.288\\r\\n\\t\\t\\t\\tc-4.719,0-8.533-3.814-8.533-8.533S473.148,366.933,477.867,366.933z M392.533,213.333c13.884,0,26.121,6.767,33.911,17.067H384\\r\\n\\t\\t\\t\\tc-4.719,0-8.533,3.814-8.533,8.533s3.814,8.533,8.533,8.533h50.338c0.563,2.756,0.862,5.615,0.862,8.533\\r\\n\\t\\t\\t\\tc0,2.918-0.299,5.777-0.862,8.533h-16.205c-4.719,0-8.533,3.814-8.533,8.533c0,4.719,3.814,8.533,8.533,8.533h8.311\\r\\n\\t\\t\\t\\tc-7.791,10.3-20.028,17.067-33.911,17.067h-128h-17.963c0.085-0.085,0.154-0.179,0.239-0.265c0.631-0.623,1.22-1.306,1.826-1.963\\r\\n\\t\\t\\t\\tc0.7-0.76,1.417-1.493,2.082-2.287c0.555-0.674,1.058-1.399,1.596-2.099c0.631-0.836,1.289-1.655,1.886-2.517\\r\\n\\t\\t\\t\\tc0.486-0.725,0.922-1.493,1.382-2.236c0.555-0.905,1.135-1.784,1.647-2.714c0.427-0.776,0.785-1.604,1.178-2.406\\r\\n\\t\\t\\t\\tc0.094-0.196,0.188-0.384,0.282-0.58h31.445c4.719,0,8.533-3.814,8.533-8.533c0-4.719-3.814-8.533-8.533-8.533h-26.283\\r\\n\\t\\t\\t\\tc0.009-0.026,0.009-0.06,0.017-0.085c0.111-0.776,0.273-1.527,0.35-2.313c0.205-2.014,0.316-4.062,0.316-6.136\\r\\n\\t\\t\\t\\tc0-2.074-0.111-4.122-0.316-6.135c-0.077-0.785-0.239-1.536-0.35-2.313l-0.017-0.085H307.2c4.719,0,8.533-3.814,8.533-8.533\\r\\n\\t\\t\\t\\ts-3.814-8.533-8.533-8.533h-48.512c-0.094-0.196-0.188-0.384-0.282-0.58c-0.393-0.802-0.751-1.63-1.178-2.406\\r\\n\\t\\t\\t\\tc-0.512-0.93-1.092-1.809-1.647-2.705c-0.461-0.751-0.887-1.519-1.382-2.244c-0.597-0.87-1.254-1.681-1.894-2.517\\r\\n\\t\\t\\t\\tc-0.529-0.7-1.033-1.425-1.587-2.099c-0.666-0.794-1.382-1.527-2.082-2.287c-0.606-0.657-1.195-1.34-1.826-1.963\\r\\n\\t\\t\\t\\tc-0.085-0.085-0.154-0.179-0.239-0.265h103.296H392.533z M418.133,341.333c0,4.719-3.814,8.533-8.533,8.533h-8.533\\r\\n\\t\\t\\t\\tc-4.719,0-8.533-3.814-8.533-8.533s3.814-8.533,8.533-8.533h8.533C414.319,332.8,418.133,336.614,418.133,341.333z\\r\\n\\t\\t\\t\\t M204.8,298.667c-23.526,0-42.667-19.14-42.667-42.667c0-23.526,19.14-42.667,42.667-42.667c23.526,0,42.667,19.14,42.667,42.667\\r\\n\\t\\t\\t\\tC247.467,279.526,228.326,298.667,204.8,298.667z M222.814,315.733c-3.661,3.584-6.827,7.646-9.481,12.058\\r\\n\\t\\t\\t\\tc-2.662-4.437-5.854-8.516-9.532-12.109c0.333,0.009,0.657,0.051,0.998,0.051H222.814z M153.6,286.609\\r\\n\\t\\t\\t\\tc2.662,4.429,5.854,8.516,9.532,12.109c-0.333-0.009-0.657-0.051-0.998-0.051c-8.525,0-16.623,1.826-23.97,5.06\\r\\n\\t\\t\\t\\tC144.358,299.076,149.598,293.265,153.6,286.609z M138.163,208.273c7.347,3.234,15.445,5.06,23.97,5.06h0.947\\r\\n\\t\\t\\t\\tc-3.661,3.584-6.827,7.646-9.481,12.058C149.598,218.735,144.358,212.924,138.163,208.273z M298.667,128h8.533\\r\\n\\t\\t\\t\\tc4.719,0,8.533,3.814,8.533,8.533s-3.814,8.533-8.533,8.533h-8.533c-4.719,0-8.533-3.814-8.533-8.533S293.948,128,298.667,128z\\r\\n\\t\\t\\t\\t M290.133,162.133h51.2c4.719,0,8.533,3.814,8.533,8.533s-3.814,8.533-8.533,8.533h-51.2c-4.719,0-8.533-3.814-8.533-8.533\\r\\n\\t\\t\\t\\tS285.414,162.133,290.133,162.133z M264.533,128c4.719,0,8.533,3.814,8.533,8.533s-3.814,8.533-8.533,8.533h-43.349\\r\\n\\t\\t\\t\\tc-0.87-6.025-2.628-11.759-5.163-17.067H264.533z M221.184,162.133h26.283c4.719,0,8.533,3.814,8.533,8.533\\r\\n\\t\\t\\t\\ts-3.814,8.533-8.533,8.533h-31.445C218.556,173.892,220.314,168.158,221.184,162.133z M119.467,153.6\\r\\n\\t\\t\\t\\tc0-23.526,19.14-42.667,42.667-42.667c23.526,0,42.667,19.14,42.667,42.667c0,23.526-19.14,42.667-42.667,42.667\\r\\n\\t\\t\\t\\tC138.607,196.267,119.467,177.126,119.467,153.6z M102.4,230.4c4.719,0,8.533,3.814,8.533,8.533s-3.814,8.533-8.533,8.533\\r\\n\\t\\t\\t\\tc-4.71,0-8.533,3.823-8.533,8.533c0,4.719-3.814,8.533-8.533,8.533S76.8,260.719,76.8,256C76.8,241.886,88.286,230.4,102.4,230.4\\r\\n\\t\\t\\t\\tz M126.37,310.673c-6.195,4.651-11.435,10.462-15.437,17.118c-2.662-4.437-5.854-8.516-9.532-12.109\\r\\n\\t\\t\\t\\tc0.333,0.009,0.657,0.051,0.998,0.051C110.925,315.733,119.023,313.907,126.37,310.673z M59.733,401.067\\r\\n\\t\\t\\t\\tc-23.526,0-42.667-19.14-42.667-42.667s19.14-42.667,42.667-42.667c23.526,0,42.667,19.14,42.667,42.667\\r\\n\\t\\t\\t\\tS83.26,401.067,59.733,401.067z M101.504,401.067c0.068-0.068,0.128-0.154,0.196-0.222c1.604-1.587,3.115-3.277,4.531-5.035\\r\\n\\t\\t\\t\\tc0.393-0.486,0.742-0.998,1.118-1.493c1.024-1.357,1.997-2.756,2.91-4.198c0.213-0.341,0.469-0.64,0.674-0.973\\r\\n\\t\\t\\t\\tc0.205,0.341,0.469,0.64,0.683,0.973c0.905,1.442,1.877,2.842,2.901,4.19c0.375,0.503,0.725,1.016,1.118,1.502\\r\\n\\t\\t\\t\\tc1.425,1.758,2.927,3.447,4.531,5.035c0.068,0.068,0.128,0.154,0.196,0.222H101.504z M162.133,401.067\\r\\n\\t\\t\\t\\tc-23.526,0-42.667-19.14-42.667-42.667s19.14-42.667,42.667-42.667c23.526,0,42.667,19.14,42.667,42.667\\r\\n\\t\\t\\t\\tS185.66,401.067,162.133,401.067z M203.904,401.067c0.068-0.068,0.128-0.154,0.196-0.222c1.604-1.587,3.115-3.277,4.531-5.035\\r\\n\\t\\t\\t\\tc0.393-0.486,0.742-0.998,1.118-1.493c1.024-1.357,1.997-2.756,2.91-4.198c0.213-0.341,0.469-0.64,0.674-0.973\\r\\n\\t\\t\\t\\tc0.205,0.341,0.469,0.64,0.683,0.973c0.905,1.442,1.877,2.842,2.901,4.19c0.375,0.503,0.725,1.016,1.118,1.502\\r\\n\\t\\t\\t\\tc1.425,1.758,2.927,3.447,4.531,5.035c0.068,0.068,0.128,0.154,0.196,0.222H203.904z M264.533,401.067\\r\\n\\t\\t\\t\\tc-23.526,0-42.667-19.14-42.667-42.667s19.14-42.667,42.667-42.667c23.526,0,42.667,19.14,42.667,42.667\\r\\n\\t\\t\\t\\tS288.06,401.067,264.533,401.067z M349.867,384h-31.445c2.534-5.308,4.292-11.042,5.163-17.067h26.283\\r\\n\\t\\t\\t\\tc4.719,0,8.533,3.814,8.533,8.533S354.586,384,349.867,384z M366.933,349.867h-43.349c-0.87-6.025-2.628-11.759-5.163-17.067\\r\\n\\t\\t\\t\\th48.512c4.719,0,8.533,3.814,8.533,8.533S371.652,349.867,366.933,349.867z M443.733,384h-51.2c-4.719,0-8.533-3.814-8.533-8.533\\r\\n\\t\\t\\t\\ts3.814-8.533,8.533-8.533h51.2c4.719,0,8.533,3.814,8.533,8.533S448.452,384,443.733,384z\\\"/>\\r\\n\\t\\t</g>\\r\\n\\t</g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n<g>\\r\\n</g>\\r\\n</svg>\\r\\n\");\n\n//# sourceURL=webpack://the_machine/./src/svg/wood.svg?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://the_machine/./src/scss/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://the_machine/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://the_machine/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://the_machine/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://the_machine/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://the_machine/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://the_machine/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nexports.__esModule = true;\r\n__webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\r\nvar resources_1 = __webpack_require__(/*! ./ts/base/resources */ \"./src/ts/base/resources.ts\");\r\nvar loader_1 = __webpack_require__(/*! ./loader */ \"./src/loader.ts\");\r\nvar craft1 = new resources_1.RawResource({\r\n    name: [\"Wood\", \"wood\"],\r\n    icon: loader_1[\"default\"].find(function (_) { return _.includes(\"wood\"); }),\r\n    processBase: 8\r\n});\r\nvar craft2 = new resources_1.RawResource({\r\n    name: [\"Stone\", \"stone\"],\r\n    icon: loader_1[\"default\"].find(function (_) { return _.includes(\"wood\"); }),\r\n    processBase: 15\r\n});\r\nvar gameContainer = document.querySelector(\".container\");\r\ngameContainer.appendChild(craft1.container);\r\ngameContainer.appendChild(craft2.container);\r\n\n\n//# sourceURL=webpack://the_machine/./src/index.ts?");

/***/ }),

/***/ "./src/loader.ts":
/*!***********************!*\
  !*** ./src/loader.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar reqSvgs = __webpack_require__(\"./src sync recursive \\\\.svg$\");\r\nexports[\"default\"] = reqSvgs.keys();\r\n\n\n//# sourceURL=webpack://the_machine/./src/loader.ts?");

/***/ }),

/***/ "./src/ts/base/machines.ts":
/*!*********************************!*\
  !*** ./src/ts/base/machines.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports.Miner = void 0;\r\nvar Miner = /** @class */ (function () {\r\n    function Miner(name, icon, power) {\r\n        this.count = 0;\r\n        this.name = name[0];\r\n        this.codeName = name[1];\r\n        this.power = power;\r\n    }\r\n    return Miner;\r\n}());\r\nexports.Miner = Miner;\r\n\n\n//# sourceURL=webpack://the_machine/./src/ts/base/machines.ts?");

/***/ }),

/***/ "./src/ts/base/nodeGen.ts":
/*!********************************!*\
  !*** ./src/ts/base/nodeGen.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar util_1 = __webpack_require__(/*! ../util */ \"./src/ts/util.ts\");\r\nvar generators = {};\r\ngenerators.resContainer = function (_a) {\r\n    var name = _a[0], icon = _a[1];\r\n    return (0, util_1.createNode)({\r\n        className: \"resourceGen\",\r\n        subNodes: [\r\n            {\r\n                className: \"resourceFlex\",\r\n                subNodes: [\r\n                    {\r\n                        className: \"resName\",\r\n                        textContent: name\r\n                    },\r\n                    {\r\n                        tag: \"img\",\r\n                        className: \"resourceIcon\",\r\n                        src: icon\r\n                    },\r\n                    {\r\n                        tag: \"progress\",\r\n                        className: \"progressBar\",\r\n                        attributes: [[\"value\", \"0\"], [\"max\", \"100\"]]\r\n                    },\r\n                    {\r\n                        className: \"amountDisplay\",\r\n                        textContent: \"Amount: 0\"\r\n                    },\r\n                    {\r\n                        tag: \"button\",\r\n                        className: \"craftBtn\",\r\n                        textContent: \"Craft !\"\r\n                    }\r\n                ]\r\n            }, {\r\n                className: \"dropDownArrow\",\r\n                tag: \"img\",\r\n                src: \"./svg/down_arrow.svg\"\r\n            },\r\n            {\r\n                className: \"additionalInfo\",\r\n                subNodes: [\r\n                    {\r\n                        className: \"infoPart\",\r\n                        subNodes: [\r\n                            {\r\n                                tag: \"button\",\r\n                                className: \"autoBtn\",\r\n                                textContent: \"Add Miner\"\r\n                            },\r\n                            {\r\n                                tag: \"button\",\r\n                                className: \"autoBtn\",\r\n                                textContent: \"Remove Miner\"\r\n                            },\r\n                            {\r\n                                className: \"automatonDisplay\",\r\n                                textContent: \"0 Miners are working right now\"\r\n                            },\r\n                            {\r\n                                className: \"automatonDisplay\",\r\n                                textContent: \"Production is 0 items/s\"\r\n                            }\r\n                        ]\r\n                    }, {\r\n                        className: \"infoPart\"\r\n                    }\r\n                ]\r\n            }\r\n        ]\r\n    });\r\n};\r\nexports[\"default\"] = generators;\r\n\n\n//# sourceURL=webpack://the_machine/./src/ts/base/nodeGen.ts?");

/***/ }),

/***/ "./src/ts/base/resources.ts":
/*!**********************************!*\
  !*** ./src/ts/base/resources.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.RawResource = void 0;\r\nvar util_1 = __webpack_require__(/*! ../util */ \"./src/ts/util.ts\");\r\nvar machines_1 = __webpack_require__(/*! ./machines */ \"./src/ts/base/machines.ts\");\r\nvar nodeGen_1 = __webpack_require__(/*! ./nodeGen */ \"./src/ts/base/nodeGen.ts\");\r\nvar RawResource = /** @class */ (function () {\r\n    function RawResource(props) {\r\n        var _this = this;\r\n        this.hardness = 1;\r\n        this.count = 0;\r\n        this.mineYield = 1;\r\n        this.name = \"placeholder\";\r\n        this.codeName = \"pl4c3h0lder\";\r\n        this.isAutomated = false;\r\n        this.additionalInfoDisplay = false;\r\n        this.name = props.name[0];\r\n        this.codeName = props.name[1];\r\n        this.mineYield = props.mineYield || 1;\r\n        this.hardness = props.hardness || 1;\r\n        this.processBase = props.processBase;\r\n        this.container = nodeGen_1[\"default\"].resContainer([this.name, props.icon]);\r\n        var resourceInfo = this.container.children[0];\r\n        this.structure = {\r\n            bar: resourceInfo.children[2],\r\n            button: resourceInfo.children[4],\r\n            amountDisplay: resourceInfo.children[3],\r\n            name: resourceInfo.children[0],\r\n            icon: resourceInfo.children[1],\r\n            dropDownArrow: this.container.children[1],\r\n            additionalInfoContainer: this.container.children[2],\r\n            minerManager: {\r\n                addMiner: this.container.children[2].querySelectorAll(\".autoBtn\")[0],\r\n                removeMiner: this.container.children[2].querySelectorAll(\".autoBtn\")[1]\r\n            },\r\n            automationDisplay: this.container.querySelectorAll(\".automatonDisplay\")[0],\r\n            productionDisplay: this.container.querySelectorAll(\".automatonDisplay\")[1]\r\n        };\r\n        this.structure.bar.style.transition = \"all \".concat(this.processBase, \"s\");\r\n        this.structure.button.addEventListener(\"click\", function () { return _this.cycleManual(); });\r\n        this.structure.dropDownArrow.addEventListener(\"click\", function () { return _this.dropDownToggle(); });\r\n        this.structure.minerManager.addMiner.addEventListener(\"click\", function () { return _this.minerManager(\"add\"); });\r\n        this.structure.minerManager.removeMiner.addEventListener(\"click\", function () { return _this.minerManager(\"remove\"); });\r\n    }\r\n    RawResource.prototype.cycleManual = function () {\r\n        var _this = this;\r\n        processCycle(this.processTime([\"\"]), this.structure.bar, function () { return _this.generate(); }, this.structure.button);\r\n    };\r\n    RawResource.prototype.cycleAutomated = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var _this = this;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        if (!this.isAutomated) return [3 /*break*/, 2];\r\n                        return [4 /*yield*/, processCycle(this.processTime([\"automation\"]), this.structure.bar, function () { return _this.generate(); })];\r\n                    case 1:\r\n                        _a.sent();\r\n                        this.cycleAutomated();\r\n                        _a.label = 2;\r\n                    case 2: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    RawResource.prototype.generate = function () {\r\n        this.count += this.mineYield;\r\n        this.structure.bar.value = 0;\r\n        this.structure.amountDisplay.textContent = \"Available: \".concat(this.count);\r\n    };\r\n    RawResource.prototype.dropDownToggle = function () {\r\n        this.additionalInfoDisplay = !this.additionalInfoDisplay;\r\n        this.structure.dropDownArrow.style.transform = \"scaleY(\".concat(this.additionalInfoDisplay ? \"-1\" : \"1\", \")\");\r\n        this.structure.additionalInfoContainer.style.height = \"\".concat(this.additionalInfoDisplay ? \"20rem\" : \"0\");\r\n    };\r\n    RawResource.prototype.minerManager = function (inp) {\r\n        if (inp === \"add\") {\r\n            if (!this.miner) {\r\n                this.miner = new machines_1.Miner([\"Automaton\", \"automaton\"], \"./svg/wood.svg\", 0.5);\r\n                this.structure.button.disabled = true;\r\n            }\r\n            this.miner.count += 1;\r\n            this.refresh([\"display\", \"automation\"]);\r\n        }\r\n        else if (inp === \"remove\") {\r\n            if (this.miner) {\r\n                if (this.miner.count === 1) {\r\n                    this.miner.count -= 1;\r\n                    this.refresh([\"display\"]);\r\n                    this.miner = undefined;\r\n                    this.refresh([\"automation\"]);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    RawResource.prototype.refresh = function (kind) {\r\n        var _this = this;\r\n        kind.forEach(function (k) {\r\n            if (k === \"display\") {\r\n                _this.structure.amountDisplay.textContent = \"Amount: \".concat(_this.count);\r\n                _this.structure.automationDisplay.textContent = \"\".concat(_this.miner.count, \" Miners are working right now\");\r\n                _this.structure.productionDisplay.textContent = \"Current production level is boom\";\r\n            }\r\n            else if (k === \"automation\") {\r\n                if (_this.miner)\r\n                    _this.isAutomated = true;\r\n                else\r\n                    _this.isAutomated = false;\r\n                _this.cycleAutomated();\r\n            }\r\n        });\r\n    };\r\n    RawResource.prototype.processTime = function (modifier) {\r\n        var _this = this;\r\n        var time = this.processBase / this.hardness;\r\n        modifier.forEach(function (mod) {\r\n            if (mod === \"automation\") {\r\n                time = time - (_this.miner.count * _this.miner.power * (time / 50));\r\n            }\r\n        });\r\n        return time;\r\n    };\r\n    return RawResource;\r\n}());\r\nexports.RawResource = RawResource;\r\nvar processCycle = function (processTime, bar, callback, button) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var percent, i;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                if (button) {\r\n                    button.disabled = true;\r\n                }\r\n                percent = 0;\r\n                if (bar.classList.contains(\"notransition\"))\r\n                    bar.classList.remove((\"notransition\"));\r\n                i = 0;\r\n                _a.label = 1;\r\n            case 1:\r\n                if (!(i < 100)) return [3 /*break*/, 4];\r\n                percent += 1;\r\n                bar.value = percent;\r\n                return [4 /*yield*/, (0, util_1.sleep)(processTime * 10)];\r\n            case 2:\r\n                _a.sent();\r\n                _a.label = 3;\r\n            case 3:\r\n                i++;\r\n                return [3 /*break*/, 1];\r\n            case 4: return [4 /*yield*/, (0, util_1.sleep)(500)];\r\n            case 5:\r\n                _a.sent();\r\n                bar.classList.add(\"notransition\");\r\n                callback();\r\n                return [4 /*yield*/, (0, util_1.sleep)(500)];\r\n            case 6:\r\n                _a.sent();\r\n                if (button) {\r\n                    button.disabled = false;\r\n                }\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack://the_machine/./src/ts/base/resources.ts?");

/***/ }),

/***/ "./src/ts/util.ts":
/*!************************!*\
  !*** ./src/ts/util.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports.sleep = exports.createNode = void 0;\r\nfunction createNode(props) {\r\n    var node = document.createElement(props.tag || \"div\");\r\n    if (props.className) {\r\n        if (Array.isArray(props.className))\r\n            props.className.forEach(function (classN) { return node.classList.add(classN); });\r\n        else\r\n            node.className = props.className;\r\n    }\r\n    if (props.id) {\r\n        node.setAttribute(\"id\", props.id);\r\n    }\r\n    if (props.src) {\r\n        node.setAttribute(\"src\", props.src);\r\n    }\r\n    if (props.attributes) {\r\n        props.attributes.forEach(function (attr) {\r\n            node.setAttribute(attr[0], attr[1]);\r\n        });\r\n    }\r\n    if (props.textContent) {\r\n        node.innerHTML = props.textContent;\r\n    }\r\n    if (props.subNodes) {\r\n        if (props.subNodes instanceof HTMLElement)\r\n            node.appendChild(props.subNodes);\r\n        else if (Array.isArray(props.subNodes))\r\n            props.subNodes.forEach(function (subNode) {\r\n                if (subNode instanceof HTMLElement)\r\n                    node.appendChild(subNode);\r\n                else\r\n                    node.appendChild(createNode(subNode));\r\n            });\r\n        else\r\n            node.appendChild(createNode(props.subNodes));\r\n    }\r\n    if (props.onClick)\r\n        node.onclick = props.onClick;\r\n    return node;\r\n}\r\nexports.createNode = createNode;\r\n// sleep (for async only)\r\nvar sleep = function (ms) { return new Promise(function (t) { return setTimeout(t, ms); }); };\r\nexports.sleep = sleep;\r\n\n\n//# sourceURL=webpack://the_machine/./src/ts/util.ts?");

/***/ }),

/***/ "./src sync recursive \\.svg$":
/*!**************************!*\
  !*** ./src/ sync \.svg$ ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./svg/down_arrow.svg\": \"./src/svg/down_arrow.svg\",\n\t\"./svg/wood.svg\": \"./src/svg/wood.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync recursive \\\\.svg$\";\n\n//# sourceURL=webpack://the_machine/./src/_sync_\\.svg$?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;