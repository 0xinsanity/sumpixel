webpackHotUpdate("static/development/pages/profile/[profile_id].js",{

/***/ "./components/Profile/TextAboveAnswer.tsx":
/*!************************************************!*\
  !*** ./components/Profile/TextAboveAnswer.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "TextAboveAnswer__Container",
  componentId: "hazteg-0"
})(["display:flex;flex-direction:column;"]);
const AboveText = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text).withConfig({
  displayName: "TextAboveAnswer__AboveText",
  componentId: "hazteg-1"
})(["font-family:'Mark Pro';opacity:0.5;padding-bottom:8px;"]);
const BelowText = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(AboveText).withConfig({
  displayName: "TextAboveAnswer__BelowText",
  componentId: "hazteg-2"
})(["opacity:1.0;padding-bottom:0px;max-width:150px;"]);
const ButtonBelow = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "TextAboveAnswer__ButtonBelow",
  componentId: "hazteg-3"
})(["opacity:1.0;padding:0px;font-family:'Mark Pro';color:#13B0C3;background:rgba(0,0,0,0);border:none;max-height:22px;"]);

const TextAboveAnswer = props => {
  const {
    above,
    below,
    link,
    onClick
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboveText, null, above), link !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonBelow, null, below)) : onClick !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonBelow, {
    onClick: onClick
  }, below) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BelowText, null, below));
};

/* harmony default export */ __webpack_exports__["default"] = (TextAboveAnswer);

/***/ })

})
//# sourceMappingURL=[profile_id].js.f55a8c619856fea10792.hot-update.js.map