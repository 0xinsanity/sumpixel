module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/sumpixel-logo-white.png":
/*!****************************************!*\
  !*** ./assets/sumpixel-logo-white.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./assets/sumpixel-logo.png":
/*!**********************************!*\
  !*** ./assets/sumpixel-logo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sumpixel-logo-a3c23479ee4c195d2c8c3492a1819eed.png";

/***/ }),

/***/ "./components/General/BackNext.tsx":
/*!*****************************************!*\
  !*** ./components/General/BackNext.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BigBlackButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BigBlackButton */ "./components/General/BigBlackButton.tsx");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/model */ "./model/model.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "BackNext__Container",
  componentId: "sc-1iee36m-0"
})(["border-top:1px solid #DAE2EF;width:100%;padding-bottom:46px;padding-top:46px;padding-right:66px;padding-left:66px;flex-direction:row;justify-content:flex-end;align-items:center;display:flex;"]);
const Link = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_4__["Button"]).withConfig({
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
  }, "Back"), button);
};

/* harmony default export */ __webpack_exports__["default"] = (BackNext);

/***/ }),

/***/ "./components/General/BigBlackButton.tsx":
/*!***********************************************!*\
  !*** ./components/General/BigBlackButton.tsx ***!
  \***********************************************/
/*! exports provided: BigBlackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigBlackButton", function() { return BigBlackButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


const BigBlackButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "BigBlackButton",
  componentId: "ruupao-0"
})(["background:#000;color:#fff;border-radius:2px;border:none;padding:15px 24px;height:auto;font-family:'Mark Pro';&:hover{background:#DAE2EF;color:#000;}&:focus{background:#000;color:#fff;}"]);

/***/ }),

/***/ "./components/General/Loading.tsx":
/*!****************************************!*\
  !*** ./components/General/Loading.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const Cont = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Loading__Cont",
  componentId: "sc-1ta1ost-0"
})(["top:0;bottom:0;right:0;left:0;position:fixed;display:flex;width:100%;height:100%;justify-content:center;align-items:center;background-color:#fff;"]);

const Loading = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cont, {
    style: {
      zIndex: props.loading === undefined || props.loading ? 10 : -10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
    size: "large"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/General/LocationAutocomplete.tsx":
/*!*****************************************************!*\
  !*** ./components/General/LocationAutocomplete.tsx ***!
  \*****************************************************/
/*! exports provided: LocationAutocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationAutocomplete", function() { return LocationAutocomplete; });
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-places-autocomplete */ "react-places-autocomplete");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const PlaceTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
    height: 45px;
    padding: 4px;
    padding-left: 14px;
    border-bottom: 1px solid #DAE2EF;
    border-left: 1px solid #DAE2EF;
    border-right: 1px solid #DAE2EF;
    display: flex;
    align-items: center;
`;
const PlaceText = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text)`
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaceTextContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaceText, null, "Loading...")) : null, suggestions.map(suggestion => {
    const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
    const style = suggestion.active ? {
      backgroundColor: "#fafafa",
      cursor: "pointer"
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

/***/ }),

/***/ "./components/General/OpenPage.tsx":
/*!*****************************************!*\
  !*** ./components/General/OpenPage.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);


const OpenPage = (setLoading, new_page) => {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push(new_page).then(() => {
    setLoading(false);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (OpenPage);

/***/ }),

/***/ "./components/General/SumpixelCard.tsx":
/*!*********************************************!*\
  !*** ./components/General/SumpixelCard.tsx ***!
  \*********************************************/
/*! exports provided: SumpixelCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumpixelCard", function() { return SumpixelCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


const SumpixelCard = props => {
  var logo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    height: 43,
    src: __webpack_require__(/*! ../../assets/sumpixel-logo.png */ "./assets/sumpixel-logo.png")
  });

  if (props.withLink) {
    logo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: '/'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      height: 43,
      src: __webpack_require__(/*! ../../assets/sumpixel-logo.png */ "./assets/sumpixel-logo.png")
    }));
  } else if (props.withLogo === false) {
    logo = null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    bodyStyle: {
      padding: props.withLogo === false ? 0 : 'auto'
    },
    style: {
      paddingLeft: props.withLogo === false ? 0 : 20,
      paddingRight: props.withLogo === false ? 0 : 20,
      width: '100vh',
      ...props.style
    },
    title: logo
  }, props.children);
};

/***/ }),

/***/ "./components/Login/LoginFlowContainer.tsx":
/*!*************************************************!*\
  !*** ./components/Login/LoginFlowContainer.tsx ***!
  \*************************************************/
/*! exports provided: LoginBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBackground", function() { return LoginBackground; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/model */ "./model/model.tsx");



const LoginFlowContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LoginFlowContainer",
  componentId: "zoeynh-0"
})(["background-color:", ";height:100vh;width:100%;display:flex;justify-content:center;align-items:center;"], _model_model__WEBPACK_IMPORTED_MODULE_2__["UNIVERSAL_BACKGROUND"]);
const AbsolutePurple = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LoginFlowContainer__AbsolutePurple",
  componentId: "zoeynh-1"
})(["height:50vh;position:absolute;top:0;left:0;right:0;background-color:", ";"], _model_model__WEBPACK_IMPORTED_MODULE_2__["UNIVERSAL_COLOR"]);
const LoginBackground = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginFlowContainer, {
    style: props.style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AbsolutePurple, null), props.children);
};

/***/ }),

/***/ "./components/OnboardingFlow/Designers/AvatarUpload.tsx":
/*!**************************************************************!*\
  !*** ./components/OnboardingFlow/Designers/AvatarUpload.tsx ***!
  \**************************************************************/
/*! exports provided: AvatarUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarUpload", function() { return AvatarUpload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('Images must be smaller than 2 Megabytes!');
  }

  return isLt2M;
}

class AvatarUpload extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loading: false,
      imageUrl: ''
    });

    _defineProperty(this, "handleChange", info => {
      if (info.file.status === 'uploading') {
        this.setState({
          loading: true
        });
        return;
      }

      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.props.changeProfilePic(info.file.originFileObj);
          this.setState({
            imageUrl,
            loading: false
          });
        });
      }
    });
  }

  render() {
    const uploadButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        fontFamily: 'Mark Pro'
      },
      className: "ant-upload-text"
    }, "Profile Picture"));
    const {
      imageUrl
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
      name: "avatar",
      accept: ".png",
      listType: "picture-card",
      className: "avatar-uploader",
      showUploadList: false,
      beforeUpload: beforeUpload,
      onChange: this.handleChange
    }, imageUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: imageUrl,
      alt: "avatar",
      style: {
        width: '100%'
      }
    }) : uploadButton);
  }

}

/***/ }),

/***/ "./components/OnboardingFlow/Designers/FormPersonalData.tsx":
/*!******************************************************************!*\
  !*** ./components/OnboardingFlow/Designers/FormPersonalData.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/model */ "./model/model.tsx");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _General_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../General/Loading */ "./components/General/Loading.tsx");
/* harmony import */ var _General_BigBlackButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../General/BigBlackButton */ "./components/General/BigBlackButton.tsx");
/* harmony import */ var _General_OpenPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../General/OpenPage */ "./components/General/OpenPage.tsx");
/* harmony import */ var _EmployerDesigner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../EmployerDesigner */ "./components/OnboardingFlow/EmployerDesigner.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_mask_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd-mask-input */ "antd-mask-input");
/* harmony import */ var antd_mask_input__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_mask_input__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _General_LocationAutocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../General/LocationAutocomplete */ "./components/General/LocationAutocomplete.tsx");
/* harmony import */ var _AvatarUpload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AvatarUpload */ "./components/OnboardingFlow/Designers/AvatarUpload.tsx");















const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
const VerticalRButton = styled_components__WEBPACK_IMPORTED_MODULE_11___default()(_EmployerDesigner__WEBPACK_IMPORTED_MODULE_10__["RButton"]).withConfig({
  displayName: "FormPersonalData__VerticalRButton",
  componentId: "sc-1xwkf3-0"
})(["display:block;height:30px;line-height:30px;text-align:center;margin-bottom:16px;"]);

