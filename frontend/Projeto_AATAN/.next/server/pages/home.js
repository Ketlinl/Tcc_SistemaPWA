(function() {
var exports = {};
exports.id = "pages/home";
exports.ids = ["pages/home"];
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

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header */ "./src/components/Header/index.tsx");
/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/pages/Home */ "./src/styles/pages/Home.ts");

var _jsxFileName = "C:\\Users\\Cliente\\Desktop\\Projeto_AATAN\\src\\pages\\home\\index.tsx";




function MenuItem({
  title,
  imageSrc,
  firstColorHex,
  secondColorHex,
  href
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.MenuItemContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.MenuItemButton, {
      firstColorHex: firstColorHex,
      secondColorHex: secondColorHex,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: imageSrc,
        width: "100%",
        height: "100%",
        objectFit: "contain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.MenuItemTitle, {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.PageContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.HeaderContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.Carousel, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.Card, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.CardImageContainer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
              src: "/images/animals/19.png",
              layout: "fill",
              objectFit: "contain",
              objectPosition: "right center"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
              children: "Seja Bem-Vindo!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.CardText, {
              children: "Veja a import\xE2ncia da ado\xE7\xE3o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.CardButton, {
              children: "Veja Agora!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.Menu, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {
          title: "Animais",
          imageSrc: "/images/icons/icon-pets.png",
          firstColorHex: "#FF885A",
          secondColorHex: "#FE6347",
          href: "../signUpAdm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {
          title: "Eventos",
          imageSrc: "/images/icons/icon-calendar-day.png",
          firstColorHex: "#71D4FE",
          secondColorHex: "#40B0F9",
          href: "../signUpAdm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {
          title: "Doa\xE7\xE3o",
          imageSrc: "/images/icons/icon-hand-holding-heart.png",
          firstColorHex: "#FEB940",
          secondColorHex: "#F99327",
          href: "../signUpAdm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {
          title: "Voluntariado",
          imageSrc: "/images/icons/icon-users.png",
          firstColorHex: "#59E48A",
          secondColorHex: "#2AC975",
          href: "../signUpAdm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.Highlights, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.HighlightsHeader, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.HighlightsTitle, {
            children: "Destaques"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.HighlightsSeeMore, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.HighlightsSeeMoreText, {
              children: "Ver mais"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.HighlightsSeeMoreIcon, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: "/images/icons/icon-chevron-left.png",
                width: "10",
                height: "10",
                objectFit: "contain"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.HighlightsContent, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.HighlightsPrimaryImage, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
              src: "/images/animals/3.jpg",
              layout: "fill",
              objectFit: "cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.HighlightsSecondaryImage, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
              src: "/images/animals/2.jpg",
              layout: "fill",
              objectFit: "cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.HighlightsSecondaryImage, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
              src: "/images/animals/16.jpg",
              layout: "fill",
              objectFit: "cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.TabMenu, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.TabMenuItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: "/images/icons/icon-user-alt.png",
          layout: "fill",
          objectFit: "contain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.TabMenuItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: "/images/icons/icon-heart.png",
          layout: "fill",
          objectFit: "contain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.TabMenuHomeButtonContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.TabMenuHomeButton, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: "/images/icons/icon-home-circle.png",
            layout: "fill",
            objectFit: "contain"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.TabMenuItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: "/images/icons/icon-comments.png",
          layout: "fill",
          objectFit: "contain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_3__.TabMenuItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: "/images/icons/icon-info-circle.png",
          layout: "fill",
          objectFit: "contain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js","src_styles_pages_Home_ts"], function() { return __webpack_exec__("./src/pages/home/index.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYXRhbi8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vYWF0YW4vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLnRzIiwid2VicGFjazovL2FhdGFuLy4vc3JjL3BhZ2VzL2hvbWUvaW5kZXgudHN4Iiwid2VicGFjazovL2FhdGFuL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vYWF0YW4vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9hYXRhbi9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vYWF0YW4vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2FhdGFuL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vYWF0YW4vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbkljb24iLCJoYXNNZXNzYWdlIiwiSGVhZGVyIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiTWVudUljb24iLCJJbWFnZSIsImF0dHJzIiwid2lkdGgiLCJoZWlnaHQiLCJNZW51TG9nbyIsIk5vdGlmaWNhdGlvbkljb25JbWFnZSIsIk5vdGlmaWNhdGlvbkljb25Db250YWluZXIiLCJOb3RpZmljYXRpb25JY29uQWN0aXZlIiwiTWVudUl0ZW0iLCJ0aXRsZSIsImltYWdlU3JjIiwiZmlyc3RDb2xvckhleCIsInNlY29uZENvbG9ySGV4IiwiaHJlZiIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFhQSxTQUFTQSxnQkFBVCxDQUEyQjtBQUFFQztBQUFGLENBQTNCLEVBQWtFO0FBQ2hFLHNCQUNFLDhEQUFDLDhEQUFEO0FBQUEsNEJBQ0UsOERBQUMsMERBQUQ7QUFBdUIsU0FBRyxFQUFDLHFDQUEzQjtBQUFpRSxlQUFTLEVBQUM7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUlBLFVBQVUsaUJBQUksOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztBQUVjLFNBQVNDLE1BQVQsR0FBbUI7QUFDaEMsc0JBQ0UsOERBQUMsOENBQUQ7QUFBQSw0QkFDRSw4REFBQyw2Q0FBRDtBQUFVLFNBQUcsRUFBQyw2QkFBZDtBQUE0QyxlQUFTLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsNkNBQUQ7QUFBVSxTQUFHLEVBQUMsa0JBQWQ7QUFBaUMsZUFBUyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLGdCQUFEO0FBQWtCLGdCQUFVO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCRDtBQUNBO0FBRU8sTUFBTUMsU0FBUyxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSw2R0FBZjtBQVNBLE1BQU1DLFFBQVEsR0FBR0Qsd0RBQU0sQ0FBQ0UsbURBQUQsQ0FBTixDQUFjQyxLQUFkLENBQW9CO0FBQzFDQyxPQUFLLEVBQUUsT0FEbUM7QUFFMUNDLFFBQU0sRUFBRTtBQUZrQyxDQUFwQixDQUFIO0FBQUE7QUFBQTtBQUFBLHVCQUFkO0FBT0EsTUFBTUMsUUFBUSxHQUFHTix3REFBTSxDQUFDRSxtREFBRCxDQUFOLENBQWNDLEtBQWQsQ0FBb0I7QUFDMUNDLE9BQUssRUFBRSxPQURtQztBQUUxQ0MsUUFBTSxFQUFFO0FBRmtDLENBQXBCLENBQUg7QUFBQTtBQUFBO0FBQUEsUUFBZDtBQUtBLE1BQU1FLHFCQUFxQixHQUFHUCx3REFBTSxDQUFDRSxtREFBRCxDQUFOLENBQWNDLEtBQWQsQ0FBb0I7QUFDdkRDLE9BQUssRUFBRSxPQURnRDtBQUV2REMsUUFBTSxFQUFFO0FBRitDLENBQXBCLENBQUg7QUFBQTtBQUFBO0FBQUEsdUJBQTNCO0FBT0EsTUFBTUcseUJBQXlCLEdBQUdSLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDBCQUEvQjtBQUlBLE1BQU1TLHNCQUFzQixHQUFHVCx1RUFBSDtBQUFBO0FBQUE7QUFBQSw0R0FBNUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ1A7QUFDQTtBQUdBOztBQXVDQSxTQUFTVSxRQUFULENBQW1CO0FBQUVDLE9BQUY7QUFBU0MsVUFBVDtBQUFtQkMsZUFBbkI7QUFBa0NDLGdCQUFsQztBQUFpREM7QUFBakQsQ0FBbkIsRUFBMkY7QUFDekYsc0JBQ0UsOERBQUMsaUVBQUQ7QUFBQSw0QkFDRSw4REFBQyw4REFBRDtBQUFnQixtQkFBYSxFQUFFRixhQUEvQjtBQUE4QyxvQkFBYyxFQUFFQyxjQUE5RDtBQUFBLDZCQUNFLDhEQUFDLG1EQUFEO0FBQU8sV0FBRyxFQUFFRixRQUFaO0FBQXNCLGFBQUssRUFBQyxNQUE1QjtBQUFtQyxjQUFNLEVBQUMsTUFBMUM7QUFBaUQsaUJBQVMsRUFBQztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUsOERBQUMsNkRBQUQ7QUFBQSxnQkFBZ0JEO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztBQUVjLFNBQVNLLElBQVQsR0FBaUI7QUFDOUIsc0JBQ0UsOERBQUMsNkRBQUQ7QUFBQSw0QkFDRSw4REFBQywrREFBRDtBQUFBLDZCQUNFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSw4REFBQyx5REFBRDtBQUFBLDhCQUNFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLHdEQUFEO0FBQUEsK0JBQ0UsOERBQUMsb0RBQUQ7QUFBQSxrQ0FDRSw4REFBQyxrRUFBRDtBQUFBLG1DQUNFLDhEQUFDLG1EQUFEO0FBQU8saUJBQUcsRUFBQyx3QkFBWDtBQUFvQyxvQkFBTSxFQUFDLE1BQTNDO0FBQWtELHVCQUFTLEVBQUMsU0FBNUQ7QUFBc0UsNEJBQWMsRUFBQztBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFLDhEQUFDLDJEQUFEO0FBQUEsb0NBQ0UsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixlQU9FLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFvQkUsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCRixlQXFCRSw4REFBQyxvREFBRDtBQUFBLGdDQUNFLDhEQUFDLFFBQUQ7QUFDRSxlQUFLLEVBQUMsU0FEUjtBQUVFLGtCQUFRLEVBQUMsNkJBRlg7QUFHRSx1QkFBYSxFQUFDLFNBSGhCO0FBSUUsd0JBQWMsRUFBQyxTQUpqQjtBQUtFLGNBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFVRSw4REFBQyxRQUFEO0FBQ0UsZUFBSyxFQUFDLFNBRFI7QUFFRSxrQkFBUSxFQUFDLHFDQUZYO0FBR0UsdUJBQWEsRUFBQyxTQUhoQjtBQUlFLHdCQUFjLEVBQUMsU0FKakI7QUFLRSxjQUFJLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLGVBb0JFLDhEQUFDLFFBQUQ7QUFDRSxlQUFLLEVBQUMsY0FEUjtBQUVFLGtCQUFRLEVBQUMsMkNBRlg7QUFHRSx1QkFBYSxFQUFDLFNBSGhCO0FBSUUsd0JBQWMsRUFBQyxTQUpqQjtBQUtFLGNBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEJGLGVBMkJFLDhEQUFDLFFBQUQ7QUFDRSxlQUFLLEVBQUMsY0FEUjtBQUVFLGtCQUFRLEVBQUMsOEJBRlg7QUFHRSx1QkFBYSxFQUFDLFNBSGhCO0FBSUUsd0JBQWMsRUFBQyxTQUpqQjtBQUtFLGNBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRixlQXlERSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekRGLGVBMERFLDhEQUFDLDBEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsZ0VBQUQ7QUFBQSxrQ0FDRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFLDhEQUFDLGlFQUFEO0FBQUEsb0NBQ0UsOERBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRSw4REFBQyxxRUFBRDtBQUFBLHFDQUNFLDhEQUFDLG1EQUFEO0FBQU8sbUJBQUcsRUFBQyxxQ0FBWDtBQUFpRCxxQkFBSyxFQUFDLElBQXZEO0FBQTRELHNCQUFNLEVBQUMsSUFBbkU7QUFBd0UseUJBQVMsRUFBQztBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBZUUsOERBQUMsaUVBQUQ7QUFBQSxrQ0FDRSw4REFBQyxzRUFBRDtBQUFBLG1DQUNFLDhEQUFDLG1EQUFEO0FBQU8saUJBQUcsRUFBQyx1QkFBWDtBQUFtQyxvQkFBTSxFQUFDLE1BQTFDO0FBQWlELHVCQUFTLEVBQUM7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSw4REFBQyx3RUFBRDtBQUFBLG1DQUNFLDhEQUFDLG1EQUFEO0FBQU8saUJBQUcsRUFBQyx1QkFBWDtBQUFtQyxvQkFBTSxFQUFDLE1BQTFDO0FBQWlELHVCQUFTLEVBQUM7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFPRSw4REFBQyx3RUFBRDtBQUFBLG1DQUNFLDhEQUFDLG1EQUFEO0FBQU8saUJBQUcsRUFBQyx3QkFBWDtBQUFvQyxvQkFBTSxFQUFDLE1BQTNDO0FBQWtELHVCQUFTLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQTBGRSw4REFBQyx1REFBRDtBQUFBLDhCQUNFLDhEQUFDLDJEQUFEO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUMsaUNBQVg7QUFBNkMsZ0JBQU0sRUFBQyxNQUFwRDtBQUEyRCxtQkFBUyxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSw4REFBQywyREFBRDtBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFDLDhCQUFYO0FBQTBDLGdCQUFNLEVBQUMsTUFBakQ7QUFBd0QsbUJBQVMsRUFBQztBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBT0UsOERBQUMsMEVBQUQ7QUFBQSwrQkFDRSw4REFBQyxpRUFBRDtBQUFBLGlDQUNFLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFDLG9DQUFYO0FBQWdELGtCQUFNLEVBQUMsTUFBdkQ7QUFBOEQscUJBQVMsRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVlFLDhEQUFDLDJEQUFEO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUMsaUNBQVg7QUFBNkMsZ0JBQU0sRUFBQyxNQUFwRDtBQUEyRCxtQkFBUyxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkYsZUFlRSw4REFBQywyREFBRDtBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFDLG9DQUFYO0FBQWdELGdCQUFNLEVBQUMsTUFBdkQ7QUFBOEQsbUJBQVMsRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlIRCxDOzs7Ozs7Ozs7OztBQ3hLRCwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBNZW51SWNvbixcbiAgTWVudUxvZ28sXG4gIE5vdGlmaWNhdGlvbkljb25JbWFnZSxcbiAgTm90aWZpY2F0aW9uSWNvbkNvbnRhaW5lcixcbiAgTm90aWZpY2F0aW9uSWNvbkFjdGl2ZVxufSBmcm9tICcuL3N0eWxlcydcblxudHlwZSBOb3RpZmljYXRpb25JY29uUHJvcHMgPSB7XG4gIGhhc01lc3NhZ2U/OiBib29sZWFuXG59XG5cbmZ1bmN0aW9uIE5vdGlmaWNhdGlvbkljb24gKHsgaGFzTWVzc2FnZSB9OiBOb3RpZmljYXRpb25JY29uUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Tm90aWZpY2F0aW9uSWNvbkNvbnRhaW5lcj5cbiAgICAgIDxOb3RpZmljYXRpb25JY29uSW1hZ2Ugc3JjPVwiL2ltYWdlcy9pY29ucy9pY29uLW5vdGlmaWNhdGlvbi5wbmdcIiBvYmplY3RGaXQ9XCJjb250YWluXCIvPlxuICAgICAgeyBoYXNNZXNzYWdlICYmIDxOb3RpZmljYXRpb25JY29uQWN0aXZlIC8+IH1cbiAgICA8L05vdGlmaWNhdGlvbkljb25Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyICgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPE1lbnVJY29uIHNyYz1cIi9pbWFnZXMvaWNvbnMvaWNvbi1tZW51LnBuZ1wiIG9iamVjdEZpdD1cImNvbnRhaW5cIi8+XG4gICAgICA8TWVudUxvZ28gc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIG9iamVjdEZpdD1cImNvbnRhaW5cIi8+XG4gICAgICA8Tm90aWZpY2F0aW9uSWNvbiBoYXNNZXNzYWdlLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuIiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuYFxuXG5leHBvcnQgY29uc3QgTWVudUljb24gPSBzdHlsZWQoSW1hZ2UpLmF0dHJzKHtcbiAgd2lkdGg6ICczNS40NCcsXG4gIGhlaWdodDogJzIzLjYyJ1xufSlgXG4gIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IE1lbnVMb2dvID0gc3R5bGVkKEltYWdlKS5hdHRycyh7XG4gIHdpZHRoOiAnODMuMTYnLFxuICBoZWlnaHQ6ICc3NCdcbn0pYGBcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkljb25JbWFnZSA9IHN0eWxlZChJbWFnZSkuYXR0cnMoe1xuICB3aWR0aDogJzIxLjA1JyxcbiAgaGVpZ2h0OiAnMjQuMDYnXG59KWBcbiAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmBcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkljb25BY3RpdmUgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICByaWdodDogMnB4O1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFNjQ0NztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuYFxuIiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuXG5pbXBvcnQgIExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBIZWFkZXJDb250YWluZXIsXG4gIEhpZ2hsaWdodHMsXG4gIENhcm91c2VsLFxuICBNZW51LFxuICBNZW51SXRlbUNvbnRhaW5lcixcbiAgTWVudUl0ZW1CdXR0b24sXG4gIE1lbnVJdGVtVGl0bGUsXG4gIFRhYk1lbnUsXG4gIENhcmQsXG4gIENhcmRCdXR0b24sXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIENhcmRDb250ZW50LFxuICBDYXJkSW1hZ2VDb250YWluZXIsXG4gIEhpZ2hsaWdodHNIZWFkZXIsXG4gIEhpZ2hsaWdodHNUaXRsZSxcbiAgSGlnaGxpZ2h0c1NlZU1vcmUsXG4gIEhpZ2hsaWdodHNTZWVNb3JlVGV4dCxcbiAgSGlnaGxpZ2h0c1NlZU1vcmVJY29uLFxuICBIaWdobGlnaHRzQ29udGVudCxcbiAgSGlnaGxpZ2h0c1ByaW1hcnlJbWFnZSxcbiAgSGlnaGxpZ2h0c1NlY29uZGFyeUltYWdlLFxuICBQYWdlQ29udGFpbmVyLFxuICBUYWJNZW51SG9tZUJ1dHRvbixcbiAgVGFiTWVudUhvbWVCdXR0b25Db250YWluZXIsXG4gIFRhYk1lbnVJdGVtLFxuICBTcGFjZXJcbn0gZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2VzL0hvbWUnXG5cbmludGVyZmFjZSBNZW51SXRlbVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZ1xuICBpbWFnZVNyYzogc3RyaW5nXG4gIGZpcnN0Q29sb3JIZXg6IHN0cmluZ1xuICBzZWNvbmRDb2xvckhleDogc3RyaW5nXG4gIGhyZWY6c3RyaW5nXG59XG5cbmZ1bmN0aW9uIE1lbnVJdGVtICh7IHRpdGxlLCBpbWFnZVNyYywgZmlyc3RDb2xvckhleCwgc2Vjb25kQ29sb3JIZXgsaHJlZiB9OiBNZW51SXRlbVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVJdGVtQ29udGFpbmVyPlxuICAgICAgPE1lbnVJdGVtQnV0dG9uIGZpcnN0Q29sb3JIZXg9e2ZpcnN0Q29sb3JIZXh9IHNlY29uZENvbG9ySGV4PXtzZWNvbmRDb2xvckhleH0+XG4gICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlU3JjfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XG4gICAgICA8L01lbnVJdGVtQnV0dG9uPlxuICAgICAgPE1lbnVJdGVtVGl0bGU+e3RpdGxlfTwvTWVudUl0ZW1UaXRsZT5cbiAgICA8L01lbnVJdGVtQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xuICByZXR1cm4gKFxuICAgIDxQYWdlQ29udGFpbmVyPlxuICAgICAgPEhlYWRlckNvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgPC9IZWFkZXJDb250YWluZXI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgIDxDYXJvdXNlbD5cbiAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxDYXJkSW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2FuaW1hbHMvMTkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiBvYmplY3RQb3NpdGlvbj1cInJpZ2h0IGNlbnRlclwiIC8+XG4gICAgICAgICAgICA8L0NhcmRJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPENhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICBTZWphIEJlbS1WaW5kbyFcbiAgICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgPENhcmRUZXh0PlxuICAgICAgICAgICAgICAgIFZlamEgYSBpbXBvcnTDom5jaWEgZGEgYWRvw6fDo29cbiAgICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxuICAgICAgICAgICAgICA8Q2FyZEJ1dHRvbj5cbiAgICAgICAgICAgICAgICBWZWphIEFnb3JhIVxuICAgICAgICAgICAgICAgIDwvQ2FyZEJ1dHRvbj5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgIDxNZW51PlxuICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgdGl0bGU9XCJBbmltYWlzXCJcbiAgICAgICAgICAgIGltYWdlU3JjPVwiL2ltYWdlcy9pY29ucy9pY29uLXBldHMucG5nXCJcbiAgICAgICAgICAgIGZpcnN0Q29sb3JIZXg9XCIjRkY4ODVBXCJcbiAgICAgICAgICAgIHNlY29uZENvbG9ySGV4PVwiI0ZFNjM0N1wiXG4gICAgICAgICAgICBocmVmPVwiLi4vc2lnblVwQWRtXCJcbiAgICAgICAgICAgIFxuICAgICAgICAgIC8+XG4gICAgICAgIFxuICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgdGl0bGU9XCJFdmVudG9zXCJcbiAgICAgICAgICAgIGltYWdlU3JjPVwiL2ltYWdlcy9pY29ucy9pY29uLWNhbGVuZGFyLWRheS5wbmdcIlxuICAgICAgICAgICAgZmlyc3RDb2xvckhleD1cIiM3MUQ0RkVcIlxuICAgICAgICAgICAgc2Vjb25kQ29sb3JIZXg9XCIjNDBCMEY5XCJcbiAgICAgICAgICAgIGhyZWY9XCIuLi9zaWduVXBBZG1cIlxuICAgICAgICAgICAgXG4gICAgICAgICAgLz5cbiAgICAgIFxuICAgICAgIFxuICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgdGl0bGU9XCJEb2HDp8Ojb1wiXG4gICAgICAgICAgICBpbWFnZVNyYz1cIi9pbWFnZXMvaWNvbnMvaWNvbi1oYW5kLWhvbGRpbmctaGVhcnQucG5nXCJcbiAgICAgICAgICAgIGZpcnN0Q29sb3JIZXg9XCIjRkVCOTQwXCJcbiAgICAgICAgICAgIHNlY29uZENvbG9ySGV4PVwiI0Y5OTMyN1wiXG4gICAgICAgICAgICBocmVmPVwiLi4vc2lnblVwQWRtXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgdGl0bGU9XCJWb2x1bnRhcmlhZG9cIlxuICAgICAgICAgICAgaW1hZ2VTcmM9XCIvaW1hZ2VzL2ljb25zL2ljb24tdXNlcnMucG5nXCJcbiAgICAgICAgICAgIGZpcnN0Q29sb3JIZXg9XCIjNTlFNDhBXCJcbiAgICAgICAgICAgIHNlY29uZENvbG9ySGV4PVwiIzJBQzk3NVwiXG4gICAgICAgICAgICBocmVmPVwiLi4vc2lnblVwQWRtXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgIDwvTWVudT5cbiAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICA8SGlnaGxpZ2h0cz5cbiAgICAgICAgICA8SGlnaGxpZ2h0c0hlYWRlcj5cbiAgICAgICAgICAgIDxIaWdobGlnaHRzVGl0bGU+XG4gICAgICAgICAgICAgIERlc3RhcXVlc1xuICAgICAgICAgICAgICA8L0hpZ2hsaWdodHNUaXRsZT5cbiAgICAgICAgICAgIDxIaWdobGlnaHRzU2VlTW9yZT5cbiAgICAgICAgICAgICAgPEhpZ2hsaWdodHNTZWVNb3JlVGV4dD5cbiAgICAgICAgICAgICAgICBWZXIgbWFpc1xuICAgICAgICAgICAgICAgIDwvSGlnaGxpZ2h0c1NlZU1vcmVUZXh0PlxuICAgICAgICAgICAgICA8SGlnaGxpZ2h0c1NlZU1vcmVJY29uPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2ljb25zL2ljb24tY2hldnJvbi1sZWZ0LnBuZ1wiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxuICAgICAgICAgICAgICA8L0hpZ2hsaWdodHNTZWVNb3JlSWNvbj5cbiAgICAgICAgICAgIDwvSGlnaGxpZ2h0c1NlZU1vcmU+XG5cbiAgICAgICAgICA8L0hpZ2hsaWdodHNIZWFkZXI+XG4gICAgICAgICAgPEhpZ2hsaWdodHNDb250ZW50PlxuICAgICAgICAgICAgPEhpZ2hsaWdodHNQcmltYXJ5SW1hZ2U+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2FuaW1hbHMvMy5qcGdcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY292ZXJcIiAvPlxuICAgICAgICAgICAgPC9IaWdobGlnaHRzUHJpbWFyeUltYWdlPlxuICAgICAgICAgICAgPEhpZ2hsaWdodHNTZWNvbmRhcnlJbWFnZT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvYW5pbWFscy8yLmpwZ1wiIGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIC8+XG4gICAgICAgICAgICA8L0hpZ2hsaWdodHNTZWNvbmRhcnlJbWFnZT5cbiAgICAgICAgICAgIDxIaWdobGlnaHRzU2Vjb25kYXJ5SW1hZ2U+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2FuaW1hbHMvMTYuanBnXCIgbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvdmVyXCIgLz5cbiAgICAgICAgICAgIDwvSGlnaGxpZ2h0c1NlY29uZGFyeUltYWdlPlxuICAgICAgICAgIDwvSGlnaGxpZ2h0c0NvbnRlbnQ+XG4gICAgICAgIDwvSGlnaGxpZ2h0cz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPFRhYk1lbnU+XG4gICAgICAgIDxUYWJNZW51SXRlbT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9pY29ucy9pY29uLXVzZXItYWx0LnBuZ1wiIGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgLz5cbiAgICAgICAgPC9UYWJNZW51SXRlbT5cbiAgICAgICAgPFRhYk1lbnVJdGVtPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2ljb25zL2ljb24taGVhcnQucG5nXCIgbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxuICAgICAgICA8L1RhYk1lbnVJdGVtPlxuICAgICAgICA8VGFiTWVudUhvbWVCdXR0b25Db250YWluZXI+XG4gICAgICAgICAgPFRhYk1lbnVIb21lQnV0dG9uPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvaWNvbnMvaWNvbi1ob21lLWNpcmNsZS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XG4gICAgICAgICAgPC9UYWJNZW51SG9tZUJ1dHRvbj5cbiAgICAgICAgPC9UYWJNZW51SG9tZUJ1dHRvbkNvbnRhaW5lcj5cbiAgICAgICAgPFRhYk1lbnVJdGVtPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2ljb25zL2ljb24tY29tbWVudHMucG5nXCIgbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxuICAgICAgICA8L1RhYk1lbnVJdGVtPlxuICAgICAgICA8VGFiTWVudUl0ZW0+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvaWNvbnMvaWNvbi1pbmZvLWNpcmNsZS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XG4gICAgICAgIDwvVGFiTWVudUl0ZW0+XG4gICAgICA8L1RhYk1lbnU+XG4gICAgPC9QYWdlQ29udGFpbmVyPlxuXG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=