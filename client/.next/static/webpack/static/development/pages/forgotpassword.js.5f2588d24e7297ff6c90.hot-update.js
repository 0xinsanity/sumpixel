webpackHotUpdate("static/development/pages/forgotpassword.js",{

/***/ "./components/Login/ForgotPasswordComponent.tsx":
/*!******************************************************!*\
  !*** ./components/Login/ForgotPasswordComponent.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _General_BigBlackButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../General/BigBlackButton */ "./components/General/BigBlackButton.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





const ForgotPasswordButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"]).withConfig({
  displayName: "ForgotPasswordComponent__ForgotPasswordButton",
  componentId: "sc-1hw57il-0"
})(["font-family:'Mark Pro';color:#000000;opacity:0.5;text-align:right;font-size:12px;"]);

const ForgotPasswordComponent = props => {
  const {
    onFinish
  } = props;

  const onClick = () => {
    window.analytics.track('Go to Sign Up');
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/signup');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    style: {
      paddingLeft: 20,
      paddingRight: 20
    },
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      height: 43,
      src: __webpack_require__(/*! ../../assets/sumpixel-logo.png */ "./assets/sumpixel-logo.png")
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    hideRequiredMark: true,
    name: "basic",
    initialValues: {
      remember: true
    },
    onFinish: onFinish
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    label: "Email",
    name: "email",
    rules: [{
      required: true,
      message: 'Email is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    placeholder: "Email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_3__["BigBlackButton"], {
    style: {
      width: '60%',
      marginTop: 60
    },
    type: "primary",
    htmlType: "submit"
  }, "Reset")))));
};

/* harmony default export */ __webpack_exports__["default"] = (ForgotPasswordComponent);

/***/ })

})
//# sourceMappingURL=forgotpassword.js.5f2588d24e7297ff6c90.hot-update.js.map