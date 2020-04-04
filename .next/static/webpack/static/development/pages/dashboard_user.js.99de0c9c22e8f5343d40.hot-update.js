webpackHotUpdate("static/development/pages/dashboard_user.js",{

/***/ "./components/Dashboard/Designer/CommunicationsList.tsx":
/*!**************************************************************!*\
  !*** ./components/Dashboard/Designer/CommunicationsList.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/model */ "./model/model.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");




const CommunicationsList = props => {
  const {
    communicationList,
    updateDesignerText
  } = props;

  const decisionToText = (companyName, dec) => {
    switch (dec) {
      case _model_model__WEBPACK_IMPORTED_MODULE_1__["EmployerDecisionHire"].UNDECIDED:
        return `${companyName} is reviewing your profile`;

      case _model_model__WEBPACK_IMPORTED_MODULE_1__["EmployerDecisionHire"].HIRE:
        return `${companyName} wants to hire you`;

      case _model_model__WEBPACK_IMPORTED_MODULE_1__["EmployerDecisionHire"].REJECT:
        return `${companyName} has decided to look at other profiles`;
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
      companyName,
      designerApprovedTalk,
      decision
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
      title: companyName,
      description: decisionToText(companyName, decision)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Group, {
      onChange: e => updateDesignerText(communicationId, e.target.value),
      value: designerApprovedTalk
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_1__["DesignerDecisionTalk"].UNDECIDED
    }, "Undecided"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_1__["DesignerDecisionTalk"].WILL_TALK
    }, "Will Talk"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_1__["DesignerDecisionTalk"].WILL_NOT_TALK
    }, "Will Not Talk")))
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CommunicationsList);

/***/ })

})
//# sourceMappingURL=dashboard_user.js.99de0c9c22e8f5343d40.hot-update.js.map