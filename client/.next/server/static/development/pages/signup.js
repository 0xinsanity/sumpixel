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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/sumpixel-logo.png":
/*!**********************************!*\
  !*** ./assets/sumpixel-logo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sumpixel-logo-a3c23479ee4c195d2c8c3492a1819eed.png";

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

/***/ "./components/Login/LoginComponent.tsx":
/*!*********************************************!*\
  !*** ./components/Login/LoginComponent.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _General_BigBlackButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../General/BigBlackButton */ "./components/General/BigBlackButton.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _General_SumpixelCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../General/SumpixelCard */ "./components/General/SumpixelCard.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _General_OpenPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../General/OpenPage */ "./components/General/OpenPage.tsx");








const BottomText = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd__WEBPACK_IMPORTED_MODULE_0__["Typography"].Text).withConfig({
  displayName: "LoginComponent__BottomText",
  componentId: "sc-48lh5z-0"
})(["font-family:'Mark Pro';font-weight:500;padding-top:10;text-align:center;"]);

const LoginComponent = props => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_6__["UserContext"]);
  const {
    isSignUp,
    onFinish,
    title
  } = props;

  const onClick = () => {
    if (isSignUp) {
      window.analytics.track('Go to Log In');
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/');
    } else {
      window.analytics.track('Go to Sign Up');
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/signup');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_General_SumpixelCard__WEBPACK_IMPORTED_MODULE_5__["SumpixelCard"], {
    style: {
      maxWidth: 450
    },
    withLink: isSignUp
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    hideRequiredMark: true,
    name: "basic",
    initialValues: {
      remember: true
    },
    onFinish: onFinish
  }, isSignUp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    label: "First Name",
    name: "firstName",
    rules: [{
      required: true,
      message: 'First Name is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    placeholder: "First Name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    label: "Last Name",
    name: "lastName",
    rules: [{
      required: true,
      message: 'Last Name is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    placeholder: "Last Name"
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    label: "Email",
    name: "email",
    rules: [{
      required: true,
      message: 'Email is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    placeholder: "Email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    style: {
      marginBottom: 0
    },
    label: "Password",
    name: "password",
    rules: [{
      required: true,
      message: 'Password is required'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    type: "password",
    placeholder: "Password"
  })), !isSignUp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    style: {
      fontFamily: 'Mark Pro',
      color: "#000000",
      opacity: "0.5",
      textAlign: "right",
      fontSize: "12px",
      padding: "0"
    },
    onClick: () => {
      Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_7__["default"])(context.setLoading, '/forgotpassword');
    },
    type: "link"
  }, "Forgot Password.")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_3__["BigBlackButton"], {
    style: {
      width: '60%',
      marginTop: 60
    },
    type: "primary",
    htmlType: "submit"
  }, title))))), !isSignUp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BottomText, null, "Don't have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: onClick,
    style: {
      padding: 0,
      fontWeight: 'bold'
    },
    type: "link"
  }, "Sign Up.")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BottomText, null, "Already have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: onClick,
    style: {
      padding: 0,
      fontWeight: 'bold'
    },
    type: "link"
  }, "Log In.")));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginComponent);

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
/*! exports provided: getUser, getEmployer, removeUser, removeEmployer, createUser, modifyUser, createEmployer, modifyEmployer, createCommunication, updateDesignerDecision, updateEmployerDecision, getDesignCommunicationsList, getEmployerCommunicationsList, getGradedDesigners, getDesignerFromCommunication, getQAById */
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

/***/ "./pages/signup.tsx":
/*!**************************!*\
  !*** ./pages/signup.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Login_LoginComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Login/LoginComponent */ "./components/Login/LoginComponent.tsx");
/* harmony import */ var _components_Login_LoginFlowContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Login/LoginFlowContainer */ "./components/Login/LoginFlowContainer.tsx");
/* harmony import */ var _components_General_OpenPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/General/OpenPage */ "./components/General/OpenPage.tsx");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);










const SignUp = props => {
  const {
    currentUser,
    setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_3__["UserContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_8___default.a.auth.Auth.Persistence.LOCAL);

    if (currentUser !== undefined && currentUser !== null) {
      Object(_components_General_OpenPage__WEBPACK_IMPORTED_MODULE_7__["default"])(setLoading, '/onboarding');
    }
  }, [currentUser]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.analytics.page('Signup');
  }, []);

  const onFinish = values => {
    setLoading(true);
    _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().createUserWithEmailAndPassword(values.email, values.password).then(() => {
      const displayName = `${values.firstName} ${values.lastName}`;
      _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().currentUser.updateProfile({
        displayName: displayName
      }).then(() => {
        // Delays are necessary to ensure display name is updated correctly
        setTimeout(() => {
          window.analytics.track('Firebase Auth Signup');
          Object(_components_General_OpenPage__WEBPACK_IMPORTED_MODULE_7__["default"])(setLoading, '/onboarding');
        }, 1000);
      });
    }).catch(error => {
      setLoading(false);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(error.message);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Sign Up")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_LoginFlowContainer__WEBPACK_IMPORTED_MODULE_6__["LoginBackground"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_LoginComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isSignUp: true,
    title: "Sign Up",
    onFinish: onFinish
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/signup.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/insanity/Documents/Sumpixel/sumpixel/client/pages/signup.tsx */"./pages/signup.tsx");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map