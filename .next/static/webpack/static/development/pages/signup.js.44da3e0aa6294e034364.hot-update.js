webpackHotUpdate("static/development/pages/signup.js",{

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/server */ "./lib/server.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






const QuizScreen = props => {
  const {
    currentUser,
    changeCurrentUser,
    changeStep
  } = props;
  const designerTypes = [{
    name: "UI",
    link: "https://sumpixelbiz.typeform.com/to/riENWs"
  }, {
    name: "UX",
    link: "https://sumpixelbiz.typeform.com/to/TqV8Jo"
  }, {
    name: "Brand",
    link: "https://sumpixelbiz.typeform.com/to/BOBhxP"
  }, {
    name: "Product",
    link: "https://sumpixelbiz.typeform.com/to/irGM8E"
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function findUser() {
      const user = await Object(_lib_server__WEBPACK_IMPORTED_MODULE_3__["didCompleteQuiz"])(currentUser.id);

      if (user['completed_quiz']) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace('/dashboard_user');
      }
    }

    findUser();
  }, []);

  const goBack = async () => {
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_3__["removeUser"])(currentUser.id);
    changeStep(-1);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title, {
    style: {
      textAlign: 'center'
    },
    level: 4
  }, "Click one of the following categories to be redirected to your quiz. When you complete your quiz, return here and refresh the page!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], null, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(designerTypes, type => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      target: "_blank",
      href: type.link
    }, type.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      paddingTop: 20
    },
    type: "default",
    onClick: goBack
  }, "Back"));
};

/* harmony default export */ __webpack_exports__["default"] = (QuizScreen);

/***/ })

})
//# sourceMappingURL=signup.js.44da3e0aa6294e034364.hot-update.js.map