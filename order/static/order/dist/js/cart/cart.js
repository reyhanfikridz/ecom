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

/***/ "./core/resources/js/loader/loader.js":
/*!********************************************!*\
  !*** ./core/resources/js/loader/loader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\nClass for managing loader\n*/\nclass Loader\n{\n  // show loader for element <body>\n  showBodyLoader()\n  {\n    $(\"body\").LoadingOverlay(\"show\", {\n      background  : \"rgba(232, 232, 232, 0.5)\"\n    });\n  }\n\n  // hide loader for element <body>\n  hideBodyLoader()\n  {\n    $(\"body\").LoadingOverlay(\"hide\", true);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Loader);\n\n\n//# sourceURL=webpack://ecom/./core/resources/js/loader/loader.js?");

/***/ }),

/***/ "./order/resources/js/cart/cart.js":
/*!*****************************************!*\
  !*** ./order/resources/js/cart/cart.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_resources_js_loader_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/resources/js/loader/loader.js */ \"./core/resources/js/loader/loader.js\");\n/*\nClass for cart page\n*/\n\n\n\nclass Cart\n{\n  // Init method\n  init()\n  {\n    document.addEventListener('DOMContentLoaded', () => {\n      this.bindOrderBtn();\n    });\n  }\n\n  bindOrderBtn()\n  {\n    let forms = document.querySelectorAll(\".form_order\");\n\n    if (forms) {\n      for (let i = 0; i < forms.length; i++) {\n        forms[i].addEventListener(\"submit\", ()=>{\n          let formData = new FormData(forms[i]);\n          let url = `${ORDER_SERVICE_URL}/api/order/?order_number=${formData.get('order_number')}`;\n          formData.delete('order_number');\n\n          fetch(url, {\n            headers: {\n              'Authorization': \"Bearer \" + Cookies.get(\"sessiontoken\"),\n            },\n            method: \"PUT\",\n            body: formData\n          }).then( async (response) => {\n            let data = await response.json();\n\n            if(response.status == 200){\n              alert(\"Product ordered!\");\n              window.location.href = \"/order/\";\n            }else{\n              alert(data[\"message\"])\n              _core_resources_js_loader_loader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hideBodyLoader();\n            }\n\n          }).catch((error) => {\n            if(!error.response){\n              alert('Check Your Internet Connection! \\n\\n' + error)\n              _core_resources_js_loader_loader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hideBodyLoader();\n            };\n          });\n        });\n      }\n\n    }\n  }\n\n}\n\nlet cart = new Cart();\ncart.init();\n\n\n//# sourceURL=webpack://ecom/./order/resources/js/cart/cart.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./order/resources/js/cart/cart.js");
/******/ 	
/******/ })()
;