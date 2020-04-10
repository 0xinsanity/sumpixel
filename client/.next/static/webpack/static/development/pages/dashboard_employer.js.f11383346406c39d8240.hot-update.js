webpackHotUpdate("static/development/pages/dashboard_employer.js",{

/***/ "./components/Dashboard/NavigationBar.tsx":
/*!************************************************!*\
  !*** ./components/Dashboard/NavigationBar.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _General_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../General/Loading */ "./components/General/Loading.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");







const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];
const SumpixelHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["PageHeader"]).withConfig({
  displayName: "NavigationBar__SumpixelHeader",
  componentId: "sc-14u4r04-0"
})(["background:#DAE2EF;padding:30px 8%;min-height:100vh;"]);
const LogoutButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "NavigationBar__LogoutButton",
  componentId: "sc-14u4r04-1"
})(["color:#000000;padding-top:10px;"]);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "NavigationBar__Line",
  componentId: "sc-14u4r04-2"
})(["border:0.5px solid #000000;margin-top:10px;margin-bottom:10px;"]);
const SubTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title).withConfig({
  displayName: "NavigationBar__SubTitle",
  componentId: "sc-14u4r04-3"
})(["font-family:'Mark Pro Bold';padding-top:20px;padding-bottom:10px;"]);

const NavigationBar = props => {
  const {
    subtitle,
    footer,
    isDesigner
  } = props;
  const {
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_5__["UserContext"]);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SumpixelHeader, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: isDesigner ? '/dashboard_user' : '/dashboard_employer'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      height: 43,
      src: __webpack_require__(/*! ../../assets/sumpixel-logo.png */ "./assets/sumpixel-logo.png")
    })),
    extra: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoutButton, {
      type: "link",
      onClick: async () => {
        _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().signOut().then(() => {
          changeUser(undefined);
          setLoading(false);

          if (currentUser.isAnonymous !== undefined) {
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/signup');
          } else {
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/');
          }
        }).catch(error => {
          antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(error.message);
        });
      }
    }, currentUser.isAnonymous === undefined ? 'Log Out' : 'Create Account To Start Connecting With Designers')],
    footer: footer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, null, subtitle));
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

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
        currentUser: newUser,
        loading: false
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
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/dashboard_user');
        } else if (current !== undefined && current['employer_exists'] === undefined) {
          window.analytics.identify(current.id, {
            name: current.name,
            email: current.email
          });
          this.changeUser(current);
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/dashboard_employer');
        } else {
          // TODO: Find alternate way to wait until names are updated
          // Works for both
          setTimeout(() => {
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

/***/ }),

/***/ "./pages/dashboard_employer.tsx":
/*!**************************************!*\
  !*** ./pages/dashboard_employer.tsx ***!
  \**************************************/
/*! exports provided: Background, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_General_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/General/Loading */ "./components/General/Loading.tsx");
/* harmony import */ var _components_General_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/General/Container */ "./components/General/Container.tsx");
/* harmony import */ var _components_Dashboard_NavigationBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Dashboard/NavigationBar */ "./components/Dashboard/NavigationBar.tsx");
/* harmony import */ var _components_OnboardingFlow_Employers_FormBusinessData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/OnboardingFlow/Employers/FormBusinessData */ "./components/OnboardingFlow/Employers/FormBusinessData.tsx");
/* harmony import */ var _components_Dashboard_Employer_FindDesigners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Dashboard/Employer/FindDesigners */ "./components/Dashboard/Employer/FindDesigners.tsx");
/* harmony import */ var _components_Dashboard_Employer_ManageCommunications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Dashboard/Employer/ManageCommunications */ "./components/Dashboard/Employer/ManageCommunications.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/model */ "./model/model.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/server */ "./lib/server.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");















const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];
const TabObjs = [{
  name: "Designers",
  key: "1"
}, {
  name: "Communications",
  key: "2"
}, {
  name: "Profile",
  key: "3"
}];
const Background = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "dashboard_employer__Background",
  componentId: "sc-1yrkndj-0"
})(["background-color:", ";width:100%;overflow:scroll;"], _model_model__WEBPACK_IMPORTED_MODULE_9__["UNIVERSAL_BACKGROUND"]);

const DashboardEmployer = props => {
  const {
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_8__["UserContext"]);
  const {
    asPath,
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();

  if (query.id === "60fff552-280b-47ae-b632-25a744a7a910" && currentUser === null) {
    console.log('gets here');
    _lib_firebase__WEBPACK_IMPORTED_MODULE_14__["myFirebase"].auth().signInAnonymously();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.analytics.page('Employer Dashboard');
  }, []);

  const updateEmployer = async updatedUser => {
    window.analytics.track('Modify Employer');
    changeUser(updatedUser);
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_10__["modifyEmployer"])(updatedUser);
  };

  if (currentUser === undefined || currentUser === null) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  }

  var footer;

  if (currentUser.isAnonymous !== undefined) {
    footer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
      tabBarGutter: 40,
      defaultActiveKey: "1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
      tab: TabObjs[0].name,
      key: TabObjs[0].key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Background, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Container__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      isDashboard: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard_Employer_FindDesigners__WEBPACK_IMPORTED_MODULE_6__["default"], null)))));
  } else {
    footer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
      tabBarGutter: 40,
      defaultActiveKey: "1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
      tab: TabObjs[0].name,
      key: TabObjs[0].key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Background, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Container__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      isDashboard: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard_Employer_FindDesigners__WEBPACK_IMPORTED_MODULE_6__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
      tab: TabObjs[1].name,
      key: TabObjs[1].key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Background, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Container__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      isDashboard: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard_Employer_ManageCommunications__WEBPACK_IMPORTED_MODULE_7__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
      tab: TabObjs[2].name,
      key: TabObjs[2].key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Background, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'flex',
        padding: 40,
        justifyContent: 'left'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OnboardingFlow_Employers_FormBusinessData__WEBPACK_IMPORTED_MODULE_5__["default"], {
      changeCurrentUser: updateEmployer,
      modifyProfile: true
    })))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Employer Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard_NavigationBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isDesigner: false,
    subtitle: currentUser.isAnonymous === undefined ? `${currentUser.firstName}'s Dashboard` : 'Temporary Dashboard',
    footer: footer
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardEmployer);

/***/ })

})
//# sourceMappingURL=dashboard_employer.js.f11383346406c39d8240.hot-update.js.map