(function() {
var exports = {};
exports.id = "pages/signUpAdm";
exports.ids = ["pages/signUpAdm"];
exports.modules = {

/***/ "./src/pages/signUpAdm/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/signUpAdm/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignUpAdm; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/pages/Home */ "./src/styles/pages/Home.ts");
/* harmony import */ var _styles_pages_SignUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/pages/SignUp */ "./src/styles/pages/SignUp.ts");

var _jsxFileName = "C:\\Users\\Cliente\\Desktop\\Projeto_AATAN\\src\\pages\\signUpAdm\\index.tsx";








function SignUpAdm() {
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: whatsapp,
    1: setWhatsapp
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: city,
    1: setCity
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: uf,
    1: setUf
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__.default.post('ongs', data);
      alert(`Seu código de acesso: ${response.data.id}`);
      router.push('/signInAdm');
    } catch (err) {
      alert('Erro no cadastro, tente novamente!');
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_SignUp__WEBPACK_IMPORTED_MODULE_7__.PageContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_6__.HeaderContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
        style: {
          marginTop: "30px",
          color: '#A1A1A1'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row headerAlign",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/option",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiChevronLeft, {
                size: 30,
                color: "#A1A1A1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "textoHeader",
              children: "CADASTRO"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_SignUp__WEBPACK_IMPORTED_MODULE_7__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          marginTop: "30px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: handleRegister,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            placeholder: "Nome da ONG",
            value: name,
            onChange: e => setName(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "email",
            placeholder: "Email",
            value: email,
            onChange: e => setEmail(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            placeholder: "Whatsapp",
            value: whatsapp,
            onChange: e => setWhatsapp(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "input-group",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              placeholder: "Cidade",
              value: city,
              onChange: e => setCity(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              placeholder: "UF",
              value: uf,
              onChange: e => setUf(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "btn",
            type: "submit",
            children: "CADASTRAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_SignUp__WEBPACK_IMPORTED_MODULE_7__.CardImageContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: "/images/footprints.png",
          layout: "fill",
          objectFit: "contain",
          objectPosition: "bottom"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js","vendors-node_modules_next_link_js","vendors-node_modules_react-icons_fi_index_esm_js","src_styles_pages_Home_ts-src_styles_pages_SignUp_ts"], function() { return __webpack_exec__("./src/pages/signUpAdm/index.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYXRhbi8uL3NyYy9wYWdlcy9zaWduVXBBZG0vaW5kZXgudHN4Iiwid2VicGFjazovL2FhdGFuLy4vc3JjL3NlcnZpY2VzL2FwaS5qcyIsIndlYnBhY2s6Ly9hYXRhbi9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vYWF0YW4vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9hYXRhbi9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9hYXRhbi9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9hYXRhbi9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2FhdGFuL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9hYXRhbi9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vYWF0YW4vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2FhdGFuL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9hYXRhbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2FhdGFuL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJTaWduVXBBZG0iLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsIndoYXRzYXBwIiwic2V0V2hhdHNhcHAiLCJjaXR5Iiwic2V0Q2l0eSIsInVmIiwic2V0VWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVSZWdpc3RlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJyZXNwb25zZSIsImFwaSIsImFsZXJ0IiwiaWQiLCJwdXNoIiwiZXJyIiwibWFyZ2luVG9wIiwiY29sb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsImF4aW9zIiwiYmFzZVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdlLFNBQVNBLFNBQVQsR0FBcUI7QUFDbEMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDRyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkosK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sRUFBRDtBQUFBLE9BQUtDO0FBQUwsTUFBY1IsK0NBQVEsQ0FBQyxFQUFELENBQTVCO0FBRUEsUUFBTVMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxpQkFBZUMsY0FBZixDQUE4QkMsQ0FBOUIsRUFBaUM7QUFDL0JBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBLFVBQU1DLElBQUksR0FBRztBQUNYaEIsVUFEVztBQUVYRyxXQUZXO0FBR1hFLGNBSFc7QUFJWEUsVUFKVztBQUtYRTtBQUxXLEtBQWI7O0FBT0EsUUFBSTtBQUNGLFlBQU1RLFFBQVEsR0FBRyxNQUFNQyx1REFBQSxDQUFTLE1BQVQsRUFBaUJGLElBQWpCLENBQXZCO0FBQ0FHLFdBQUssQ0FBRSx5QkFBd0JGLFFBQVEsQ0FBQ0QsSUFBVCxD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Z0JBQU0sRUFBQyxNQUEzQztBQUFrRCxtQkFBUyxFQUFDLFNBQTVEO0FBQXNFLHdCQUFjLEVBQUM7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1REQsQzs7Ozs7Ozs7Ozs7Ozs7QUN6R0Q7QUFHQSxNQUFNUixHQUFHLEdBQUdTLG1EQUFBLENBQWE7QUFDckJDLFNBQU8sRUFBRTtBQURZLENBQWIsQ0FBWjtBQUlBLCtEQUFlVixHQUFmLEU7Ozs7Ozs7Ozs7O0FDUEEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvc2lnblVwQWRtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcidcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCAgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBGaUNoZXZyb25MZWZ0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge0hlYWRlckNvbnRhaW5lcn0gZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2VzL0hvbWUnXG5cbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgTWVudSxcbiAgQ2FyZCxcbiAgQ2FyZEJ1dHRvbixcbiAgQ2FyZEltYWdlQ29udGFpbmVyLFxuICBQYWdlQ29udGFpbmVyLFxuICBTcGFjZXJcbn0gZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2VzL1NpZ25VcCdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXBBZG0oKSB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt3aGF0c2FwcCwgc2V0V2hhdHNhcHBdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY2l0eSwgc2V0Q2l0eV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt1Ziwgc2V0VWZdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlZ2lzdGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgd2hhdHNhcHAsXG4gICAgICBjaXR5LFxuICAgICAgdWZcbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCdvbmdzJywgZGF0YSk7XG4gICAgICBhbGVydChgU2V1IGPDs2RpZ28gZGUgYWNlc3NvOiAke3Jlc3BvbnNlLmRhdGEuaWR9YCk7XG4gICAgICByb3V0ZXIucHVzaCgnL3NpZ25JbkFkbScpO1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydCgnRXJybyBubyBjYWRhc3RybywgdGVudGUgbm92YW1lbnRlIScpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VDb250YWluZXI+XG4gICAgICA8SGVhZGVyQ29udGFpbmVyPlxuICAgICAgICA8aGVhZGVyIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIsIGNvbG9yOiAnI0ExQTFBMScgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaGVhZGVyQWxpZ25cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb3B0aW9uXCI+XG4gICAgICAgICAgICA8RmlDaGV2cm9uTGVmdCBzaXplPXszMH0gY29sb3I9XCIjQTFBMUExXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0b0hlYWRlclwiPkNBREFTVFJPPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgIDwvSGVhZGVyQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lcj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVJlZ2lzdGVyfT5cbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIk5vbWUgZGEgT05HXCJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiV2hhdHNhcHBcIlxuICAgICAgICAgICAgICB2YWx1ZT17d2hhdHNhcHB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFdoYXRzYXBwKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiQ2lkYWRlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2l0eX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDaXR5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVUZcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17dWZ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VWYoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiPkNBREFTVFJBUjwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDYXJkSW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvZm9vdHByaW50cy5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIG9iamVjdFBvc2l0aW9uPVwiYm90dG9tXCIgLz5cbiAgICAgICAgPC9DYXJkSW1hZ2VDb250YWluZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgIDwvUGFnZUNvbnRhaW5lcj5cblxuICApXG59XG5cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjMzMzMnLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=