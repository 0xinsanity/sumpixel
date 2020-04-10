webpackHotUpdate("static/development/pages/dashboard_user.js",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _typeform_embed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @typeform/embed */ "./node_modules/@typeform/embed/lib/api.js");
/* harmony import */ var _typeform_embed__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_typeform_embed__WEBPACK_IMPORTED_MODULE_6__);







const Cont = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "QuizScreen__Cont",
  componentId: "sc-1ozrf5h-0"
})(["display:flex;flex-direction:column;justify-content:center;width:100%;margin-top:20px;height:60vh;"]);

const QuizScreen = props => {
  const {
    changeCurrentUser
  } = props;
  const {
    currentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);
  var typeform = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const designerTypes = [{
    key: 0,
    name: "UI",
    link: "https://sumpixelbiz.typeform.com/to/riENWs?id=" + currentUser.id
  }, {
    key: 1,
    name: "UX",
    link: "https://sumpixelbiz.typeform.com/to/TqV8Jo?id=" + currentUser.id
  }, {
    key: 2,
    name: "Brand",
    link: "https://sumpixelbiz.typeform.com/to/BOBhxP?id=" + currentUser.id
  }, {
    key: 3,
    name: "Product",
    link: "https://sumpixelbiz.typeform.com/to/irGM8E?id=" + currentUser.id
  }];
  const [currentQuiz, changeQuiz] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(designerTypes[0]);

  const submit = () => {
    window.analytics.track('Completed Quiz');
    currentUser["designType"] = currentQuiz.name;
    currentUser["completedQuiz"] = true;
    changeCurrentUser(currentUser);
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/dashboard_user?signedin=true');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (typeform) {
      _typeform_embed__WEBPACK_IMPORTED_MODULE_6__["makeWidget"](typeform.current, currentQuiz.link, {
        hideFooter: true,
        hideHeaders: true,
        opacity: 1,
        onSubmit: submit
      });
    }
  }, [currentQuiz]);

  const onChange = key => {
    changeQuiz(designerTypes[key]);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cont, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title, {
    style: {
      textAlign: 'center'
    },
    level: 4
  }, "Choose a Design Type and Take Your Quiz!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      marginTop: 10,
      marginBottom: 20,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
    onChange: e => onChange(e.target.value),
    value: currentQuiz.key
  }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(designerTypes, type => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
      value: type.key
    }, type.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%'
    },
    ref: typeform
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (QuizScreen);

/***/ })

})
//# sourceMappingURL=dashboard_user.js.b832c71782fb06066be5.hot-update.js.map