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



const {
  Column
} = antd__WEBPACK_IMPORTED_MODULE_2__["Table"];

const CommunicationsList = props => {
  const {
    communicationList,
    updateDesignerText
  } = props;

  const decisionToText = dec => {
    switch (dec) {
      case _model_model__WEBPACK_IMPORTED_MODULE_1__["EmployerDecisionHire"].UNDECIDED:
        return `Reviewing your profile`;

      case _model_model__WEBPACK_IMPORTED_MODULE_1__["EmployerDecisionHire"].HIRE:
        return `Wants to hire you`;

      case _model_model__WEBPACK_IMPORTED_MODULE_1__["EmployerDecisionHire"].REJECT:
        return `Rejected your profile`;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    style: {
      paddingBottom: 10,
      width: '100%',
      fontFamily: 'Mark Pro',
      fontWeight: 'normal'
    },
    size: "large",
    dataSource: communicationList,
    bordered: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    onCell: (data, index) => ({
      style: {
        fontFamily: 'Mark Pro Bold'
      }
    }),
    width: '35%',
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    title: "Company Status",
    dataIndex: "decision",
    key: "decision",
    render: text => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Text, {
      style: {
        color: '#000'
      }
    }, decisionToText(text))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    align: 'center',
    title: "Decision",
    dataIndex: "designerApprovedTalk",
    key: "designerApprovedTalk",
    render: (text, record, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
      title: "Are you sure?"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Group, {
      onChange: e => updateDesignerText(communicationList[index].communicationId, e.target.value),
      value: text
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_1__["DesignerDecisionTalk"].UNDECIDED
    }, "Undecided"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_1__["DesignerDecisionTalk"].WILL_TALK
    }, "Will Talk"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_1__["DesignerDecisionTalk"].WILL_NOT_TALK
    }, "Will Not Talk")))
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CommunicationsList);

/***/ })

})
//# sourceMappingURL=dashboard_user.js.011219d103ed3654ce85.hot-update.js.map