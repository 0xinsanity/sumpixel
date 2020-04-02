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
/* harmony import */ var _OnboardingFlow_Designers_FormPersonalData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OnboardingFlow/Designers/FormPersonalData */ "./components/OnboardingFlow/Designers/FormPersonalData.tsx");
/* harmony import */ var _OnboardingFlow_Employers_FormBusinessData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OnboardingFlow/Employers/FormBusinessData */ "./components/OnboardingFlow/Employers/FormBusinessData.tsx");
/* harmony import */ var _OnboardingFlow_Designers_QuizScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./OnboardingFlow/Designers/QuizScreen */ "./components/OnboardingFlow/Designers/QuizScreen.tsx");
/* harmony import */ var _OnboardingFlow_EmployerDesigner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OnboardingFlow/EmployerDesigner */ "./components/OnboardingFlow/EmployerDesigner.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/server */ "./lib/server.tsx");












const Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Typography"].Title).withConfig({
  displayName: "Onboard__Title",
  componentId: "sc-1f8dn92-0"
})(["padding-top:15px;padding-bottom:35px;"]);
const Onboard = props => {
  const [currentStep, changeStep] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [navBarStatus, changeNavbarStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_model_model__WEBPACK_IMPORTED_MODULE_4__["NavBarStatus"].Undecided);
  const [currentUser, changeUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function findUser() {
      const user = await Object(_lib_server__WEBPACK_IMPORTED_MODULE_11__["getUser"])(firebaseUser.uid);

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
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_11__["createUser"])(updatedUser);
  };

  const updateEmployer = async updatedUser => {
    changeUser(updatedUser);
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_11__["createEmployer"])(updatedUser);
  };

  var currentForm;
  var title;

  switch (currentStep) {
    case 0:
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_EmployerDesigner__WEBPACK_IMPORTED_MODULE_9__["default"], {
        changeNavbarStatus: newStatus => changeNavbarStatus(newStatus),
        changeStep: change => changeStep(currentStep + change)
      });
      break;

    case 1:
      if (navBarStatus == _model_model__WEBPACK_IMPORTED_MODULE_4__["NavBarStatus"].Designer) {
        currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_Designers_FormPersonalData__WEBPACK_IMPORTED_MODULE_6__["default"], {
          changeNavbarStatus: newStatus => changeNavbarStatus(newStatus),
          changeStep: change => changeStep(currentStep + change),
          currentUser: currentUser,
          changeCurrentUser: async user => await updateUser(user)
        });
      } else {
        currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_Employers_FormBusinessData__WEBPACK_IMPORTED_MODULE_7__["default"], {
          changeNavbarStatus: newStatus => changeNavbarStatus(newStatus),
          changeStep: change => changeStep(currentStep + change),
          currentUser: currentUser,
          changeCurrentUser: async user => await updateUser(user)
        });
      }

      break;

    case 2:
      if (navBarStatus == _model_model__WEBPACK_IMPORTED_MODULE_4__["NavBarStatus"].Employer) {
        currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_Designers_QuizScreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
          changeStep: change => changeStep(currentStep + change),
          currentUser: currentUser,
          changeCurrentUser: async user => await updateUser(user)
        });
      } else {
        currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Verification, {
          changeStep: change => changeStep(currentStep + change),
          currentUser: currentUser,
          changeCurrentUser: async user => await updateUser(user)
        });
      }

      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardNavbar__WEBPACK_IMPORTED_MODULE_1__["OnboardNavbar"], {
    status: navBarStatus,
    currentStep: currentStep
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, title), currentForm);
};

/***/ }),

/***/ "./components/OnboardingFlow/Employers/FormBusinessData.tsx":
/*!******************************************************************!*\
  !*** ./components/OnboardingFlow/Employers/FormBusinessData.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/model */ "./model/model.tsx");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/server */ "./lib/server.tsx");







const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

