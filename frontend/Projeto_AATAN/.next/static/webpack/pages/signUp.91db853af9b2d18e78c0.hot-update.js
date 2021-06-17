self["webpackHotUpdate_N_E"]("pages/signUp",{

/***/ "./src/pages/signUp/index.tsx":
/*!************************************!*\
  !*** ./src/pages/signUp/index.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignUp; }
/* harmony export */ });
/* harmony import */ var C_Users_Cliente_Desktop_Projeto_AATAN_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Cliente_Desktop_Projeto_AATAN_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Cliente_Desktop_Projeto_AATAN_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Cliente_Desktop_Projeto_AATAN_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/pages/Home */ "./src/styles/pages/Home.ts");
/* harmony import */ var _styles_pages_SignUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/pages/SignUp */ "./src/styles/pages/SignUp.ts");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Cliente\\Desktop\\Projeto_AATAN\\src\\pages\\signUp\\index.tsx",
    _s = $RefreshSig$();









function SignUp() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      whatsapp = _useState3[0],
      setWhatsapp = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      city = _useState4[0],
      setCity = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      uf = _useState5[0],
      setUf = _useState5[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();

  function handleRegister(_x) {
    return _handleRegister.apply(this, arguments);
  }

  function _handleRegister() {
    _handleRegister = (0,C_Users_Cliente_Desktop_Projeto_AATAN_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Cliente_Desktop_Projeto_AATAN_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var data, response;
      return C_Users_Cliente_Desktop_Projeto_AATAN_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              data = {
                name: name,
                email: email,
                whatsapp: whatsapp,
                city: city,
                uf: uf
              };
              _context.prev = 2;
              _context.next = 5;
              return _services_api__WEBPACK_IMPORTED_MODULE_5__.default.post('ongs', data);

            case 5:
              response = _context.sent;
              alert("Seu c\xF3digo de acesso: ".concat(response.data.id));
              router.push('/signInAdm');
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              alert('Erro no cadastro, tente novamente!');

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 10]]);
    }));
    return _handleRegister.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_pages_SignUp__WEBPACK_IMPORTED_MODULE_9__.PageContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_8__.HeaderContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
        style: {
          marginTop: "30px",
          color: '#A1A1A1'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "row headerAlign",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/option",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_10__.FiChevronLeft, {
                size: 30,
                color: "#A1A1A1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              className: "textoHeader",
              children: "CADASTRO DE USU\xC1RIO"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_pages_SignUp__WEBPACK_IMPORTED_MODULE_9__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        style: {
          marginTop: "30px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
          onSubmit: handleRegister,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
            placeholder: "Nome da ONG",
            value: name,
            onChange: function onChange(e) {
              return setName(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
            type: "email",
            placeholder: "Email",
            value: email,
            onChange: function onChange(e) {
              return setEmail(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
            placeholder: "Whatsapp",
            value: whatsapp,
            onChange: function onChange(e) {
              return setWhatsapp(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "input-group",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              placeholder: "Cidade",
              value: city,
              onChange: function onChange(e) {
                return setCity(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              placeholder: "UF",
              value: uf,
              onChange: function onChange(e) {
                return setUf(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "btn",
            type: "submit",
            children: "CADASTRAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_pages_SignUp__WEBPACK_IMPORTED_MODULE_9__.CardImageContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: "/images/footprints.png",
          layout: "fill",
          objectFit: "contain",
          objectPosition: "bottom"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

_s(SignUp, "Ra+2aN7cqwVm6UCOYTeabUoowEo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];
});

_c = SignUp;

var _c;

$RefreshReg$(_c, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NpZ25VcC9pbmRleC50c3giXSwibmFtZXMiOlsiU2lnblVwIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJ3aGF0c2FwcCIsInNldFdoYXRzYXBwIiwiY2l0eSIsInNldENpdHkiLCJ1ZiIsInNldFVmIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlUmVnaXN0ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiYXBpIiwicmVzcG9uc2UiLCJhbGVydCIsImlkIiwicHVzaCIsIm1hcmdpblRvcCIsImNvbG9yIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFFUEMsK0NBQVEsQ0FBQyxFQUFELENBRkQ7QUFBQSxNQUV4QkMsSUFGd0I7QUFBQSxNQUVsQkMsT0FGa0I7O0FBQUEsbUJBR0xGLCtDQUFRLENBQUMsRUFBRCxDQUhIO0FBQUEsTUFHeEJHLEtBSHdCO0FBQUEsTUFHakJDLFFBSGlCOztBQUFBLG1CQUlDSiwrQ0FBUSxDQUFDLEVBQUQsQ0FKVDtBQUFBLE1BSXhCSyxRQUp3QjtBQUFBLE1BSWRDLFdBSmM7O0FBQUEsbUJBS1BOLCtDQUFRLENBQUMsRUFBRCxDQUxEO0FBQUEsTUFLeEJPLElBTHdCO0FBQUEsTUFLbEJDLE9BTGtCOztBQUFBLG1CQU1YUiwrQ0FBUSxDQUFDLEVBQUQsQ0FORztBQUFBLE1BTXhCUyxFQU53QjtBQUFBLE1BTXBCQyxLQU5vQjs7QUFRL0IsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFSK0IsV0FVaEJDLGNBVmdCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG9TQVUvQixpQkFBOEJDLENBQTlCO0FBQUE7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QUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFLRTtBQUFPLHlCQUFXLEVBQUMsSUFBbkI7QUFDRSxtQkFBSyxFQUFFaEIsRUFEVDtBQUVFLHNCQUFRLEVBQUUsa0JBQUFLLENBQUM7QUFBQSx1QkFBSUosS0FBSyxDQUFDSSxDQUFDLENBQUNVLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQUE7QUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkRixlQXlCRTtBQUFRLHFCQUFTLEVBQUMsS0FBbEI7QUFBd0IsZ0JBQUksRUFBQyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBK0JFLDhEQUFDLG9FQUFEO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUMsd0JBQVg7QUFBb0MsZ0JBQU0sRUFBQyxNQUEzQztBQUFrRCxtQkFBUyxFQUFDLFNBQTVEO0FBQXNFLHdCQUFjLEVBQUM7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1REQ7O0dBckZ1QjFCLE07VUFRUGEsa0Q7OztLQVJPYixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25VcC45MWRiODUzYWY5YjJkMThlNzhjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcidcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCAgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBGaUNoZXZyb25MZWZ0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge0hlYWRlckNvbnRhaW5lcn0gZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2VzL0hvbWUnXG5cbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgTWVudSxcbiAgQ2FyZCxcbiAgQ2FyZEJ1dHRvbixcbiAgQ2FyZEltYWdlQ29udGFpbmVyLFxuICBQYWdlQ29udGFpbmVyLFxuICBTcGFjZXJcbn0gZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2VzL1NpZ25VcCdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAoKSB7XG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3doYXRzYXBwLCBzZXRXaGF0c2FwcF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3VmLCBzZXRVZl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVnaXN0ZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBuYW1lLFxuICAgICAgZW1haWwsXG4gICAgICB3aGF0c2FwcCxcbiAgICAgIGNpdHksXG4gICAgICB1ZlxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJ29uZ3MnLCBkYXRhKTtcbiAgICAgIGFsZXJ0KGBTZXUgY8OzZGlnbyBkZSBhY2Vzc286ICR7cmVzcG9uc2UuZGF0YS5pZH1gKTtcbiAgICAgIHJvdXRlci5wdXNoKCcvc2lnbkluQWRtJyk7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KCdFcnJvIG5vIGNhZGFzdHJvLCB0ZW50ZSBub3ZhbWVudGUhJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUNvbnRhaW5lcj5cbiAgICAgIDxIZWFkZXJDb250YWluZXI+XG4gICAgICAgIDxoZWFkZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiwgY29sb3I6ICcjQTFBMUExJyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoZWFkZXJBbGlnblwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9vcHRpb25cIj5cbiAgICAgICAgICAgIDxGaUNoZXZyb25MZWZ0IHNpemU9ezMwfSBjb2xvcj1cIiNBMUExQTFcIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRvSGVhZGVyXCI+Q0FEQVNUUk8gREUgVVNVw4FSSU88L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgPC9IZWFkZXJDb250YWluZXI+XG4gICAgICA8Q29udGFpbmVyPlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlUmVnaXN0ZXJ9PlxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiTm9tZSBkYSBPTkdcIlxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJXaGF0c2FwcFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt3aGF0c2FwcH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0V2hhdHNhcHAoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJDaWRhZGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtjaXR5fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENpdHkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJVRlwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPXt1Zn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRVZihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiB0eXBlPVwic3VibWl0XCI+Q0FEQVNUUkFSPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENhcmRJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9mb290cHJpbnRzLnBuZ1wiIGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgb2JqZWN0UG9zaXRpb249XCJib3R0b21cIiAvPlxuICAgICAgICA8L0NhcmRJbWFnZUNvbnRhaW5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgPC9QYWdlQ29udGFpbmVyPlxuXG4gIClcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9