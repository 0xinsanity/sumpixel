webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/PopupModal.tsx":
/*!***********************************!*\
  !*** ./components/PopupModal.tsx ***!
  \***********************************/
/*! exports provided: PopupModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupModal", function() { return PopupModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



const ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
`;
const PopupModal = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    animationType: "fade",
    transparent: true,
    isOpen: props.visible,
    style: {
      content: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 0,
        border: 0,
        borderRadius: 0
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalContainer, null, props.children));
};

/***/ })

})
//# sourceMappingURL=_app.js.76501224dd1a525ad742.hot-update.js.map