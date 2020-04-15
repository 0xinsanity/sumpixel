webpackHotUpdate("static/development/pages/onboarding.js",{

/***/ "./components/General/BackNext.tsx":
/*!*****************************************!*\
  !*** ./components/General/BackNext.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _BigBlackButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BigBlackButton */ "./components/General/BigBlackButton.tsx");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/model */ "./model/model.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BackNext__Container",
  componentId: "sc-1iee36m-0"
})(["border-top:1px solid #DAE2EF;width:100%;padding-bottom:46px;padding-top:46px;padding-right:66px;padding-left:66px;flex-direction:row;justify-content:flex-end;align-items:center;display:flex;"]);
const Link = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"]).withConfig({
  displayName: "BackNext__Link",
  componentId: "sc-1iee36m-1"
})(["font-family:'Mark Pro';color:#000;height:100%;margin-right:70px;"]);

const BackNext = props => {
  const {
    backClick,
    nextClick,
    status,
    currentState
  } = props;
  const button_style = {
    paddingLeft: 67,
    paddingRight: 67
  };
  var button;

  if (currentState === 0) {
    button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BigBlackButton__WEBPACK_IMPORTED_MODULE_2__["BigBlackButton"], {
      style: button_style,
      onClick: nextClick
    }, "Next");
  } else if (currentState === 1) {
    if (status === _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Designer) {
      button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BigBlackButton__WEBPACK_IMPORTED_MODULE_2__["BigBlackButton"], {
        form: "designer_form",
        htmlType: "submit",
        style: button_style
      }, "Next");
    } else {
      button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BigBlackButton__WEBPACK_IMPORTED_MODULE_2__["BigBlackButton"], {
        form: "employer_form",
        htmlType: "submit",
        style: button_style
      }, "Next");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    onClick: backClick,
    type: 'link'
  }, "Back"));
};

/* harmony default export */ __webpack_exports__["default"] = (BackNext);

/***/ })

})
//# sourceMappingURL=onboarding.js.91285691843bac3cfab0.hot-update.js.map