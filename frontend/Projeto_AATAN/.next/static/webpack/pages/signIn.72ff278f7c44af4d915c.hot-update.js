self["webpackHotUpdate_N_E"]("pages/signIn",{

/***/ "./src/pages/signIn/index.tsx":
/*!************************************!*\
  !*** ./src/pages/signIn/index.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignInAdm; }
/* harmony export */ });
/* harmony import */ var C_Users_Cliente_Desktop_Projeto_AATAN_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Cliente_Desktop_Projeto_AATAN_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Cliente_Desktop_Projeto_AATAN_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Cliente_Desktop_Projeto_AATAN_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_pages_Option__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/pages/Option */ "./src/styles/pages/Option.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Cliente\\Desktop\\Projeto_AATAN\\src\\pages\\signIn\\index.tsx",
    _s = $RefreshSig$();






function SignInAdm() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      id = _useState[0],
      setId = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  function handleLogin(_x) {
    return _handleLogin.apply(this, arguments);
  }

  function _handleLogin() {
    _handleLogin = (0,C_Users_Cliente_Desktop_Projeto_AATAN_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Cliente_Desktop_Projeto_AATAN_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var response;
      return C_Users_Cliente_Desktop_Projeto_AATAN_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              _context.next = 4;
              return _services_api__WEBPACK_IMPORTED_MODULE_7__.default.post('session', {
                id: id
              });

            case 4:
              response = _context.sent;
              localStorage.setItem('ongId', id);
              localStorage.setItem('ongName', response.data.name);
              router.push('/home');
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              alert('Falha no Login, tente novamente!');

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));
    return _handleLogin.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_pages_Option__WEBPACK_IMPORTED_MODULE_6__.PageContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_pages_Option__WEBPACK_IMPORTED_MODULE_6__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
        src: "/images/logo.png",
        width: "152.43",
        height: "129.04"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_pages_Option__WEBPACK_IMPORTED_MODULE_6__.Card, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
            type: "text",
            placeholder: "Insira seu c\xF3digo de acesso",
            required: true,
            value: id,
            onChange: function onChange(e) {
              return setId(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
            type: "text",
            placeholder: "Insira seu c\xF3digo de acesso",
            required: true,
            value: id,
            onChange: function onChange(e) {
              return setId(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 14
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "btn",
            type: "submit",
            children: " ENTRAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_pages_Option__WEBPACK_IMPORTED_MODULE_6__.CardImageContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: "/images/footprints.png",
          layout: "fill",
          objectFit: "contain",
          objectPosition: "bottom"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_pages_Option__WEBPACK_IMPORTED_MODULE_6__.Spacer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
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

_s(SignInAdm, "HcucXKIAQG0cRJ3oLb8CGSJgwlg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = SignInAdm;

var _c;

$RefreshReg$(_c, "SignInAdm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NpZ25Jbi9pbmRleC50c3giXSwibmFtZXMiOlsiU2lnbkluQWRtIiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlTG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJhcGkiLCJyZXNwb25zZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhIiwibmFtZSIsInB1c2giLCJhbGVydCIsIndpZHRoIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJkaXNwbGF5IiwiYm9yZGVyUmFkaXVzIiwiYWxpZ25JdGVtcyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFpQkE7QUFHZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ2hCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEUTtBQUFBLE1BQzdCQyxFQUQ2QjtBQUFBLE1BQ3pCQyxLQUR5Qjs7QUFFcEMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFGb0MsV0FHckJDLFdBSHFCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlTQUdwQyxpQkFBMkJDLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxlQUFDLENBQUNDLGNBQUY7QUFERjtBQUFBO0FBQUEscUJBSzJCQyx1REFBQSxDQUFTLFNBQVQsRUFBb0I7QUFBQ1Asa0JBQUUsRUFBRkE7QUFBRCxlQUFwQixDQUwzQjs7QUFBQTtBQUtVUSxzQkFMVjtBQU9JQywwQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCVixFQUE5QjtBQUNBUywwQkFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLEVBQWlDRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsSUFBL0M7QUFDQVYsb0JBQU0sQ0FBQ1csSUFBUCxDQUFZLE9BQVo7QUFUSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVdJQyxtQkFBSyxDQUFDLGtDQUFELENBQUw7O0FBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIb0M7QUFBQTtBQUFBOztBQWtCbEMsc0JBQ0UsOERBQUMsK0RBQUQ7QUFBQSwyQkFDRSw4REFBQywyREFBRDtBQUFBLDhCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsV0FBRyxFQUFDLGtCQUROO0FBRUUsYUFBSyxFQUFDLFFBRlI7QUFHRSxjQUFNLEVBQUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRSw4REFBQyxzREFBRDtBQUFBLCtCQUNFO0FBQU0sbUJBQVMsRUFBQyxXQUFoQjtBQUE0QixrQkFBUSxFQUFFVixXQUF0QztBQUNBLGVBQUssRUFBRTtBQUFFVyxpQkFBSyxFQUFFLE9BQVQ7QUFBaUJDLHNCQUFVLEVBQUUsTUFBN0I7QUFBb0NDLG1CQUFPLEVBQUUsTUFBN0M7QUFDTEMsbUJBQU8sRUFBRSxNQURKO0FBQ2EsNkJBQWlCLFFBRDlCO0FBQ3VDQyx3QkFBWSxFQUFFLE1BRHJEO0FBQzREQyxzQkFBVSxFQUFFO0FBRHhFLFdBRFA7QUFBQSxrQ0FHRTtBQUNFLGdCQUFJLEVBQUMsTUFEUDtBQUVFLHVCQUFXLEVBQUMsZ0NBRmQ7QUFHRSxvQkFBUSxNQUhWO0FBSUUsaUJBQUssRUFBRXBCLEVBSlQ7QUFLRSxvQkFBUSxFQUFFLGtCQUFBSyxDQUFDO0FBQUEscUJBQUlKLEtBQUssQ0FBQ0ksQ0FBQyxDQUFDZ0IsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFBQTtBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsZUFVRztBQUNDLGdCQUFJLEVBQUMsTUFETjtBQUVDLHVCQUFXLEVBQUMsZ0NBRmI7QUFHQyxvQkFBUSxNQUhUO0FBSUMsaUJBQUssRUFBRXRCLEVBSlI7QUFLQyxvQkFBUSxFQUFFLGtCQUFBSyxDQUFDO0FBQUEscUJBQUlKLEtBQUssQ0FBQ0ksQ0FBQyxDQUFDZ0IsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkgsZUFpQkU7QUFBUSxxQkFBUyxFQUFDLEtBQWxCO0FBQXdCLGdCQUFJLEVBQUMsUUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQTZCRSw4REFBQyxvRUFBRDtBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFDLHdCQUFYO0FBQW9DLGdCQUFNLEVBQUMsTUFBM0M7QUFBa0QsbUJBQVMsRUFBQyxTQUE1RDtBQUFzRSx3QkFBYyxFQUFDO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JGLGVBZ0NFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUNEOztHQTNEdUJ4QixTO1VBRVRLLGtEOzs7S0FGU0wsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduSW4uNzJmZjI3OGY3YzQ0YWY0ZDkxNWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlcidcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBNZW51LFxuICBDYXJkLFxuICBDYXJkQnV0dG9uLFxuICBDYXJkSW1hZ2VDb250YWluZXIsXG4gIFBhZ2VDb250YWluZXIsXG4gIFNwYWNlclxufSBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZXMvT3B0aW9uJ1xuXG5pbnRlcmZhY2UgTWVudUl0ZW1Qcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgaW1hZ2VTcmM6IHN0cmluZ1xuICBmaXJzdENvbG9ySGV4OiBzdHJpbmdcbiAgc2Vjb25kQ29sb3JIZXg6IHN0cmluZ1xuICB1cmw6IHN0cmluZ1xufVxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbkFkbSgpIHtcbmNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5hc3luYyBmdW5jdGlvbiBoYW5kbGVMb2dpbihlKXtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCdzZXNzaW9uJywge2lkfSk7XG4gIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvbmdJZCcsIGlkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb25nTmFtZScsICByZXNwb25zZS5kYXRhLm5hbWUpO1xuICAgIHJvdXRlci5wdXNoKCcvaG9tZScpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBhbGVydCgnRmFsaGEgbm8gTG9naW4sIHRlbnRlIG5vdmFtZW50ZSEnKTtcbiAgfVxufVxuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VDb250YWluZXIgID5cbiAgICAgIDxDb250YWluZXIgPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCJcbiAgICAgICAgICB3aWR0aD1cIjE1Mi40M1wiXG4gICAgICAgICAgaGVpZ2h0PVwiMTI5LjA0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybVN0aWxlXCIgb25TdWJtaXQ9e2hhbmRsZUxvZ2lufSBcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMHJlbVwiLGJhY2tncm91bmQ6IFwiI2ZmZlwiLHBhZGRpbmc6IFwiMjBweFwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixib3JkZXJSYWRpdXM6ICcxMHB4JyxhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgc2V1IGPDs2RpZ28gZGUgYWNlc3NvXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgdmFsdWU9e2lkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPiAgICAgICBcbiAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBzZXUgY8OzZGlnbyBkZSBhY2Vzc29cIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICB2YWx1ZT17aWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldElkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+ICBcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiICA+IEVOVFJBUjwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgPENhcmRJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9mb290cHJpbnRzLnBuZ1wiIGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgb2JqZWN0UG9zaXRpb249XCJib3R0b21cIiAvPlxuICAgICAgICA8L0NhcmRJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgPFNwYWNlciAvPlxuXG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgIDwvUGFnZUNvbnRhaW5lcj5cblxuICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=