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
/*! exports provided: didCompleteQuiz, getUser, removeUser, createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "didCompleteQuiz", function() { return didCompleteQuiz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUser", function() { return removeUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const SERVER_BASE = 'https://sumpixel-server.herokuapp.com/';
var HTTP_Requests;

(function (HTTP_Requests) {
  HTTP_Requests["GET"] = "GET";
  HTTP_Requests["POST"] = "POST";
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
  }

  if (response.status !== 200) {
    return generateErrorResponse('The server responded with an unexpected status.');
  }

  const result = response.data;
  return result;
};

const objectToQueryString = obj => {
  return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
};

const generateErrorResponse = message => {
  return {
    status: 'error',
    message
  };
};

const didCompleteQuiz = async id => {
  return await request('user-finished-quiz', {
    id: id
  });
};
const getUser = async id => {
  return await request('get-user', {
    id: id
  });
};
const removeUser = async id => {
  return await request('remove-user', {
    id: id
  });
};
const createUser = async user => {
  return await request('create-user', user, HTTP_Requests.POST);
};

/***/ }),

/***/ "./pages/dashboard_user.tsx":
/*!**********************************!*\
  !*** ./pages/dashboard_user.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/server */ "./lib/server.tsx");






const DashboardUser = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function findUser() {
      console.log(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().currentUser.uid);
      const user = await Object(_lib_server__WEBPACK_IMPORTED_MODULE_4__["getUser"])(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().currentUser.uid);

      if (user['user_exists'] === undefined) {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/');
      }
    }

    const firebaseUser = _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().currentUser;

    if (firebaseUser !== null) {
      findUser();
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/');
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title, null, "Hello, welcome to the designer dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: async () => {
      await _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().signOut();
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/');
    }
  }, "Logout"));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardUser);

/***/ }),

/***/ 4:
/*!****************************************!*\
  !*** multi ./pages/dashboard_user.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/insanity/Documents/personalprojects/sumpixel-client/pages/dashboard_user.tsx */"./pages/dashboard_user.tsx");


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

/***/ })

/******/ });
//# sourceMappingURL=dashboard_user.js.map