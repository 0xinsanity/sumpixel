webpackHotUpdate("static/development/pages/onboarding.js",{

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
/* harmony import */ var _General_OpenPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../General/OpenPage */ "./components/General/OpenPage.tsx");
/* harmony import */ var _General_LocationAutocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../General/LocationAutocomplete */ "./components/General/LocationAutocomplete.tsx");









const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

const FormBusinessData = props => {
  const {
    changeCurrentUser,
    modifyProfile
  } = props;
  const {
    currentUser,
    changeUser,
    setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);
  const [checked, changeChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const isModifyProfilePage = modifyProfile !== undefined;

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
      Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_7__["default"])(setLoading, '/dashboard_employer');
    }
  };

  const onFinishFailed = () => {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('There was an error completing your account. Ensure every field is filled out.');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    id: "employer_form",
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_LocationAutocomplete__WEBPACK_IMPORTED_MODULE_8__["LocationAutocomplete"], {
    isModifyProfilePage: isModifyProfilePage,
    defaultValue: isModifyProfilePage ? '' : currentUser.location || ""
  }), !isModifyProfilePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    valuePropName: 'checked'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    style: {
      fontFamily: 'Mark Pro'
    },
    checked: checked,
    onChange: e => changeChecked(e.target.checked)
  }, "Agree to the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      color: _model_model__WEBPACK_IMPORTED_MODULE_3__["UNIVERSAL_COLOR"]
    },
    target: '_blank',
    href: '/terms'
  }, "Terms of Service"))) : null, isModifyProfilePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "space-between",
    align: "middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_6__["BigBlackButton"], {
    style: {
      marginTop: 10
    },
    htmlType: "submit"
  }, isModifyProfilePage ? "Update Company Profile" : "Finish Setup"))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (FormBusinessData);

/***/ })

})
//# sourceMappingURL=onboarding.js.29dc69a7ded4a32de6cc.hot-update.js.map