webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/globals.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/globals.css ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_6_1_node_modules_next_dist_compiled_postcss_loader_index_js_nextjs_postcss_colors_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./colors.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/colors.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_6_1_node_modules_next_dist_compiled_postcss_loader_index_js_nextjs_postcss_colors_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@import url('/fonts/fontawesome/css/all.css');\r\n:root {\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n:root,\r\nmain {\r\n    background-color: var(--charcoal);\r\n}\r\n\r\n#city-list {\r\n    background-color: var(--persian-green);\r\n    color: var(--baby-powder);\r\n    font-size: 1.2em;\r\n    font-weight: 800;\r\n    text-align: center;\r\n    display: grid;\r\n    grid-template-columns: repeat(5, 1fr);\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    padding: 10px;\r\n    margin: 10px;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box !important;\r\n}\r\n\r\n.card-title {\r\n    display: inline-block;\r\n    width: 25%;\r\n    color: var(--charcoal);\r\n    border-bottom: 2px solid var(--charcoal);\r\n    padding: 10px;\r\n}\r\n\r\n.btn-outline-success {\r\n    font-weight: 600 !important;\r\n    color: var(--persian-green) !important;\r\n    border: 2px solid var(--persian-green) !important;\r\n    box-shadow: none !important;\r\n}\r\n\r\n.btn-outline-success:hover {\r\n    background-color: var(--persian-green) !important;\r\n    color: white !important;\r\n    border: 2px solid var(--persian-green) !important;\r\n    box-shadow: none !important;\r\n}\r\n\r\n#basic-navbar-nav,\r\n#top-nav {\r\n    background-color: var(--charcoal);\r\n    color: var(--charcoal);\r\n    padding: 5px;\r\n    font-size: 1.2em;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n}\r\n\r\n.navbar a {\r\n    color: white !important;\r\n    -webkit-flex: 1 1;\r\n            flex: 1 1;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    border: 2px solid var(--charcoal);\r\n}\r\n\r\n.navbar a:hover {\r\n    border-bottom: 2px solid white;\r\n    border-top: 2px solid white;\r\n    color: white !important;\r\n}\r\n\r\n.city-name {\r\n    border: 1px solid white;\r\n    margin: 5px;\r\n    padding: 5px;\r\n}\r\n\r\n#city-grid {\r\n    font-size: 1.2em;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n}\r\n\r\n#presentation-text {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-direction: column;\r\n            flex-direction: column;\r\n    grid-gap: 20px;\r\n    gap: 20px;\r\n    text-align: justify;\r\n}\r\n\r\n#map-container {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-align-items: flex-end;\r\n            align-items: flex-end;\r\n}\r\n\r\n#map {\r\n    margin: 10px;\r\n    min-height: 400px;\r\n    min-width: 400px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n#key-figures {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n#key-figures * {\r\n    font-size: 1.5em;\r\n    -webkit-flex: auto;\r\n            flex: auto;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    color: var(--baby-powder);\r\n    background-color: var(--burnt-sienna);\r\n    text-align: center;\r\n}\r\n\r\n#reviews {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-flex-wrap: wrap;\r\n            flex-wrap: wrap;\r\n}\r\n\r\n#reviews .card-body {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    grid-gap: 10px;\r\n    gap: 10px;\r\n}\r\n\r\n#reviews .card-title {\r\n    font-weight: 800;\r\n    width: 100%;\r\n    color: var(--sandy-brown);\r\n    border-bottom: 2px solid var(--sandy-brown);\r\n}\r\n\r\n.review-text {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.card {\r\n    margin: 10px;\r\n}\r\n\r\n.card-text {\r\n    margin-left: 10px;\r\n}\r\n\r\n.carousel-caption {\r\n    left: 0px !important;\r\n    background-color: rgba(0, 0, 0, .70);\r\n    width: 100%;\r\n}\r\n\r\n#reviews .card {\r\n    -webkit-flex: 1 1;\r\n            flex: 1 1;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-direction: column;\r\n            flex-direction: column;\r\n    text-align: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n}\r\n\r\n#partners-logos {\r\n    display: grid;\r\n    grid-template-columns: repeat(6, auto);\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    grid-gap: 10px;\r\n    gap: 10px;\r\n    object-fit: contain;\r\n}\r\n\r\n#partners-logos .card-body {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    object-fit: contain;\r\n}\r\n\r\n#footer {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n#footer div {\r\n    text-align: center;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n}", "",{"version":3,"sources":["webpack://styles/globals.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n@import url('/fonts/fontawesome/css/all.css');\r\n@import url(\"./colors.css\");\r\n:root {\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n:root,\r\nmain {\r\n    background-color: var(--charcoal);\r\n}\r\n\r\n#city-list {\r\n    background-color: var(--persian-green);\r\n    color: var(--baby-powder);\r\n    font-size: 1.2em;\r\n    font-weight: 800;\r\n    text-align: center;\r\n    display: grid;\r\n    grid-template-columns: repeat(5, 1fr);\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 10px;\r\n    margin: 10px;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box !important;\r\n}\r\n\r\n.card-title {\r\n    display: inline-block;\r\n    width: 25%;\r\n    color: var(--charcoal);\r\n    border-bottom: 2px solid var(--charcoal);\r\n    padding: 10px;\r\n}\r\n\r\n.btn-outline-success {\r\n    font-weight: 600 !important;\r\n    color: var(--persian-green) !important;\r\n    border: 2px solid var(--persian-green) !important;\r\n    box-shadow: none !important;\r\n}\r\n\r\n.btn-outline-success:hover {\r\n    background-color: var(--persian-green) !important;\r\n    color: white !important;\r\n    border: 2px solid var(--persian-green) !important;\r\n    box-shadow: none !important;\r\n}\r\n\r\n#basic-navbar-nav,\r\n#top-nav {\r\n    background-color: var(--charcoal);\r\n    color: var(--charcoal);\r\n    padding: 5px;\r\n    font-size: 1.2em;\r\n    display: flex;\r\n}\r\n\r\n.navbar a {\r\n    color: white !important;\r\n    flex: 1;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    border: 2px solid var(--charcoal);\r\n}\r\n\r\n.navbar a:hover {\r\n    border-bottom: 2px solid white;\r\n    border-top: 2px solid white;\r\n    color: white !important;\r\n}\r\n\r\n.city-name {\r\n    border: 1px solid white;\r\n    margin: 5px;\r\n    padding: 5px;\r\n}\r\n\r\n#city-grid {\r\n    font-size: 1.2em;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#presentation-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    text-align: justify;\r\n}\r\n\r\n#map-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n}\r\n\r\n#map {\r\n    margin: 10px;\r\n    min-height: 400px;\r\n    min-width: 400px;\r\n    height: fit-content;\r\n    width: fit-content;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n#key-figures {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n#key-figures * {\r\n    font-size: 1.5em;\r\n    flex: auto;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    color: var(--baby-powder);\r\n    background-color: var(--burnt-sienna);\r\n    text-align: center;\r\n}\r\n\r\n#reviews {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#reviews .card-body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n#reviews .card-title {\r\n    font-weight: 800;\r\n    width: 100%;\r\n    color: var(--sandy-brown);\r\n    border-bottom: 2px solid var(--sandy-brown);\r\n}\r\n\r\n.review-text {\r\n    width: fit-content;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.card {\r\n    margin: 10px;\r\n}\r\n\r\n.card-text {\r\n    margin-left: 10px;\r\n}\r\n\r\n.carousel-caption {\r\n    left: 0px !important;\r\n    background-color: rgba(0, 0, 0, .70);\r\n    width: 100%;\r\n}\r\n\r\n#reviews .card {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#partners-logos {\r\n    display: grid;\r\n    grid-template-columns: repeat(6, auto);\r\n    align-items: center;\r\n    gap: 10px;\r\n    object-fit: contain;\r\n}\r\n\r\n#partners-logos .card-body {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    object-fit: contain;\r\n}\r\n\r\n#footer {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n#footer div {\r\n    text-align: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQzRHO0FBQ3JNLDhCQUE4QixtRkFBMkI7QUFDekQsOEJBQThCLFFBQVMsNkVBQTZFO0FBQ3BILDBCQUEwQiw4S0FBaUM7QUFDM0Q7QUFDQSw4QkFBOEIsUUFBUyxpREFBaUQsV0FBVywwQ0FBMEMsS0FBSyx3QkFBd0IsMENBQTBDLEtBQUssb0JBQW9CLCtDQUErQyxrQ0FBa0MseUJBQXlCLHlCQUF5QiwyQkFBMkIsc0JBQXNCLDhDQUE4QyxvQ0FBb0Msb0NBQW9DLHdDQUF3Qyx3Q0FBd0Msc0JBQXNCLHFCQUFxQixLQUFLLFdBQVcsMENBQTBDLEtBQUsscUJBQXFCLDhCQUE4QixtQkFBbUIsK0JBQStCLGlEQUFpRCxzQkFBc0IsS0FBSyw4QkFBOEIsb0NBQW9DLCtDQUErQywwREFBMEQsb0NBQW9DLEtBQUssb0NBQW9DLDBEQUEwRCxnQ0FBZ0MsMERBQTBELG9DQUFvQyxLQUFLLHdDQUF3QywwQ0FBMEMsK0JBQStCLHFCQUFxQix5QkFBeUIsOEJBQThCLHNCQUFzQixLQUFLLG1CQUFtQixnQ0FBZ0MsMEJBQTBCLDBCQUEwQix5QkFBeUIsMEJBQTBCLDBDQUEwQyxLQUFLLHlCQUF5Qix1Q0FBdUMsb0NBQW9DLGdDQUFnQyxLQUFLLG9CQUFvQixnQ0FBZ0Msb0JBQW9CLHFCQUFxQixLQUFLLG9CQUFvQix5QkFBeUIsOEJBQThCLHNCQUFzQix3Q0FBd0Msd0NBQXdDLEtBQUssNEJBQTRCLDhCQUE4QixzQkFBc0IsdUNBQXVDLHVDQUF1Qyx1QkFBdUIsa0JBQWtCLDRCQUE0QixLQUFLLHdCQUF3Qiw4QkFBOEIsc0JBQXNCLHVDQUF1Qyx1Q0FBdUMsc0NBQXNDLHNDQUFzQyxLQUFLLGNBQWMscUJBQXFCLDBCQUEwQix5QkFBeUIsb0NBQW9DLGlDQUFpQyw0QkFBNEIsbUNBQW1D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c0JBQXNCLCtDQUErQyw0QkFBNEIsa0JBQWtCLDRCQUE0QixLQUFLLG9DQUFvQyxzQkFBc0IsNEJBQTRCLGdDQUFnQyw0QkFBNEIsS0FBSyxpQkFBaUIsc0JBQXNCLHVDQUF1QyxLQUFLLHFCQUFxQiwyQkFBMkIsZ0NBQWdDLDRCQUE0QixLQUFLLG1CQUFtQjtBQUN4dVg7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmViODM1NTQyNzNlMDAwZGE0MWQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9jb2xvcnMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoJy9mb250cy9mb250YXdlc29tZS9jc3MvYWxsLmNzcycpO1xcclxcbjpyb290IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCxcXHJcXG5tYWluIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xcclxcbn1cXHJcXG5cXHJcXG4jY2l0eS1saXN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVyc2lhbi1ncmVlbik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iYWJ5LXBvd2Rlcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xcclxcbiAgICBjb2xvcjogdmFyKC0tcGVyc2lhbi1ncmVlbikgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGVyc2lhbi1ncmVlbikgIWltcG9ydGFudDtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBlcnNpYW4tZ3JlZW4pICFpbXBvcnRhbnQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wZXJzaWFuLWdyZWVuKSAhaW1wb3J0YW50O1xcclxcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNiYXNpYy1uYXZiYXItbmF2LFxcclxcbiN0b3AtbmF2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBhIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxuICAgIC13ZWJraXQtZmxleDogMSAxO1xcclxcbiAgICAgICAgICAgIGZsZXg6IDEgMTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBhOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2l0eS1uYW1lIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNjaXR5LWdyaWQge1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNwcmVzZW50YXRpb24tdGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtZ2FwOiAyMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxufVxcclxcblxcclxcbiNtYXAtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFwIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbiNrZXktZmlndXJlcyB7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbiNrZXktZmlndXJlcyAqIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgLXdlYmtpdC1mbGV4OiBhdXRvO1xcclxcbiAgICAgICAgICAgIGZsZXg6IGF1dG87XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iYWJ5LXBvd2Rlcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Jldmlld3Mge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbiNyZXZpZXdzIC5jYXJkLWJvZHkge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jldmlld3MgLmNhcmQtdGl0bGUge1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXNhbmR5LWJyb3duKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJldmlldy10ZXh0IHtcXHJcXG4gICAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10ZXh0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbC1jYXB0aW9uIHtcXHJcXG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcwKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNyZXZpZXdzIC5jYXJkIHtcXHJcXG4gICAgLXdlYmtpdC1mbGV4OiAxIDE7XFxyXFxuICAgICAgICAgICAgZmxleDogMSAxO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFydG5lcnMtbG9nb3Mge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCBhdXRvKTtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbiNwYXJ0bmVycy1sb2dvcyAuY2FyZC1ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlciBkaXYge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBLDZDQUE2QztBQUU3QztJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiwrQkFBdUI7WUFB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bUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCcvZm9udHMvZm9udGF3ZXNvbWUvY3NzL2FsbC5jc3MnKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiLi9jb2xvcnMuY3NzXFxcIik7XFxyXFxuOnJvb3Qge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbjpyb290LFxcclxcbm1haW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxyXFxufVxcclxcblxcclxcbiNjaXR5LWxpc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wZXJzaWFuLWdyZWVuKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJhYnktcG93ZGVyKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10aXRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNoYXJjb2FsKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNoYXJjb2FsKTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wZXJzaWFuLWdyZWVuKSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wZXJzaWFuLWdyZWVuKSAhaW1wb3J0YW50O1xcclxcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVyc2lhbi1ncmVlbikgIWltcG9ydGFudDtcXHJcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBlcnNpYW4tZ3JlZW4pICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI2Jhc2ljLW5hdmJhci1uYXYsXFxyXFxuI3RvcC1uYXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBhIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jaGFyY29hbCk7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgYTpob3ZlciB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktbmFtZSB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2l0eS1ncmlkIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNwcmVzZW50YXRpb24tdGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG59XFxyXFxuXFxyXFxuI21hcC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbiNtYXAge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuI2tleS1maWd1cmVzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuI2tleS1maWd1cmVzICoge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBmbGV4OiBhdXRvO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmFieS1wb3dkZXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXJudC1zaWVubmEpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNyZXZpZXdzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4jcmV2aWV3cyAuY2FyZC1ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcmV2aWV3cyAuY2FyZC10aXRsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tc2FuZHktYnJvd24pO1xcclxcbn1cXHJcXG5cXHJcXG4ucmV2aWV3LXRleHQge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10ZXh0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbC1jYXB0aW9uIHtcXHJcXG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcwKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNyZXZpZXdzIC5jYXJkIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3BhcnRuZXJzLWxvZ29zIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgYXV0byk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuI3BhcnRuZXJzLWxvZ29zIC5jYXJkLWJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlciBkaXYge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==