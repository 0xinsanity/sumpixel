webpackHotUpdate("static/development/pages/dashboard_user.js",{

/***/ "./components/Dashboard/NavigationBar.tsx":
/*!************************************************!*\
  !*** ./components/Dashboard/NavigationBar.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _General_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../General/Loading */ "./components/General/Loading.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");







const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];
const SumpixelHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["PageHeader"]).withConfig({
  displayName: "NavigationBar__SumpixelHeader",
  componentId: "sc-14u4r04-0"
})(["background:#DAE2EF;padding:30px 8%;min-height:100vh;"]);
const LogoutButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "NavigationBar__LogoutButton",
  componentId: "sc-14u4r04-1"
})(["color:#000000;padding-top:10px;"]);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "NavigationBar__Line",
  componentId: "sc-14u4r04-2"
})(["border:0.5px solid #000000;margin-top:10px;margin-bottom:10px;"]);
const SubTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title).withConfig({
  displayName: "NavigationBar__SubTitle",
  componentId: "sc-14u4r04-3"
})(["font-family:'Mark Pro Bold';padding-top:20px;padding-bottom:10px;"]);

const NavigationBar = props => {
  const {
    subtitle,
    footer,
    isDesigner
  } = props;
  const {
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_5__["UserContext"]);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SumpixelHeader, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: isDesigner ? '/dashboard_user?signedin=true' : '/dashboard_employer?signedin=true'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      height: 43,
      src: __webpack_require__(/*! ../../assets/sumpixel-logo.png */ "./assets/sumpixel-logo.png")
    })),
    extra: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoutButton, {
      type: "link",
      onClick: async () => {
        _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().signOut().then(() => {
          changeUser(undefined);
          setLoading(false);

          if (currentUser.isAnonymous !== undefined) {
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/signup');
          } else {
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/');
          }
        }).catch(error => {
          antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(error.message);
        });
      }
    }, currentUser.isAnonymous === undefined ? 'Log Out' : 'Create Account To Start Connecting With Designers')],
    footer: footer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, null, subtitle));
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ })

})
//# sourceMappingURL=dashboard_user.js.a2151da5e05ba41d4367.hot-update.js.map