const FormPersonalData = props => {
  const {
    changeCurrentUser,
    modifyProfile
  } = props;
  const isModifyProfilePage = modifyProfile !== undefined;
  const {
    currentUser,
    changeUser,
    loading,
    setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_6__["UserContext"]);
  const [checked, changeChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [fileList, updateFileList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [profilePic, changeProfilePic] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);

  if (currentUser == undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  }

  const getRules = name => {
    return [{
      required: !isModifyProfilePage,
      message: !isModifyProfilePage ? `${name} is required` : ''
    }];
  };

  const updateUser = values => {
    const newUser = {
      email: currentUser.email,
      id: currentUser.id,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      phoneNumber: values.phoneNumber,
      location: values.location,
      salary: values.salary,
      portfolio: values.portfolio,
      preferredRole: values.preferredRole,
      visa: values.visa_status,
      resume: currentUser.id + '.pdf',
      linkedin: values.linkedin,
      dribbble: values.dribbble
    };

    if (profilePic !== undefined) {
      newUser["profilePic"] = currentUser.id + ".png";
    }

    console.table(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.pickBy(newUser, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.identity));
    changeCurrentUser(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.pickBy(newUser, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.identity));

    if (isModifyProfilePage) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("Profile Updated");
    } else {
      Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_9__["default"])(setLoading, '/dashboard_user');
    }
  };

  const onFinish = values => {
    if (!isModifyProfilePage && !checked) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('Please agree to the Terms of Service');
      return;
    }

    const res = values.resume;
    console.log(res);

    if (res === undefined) {
      updateUser(values);
    } else {
      _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["storage_ref"].child('resumes/' + currentUser.id + '.pdf').put(res.file["originFileObj"]).then(snapshot => {
        updateUser(values);
      });
    }

    if (profilePic === undefined) {
      updateUser(values);
    } else {
      _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["storage_ref"].child('profilePic/' + currentUser.id + '.png').put(profilePic).then(snapshot => {
        updateUser(values);
      });
    }
  };

  const viewProfile = () => {
    Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_9__["default"])(setLoading, '/profile/' + currentUser.id);
  };

  const onFinishFailed = values => {
    console.table(values);
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('There was an error completing your account. Ensure every field is filled out.');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    id: "designer_form",
    name: "basic",
    initialValues: {
      remember: true
    },
    style: {
      marginBottom: 50
    },
    onFinishFailed: onFinishFailed,
    onFinish: onFinish
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "",
    name: "profilePic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%',
      justifyContent: 'center',
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AvatarUpload__WEBPACK_IMPORTED_MODULE_14__["AvatarUpload"], {
    changeProfilePic: profilePic => changeProfilePic(profilePic)
  }))), !isModifyProfilePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "First Name",
    name: "firstName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    placeholder: "First Name",
    defaultValue: currentUser.firstName
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Last Name",
    name: "lastName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    placeholder: "Last Name",
    defaultValue: currentUser.lastName
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Email",
    name: "email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: currentUser.email
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Phone Number",
    name: "phoneNumber",
    rules: getRules("Phone Number")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_mask_input__WEBPACK_IMPORTED_MODULE_12___default.a, {
    mask: "+1 (111) 111-1111",
    defaultValue: isModifyProfilePage ? '' : currentUser.phoneNumber || "",
    placeholder: "+1 (555) 555-5555"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_LocationAutocomplete__WEBPACK_IMPORTED_MODULE_13__["LocationAutocomplete"], {
    isModifyProfilePage: isModifyProfilePage,
    defaultValue: isModifyProfilePage ? '' : currentUser.location || ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Salary",
    name: "salary",
    rules: getRules("Salary")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
    buttonStyle: "solid",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalRButton, {
    value: _model_model__WEBPACK_IMPORTED_MODULE_4__["PricingModel"].SMALL
  }, _model_model__WEBPACK_IMPORTED_MODULE_4__["PricingModel"].SMALL), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalRButton, {
    value: _model_model__WEBPACK_IMPORTED_MODULE_4__["PricingModel"].MEDIUM
  }, _model_model__WEBPACK_IMPORTED_MODULE_4__["PricingModel"].MEDIUM), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalRButton, {
    value: _model_model__WEBPACK_IMPORTED_MODULE_4__["PricingModel"].LARGE
  }, _model_model__WEBPACK_IMPORTED_MODULE_4__["PricingModel"].LARGE))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Preferred Role",
    name: "preferredRole",
    rules: getRules("Preferred Role")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: isModifyProfilePage ? '' : currentUser.preferredRole || "",
    placeholder: "Senior UI Designer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Portfolio",
    name: "portfolio",
    rules: getRules("Portfolio")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: isModifyProfilePage ? '' : currentUser.portfolio || "",
    placeholder: "https://www.myportfolio.com"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Visa Status",
    name: "visa_status",
    rules: getRules("Visa Status")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: modifyProfile ? '' : currentUser.visa || "",
    placeholder: "Select an option:"
  }, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.map(_model_model__WEBPACK_IMPORTED_MODULE_4__["VisaStatus"], status => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
      style: {
        fontFamily: 'Mark Pro'
      },
      value: status
    }, status);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Resume",
    name: "resume",
    rules: getRules("Resume")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
    name: 'file',
    accept: ".pdf",
    fileList: fileList,
    onChange: info => {
      let fileList_update = [...info.fileList];
      fileList_update = fileList_update.slice(-1);
      fileList_update = fileList_update.map(file => {
        if (file.response) {
          file.url = file.response.url;
        }

        if (file.status === 'error') {
          // TODO: Find better way of handling this
          file.status = 'done';
        }

        return file;
      });

      if (info.file.status === 'done') {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].success(`${info.file.name} file uploaded successfully`);
      }

      updateFileList(fileList_update);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      width: '100%',
      fontFamily: 'Mark Pro'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UploadOutlined"], null), " ", !isModifyProfilePage ? "Click to Upload" : "Upload New Resume"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "LinkedIn",
    name: "linkedin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: modifyProfile ? '' : currentUser.linkedin || "",
    placeholder: "https://www.linkedin.com/in/username"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Dribbble",
    name: "dribbble"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: modifyProfile ? '' : currentUser.dribbble || "",
    placeholder: "https://dribbble.com/username"
  })), !isModifyProfilePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    valuePropName: 'checked'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    style: {
      fontFamily: 'Mark Pro'
    },
    checked: checked,
    onChange: e => changeChecked(e.target.checked)
  }, "Agree to the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      color: _model_model__WEBPACK_IMPORTED_MODULE_4__["UNIVERSAL_COLOR"]
    },
    target: '_blank',
    href: '/terms'
  }, "Terms of Services"))) : null, isModifyProfilePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "space-between",
    align: "middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_8__["BigBlackButton"], {
    type: "default",
    onClick: viewProfile
  }, "View Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_8__["BigBlackButton"], {
    htmlType: "submit"
  }, "Update Profile")))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (FormPersonalData);

