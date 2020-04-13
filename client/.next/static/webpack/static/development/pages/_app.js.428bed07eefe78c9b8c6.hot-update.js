webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _components_General_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/General/Loading */ "./components/General/Loading.tsx");
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
        currentUser: newUser
      });
    });

    _defineProperty(this, "state", {
      loading: false,
      currentUser: null,
      changeUser: this.changeUser
    });

    _defineProperty(this, "componentDidMount", () => {
      _firebase__WEBPACK_IMPORTED_MODULE_1__["myFirebase"].auth().onAuthStateChanged(async userAuth => {
        this.setState({
          loading: true
        });

        if (userAuth === null) {
          this.setState({
            loading: false
          });
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
          this.setState({
            loading: false
          });
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
          setTimeout(() => {
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/dashboard_user').then(() => {
              this.setState({
                loading: false
              });
            });
          }, 500);
        } else if (current !== undefined && current['employer_exists'] === undefined) {
          window.analytics.identify(current.id, {
            name: current.name,
            email: current.email
          });
          this.changeUser(current);

          if (next_router__WEBPACK_IMPORTED_MODULE_3___default.a.router.route === '/' || next_router__WEBPACK_IMPORTED_MODULE_3___default.a.router.route === '/signup') {
            setTimeout(() => {
              next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/dashboard_employer').then(() => {
                this.setState({
                  loading: false
                });
              });
            }, 500);
          }
        } else {
          // TODO: Find alternate way to wait until names are updated
          // Works for both
          setTimeout(() => {
            if (userAuth.email === null && userAuth.isAnonymous === false) {
              // something's wrong
              _firebase__WEBPACK_IMPORTED_MODULE_1__["myFirebase"].auth().signOut();
              this.changeUser(undefined);
              return;
            }

            this.changeUser({
              email: userAuth.email,
              id: userAuth.uid,
              firstName: userAuth.displayName.substr(0, userAuth.displayName.indexOf(' ')),
              lastName: userAuth.displayName.substr(userAuth.displayName.indexOf(' ') + 1)
            });
          }, 500);
        }
      });
    });
  }

  render() {
    if (this.state.loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserContext.Provider, {
      value: this.state
    }, this.props.children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserProvider);

/***/ })

})
//# sourceMappingURL=_app.js.428bed07eefe78c9b8c6.hot-update.js.map