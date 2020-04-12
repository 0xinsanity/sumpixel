webpackHotUpdate("static/development/pages/profile/[profile_id].js",{

/***/ "./components/Profile/Socials.tsx":
/*!****************************************!*\
  !*** ./components/Profile/Socials.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextAboveAnswer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextAboveAnswer */ "./components/Profile/TextAboveAnswer.tsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");




const TextAboveAnswer = props => {
  const {
    linkedin,
    dribbble
  } = props;

  if (linkedin === undefined && dribbble === undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_1__["AboveText"], null, "Socials"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, linkedin !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: linkedin,
    target: '_blank'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LinkedinOutlined"], {
    style: {
      marginRight: 10,
      fontSizer: 20,
      color: '#13B0C3'
    }
  })) : null, dribbble !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: dribbble,
    target: '_blank'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DribbbleOutlined"], null)) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (TextAboveAnswer);

/***/ })

})
//# sourceMappingURL=[profile_id].js.aaf8006390116358aa5c.hot-update.js.map