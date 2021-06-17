(function() {
var exports = {};
exports.id = "pages/signInAdm";
exports.ids = ["pages/signInAdm"];
exports.modules = {

/***/ "./src/pages/signInAdm/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/signInAdm/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignInAdm; }
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

var _jsxFileName = "C:\\Users\\Cliente\\Desktop\\Projeto_AATAN\\src\\pages\\signInAdm\\index.tsx";





function SignInAdm() {
  const {
    0: id,
    1: setId
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await _services_api__WEBPACK_IMPORTED_MODULE_5__.default.post('session', {
        id
      });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
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
        lineNumber: 48,
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
            type: "text",
            placeholder: "Insira seu c\xF3digo de acesso",
            required: true,
            value: id,
            onChange: e => setId(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "btn",
            type: "submit",
            children: " ENTRAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Option__WEBPACK_IMPORTED_MODULE_4__.CardImageContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: "/images/footprints.png",
          layout: "fill",
          objectFit: "contain",
          objectPosition: "bottom"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Option__WEBPACK_IMPORTED_MODULE_4__.Spacer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js","src_styles_pages_Option_ts"], function() { return __webpack_exec__("./src/pages/signInAdm/index.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYXRhbi8uL3NyYy9wYWdlcy9zaWduSW5BZG0vaW5kZXgudHN4Iiwid2VicGFjazovL2FhdGFuLy4vc3JjL3NlcnZpY2VzL2FwaS5qcyIsIndlYnBhY2s6Ly9hYXRhbi9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vYWF0YW4vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9hYXRhbi9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2FhdGFuL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9hYXRhbi9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vYWF0YW4vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2FhdGFuL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vYWF0YW4vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlNpZ25JbkFkbSIsImlkIiwic2V0SWQiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUxvZ2luIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJhcGkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGF0YSIsIm5hbWUiLCJwdXNoIiwiZXJyIiwiYWxlcnQiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiZGlzcGxheSIsImJvcmRlclJhZGl1cyIsImFsaWduSXRlbXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsImF4aW9zIiwiYmFzZVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQWlCQTtBQUdl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Q29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgTWVudSxcbiAgQ2FyZCxcbiAgQ2FyZEJ1dHRvbixcbiAgQ2FyZEltYWdlQ29udGFpbmVyLFxuICBQYWdlQ29udGFpbmVyLFxuICBTcGFjZXJcbn0gZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2VzL09wdGlvbidcblxuaW50ZXJmYWNlIE1lbnVJdGVtUHJvcHMge1xuICB0aXRsZTogc3RyaW5nXG4gIGltYWdlU3JjOiBzdHJpbmdcbiAgZmlyc3RDb2xvckhleDogc3RyaW5nXG4gIHNlY29uZENvbG9ySGV4OiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbn1cbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5BZG0oKSB7XG5jb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuYXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9naW4oZSl7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnc2Vzc2lvbicsIHtpZH0pO1xuICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb25nSWQnLCBpZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29uZ05hbWUnLCAgcmVzcG9uc2UuZGF0YS5uYW1lKTtcbiAgICByb3V0ZXIucHVzaCgnL2hvbWUnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgYWxlcnQoJ0ZhbGhhIG5vIExvZ2luLCB0ZW50ZSBub3ZhbWVudGUhJyk7XG4gIH1cbn1cblxuICByZXR1cm4gKFxuICAgIDxQYWdlQ29udGFpbmVyICA+XG4gICAgICA8Q29udGFpbmVyID5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiXG4gICAgICAgICAgd2lkdGg9XCIxNTIuNDNcIlxuICAgICAgICAgIGhlaWdodD1cIjEyOS4wNFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm1TdGlsZVwiIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0gXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjByZW1cIixiYWNrZ3JvdW5kOiBcIiNmZmZcIixwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLCAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsYm9yZGVyUmFkaXVzOiAnMTBweCcsYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHNldSBjw7NkaWdvIGRlIGFjZXNzb1wiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHZhbHVlPXtpZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz4gICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHR5cGU9XCJzdWJtaXRcIiAgPiBFTlRSQVI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgIDxDYXJkSW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvZm9vdHByaW50cy5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIG9iamVjdFBvc2l0aW9uPVwiYm90dG9tXCIgLz5cbiAgICAgICAgPC9DYXJkSW1hZ2VDb250YWluZXI+XG4gICAgICAgIDxTcGFjZXIgLz5cblxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICA8L1BhZ2VDb250YWluZXI+XG5cbiAgKVxufVxuXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDozMzMzJyxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=