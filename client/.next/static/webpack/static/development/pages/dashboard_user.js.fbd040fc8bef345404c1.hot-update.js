webpackHotUpdate("static/development/pages/dashboard_user.js",{

/***/ "./components/Dashboard/Employer/FindDesigners.tsx":
/*!*********************************************************!*\
  !*** ./components/Dashboard/Employer/FindDesigners.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/server */ "./lib/server.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _General_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../General/Loading */ "./components/General/Loading.tsx");
/* harmony import */ var _DesignerList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DesignerList */ "./components/Dashboard/Employer/DesignerList.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);







const FindDesigners = props => {
  const {
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_2__["UserContext"]);
  const [designerList, setDesignerList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_lib_server__WEBPACK_IMPORTED_MODULE_1__["getGradedDesigners"])(currentUser.id).then(commList => {
      console.log(commList);
      setDesignerList(lodash__WEBPACK_IMPORTED_MODULE_5___default.a.map(commList, user => ({
        name_feedback: [user.firstName + " " + user.lastName, user.grade.response],
        score: user.grade.score,
        expiration: '3 Days',
        experience: 4,
        primary_skill: user.designType,
        contact: user
      })));
    });
  }, [currentUser]);

  if (designerList === undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DesignerList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    designerList: designerList
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FindDesigners);

/***/ })

})
//# sourceMappingURL=dashboard_user.js.fbd040fc8bef345404c1.hot-update.js.map