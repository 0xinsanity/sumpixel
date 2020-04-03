webpackHotUpdate("static/development/pages/signup.js",{

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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/model */ "./model/model.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




const EMButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "EmployerDesigner__EMButton",
  componentId: "sc-1jnupa2-0"
})(["margin-bottom:30px"]);

const EmployerDesigner = props => {
  const {
    changeStep,
    changeNavbarStatus
  } = props;

  const onClick = isDesigner => {
    changeNavbarStatus(isDesigner ? _model_model__WEBPACK_IMPORTED_MODULE_2__["NavBarStatus"].Designer : _model_model__WEBPACK_IMPORTED_MODULE_2__["NavBarStatus"].Employer);
    changeStep(1);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EMButton, {
    type: "default",
    onClick: () => onClick(false)
  }, "Employer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EMButton, {
    type: "default",
    onClick: () => onClick(true)
  }, "Designer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EMButton, {
    type: "default",
    onClick: props.deleteUser
  }, "Change Email or Name"));
};

/* harmony default export */ __webpack_exports__["default"] = (EmployerDesigner);

/***/ })

})
//# sourceMappingURL=signup.js.72ba55ec582845e089be.hot-update.js.map