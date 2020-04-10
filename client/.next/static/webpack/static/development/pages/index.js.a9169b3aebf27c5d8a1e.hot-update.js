webpackHotUpdate("static/development/pages/index.js",{

/***/ "./assets/sumpixel-logo.png":
/*!**********************************!*\
  !*** ./assets/sumpixel-logo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sumpixel-logo-a3c23479ee4c195d2c8c3492a1819eed.png";

/***/ }),

/***/ "./components/General/BigBlackButton.tsx":
/*!***********************************************!*\
  !*** ./components/General/BigBlackButton.tsx ***!
  \***********************************************/
/*! exports provided: BigBlackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigBlackButton", function() { return BigBlackButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


const BigBlackButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "BigBlackButton",
  componentId: "ruupao-0"
})(["background:#000;color:#fff;border-radius:2px;border:none;padding:15px 24px;height:auto;font-family:'Mark Pro';&:hover{background:#DAE2EF;color:#000;}&:focus{background:#000;color:#fff;}"]);

/***/ }),

/***/ "./components/Login/LoginComponent.tsx":
/*!*********************************************!*\
  !*** ./components/Login/LoginComponent.tsx ***!
  \*********************************************/
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





const LoginComponent = props => {
  const {
    isSignUp,
    onFinish,
    title
  } = props;

  const onClick = () => {
    window.analytics.track('Go to Sign Up');
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/signup');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    style: {
      paddingLeft: 20,
      paddingRight: 20
    },
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      height: 43,
      src: __webpack_require__(/*! ../../assets/sumpixel-logo.png */ "./assets/sumpixel-logo.png")
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    name: "basic",
    initialValues: {
      remember: true
    },
    onFinish: onFinish
  }, isSignUp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    label: "First Name",
    name: "firstName",
    rules: [{
      required: true,
      message: 'First Name is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    placeholder: "First Name"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    span: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    label: "Last Name",
    name: "lastName",
    rules: [{
      required: true,
      message: 'Last Name is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    placeholder: "Last Name"
  }))))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    label: "Email",
    name: "email",
    rules: [{
      required: true,
      message: 'Email is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    placeholder: "Email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    label: "Password",
    name: "password",
    rules: [{
      required: true,
      message: 'Password is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    type: "password",
    placeholder: "Password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_3__["BigBlackButton"], {
    style: {
      width: '60%',
      marginTop: 60
    },
    type: "primary",
    htmlType: "submit"
  }, title))))), !isSignUp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Typography"].Text, {
    style: {
      fontFamily: 'Mark Pro',
      fontWeight: 500,
      paddingTop: 10,
      textAlign: 'center'
    }
  }, "Don't have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: onClick,
    style: {
      padding: 0
    },
    type: "link"
  }, "Sign Up.")) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginComponent);

/***/ }),

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
/* harmony import */ var _components_Login_LoginComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Login/LoginComponent */ "./components/Login/LoginComponent.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/model */ "./model/model.tsx");








const LoginBG = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
    background: ${_model_model__WEBPACK_IMPORTED_MODULE_7__["UNIVERSAL_BACKGROUND"]}; 
    height: 100vh;
    display: flex; 
    justifyContent: center;
    alignItems: center;
`;
const AbsolutePurple = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: ${_model_model__WEBPACK_IMPORTED_MODULE_7__["UNIVERSAL_COLOR"]}
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginBG, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AbsolutePurple, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_LoginComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Login",
    isSignUp: false,
    onFinish: onFinish
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a9169b3aebf27c5d8a1e.hot-update.js.map