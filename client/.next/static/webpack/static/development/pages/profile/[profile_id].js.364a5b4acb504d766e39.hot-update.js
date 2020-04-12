webpackHotUpdate("static/development/pages/profile/[profile_id].js",{

/***/ "./components/Profile/TextAboveAnswer.tsx":
false,

/***/ "./pages/profile/[profile_id].tsx":
/*!****************************************!*\
  !*** ./pages/profile/[profile_id].tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Profile_SimpleNavigationBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Profile/SimpleNavigationBar */ "./components/Profile/SimpleNavigationBar.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_General_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/General/Loading */ "./components/General/Loading.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/server */ "./lib/server.tsx");
/* harmony import */ var _dashboard_employer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard_employer */ "./pages/dashboard_employer.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");










const NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div`

`;

const Profile = () => {
  const {
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_8__["UserContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  console.log(router.query);
  const {
    profile_id
  } = router.query;
  const [currentProfile, changeCurrentProfile] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [profileString, changeProfileString] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Profile');
  const showStats = currentUser !== null && currentUser.companyName !== undefined;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (profile_id === undefined) {
      return;
    }

    console.log(profile_id);
    Object(_lib_server__WEBPACK_IMPORTED_MODULE_5__["getUser"])(profile_id).then(profile => {
      profile['graded'] = undefined;
      profile['completedQuiz'] = undefined;
      profile['communications'] = undefined;

      if (showStats) {
        changeCurrentProfile(profile);
      } else {
        profile['grade'] = undefined;
        changeCurrentProfile(profile);
      }

      changeProfileString(profile.firstName + " " + profile.lastName);
      window.analytics.page(profileString);
    }).catch(error => {
      console.error(error);
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
    });
  }, [profile_id]);

  if (currentProfile === undefined || currentProfile === null) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, profileString)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_SimpleNavigationBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: profileString
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavContainer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dashboard_employer__WEBPACK_IMPORTED_MODULE_6__["Background"], {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Typography"].Text, null, "hello"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=[profile_id].js.364a5b4acb504d766e39.hot-update.js.map