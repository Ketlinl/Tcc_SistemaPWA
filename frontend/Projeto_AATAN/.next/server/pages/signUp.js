(function() {
var exports = {};
exports.id = "pages/signUp";
exports.ids = ["pages/signUp"];
exports.modules = {

/***/ "./src/pages/signUp/index.tsx":
/*!************************************!*\
  !*** ./src/pages/signUp/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignUp; }
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

var _jsxFileName = "C:\\Users\\Cliente\\Desktop\\Projeto_AATAN\\src\\pages\\signUp\\index.tsx";








function SignUp() {
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
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
      password
    };

    try {
      const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__.default.post('users', data);
      alert(`Seu cadastro foi relizado utilize seu Login e Senha para acessar`);
      router.push('/signIn');
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_SignUp__WEBPACK_IMPORTED_MODULE_7__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          marginTop: "30px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: handleRegister,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            placeholder: "Nome ",
            value: name,
            onChange: e => setName(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "email",
            placeholder: "Email",
            value: email,
            onChange: e => setEmail(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            placeholder: "Whatsapp",
            value: whatsapp,
            onChange: e => setWhatsapp(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "input-group",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              placeholder: "Cidade",
              value: city,
              onChange: e => setCity(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              placeholder: "UF",
              value: uf,
              onChange: e => setUf(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              placeholder: "Senha ex:13546",
              value: password,
              onChange: e => setPassword(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 16
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_SignUp__WEBPACK_IMPORTED_MODULE_7__.CardImageContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
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

/***/ }),

/***/ "./src/styles/pages/SignUp.ts":
/*!************************************!*\
  !*** ./src/styles/pages/SignUp.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContainer": function() { return /* binding */ PageContainer; },
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Menu": function() { return /* binding */ Menu; },
/* harmony export */   "Card": function() { return /* binding */ Card; },
/* harmony export */   "CardImageContainer": function() { return /* binding */ CardImageContainer; },
/* harmony export */   "CardButton": function() { return /* binding */ CardButton; },
/* harmony export */   "Spacer": function() { return /* binding */ Spacer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SignUp__PageContainer",
  componentId: "psth77-0"
})(["display:flex;position:relative;min-height:100vh;justify-content:center;background-color:#FFF;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SignUp__Container",
  componentId: "psth77-1"
})(["max-width:375px;min-height:10vh;display:flex;flex-direction:column;align-items:center;text-align:center padding-top:110px;padding-bottom:120px;margin-top:70px;"]);
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SignUp__Menu",
  componentId: "psth77-2"
})(["display:flex;margin-top:27px;flex-direction:row;justify-content:space-evenly;"]);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SignUp__Card",
  componentId: "psth77-3"
})(["margin-top:30px;text-align:center;"]);
const CardImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SignUp__CardImageContainer",
  componentId: "psth77-4"
})(["height:125px;width:125px;position:absolute;top:-30;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:none;display:block;min-width:10% !important;max-width:100%;min-height:100%;max-height:100%;object-fit:contain;"]);
const CardButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "SignUp__CardButton",
  componentId: "psth77-5"
})(["width:232px;font-family:'Open Sans',sans-serif;font-size:14px;font-weight:500;color:#000;border:0px;padding:11px 17px;border-radius:4px;background:#fff;cursor:pointer;margin-top:18px;box-shadow:2px 2px 4px #0000003b;"]);
const Spacer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SignUp__Spacer",
  componentId: "psth77-6"
})(["margin-top:45px;"]);

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

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js","vendors-node_modules_next_link_js-node_modules_react-icons_fi_index_esm_js"], function() { return __webpack_exec__("./src/pages/signUp/index.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYXRhbi8uL3NyYy9wYWdlcy9zaWduVXAvaW5kZXgudHN4Iiwid2VicGFjazovL2FhdGFuLy4vc3JjL3NlcnZpY2VzL2FwaS5qcyIsIndlYnBhY2s6Ly9hYXRhbi8uL3NyYy9zdHlsZXMvcGFnZXMvSG9tZS50cyIsIndlYnBhY2s6Ly9hYXRhbi8uL3NyYy9zdHlsZXMvcGFnZXMvU2lnblVwLnRzIiwid2VicGFjazovL2FhdGFuL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9hYXRhbi9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL2FhdGFuL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2FhdGFuL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2FhdGFuL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vYWF0YW4vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL2FhdGFuL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9hYXRhbi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYWF0YW4vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2FhdGFuL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vYWF0YW4vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovL2FhdGFuL2lnbm9yZWR8QzpcXFVzZXJzXFxDbGllbnRlXFxEZXNrdG9wXFxQcm9qZXRvX0FBVEFOXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiU2lnblVwIiwibmFtZSIsInNldE5hbWUiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJ3aGF0c2FwcCIsInNldFdoYXRzYXBwIiwiY2l0eSIsInNldENpdHkiLCJ1ZiIsInNldFVmIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVJlZ2lzdGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInJlc3BvbnNlIiwiYXBpIiwiYWxlcnQiLCJwdXNoIiwiZXJyIiwibWFyZ2luVG9wIiwiY29sb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsImF4aW9zIiwiYmFzZVVSTCIsIlBhZ2VDb250YWluZXIiLCJzdHlsZWQiLCJDb250YWluZXIiLCJIZWFkZXJDb250YWluZXIiLCJDYXJvdXNlbCIsIk1lbnUiLCJNZW51SXRlbUNvbnRhaW5lciIsIk1lbnVJdGVtQnV0dG9uIiwiZmlyc3RDb2xvckhleCIsInNlY29uZENvbG9ySGV4IiwiTWVudUl0ZW1UaXRsZSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRJbWFnZUNvbnRhaW5lciIsIkNhcmRUaXRsZSIsIkNhcmRUZXh0IiwiQ2FyZEJ1dHRvbiIsIkhpZ2hsaWdodHMiLCJIaWdobGlnaHRzSGVhZGVyIiwiSGlnaGxpZ2h0c1RpdGxlIiwiSGlnaGxpZ2h0c1NlZU1vcmUiLCJIaWdobGlnaHRzU2VlTW9yZVRleHQiLCJIaWdobGlnaHRzU2VlTW9yZUljb24iLCJIaWdobGlnaHRzQ29udGVudCIsIkhpZ2hsaWdodHNQcmltYXJ5SW1hZ2UiLCJIaWdobGlnaHRzU2Vjb25kYXJ5SW1hZ2UiLCJUYWJNZW51IiwiVGFiTWVudUhvbWVCdXR0b25Db250YWluZXIiLCJUYWJNZW51SG9tZUJ1dHRvbiIsIlRhYk1lbnVJdGVtIiwi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QSxtRUFBdkI7QUFPQSxNQUFNNEIsV0FBVyxHQUFHNUIsMEVBQUg7QUFBQTtBQUFBO0FBQUEsc0lBQWpCO0FBV0EsTUFBTTZCLE1BQU0sR0FBRzdCLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHdCQUFaLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdE9QO0FBRU8sTUFBTUQsYUFBYSxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxxR0FBbkI7QUFRQSxNQUFNQyxTQUFTLEdBQUdELHVFQUFIO0FBQUE7QUFBQTtBQUFBLHVLQUFmO0FBYUEsTUFBTUksSUFBSSxHQUFHSix1RUFBSDtBQUFBO0FBQUE7QUFBQSxxRkFBVjtBQWNBLE1BQU1VLElBQUksR0FBR1YsdUVBQUg7QUFBQTtBQUFBO0FBQUEsMENBQVY7QUFJQSxNQUFNWSxrQkFBa0IsR0FBR1osdUVBQUg7QUFBQTtBQUFBO0FBQUEsb1BBQXhCO0FBdUJBLE1BQU1lLFVBQVUsR0FBR2YsMEVBQUg7QUFBQTtBQUFBO0FBQUEsZ09BQWhCO0FBZUEsTUFBTTZCLE1BQU0sR0FBRzdCLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHdCQUFaLEM7Ozs7Ozs7Ozs7O0FDL0VQLG1DOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9zaWduVXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJ1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0ICBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEZpQ2hldnJvbkxlZnQgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7SGVhZGVyQ29udGFpbmVyfSBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZXMvSG9tZSdcblxuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBNZW51LFxuICBDYXJkLFxuICBDYXJkQnV0dG9uLFxuICBDYXJkSW1hZ2VDb250YWluZXIsXG4gIFBhZ2VDb250YWluZXIsXG4gIFNwYWNlclxufSBmcm9tICcuLi8uLi9zdHlsZXMvcGFnZXMvU2lnblVwJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcCgpIHtcblxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbd2hhdHNhcHAsIHNldFdoYXRzYXBwXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdWYsIHNldFVmXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVnaXN0ZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBuYW1lLFxuICAgICAgZW1haWwsXG4gICAgICB3aGF0c2FwcCxcbiAgICAgIGNpdHksXG4gICAgICB1ZixcbiAgICAgIHBhc3N3b3JkXG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgndXNlcnMnLCBkYXRhKTtcbiAgICAgIGFsZXJ0KGBTZXUgY2FkYXN0cm8gZm9pIHJlbGl6YWRvIHV0aWxpemUgc2V1IExvZ2luIGUgU2VuaGEgcGFyYSBhY2Vzc2FyYCk7XG4gICAgICByb3V0ZXIucHVzaCgnL3NpZ25JbicpO1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydCgnRXJybyBubyBjYWRhc3RybywgdGVudGUgbm92YW1lbnRlIScpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VDb250YWluZXI+XG4gICAgICA8SGVhZGVyQ29udGFpbmVyPlxuICAgICAgICA8aGVhZGVyIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIsIGNvbG9yOiAnI0ExQTFBMScgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaGVhZGVyQWxpZ25cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb3B0aW9uXCI+XG4gICAgICAgICAgICA8RmlDaGV2cm9uTGVmdCBzaXplPXszMH0gY29sb3I9XCIjQTFBMUExXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0b0hlYWRlclwiPkNBREFTVFJPIERFIFVTVcOBUklPPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgIDwvSGVhZGVyQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lcj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVJlZ2lzdGVyfT5cbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIk5vbWUgXCJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiV2hhdHNhcHBcIlxuICAgICAgICAgICAgICB2YWx1ZT17d2hhdHNhcHB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFdoYXRzYXBwKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiQ2lkYWRlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2l0eX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDaXR5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVUZcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17dWZ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VWYoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiU2VuaGEgZXg6MTM1NDZcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiPkNBREFTVFJBUjwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDYXJkSW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvZm9vdHByaW50cy5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIG9iamVjdFBvc2l0aW9uPVwiYm90dG9tXCIgLz5cbiAgICAgICAgPC9DYXJkSW1hZ2VDb250YWluZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgIDwvUGFnZUNvbnRhaW5lcj5cblxuICApXG59XG5cblxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMycsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFBhZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogMzc1cHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHBhZGRpbmctdG9wOiAxMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEyMHB4O1xuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMEY7XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbCA9IHN0eWxlZC5kaXZgYFxuXG5leHBvcnQgY29uc3QgTWVudSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbmBcblxuZXhwb3J0IGNvbnN0IE1lbnVJdGVtQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG5gXG5cbmludGVyZmFjZSBNZW51SXRlbUJ1dHRvblByb3BzIHtcbiAgZmlyc3RDb2xvckhleDogc3RyaW5nXG4gIHNlY29uZENvbG9ySGV4OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IE1lbnVJdGVtQnV0dG9uID0gc3R5bGVkLmRpdjxNZW51SXRlbUJ1dHRvblByb3BzPmBcbiAgd2lkdGg6IDU4cHg7XG4gIGhlaWdodDogNThweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAxNXB4O1xuXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICR7KHsgZmlyc3RDb2xvckhleCB9KSA9PiBmaXJzdENvbG9ySGV4fSAwJSwgJHsoeyBzZWNvbmRDb2xvckhleCB9KSA9PiBzZWNvbmRDb2xvckhleH0gMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwM0I7XG5cbmBcblxuZXhwb3J0IGNvbnN0IE1lbnVJdGVtVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDEzcHggT3BlbiBTYW5zO1xuICBjb2xvcjogIzQwNEU3RjtcbmBcblxuZXhwb3J0IGNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAzMzVweDtcbiAgaGVpZ2h0OiAxODNweDtcbiAgYmFja2dyb3VuZDogI0ZGQzc1NztcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI0O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiAxN3B4O1xuYFxuXG5leHBvcnQgY29uc3QgQ2FyZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDE3cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDcwJTtcbmBcblxuZXhwb3J0IGNvbnN0IENhcmRJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA5NSU7XG4gIHdpZHRoOiA5NSU7XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbmBcblxuZXhwb3J0IGNvbnN0IENhcmRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogMTMycHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDBweDtcbiAgcGFkZGluZzogMTFweCAxN3B4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBIaWdobGlnaHRzID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBIaWdobGlnaHRzSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgSGlnaGxpZ2h0c1RpdGxlID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5leHBvcnQgY29uc3QgSGlnaGxpZ2h0c1NlZU1vcmUgPSBzdHlsZWQuYnV0dG9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgSGlnaGxpZ2h0c1NlZU1vcmVUZXh0ID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjQjhCOEI4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gXG5cbmV4cG9ydCBjb25zdCBIaWdobGlnaHRzU2VlTW9yZUljb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogOHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuYFxuXG5leHBvcnQgY29uc3QgSGlnaGxpZ2h0c0NvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogODZweCA4NnB4O1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImZpcnN0IHNlY29uZFwiXG4gICAgICAgICAgICAgICAgICAgICAgIFwiZmlyc3Qgc2Vjb25kXCI7XG4gIGdhcDogNHB4O1xuYFxuXG5leHBvcnQgY29uc3QgSGlnaGxpZ2h0c1ByaW1hcnlJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogZmlyc3Q7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgI0E3QTdBNztcbiAgYm9yZGVyLXJhZGl1czogN3B4IDBweCAwcHggN3B4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwNDU7XG5gXG5cbmV4cG9ydCBjb25zdCBIaWdobGlnaHRzU2Vjb25kYXJ5SW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTdBN0E3O1xuICBib3JkZXItcmFkaXVzOiAwcHggN3B4IDdweCAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDA0NTsgXG5gXG5cbmV4cG9ydCBjb25zdCBUYWJNZW51ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgI0U5RTlFOTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5gXG5cbmV4cG9ydCBjb25zdCBUYWJNZW51SG9tZUJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5idXR0b25gXG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFOUU5RTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IFRhYk1lbnVIb21lQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNzRweDtcbiAgd2lkdGg6IDc0cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBUYWJNZW51SXRlbSA9IHN0eWxlZC5idXR0b25gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgU3BhY2VyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogNDVweDtcbmBcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBQYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDM3NXB4O1xuICBtaW4taGVpZ2h0OiAxMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgcGFkZGluZy10b3A6IDExMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG5gXG5cblxuZXhwb3J0IGNvbnN0IE1lbnUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyN3B4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbmBcblxuXG5pbnRlcmZhY2UgTWVudUl0ZW1CdXR0b25Qcm9wcyB7XG4gIGZpcnN0Q29sb3JIZXg6IHN0cmluZ1xuICBzZWNvbmRDb2xvckhleDogc3RyaW5nXG59XG5cblxuZXhwb3J0IGNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5leHBvcnQgY29uc3QgQ2FyZEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgXG4gIFxuICBoZWlnaHQ6IDEyNXB4O1xuICB3aWR0aDogMTI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLXdpZHRoOiAxMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBcbmBcblxuZXhwb3J0IGNvbnN0IENhcmRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogMjMycHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiAwcHg7XG4gIHBhZGRpbmc6IDExcHggMTdweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDAzYjtcbmBcblxuZXhwb3J0IGNvbnN0IFNwYWNlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDQ1cHg7XG5gXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9