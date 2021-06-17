exports.id = "src_components_Header_index_tsx-src_styles_pages_Home_ts";
exports.ids = ["src_components_Header_index_tsx-src_styles_pages_Home_ts"];
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

/***/ }),

/***/ "./src/styles/pages/Home.ts":
/*!**********************************!*\
  !*** ./src/styles/pages/Home.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContainer": function() { return /* binding */ PageContainer; },
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "HeaderContainer": function() { return /* binding */ HeaderContainer; },
/* harmony export */   "Carousel": function() { return /* binding */ Carousel; },
/* harmony export */   "Menu": function() { return /* binding */ Menu; },
/* harmony export */   "MenuItemContainer": function() { return /* binding */ MenuItemContainer; },
/* harmony export */   "MenuItemButton": function() { return /* binding */ MenuItemButton; },
/* harmony export */   "MenuItemTitle": function() { return /* binding */ MenuItemTitle; },
/* harmony export */   "Card": function() { return /* binding */ Card; },
/* harmony export */   "CardContent": function() { return /* binding */ CardContent; },
/* harmony export */   "CardImageContainer": function() { return /* binding */ CardImageContainer; },
/* harmony export */   "CardTitle": function() { return /* binding */ CardTitle; },
/* harmony export */   "CardText": function() { return /* binding */ CardText; },
/* harmony export */   "CardButton": function() { return /* binding */ CardButton; },
/* harmony export */   "Highlights": function() { return /* binding */ Highlights; },
/* harmony export */   "HighlightsHeader": function() { return /* binding */ HighlightsHeader; },
/* harmony export */   "HighlightsTitle": function() { return /* binding */ HighlightsTitle; },
/* harmony export */   "HighlightsSeeMore": function() { return /* binding */ HighlightsSeeMore; },
/* harmony export */   "HighlightsSeeMoreText": function() { return /* binding */ HighlightsSeeMoreText; },
/* harmony export */   "HighlightsSeeMoreIcon": function() { return /* binding */ HighlightsSeeMoreIcon; },
/* harmony export */   "HighlightsContent": function() { return /* binding */ HighlightsContent; },
/* harmony export */   "HighlightsPrimaryImage": function() { return /* binding */ HighlightsPrimaryImage; },
/* harmony export */   "HighlightsSecondaryImage": function() { return /* binding */ HighlightsSecondaryImage; },
/* harmony export */   "TabMenu": function() { return /* binding */ TabMenu; },
/* harmony export */   "TabMenuHomeButtonContainer": function() { return /* binding */ TabMenuHomeButtonContainer; },
/* harmony export */   "TabMenuHomeButton": function() { return /* binding */ TabMenuHomeButton; },
/* harmony export */   "TabMenuItem": function() { return /* binding */ TabMenuItem; },
/* harmony export */   "Spacer": function() { return /* binding */ Spacer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__PageContainer",
  componentId: "sc-15wpcyr-0"
})(["display:flex;position:relative;min-height:100vh;justify-content:center;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__Container",
  componentId: "sc-15wpcyr-1"
})(["max-width:375px;min-height:100vh;display:flex;flex-direction:column;align-items:center;padding-top:110px;padding-bottom:120px;"]);
const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__HeaderContainer",
  componentId: "sc-15wpcyr-2"
})(["position:fixed;z-index:10;top:0;width:100%;height:90px;box-shadow:0px 3px 6px #0000000F;"]);
const Carousel = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__Carousel",
  componentId: "sc-15wpcyr-3"
})([""]);
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__Menu",
  componentId: "sc-15wpcyr-4"
})(["display:flex;width:100%;flex-direction:row;justify-content:space-evenly;"]);
const MenuItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Home__MenuItemContainer",
  componentId: "sc-15wpcyr-5"
})(["display:flex;flex-direction:column;align-items:center;cursor:pointer;border:0;background:transparent;"]);
const MenuItemButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__MenuItemButton",
  componentId: "sc-15wpcyr-6"
})(["width:58px;height:58px;border-radius:50%;padding:15px;background:transparent linear-gradient(180deg,", " 0%,", " 100%) 0% 0% no-repeat padding-box;box-shadow:0px 3px 6px #0000003B;"], ({
  firstColorHex
}) => firstColorHex, ({
  secondColorHex
}) => secondColorHex);
const MenuItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__MenuItemTitle",
  componentId: "sc-15wpcyr-7"
})(["margin-top:8px;font-family:'Open Sans',sans-serif;font:normal normal bold 13px Open Sans;color:#404E7F;"]);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__Card",
  componentId: "sc-15wpcyr-8"
})(["position:relative;display:flex;width:335px;height:183px;background:#FFC757;box-shadow:0px 3px 6px #00000024;border-radius:14px;padding:17px;"]);
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__CardContent",
  componentId: "sc-15wpcyr-9"
})(["position:absolute;padding:17px;top:0;left:0;display:flex;flex-direction:column;justify-content:space-evenly;height:100%;width:70%;"]);
const CardImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__CardImageContainer",
  componentId: "sc-15wpcyr-10"
})(["position:absolute;top:0;right:0;height:95%;width:95%;"]);
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__CardTitle",
  componentId: "sc-15wpcyr-11"
})(["font-family:'Open Sans',sans-serif;font-size:20px;font-weight:bold;"]);
const CardText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__CardText",
  componentId: "sc-15wpcyr-12"
})(["font-family:'Open Sans',sans-serif;font-size:17px;font-weight:bold;"]);
const CardButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Home__CardButton",
  componentId: "sc-15wpcyr-13"
})(["width:132px;font-family:'Open Sans',sans-serif;font-size:14px;font-weight:bold;color:white;border:0px;padding:11px 17px;border-radius:4px;background:black;cursor:pointer;"]);
const Highlights = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__Highlights",
  componentId: "sc-15wpcyr-14"
})(["width:100%;"]);
const HighlightsHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__HighlightsHeader",
  componentId: "sc-15wpcyr-15"
})(["display:flex;justify-content:space-between;align-items:center;"]);
const HighlightsTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__HighlightsTitle",
  componentId: "sc-15wpcyr-16"
})(["font-family:'Open Sans',sans-serif;font-size:23px;font-weight:bold;"]);
const HighlightsSeeMore = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Home__HighlightsSeeMore",
  componentId: "sc-15wpcyr-17"
})(["display:flex;justify-content:center;align-items:center;border:0;background-color:transparent;cursor:pointer;"]);
const HighlightsSeeMoreText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__HighlightsSeeMoreText",
  componentId: "sc-15wpcyr-18"
})(["font-family:'Open Sans',sans-serif;font-size:14px;color:#B8B8B8;text-decoration:none;"]);
const HighlightsSeeMoreIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__HighlightsSeeMoreIcon",
  componentId: "sc-15wpcyr-19"
})(["margin-left:8px;transform:rotate(-90deg);"]);
const HighlightsContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__HighlightsContent",
  componentId: "sc-15wpcyr-20"
})(["margin-top:14px;display:grid;grid-template-columns:2fr 1fr;grid-template-rows:86px 86px;grid-template-areas:\"first second\" \"first second\";gap:4px;"]);
const HighlightsPrimaryImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__HighlightsPrimaryImage",
  componentId: "sc-15wpcyr-21"
})(["grid-area:first;position:relative;border:2px solid #A7A7A7;border-radius:7px 0px 0px 7px;box-shadow:0px 3px 6px #00000045;"]);
const HighlightsSecondaryImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__HighlightsSecondaryImage",
  componentId: "sc-15wpcyr-22"
})(["position:relative;border:2px solid #A7A7A7;border-radius:0px 7px 7px 0px;box-shadow:0px 3px 6px #00000045;"]);
const TabMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__TabMenu",
  componentId: "sc-15wpcyr-23"
})(["display:flex;position:fixed;bottom:0;justify-content:space-evenly;align-items:center;width:100%;height:90px;border-top:2px solid #E9E9E9;background:white;"]);
const TabMenuHomeButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Home__TabMenuHomeButtonContainer",
  componentId: "sc-15wpcyr-24"
})(["width:100px;display:flex;justify-content:center;border:0px;background:transparent;border-bottom:2px solid #E9E9E9;cursor:pointer;"]);
const TabMenuHomeButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__TabMenuHomeButton",
  componentId: "sc-15wpcyr-25"
})(["position:relative;border-radius:50%;height:74px;width:74px;"]);
const TabMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Home__TabMenuItem",
  componentId: "sc-15wpcyr-26"
})(["position:relative;display:flex;width:26px;height:26px;justify-content:center;border:0px;background:transparent;cursor:pointer;"]);
const Spacer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Home__Spacer",
  componentId: "sc-15wpcyr-27"
})(["margin-top:45px;"]);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYXRhbi8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWF0YW4vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLnRzIiwid2VicGFjazovL2FhdGFuLy4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLnRzIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbkljb24iLCJoYXNNZXNzYWdlIiwiSGVhZGVyIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiTWVudUljb24iLCJJbWFnZSIsImF0dHJzIiwid2lkdGgiLCJoZWlnaHQiLCJNZW51TG9nbyIsIk5vdGlmaWNhdGlvbkljb25JbWFnZSIsIk5vdGlmaWNhdGlvbkljb25Db250YWluZXIiLCJOb3RpZmljYXRpb25JY29uQWN0aXZlIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlckNvbnRhaW5lciIsIkNhcm91c2VsIiwiTWVudSIsIk1lbnVJdGVtQ29udGFpbmVyIiwiTWVudUl0ZW1CdXR0b24iLCJmaXJzdENvbG9ySGV4Iiwic2Vjb25kQ29sb3JIZXgiLCJNZW51SXRlbVRpdGxlIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEltYWdlQ29udGFpbmVyIiwiQ2FyZFRpdGxlIiwiQ2FyZFRleHQiLCJDYXJkQnV0dG9uIiwiSGlnaGxpZ2h0cyIsIkhpZ2hsaWdodHNIZWFkZXIiLCJIaWdobGlnaHRzVGl0bGUiLCJIaWdobGlnaHRzU2VlTW9yZSIsIkhpZ2hsaWdodHNTZWVNb3JlVGV4dCIsIkhpZ2hsaWdodHNTZWVNb3JlSWNvbiIsIkhpZ2hsaWdodHNDb250ZW50IiwiSGlnaGxpZ2h0c1ByaW1hcnlJbWFnZSIsIkhpZ2hsaWdodHNTZWNvbmRhcnlJbWFnZSIsIlRhYk1lbnUiLCJUYWJNZW51SG9tZUJ1dHRvbkNvbnRhaW5lciIsIlRhYk1lbnVIb21lQnV0dG9uIiwiVGFiTWVudUl0ZW0iLCJTcGFjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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QUFBO0FBQUE7QUFBQSxzSUFBakI7QUFXQSxNQUFNc0MsTUFBTSxHQUFHdEMsdUVBQUg7QUFBQTtBQUFBO0FBQUEsd0JBQVosQyIsImZpbGUiOiJzcmNfY29tcG9uZW50c19IZWFkZXJfaW5kZXhfdHN4LXNyY19zdHlsZXNfcGFnZXNfSG9tZV90cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgTWVudUljb24sXG4gIE1lbnVMb2dvLFxuICBOb3RpZmljYXRpb25JY29uSW1hZ2UsXG4gIE5vdGlmaWNhdGlvbkljb25Db250YWluZXIsXG4gIE5vdGlmaWNhdGlvbkljb25BY3RpdmVcbn0gZnJvbSAnLi9zdHlsZXMnXG5cbnR5cGUgTm90aWZpY2F0aW9uSWNvblByb3BzID0ge1xuICBoYXNNZXNzYWdlPzogYm9vbGVhblxufVxuXG5mdW5jdGlvbiBOb3RpZmljYXRpb25JY29uICh7IGhhc01lc3NhZ2UgfTogTm90aWZpY2F0aW9uSWNvblByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPE5vdGlmaWNhdGlvbkljb25Db250YWluZXI+XG4gICAgICA8Tm90aWZpY2F0aW9uSWNvbkltYWdlIHNyYz1cIi9pbWFnZXMvaWNvbnMvaWNvbi1ub3RpZmljYXRpb24ucG5nXCIgb2JqZWN0Rml0PVwiY29udGFpblwiLz5cbiAgICAgIHsgaGFzTWVzc2FnZSAmJiA8Tm90aWZpY2F0aW9uSWNvbkFjdGl2ZSAvPiB9XG4gICAgPC9Ob3RpZmljYXRpb25JY29uQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlciAoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxNZW51SWNvbiBzcmM9XCIvaW1hZ2VzL2ljb25zL2ljb24tbWVudS5wbmdcIiBvYmplY3RGaXQ9XCJjb250YWluXCIvPlxuICAgICAgPE1lbnVMb2dvIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBvYmplY3RGaXQ9XCJjb250YWluXCIvPlxuICAgICAgPE5vdGlmaWNhdGlvbkljb24gaGFzTWVzc2FnZS8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbmBcblxuZXhwb3J0IGNvbnN0IE1lbnVJY29uID0gc3R5bGVkKEltYWdlKS5hdHRycyh7XG4gIHdpZHRoOiAnMzUuNDQnLFxuICBoZWlnaHQ6ICcyMy42Midcbn0pYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBNZW51TG9nbyA9IHN0eWxlZChJbWFnZSkuYXR0cnMoe1xuICB3aWR0aDogJzgzLjE2JyxcbiAgaGVpZ2h0OiAnNzQnXG59KWBgXG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25JY29uSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpLmF0dHJzKHtcbiAgd2lkdGg6ICcyMS4wNScsXG4gIGhlaWdodDogJzI0LjA2J1xufSlgXG4gIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gXG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25JY29uQWN0aXZlID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDJweDtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRTY0NDc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbmBcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBQYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDM3NXB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwYWRkaW5nLXRvcDogMTEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDBGO1xuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWwgPSBzdHlsZWQuZGl2YGBcblxuZXhwb3J0IGNvbnN0IE1lbnUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5gXG5cbmV4cG9ydCBjb25zdCBNZW51SXRlbUNvbnRhaW5lciA9IHN0eWxlZC5idXR0b25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuYFxuXG5pbnRlcmZhY2UgTWVudUl0ZW1CdXR0b25Qcm9wcyB7XG4gIGZpcnN0Q29sb3JIZXg6IHN0cmluZ1xuICBzZWNvbmRDb2xvckhleDogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBNZW51SXRlbUJ1dHRvbiA9IHN0eWxlZC5kaXY8TWVudUl0ZW1CdXR0b25Qcm9wcz5gXG4gIHdpZHRoOiA1OHB4O1xuICBoZWlnaHQ6IDU4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMTVweDtcblxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAkeyh7IGZpcnN0Q29sb3JIZXggfSkgPT4gZmlyc3RDb2xvckhleH0gMCUsICR7KHsgc2Vjb25kQ29sb3JIZXggfSkgPT4gc2Vjb25kQ29sb3JIZXh9IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDNCO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBNZW51SXRlbVRpdGxlID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxM3B4IE9wZW4gU2FucztcbiAgY29sb3I6ICM0MDRFN0Y7XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMzM1cHg7XG4gIGhlaWdodDogMTgzcHg7XG4gIGJhY2tncm91bmQ6ICNGRkM3NTc7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyNDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgcGFkZGluZzogMTdweDtcbmBcblxuZXhwb3J0IGNvbnN0IENhcmRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxN3B4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA3MCU7XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogOTUlO1xuICB3aWR0aDogOTUlO1xuYFxuXG5leHBvcnQgY29uc3QgQ2FyZFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5leHBvcnQgY29uc3QgQ2FyZFRleHQgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDEzMnB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwcHg7XG4gIHBhZGRpbmc6IDExcHggMTdweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgSGlnaGxpZ2h0cyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgSGlnaGxpZ2h0c0hlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IEhpZ2hsaWdodHNUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbmBcblxuZXhwb3J0IGNvbnN0IEhpZ2hsaWdodHNTZWVNb3JlID0gc3R5bGVkLmJ1dHRvbmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IEhpZ2hsaWdodHNTZWVNb3JlVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI0I4QjhCODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuYFxuXG5leHBvcnQgY29uc3QgSGlnaGxpZ2h0c1NlZU1vcmVJY29uID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbmBcblxuZXhwb3J0IGNvbnN0IEhpZ2hsaWdodHNDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDg2cHggODZweDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJmaXJzdCBzZWNvbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICBcImZpcnN0IHNlY29uZFwiO1xuICBnYXA6IDRweDtcbmBcblxuZXhwb3J0IGNvbnN0IEhpZ2hsaWdodHNQcmltYXJ5SW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IGZpcnN0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBN0E3QTc7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAwcHggMHB4IDdweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDQ1O1xuYFxuXG5leHBvcnQgY29uc3QgSGlnaGxpZ2h0c1NlY29uZGFyeUltYWdlID0gc3R5bGVkLmRpdmBcbiAgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgI0E3QTdBNztcbiAgYm9yZGVyLXJhZGl1czogMHB4IDdweCA3cHggMHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwNDU7IFxuYFxuXG5leHBvcnQgY29uc3QgVGFiTWVudSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNFOUU5RTk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuYFxuXG5leHBvcnQgY29uc3QgVGFiTWVudUhvbWVCdXR0b25Db250YWluZXIgPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRTlFOUU5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBUYWJNZW51SG9tZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDc0cHg7XG4gIHdpZHRoOiA3NHB4O1xuYFxuXG5leHBvcnQgY29uc3QgVGFiTWVudUl0ZW0gPSBzdHlsZWQuYnV0dG9uYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IFNwYWNlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDQ1cHg7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9