/***/ }),

/***/ "./components/OnboardingFlow/EmployerDesigner.tsx":
/*!********************************************************!*\
  !*** ./components/OnboardingFlow/EmployerDesigner.tsx ***!
  \********************************************************/
/*! exports provided: Question, ContainerCard, RButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerCard", function() { return ContainerCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RButton", function() { return RButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/model */ "./model/model.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




const Question = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text).withConfig({
  displayName: "EmployerDesigner__Question",
  componentId: "sc-1jnupa2-0"
})(["font-family:'Mark Pro Bold';text-align:center;padding-bottom:46px;color:#000000;font-size:20px;"]);
const ContainerCard = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "EmployerDesigner__ContainerCard",
  componentId: "sc-1jnupa2-1"
})(["width:100%;height:100%;padding-top:50px;padding-bottom:50px;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
const RButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button).withConfig({
  displayName: "EmployerDesigner__RButton",
  componentId: "sc-1jnupa2-2"
})(["padding-top:23px;padding-bottom:50px;padding-left:68px;padding-right:68px;font-family:'Mark Pro Bold';font-size:20px;border-radius:0 0 0 0 !important;"]);

const EmployerDesigner = props => {
  const {
    changeNavbarStatus,
    currentStatus
  } = props;

  const onClick = status => {
    changeNavbarStatus(status);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Question, null, "Are you an employer or a designer?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
    buttonStyle: "solid",
    onChange: e => onClick(e.target.value),
    value: currentStatus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RButton, {
    style: {
      marginRight: 17
    },
    value: _model_model__WEBPACK_IMPORTED_MODULE_2__["NavBarStatus"].Employer
  }, "Employer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RButton, {
    value: _model_model__WEBPACK_IMPORTED_MODULE_2__["NavBarStatus"].Designer
  }, "Designer")));
};

/* harmony default export */ __webpack_exports__["default"] = (EmployerDesigner);

/***/ }),

/***/ "./components/OnboardingFlow/Employers/FormBusinessData.tsx":
/*!******************************************************************!*\
  !*** ./components/OnboardingFlow/Employers/FormBusinessData.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/model */ "./model/model.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _General_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../General/Loading */ "./components/General/Loading.tsx");
/* harmony import */ var _General_BigBlackButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../General/BigBlackButton */ "./components/General/BigBlackButton.tsx");
/* harmony import */ var _General_OpenPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../General/OpenPage */ "./components/General/OpenPage.tsx");
/* harmony import */ var _General_LocationAutocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../General/LocationAutocomplete */ "./components/General/LocationAutocomplete.tsx");









const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

const FormBusinessData = props => {
  const {
    changeCurrentUser,
    modifyProfile
  } = props;
  const {
    currentUser,
    changeUser,
    setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);
  const [checked, changeChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const isModifyProfilePage = modifyProfile !== undefined;

  if (currentUser == undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }

  const getRules = name => {
    return [{
      required: !isModifyProfilePage,
      message: !isModifyProfilePage ? `${name} is required` : ''
    }];
  };

  const onFinish = values => {
    if (!isModifyProfilePage && !checked) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('Please agree to the Terms of Service');
      return;
    }

    const newEmployer = {
      email: currentUser.email,
      id: currentUser.id,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      companyName: values.companyName,
      phoneNumber: values.phoneNumber,
      location: values.location
    };
    changeCurrentUser(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.pickBy(newEmployer, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.identity));

    if (isModifyProfilePage) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("Your profile has been updated");
    } else {
      Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_7__["default"])(setLoading, '/dashboard_employer');
    }
  };

  const onFinishFailed = () => {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('There was an error completing your account. Ensure every field is filled out.');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    id: "employer_form",
    name: "basic",
    initialValues: {
      remember: true
    },
    onFinish: onFinish,
    onFinishFailed: onFinishFailed
  }, !isModifyProfilePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Name",
    name: "firstName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: currentUser.firstName
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: currentUser.lastName
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Email",
    name: "email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: currentUser.email
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Company Name",
    name: "companyName",
    rules: getRules("Company Name")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: modifyProfile ? '' : currentUser.companyName || "",
    placeholder: "Company Name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Phone Number",
    name: "phoneNumber",
    rules: getRules("Phone Number")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: modifyProfile ? '' : currentUser.phoneNumber || "",
    placeholder: "+1 (555) 555-5555"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_LocationAutocomplete__WEBPACK_IMPORTED_MODULE_8__["LocationAutocomplete"], {
    isModifyProfilePage: isModifyProfilePage,
    defaultValue: isModifyProfilePage ? '' : currentUser.location || ""
  }), !isModifyProfilePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    valuePropName: 'checked'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    style: {
      fontFamily: 'Mark Pro'
    },
    checked: checked,
    onChange: e => changeChecked(e.target.checked)
  }, "Agree to the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      color: _model_model__WEBPACK_IMPORTED_MODULE_3__["UNIVERSAL_COLOR"]
    },
    target: '_blank',
    href: '/terms'
  }, "Terms of Service"))) : null, isModifyProfilePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "space-between",
    align: "middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_6__["BigBlackButton"], {
    style: {
      marginTop: 10
    },
    htmlType: "submit"
  }, isModifyProfilePage ? "Update Company Profile" : "Finish Setup"))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (FormBusinessData);

