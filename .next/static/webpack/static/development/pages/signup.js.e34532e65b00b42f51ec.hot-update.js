webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./lib/UserProvider.tsx":
/*!******************************!*\
  !*** ./lib/UserProvider.tsx ***!
  \******************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase */ "./lib/firebase.tsx");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server */ "./lib/server.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  currentUser: null,
  changeUser: () => {}
});

class UserProvider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "changeUser", newUser => {
      this.setState({
        user: newUser
      });
    });

    _defineProperty(this, "state", {
      user: null,
      changeUser: this.changeUser
    });

    _defineProperty(this, "componentDidMount", () => {
      _firebase__WEBPACK_IMPORTED_MODULE_1__["myFirebase"].auth().onAuthStateChanged(async userAuth => {
        console.log(userAuth);

        if (userAuth === null) {
          return;
        }

        const user = await Object(_server__WEBPACK_IMPORTED_MODULE_2__["getUser"])(userAuth.uid);
        const employer = await Object(_server__WEBPACK_IMPORTED_MODULE_2__["getEmployer"])(userAuth.uid);

        if (user['user_exists'] == undefined) {
          this.setState({
            user: user
          });
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/dashboard_user');
        } else if (employer['employer_exists'] == undefined) {
          this.setState({
            user: employer
          });
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/dashboard_employer');
        } else {
          // Works for both
          this.setState({
            user: {
              email: userAuth.email,
              id: userAuth.uid,
              firstName: userAuth.displayName.substr(0, userAuth.displayName.indexOf(' ')),
              lastName: userAuth.displayName.substr(userAuth.displayName.indexOf(' ') + 1)
            }
          });
        }
      });
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserContext.Provider, {
      value: this.state
    }, this.props.children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserProvider);

/***/ })

})
//# sourceMappingURL=signup.js.e34532e65b00b42f51ec.hot-update.js.map