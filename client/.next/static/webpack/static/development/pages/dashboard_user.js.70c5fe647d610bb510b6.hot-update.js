webpackHotUpdate("static/development/pages/dashboard_user.js",{

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
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/model */ "./model/model.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _DesignerInfoModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DesignerInfoModal */ "./components/Dashboard/Employer/DesignerInfoModal.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _General_BigBlackButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../General/BigBlackButton */ "./components/General/BigBlackButton.tsx");








const {
  Column
} = antd__WEBPACK_IMPORTED_MODULE_4__["Table"];
const NameTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"]).withConfig({
  displayName: "DesignerList__NameTitle",
  componentId: "sc-4gjozu-0"
})(["color:#000000;font-family:'Mark Pro Bold';font-size:16px;"]);
const ResponseTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"]).withConfig({
  displayName: "DesignerList__ResponseTitle",
  componentId: "sc-4gjozu-1"
})(["color:#000000;opacity:0.5;font-size;14px;font-family:'Mark Pro';"]);

const DesignerList = props => {
  const {
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_3__["UserContext"]);
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DesignerInfoModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setInvisible: () => setModalVisibility(false),
    visible: showModal,
    designer: currentDesigner,
    onConnect: onConnect
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    style: {
      paddingBottom: 10,
      width: '100%',
      fontFamily: 'Mark Pro',
      fontWeight: 'normal'
    },
    size: "large",
    dataSource: designerList,
    bordered: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    onCell: (data, index) => ({
      style: {
        fontFamily: 'Mark Pro Bold'
      }
    }),
    width: '35%',
    title: "Name",
    dataIndex: "name_feedback",
    key: "name_feedback",
    render: name_feedback => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NameTitle, null, name_feedback[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResponseTitle, null, name_feedback[1]))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    align: 'center',
    title: "Score",
    dataIndex: "score",
    key: "score",
    render: text => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Text, {
      style: {
        color: _model_model__WEBPACK_IMPORTED_MODULE_2__["UNIVERSAL_COLOR"]
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Text, {
      style: {
        color: _model_model__WEBPACK_IMPORTED_MODULE_2__["UNIVERSAL_COLOR"],
        fontFamily: 'Mark Pro Bold'
      }
    }, text), "/10")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    align: 'center',
    title: "Location",
    dataIndex: "location",
    key: "location"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    align: 'center',
    title: "Primary Skill",
    dataIndex: "primary_skill",
    key: "primary_skill"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    align: 'center',
    title: "More",
    dataIndex: "contact",
    key: "contact",
    render: contact => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_7__["BigBlackButton"], {
      onClick: () => onMoreInfo(contact)
    }, "More Info/Contact")
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DesignerList);

/***/ })

})
//# sourceMappingURL=dashboard_user.js.70c5fe647d610bb510b6.hot-update.js.map