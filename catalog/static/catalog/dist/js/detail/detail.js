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

/***/ "./catalog/resources/js/detail/detail.js":
/*!***********************************************!*\
  !*** ./catalog/resources/js/detail/detail.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_resources_js_loader_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/resources/js/loader/loader.js */ \"./core/resources/js/loader/loader.js\");\n/*\nClass for product detail page\n*/\n\n\n\nclass Detail\n{\n  // Init method\n  init()\n  {\n    document.addEventListener('DOMContentLoaded', () => {\n      this.bindQtyInput();\n      this.bindAddToCartBtn();\n    });\n  }\n\n  // Bind qty input\n  bindQtyInput()\n  {\n    let inputQty = document.querySelector(\"#input-qty\");\n    let inputProductPrice = document.querySelector(\"#input-product-price\");\n    let inputTotalPrice = document.querySelector(\"#input-total-price\");\n    let displayTotalPrice = document.querySelector(\"#display-total-price\");\n    if (inputQty && inputProductPrice && inputTotalPrice && displayTotalPrice) {\n      inputQty.addEventListener(\"change\", (e)=>{\n        let qty = parseInt(e.target.value);\n        let price = parseFloat(inputProductPrice.value);\n        inputTotalPrice.value = this.calculateTotalPrice(qty, price);\n        displayTotalPrice.innerHTML = this.toRupiah(inputTotalPrice.value);\n      })\n    }\n  }\n\n  // Calculate total price\n  calculateTotalPrice(qty, price)\n  {\n    return qty * price;\n  }\n\n  // Convert to rupiah\n  toRupiah(bilangan)\n  {\n    let number_string = bilangan.toString(),\n      split = number_string.split('.'),\n      remainder  = split[0].length % 3,\n      rupiah  = split[0].substr(0, remainder),\n      thousand  = split[0].substr(remainder).match(/\\d{1,3}/gi);\n\n    if (thousand) {\n      let separator = remainder ? ',' : '';\n      rupiah += separator + thousand.join(',');\n    }\n    rupiah = split[1] != undefined ? rupiah + '.' + split[1] : rupiah;\n    rupiah = 'Rp' + rupiah\n\n    return rupiah\n  }\n\n  // Bind add to cart button\n  bindAddToCartBtn()\n  {\n    let form = document.querySelector(\"#form_add_to_cart\");\n    let url = `${ORDER_SERVICE_URL}/api/order/`;\n    if (form) {\n      form.addEventListener(\"submit\", ()=>{\n        let formData = new FormData(form);\n        formData.append(\"status\", \"in-cart\");\n\n        let tmp_imgs = document.getElementsByName(\"product_images_path\");\n        let imgs = [];\n        for (let i = 0; i < tmp_imgs.length; i++) {\n          imgs.push(tmp_imgs[i].value);\n        }\n        formData.append(\"product_images_path[]\", imgs);\n\n        fetch(url, {\n          headers: {\n            'Authorization': \"Bearer \" + Cookies.get(\"sessiontoken\"),\n          },\n          method: \"POST\",\n          body: formData\n        }).then( async (response) => {\n          let data = await response.json();\n\n          if(response.status == 201){\n            alert(\"Order saved in cart!\");\n            window.location.href = \"/order/cart/\";\n          }else{\n            alert(data[\"message\"])\n            _core_resources_js_loader_loader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hideBodyLoader();\n          }\n\n        }).catch((error) => {\n          if(!error.response){\n            alert('Check Your Internet Connection! \\n\\n' + error)\n            _core_resources_js_loader_loader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hideBodyLoader();\n          };\n        });\n\n      })\n    }\n  }\n\n}\n\nlet detail = new Detail();\ndetail.init();\n\n\n//# sourceURL=webpack://ecom/./catalog/resources/js/detail/detail.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./catalog/resources/js/detail/detail.js");
/******/ 	
/******/ })()
;