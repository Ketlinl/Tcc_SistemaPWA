exports.id = "src_components_Header_index_tsx";
exports.ids = ["src_components_Header_index_tsx"];
exports.modules = {

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Header/styles.ts");

var _jsxFileName = "C:\\Users\\Cliente\\Desktop\\Projeto_AATAN\\src\\components\\Header\\index.tsx";


function NotificationIcon({
  hasMessage
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.NotificationIconContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.NotificationIconImage, {
      src: "/images/icons/icon-notification.png",
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), hasMessage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.NotificationIconActive, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 23
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.MenuIcon, {
      src: "/images/icons/icon-menu.png",
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.MenuLogo, {
      src: "/images/logo.png",
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotificationIcon, {
      hasMessage: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Header/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/Header/styles.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "MenuIcon": function() { return /* binding */ MenuIcon; },
/* harmony export */   "MenuLogo": function() { return /* binding */ MenuLogo; },
/* harmony export */   "NotificationIconImage": function() { return /* binding */ NotificationIconImage; },
/* harmony export */   "NotificationIconContainer": function() { return /* binding */ NotificationIconContainer; },
/* harmony export */   "NotificationIconActive": function() { return /* binding */ NotificationIconActive; }
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "ybu634-0"
})(["width:100%;height:100%;display:flex;justify-content:space-around;align-items:center;background:white;"]);
const MenuIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_0___default())).attrs({
  width: '35.44',
  height: '23.62'
}).withConfig({
  displayName: "styles__MenuIcon",
  componentId: "ybu634-1"
})(["cursor:pointer;"]);
const MenuLogo = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_0___default())).attrs({
  width: '83.16',
  height: '74'
}).withConfig({
  displayName: "styles__MenuLogo",
  componentId: "ybu634-2"
})([""]);
const NotificationIconImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_0___default())).attrs({
  width: '21.05',
  height: '24.06'
}).withConfig({
  displayName: "styles__NotificationIconImage",
  componentId: "ybu634-3"
})(["cursor:pointer;"]);
const NotificationIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "styles__NotificationIconContainer",
  componentId: "ybu634-4"
})(["position:relative;"]);
const NotificationIconActive = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "styles__NotificationIconActive",
  componentId: "ybu634-5"
})(["position:absolute;top:2px;right:2px;width:8px;height:8px;background-color:#FE6447;border-radius:50%;"]);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYXRhbi8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWF0YW4vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLnRzIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbkljb24iLCJoYXNNZXNzYWdlIiwiSGVhZGVyIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiTWVudUljb24iLCJJbWFnZSIsImF0dHJzIiwid2lkdGgiLCJoZWlnaHQiLCJNZW51TG9nbyIsIk5vdGlmaWNhdGlvbkljb25JbWFnZSIsIk5vdGlmaWNhdGlvbkljb25Db250YWluZXIiLCJOb3RpZmljYXRpb25JY29uQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQWFBLFNBQVNBLGdCQUFULENBQTJCO0FBQUVDO0FBQUYsQ0FBM0IsRUFBa0U7QUFDaEUsc0JBQ0UsOERBQUMsOERBQUQ7QUFBQSw0QkFDRSw4REFBQywwREFBRDtBQUF1QixTQUFHLEVBQUMscUNBQTNCO0FBQWlFLGVBQVMsRUFBQztBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFSUEsVUFBVSxpQkFBSSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0FBRWMsU0FBU0MsTUFBVCxHQUFtQjtBQUNoQyxzQkFDRSw4REFBQyw4Q0FBRDtBQUFBLDRCQUNFLDhEQUFDLDZDQUFEO0FBQVUsU0FBRyxFQUFDLDZCQUFkO0FBQTRDLGVBQVMsRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyw2Q0FBRDtBQUFVLFNBQUcsRUFBQyxrQkFBZDtBQUFpQyxlQUFTLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UsOERBQUMsZ0JBQUQ7QUFBa0IsZ0JBQVU7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQ0E7QUFFTyxNQUFNQyxTQUFTLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDZHQUFmO0FBU0EsTUFBTUMsUUFBUSxHQUFHRCx3REFBTSxDQUFDRSxtREFBRCxDQUFOLENBQWNDLEtBQWQsQ0FBb0I7QUFDMUNDLE9BQUssRUFBRSxPQURtQztBQUUxQ0MsUUFBTSxFQUFFO0FBRmtDLENBQXBCLENBQUg7QUFBQTtBQUFBO0FBQUEsdUJBQWQ7QUFPQSxNQUFNQyxRQUFRLEdBQUdOLHdEQUFNLENBQUNFLG1EQUFELENBQU4sQ0FBY0MsS0FBZCxDQUFvQjtBQUMxQ0MsT0FBSyxFQUFFLE9BRG1DO0FBRTFDQyxRQUFNLEVBQUU7QUFGa0MsQ0FBcEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxRQUFkO0FBS0EsTUFBTUUscUJBQXFCLEdBQUdQLHdEQUFNLENBQUNFLG1EQUFELENBQU4sQ0FBY0MsS0FBZCxDQUFvQjtBQUN2REMsT0FBSyxFQUFFLE9BRGdEO0FBRXZEQyxRQUFNLEVBQUU7QUFGK0MsQ0FBcEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSx1QkFBM0I7QUFPQSxNQUFNRyx5QkFBeUIsR0FBR1IsdUVBQUg7QUFBQTtBQUFBO0FBQUEsMEJBQS9CO0FBSUEsTUFBTVMsc0JBQXNCLEdBQUdULHVFQUFIO0FBQUE7QUFBQTtBQUFBLDRHQUE1QixDIiwiZmlsZSI6InNyY19jb21wb25lbnRzX0hlYWRlcl9pbmRleF90c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb250YWluZXIsXG4gIE1lbnVJY29uLFxuICBNZW51TG9nbyxcbiAgTm90aWZpY2F0aW9uSWNvbkltYWdlLFxuICBOb3RpZmljYXRpb25JY29uQ29udGFpbmVyLFxuICBOb3RpZmljYXRpb25JY29uQWN0aXZlXG59IGZyb20gJy4vc3R5bGVzJ1xuXG50eXBlIE5vdGlmaWNhdGlvbkljb25Qcm9wcyA9IHtcbiAgaGFzTWVzc2FnZT86IGJvb2xlYW5cbn1cblxuZnVuY3Rpb24gTm90aWZpY2F0aW9uSWNvbiAoeyBoYXNNZXNzYWdlIH06IE5vdGlmaWNhdGlvbkljb25Qcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxOb3RpZmljYXRpb25JY29uQ29udGFpbmVyPlxuICAgICAgPE5vdGlmaWNhdGlvbkljb25JbWFnZSBzcmM9XCIvaW1hZ2VzL2ljb25zL2ljb24tbm90aWZpY2F0aW9uLnBuZ1wiIG9iamVjdEZpdD1cImNvbnRhaW5cIi8+XG4gICAgICB7IGhhc01lc3NhZ2UgJiYgPE5vdGlmaWNhdGlvbkljb25BY3RpdmUgLz4gfVxuICAgIDwvTm90aWZpY2F0aW9uSWNvbkNvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIgKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8TWVudUljb24gc3JjPVwiL2ltYWdlcy9pY29ucy9pY29uLW1lbnUucG5nXCIgb2JqZWN0Rml0PVwiY29udGFpblwiLz5cbiAgICAgIDxNZW51TG9nbyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgb2JqZWN0Rml0PVwiY29udGFpblwiLz5cbiAgICAgIDxOb3RpZmljYXRpb25JY29uIGhhc01lc3NhZ2UvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5gXG5cbmV4cG9ydCBjb25zdCBNZW51SWNvbiA9IHN0eWxlZChJbWFnZSkuYXR0cnMoe1xuICB3aWR0aDogJzM1LjQ0JyxcbiAgaGVpZ2h0OiAnMjMuNjInXG59KWBcbiAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgTWVudUxvZ28gPSBzdHlsZWQoSW1hZ2UpLmF0dHJzKHtcbiAgd2lkdGg6ICc4My4xNicsXG4gIGhlaWdodDogJzc0J1xufSlgYFxuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uSWNvbkltYWdlID0gc3R5bGVkKEltYWdlKS5hdHRycyh7XG4gIHdpZHRoOiAnMjEuMDUnLFxuICBoZWlnaHQ6ICcyNC4wNidcbn0pYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25JY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYFxuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uSWNvbkFjdGl2ZSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIHJpZ2h0OiAycHg7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU2NDQ3O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9