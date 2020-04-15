webpackHotUpdate("static/development/pages/onboarding.js",{

/***/ "./pages/onboarding.tsx":
/*!******************************!*\
  !*** ./pages/onboarding.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _components_OnboardingFlow_Onboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/OnboardingFlow/Onboard */ "./components/OnboardingFlow/Onboard.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_General_OpenPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/General/OpenPage */ "./components/General/OpenPage.tsx");
/* harmony import */ var _components_Login_LoginFlowContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Login/LoginFlowContainer */ "./components/Login/LoginFlowContainer.tsx");








const Onboarding = props => {
  const {
    currentUser,
    changeUser,
    setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_3__["UserContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.analytics.page('Onboarding');
  }, []);

  const deleteUser = async () => {
    window.analytics.track('Go Back - Delete Firebase User');
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["myFirebase"].auth().currentUser.delete();
    changeUser(undefined);
    Object(_components_General_OpenPage__WEBPACK_IMPORTED_MODULE_5__["default"])(setLoading, '/signup');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Onboarding")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_LoginFlowContainer__WEBPACK_IMPORTED_MODULE_6__["LoginBackground"], {
    style: {
      alignItems: 'flex-start',
      paddingTop: 80
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OnboardingFlow_Onboard__WEBPACK_IMPORTED_MODULE_2__["Onboard"], {
    deleteUser: deleteUser
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Onboarding);

/***/ })

})
//# sourceMappingURL=onboarding.js.ac7c3f09f000bb8391f5.hot-update.js.map