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
/* harmony import */ var _components_General_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/General/Loading */ "./components/General/Loading.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/server */ "./lib/server.tsx");
/* harmony import */ var _dashboard_employer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard_employer */ "./pages/dashboard_employer.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Profile/TextAboveAnswer */ "./components/Profile/TextAboveAnswer.tsx");
/* harmony import */ var _components_Profile_Socials__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Profile/Socials */ "./components/Profile/Socials.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _components_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/General/BigBlackButton */ "./components/General/BigBlackButton.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);















const TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div`
    display: flex;
    flex-direction: row;
    width: 75%;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 40px;
`;
const UpperFullContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-right: 40px;
`;
const HeaderTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(antd__WEBPACK_IMPORTED_MODULE_7__["Typography"].Title)`
    font-family: 'Mark Pro Bold';
    padding-bottom: 20px;
`;
const Section = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div`
    padding-bottom: 52px;
`;

const Profile = () => {
  const {
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_8__["UserContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    profile_id
  } = router.query;
  const [currentProfile, changeCurrentProfile] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [profileString, changeProfileString] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Profile');
  const [qAndA, changeQandA] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  let showStats = currentUser !== null && currentUser.companyName !== undefined;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (profile_id === undefined) {
      return;
    }

    Object(_lib_server__WEBPACK_IMPORTED_MODULE_5__["getUser"])(profile_id).then(profile => {
      Object(_lib_server__WEBPACK_IMPORTED_MODULE_5__["getQAById"])(profile_id).then(qAndA => {
        changeQandA(qAndA);
      });
      showStats = showStats && profile['graded'];
      profile['graded'] = undefined;
      profile['completedQuiz'] = undefined;
      profile['communications'] = undefined;
      profile['id'] = undefined;

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

  const downloadResume = () => {
    _lib_firebase__WEBPACK_IMPORTED_MODULE_12__["storage_ref"].child('resumes/' + currentProfile.resume).getDownloadURL().then(url => {
      console.log(url);
      window.open(url, '_blank');
    }).catch(error => {
      console.error(error);
    });
  };

  const connectWithPerson = async () => {
    if (showStats) {
      window.analytics.track(currentUser.companyName + ' connects to designer');
      const comm = await Object(_lib_server__WEBPACK_IMPORTED_MODULE_5__["createCommunication"])(profile_id, currentUser.id);
      const newUser = { ...currentUser,
        communications: [...currentUser.communications, comm.id]
      };
      changeUser(newUser);
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/dashboard_employer');
    } else if (currentUser === null || currentUser.isAnonymous) {
      // Not logged in
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/signup');
    } else {
      // Designer logged in
      antd__WEBPACK_IMPORTED_MODULE_7__["message"].info('Only Employers can connect with available Designers');
    }
  };

  if (currentProfile === undefined || currentProfile === null) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, profileString)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_SimpleNavigationBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: profileString
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UpperFullContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    above: 'Desired Salary',
    below: currentProfile.salary
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    above: 'Preferred Role',
    below: currentProfile.preferredRole
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    above: 'Quiz',
    below: currentProfile.designType
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    above: 'Portfolio',
    link: currentProfile.portfolio,
    below: 'Website'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    above: 'Resume',
    onClick: downloadResume,
    below: 'Download'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    above: 'Visa Status',
    below: currentProfile.visa
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_Socials__WEBPACK_IMPORTED_MODULE_10__["default"], {
    linkedin: currentProfile.linkedin,
    dribbble: currentProfile.dribbble
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_13__["BigBlackButton"], {
    style: {
      height: 50
    },
    onClick: connectWithPerson
  }, currentUser === null || currentUser.isAnonymous ? 'Sign Up To' : null, " Connect")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dashboard_employer__WEBPACK_IMPORTED_MODULE_6__["Background"], {
    style: {
      height: '100%',
      padding: 64
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    span: 11
  }, showStats ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderTitle, {
    level: 3
  }, "Feedback"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      paddingBottom: 32
    },
    above: 'Score',
    below: currentProfile.grade.score + '/10'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, "Questions"), lodash__WEBPACK_IMPORTED_MODULE_14___default.a.map(qAndA, ({
    question,
    answer
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      style: {
        paddingBottom: 32
      },
      belowTextStyle: {
        maxWidth: 'max-content'
      },
      above: question,
      below: answer
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    span: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    span: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderTitle, {
    level: 3
  }, currentProfile.designType, " Challenge"), lodash__WEBPACK_IMPORTED_MODULE_14___default.a.map(qAndA, ({
    question,
    answer
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      style: {
        paddingBottom: 32
      },
      belowTextStyle: {
        maxWidth: 'max-content'
      },
      above: question,
      below: answer
    });
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=[profile_id].js.6b181ff9525069a7a76f.hot-update.js.map