/***/ }),

/***/ "./components/OnboardingFlow/Onboard.tsx":
/*!***********************************************!*\
  !*** ./components/OnboardingFlow/Onboard.tsx ***!
  \***********************************************/
/*! exports provided: Onboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Onboard", function() { return Onboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OnboardNavbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnboardNavbar */ "./components/OnboardingFlow/OnboardNavbar.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/model */ "./model/model.tsx");
/* harmony import */ var _Designers_FormPersonalData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Designers/FormPersonalData */ "./components/OnboardingFlow/Designers/FormPersonalData.tsx");
/* harmony import */ var _Employers_FormBusinessData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Employers/FormBusinessData */ "./components/OnboardingFlow/Employers/FormBusinessData.tsx");
/* harmony import */ var _EmployerDesigner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EmployerDesigner */ "./components/OnboardingFlow/EmployerDesigner.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/server */ "./lib/server.tsx");
/* harmony import */ var _General_OpenPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../General/OpenPage */ "./components/General/OpenPage.tsx");
/* harmony import */ var _General_SumpixelCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../General/SumpixelCard */ "./components/General/SumpixelCard.tsx");
/* harmony import */ var _General_BackNext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../General/BackNext */ "./components/General/BackNext.tsx");














const FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Onboard__FormContainer",
  componentId: "sc-1kdj2hg-0"
})(["max-width:500px;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
const Onboard = props => {
  const [currentStep, changeStep] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [navBarStatus, changeNavbarStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Undecided);
  const {
    currentUser,
    changeUser,
    loading,
    setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_8__["UserContext"]);

  const updateUser = async updatedUser => {
    window.analytics.track('Create User');
    changeUser(updatedUser);
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_9__["createUser"])(updatedUser);
  };

  const updateEmployer = async updatedUser => {
    window.analytics.track('Create Employer');
    changeUser(updatedUser);
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_9__["createEmployer"])(updatedUser);
  };

  const backClick = () => {
    if (currentStep === 0) {
      props.deleteUser();
    } else {
      changeStep(currentStep - 1);
    }
  };

  const nextClick = () => {
    if (currentStep === 0 && navBarStatus === _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Undecided) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error('Please choose whether you are a designer or employer');
      return;
    } else if (currentStep === 0) {
      // Without timeout, it automatically calls Next submit
      setTimeout(() => {
        changeStep(currentStep + 1);
      }, 1);
    }
  };

  var currentForm;

  switch (currentStep) {
    case 0:
      currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmployerDesigner__WEBPACK_IMPORTED_MODULE_6__["default"], {
        currentStatus: navBarStatus,
        deleteUser: props.deleteUser,
        changeNavbarStatus: newStatus => changeNavbarStatus(newStatus)
      });
      break;

    case 1:
      if (navBarStatus == _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Designer) {
        currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmployerDesigner__WEBPACK_IMPORTED_MODULE_6__["ContainerCard"], {
          style: {
            paddingBottom: 0
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmployerDesigner__WEBPACK_IMPORTED_MODULE_6__["Question"], {
          style: {
            paddingBottom: 30
          }
        }, "Let's build your profile."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Designers_FormPersonalData__WEBPACK_IMPORTED_MODULE_4__["default"], {
          changeCurrentUser: async user => await updateUser(user)
        })));
      } else {
        currentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmployerDesigner__WEBPACK_IMPORTED_MODULE_6__["ContainerCard"], {
          style: {
            paddingBottom: 25
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmployerDesigner__WEBPACK_IMPORTED_MODULE_6__["Question"], null, "Let's build your profile."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Employers_FormBusinessData__WEBPACK_IMPORTED_MODULE_5__["default"], {
          changeCurrentUser: async user => await updateEmployer(user)
        })));
      }

      break;

    case 2:
      if (navBarStatus == _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Designer) {
        Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_10__["default"])(setLoading, '/dashboard_user');
      } else {
        Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_10__["default"])(setLoading, '/dashboard_employer');
      }

      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: 40
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    height: 50,
    src: __webpack_require__(/*! ../../assets/sumpixel-logo-white.png */ "./assets/sumpixel-logo-white.png")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_SumpixelCard__WEBPACK_IMPORTED_MODULE_11__["SumpixelCard"], {
    withLogo: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnboardNavbar__WEBPACK_IMPORTED_MODULE_1__["OnboardNavbar"], {
    currentStep: currentStep
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: 20
    }
  }, currentForm), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_BackNext__WEBPACK_IMPORTED_MODULE_12__["default"], {
    backClick: backClick,
    nextClick: nextClick,
    currentState: currentStep,
    status: navBarStatus
  }))));
};

