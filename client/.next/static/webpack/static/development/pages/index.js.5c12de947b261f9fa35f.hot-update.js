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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _components_Login_LoginComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Login/LoginComponent */ "./components/Login/LoginComponent.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Login_LoginFlowContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Login/LoginFlowContainer */ "./components/Login/LoginFlowContainer.tsx");









const Index = () => {
  const {
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (currentUser !== undefined && currentUser !== null) {
      console.log('here0');

      if (currentUser['employer_exists'] === undefined && currentUser['user_exists'] === undefined) {
        console.log('here1');

        if (currentUser['companyName'] !== undefined) {
          console.log('here2');
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/dashboard_employer');
        } else {
          console.log('here3');
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/dashboard_user');
        }
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
      window.analytics.track('Login');
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_LoginFlowContainer__WEBPACK_IMPORTED_MODULE_7__["LoginBackground"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_LoginComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Login",
    isSignUp: false,
    onFinish: onFinish
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.5c12de947b261f9fa35f.hot-update.js.map