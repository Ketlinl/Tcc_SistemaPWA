self["webpackHotUpdate_N_E"]("pages/signUpAdm",{

/***/ "./src/pages/signUpAdm/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/signUpAdm/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignUpAdm; }
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




var _jsxFileName = "C:\\Users\\Cliente\\Desktop\\Projeto_AATAN\\src\\pages\\signUpAdm\\index.tsx",
    _s = $RefreshSig$();









function SignUpAdm() {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
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
            lineNumber: 71,
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
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
            placeholder: "Whatsapp",
            value: whatsapp,
            onChange: function onChange(e) {
              return setWhatsapp(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
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
              lineNumber: 85,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              placeholder: "UF",
              value: uf,
              onChange: function onChange(e) {
                return setUf(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_pages_SignUp__WEBPACK_IMPORTED_MODULE_9__.CardImageContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
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

_s(SignUpAdm, "Ra+2aN7cqwVm6UCOYTeabUoowEo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];
});

_c = SignUpAdm;

var _c;

$RefreshReg$(_c, "SignUpAdm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NpZ25VcEFkbS9pbmRleC50c3giXSwibmFtZXMiOlsiU2lnblVwQWRtIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJ3aGF0c2FwcCIsInNldFdoYXRzYXBwIiwiY2l0eSIsInNldENpdHkiLCJ1ZiIsInNldFVmIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlUmVnaXN0ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiYXBpIiwicmVzcG9uc2UiLCJhbGVydCIsImlkIiwicHVzaCIsIm1hcmdpblRvcCIsImNvbG9yIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFDVkMsK0NBQVEsQ0FBQyxFQUFELENBREU7QUFBQSxNQUMzQkMsSUFEMkI7QUFBQSxNQUNyQkMsT0FEcUI7O0FBQUEsbUJBRVJGLCtDQUFRLENBQUMsRUFBRCxDQUZBO0FBQUEsTUFFM0JHLEtBRjJCO0FBQUEsTUFFcEJDLFFBRm9COztBQUFBLG1CQUdGSiwrQ0FBUSxDQUFDLEVBQUQsQ0FITjtBQUFBLE1BRzNCSyxRQUgyQjtBQUFBLE1BR2pCQyxXQUhpQjs7QUFBQSxtQkFJVk4sK0NBQVEsQ0FBQyxFQUFELENBSkU7QUFBQSxNQUkzQk8sSUFKMkI7QUFBQSxNQUlyQkMsT0FKcUI7O0FBQUEsbUJBS2RSLCtDQUFRLENBQUMsRUFBRCxDQUxNO0FBQUEsTUFLM0JTLEVBTDJCO0FBQUEsTUFLdkJDLEtBTHVCOztBQU9sQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQVBrQyxXQVNuQkMsY0FUbUI7QUFBQTtBQUFBOztBQUFBO0FBQUEsb1NBU2xDLGlCQUE4QkMsQ0FB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O0FBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUtFO0FBQU8seUJBQVcsRUFBQyxJQUFuQjtBQUNFLG1CQUFLLEVBQUVoQixFQURUO0FBRUUsc0JBQVEsRUFBRSxrQkFBQUssQ0FBQztBQUFBLHVCQUFJSixLQUFLLENBQUNJLENBQUMsQ0FBQ1UsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFBQTtBQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRGLGVBeUJFO0FBQVEscUJBQVMsRUFBQyxLQUFsQjtBQUF3QixnQkFBSSxFQUFDLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUErQkUsOERBQUMsb0VBQUQ7QUFBQSwrQkFDRSw4REFBQyxtREFBRDtBQUFPLGFBQUcsRUFBQyx3QkFBWDtBQUFvQyxnQkFBTSxFQUFDLE1BQTNDO0FBQWtELG1CQUFTLEVBQUMsU0FBNUQ7QUFBc0Usd0JBQWMsRUFBQztBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVERDs7R0FwRnVCMUIsUztVQU9QYSxrRDs7O0tBUE9iLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnblVwQWRtLjFjYmUwM2JhZTIxNDRkMzU0NjFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJ1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0ICBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEZpQ2hldnJvbkxlZnQgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7SGVhZGVyQ29udGFpbmVyfSBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZXMvSG9tZSdcblxuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBNZW51LFxuICBDYXJkLFxuICBDYXJkQnV0dG9uLFxuICBDYXJkSW1hZ2VDb250YWluZXIsXG4gIFBhZ2VDb250YWluZXIsXG4gIFNwYWNlclxufSBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZXMvU2lnblVwJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcEFkbSgpIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3doYXRzYXBwLCBzZXRXaGF0c2FwcF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3VmLCBzZXRVZl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVnaXN0ZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBuYW1lLFxuICAgICAgZW1haWwsXG4gICAgICB3aGF0c2FwcCxcbiAgICAgIGNpdHksXG4gICAgICB1ZlxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJ29uZ3MnLCBkYXRhKTtcbiAgICAgIGFsZXJ0KGBTZXUgY8OzZGlnbyBkZSBhY2Vzc286ICR7cmVzcG9uc2UuZGF0YS5pZH1gKTtcbiAgICAgIHJvdXRlci5wdXNoKCcvc2lnbkluQWRtJyk7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KCdFcnJvIG5vIGNhZGFzdHJvLCB0ZW50ZSBub3ZhbWVudGUhJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUNvbnRhaW5lcj5cbiAgICAgIDxIZWFkZXJDb250YWluZXI+XG4gICAgICAgIDxoZWFkZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiwgY29sb3I6ICcjQTFBMUExJyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoZWFkZXJBbGlnblwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9vcHRpb25cIj5cbiAgICAgICAgICAgIDxGaUNoZXZyb25MZWZ0IHNpemU9ezMwfSBjb2xvcj1cIiNBMUExQTFcIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRvSGVhZGVyXCI+Q0FEQVNUUk88L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgPC9IZWFkZXJDb250YWluZXI+XG4gICAgICA8Q29udGFpbmVyPlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlUmVnaXN0ZXJ9PlxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiTm9tZSBkYSBPTkdcIlxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJXaGF0c2FwcFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt3aGF0c2FwcH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0V2hhdHNhcHAoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJDaWRhZGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtjaXR5fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENpdHkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJVRlwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPXt1Zn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRVZihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiB0eXBlPVwic3VibWl0XCI+Q0FEQVNUUkFSPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENhcmRJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9mb290cHJpbnRzLnBuZ1wiIGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgb2JqZWN0UG9zaXRpb249XCJib3R0b21cIiAvPlxuICAgICAgICA8L0NhcmRJbWFnZUNvbnRhaW5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgPC9QYWdlQ29udGFpbmVyPlxuXG4gIClcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==