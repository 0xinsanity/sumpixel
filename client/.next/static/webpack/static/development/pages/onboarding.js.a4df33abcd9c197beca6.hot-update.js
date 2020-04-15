webpackHotUpdate("static/development/pages/onboarding.js",{

/***/ "./components/OnboardingFlow/EmployerDesigner.tsx":
/*!********************************************************!*\
  !*** ./components/OnboardingFlow/EmployerDesigner.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/model */ "./model/model.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _General_BigBlackButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../General/BigBlackButton */ "./components/General/BigBlackButton.tsx");




const EMButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_3__["BigBlackButton"]).withConfig({
  displayName: "EmployerDesigner__EMButton",
  componentId: "sc-1jnupa2-0"
})(["margin-bottom:30px"]);

const EmployerDesigner = props => {
  const {
    changeNavbarStatus
  } = props;

  const onClick = isDesigner => {
    changeNavbarStatus(isDesigner ? _model_model__WEBPACK_IMPORTED_MODULE_1__["NavBarStatus"].Designer : _model_model__WEBPACK_IMPORTED_MODULE_1__["NavBarStatus"].Employer);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EMButton, {
    type: "default",
    onClick: () => onClick(false)
  }, "Employer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EMButton, {
    type: "default",
    onClick: () => onClick(true)
  }, "Designer"));
};

/* harmony default export */ __webpack_exports__["default"] = (EmployerDesigner);

/***/ })

})
//# sourceMappingURL=onboarding.js.a4df33abcd9c197beca6.hot-update.js.map