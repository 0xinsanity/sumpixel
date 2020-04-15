webpackHotUpdate("static/development/pages/onboarding.js",{

/***/ "./components/General/BackNext.tsx":
/*!*****************************************!*\
  !*** ./components/General/BackNext.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _BigBlackButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BigBlackButton */ "./components/General/BigBlackButton.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BackNext__Container",
  componentId: "sc-1iee36m-0"
})(["border-top:1px solid #DAE2EF;width:100%;padding-bottom:46px;padding-top:46px;padding-right:66px;padding-left:66px;flex-direction:row;justify-content:flex-end;display:flex;"]);

const BackNext = props => {
  const {
    backClick,
    nextClick
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: backClick,
    type: 'link'
  }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BigBlackButton__WEBPACK_IMPORTED_MODULE_2__["BigBlackButton"], {
    onClick: nextClick
  }, "Next"));
};

/* harmony default export */ __webpack_exports__["default"] = (BackNext);

/***/ })

})
//# sourceMappingURL=onboarding.js.4300265edb1159e30c2e.hot-update.js.map