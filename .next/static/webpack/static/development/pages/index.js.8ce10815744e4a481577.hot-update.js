webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Onboard.tsx":
/*!********************************!*\
  !*** ./components/Onboard.tsx ***!
  \********************************/
/*! exports provided: Onboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Onboard", function() { return Onboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OnboardNavbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnboardNavbar */ "./components/OnboardNavbar.tsx");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./components/Container.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");




const TOTAL_STEPS = [{
  title: "Get Started",
  desc: "Add Personal Data"
}, {
  title: "Add Socials",
  desc: "Add Social Networks"
}, {
  title: "Take the Quiz",
  desc: "Finish Up and Get Evaluated"
}];
function Onboard() {
  const [currentStep, changeStep] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardNavbar__WEBPACK_IMPORTED_MODULE_1__["OnboardNavbar"], {
    currentStep: currentStep,
    steps: TOTAL_STEPS
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      width: 100
    }
  }, currentStep !== 2 ? 'Next Step' : 'Take the Quiz'));
}

/***/ })

})
//# sourceMappingURL=index.js.8ce10815744e4a481577.hot-update.js.map