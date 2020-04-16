webpackHotUpdate("static/development/pages/onboarding.js",{

/***/ "./components/General/LocationAutocomplete.tsx":
/*!*****************************************************!*\
  !*** ./components/General/LocationAutocomplete.tsx ***!
  \*****************************************************/
/*! exports provided: LocationAutocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationAutocomplete", function() { return LocationAutocomplete; });
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-places-autocomplete */ "./node_modules/react-places-autocomplete/dist/index.js");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const PlaceTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
    width: 100%;
    height: 35px;
    padding: 4px;
    border-bottom: 1px solid #DAE2EF;
`;
const PlaceText = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text)`
    font-family: 'Mark Pro';
`;
const LocationAutocomplete = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Location",
    name: "location",
    rules: [{
      required: !props.isModifyProfilePage,
      message: !props.isModifyProfilePage ? `Location is required` : ''
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_0___default.a, null, ({
    getInputProps,
    getSuggestionItemProps,
    suggestions,
    loading
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], _extends({}, getInputProps({
    id: "address-input"
  }), {
    defaultValue: props.defaultValue,
    placeholder: "New York City"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaceText, {
    className: "autocomplete-dropdown-container"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaceText, null, "Loading...") : null, suggestions.map(suggestion => {
    const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
    const style = suggestion.active ? {
      backgroundColor: "#fafafa",
      cursor: "pointer",
      padding: 25
    } : {
      backgroundColor: "#ffffff",
      cursor: "pointer"
    };
    const spread = { ...getSuggestionItemProps(suggestion, {
        className,
        style
      })
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaceTextContainer, _extends({}, spread, {
      key: suggestion.id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaceText, null, suggestion.description));
  })))));
};

/***/ })

})
//# sourceMappingURL=onboarding.js.2ca4ae3e06ab07cea45f.hot-update.js.map