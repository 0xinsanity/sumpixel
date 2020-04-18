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

  if (linkedin === null && dribbble === null) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  var dribble_url = dribbble,
      linkedin_url = linkedin;

  if (!dribbble.includes('//')) {
    dribble_url = "https://" + dribbble;
  }

  if (!linkedin.includes('//')) {
    linkedin_url = "https://" + linkedin;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_1__["AboveText"], null, "Socials"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, linkedin !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: linkedin_url,
    target: '_blank'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LinkedinOutlined"], {
    style: {
      marginRight: 10,
      fontSize: 20,
      color: '#13B0C3'
    }
  })) : null, dribbble !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: dribble_url,
    target: '_blank'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DribbbleOutlined"], {
    style: {
      fontSize: 20,
      color: '#13B0C3'
    }
  })) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (TextAboveAnswer);

/***/ })

})
//# sourceMappingURL=[profile_id].js.8d97fa4c03c4cfc8882b.hot-update.js.map