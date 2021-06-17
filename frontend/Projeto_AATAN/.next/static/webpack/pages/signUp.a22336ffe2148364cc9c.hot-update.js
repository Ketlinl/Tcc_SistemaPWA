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

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      password = _useState6[0],
      setPassword = _useState6[1];

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
                uf: uf,
                password: password
              };
              _context.prev = 2;
              _context.next = 5;
              return _services_api__WEBPACK_IMPORTED_MODULE_5__.default.post('users', data);

            case 5:
              response = _context.sent;
              //alert(`Seu código de acesso: ${response.data.id}`);
              router.push('/signIn');
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              alert('Erro no cadastro, tente novamente!');

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9]]);
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
                lineNumber: 61,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              className: "textoHeader",
              children: "CADASTRO DE USU\xC1RIO"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_pages_SignUp__WEBPACK_IMPORTED_MODULE_9__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        style: {
          marginTop: "30px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
          onSubmit: handleRegister,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
            placeholder: "Nome ",
            value: name,
            onChange: function onChange(e) {
              return setName(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
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
            lineNumber: 78,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
            placeholder: "Whatsapp",
            value: whatsapp,
            onChange: function onChange(e) {
              return setWhatsapp(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
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
              lineNumber: 88,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              placeholder: "UF",
              value: uf,
              onChange: function onChange(e) {
                return setUf(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              placeholder: "Senha ex:13546",
              value: password,
              onChange: function onChange(e) {
                return setPassword(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 16
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "btn",
            type: "submit",
            children: "CADASTRAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_pages_SignUp__WEBPACK_IMPORTED_MODULE_9__.CardImageContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: "/images/footprints.png",
          layout: "fill",
          objectFit: "contain",
          objectPosition: "bottom"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

_s(SignUp, "snrUomEjQXIBiuWJNq4XqTFv1+A=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NpZ25VcC9pbmRleC50c3giXSwibmFtZXMiOlsiU2lnblVwIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJ3aGF0c2FwcCIsInNldFdoYXRzYXBwIiwiY2l0eSIsInNldENpdHkiLCJ1ZiIsInNldFVmIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVJlZ2lzdGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImFwaSIsInJlc3BvbnNlIiwicHVzaCIsImFsZXJ0IiwibWFyZ2luVG9wIiwiY29sb3IiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBV2UsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUVQQywrQ0FBUSxDQUFDLEVBQUQsQ0FGRDtBQUFBLE1BRXhCQyxJQUZ3QjtBQUFBLE1BRWxCQyxPQUZrQjs7QUFBQSxtQkFHTEYsK0NBQVEsQ0FBQyxFQUFELENBSEg7QUFBQSxNQUd4QkcsS0FId0I7QUFBQSxNQUdqQkMsUUFIaUI7O0FBQUEsbUJBSUNKLCtDQUFRLENBQUMsRUFBRCxDQUpUO0FBQUEsTUFJeEJLLFFBSndCO0FBQUEsTUFJZEMsV0FKYzs7QUFBQSxtQkFLUE4sK0NBQVEsQ0FBQyxFQUFELENBTEQ7QUFBQSxNQUt4Qk8sSUFMd0I7QUFBQSxNQUtsQkMsT0FMa0I7O0FBQUEsbUJBTVhSLCtDQUFRLENBQUMsRUFBRCxDQU5HO0FBQUEsTUFNeEJTLEVBTndCO0FBQUEsTUFNcEJDLEtBTm9COztBQUFBLG1CQU9DViwrQ0FBUSxDQUFDLEVBQUQsQ0FQVDtBQUFBLE1BT3hCVyxRQVB3QjtBQUFBLE1BT2RDLFdBUGM7O0FBUy9CLE1BQU1DLE1B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Y2svcGFnZXMvc2lnblVwLmEyMjMzNmZmZTIxNDgzNjRjYzljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJ1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0ICBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEZpQ2hldnJvbkxlZnQgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7SGVhZGVyQ29udGFpbmVyfSBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZXMvSG9tZSdcblxuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBNZW51LFxuICBDYXJkLFxuICBDYXJkQnV0dG9uLFxuICBDYXJkSW1hZ2VDb250YWluZXIsXG4gIFBhZ2VDb250YWluZXIsXG4gIFNwYWNlclxufSBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZXMvU2lnblVwJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcCgpIHtcblxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbd2hhdHNhcHAsIHNldFdoYXRzYXBwXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdWYsIHNldFVmXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVnaXN0ZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBuYW1lLFxuICAgICAgZW1haWwsXG4gICAgICB3aGF0c2FwcCxcbiAgICAgIGNpdHksXG4gICAgICB1ZixcbiAgICAgIHBhc3N3b3JkXG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgndXNlcnMnLCBkYXRhKTtcbiAgICAgIC8vYWxlcnQoYFNldSBjw7NkaWdvIGRlIGFjZXNzbzogJHtyZXNwb25zZS5kYXRhLmlkfWApO1xuICAgICAgcm91dGVyLnB1c2goJy9zaWduSW4nKTtcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoJ0Vycm8gbm8gY2FkYXN0cm8sIHRlbnRlIG5vdmFtZW50ZSEnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQYWdlQ29udGFpbmVyPlxuICAgICAgPEhlYWRlckNvbnRhaW5lcj5cbiAgICAgICAgPGhlYWRlciBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiLCBjb2xvcjogJyNBMUExQTEnIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGhlYWRlckFsaWduXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL29wdGlvblwiPlxuICAgICAgICAgICAgPEZpQ2hldnJvbkxlZnQgc2l6ZT17MzB9IGNvbG9yPVwiI0ExQTFBMVwiIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dG9IZWFkZXJcIj5DQURBU1RSTyBERSBVU1XDgVJJTzwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICA8L0hlYWRlckNvbnRhaW5lcj5cbiAgICAgIDxDb250YWluZXI+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVSZWdpc3Rlcn0+XG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJOb21lIFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIldoYXRzYXBwXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3doYXRzYXBwfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRXaGF0c2FwcChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkNpZGFkZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NpdHl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q2l0eShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlVGXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VmfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFVmKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlNlbmhhIGV4OjEzNTQ2XCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHR5cGU9XCJzdWJtaXRcIj5DQURBU1RSQVI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Q2FyZEltYWdlQ29udGFpbmVyPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2Zvb3RwcmludHMucG5nXCIgbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiBvYmplY3RQb3NpdGlvbj1cImJvdHRvbVwiIC8+XG4gICAgICAgIDwvQ2FyZEltYWdlQ29udGFpbmVyPlxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICA8L1BhZ2VDb250YWluZXI+XG5cbiAgKVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=