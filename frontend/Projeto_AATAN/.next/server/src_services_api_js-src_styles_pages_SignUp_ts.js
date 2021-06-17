exports.id = "src_services_api_js-src_styles_pages_SignUp_ts";
exports.ids = ["src_services_api_js-src_styles_pages_SignUp_ts"];
exports.modules = {

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'http://localhost:3333'
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./src/styles/pages/SignUp.ts":
/*!************************************!*\
  !*** ./src/styles/pages/SignUp.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContainer": function() { return /* binding */ PageContainer; },
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Menu": function() { return /* binding */ Menu; },
/* harmony export */   "Card": function() { return /* binding */ Card; },
/* harmony export */   "CardImageContainer": function() { return /* binding */ CardImageContainer; },
/* harmony export */   "CardButton": function() { return /* binding */ CardButton; },
/* harmony export */   "Spacer": function() { return /* binding */ Spacer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SignUp__PageContainer",
  componentId: "psth77-0"
})(["display:flex;position:relative;min-height:100vh;justify-content:center;background-color:#FFF;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SignUp__Container",
  componentId: "psth77-1"
})(["max-width:375px;min-height:10vh;display:flex;flex-direction:column;align-items:center;text-align:center padding-top:110px;padding-bottom:120px;margin-top:70px;"]);
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SignUp__Menu",
  componentId: "psth77-2"
})(["display:flex;margin-top:27px;flex-direction:row;justify-content:space-evenly;"]);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SignUp__Card",
  componentId: "psth77-3"
})(["margin-top:30px;text-align:center;"]);
const CardImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SignUp__CardImageContainer",
  componentId: "psth77-4"
})(["height:125px;width:125px;position:absolute;top:-30;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:none;display:block;min-width:10% !important;max-width:100%;min-height:100%;max-height:100%;object-fit:contain;"]);
const CardButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "SignUp__CardButton",
  componentId: "psth77-5"
})(["width:232px;font-family:'Open Sans',sans-serif;font-size:14px;font-weight:500;color:#000;border:0px;padding:11px 17px;border-radius:4px;background:#fff;cursor:pointer;margin-top:18px;box-shadow:2px 2px 4px #0000003b;"]);
const Spacer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SignUp__Spacer",
  componentId: "psth77-6"
})(["margin-top:45px;"]);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYXRhbi8uL3NyYy9zZXJ2aWNlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vYWF0YW4vLi9zcmMvc3R5bGVzL3BhZ2VzL1NpZ25VcC50cyIsIndlYnBhY2s6Ly9hYXRhbi9pZ25vcmVkfEM6XFxVc2Vyc1xcQ2xpZW50ZVxcRGVza3RvcFxcUHJvamV0b19BQVRBTlxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbImFwaSIsImF4aW9zIiwiYmFzZVVSTCIsIlBhZ2VDb250YWluZXIiLCJzdHlsZWQiLCJDb250YWluZXIiLCJNZW51IiwiQ2FyZCIsIkNhcmRJbWFnZUNvbnRhaW5lciIsIkNhcmRCdXR0b24iLCJTcGFjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQSxNQUFNQSxHQUFHLEdBQUdDLG1EQUFBLENBQWE7QUFDckJDLFNBQU8sRUFBRTtBQURZLENBQWIsQ0FBWjtBQUlBLCtEQUFlRixHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFTyxNQUFNRyxhQUFhLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHFHQUFuQjtBQVFBLE1BQU1DLFNBQVMsR0FBR0QsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdUtBQWY7QUFhQSxNQUFNRSxJQUFJLEdBQUdGLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHFGQUFWO0FBY0EsTUFBTUcsSUFBSSxHQUFHSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSwwQ0FBVjtBQUlBLE1BQU1JLGtCQUFrQixHQUFHSix1RUFBSDtBQUFBO0FBQUE7QUFBQSxvUEFBeEI7QUF1QkEsTUFBTUssVUFBVSxHQUFHTCwwRUFBSDtBQUFBO0FBQUE7QUFBQSxnT0FBaEI7QUFlQSxNQUFNTSxNQUFNLEdBQUdOLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHdCQUFaLEM7Ozs7Ozs7Ozs7QUMvRVAsZSIsImZpbGUiOiJzcmNfc2VydmljZXNfYXBpX2pzLXNyY19zdHlsZXNfcGFnZXNfU2lnblVwX3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMycsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFBhZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogMzc1cHg7XG4gIG1pbi1oZWlnaHQ6IDEwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlclxuICBwYWRkaW5nLXRvcDogMTEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbiAgbWFyZ2luLXRvcDogNzBweDtcbmBcblxuXG5leHBvcnQgY29uc3QgTWVudSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDI3cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuYFxuXG5cbmludGVyZmFjZSBNZW51SXRlbUJ1dHRvblByb3BzIHtcbiAgZmlyc3RDb2xvckhleDogc3RyaW5nXG4gIHNlY29uZENvbG9ySGV4OiBzdHJpbmdcbn1cblxuXG5leHBvcnQgY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmBcbmV4cG9ydCBjb25zdCBDYXJkSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBcbiAgXG4gIGhlaWdodDogMTI1cHg7XG4gIHdpZHRoOiAxMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDEwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIFxuYFxuXG5leHBvcnQgY29uc3QgQ2FyZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHdpZHRoOiAyMzJweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXI6IDBweDtcbiAgcGFkZGluZzogMTFweCAxN3B4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggIzAwMDAwMDNiO1xuYFxuXG5leHBvcnQgY29uc3QgU3BhY2VyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogNDVweDtcbmBcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=