webpackHotUpdate("static/development/pages/forgotpassword.js",{

/***/ "./pages/forgotpassword.tsx":
/*!**********************************!*\
  !*** ./pages/forgotpassword.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _components_General_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/General/Loading */ "./components/General/Loading.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Login_LoginFlowContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Login/LoginFlowContainer */ "./components/Login/LoginFlowContainer.tsx");
/* harmony import */ var _components_Login_ForgotPasswordComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Login/ForgotPasswordComponent */ "./components/Login/ForgotPasswordComponent.tsx");








const ForgotPassword = () => {
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.analytics.page('Forgot Password');
  }, []);

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }

  const onFinish = values => {
    setLoading(true);
    _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().sendPasswordResetEmail(values.email).then(function () {
      setLoading(false);
      window.analytics.track('Reset Password email sent.');
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("Reset Password email sent.");
    }).catch(function (error) {
      setLoading(false);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("There was a problem sending the email. Make sure the email you inputted is correct.");
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Forgot Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_LoginFlowContainer__WEBPACK_IMPORTED_MODULE_5__["LoginBackground"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_ForgotPasswordComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onFinish: onFinish
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ForgotPassword);

/***/ })

})
//# sourceMappingURL=forgotpassword.js.8244439bbf990ea69e16.hot-update.js.map