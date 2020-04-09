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
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/server */ "./lib/server.tsx");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/model */ "./model/model.tsx");
/* harmony import */ var _DesignerInfoModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DesignerInfoModal */ "./components/Dashboard/Employer/DesignerInfoModal.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _DesignerList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DesignerList */ "./components/Dashboard/Employer/DesignerList.tsx");






const {
  Column
} = antd__WEBPACK_IMPORTED_MODULE_4__["Table"];

const EmployerCommList = props => {
  const {
    communicationList,
    updateDecision
  } = props;
  const [showModal, setModalVisibility] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [currentDesigner, setCurrentDesigner] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);

  const decisionToText = dec => {
    switch (dec) {
      case _model_model__WEBPACK_IMPORTED_MODULE_2__["DesignerDecisionTalk"].UNDECIDED:
        return 'Reviewing Your Request';

      case _model_model__WEBPACK_IMPORTED_MODULE_2__["DesignerDecisionTalk"].WILL_TALK:
        return `Willing to Talk`;

      case _model_model__WEBPACK_IMPORTED_MODULE_2__["DesignerDecisionTalk"].WILL_NOT_TALK:
        return `Declines to Talk`;
    }
  };

  const onMoreInfo = async commId => {
    const user = await Object(_lib_server__WEBPACK_IMPORTED_MODULE_1__["getDesignerFromCommunication"])(commId);
    setCurrentDesigner(user);
    setModalVisibility(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DesignerInfoModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setInvisible: () => setModalVisibility(false),
    visible: showModal,
    designer: currentDesigner
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Table"], {
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
    key: "designerApprovedTalk",
    render: text => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Text, {
      style: {
        color: '#000'
      }
    }, decisionToText(text))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    align: 'center',
    title: "Decision",
    dataIndex: "decision",
    key: "decision",
    render: (text, record, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Popconfirm"], {
      title: "Are you sure?"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"].Group, {
      onChange: e => updateDecision(communicationList[index].communicationId, e.target.value),
      value: text
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_2__["EmployerDecisionHire"].UNDECIDED
    }, "Still In Talks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_2__["EmployerDecisionHire"].REJECT
    }, "Reject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_2__["EmployerDecisionHire"].HIRE
    }, "Hire")))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    align: 'center',
    title: "Info",
    dataIndex: "communicationId",
    key: "communicationId",
    render: communicationId => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DesignerList__WEBPACK_IMPORTED_MODULE_5__["RequestCallButton"], {
      onClick: () => onMoreInfo(communicationId)
    }, "More Info")
  }), "/>"));
};

/* harmony default export */ __webpack_exports__["default"] = (EmployerCommList);

/***/ })

})
//# sourceMappingURL=dashboard_employer.js.5928fa40753f09cc71e8.hot-update.js.map