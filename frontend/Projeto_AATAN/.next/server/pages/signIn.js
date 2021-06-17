(function() {
var exports = {};
exports.id = "pages/signIn";
exports.ids = ["pages/signIn"];
exports.modules = {

/***/ "./src/pages/signIn/index.tsx":
/*!************************************!*\
  !*** ./src/pages/signIn/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignIn; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_pages_Option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/pages/Option */ "./src/styles/pages/Option.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.js");

var _jsxFileName = "C:\\Users\\Cliente\\Desktop\\Projeto_AATAN\\src\\pages\\signIn\\index.tsx";





function SignIn() {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await _services_api__WEBPACK_IMPORTED_MODULE_5__.default.post('login', {
        email,
        password
      });
      localStorage.setItem('userId', email);
      localStorage.setItem('userName', response.data.name);
      router.push('/home');
    } catch (err) {
      alert('Falha no Login, tente novamente!');
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Option__WEBPACK_IMPORTED_MODULE_4__.PageContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Option__WEBPACK_IMPORTED_MODULE_4__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: "/images/logo.png",
        width: "152.43",
        height: "129.04"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Option__WEBPACK_IMPORTED_MODULE_4__.Card, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          className: "formStile",
          onSubmit: handleLogin,
          style: {
            width: "20rem",
            background: "#fff",
            padding: "20px",
            display: "flex",
            "flexDirection": "column",
            borderRadius: '10px',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "email",
            placeholder: "Insira seu email",
            required: true,
            value: email,
            onChange: e => setEmail(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            placeholder: "Insira sua senha",
            required: true,
            value: password,
            onChange: e => setPassword(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 14
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "btn",
            type: "submit",
            children: " ENTRAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Option__WEBPACK_IMPORTED_MODULE_4__.CardImageContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: "/images/footprints.png",
          layout: "fill",
          objectFit: "contain",
          objectPosition: "bottom"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Option__WEBPACK_IMPORTED_MODULE_4__.Spacer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

/***/ }),

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js","src_styles_pages_Option_ts"], function() { return __webpack_exec__("./src/pages/signIn/index.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYXRhbi8uL3NyYy9wYWdlcy9zaWduSW4vaW5kZXgudHN4Iiwid2VicGFjazovL2FhdGFuLy4vc3JjL3NlcnZpY2VzL2FwaS5qcyIsIndlYnBhY2s6Ly9hYXRhbi9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vYWF0YW4vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9hYXRhbi9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2FhdGFuL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9hYXRhbi9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vYWF0YW4vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2FhdGFuL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vYWF0YW4vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlNpZ25JbiIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiYXBpIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRhdGEiLCJuYW1lIiwicHVzaCIsImVyciIsImFsZXJ0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImRpc3BsYXkiLCJib3JkZXJSYWRpdXMiLCJhbGlnbkl0ZW1zIiwidGFyZ2V0IiwidmFsdWUiLCJheGlvcyIsImJhc2VVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7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RjtBQXlDRCxDOzs7Ozs7Ozs7Ozs7OztBQzFGRDtBQUdBLE1BQU1mLEdBQUcsR0FBR2dCLG1EQUFBLENBQWE7QUFDckJDLFNBQU8sRUFBRTtBQURZLENBQWIsQ0FBWjtBQUlBLCtEQUFlakIsR0FBZixFOzs7Ozs7Ozs7OztBQ1BBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL3NpZ25Jbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlcidcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBNZW51LFxuICBDYXJkLFxuICBDYXJkQnV0dG9uLFxuICBDYXJkSW1hZ2VDb250YWluZXIsXG4gIFBhZ2VDb250YWluZXIsXG4gIFNwYWNlclxufSBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZXMvT3B0aW9uJ1xuXG5pbnRlcmZhY2UgTWVudUl0ZW1Qcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgaW1hZ2VTcmM6IHN0cmluZ1xuICBmaXJzdENvbG9ySGV4OiBzdHJpbmdcbiAgc2Vjb25kQ29sb3JIZXg6IHN0cmluZ1xuICB1cmw6IHN0cmluZ1xufVxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcblxuXG5jb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbmNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9naW4oZSl7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnbG9naW4nLCB7ZW1haWwsIHBhc3N3b3JkfSk7XG4gIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBlbWFpbCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJOYW1lJywgIHJlc3BvbnNlLmRhdGEubmFtZSk7XG4gICAgcm91dGVyLnB1c2goJy9ob21lJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGFsZXJ0KCdGYWxoYSBubyBMb2dpbiwgdGVudGUgbm92YW1lbnRlIScpO1xuICB9XG59XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUNvbnRhaW5lciAgPlxuICAgICAgPENvbnRhaW5lciA+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIlxuICAgICAgICAgIHdpZHRoPVwiMTUyLjQzXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMjkuMDRcIlxuICAgICAgICAvPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtU3RpbGVcIiBvblN1Ym1pdD17aGFuZGxlTG9naW59IFxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIwcmVtXCIsYmFja2dyb3VuZDogXCIjZmZmXCIscGFkZGluZzogXCIyMHB4XCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIiwgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLGJvcmRlclJhZGl1czogJzEwcHgnLGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgc2V1IGVtYWlsXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPiAgICAgICBcbiAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBzdWEgc2VuaGFcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+ICBcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiICA+IEVOVFJBUjwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgPENhcmRJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9mb290cHJpbnRzLnBuZ1wiIGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgb2JqZWN0UG9zaXRpb249XCJib3R0b21cIiAvPlxuICAgICAgICA8L0NhcmRJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgPFNwYWNlciAvPlxuXG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgIDwvUGFnZUNvbnRhaW5lcj5cblxuICApXG59XG5cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjMzMzMnLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==