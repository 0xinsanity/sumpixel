webpackHotUpdate("static/development/pages/onboarding.js",{

/***/ "./components/General/BackNext.tsx":
/*!*****************************************!*\
  !*** ./components/General/BackNext.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _BigBlackButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BigBlackButton */ "./components/General/BigBlackButton.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BackNext__Container",
  componentId: "sc-1iee36m-0"
})(["border-top:1px solid #DAE2EF;width:100%;padding-bottom:46px;padding-top:46px;padding-right:66px;padding-left:66px;flex-direction:row;justify-content:flex-end;"]);

const BackNext = props => {
  const {
    backClick,
    nextClick
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: backClick,
    type: 'link'
  }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BigBlackButton__WEBPACK_IMPORTED_MODULE_2__["BigBlackButton"], {
    onClick: nextClick
  }, "Next"));
};

/* harmony default export */ __webpack_exports__["default"] = (BackNext);

/***/ }),

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/server */ "./lib/server.tsx");
/* harmony import */ var _General_OpenPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../General/OpenPage */ "./components/General/OpenPage.tsx");
/* harmony import */ var _General_SumpixelCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../General/SumpixelCard */ "./components/General/SumpixelCard.tsx");
/* harmony import */ var _General_BackNext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../General/BackNext */ "./components/General/BackNext.tsx");













const Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Title).withConfig({
  displayName: "Onboard__Title",
  componentId: "sc-1kdj2hg-0"
})(["padding-top:15px;padding-bottom:35px;"]);
const Onboard = props => {
  const [currentStep, changeStep] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [navBarStatus, changeNavbarStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Undecided);
  const {
    currentUser,
    changeUser,
    loading,
    setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_8__["UserContext"]);

  const updateUser = async updatedUser => {
    window.analytics.track('Create User');
    changeUser(updatedUser);
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_9__["createUser"])(updatedUser);
  };

  const updateEmployer = async updatedUser => {
    window.analytics.track('Create Employer');
    changeUser(updatedUser);
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_9__["createEmployer"])(updatedUser);
  };

  const backClick = () => {
    if (currentStep === 0) {
      props.deleteUser();
    } else {
      if (currentStep === 1) {
        changeNavbarStatus(_model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Undecided);
      }

      changeStep(currentStep - 1);
    }
  };

  const nextClick = () => {
    changeStep(currentStep + 1);
  };

  var currentForm;

  switch (currentStep) {
    case 0:
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmployerDesigner__WEBPACK_IMPORTED_MODULE_6__["default"], {
        deleteUser: props.deleteUser,
        changeNavbarStatus: newStatus => changeNavbarStatus(newStatus)
      });
      break;

    case 1:
      if (navBarStatus == _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Designer) {
        currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Designers_FormPersonalData__WEBPACK_IMPORTED_MODULE_4__["default"], {
          changeCurrentUser: async user => await updateUser(user)
        });
      } else {
        currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Employers_FormBusinessData__WEBPACK_IMPORTED_MODULE_5__["default"], {
          changeCurrentUser: async user => await updateEmployer(user)
        });
      }

      break;

    case 2:
      if (navBarStatus == _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Designer) {
        Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_10__["default"])(setLoading, '/dashboard_user');
      } else {
        Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_10__["default"])(setLoading, '/dashboard_employer');
      }

      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_SumpixelCard__WEBPACK_IMPORTED_MODULE_11__["SumpixelCard"], {
    withLogo: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardNavbar__WEBPACK_IMPORTED_MODULE_1__["OnboardNavbar"], {
    currentStep: currentStep
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: 20
    }
  }, currentForm), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_BackNext__WEBPACK_IMPORTED_MODULE_12__["default"], {
    backClick: backClick,
    nextClick: nextClick
  }))));
};

/***/ })

})
//# sourceMappingURL=onboarding.js.bc73fd1bb97db7f6e312.hot-update.js.map