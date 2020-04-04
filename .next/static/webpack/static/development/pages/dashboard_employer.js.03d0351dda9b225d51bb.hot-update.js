webpackHotUpdate("static/development/pages/dashboard_employer.js",{

/***/ "./components/Dashboard/Employer/EmployerCommList.tsx":
/*!************************************************************!*\
  !*** ./components/Dashboard/Employer/EmployerCommList.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/model */ "./model/model.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");




const EmployerCommList = props => {
  const {
    communicationList,
    updateEmployerDecision
  } = props;

  const decisionToText = (fullName, dec) => {
    switch (dec) {
      case _model_model__WEBPACK_IMPORTED_MODULE_1__["DesignerDecisionTalk"].UNDECIDED:
        return `${fullName} is reviewing your interest in them`;

      case _model_model__WEBPACK_IMPORTED_MODULE_1__["DesignerDecisionTalk"].WILL_TALK:
        return `${fullName} wants to talk to you you`;

      case _model_model__WEBPACK_IMPORTED_MODULE_1__["DesignerDecisionTalk"].WILL_NOT_TALK:
        return `${fullName} is not interested in your offer`;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    style: {
      width: '100%'
    },
    dataSource: communicationList,
    bordered: true,
    renderItem: ({
      communicationId,
      fullName,
      designerApprovedTalk,
      decision
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
      title: fullName,
      description: decisionToText(fullName, designerApprovedTalk)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Group, {
      onChange: e => updateEmployerDecision(communicationId, e.target.value),
      value: decision
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_1__["EmployerDecisionHire"].UNDECIDED
    }, "Undecided"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_1__["EmployerDecisionHire"].REJECT
    }, "Reject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_1__["EmployerDecisionHire"].HIRE
    }, "Hire")))
  });
};

/* harmony default export */ __webpack_exports__["default"] = (EmployerCommList);

/***/ }),

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
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_1__["UserContext"]);
  const [commList, setCommList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);

  const updateEmployerDecision = async (commId, update) => {
    await updateEmployerDecision(commId, update);
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
    updateEmployerDecision: updateEmployerDecision
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManageCommunications);

/***/ })

})
//# sourceMappingURL=dashboard_employer.js.03d0351dda9b225d51bb.hot-update.js.map