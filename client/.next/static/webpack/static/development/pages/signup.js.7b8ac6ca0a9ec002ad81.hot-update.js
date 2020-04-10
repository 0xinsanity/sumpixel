webpackHotUpdate("static/development/pages/signup.js",{

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
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/model */ "./model/model.tsx");


const {
  Step
} = antd__WEBPACK_IMPORTED_MODULE_1__["Steps"];


const DESIGN_STEPS = [{
  title: "Employer or Designer",
  desc: "Are you an Employer or Designer?"
}, {
  title: "Get Started",
  desc: "Add Personal Data"
}, {
  title: "Take the Quiz",
  desc: "Finish Up and Get Evaluated"
}];
const EMPLOYER_STEPS = [{
  title: "Employer or Designer",
  desc: "Are you an Employer or Designer?"
}, {
  title: "Get Started",
  desc: "Add Data About Your Business"
}, {
  title: "Go To Dashboard",
  desc: "Finish Up and Start Searching"
}];
const OnboardNavbar = props => {
  var steps;

  switch (props.status) {
    case _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Undecided:
      steps = [DESIGN_STEPS[0]];
      break;

    case _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Designer:
      steps = DESIGN_STEPS;
      break;

    case _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Employer:
      steps = EMPLOYER_STEPS;
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Steps"], {
    style: {
      fontFamily: 'Mark Pro',
      paddingBottom: 20,
      justifyContent: 'center'
    },
    current: props.currentStep
  }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(steps, ({
    title,
    desc
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step, {
      title: title,
      description: desc
    });
  }));
};

/***/ })

})
//# sourceMappingURL=signup.js.7b8ac6ca0a9ec002ad81.hot-update.js.map