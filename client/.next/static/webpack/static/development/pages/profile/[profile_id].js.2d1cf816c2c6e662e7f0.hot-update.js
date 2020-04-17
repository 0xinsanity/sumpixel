webpackHotUpdate("static/development/pages/profile/[profile_id].js",{

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
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/server */ "./lib/server.tsx");
/* harmony import */ var _dashboard_employer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard_employer */ "./pages/dashboard_employer.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Profile/TextAboveAnswer */ "./components/Profile/TextAboveAnswer.tsx");
/* harmony import */ var _components_Profile_Socials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Profile/Socials */ "./components/Profile/Socials.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _components_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/General/BigBlackButton */ "./components/General/BigBlackButton.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_General_OpenPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/General/OpenPage */ "./components/General/OpenPage.tsx");















const TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "profile_id__TextContainer",
  componentId: "sc-1cojqhm-0"
})(["display:flex;flex-direction:row;width:75%;justify-content:space-between;padding-top:15px;padding-bottom:40px;"]);
const UpperFullContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "profile_id__UpperFullContainer",
  componentId: "sc-1cojqhm-1"
})(["display:flex;flex-direction:row;width:100%;justify-content:space-between;align-items:center;padding-right:40px;"]);
const HeaderTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Title).withConfig({
  displayName: "profile_id__HeaderTitle",
  componentId: "sc-1cojqhm-2"
})(["font-family:'Mark Pro Bold';padding-bottom:20px;"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "profile_id__Section",
  componentId: "sc-1cojqhm-3"
})(["padding-bottom:52px;"]);

const Profile = () => {
  const {
    currentUser,
    changeUser,
    setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_7__["UserContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    profile_id
  } = router.query;
  const [id, changeId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [currentProfile, changeCurrentProfile] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [profileString, changeProfileString] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Profile');
  const [qAndA, changeQandA] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [profileLink, changeProfileLink] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  let showStats = currentUser !== null && currentUser.companyName !== undefined;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (profile_id !== undefined) {
      console.log('id' + profile_id);
      changeId(profile_id);
    }
  }, [profile_id]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (id === undefined) return;
    setLoading(true);
    console.log('here1');
    Object(_lib_server__WEBPACK_IMPORTED_MODULE_4__["getUser"])(id).then(profile => {
      console.log('here');
      Object(_lib_server__WEBPACK_IMPORTED_MODULE_4__["getQAById"])(id).then(qAndA => {
        changeQandA(qAndA);
      });
      _lib_firebase__WEBPACK_IMPORTED_MODULE_11__["storage_ref"].child('profilePic/' + profile.profilePic).getDownloadURL().then(url => {
        changeProfileLink(url);
      }).catch(error => {
        console.error(error);
      });
      showStats = showStats && profile['graded'];

      if (showStats) {
        changeCurrentProfile(profile);
      } else {
        changeCurrentProfile(profile);
      }

      changeProfileString(profile.firstName + " " + profile.lastName);
      setLoading(false);
      window.analytics.page(profileString);
    }).catch(error => {
      console.error('ERROR IS HERE' + error);
      setLoading(false); //OpenPage(setLoading, '/')
    });
  }, [id]);

  const downloadResume = () => {
    _lib_firebase__WEBPACK_IMPORTED_MODULE_11__["storage_ref"].child('resumes/' + currentProfile.resume).getDownloadURL().then(url => {
      console.log(url);
      window.open(url, '_blank');
    }).catch(error => {
      console.error(error);
    });
  };

  const connectWithPerson = async () => {
    if (showStats) {
      // TODO: Block employer from pressing connect with designer more than once
      const communications = await Promise.all(lodash__WEBPACK_IMPORTED_MODULE_13___default.a.map(currentUser.communications, async commId => await Object(_lib_server__WEBPACK_IMPORTED_MODULE_4__["getDesignerFromCommunication"])(commId)));

      if (lodash__WEBPACK_IMPORTED_MODULE_13___default.a.findIndex(communications, comm => comm.id === profile_id) !== -1) {
        antd__WEBPACK_IMPORTED_MODULE_6__["message"].info('You have already opened communications with ' + profileString);
        return;
      }

      window.analytics.track(currentUser.companyName + ' connects to designer');
      const comm = await Object(_lib_server__WEBPACK_IMPORTED_MODULE_4__["createCommunication"])(profile_id, currentUser.id);
      const newUser = { ...currentUser,
        communications: [...currentUser.communications, comm.id]
      };
      changeUser(newUser);
      Object(_components_General_OpenPage__WEBPACK_IMPORTED_MODULE_14__["default"])(setLoading, '/dashboard_employer');
    } else if (currentUser === null || currentUser.isAnonymous) {
      // Not logged in
      Object(_components_General_OpenPage__WEBPACK_IMPORTED_MODULE_14__["default"])(setLoading, '/signup');
    } else {
      // Designer logged in
      antd__WEBPACK_IMPORTED_MODULE_6__["message"].info('Only Employers can connect with available Designers');
    }
  };

  if (currentProfile === undefined || currentProfile === null) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, profileString)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_SimpleNavigationBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: profileString,
    avatarSrc: profileLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UpperFullContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    above: 'Desired Salary',
    below: currentProfile.salary
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    above: 'Preferred Role',
    below: currentProfile.preferredRole
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    above: 'Quiz',
    below: currentProfile.designType
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    above: 'Portfolio',
    link: currentProfile.portfolio,
    below: 'Website'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    above: 'Resume',
    onClick: downloadResume,
    below: 'Download'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    above: 'Visa Status',
    below: currentProfile.visa
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_Socials__WEBPACK_IMPORTED_MODULE_9__["default"], {
    linkedin: currentProfile.linkedin,
    dribbble: currentProfile.dribbble
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_12__["BigBlackButton"], {
    style: {
      height: 50
    },
    onClick: connectWithPerson
  }, currentUser === null || currentUser.isAnonymous ? 'Sign Up To ' : null, "Connect")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dashboard_employer__WEBPACK_IMPORTED_MODULE_5__["Background"], {
    style: {
      height: '100%',
      padding: 64
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    span: 24
  }, currentProfile.completedQuiz ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, showStats ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderTitle, {
    level: 3
  }, "Feedback"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      paddingBottom: 32
    },
    above: 'Score',
    below: currentProfile.grade.score + '/10'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    belowTextStyle: {
      maxWidth: 'max-content'
    },
    above: 'Response',
    below: currentProfile.grade.response
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderTitle, {
    level: 3
  }, "Questions"), lodash__WEBPACK_IMPORTED_MODULE_13___default.a.map(qAndA, ({
    question,
    answer
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      style: {
        paddingBottom: 32
      },
      belowTextStyle: {
        maxWidth: 'max-content'
      },
      above: question,
      below: answer
    });
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderTitle, {
    style: {
      paddingBottom: 0
    },
    level: 3
  }, "Quiz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Text, null, "This user has not completed their quiz yet.")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=[profile_id].js.2d1cf816c2c6e662e7f0.hot-update.js.map