webpackHotUpdate("static/development/pages/index.js",{

/***/ "./model/model.tsx":
/*!*************************!*\
  !*** ./model/model.tsx ***!
  \*************************/
/*! exports provided: UNIVERSAL_COLOR, UNIVERSAL_BACKGROUND, EmployerDecisionHire, DesignerDecisionTalk, VisaStatus, NavBarStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIVERSAL_COLOR", function() { return UNIVERSAL_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIVERSAL_BACKGROUND", function() { return UNIVERSAL_BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerDecisionHire", function() { return EmployerDecisionHire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignerDecisionTalk", function() { return DesignerDecisionTalk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisaStatus", function() { return VisaStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarStatus", function() { return NavBarStatus; });
const UNIVERSAL_COLOR = '#5E0BEF';
const UNIVERSAL_BACKGROUND = '#f7f9fb';
let EmployerDecisionHire;

(function (EmployerDecisionHire) {
  EmployerDecisionHire["REJECT"] = "REJECT";
  EmployerDecisionHire["HIRE"] = "HIRE";
  EmployerDecisionHire["UNDECIDED"] = "UNDECIDED";
})(EmployerDecisionHire || (EmployerDecisionHire = {}));

let DesignerDecisionTalk;

(function (DesignerDecisionTalk) {
  DesignerDecisionTalk["WILL_TALK"] = "WILL_TALK";
  DesignerDecisionTalk["WILL_NOT_TALK"] = "WILL_NOT_TALK";
  DesignerDecisionTalk["UNDECIDED"] = "UNDECIDED";
})(DesignerDecisionTalk || (DesignerDecisionTalk = {}));

let VisaStatus;

(function (VisaStatus) {
  VisaStatus["US_CITIZEN"] = "US Citizen/Green Card";
  VisaStatus["VISA_HOLDER"] = "US Visa Holder";
  VisaStatus["ELIGIBLE"] = "Eligible For US Visa";
  VisaStatus["NOT_ELIGIBLE"] = "Not Eligible for US Visa";
})(VisaStatus || (VisaStatus = {}));

let NavBarStatus;

(function (NavBarStatus) {
  NavBarStatus[NavBarStatus["Undecided"] = 0] = "Undecided";
  NavBarStatus[NavBarStatus["Employer"] = 1] = "Employer";
  NavBarStatus[NavBarStatus["Designer"] = 2] = "Designer";
})(NavBarStatus || (NavBarStatus = {}));

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
/* harmony import */ var _components_General_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/General/Container */ "./components/General/Container.tsx");
/* harmony import */ var _components_General_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/General/Loading */ "./components/General/Loading.tsx");
/* harmony import */ var _components_Login_LoginComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Login/LoginComponent */ "./components/Login/LoginComponent.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/model */ "./model/model.tsx");









const LoginBG = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div({
  background: _model_model__WEBPACK_IMPORTED_MODULE_8__["UNIVERSAL_BACKGROUND"],
  height: '100vh',
  width: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const Index = () => {
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.analytics.page('Login');
  }, []);

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Container__WEBPACK_IMPORTED_MODULE_3__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginBG, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_LoginComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Login",
    isSignUp: false,
    onFinish: onFinish
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.8f6e3ea334ae405121a0.hot-update.js.map