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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const LocationAutocomplete = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_0___default.a, null, ({
    getInputProps,
    getSuggestionItemProps,
    suggestions,
    loading
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], _extends({}, getInputProps({
    id: "address-input"
  }), {
    onChange: props.onChange,
    defaultValue: props.defaultValue,
    placeholder: "New York City"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "autocomplete-dropdown-container"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "Loading...") : null, suggestions.map(suggestion => {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", _extends({}, spread, {
      key: suggestion.id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, suggestion.description));
  }))));
};

/***/ })

})
//# sourceMappingURL=onboarding.js.eb5c4d8dc10c0821bfd4.hot-update.js.map