/***/ }),

/***/ "./components/OnboardingFlow/OnboardNavbar.tsx":
/*!*****************************************************!*\
  !*** ./components/OnboardingFlow/OnboardNavbar.tsx ***!
  \*****************************************************/
/*! exports provided: OnboardNavbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardNavbar", function() { return OnboardNavbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);


const {
  Step
} = antd__WEBPACK_IMPORTED_MODULE_1__["Steps"];

const STEPS = ["Intro", "Build Profile", "Get Started"];
const OnboardNavbar = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Steps"], {
    style: {
      fontFamily: 'Mark Pro Bold',
      justifyContent: 'center',
      backgroundColor: 'rgba(229, 229, 229, 0.3)',
      paddingLeft: 80,
      paddingRight: 80,
      paddingTop: 40,
      paddingBottom: 40,
      fontSize: 20
    },
    current: props.currentStep
  }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(STEPS, step => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step, {
      title: step
    });
  }));
};

/***/ }),

/***/ "./lib/UserProvider.tsx":
/*!******************************!*\
  !*** ./lib/UserProvider.tsx ***!
  \******************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase */ "./lib/firebase.tsx");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server */ "./lib/server.tsx");
/* harmony import */ var _components_General_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/General/Loading */ "./components/General/Loading.tsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  currentUser: null,
  changeUser: () => {},
  loading: false,
  setLoading: () => {}
});

class UserProvider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "changeUser", newUser => {
      console.log('This is current: ' + newUser);
      this.setState({
        currentUser: newUser
      });
    });

    _defineProperty(this, "setLoading", newLoad => {
      this.setState({
        loading: newLoad
      });
    });

    _defineProperty(this, "state", {
      loading: false,
      currentUser: null,
      changeUser: this.changeUser,
      setLoading: this.setLoading
    });

    _defineProperty(this, "componentDidMount", () => {
      _firebase__WEBPACK_IMPORTED_MODULE_1__["myFirebase"].auth().onAuthStateChanged(async userAuth => {
        //this.setLoading(true)
        if (userAuth === null) {
          this.setLoading(false);
          return;
        }

        if (userAuth.isAnonymous) {
          console.log('userauth:' + userAuth);
          this.changeUser({
            firstName: '',
            lastName: '',
            email: '',
            id: userAuth.uid,
            isAnonymous: true
          });
          this.setLoading(false);
          return;
        } // This is some of the worst code I've ever made


        var current;

        try {
          current = await Object(_server__WEBPACK_IMPORTED_MODULE_2__["getUser"])(userAuth.uid);
        } catch (error) {
          try {
            current = await Object(_server__WEBPACK_IMPORTED_MODULE_2__["getEmployer"])(userAuth.uid);
            current["user_exists"] = false;
          } catch (error) {
            console.log("this better be a new user");
          }
        }

        if (current !== undefined && current['user_exists'] === undefined) {
          this.changeUser(current);
          window.analytics.identify(current.id, {
            name: current.name,
            email: current.email
          });
        } else if (current !== undefined && current['employer_exists'] === undefined) {
          this.changeUser(current);
          window.analytics.identify(current.id, {
            name: current.name,
            email: current.email
          });
        } else {
          if (userAuth.email === null && userAuth.isAnonymous === false) {
            // something's wrong
            _firebase__WEBPACK_IMPORTED_MODULE_1__["myFirebase"].auth().signOut();
            this.changeUser(undefined);
            this.setLoading(false);
            return;
          } // In process of making account


          this.changeUser({
            email: userAuth.email,
            id: userAuth.uid,
            firstName: userAuth.displayName.substr(0, userAuth.displayName.indexOf(' ')),
            lastName: userAuth.displayName.substr(userAuth.displayName.indexOf(' ') + 1)
          });
          this.setLoading(false);
        }
      });
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserContext.Provider, {
      value: this.state
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
      loading: this.state.loading
    }), this.props.children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserProvider);

