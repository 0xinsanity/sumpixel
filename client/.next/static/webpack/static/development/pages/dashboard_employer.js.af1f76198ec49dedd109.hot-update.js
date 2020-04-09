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
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);





const DesignerInfoModal = props => {
  const {
    designer,
    visible,
    onConnect,
    setInvisible
  } = props;

  if (designer === undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  const {
    grade
  } = designer;
  const showInfo = {
    "Portfolio": designer.portfolio,
    "Location": designer.location,
    "Preferred Role": designer.preferredRole,
    "Desired Salary": designer.salary,
    "Phone Number": designer.phoneNumber,
    "Email": designer.email
  };

  const onClick = () => {
    onConnect(designer.id);
  };

  const downloadResume = () => {
    _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["storage_ref"].child('resumes/' + designer.resume).getDownloadURL().then(url => {
      console.log(url);
      window.open(url, '_blank');
    }).catch(error => {
      console.error(error);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    onCancel: setInvisible,
    title: designer.firstName + " " + designer.lastName,
    visible: visible,
    footer: [onConnect !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onClick,
      type: "primary"
    }, "Connect To ", designer.firstName) : null]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title, {
    level: 3,
    underline: true
  }, "Our Evaluation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title, {
    level: 4
  }, "Overall Score: ", grade.score), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text, null, "This score is out of 10. To learn more about our scoring system, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: '_blank',
    href: 'https://sumpixel.com/manifesto'
  }, "click here.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title, {
    level: 4
  }, "Response From Evaluator:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text, null, grade.response), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title, {
    level: 3,
    underline: true
  }, designer.firstName, "'s Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.map(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.keys(showInfo), key => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text, null, key, ": ", showInfo[key], '\n');
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      marginTop: 10
    },
    onClick: downloadResume
  }, "Download Resume"));
};

/* harmony default export */ __webpack_exports__["default"] = (DesignerInfoModal);

/***/ })

})
//# sourceMappingURL=dashboard_employer.js.af1f76198ec49dedd109.hot-update.js.map