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
        return '';

      case _model_model__WEBPACK_IMPORTED_MODULE_1__["DesignerDecisionTalk"].WILL_TALK:
        return `${fullName} is interested in working for you. You will soon be in contact with them.`;

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
    }), designerApprovedTalk === _model_model__WEBPACK_IMPORTED_MODULE_1__["DesignerDecisionTalk"].WILL_TALK ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
      title: "Are you sure?"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Group, {
      onChange: e => updateEmployerDecision(communicationId, e.target.value),
      value: decision
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_1__["EmployerDecisionHire"].UNDECIDED
    }, "Still In Talks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_1__["EmployerDecisionHire"].REJECT
    }, "Reject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_1__["EmployerDecisionHire"].HIRE
    }, "Hire"))) : designerApprovedTalk === _model_model__WEBPACK_IMPORTED_MODULE_1__["DesignerDecisionTalk"].UNDECIDED ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Text, null, "We are contacting ", fullName, " to inform them you are interested.") : null)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (EmployerCommList);

/***/ })

})
//# sourceMappingURL=dashboard_employer.js.8b828536d55d7600db2c.hot-update.js.map