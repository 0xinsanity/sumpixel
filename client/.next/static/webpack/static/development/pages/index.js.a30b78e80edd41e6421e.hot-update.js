webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _components_Login_LoginComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Login/LoginComponent */ "./components/Login/LoginComponent.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Login_LoginFlowContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Login/LoginFlowContainer */ "./components/Login/LoginFlowContainer.tsx");
/* harmony import */ var _components_General_OpenPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/General/OpenPage */ "./components/General/OpenPage.tsx");









const Index = () => {
  const {
    currentUser,
    changeUser,
    loading,
    setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_3__["UserContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (currentUser !== undefined && currentUser !== null) {
      if (currentUser['companyName'] !== undefined) {
        console.log('here2');
        Object(_components_General_OpenPage__WEBPACK_IMPORTED_MODULE_7__["default"])(setLoading, '/dashboard_employer');
      } else {
        console.log('here3');
        Object(_components_General_OpenPage__WEBPACK_IMPORTED_MODULE_7__["default"])(setLoading, '/dashboard_user');
      }
    }
  }, [currentUser]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.analytics.page('Login');
  }, []);

  const onFinish = values => {
    _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().signInWithEmailAndPassword(values.email, values.password).catch(error => {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Looks like your password or email is incorrect.");
    }).then(() => {
      setLoading(true);
      window.analytics.track('Login');
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_LoginFlowContainer__WEBPACK_IMPORTED_MODULE_6__["LoginBackground"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_LoginComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Login",
    isSignUp: false,
    onFinish: onFinish
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a30b78e80edd41e6421e.hot-update.js.map