/***/ }),

/***/ "./lib/firebase.tsx":
/*!**************************!*\
  !*** ./lib/firebase.tsx ***!
  \**************************/
/*! exports provided: myFirebase, storage_ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myFirebase", function() { return myFirebase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage_ref", function() { return storage_ref; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_2__);



const firebaseConfig = {
  apiKey: "AIzaSyAhADa1McBAdXoOmv4T32G7rSBQkATYJ3Q",
  authDomain: "sumpixel-auth.firebaseapp.com",
  databaseURL: "https://sumpixel-auth.firebaseio.com",
  projectId: "sumpixel-auth",
  storageBucket: "sumpixel-auth.appspot.com",
  messagingSenderId: "7190255367",
  appId: "1:7190255367:web:a39d3629fd5215cda2d7a2",
  measurementId: "G-2P5W47Z3HN"
}; // Initialize Firebase

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0__["apps"].length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](firebaseConfig);
}

const myFirebase = firebase_app__WEBPACK_IMPORTED_MODULE_0__;
const storage_ref = firebase_app__WEBPACK_IMPORTED_MODULE_0__["storage"]().ref();

/***/ }),

/***/ "./lib/server.tsx":
/*!************************!*\
  !*** ./lib/server.tsx ***!
  \************************/
/*! exports provided: getUser, getEmployer, removeUser, removeEmployer, createUser, modifyUser, createEmployer, modifyEmployer, createCommunication, updateDesignerDecision, updateEmployerDecision, getDesignCommunicationsList, getEmployerCommunicationsList, getGradedDesigners, getDesignerFromCommunication, getQAById, getUserIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployer", function() { return getEmployer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUser", function() { return removeUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEmployer", function() { return removeEmployer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyUser", function() { return modifyUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmployer", function() { return createEmployer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyEmployer", function() { return modifyEmployer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommunication", function() { return createCommunication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDesignerDecision", function() { return updateDesignerDecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEmployerDecision", function() { return updateEmployerDecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDesignCommunicationsList", function() { return getDesignCommunicationsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployerCommunicationsList", function() { return getEmployerCommunicationsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGradedDesigners", function() { return getGradedDesigners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDesignerFromCommunication", function() { return getDesignerFromCommunication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQAById", function() { return getQAById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserIds", function() { return getUserIds; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const SERVER_BASE = 'https://server.sumpixel.com/';
var HTTP_Requests;

(function (HTTP_Requests) {
  HTTP_Requests["GET"] = "GET";
  HTTP_Requests["POST"] = "POST";
  HTTP_Requests["PUT"] = "PUT";
})(HTTP_Requests || (HTTP_Requests = {}));

const request = async (url, params, method = HTTP_Requests.GET) => {
  var response;

  switch (method) {
    case HTTP_Requests.GET:
      response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(SERVER_BASE + url, {
        params: params
      });
      break;

    case HTTP_Requests.POST:
      response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(SERVER_BASE + url, params);
      break;

    case HTTP_Requests.PUT:
      response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(SERVER_BASE + url, params);
      break;
  }

  if (response.status !== 200) {
    return generateErrorResponse('The server responded with an unexpected status.');
  }

  const result = response.data;
  return result;
};

const generateErrorResponse = message => {
  return {
    status: 'error',
    message
  };
};

const getUser = async id => {
  return await request('get-user', {
    id: id
  });
};
const getEmployer = async id => {
  return await request('get-employer', {
    id: id
  });
};
const removeUser = async id => {
  return await request('remove-user', {
    id: id
  });
};
const removeEmployer = async id => {
  return await request('remove-employer', {
    id: id
  });
};
const createUser = async user => {
  return await request('create-user', user, HTTP_Requests.POST);
};
const modifyUser = async user => {
  return await request('modify-user', user, HTTP_Requests.POST);
};
const createEmployer = async employer => {
  return await request('create-employer', employer, HTTP_Requests.POST);
};
const modifyEmployer = async employer => {
  return await request('modify-employer', employer, HTTP_Requests.POST);
};
const createCommunication = async (designerId, employerId) => {
  return await request('create-new-communication', {
    designerId: designerId,
    employerId: employerId
  }, HTTP_Requests.POST);
};
const updateDesignerDecision = async (commId, decision) => {
  return await request('update-designer-decision', {
    id: commId,
    designerApprovedTalk: decision
  }, HTTP_Requests.POST);
};
const updateEmployerDecision = async (commId, decision) => {
  return await request('update-employer-decision', {
    id: commId,
    decision: decision
  }, HTTP_Requests.POST);
};
const getDesignCommunicationsList = async id => {
  return await request('get-all-designer-communications', {
    id
  });
};
const getEmployerCommunicationsList = async id => {
  return await request('get-all-employer-communications', {
    id
  });
};
const getGradedDesigners = async id => {
  return await request('get-graded-designers', {
    id
  });
};
const getDesignerFromCommunication = async id => {
  return await request('get-designer-from-communication', {
    id
  });
};
const getQAById = async id => {
  return await request('get_qa_by_id', {
    id
  });
};
const getUserIds = async () => {
  return await request('get_user_ids', {});
};

/***/ }),

