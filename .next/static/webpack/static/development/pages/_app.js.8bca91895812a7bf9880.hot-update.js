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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _OnboardingFlow_FormPersonalData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OnboardingFlow/FormPersonalData */ "./components/OnboardingFlow/FormPersonalData.tsx");
/* harmony import */ var _OnboardingFlow_QuizScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OnboardingFlow/QuizScreen */ "./components/OnboardingFlow/QuizScreen.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/server */ "./lib/server.tsx");









const Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Typography"].Title).withConfig({
  displayName: "Onboard__Title",
  componentId: "sc-1f8dn92-0"
})(["padding-top:15px;padding-bottom:35px;"]);
const TOTAL_STEPS = [{
  title: "Employer or Designer",
  desc: "Are you an Employer or Desinger?"
}, {
  title: "Get Started",
  desc: "Add Personal Data"
}, {
  title: "Take the Quiz",
  desc: "Finish Up and Get Evaluated"
}];
const Onboard = props => {
  const [currentStep, changeStep] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const [currentUser, changeUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function findUser() {
      const user = await Object(_lib_server__WEBPACK_IMPORTED_MODULE_8__["getUser"])(firebaseUser.uid);

      if (user['user_exists'] !== undefined) {
        changeUser(user);
      } else {
        changeUser({
          email: firebaseUser.email,
          firebaseId: firebaseUser.uid,
          firstName: firebaseUser.displayName.substr(0, firebaseUser.displayName.indexOf(' ')),
          lastName: firebaseUser.displayName.substr(firebaseUser.displayName.indexOf(' ') + 1)
        });
      }
    }

    const firebaseUser = _lib_firebase__WEBPACK_IMPORTED_MODULE_4__["myFirebase"].auth().currentUser;

    if (firebaseUser !== null) {
      findUser();
    }
  }, [_lib_firebase__WEBPACK_IMPORTED_MODULE_4__["myFirebase"].auth().currentUser]);
  var currentForm;
  var title;

  switch (currentStep) {
    case 0:
      title = TOTAL_STEPS[0].title;
      break;

    case 1:
      title = TOTAL_STEPS[1].title;
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_FormPersonalData__WEBPACK_IMPORTED_MODULE_5__["default"], {
        changeStep: change => changeStep(currentStep + change),
        currentUser: currentUser,
        changeCurrentUser: user => changeUser(user)
      });
      break;

    case 2:
      title = TOTAL_STEPS[2].title;
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_QuizScreen__WEBPACK_IMPORTED_MODULE_6__["default"], {
        changeStep: change => changeStep(currentStep + change),
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
//# sourceMappingURL=_app.js.8bca91895812a7bf9880.hot-update.js.map