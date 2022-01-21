/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Scada&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Sarina&family=Scada&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dongle:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body {\\n    margin:0;\\n    padding:0;\\n    height: 100vh;\\n}\\n\\nbody > * {\\n    font-family: 'Scada', sans-serif;\\n    background-color: #fff8fa\\n}\\n\\nheader {\\n    padding:10px;\\n    display:flex;\\n    flex-direction:row;\\n    align-items: center;\\n    justify-content: space-between;\\n    color: #FBEEC1;\\n    background-color: #151718;\\n    font-family: 'Sarina', cursive;\\n\\n}\\n\\n#content {\\n    display:flex;\\n    flex-direction:row;\\n    height:75%;\\n    font-family: 'Dongle', sans-serif;\\n    font-size:32px;\\n\\n}\\n\\nbutton { \\n    background-color: #DAAD86;\\n    font-size: 20px;\\n    color:black;\\n    border-radius:10%;\\n    transition:0.3s;\\n    margin-bottom:2px;\\n    font-family: 'Scada', sans-serif;\\n}\\n\\nbutton:hover {\\n    background-color: #FBEEC1;\\n    transform:scale(1.1);\\n}\\n\\nmain {\\n    margin-left: 20px;\\n    width:100%;\\n    display:flex;\\n    flex-direction:column;\\n    height:100%;\\n    \\n}\\n\\n#sidebar {\\n    display:flex;\\n    flex-direction:column;\\n    padding:20px;\\n    width:200px;\\n    background-color:rgb(177 177 203);\\n    color: black;\\n    \\n}\\n\\n.trash {\\n    height:20px;\\n}\\n\\nsection {\\n    display:flex;\\n    flex-direction:column;\\n    padding:0;\\n}\\n\\n.task {\\n\\n    width:90%;\\n    display:block;\\n    border-radius: 15px;\\n    background-color: lightgrey;\\n    padding:3px;\\n    transition: 0.3s;\\n    gap:5px;\\n    padding: 5px;\\n    margin-bottom: 10px;\\n    \\n    \\n}\\n\\n.task:hover {\\n    transform: scale(1.03);\\n    box-shadow: 0px 10px 20px rgb(32, 30, 29);\\n\\n}\\n\\n\\n.overview { \\n    display:flex;\\n    flex-direction:row;\\n    justify-content:space-between;\\n    margin-left:5px;\\n}\\n\\n.modal {\\n    display:none;\\n    position: fixed;\\n    z-index: 1;\\n    left:50%;\\n    top:50%;\\n    transform:translate(-50%, -50%);\\n    background-color: white;\\n    z-index: 9;\\n    padding:20px;\\n    margin:30px;\\n    border: 2px solid black;\\n    border-radius:10px;\\n}\\n\\n#taskModal {\\n    display:flex;\\n    flex-direction:column;\\n    margin: 3px;\\n    outline: 2px solid black;\\n    padding:5px;\\n    gap:5px;\\n    flex:0;\\n}\\n\\n.top {\\n    display: flex;\\n    flex-direction: row;\\n    gap:5px;\\n    max-height:30px;\\n    justify-content:space-between;\\n    align-items: center;\\n    margin-bottom:5px;\\n    flex:1;\\n    overflow: none;\\n    text-align:center;\\n}\\n\\n.top > * {\\n    width:25%;\\n    height:auto\\n}\\n\\n.descInput {\\n\\n}\\n\\n#userProjects {\\n    display:flex;\\n    flex-direction:column\\n}\\n\\n.button {\\n    display:flex;\\n    font-size:28px;\\n    align-items:center;\\n    padding:0;\\n    margin-left:3px;\\n    margin-right:3px;\\n    justify-content: space-around;\\n    background-color: white;\\n    border-radius: 5px;\\n    margin-bottom:5px;\\n    transition:0.1s;\\n    outline: 1px solid black;\\n    cursor:pointer;\\n}\\n\\n.button:hover {\\n    background-color: beige;\\n}\\n\\n\\n\\n.title {\\n    margin:0px 4px 0px 4px;\\n    font-size:30px;\\n    font: weight 300px;\\n    user-select: none;\\n}\\n\\nfooter {\\n    padding-bottom:8px;\\n    background-color: black;\\n    padding:20px;\\n    font-family: 'Sarina', cursive;\\n    color:#FBEEC1;\\n    text-align:center;\\n}\\n\\n#taskList {\\n    margin:10px;\\n    display:flex;\\n    align-items: center;\\n    flex-direction:column;\\n    overflow:auto;\\n    margin-bottom:30px;\\n}\\n\\n\\n\\n\\n\\n\\n.checked {\\n    background-color:black;\\n    color:white;\\n    text-decoration: line-through;\\n    outline: 3px solid rgb(255, 255, 255);\\n}\\n\\n.checked > .button { \\n    background-color: white;\\n    color:black;\\n}\\n\\n.description {\\n    transition:0.4s;\\n}\\n\\n.top .button {\\n    width:80px;\\n    text-align:center;\\n    justify-content:center;\\n}\\n\\np {\\n    text-align: center;\\n}\\n\\n.expand, .completed, .delete {\\n    height:20px;\\n}\\n\\n\\n#projectTitle {\\n    margin:0\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _taskManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager.js */ \"./src/taskManager.js\");\n/* harmony import */ var _manageDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manageDOM.js */ \"./src/manageDOM.js\");\n\n\n\n\n\nconst projectData = _taskManager_js__WEBPACK_IMPORTED_MODULE_1__.Project.getProjectData()\nconsole.log(projectData)\n_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectData(projectData)\nconst projectList = [] \n\n\n\n\n\n// Here we create the projects from the data storage, and then we update the task \n// arrays\nfor (let i=0 ; i < projectData.length; i++) {\n    const project = new _taskManager_js__WEBPACK_IMPORTED_MODULE_1__.Project(projectData[i].title)\n    project.checkLocalStorage()\n    projectList.push(project)\n    \n}\n\nconsole.log(projectList)\n\nconsole.log(projectData)\n\nfunction makeAddFolderButton() {\n    const sidebar = document.querySelector('#sidebar')\n    let addFolder = new _manageDOM_js__WEBPACK_IMPORTED_MODULE_2__.addFolderButton('Add a Folder...', 'addAFolder', )\n    sidebar.appendChild(addFolder.element)\n}\n\nmakeAddFolderButton()\n\nlet modal = document.querySelector('#modal')\nlet createFolderButton = new _manageDOM_js__WEBPACK_IMPORTED_MODULE_2__.Button('submit', 'createFolder')\nlet cancelButton = new _manageDOM_js__WEBPACK_IMPORTED_MODULE_2__.cancelButton('cancel', 'cancelAddProject', '#modal')\ncancelButton.element.addEventListener('click', () => {\n    modal.style.display = 'none'\n})\nmodal.appendChild(createFolderButton.element)\nmodal.appendChild(cancelButton.element)\n\nlet main = document.querySelector('main')\nlet addTaskButton = new _manageDOM_js__WEBPACK_IMPORTED_MODULE_2__.Button('add task', 'addTaskBtn');\naddTaskButton.element.dataset.project = 'General Tasks'\nconst taskList = document.querySelector('#taskList')\nconsole.log(taskList.firstChild)\nmain.insertBefore(addTaskButton.element, taskList)\n\n\nfunction findProject(desiredProjectTitle) {\n    return projectList.find(project => project.title == desiredProjectTitle)\n}\n\naddTaskButton.element.addEventListener('click', () => openTaskModal(main, taskList))\n\nfunction openTaskModal(main, taskList) {\n    if(!document.querySelector('#taskModal')) {\n        const addTaskModal = new _manageDOM_js__WEBPACK_IMPORTED_MODULE_2__.addTaskModal()\n        main.insertBefore(addTaskModal.element, taskList)\n        addTaskModal.submitButton.element.addEventListener('click', () => addTask(addTaskModal, taskList, event))\n    }\n}\n\nfunction addTask(addTaskModal, taskList, event) {\n    let data = addTaskModal.handleForm(event)\n    if (data) {\n        let currentProject = findProject(addTaskButton.element.dataset.project)\n        currentProject.addTaskToArray(data)\n        currentProject.saveToLocalStorage()\n        addTaskModal.removeSelf()\n        _manageDOM_js__WEBPACK_IMPORTED_MODULE_2__.populateTaskList(currentProject.taskArray, taskList)\n        const completedButtons = document.querySelectorAll('.completed')\n        completedButtons.forEach(completedButton => \n            completedButton.addEventListener('click', (event) => markComplete(event)))\n        const deleteButtons = document.querySelectorAll('.delete')\n        deleteButtons.forEach(deleteButton => deleteButton.addEventListener('click', (event) => deleteTask(event)))\n\n    }  \n}\n\n\nconst createFolderBtn = document.querySelector('#createFolder');\nconst createFolderInput = document.querySelector('#createFolderInput')\n\n//defining what happens when you clikc the create folder button\ncreateFolderBtn.addEventListener('click', () => createFolder(projectData, createFolderInput, createFolderBtn, sidebar))\n\nfunction createFolder(projectData, createFolderInput, createFolderBtn, sidebar) {\n    let project = new _taskManager_js__WEBPACK_IMPORTED_MODULE_1__.Project(createFolderInput.value)\n    project.checkLocalStorage()\n    _taskManager_js__WEBPACK_IMPORTED_MODULE_1__.addToProjectData(project.title, projectData)\n    _taskManager_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectData(projectData)\n    projectList.push(project)\n    createFolderInput.value = ''\n    createFolderBtn.parentElement.style.display = 'none'\n    let projectButton = new _manageDOM_js__WEBPACK_IMPORTED_MODULE_2__.navButton(project.title, project.title, project.title)\n    sidebar.insertBefore(projectButton.element, document.querySelector('addAFolder'))\n    projectButton.element.addEventListener('click', () => loadProject(projectButton, taskList, projectTitle))\n    projectButton.img.addEventListener('click', deleteProject)\n}\n\nconst projectTitle = document.querySelector('#projectTitle')\n\n//here we are generating the project buttons and defining\n// what happens when you click them\nfor (let i = 0; i< projectList.length; i++) {\n    const projectButton = new _manageDOM_js__WEBPACK_IMPORTED_MODULE_2__.navButton(projectList[i].title, projectList[i].title, projectList[i].title)\n    projectButton.img.addEventListener('click', deleteProject)\n    sidebar.insertBefore(projectButton.element, document.querySelector('addAFolder'))\n    projectButton.element.addEventListener('click', () => loadProject(projectButton, taskList, projectTitle))\n    \n}\n\nfunction deleteTask(event) {\n    const id = event.target.dataset.task\n    let currentProject = findProject(addTaskButton.element.dataset.project)\n    currentProject.deleteTask(id)\n    console.log(currentProject.taskArray)\n    event.target.parentElement.parentElement.remove()\n}\n\nfunction loadProject(projectButton, taskList, projectTitle) {\n    addTaskButton.element.dataset.project = projectButton.element.dataset.title\n    projectTitle.textContent = projectButton.element.dataset.title\n    let currentProject = findProject(projectButton.element.dataset.title)\n    console.log(currentProject)\n    _manageDOM_js__WEBPACK_IMPORTED_MODULE_2__.populateTaskList(currentProject.taskArray, taskList)\n    const deleteButtons = document.querySelectorAll('.delete')\n    deleteButtons.forEach(deleteButton => deleteButton.addEventListener('click', (event) => deleteTask(event)))\n    const completedButtons = document.querySelectorAll('.completed')\n    completedButtons.forEach(completedButton => \n        completedButton.addEventListener('click', (event) => markComplete(event)))\n}\n\nfunction markComplete(event) {\n    console.log(event.target.dataset.task)\n    const currentProject = findProject(addTaskButton.element.dataset.project)\n    const task = currentProject.markAsComplete(event.target.dataset.task)\n    if (task.completed) {\n        event.target.classList.add('checked')\n        event.target.parentElement.parentElement.classList.add('checked')\n    } else if (!task.completed) {\n        event.target.classList.remove('checked')\n        event.target.parentElement.parentElement.classList.remove('checked')\n    }\n    currentProject.saveToLocalStorage()\n}\n\nfunction deleteProject() {\n    event.stopPropagation()\n    const currentProject = findProject(event.target.parentElement.dataset.title)\n    projectData.splice(projectData.findIndex(project => project.title == currentProject.title), 1 )\n    _taskManager_js__WEBPACK_IMPORTED_MODULE_1__.saveProjectData(projectData)\n    localStorage.removeItem(currentProject.title)\n    event.target.parentElement.remove()\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/manageDOM.js":
/*!**************************!*\
  !*** ./src/manageDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button),\n/* harmony export */   \"addFolderButton\": () => (/* binding */ addFolderButton),\n/* harmony export */   \"cancelButton\": () => (/* binding */ cancelButton),\n/* harmony export */   \"addTaskModal\": () => (/* binding */ addTaskModal),\n/* harmony export */   \"TaskDOM\": () => (/* binding */ TaskDOM),\n/* harmony export */   \"loadTasks\": () => (/* binding */ loadTasks),\n/* harmony export */   \"populateTaskList\": () => (/* binding */ populateTaskList),\n/* harmony export */   \"navButton\": () => (/* binding */ navButton),\n/* harmony export */   \"createFolder\": () => (/* binding */ createFolder)\n/* harmony export */ });\n/* harmony import */ var _trash_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trash.png */ \"./src/trash.png\");\n\n\nclass Button {\n    id = 'button'\n    constructor(content, id, dataAttribute = '') {\n        this.content = content\n        this.id = id\n        \n        this.element = document.createElement('div')\n        this.element.setAttribute('id', id);\n        this.element.setAttribute('class', 'button')\n        this.element.dataset.title = dataAttribute\n        \n        this.element.textContent = content\n        \n\n\n        this.element.onclick = this.onClick.bind(this)\n        \n    }\n\n    onClick() {\n\n    }\n\n}\n\nclass navButton extends Button {\n    constructor(content, id, dataAttribute) {\n        super(content, id, dataAttribute) \n        this.img = new Image();\n        this.img.src = _trash_png__WEBPACK_IMPORTED_MODULE_0__\n        this.element.appendChild(this.img)\n    }\n}\n\nclass expandButton extends Button {\n    constructor(content, id) {\n        super(content, id)\n        this.element.style.height = '20px'\n        this.element.addEventListener('click', this.expand.bind(this))\n        this.expanded = false\n    }\n    \n    expand() {\n        if (this.expanded) {\n            this.element.parentElement.parentElement.lastChild\n                .style.display = 'none'\n            this.expanded = false\n        } else {\n            this.element.parentElement.parentElement.lastChild\n                .style.display = 'flex'\n            this.expanded = true\n        }\n    }\n}\n\nclass deleteButton extends Button {\n    constructor(content, dataAttribute, taskID) {\n        super(content, dataAttribute)\n        this.element.style.height = '20px'\n        this.element.classList = 'button delete'\n        this.taskID = taskID\n        this.element.dataset.task = this.taskID\n    }\n\n    delete() {\n        console.log('hi')\n    }\n}\n\nclass addFolderButton extends Button {\n    constructor(content, id) {\n        super(content, id)\n        this.open = false\n        this.element.addEventListener('click', this.openModal)\n    }\n\n    openModal() {\n        document.querySelector('#modal').style.display = 'flex'\n    }\n}\n\nclass completedButton extends Button {\n    constructor(content, taskID) {\n        super(content)\n        this.checked = false\n        this.element.classList = 'button completed'\n        this.element.innerHTML = '&#10004;'\n        this.taskID = taskID\n        this.element.dataset.task = this.taskID\n    }\n    //this needs to have something in it which adds a thing if it is already completed\n    \n\n}\n\nclass cancelButton extends Button {\n    constructor(content, id, targetID) {\n        super(content, id)\n        this.targetID = targetID\n    }\n\n    close() {\n        document.querySelector(this.targetID).remove()\n    }\n}\n\nclass Checkbox extends Button {\n    constructor(content, priority = false) {\n        super(content)\n        \n        this.element.classList.add('button')\n        this.element.style.height = '20px';\n        this.element.style.width = '20px'\n        this.element.style.textDecoration='none'\n        this.value = priority\n\n        this.element.addEventListener('click', this.toggleClass.bind(this))\n    } \n\n    toggleClass() {\n        if (!this.value) {\n            this.value = true\n            this.element.classList.add('checked')\n        } else {\n            this.value = false\n            this.element.classList.remove('checked')\n        }\n    }\n    \n}\n\n\nclass addTaskModal {\n    constructor() {\n        this.element = document.createElement('form')\n        this.element.setAttribute('id', 'taskModal');\n        \n\n        this.taskLabel = document.createElement('label')\n        this.taskLabel.setAttribute('for', 'task')\n        this.taskLabel.textContent = 'Enter task:'\n\n        this.taskInput = document.createElement('input')\n        this.taskInput.setAttribute('type', 'text')\n        this.taskInput.setAttribute('name', 'task')\n        this.taskInput.required = true\n        \n        this.dueDateLabel = document.createElement('label')\n        this.dueDateLabel.setAttribute('for', 'duedate')\n        this.dueDateLabel.textContent = 'Due Date:'\n        \n        this.dueDateInput = document.createElement('input')\n        this.dueDateInput.setAttribute('type', 'date')\n        this.dueDateInput.setAttribute('name', 'duedate')\n        \n\n        this.descriptionLabel = document.createElement('label')\n        this.descriptionLabel.setAttribute('for', 'description')\n        this.descriptionLabel.textContent = 'Description:'\n\n        this.descriptionInput = document.createElement('input')\n        this.descriptionInput.setAttribute('type', 'text')\n        this.descriptionInput.setAttribute('for', 'description')\n        this.descriptionInput.setAttribute('class', 'descInput')\n\n        this.c = new cancelButton('cancel', 'cancelTask', '#taskModal')\n        this.c.element.addEventListener('click', this.removeSelf.bind(this))\n        this.submitButton = new Button('create task', 'createTask')\n        this.submitButton.element.setAttribute('type', 'submit')\n        \n        this.important = new Checkbox(\"!\")\n        this.importantLabel = document.createElement('label');\n        this.importantLabel.setAttribute('for', 'important')\n        this.importantLabel.textContent = 'Important?'\n\n        this.top = document.createElement('div')\n        this.top.setAttribute('class', 'top')\n\n        this.top.appendChild(this.taskLabel)\n        this.top.appendChild(this.taskInput)\n        this.top.appendChild(this.importantLabel)\n        this.top.appendChild(this.important.element)\n        this.top.appendChild(this.dueDateLabel);\n        this.top.appendChild(this.dueDateInput)\n\n        this.element.appendChild(this.top)\n        this.element.appendChild(this.descriptionLabel)\n        this.element.appendChild(this.descriptionInput)\n        this.element.appendChild(this.c.element)\n        this.element.appendChild(this.submitButton.element)   \n    }\n\n    handleForm(event) {\n        if (this.taskInput.value && this.dueDateInput.value) {\n            event.preventDefault()\n            return {task: this.taskInput.value, dueDate: this.dueDateInput.value\n                , description: this.descriptionInput.value, priority: this.important.value}\n\n        }     \n    }\n\n    removeSelf() {\n        this.element.remove()\n    }\n}\n\nclass TaskDOM {\n    constructor(title, dueDate, description, priority, taskID, completed) {\n        this.element= document.createElement('div');\n        this.element.setAttribute('class', 'task');\n\n        this.top = document.createElement('div')\n        this.top.setAttribute('class', 'top')\n\n        this.title = document.createElement('p');\n        this.title.textContent = title\n\n        this.dueDate = document.createElement('p');\n        this.dueDate.textContent = dueDate\n\n        this.description = document.createElement('div');\n        this.description.textContent = description\n        this.description.classList = 'description'\n        this.description.style.display = 'none'\n\n\n        \n\n        \n        \n\n        this.expandButton = new expandButton('expand', 'expand')\n        this.deleteButton = new deleteButton('delete', 'delete', taskID)\n        this.completedButton = new completedButton('complete!', taskID);\n        if (completed) {\n            this.completedButton.element.classList.add('checked');\n            this.element.classList.add('checked')\n        }\n\n        this.top.appendChild(this.title);\n        \n        if (priority) {\n            this.important = document.createElement('p')\n            this.important.textContent = 'Important!'\n            this.important.style.weight = '300'\n            this.top.appendChild(this.important)\n        } else { \n            this.important = document.createElement('p')\n            this.top.appendChild(this.important)\n        }\n        this.top.appendChild(this.dueDate)\n        this.top.appendChild(this.expandButton.element)\n        this.top.appendChild(this.deleteButton.element)\n        this.top.appendChild(this.completedButton.element)\n        this.element.appendChild(this.top);\n        this.element.appendChild(this.description)\n        \n    }\n}\n\n\n\n\nfunction loadTasks(arr, node) {\n    for (let j=0; j < arr.length; j++ ) {\n        const task = new TaskDOM(arr[j].title, arr[j].dueDate, arr[j].description, arr[j].priority, arr[j].id, arr[j].completed)\n        node.appendChild(task.element)\n    }\n}\n\nfunction populateTaskList(project, item) {\n    let fc = item.firstChild\n    while (fc) {\n        item.removeChild(fc)\n        fc = item.firstChild\n    }\n    loadTasks(project, item)\n}\n\nfunction createFolder(projectData, createFolderInput, createFolderBtn, sidebar) {\n    let project = new taskManager.Project(createFolderInput.value)\n    taskManager.addToProjectData(project.title, projectData)\n    taskManager.saveProjectData(projectData)\n    createFolderInput.value = ''\n    createFolderBtn.parentElement.style.display = 'none'\n    let projectButton = new manageDOM.navButton(project.title, project.title, project.title)\n    sidebar.insertBefore(projectButton.element, document.querySelector('addAFolder'))\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/manageDOM.js?");

