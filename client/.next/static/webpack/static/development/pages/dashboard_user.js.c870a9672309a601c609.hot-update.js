webpackHotUpdate("static/development/pages/dashboard_user.js",{

/***/ "./pages/dashboard_user.tsx":
/*!**********************************!*\
  !*** ./pages/dashboard_user.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_General_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/General/Container */ "./components/General/Container.tsx");
/* harmony import */ var _components_Dashboard_NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dashboard/NavigationBar */ "./components/Dashboard/NavigationBar.tsx");
/* harmony import */ var _components_OnboardingFlow_Designers_FormPersonalData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/OnboardingFlow/Designers/FormPersonalData */ "./components/OnboardingFlow/Designers/FormPersonalData.tsx");
/* harmony import */ var _components_Dashboard_Designer_ViewCommunications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Dashboard/Designer/ViewCommunications */ "./components/Dashboard/Designer/ViewCommunications.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/server */ "./lib/server.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _dashboard_employer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard_employer */ "./pages/dashboard_employer.tsx");
/* harmony import */ var _components_General_OpenPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/General/OpenPage */ "./components/General/OpenPage.tsx");











const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];

const DashboardUser = props => {
  const {
    currentUser,
    changeUser,
    setLoading,
    loading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_6__["UserContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.analytics.page('Designer Dashboard');
    setTimeout(() => {
      console.log('loadin' + loading);

      if (currentUser === undefined || currentUser === null) {
        Object(_components_General_OpenPage__WEBPACK_IMPORTED_MODULE_10__["default"])(setLoading, '/');
      }
    }, 3000);
  }, []);

  const updateUser = async updatedUser => {
    window.analytics.track('Modify Designer');
    changeUser(updatedUser);
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_7__["modifyUser"])(updatedUser);
  };

  if (currentUser === undefined || currentUser === null) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Designer Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard_NavigationBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isDesigner: true,
    subtitle: `${currentUser.firstName}'s Dashboard`,
    footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
      defaultActiveKey: "1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
      tab: "Communications",
      key: "1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dashboard_employer__WEBPACK_IMPORTED_MODULE_9__["Background"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Container__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      isDashboard: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard_Designer_ViewCommunications__WEBPACK_IMPORTED_MODULE_5__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
      tab: "Modify Profile",
      key: "2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dashboard_employer__WEBPACK_IMPORTED_MODULE_9__["Background"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'flex',
        padding: 40,
        justifyContent: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OnboardingFlow_Designers_FormPersonalData__WEBPACK_IMPORTED_MODULE_4__["default"], {
      changeCurrentUser: updateUser,
      modifyProfile: true
    })))))
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardUser);

/***/ })

})
//# sourceMappingURL=dashboard_user.js.c870a9672309a601c609.hot-update.js.map