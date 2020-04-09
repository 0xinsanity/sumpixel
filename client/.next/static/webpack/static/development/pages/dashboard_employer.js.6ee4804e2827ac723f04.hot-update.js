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
/* harmony import */ var _DesignerInfoModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesignerInfoModal */ "./components/Dashboard/Employer/DesignerInfoModal.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _DesignerList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DesignerList */ "./components/Dashboard/Employer/DesignerList.tsx");





const {
  Column
} = antd__WEBPACK_IMPORTED_MODULE_3__["Table"];

const EmployerCommList = props => {
  const {
    communicationList,
    updateDecision
  } = props;
  const [showModal, setModalVisibility] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [currentDesigner, setCurrentDesigner] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);

  const decisionToText = dec => {
    switch (dec) {
      case _model_model__WEBPACK_IMPORTED_MODULE_1__["DesignerDecisionTalk"].UNDECIDED:
        return 'Reviewing Your Request';

      case _model_model__WEBPACK_IMPORTED_MODULE_1__["DesignerDecisionTalk"].WILL_TALK:
        return `Accepts to Talk`;

      case _model_model__WEBPACK_IMPORTED_MODULE_1__["DesignerDecisionTalk"].WILL_NOT_TALK:
        return `Declines to Talk`;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DesignerInfoModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setInvisible: () => setModalVisibility(false),
    visible: showModal,
    designer: currentDesigner
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    style: {
      paddingBottom: 10,
      width: '100%',
      fontFamily: 'Mark Pro Bold',
      fontWeight: 'normal'
    },
    size: "large",
    dataSource: communicationList,
    bordered: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    width: '35%',
    title: "Name",
    dataIndex: "fullName",
    key: "fullName"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    title: "Designer's Status",
    dataIndex: "designerApprovedTalk",
    key: "designerApprovedTalk"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    align: 'center',
    title: "Decision",
    dataIndex: "decision",
    key: "decision",
    render: (text, record, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Popconfirm"], {
      title: "Are you sure?"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, {
      onChange: e => updateDecision(communicationList[index].communicationId, e.target.value),
      value: text
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_1__["EmployerDecisionHire"].UNDECIDED
    }, "Still In Talks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_1__["EmployerDecisionHire"].REJECT
    }, "Reject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_1__["EmployerDecisionHire"].HIRE
    }, "Hire")))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    align: 'center',
    title: "Contact",
    dataIndex: "contact",
    key: "contact",
    render: contact => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DesignerList__WEBPACK_IMPORTED_MODULE_4__["RequestCallButton"], {
      onClick: () => onMoreInfo(contact)
    }, "More Info")
  }), "/>"));
};

/* harmony default export */ __webpack_exports__["default"] = (EmployerCommList);

/***/ })

})
//# sourceMappingURL=dashboard_employer.js.6ee4804e2827ac723f04.hot-update.js.map