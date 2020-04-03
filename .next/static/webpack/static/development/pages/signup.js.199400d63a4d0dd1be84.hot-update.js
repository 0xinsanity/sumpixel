webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/OnboardingFlow/Employers/Verification.tsx":
/*!**************************************************************!*\
  !*** ./components/OnboardingFlow/Employers/Verification.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/server */ "./lib/server.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");






const Verification = props => {
  const {
    changeStep
  } = props;
  const {
    currentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);

  const goBack = async () => {
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_2__["removeEmployer"])(currentUser.id);
    changeStep(-1);
  };

  const goToDashboard = () => {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/dashboard_employer');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      marginTop: 20
    },
    type: "default",
    onClick: goToDashboard
  }, "Go To Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      marginTop: 20
    },
    type: "default",
    onClick: goBack
  }, "Back"));
};

/* harmony default export */ __webpack_exports__["default"] = (Verification);

/***/ })

})
//# sourceMappingURL=signup.js.199400d63a4d0dd1be84.hot-update.js.map