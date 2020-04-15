webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/General/SumpixelCard.tsx":
/*!*********************************************!*\
  !*** ./components/General/SumpixelCard.tsx ***!
  \*********************************************/
/*! exports provided: SumpixelCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumpixelCard", function() { return SumpixelCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


const SumpixelCard = props => {
  var logo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    height: 43,
    src: __webpack_require__(/*! ../../assets/sumpixel-logo.png */ "./assets/sumpixel-logo.png")
  });

  if (props.withLink) {
    logo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: '/'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      height: 43,
      src: __webpack_require__(/*! ../../assets/sumpixel-logo.png */ "./assets/sumpixel-logo.png")
    }));
  } else if (props.withLogo === false) {
    logo = null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    bodyStyle: {
      padding: props.withLogo === false ? 0 : 'auto'
    },
    style: {
      paddingLeft: props.withLogo === false ? 0 : 20,
      paddingRight: props.withLogo === false ? 0 : 20,
      maxHeight: '100vh',
      width: '100vh',
      ...props.style
    },
    title: logo
  }, props.children);
};

/***/ })

})
//# sourceMappingURL=index.js.ce2295f2afd3a26f38d8.hot-update.js.map