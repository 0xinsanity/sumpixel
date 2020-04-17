webpackHotUpdate("static/development/pages/profile/[profile_id].js",{

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
/* harmony import */ var _components_General_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/General/Container */ "./components/General/Container.tsx");
/* harmony import */ var _components_Dashboard_NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dashboard/NavigationBar */ "./components/Dashboard/NavigationBar.tsx");
/* harmony import */ var _components_OnboardingFlow_Employers_FormBusinessData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/OnboardingFlow/Employers/FormBusinessData */ "./components/OnboardingFlow/Employers/FormBusinessData.tsx");
/* harmony import */ var _components_Dashboard_Employer_FindDesigners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Dashboard/Employer/FindDesigners */ "./components/Dashboard/Employer/FindDesigners.tsx");
/* harmony import */ var _components_Dashboard_Employer_ManageCommunications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Dashboard/Employer/ManageCommunications */ "./components/Dashboard/Employer/ManageCommunications.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/model */ "./model/model.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/server */ "./lib/server.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_General_OpenPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/General/OpenPage */ "./components/General/OpenPage.tsx");
















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
const Background = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "dashboard_employer__Background",
  componentId: "sc-1yrkndj-0"
})(["background-color:", ";width:100%;flex-direction:column;flex:1;justify-content:center;align-items:center;overflow:scroll;"], _model_model__WEBPACK_IMPORTED_MODULE_8__["UNIVERSAL_BACKGROUND"]);

const DashboardEmployer = props => {
  const {
    currentUser,
    changeUser,
    setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_7__["UserContext"]);
  const {
    asPath,
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  const [isAnonymousHere, setAnonymous] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // This is done to access isAnonymous value within timeout

  const anon = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(isAnonymousHere);
  anon.current = isAnonymousHere;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.analytics.page('Employer Dashboard');
    setTimeout(() => {
      // currentUser not updated so have to resort to custom state to prevent going back
      if (!anon.current && (currentUser === null || currentUser === undefined)) {
        Object(_components_General_OpenPage__WEBPACK_IMPORTED_MODULE_15__["default"])(setLoading, '/');
      }
    }, 3000);

    const anonymousLogin = async () => {
      console.log(asPath.substr(asPath.indexOf('=') + 1));
      console.log(query.id);

      if (asPath.substr(asPath.indexOf('=') + 1) === "60fff552-280b-47ae-b632-25a744a7a910") {
        console.log('gets here');
        console.log(asPath.substr(asPath.indexOf('=') + 1));
        _lib_firebase__WEBPACK_IMPORTED_MODULE_13__["myFirebase"].auth().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_14___default.a.auth.Auth.Persistence.NONE);
        _lib_firebase__WEBPACK_IMPORTED_MODULE_13__["myFirebase"].auth().signInAnonymously().then(() => {
          console.log('currentuser ' + currentUser);
          setAnonymous(true);
          console.log('signed in anon');
        });
      }
    };

    anonymousLogin();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (currentUser !== null && currentUser !== undefined) {
      setLoading(false);
    }
  }, [currentUser]);

  if (currentUser === null || currentUser === undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  const updateEmployer = async updatedUser => {
    window.analytics.track('Modify Employer');
    changeUser(updatedUser);
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_9__["modifyEmployer"])(updatedUser);
  };

  const isAnonymous = currentUser !== null && currentUser.isAnonymous !== undefined;
  console.log('anon: ' + isAnonymous);
  var footer;

  if (isAnonymous) {
    footer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
      tabBarGutter: 40,
      defaultActiveKey: "1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
      tab: TabObjs[0].name,
      key: TabObjs[0].key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Background, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Container__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      isDashboard: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard_Employer_FindDesigners__WEBPACK_IMPORTED_MODULE_5__["default"], null)))));
  } else {
    footer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
      tabBarGutter: 40,
      defaultActiveKey: "1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
      tab: TabObjs[0].name,
      key: TabObjs[0].key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Background, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Container__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      isDashboard: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard_Employer_FindDesigners__WEBPACK_IMPORTED_MODULE_5__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
      tab: TabObjs[1].name,
      key: TabObjs[1].key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Background, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Container__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      isDashboard: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard_Employer_ManageCommunications__WEBPACK_IMPORTED_MODULE_6__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
      tab: TabObjs[2].name,
      key: TabObjs[2].key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Background, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'flex',
        padding: 40,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OnboardingFlow_Employers_FormBusinessData__WEBPACK_IMPORTED_MODULE_4__["default"], {
      changeCurrentUser: updateEmployer,
      modifyProfile: true
    })))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Employer Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard_NavigationBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isDesigner: false,
    subtitle: isAnonymous ? 'Dashboard' : `${currentUser.firstName}'s Dashboard`,
    footer: footer
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardEmployer);

/***/ })

})
//# sourceMappingURL=[profile_id].js.9c58d09b88f0bb181822.hot-update.js.map