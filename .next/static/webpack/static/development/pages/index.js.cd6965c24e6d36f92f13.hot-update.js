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
/* harmony import */ var _components_PopupModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PopupModal */ "./components/PopupModal.tsx");
/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ "./node_modules/react-firebaseui/StyledFirebaseAuth.js");
/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _components_onboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/onboard */ "./components/onboard.tsx");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






const uiConfig = {
  signInFlow: 'popup',
  callbacks: {
    signInSuccessWithAuthResult: () => false
  },
  signInOptions: [firebase__WEBPACK_IMPORTED_MODULE_5___default.a.auth.EmailAuthProvider.PROVIDER_ID]
};

const Index = props => {
  const [isSignedIn, setIsSignedIn] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["myFirebase"].auth().onAuthStateChanged(user => {
      if (user != null) {
        setIsSignedIn(true);
      }
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PopupModal__WEBPACK_IMPORTED_MODULE_1__["PopupModal"], {
    visible: !isSignedIn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2___default.a, {
    uiCallback: ui => {
      if (ui.currentUser != null) {
        console.table(ui.currentUser);
      }

      setIsSignedIn(true);
    },
    uiConfig: uiConfig,
    firebaseAuth: _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["myFirebase"].auth()
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_onboard__WEBPACK_IMPORTED_MODULE_4__["Onboard"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.cd6965c24e6d36f92f13.hot-update.js.map