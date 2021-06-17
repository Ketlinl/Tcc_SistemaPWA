self["webpackHotUpdate_N_E"]("pages/signIn",{

/***/ "./src/pages/signIn/index.tsx":
/*!************************************!*\
  !*** ./src/pages/signIn/index.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignIn; }
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






function SignIn() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      password = _useState2[0],
      setPassword = _useState2[1];

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
              return _services_api__WEBPACK_IMPORTED_MODULE_7__.default.post('login', {
                email: email,
                password: password
              });

            case 4:
              response = _context.sent;
              localStorage.setItem('userId', email);
              localStorage.setItem('userName', response.data.name);
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
        lineNumber: 53,
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
            type: "email",
            placeholder: "Insira seu email",
            required: true,
            value: email,
            onChange: function onChange(e) {
              return setEmail(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
            type: "text",
            placeholder: "Insira sua senha",
            required: true,
            value: password,
            onChange: function onChange(e) {
              return setPassword(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 14
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_pages_Option__WEBPACK_IMPORTED_MODULE_6__.CardImageContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_pages_Option__WEBPACK_IMPORTED_MODULE_6__.Spacer, {}, void 0, false, {
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

_s(SignIn, "lnLPsXulL3oMypKJCpB5abnr2gw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = SignIn;

var _c;

$RefreshReg$(_c, "SignIn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NpZ25Jbi9pbmRleC50c3giXSwibmFtZXMiOlsiU2lnbkluIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUxvZ2luIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXBpIiwicmVzcG9uc2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGF0YSIsIm5hbWUiLCJwdXNoIiwiYWxlcnQiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiZGlzcGxheSIsImJvcmRlclJhZGl1cyIsImFsaWduSXRlbXMiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBaUJBO0FBR2UsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUdQQywrQ0FBUSxDQUFDLEVBQUQsQ0FIRDtBQUFBLE1BRzFCQyxLQUgwQjtBQUFBLE1BR25CQyxRQUhtQjs7QUFBQSxtQkFJREYsK0NBQVEsQ0FBQyxFQUFELENBSlA7QUFBQSxNQUkxQkcsUUFKMEI7QUFBQSxNQUloQkMsV0FKZ0I7O0FBTWpDLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBTmlDLFdBUWxCQyxXQVJrQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpU0FRakMsaUJBQTJCQyxDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUEsZUFBQyxDQUFDQyxjQUFGO0FBREY7QUFBQTtBQUFBLHFCQUsyQkMsdURBQUEsQ0FBUyxPQUFULEVBQWtCO0FBQUNULHFCQUFLLEVBQUxBLEtBQUQ7QUFBUUUsd0JBQVEsRUFBUkE7QUFBUixlQUFsQixDQUwzQjs7QUFBQTtBQUtVUSxzQkFMVjtBQU9JQywwQkFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLEVBQStCWixLQUEvQjtBQUNBVywwQkFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLEVBQWtDRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsSUFBaEQ7QUFDQVYsb0JBQU0sQ0FBQ1csSUFBUCxDQUFZLE9BQVo7QUFUSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVdJQyxtQkFBSyxDQUFDLGtDQUFELENBQUw7O0FBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FSaUM7QUFBQTtBQUFBOztBQXVCL0Isc0JBQ0UsOERBQUMsK0RBQUQ7QUFBQSwyQkFDRSw4REFBQywyREFBRDtBQUFBLDhCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsV0FBRyxFQUFDLGtCQUROO0FBRUUsYUFBSyxFQUFDLFFBRlI7QUFHRSxjQUFNLEVBQUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRSw4REFBQyxzREFBRDtBQUFBLCtCQUNFO0FBQU0sbUJBQVMsRUFBQyxXQUFoQjtBQUE0QixrQkFBUSxFQUFFVixXQUF0QztBQUNBLGVBQUssRUFBRTtBQUFFVyxpQkFBSyxFQUFFLE9BQVQ7QUFBaUJDLHNCQUFVLEVBQUUsTUFBN0I7QUFBb0NDLG1CQUFPLEVBQUUsTUFBN0M7QUFDTEMsbUJBQU8sRUFBRSxNQURKO0FBQ2EsNkJBQWlCLFFBRDlCO0FBQ3VDQyx3QkFBWSxFQUFFLE1BRHJEO0FBQzREQyxzQkFBVSxFQUFFO0FBRHhFLFdBRFA7QUFBQSxrQ0FHRTtBQUNFLGdCQUFJLEVBQUMsT0FEUDtBQUVFLHVCQUFXLEVBQUMsa0JBRmQ7QUFHRSxvQkFBUSxNQUhWO0FBSUUsaUJBQUssRUFBRXRCLEtBSlQ7QUFLRSxvQkFBUSxFQUFFLGtCQUFBTyxDQUFDO0FBQUEscUJBQUlOLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDZ0IsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFBQTtBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsZUFVRztBQUNDLGdCQUFJLEVBQUMsTUFETjtBQUVDLHVCQUFXLEVBQUMsa0JBRmI7QUFHQyxvQkFBUSxNQUhUO0FBSUMsaUJBQUssRUFBRXRCLFFBSlI7QUFLQyxvQkFBUSxFQUFFLGtCQUFBSyxDQUFDO0FBQUEscUJBQUlKLFdBQVcsQ0FBQ0ksQ0FBQyxDQUFDZ0IsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkgsZUFpQkU7QUFBUSxxQkFBUyxFQUFDLEtBQWxCO0FBQXdCLGdCQUFJLEVBQUMsUUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQTZCRSw4REFBQyxvRUFBRDtBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFDLHdCQUFYO0FBQW9DLGdCQUFNLEVBQUMsTUFBM0M7QUFBa0QsbUJBQVMsRUFBQyxTQUE1RDtBQUFzRSx3QkFBYyxFQUFDO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JGLGVBZ0NFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUNEOztHQWhFdUIxQixNO1VBTVRPLGtEOzs7S0FOU1AsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduSW4uZmJkMjRkZTg1N2E1OTY2OTYxOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlcidcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBNZW51LFxuICBDYXJkLFxuICBDYXJkQnV0dG9uLFxuICBDYXJkSW1hZ2VDb250YWluZXIsXG4gIFBhZ2VDb250YWluZXIsXG4gIFNwYWNlclxufSBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZXMvT3B0aW9uJ1xuXG5pbnRlcmZhY2UgTWVudUl0ZW1Qcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgaW1hZ2VTcmM6IHN0cmluZ1xuICBmaXJzdENvbG9ySGV4OiBzdHJpbmdcbiAgc2Vjb25kQ29sb3JIZXg6IHN0cmluZ1xuICB1cmw6IHN0cmluZ1xufVxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcblxuXG5jb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbmNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9naW4oZSl7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnbG9naW4nLCB7ZW1haWwsIHBhc3N3b3JkfSk7XG4gIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBlbWFpbCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJOYW1lJywgIHJlc3BvbnNlLmRhdGEubmFtZSk7XG4gICAgcm91dGVyLnB1c2goJy9ob21lJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGFsZXJ0KCdGYWxoYSBubyBMb2dpbiwgdGVudGUgbm92YW1lbnRlIScpO1xuICB9XG59XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUNvbnRhaW5lciAgPlxuICAgICAgPENvbnRhaW5lciA+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIlxuICAgICAgICAgIHdpZHRoPVwiMTUyLjQzXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMjkuMDRcIlxuICAgICAgICAvPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtU3RpbGVcIiBvblN1Ym1pdD17aGFuZGxlTG9naW59IFxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIwcmVtXCIsYmFja2dyb3VuZDogXCIjZmZmXCIscGFkZGluZzogXCIyMHB4XCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIiwgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLGJvcmRlclJhZGl1czogJzEwcHgnLGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgc2V1IGVtYWlsXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPiAgICAgICBcbiAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBzdWEgc2VuaGFcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+ICBcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiICA+IEVOVFJBUjwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgPENhcmRJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9mb290cHJpbnRzLnBuZ1wiIGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgb2JqZWN0UG9zaXRpb249XCJib3R0b21cIiAvPlxuICAgICAgICA8L0NhcmRJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgPFNwYWNlciAvPlxuXG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgIDwvUGFnZUNvbnRhaW5lcj5cblxuICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=