const FormBusinessData = props => {
  const {
    currentUser,
    changeCurrentUser,
    changeStep,
    changeNavbarStatus
  } = props;
  const [fileList, updateFileList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const goBack = async () => {
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_6__["removeUser"])(currentUser.id);
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["myFirebase"].auth().signOut();
    changeNavbarStatus(_model_model__WEBPACK_IMPORTED_MODULE_4__["NavBarStatus"].Undecided);
    changeStep(-1);
  };

  if (currentUser == undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  const onFinish = values => {
    const res = values.resume.file;
    _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["storage_ref"].child('resumes/' + currentUser.id + '.pdf').put(res["originFileObj"]).then(snapshot => {
      const newUser = {
        email: currentUser.email,
        id: currentUser.id,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        phoneNumber: values.phoneNumber,
        location: values.location,
        salary: values.salary,
        portfolio: values.portfolio,
        preferredRole: values.preferredRole,
        visa: values.visa_status,
        resume: currentUser.id + '.pdf'
      };

      if (values.linkedin) {
        newUser['linkedin'] = values.linkedin;
      }

      if (values.dribbble) {
        newUser['dribbble'] = values.dribbble;
      }

      changeCurrentUser(newUser);
      changeStep(1);
    });
  };

  const onFinishFailed = () => {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('There was an error completing your account. Ensure every field is filled out.');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    name: "basic",
    initialValues: {
      remember: true
    },
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    style: {
      marginBottom: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Name",
    name: "firstName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: currentUser.firstName
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: currentUser.lastName
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Email",
    name: "email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: currentUser.email
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Phone Number",
    name: "phoneNumber",
    rules: [{
      required: true,
      message: 'Phone Number is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: currentUser.phoneNumber || "",
    placeholder: "+1 (555) 555-5555"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Location",
    name: "location",
    rules: [{
      required: true,
      message: 'Location is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: currentUser.location || "",
    placeholder: "New York City"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Desired Salary",
    name: "salary",
    rules: [{
      required: true,
      message: 'Desired Salary is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: currentUser.salary || "",
    placeholder: "$100,000-$150,000 per year"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Preferred Role",
    name: "preferredRole",
    rules: [{
      required: true,
      message: 'Preferred Role is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: currentUser.preferredRole || "",
    placeholder: "UI/UX Designer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Portfolio",
    name: "portfolio",
    rules: [{
      required: true,
      message: 'Portfolio is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: currentUser.portfolio || "",
    placeholder: "https://www.myportfolio.com"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Resume",
    name: "resume",
    rules: [{
      required: true,
      message: 'Resume is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
    name: 'file',
    accept: ".pdf",
    fileList: fileList,
    onChange: info => {
      let fileList_update = [...info.fileList];
      fileList_update = fileList_update.slice(-1);
      fileList_update = fileList_update.map(file => {
        if (file.response) {
          file.url = file.response.url;
        }

        return file;
      });

      if (info.file.status === 'done') {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`${info.file.name} file upload failed.`);
      }

      updateFileList(fileList_update);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UploadOutlined"], null), " Click to Upload"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Visa Status",
    name: "visa_status",
    rules: [{
      required: true,
      message: 'Visa Status is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: currentUser.visa || "",
    placeholder: "Select an option:"
  }, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.map(_model_model__WEBPACK_IMPORTED_MODULE_4__["VisaStatus"], status => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
      value: status
    }, status);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "LinkedIn",
    name: "linkedin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: currentUser.linkedin || "",
    placeholder: "https://www.linkedin.com/in/username"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Dribbble",
    name: "dribbble"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: currentUser.dribbble || "",
    placeholder: "https://dribbble.com/username"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    rules: [{
      required: true,
      transform: value => value || undefined,
      type: 'boolean',
      message: 'Please agree to the terms and conditions.'
    }],
    valuePropName: 'checked'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], null, "Agree to The Terms and Services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "space-between",
    align: "middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "default",
    onClick: goBack
  }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "Take The Quiz"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormBusinessData);

/***/ })

})
//# sourceMappingURL=signup.js.f12d0ff79135fd0f9c6a.hot-update.js.map