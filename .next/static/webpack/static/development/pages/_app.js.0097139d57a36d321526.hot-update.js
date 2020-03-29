webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _OnboardingFlow_Form1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OnboardingFlow/Form1 */ "./components/OnboardingFlow/Form1.tsx");





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
  const {
    loading
  } = props;

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  const [currentStep, changeStep] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [currentUser, changeUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const firebaseUser = _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["myFirebase"].auth().currentUser;

    if (firebaseUser !== null) {
      console.log(firebaseUser.displayName);
      changeUser({
        email: firebaseUser.email,
        firebaseId: firebaseUser.uid,
        firstName: firebaseUser.displayName.substr(0, firebaseUser.displayName.indexOf(' ')),
        lastName: firebaseUser.displayName.substr(firebaseUser.displayName.indexOf(' ') + 1)
      });
    }
  }, [_lib_firebase__WEBPACK_IMPORTED_MODULE_3__["myFirebase"].auth().currentUser]);
  var currentForm;

  switch (currentStep) {
    case 0:
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_Form1__WEBPACK_IMPORTED_MODULE_4__["Form1"], {
        changeStep: () => changeStep(currentStep + 1),
        currentUser: currentUser,
        changeCurrentUser: user => changeUser(user)
      });
      break;

    case 1:
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_Form1__WEBPACK_IMPORTED_MODULE_4__["Form1"], {
        changeStep: () => changeStep(currentStep + 1),
        currentUser: currentUser,
        changeCurrentUser: user => changeUser(user)
      });
      break;

    case 2:
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_Form1__WEBPACK_IMPORTED_MODULE_4__["Form1"], {
        changeStep: () => changeStep(currentStep + 1),
        currentUser: currentUser,
        changeCurrentUser: user => changeUser(user)
      });
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardNavbar__WEBPACK_IMPORTED_MODULE_1__["OnboardNavbar"], {
    currentStep: currentStep,
    steps: TOTAL_STEPS
  }), currentForm);
};

/***/ })

})
//# sourceMappingURL=_app.js.0097139d57a36d321526.hot-update.js.map