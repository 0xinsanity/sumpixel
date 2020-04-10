webpackHotUpdate("static/development/pages/index.js",{

/***/ "./assets/sumpixel-logo.png":
false,

/***/ "./components/General/BigBlackButton.tsx":
false,

/***/ "./components/Login/LoginComponent.tsx":
false,

/***/ "./node_modules/native-url/dist/index.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/next/node_modules/react-is/index.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

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
/* harmony import */ var _components_General_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/General/Loading */ "./components/General/Loading.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/model */ "./model/model.tsx");







const LoginBG = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div({
  background: _model_model__WEBPACK_IMPORTED_MODULE_6__["UNIVERSAL_BACKGROUND"],
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
const AbsolutePurple = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div`
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: ${_model_model__WEBPACK_IMPORTED_MODULE_6__["UNIVERSAL_COLOR"]}
`;

const Index = () => {
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.analytics.page('Login');
  }, []);

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }

  const onFinish = values => {
    setLoading(true);
    _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().signInWithEmailAndPassword(values.email, values.password).catch(error => {
      setLoading(false);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Looks like your password or email is incorrect.");
    }).then(() => {
      window.analytics.track('Login');
      setLoading(false);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginBG, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AbsolutePurple, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.080c0828c364e6b325e3.hot-update.js.map