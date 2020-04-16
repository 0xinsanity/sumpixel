webpackHotUpdate("static/development/pages/onboarding.js",{

/***/ "./components/OnboardingFlow/EmployerDesigner.tsx":
/*!********************************************************!*\
  !*** ./components/OnboardingFlow/EmployerDesigner.tsx ***!
  \********************************************************/
/*! exports provided: Question, ContainerCard, RButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerCard", function() { return ContainerCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RButton", function() { return RButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/model */ "./model/model.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




const Question = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text).withConfig({
  displayName: "EmployerDesigner__Question",
  componentId: "sc-1jnupa2-0"
})(["font-family:'Mark Pro Bold';text-align:center;padding-bottom:46px;color:#000000;font-size:20px;"]);
const ContainerCard = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "EmployerDesigner__ContainerCard",
  componentId: "sc-1jnupa2-1"
})(["width:100%;height:100%;padding-top:50px;padding-bottom:50px;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
const RButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button).withConfig({
  displayName: "EmployerDesigner__RButton",
  componentId: "sc-1jnupa2-2"
})(["padding-top:23px;padding-bottom:50px;padding-left:68px;padding-right:68px;font-family:'Mark Pro Bold';font-size:20px;border-radius:0 0 0 0 !important;"]);

const EmployerDesigner = props => {
  const {
    changeNavbarStatus,
    currentStatus
  } = props;

  const onClick = status => {
    changeNavbarStatus(status);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Question, null, "Are you an employer or a designer?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
    buttonStyle: "solid",
    onChange: e => onClick(e.target.value),
    value: currentStatus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RButton, {
    style: {
      marginRight: 17
    },
    value: _model_model__WEBPACK_IMPORTED_MODULE_2__["NavBarStatus"].Employer
  }, "Employer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RButton, {
    value: _model_model__WEBPACK_IMPORTED_MODULE_2__["NavBarStatus"].Designer
  }, "Designer")));
};

/* harmony default export */ __webpack_exports__["default"] = (EmployerDesigner);

/***/ })

})
//# sourceMappingURL=onboarding.js.a133db6dcbc44854a1cd.hot-update.js.map