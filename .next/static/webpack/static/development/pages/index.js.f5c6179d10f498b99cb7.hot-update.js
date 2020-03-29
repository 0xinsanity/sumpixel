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
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _OnboardingFlow_Form1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OnboardingFlow/Form1 */ "./components/OnboardingFlow/Form1.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");







const Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Typography"].Title)`
    padding-top: 15px;
    padding-bottom: 35px;
`;
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
const Onboard = props => {
  const [currentStep, changeStep] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [currentUser, changeUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const firebaseUser = _lib_firebase__WEBPACK_IMPORTED_MODULE_4__["myFirebase"].auth().currentUser;

    if (firebaseUser !== null) {
      console.log(firebaseUser.displayName);
      changeUser({
        email: firebaseUser.email,
        firebaseId: firebaseUser.uid,
        firstName: firebaseUser.displayName.substr(0, firebaseUser.displayName.indexOf(' ')),
        lastName: firebaseUser.displayName.substr(firebaseUser.displayName.indexOf(' ') + 1)
      });
    }
  }, [_lib_firebase__WEBPACK_IMPORTED_MODULE_4__["myFirebase"].auth().currentUser]);
  var currentForm;
  var title;

  switch (currentStep) {
    case 0:
      title = TOTAL_STEPS[0].title;
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_Form1__WEBPACK_IMPORTED_MODULE_5__["Form1"], {
        changeStep: () => changeStep(currentStep + 1),
        currentUser: currentUser,
        changeCurrentUser: user => changeUser(user)
      });
      break;

    case 1:
      title = TOTAL_STEPS[1].title;
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form2, {
        changeStep: () => changeStep(currentStep + 1),
        currentUser: currentUser,
        changeCurrentUser: user => changeUser(user)
      });
      break;

    case 2:
      title = TOTAL_STEPS[2].title;
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_Form1__WEBPACK_IMPORTED_MODULE_5__["Form1"], {
        changeStep: () => changeStep(currentStep + 1),
        currentUser: currentUser,
        changeCurrentUser: user => changeUser(user)
      });
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardNavbar__WEBPACK_IMPORTED_MODULE_1__["OnboardNavbar"], {
    currentStep: currentStep,
    steps: TOTAL_STEPS
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, title), currentForm);
};

/***/ })

})
//# sourceMappingURL=index.js.f5c6179d10f498b99cb7.hot-update.js.map