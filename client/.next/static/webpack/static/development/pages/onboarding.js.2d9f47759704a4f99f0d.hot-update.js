webpackHotUpdate("static/development/pages/onboarding.js",{

/***/ "./components/OnboardingFlow/OnboardNavbar.tsx":
/*!*****************************************************!*\
  !*** ./components/OnboardingFlow/OnboardNavbar.tsx ***!
  \*****************************************************/
/*! exports provided: OnboardNavbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardNavbar", function() { return OnboardNavbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);


const {
  Step
} = antd__WEBPACK_IMPORTED_MODULE_1__["Steps"];

const STEPS = ["Intro", "Build Profile", "Get Started"];
const OnboardNavbar = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Steps"], {
    style: {
      fontFamily: 'Mark Pro Bold',
      justifyContent: 'center',
      backgroundColor: 'rgba(229, 229, 229, 0.3)',
      paddingLeft: 80,
      paddingRight: 80,
      paddingTop: 40,
      paddingBottom: 40,
      fontSize: 20
    },
    current: props.currentStep
  }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(STEPS, step => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step, {
      title: step
    });
  }));
};

/***/ })

})
//# sourceMappingURL=onboarding.js.2d9f47759704a4f99f0d.hot-update.js.map