webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/OnboardingFlow/Designers/QuizScreen.tsx":
/*!************************************************************!*\
  !*** ./components/OnboardingFlow/Designers/QuizScreen.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/server */ "./lib/server.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var react_typeform_embed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-typeform-embed */ "./node_modules/react-typeform-embed/lib/index.js");
/* harmony import */ var react_typeform_embed__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_typeform_embed__WEBPACK_IMPORTED_MODULE_6__);








const QuizScreen = props => {
  const {
    changeCurrentUser,
    changeStep,
    isDashboard
  } = props;
  const {
    currentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_5__["UserContext"]);
  const designerTypes = [{
    name: "UI",
    link: "https://sumpixelbiz.typeform.com/to/riENWs?id=" + currentUser.id
  }, {
    name: "UX",
    link: "https://sumpixelbiz.typeform.com/to/TqV8Jo?id=" + currentUser.id
  }, {
    name: "Brand",
    link: "https://sumpixelbiz.typeform.com/to/BOBhxP?id=" + currentUser.id
  }, {
    name: "Product",
    link: "https://sumpixelbiz.typeform.com/to/irGM8E?id=" + currentUser.id
  }];
  const [currentQuiz, changeQuiz] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(designerTypes[0]);

  const goBack = async () => {
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_3__["removeUser"])(currentUser.id);
    changeStep(-1);
  };

  const onChange = updateQuiz => {
    changeQuiz(updateQuiz);
  };

  const submit = () => {
    currentUser["designType"] = currentQuiz.name;
    currentUser["completedQuiz"] = true;
    changeCurrentUser(currentUser);
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace('/dashboard_user');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title, {
    style: {
      textAlign: 'center'
    },
    level: 4
  }, "Click one of the following categories to be redirected to your quiz. When you complete your quiz, return here and refresh the page!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
    onChange: e => onChange(e.target.value),
    value: currentQuiz
  }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(designerTypes, type => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, null, type.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typeform_embed__WEBPACK_IMPORTED_MODULE_6__["ReactTypeformEmbed"], {
    url: currentQuiz.link,
    onSubmit: submit
  }), isDashboard === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      marginTop: 20
    },
    type: "default",
    onClick: goBack
  }, "Back") : null);
};

/* harmony default export */ __webpack_exports__["default"] = (QuizScreen);

/***/ })

})
//# sourceMappingURL=signup.js.8a0dda1ca6d04028d2ef.hot-update.js.map