/***/ "./model/model.tsx":
/*!*************************!*\
  !*** ./model/model.tsx ***!
  \*************************/
/*! exports provided: UNIVERSAL_COLOR, UNIVERSAL_BACKGROUND, PricingModel, EmployerDecisionHire, DesignerDecisionTalk, VisaStatus, NavBarStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIVERSAL_COLOR", function() { return UNIVERSAL_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIVERSAL_BACKGROUND", function() { return UNIVERSAL_BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingModel", function() { return PricingModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerDecisionHire", function() { return EmployerDecisionHire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignerDecisionTalk", function() { return DesignerDecisionTalk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisaStatus", function() { return VisaStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarStatus", function() { return NavBarStatus; });
const UNIVERSAL_COLOR = '#5E0BEF';
const UNIVERSAL_BACKGROUND = '#F7F9FB';
let PricingModel;

(function (PricingModel) {
  PricingModel["SMALL"] = "$75,000-100,000";
  PricingModel["MEDIUM"] = "$100,000-125,000";
  PricingModel["LARGE"] = "$125,000+";
})(PricingModel || (PricingModel = {}));

let EmployerDecisionHire;

(function (EmployerDecisionHire) {
  EmployerDecisionHire["REJECT"] = "REJECT";
  EmployerDecisionHire["HIRE"] = "HIRE";
  EmployerDecisionHire["UNDECIDED"] = "UNDECIDED";
})(EmployerDecisionHire || (EmployerDecisionHire = {}));

let DesignerDecisionTalk;

(function (DesignerDecisionTalk) {
  DesignerDecisionTalk["WILL_TALK"] = "WILL_TALK";
  DesignerDecisionTalk["WILL_NOT_TALK"] = "WILL_NOT_TALK";
  DesignerDecisionTalk["UNDECIDED"] = "UNDECIDED";
})(DesignerDecisionTalk || (DesignerDecisionTalk = {}));

let VisaStatus;

(function (VisaStatus) {
  VisaStatus["US_CITIZEN"] = "US Citizen/Green Card";
  VisaStatus["VISA_HOLDER"] = "US Visa Holder";
  VisaStatus["ELIGIBLE"] = "Eligible For US Visa";
  VisaStatus["NOT_ELIGIBLE"] = "Not Eligible for US Visa";
})(VisaStatus || (VisaStatus = {}));

let NavBarStatus;

(function (NavBarStatus) {
  NavBarStatus[NavBarStatus["Undecided"] = 0] = "Undecided";
  NavBarStatus[NavBarStatus["Employer"] = 1] = "Employer";
  NavBarStatus[NavBarStatus["Designer"] = 2] = "Designer";
})(NavBarStatus || (NavBarStatus = {}));

/***/ }),

/***/ "./pages/onboarding.tsx":
/*!******************************!*\
  !*** ./pages/onboarding.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _components_OnboardingFlow_Onboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/OnboardingFlow/Onboard */ "./components/OnboardingFlow/Onboard.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_General_OpenPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/General/OpenPage */ "./components/General/OpenPage.tsx");
/* harmony import */ var _components_Login_LoginFlowContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Login/LoginFlowContainer */ "./components/Login/LoginFlowContainer.tsx");








const Onboarding = props => {
  const {
    currentUser,
    changeUser,
    setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_3__["UserContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.analytics.page('Onboarding');
  }, []);

  const deleteUser = async () => {
    window.analytics.track('Go Back - Delete Firebase User');
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["myFirebase"].auth().currentUser.delete();
    changeUser(null);
    Object(_components_General_OpenPage__WEBPACK_IMPORTED_MODULE_5__["default"])(setLoading, '/signup');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Onboarding")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_LoginFlowContainer__WEBPACK_IMPORTED_MODULE_6__["LoginBackground"], {
    style: {
      alignItems: 'flex-start',
      paddingTop: 80,
      height: 'auto',
      minHeight: '100vh',
      paddingBottom: 65
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OnboardingFlow_Onboard__WEBPACK_IMPORTED_MODULE_2__["Onboard"], {
    deleteUser: deleteUser
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Onboarding);

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/onboarding.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/insanity/Documents/Sumpixel/sumpixel/client/pages/onboarding.tsx */"./pages/onboarding.tsx");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "antd-mask-input":
/*!**********************************!*\
  !*** external "antd-mask-input" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-mask-input");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-places-autocomplete":
/*!********************************************!*\
  !*** external "react-places-autocomplete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-places-autocomplete");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=onboarding.js.map