webpackHotUpdate("static/development/pages/dashboard_employer.js",{

/***/ "./components/Dashboard/Employer/DesignerList.tsx":
/*!********************************************************!*\
  !*** ./components/Dashboard/Employer/DesignerList.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/server */ "./lib/server.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _DesignerInfoModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DesignerInfoModal */ "./components/Dashboard/Employer/DesignerInfoModal.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");






const {
  Column
} = antd__WEBPACK_IMPORTED_MODULE_3__["Table"];
const NameTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Typography"])`
    color: #000000;
    font-family: 'Mark Pro Bold';
    font-size: 16px;
`;
const ResponseTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Typography"])`
    color: #000000;
    opacity: 0.5;
    font-size; 14px;
`;

const DesignerList = props => {
  const {
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_2__["UserContext"]);
  const {
    designerList
  } = props;
  const [showModal, setModalVisibility] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [currentDesigner, setCurrentDesigner] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);

  const onMoreInfo = user => {
    setCurrentDesigner(user);
    setModalVisibility(true);
  };

  const onConnect = async designerId => {
    window.analytics.track(currentUser.companyName + ' connects to designer');
    const comm = await Object(_lib_server__WEBPACK_IMPORTED_MODULE_1__["createCommunication"])(designerId, currentUser.id);
    setModalVisibility(false);
    const newUser = { ...currentUser,
      communications: [...currentUser.communications, comm.id]
    };
    changeUser(newUser);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DesignerInfoModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setInvisible: () => setModalVisibility(false),
    visible: showModal,
    designer: currentDesigner,
    onConnect: onConnect
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    style: {
      width: '100%'
    },
    size: "large",
    dataSource: designerList,
    bordered: false,
    pagination: {
      position: 'bottom'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    ellipsis: true,
    title: "Name",
    dataIndex: "name_feedback",
    key: "name_feedback",
    render: name_feedback => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NameTitle, null, name_feedback[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResponseTitle, null, name_feedback[1]))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    title: "Score",
    dataIndex: "score",
    key: "score"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    title: "Expiration",
    dataIndex: "expiration",
    key: "expiration"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    title: "Primary Skill",
    dataIndex: "primary_skill",
    key: "primary_skill"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    title: "",
    dataIndex: "contact",
    key: "contact",
    render: contact => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: () => onMoreInfo(contact)
    }, "More Info")
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DesignerList);

/***/ })

})
//# sourceMappingURL=dashboard_employer.js.e14694ac56d3cbaba5cb.hot-update.js.map