/***/ }),

/***/ "./src/taskManager.js":
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"addToProjectData\": () => (/* binding */ addToProjectData),\n/* harmony export */   \"saveProjectData\": () => (/* binding */ saveProjectData)\n/* harmony export */ });\n/* harmony import */ var _manageDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageDOM */ \"./src/manageDOM.js\");\n\n\nclass Project {\n    constructor(title) {\n        this.title = title\n        this.taskArray\n        this.id\n    }\n\n    static getProjectData() {\n        if (localStorage.getItem('projectData')) {\n            return JSON.parse(localStorage.getItem('projectData'))\n        } else {\n            return [{title:'General Tasks'}]\n        }\n        \n    }\n    \n\n    static initialise(title) {\n        return new Project(title)\n    } \n\n    \n    \n    checkLocalStorage() {\n        if (localStorage.getItem(this.title)) {\n            this.taskArray =  JSON.parse(localStorage.getItem(this.title))\n        } else {\n            this.taskArray =  []\n        }\n    }\n\n    \n\n    generateID() {\n        if (this.taskArray.length === 0) {\n            return 1\n        } else if (this.taskArray.length === 1) {\n            return 2\n        } else {\n            let highestID = this.taskArray.reduce((p, c) => \n                p.id > c.id ? p : c)\n            return (highestID.id +1)\n        }\n    }\n\n    addTaskToArray({task:title, dueDate: dueDate, description: description, priority: priority}) {\n        let id = this.generateID() \n        let task = {\n            title: title, \n            dueDate: dueDate, \n            description:description, \n            priority: priority,\n            completed: false,\n            id:id, \n            }\n        this.taskArray.push(task)\n        this.saveToLocalStorage()\n    }\n\n    get showTasks() {\n        return this.taskArray\n    }\n\n    saveToLocalStorage() {\n        localStorage.setItem(this.title, JSON.stringify(this.taskArray))\n    }\n\n    deleteTask(id) {\n        for (let i= 0; i < this.taskArray.length; i++) {\n            if (this.taskArray[i].id == id) {\n                this.taskArray.splice(i,1)\n            }\n        }\n        this.saveToLocalStorage()\n    }\n\n    findTask(id) {\n        return this.taskArray.find(task => task.id == id)\n    }\n\n    markAsComplete(id) {\n        let task = this.findTask(id)\n        if (task.completed) {\n            task.completed = false\n        } else {\n            task.completed = true\n        }\n        return task\n    }\n}\n\nfunction addToProjectData(data, projectData) {\n    const dataObject = {title: data}\n    projectData.push(dataObject)\n    \n}\n\nfunction saveProjectData(projectData) {\n    localStorage.setItem('projectData', JSON.stringify(projectData))\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/taskManager.js?");

/***/ }),

/***/ "./src/trash.png":
/*!***********************!*\
  !*** ./src/trash.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d483785626ce4563308.png\";\n\n//# sourceURL=webpack://todo-list/./src/trash.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;