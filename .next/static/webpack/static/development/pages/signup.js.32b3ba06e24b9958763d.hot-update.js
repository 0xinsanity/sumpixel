webpackHotUpdate("static/development/pages/signup.js",{

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
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/model */ "./model/model.tsx");
/* harmony import */ var _OnboardingFlow_Designers_FormPersonalData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OnboardingFlow/Designers/FormPersonalData */ "./components/OnboardingFlow/Designers/FormPersonalData.tsx");
/* harmony import */ var _OnboardingFlow_Employers_FormBusinessData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OnboardingFlow/Employers/FormBusinessData */ "./components/OnboardingFlow/Employers/FormBusinessData.tsx");
/* harmony import */ var _OnboardingFlow_Designers_QuizScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OnboardingFlow/Designers/QuizScreen */ "./components/OnboardingFlow/Designers/QuizScreen.tsx");
/* harmony import */ var _OnboardingFlow_Employers_Verification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./OnboardingFlow/Employers/Verification */ "./components/OnboardingFlow/Employers/Verification.tsx");
/* harmony import */ var _OnboardingFlow_EmployerDesigner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OnboardingFlow/EmployerDesigner */ "./components/OnboardingFlow/EmployerDesigner.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/server */ "./lib/server.tsx");













const Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Typography"].Title).withConfig({
  displayName: "Onboard__Title",
  componentId: "sc-1f8dn92-0"
})(["padding-top:15px;padding-bottom:35px;"]);
const Onboard = props => {
  const [currentStep, changeStep] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [navBarStatus, changeNavbarStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_model_model__WEBPACK_IMPORTED_MODULE_4__["NavBarStatus"].Undecided);
  const {
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_11__["UserContext"]);

  const updateUser = async updatedUser => {
    changeUser(updatedUser);
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_12__["createUser"])(updatedUser);
  };

  const updateEmployer = async updatedUser => {
    changeUser(updatedUser);
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_12__["createEmployer"])(updatedUser);
  };

  var currentForm;
  var title;

  switch (currentStep) {
    case 0:
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_EmployerDesigner__WEBPACK_IMPORTED_MODULE_9__["default"], {
        deleteUser: props.deleteUser,
        changeNavbarStatus: newStatus => changeNavbarStatus(newStatus),
        changeStep: change => changeStep(currentStep + change)
      });
      break;

    case 1:
      if (navBarStatus == _model_model__WEBPACK_IMPORTED_MODULE_4__["NavBarStatus"].Designer) {
        currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_Designers_FormPersonalData__WEBPACK_IMPORTED_MODULE_5__["default"], {
          changeNavbarStatus: newStatus => changeNavbarStatus(newStatus),
          changeStep: change => changeStep(currentStep + change),
          currentUser: currentUser,
          changeCurrentUser: async user => await updateUser(user)
        });
      } else {
        currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_Employers_FormBusinessData__WEBPACK_IMPORTED_MODULE_6__["default"], {
          changeNavbarStatus: newStatus => changeNavbarStatus(newStatus),
          changeStep: change => changeStep(currentStep + change),
          currentUser: currentUser,
          changeCurrentUser: async user => await updateEmployer(user)
        });
      }

      break;

    case 2:
      if (navBarStatus == _model_model__WEBPACK_IMPORTED_MODULE_4__["NavBarStatus"].Designer) {
        currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_Designers_QuizScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
          changeStep: change => changeStep(currentStep + change),
          currentUser: currentUser,
          changeCurrentUser: async user => await updateUser(user)
        });
      } else {
        currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_Employers_Verification__WEBPACK_IMPORTED_MODULE_8__["default"], {
          changeStep: change => changeStep(currentStep + change),
          currentUser: currentUser,
          changeCurrentUser: async user => await updateEmployer(user)
        });
      }

      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardNavbar__WEBPACK_IMPORTED_MODULE_1__["OnboardNavbar"], {
    status: navBarStatus,
    currentStep: currentStep
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, title), currentForm);
};

/***/ })

})
//# sourceMappingURL=signup.js.32b3ba06e24b9958763d.hot-update.js.map