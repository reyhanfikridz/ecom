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

/***/ "./catalog/resources/js/table/delete.js":
/*!**********************************************!*\
  !*** ./catalog/resources/js/table/delete.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_resources_js_loader_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/resources/js/loader/loader.js */ \"./core/resources/js/loader/loader.js\");\n/*\nClass for catalog table delete product process\n*/\n\n\n\nclass CatalogTableDelete\n{\n  // Init method\n  init()\n  {\n    document.addEventListener('DOMContentLoaded', () => {\n      let modalBtns = document.querySelectorAll('.open-delete-modal-btn');\n      let form = document.querySelector('#delete-product-form');\n\n      // if open delete product modal button and delete product form detected,\n      // bind event listener for the modal and delete product form submit button\n      if (modalBtns && form) {\n        this.bindOpenModal(modalBtns, form);\n        this.bindSubmitBtn(form);\n      }\n    });\n  }\n\n  // Bind open delete modal button method\n  bindOpenModal(modalBtns, form)\n  {\n    for (let i = 0; i < modalBtns.length; i++) {\n      modalBtns[i].addEventListener('click', ()=>{\n        form.setAttribute('load-sku', modalBtns[i].getAttribute('sku'));\n      });\n    }\n  }\n\n  // Bind submit button method\n  bindSubmitBtn(form)\n  {\n    form.addEventListener('submit', ()=>{\n      _core_resources_js_loader_loader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showBodyLoader();\n      let formData = new FormData(form);\n\n      fetch(`${PRODUCT_SERVICE_URL}/api/product/?sku=${form.getAttribute('load-sku')}`, {\n        headers: {\n          'Authorization': \"Bearer \" + Cookies.get(\"sessiontoken\"),\n        },\n        method: 'DELETE',\n      }).then( async (response) => {\n        let data = await response.json();\n\n        if(response.status == 200){\n          alert(\"Product Successfully Deleted!\");\n          window.location.href = \"/catalog/table/\";\n        }else{\n          alert(data[\"message\"])\n          _core_resources_js_loader_loader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hideBodyLoader();\n        }\n\n      }).catch((error) => {\n        if(!error.response){\n          alert('Check Your Internet Connection! \\n\\n' + error)\n          _core_resources_js_loader_loader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hideBodyLoader();\n        };\n      });\n\n    });\n  }\n}\n\nlet catalogTableDelete = new CatalogTableDelete();\ncatalogTableDelete.init();\n\n\n//# sourceURL=webpack://ecom/./catalog/resources/js/table/delete.js?");

/***/ }),

/***/ "./core/resources/js/loader/loader.js":
/*!********************************************!*\
  !*** ./core/resources/js/loader/loader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\nClass for managing loader\n*/\nclass Loader\n{\n  // show loader for element <body>\n  showBodyLoader()\n  {\n    $(\"body\").LoadingOverlay(\"show\", {\n      background  : \"rgba(232, 232, 232, 0.5)\"\n    });\n  }\n\n  // hide loader for element <body>\n  hideBodyLoader()\n  {\n    $(\"body\").LoadingOverlay(\"hide\", true);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Loader);\n\n\n//# sourceURL=webpack://ecom/./core/resources/js/loader/loader.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./catalog/resources/js/table/delete.js");
/******/ 	
/******/ })()
;