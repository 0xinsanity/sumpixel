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
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _OnboardingFlow_FormPersonalData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OnboardingFlow/FormPersonalData */ "./components/OnboardingFlow/FormPersonalData.tsx");
/* harmony import */ var _OnboardingFlow_QuizScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OnboardingFlow/QuizScreen */ "./components/OnboardingFlow/QuizScreen.tsx");
/* harmony import */ var _OnboardingFlow_EmployerDesigner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./OnboardingFlow/EmployerDesigner */ "./components/OnboardingFlow/EmployerDesigner.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/server */ "./lib/server.tsx");











const Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Typography"].Title).withConfig({
  displayName: "Onboard__Title",
  componentId: "sc-1f8dn92-0"
})(["padding-top:15px;padding-bottom:35px;"]);
const Onboard = props => {
  const [currentStep, changeStep] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [navBarStatus, changeNavbarStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_model_model__WEBPACK_IMPORTED_MODULE_4__["NavBarStatus"].Undecided);
  const [currentUser, changeUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function findUser() {
      const user = await Object(_lib_server__WEBPACK_IMPORTED_MODULE_10__["getUser"])(firebaseUser.uid);

      if (user['user_exists'] === undefined) {
        changeUser(user);
        changeStep(2);
      } else {
        changeUser({
          email: firebaseUser.email,
          id: firebaseUser.uid,
          firstName: firebaseUser.displayName.substr(0, firebaseUser.displayName.indexOf(' ')),
          lastName: firebaseUser.displayName.substr(firebaseUser.displayName.indexOf(' ') + 1)
        });
      }
    }

    const firebaseUser = _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["myFirebase"].auth().currentUser;

    if (firebaseUser !== null) {
      findUser();
    }
  }, [_lib_firebase__WEBPACK_IMPORTED_MODULE_5__["myFirebase"].auth().currentUser]);

  const updateUser = async updatedUser => {
    changeUser(updatedUser);
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_10__["createUser"])(updatedUser);
  };

  var currentForm;
  var title;

  switch (currentStep) {
    case 0:
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_EmployerDesigner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        changeNavbarStatus: newStatus => changeNavbarStatus(newStatus),
        changeStep: change => changeStep(currentStep + change),
        currentUser: currentUser,
        changeCurrentUser: async user => await updateUser(user)
      });
      break;

    case 1:
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_FormPersonalData__WEBPACK_IMPORTED_MODULE_6__["default"], {
        changeNavbarStatus: newStatus => changeNavbarStatus(newStatus),
        changeStep: change => changeStep(currentStep + change),
        currentUser: currentUser,
        changeCurrentUser: async user => await updateUser(user)
      });
      break;

    case 2:
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_QuizScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
        changeStep: change => changeStep(currentStep + change),
        currentUser: currentUser,
        changeCurrentUser: async user => await updateUser(user)
      });
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardNavbar__WEBPACK_IMPORTED_MODULE_1__["OnboardNavbar"], {
    status: navBarStatus,
    currentStep: currentStep
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, title), currentForm);
};

/***/ }),

/***/ "./components/OnboardNavbar.tsx":
/*!**************************************!*\
  !*** ./components/OnboardNavbar.tsx ***!
  \**************************************/
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
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/model */ "./model/model.tsx");


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
  desc: "Add Personal Data"
}, {
  title: "Take the Quiz",
  desc: "Finish Up and Get Evaluated"
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
      paddingBottom: 20
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

/***/ }),

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
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/model */ "./model/model.tsx");




const EmployerDesigner = props => {
  const {
    changeStep,
    changeNavbarStatus
  } = props;

  const onClick = isDesigner => {
    changeNavbarStatus(isDesigner ? _model_model__WEBPACK_IMPORTED_MODULE_2__["NavBarStatus"].Designer : _model_model__WEBPACK_IMPORTED_MODULE_2__["NavBarStatus"].Employer);
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
//# sourceMappingURL=signup.js.946d8d1fe50c33b81b3e.hot-update.js.map