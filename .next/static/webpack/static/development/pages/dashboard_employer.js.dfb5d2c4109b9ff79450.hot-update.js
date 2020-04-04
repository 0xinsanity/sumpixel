webpackHotUpdate("static/development/pages/dashboard_employer.js",{

/***/ "./components/Dashboard/Employer/ManageCommunications.tsx":
/*!****************************************************************!*\
  !*** ./components/Dashboard/Employer/ManageCommunications.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/server */ "./lib/server.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _EmployerCommList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmployerCommList */ "./components/Dashboard/Employer/EmployerCommList.tsx");






const ManageCommunications = props => {
  const {
    currentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_1__["UserContext"]);
  const [commList, setCommList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);

  const updateDecision = async (commId, update) => {
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_2__["updateEmployerDecision"])(commId, update);
    antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Updated Decision");
    setCommList((await Object(_lib_server__WEBPACK_IMPORTED_MODULE_2__["getEmployerCommunicationsList"])(currentUser.id)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_lib_server__WEBPACK_IMPORTED_MODULE_2__["getEmployerCommunicationsList"])(currentUser.id).then(commList => {
      setCommList(commList);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmployerCommList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    communicationList: commList,
    updateDecision: updateDecision
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManageCommunications);

/***/ })

})
//# sourceMappingURL=dashboard_employer.js.dfb5d2c4109b9ff79450.hot-update.js.map