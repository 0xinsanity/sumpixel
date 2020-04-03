webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/signup.tsx":
/*!**************************!*\
  !*** ./pages/signup.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PopupModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PopupModal */ "./components/PopupModal.tsx");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _components_Onboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Onboard */ "./components/Onboard.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _components_LoginComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LoginComponent */ "./components/LoginComponent.tsx");







const SignUp = props => {
  const [isSignedIn, setIsSignedIn] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);

  const onFinish = values => {
    _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().createUserWithEmailAndPassword(values.email, values.password).then(() => {
      _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().currentUser.updateProfile({
        displayName: `${values.firstName} ${values.lastName}`
      });
      setIsSignedIn(true);
    }).catch(error => {
      console.error(error);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PopupModal__WEBPACK_IMPORTED_MODULE_1__["PopupModal"], {
    visible: !isSignedIn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LoginComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isSignUp: true,
    title: "Sign Up",
    onFinish: onFinish
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Onboard__WEBPACK_IMPORTED_MODULE_3__["Onboard"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ })

})
//# sourceMappingURL=signup.js.868243a8f31248d5ef6d.hot-update.js.map