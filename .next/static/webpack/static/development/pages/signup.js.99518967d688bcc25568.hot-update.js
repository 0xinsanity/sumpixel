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
/* harmony import */ var _OnboardNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OnboardNavbar */ "./components/OnboardNavbar.tsx");




const EmployerDesigner = props => {
  const {
    currentUser,
    changeCurrentUser,
    changeStep,
    changeNavbarStatus
  } = props;

  const onClick = isDesigner => {
    changeNavbarStatus(isDesigner ? _OnboardNavbar__WEBPACK_IMPORTED_MODULE_2__["NavBarStatus"].Designer : _OnboardNavbar__WEBPACK_IMPORTED_MODULE_2__["NavBarStatus"].Employer);
    changeStep(1);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "default",
    onClick: () => onClick(false)
  }, "Employer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "default",
    onClick: () => onClick(true)
  }, "Designer"));
};

/* harmony default export */ __webpack_exports__["default"] = (EmployerDesigner);

/***/ })

})
//# sourceMappingURL=signup.js.99518967d688bcc25568.hot-update.js.map