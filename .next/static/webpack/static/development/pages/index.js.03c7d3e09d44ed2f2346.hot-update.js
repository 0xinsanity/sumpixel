webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/OnboardingFlow/QuizScreen.tsx":
/*!**************************************************!*\
  !*** ./components/OnboardingFlow/QuizScreen.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/server */ "./lib/server.tsx");




const QuizScreen = props => {
  const {
    currentUser,
    changeCurrentUser,
    changeStep
  } = props;

  const goBack = async () => {
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_2__["removeUser"])(currentUser.id);
    changeStep(-1);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title, {
    style: {
      textAlign: 'center'
    },
    level: 4
  }, "You will now be redirected to TypeForm to take your quiz. Refresh this page when you complete the quiz. If you are not redirected, please go to the following link:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "default",
    onClick: goBack
  }, "Back"));
};

/* harmony default export */ __webpack_exports__["default"] = (QuizScreen);

/***/ })

})
//# sourceMappingURL=index.js.03c7d3e09d44ed2f2346.hot-update.js.map