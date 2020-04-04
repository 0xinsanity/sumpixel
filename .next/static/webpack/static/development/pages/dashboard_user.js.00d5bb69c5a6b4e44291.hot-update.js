webpackHotUpdate("static/development/pages/dashboard_user.js",{

/***/ "./components/Dashboard/Designer/ViewCommunications.tsx":
/*!**************************************************************!*\
  !*** ./components/Dashboard/Designer/ViewCommunications.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _OnboardingFlow_Designers_QuizScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../OnboardingFlow/Designers/QuizScreen */ "./components/OnboardingFlow/Designers/QuizScreen.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/server */ "./lib/server.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _General_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../General/Loading */ "./components/General/Loading.tsx");
/* harmony import */ var _CommunicationsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommunicationsList */ "./components/Dashboard/Designer/CommunicationsList.tsx");








const ViewCommunications = props => {
  const {
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_1__["UserContext"]);
  const [commList, setCommList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);

  const updateUser = async updatedUser => {
    changeUser(updatedUser);
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_3__["modifyUser"])(updatedUser);
  };

  const updateDesignerText = async (commId, update) => {
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_3__["updateDesignerDecision"])(commId, update);
    antd__WEBPACK_IMPORTED_MODULE_4__["message"].success("Updated Decision");
    setCommList((await Object(_lib_server__WEBPACK_IMPORTED_MODULE_3__["getDesignCommunicationsList"])(currentUser.id)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_lib_server__WEBPACK_IMPORTED_MODULE_3__["getDesignCommunicationsList"])(currentUser.id).then(commList => {
      setCommList(commList);
    });
  }, []);

  if (!currentUser.completedQuiz) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardingFlow_Designers_QuizScreen__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isDashboard: true,
      changeCurrentUser: updateUser
    });
  }

  if (!currentUser.graded) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"], null, "It looks you have not been reviewed by our staff yet. Check back later!");
  } else {
    if (currentUser.communications === null || currentUser.communications === []) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"], null, "Our employers are currently taking a look at your profile and will reach out if they express interest in you.");
    } else {
      if (commList == undefined) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null);
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommunicationsList__WEBPACK_IMPORTED_MODULE_6__["default"], {
          communicationList: commList,
          updateDesignerText: updateDesignerText
        });
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ViewCommunications);

/***/ })

})
//# sourceMappingURL=dashboard_user.js.00d5bb69c5a6b4e44291.hot-update.js.map