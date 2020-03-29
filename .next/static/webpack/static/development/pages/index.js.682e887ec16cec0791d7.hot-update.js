webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/OnboardingFlow/Form2.tsx":
/*!*********************************************!*\
  !*** ./components/OnboardingFlow/Form2.tsx ***!
  \*********************************************/
/*! exports provided: Form2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form2", function() { return Form2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.tsx");



const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
const Form2 = props => {
  const {
    currentUser,
    changeCurrentUser,
    changeStep
  } = props;
  const [fileList, updateFileList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();

  const goBack = () => {
    changeStep(-1);
  };

  const onFinish = values => {
    const res = values.resume.file;
    _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["storage_ref"].child('resumes/' + currentUser.firebaseId + '.pdf').put(res["originFileObj"]).then(snapshot => {
      console.log("Uploaded File");
      const newUser = {
        email: currentUser.email,
        firebaseId: currentUser.firebaseId,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        phoneNumber: currentUser.phoneNumber,
        location: currentUser.location,
        salary: currentUser.salary,
        portfolio: currentUser.portfolio,
        visa: currentUser.visa,
        resume: currentUser.resume,
        linkedin: values.linkedin,
        dribbble: values.dribbble
      };
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
    onFinishFailed: onFinishFailed
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "LinkedIn",
    name: "linkedin",
    rules: [{
      required: true,
      message: 'LinkedIn is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Dribbble",
    name: "dribbble",
    rules: [{
      required: true,
      message: 'Dribbble is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "end",
    align: "middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "default",
    onClick: goBack
  }, "Go Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "end",
    align: "middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "Next Page"))));
};

/***/ })

})
//# sourceMappingURL=index.js.682e887ec16cec0791d7.hot-update.js.map