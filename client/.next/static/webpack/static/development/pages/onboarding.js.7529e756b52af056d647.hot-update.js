webpackHotUpdate("static/development/pages/onboarding.js",{

/***/ "./components/OnboardingFlow/Onboard.tsx":
/*!***********************************************!*\
  !*** ./components/OnboardingFlow/Onboard.tsx ***!
  \***********************************************/
/*! exports provided: Onboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Onboard", function() { return Onboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OnboardNavbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnboardNavbar */ "./components/OnboardingFlow/OnboardNavbar.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/model */ "./model/model.tsx");
/* harmony import */ var _Designers_FormPersonalData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Designers/FormPersonalData */ "./components/OnboardingFlow/Designers/FormPersonalData.tsx");
/* harmony import */ var _Employers_FormBusinessData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Employers/FormBusinessData */ "./components/OnboardingFlow/Employers/FormBusinessData.tsx");
/* harmony import */ var _EmployerDesigner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EmployerDesigner */ "./components/OnboardingFlow/EmployerDesigner.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/server */ "./lib/server.tsx");
/* harmony import */ var _General_OpenPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../General/OpenPage */ "./components/General/OpenPage.tsx");
/* harmony import */ var _General_SumpixelCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../General/SumpixelCard */ "./components/General/SumpixelCard.tsx");
/* harmony import */ var _General_BackNext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../General/BackNext */ "./components/General/BackNext.tsx");













const Onboard = props => {
  const [currentStep, changeStep] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [navBarStatus, changeNavbarStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Undecided);
  const {
    currentUser,
    changeUser,
    loading,
    setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_7__["UserContext"]);

  const updateUser = async updatedUser => {
    window.analytics.track('Create User');
    changeUser(updatedUser);
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_8__["createUser"])(updatedUser);
  };

  const updateEmployer = async updatedUser => {
    window.analytics.track('Create Employer');
    changeUser(updatedUser);
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_8__["createEmployer"])(updatedUser);
  };

  const backClick = () => {
    if (currentStep === 0) {
      props.deleteUser();
    } else {
      changeStep(currentStep - 1);
    }
  };

  const nextClick = () => {
    if (currentStep === 0 && navBarStatus === _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Undecided) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error('Please choose whether you are a designer or employer');
      return;
    } else if (currentStep === 0) {
      // Without timeout, it automatically calls Next submit
      setTimeout(() => {
        changeStep(currentStep + 1);
      }, 1);
    }
  };

  var currentForm;

  switch (currentStep) {
    case 0:
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmployerDesigner__WEBPACK_IMPORTED_MODULE_6__["default"], {
        currentStatus: navBarStatus,
        deleteUser: props.deleteUser,
        changeNavbarStatus: newStatus => changeNavbarStatus(newStatus)
      });
      break;

    case 1:
      if (navBarStatus == _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Designer) {
        currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmployerDesigner__WEBPACK_IMPORTED_MODULE_6__["ContainerCard"], {
          style: {
            paddingBottom: 0
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmployerDesigner__WEBPACK_IMPORTED_MODULE_6__["Question"], null, "Let's build your profile."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Designers_FormPersonalData__WEBPACK_IMPORTED_MODULE_4__["default"], {
          addStep: () => changeStep(currentStep + 1),
          changeCurrentUser: async user => await updateUser(user)
        }));
      } else {
        currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmployerDesigner__WEBPACK_IMPORTED_MODULE_6__["ContainerCard"], {
          style: {
            paddingBottom: 25
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmployerDesigner__WEBPACK_IMPORTED_MODULE_6__["Question"], null, "Let's build your profile."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Employers_FormBusinessData__WEBPACK_IMPORTED_MODULE_5__["default"], {
          addStep: () => changeStep(currentStep + 1),
          changeCurrentUser: async user => await updateEmployer(user)
        }));
      }

      break;

    case 2:
      if (navBarStatus == _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Designer) {
        Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_9__["default"])(setLoading, '/dashboard_user');
      } else {
        Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_9__["default"])(setLoading, '/dashboard_employer');
      }

      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: 40
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    height: 50,
    src: __webpack_require__(/*! ../../assets/sumpixel-logo-white.png */ "./assets/sumpixel-logo-white.png")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_SumpixelCard__WEBPACK_IMPORTED_MODULE_10__["SumpixelCard"], {
    withLogo: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardNavbar__WEBPACK_IMPORTED_MODULE_1__["OnboardNavbar"], {
    currentStep: currentStep
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: 20
    }
  }, currentForm), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_BackNext__WEBPACK_IMPORTED_MODULE_11__["default"], {
    backClick: backClick,
    nextClick: nextClick,
    currentState: currentStep,
    status: navBarStatus
  }))));
};

/***/ })

})
//# sourceMappingURL=onboarding.js.7529e756b52af056d647.hot-update.js.map