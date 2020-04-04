webpackHotUpdate("static/development/pages/dashboard_employer.js",{

/***/ "./components/Dashboard/Employer/DesignerInfoModal.tsx":
/*!*************************************************************!*\
  !*** ./components/Dashboard/Employer/DesignerInfoModal.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



const DesignerInfoModal = props => {
  const {
    info,
    visible,
    onConnect
  } = props;

  if (info === undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  const {
    designer,
    grade
  } = info;

  const onClick = () => {
    onConnect(designer.id);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: designer.firstName + " " + designer.lastName,
    visible: visible,
    onOk: onClick,
    footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      key: "submit",
      type: "primary"
    }, "Connect")]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DesignerInfoModal);

/***/ })

})
//# sourceMappingURL=dashboard_employer.js.62c227260584cf4c466d.hot-update.js.map