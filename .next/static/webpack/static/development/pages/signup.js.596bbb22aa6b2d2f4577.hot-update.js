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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_General_PopupModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/General/PopupModal */ "./components/General/PopupModal.tsx");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _components_OnboardingFlow_Onboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/OnboardingFlow/Onboard */ "./components/OnboardingFlow/Onboard.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _components_Login_LoginComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Login/LoginComponent */ "./components/Login/LoginComponent.tsx");








const SignUp = props => {
  const {
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_5__["UserContext"]);
  const [isSignedIn, setIsSignedIn] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (currentUser !== null) {
      setIsSignedIn(true);
    }
  }, [currentUser]);

  const onFinish = values => {
    _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["myFirebase"].auth().createUserWithEmailAndPassword(values.email, values.password).then(() => {
      _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["myFirebase"].auth().currentUser.updateProfile({
        displayName: `${values.firstName} ${values.lastName}`
      }).then(() => {
        setIsSignedIn(true);
      });
    }).catch(error => {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(error.message);
    });
  };

  const deleteUser = async () => {
    setTimeout(async () => await _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["myFirebase"].auth().currentUser.delete(), 1000);
    changeUser(undefined);
    setIsSignedIn(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_PopupModal__WEBPACK_IMPORTED_MODULE_2__["PopupModal"], {
    visible: !isSignedIn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_LoginComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isSignUp: true,
    title: "Sign Up",
    onFinish: onFinish
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OnboardingFlow_Onboard__WEBPACK_IMPORTED_MODULE_4__["Onboard"], {
    deleteUser: deleteUser
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ })

})
//# sourceMappingURL=signup.js.596bbb22aa6b2d2f4577.hot-update.js.map