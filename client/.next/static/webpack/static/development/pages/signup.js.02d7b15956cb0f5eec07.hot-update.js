webpackHotUpdate("static/development/pages/signup.js",{

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/model */ "./model/model.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _General_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../General/Loading */ "./components/General/Loading.tsx");
/* harmony import */ var _General_BigBlackButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../General/BigBlackButton */ "./components/General/BigBlackButton.tsx");







const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

const FormBusinessData = props => {
  const {
    changeCurrentUser,
    changeStep,
    changeNavbarStatus,
    modifyProfile
  } = props;
  const {
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);
  const [checked, changeChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const isModifyProfilePage = modifyProfile !== undefined;

  const goBack = async () => {
    changeNavbarStatus(_model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Undecided);
    changeStep(-1);
  };

  if (currentUser == undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }

  const getRules = name => {
    return [{
      required: !isModifyProfilePage,
      message: !isModifyProfilePage ? `${name} is required` : ''
    }];
  };

  const onFinish = values => {
    if (!isModifyProfilePage && !checked) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('Please agree to the Terms of Service');
      return;
    }

    const newEmployer = {
      email: currentUser.email,
      id: currentUser.id,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      companyName: values.companyName,
      phoneNumber: values.phoneNumber,
      location: values.location
    };
    changeCurrentUser(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.pickBy(newEmployer, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.identity));

    if (isModifyProfilePage) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("Your profile has been updated");
    } else {
      changeStep(1);
    }
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
    onFinishFailed: onFinishFailed
  }, !isModifyProfilePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
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
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Company Name",
    name: "companyName",
    rules: getRules("Company Name")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: modifyProfile ? '' : currentUser.companyName || "",
    placeholder: "Company Name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Phone Number",
    name: "phoneNumber",
    rules: getRules("Phone Number")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: modifyProfile ? '' : currentUser.phoneNumber || "",
    placeholder: "+1 (555) 555-5555"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Location",
    name: "location",
    rules: getRules("Location")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: modifyProfile ? '' : currentUser.location || "",
    placeholder: "New York City"
  })), !isModifyProfilePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    valuePropName: 'checked'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    style: {
      fontFamily: 'Mark Pro'
    },
    checked: checked,
    onChange: e => changeChecked(e.target.checked)
  }, "Agree to The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      color: _model_model__WEBPACK_IMPORTED_MODULE_3__["UNIVERSAL_COLOR"]
    },
    target: '_blank',
    href: '/terms'
  }, "Terms of Service"))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "space-between",
    align: "middle"
  }, !isModifyProfilePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "default",
    onClick: goBack
  }, "Back") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_6__["BigBlackButton"], {
    style: {
      marginTop: 10
    },
    htmlType: "submit"
  }, isModifyProfilePage ? "Update Company Profile" : "Finish Setup"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormBusinessData);

/***/ })

})
//# sourceMappingURL=signup.js.02d7b15956cb0f5eec07.hot-update.js.map