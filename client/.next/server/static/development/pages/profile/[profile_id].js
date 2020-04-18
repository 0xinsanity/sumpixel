module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./components/Dashboard/Employer/DesignerList.tsx":
/*!********************************************************!*\
  !*** ./components/Dashboard/Employer/DesignerList.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/model */ "./model/model.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _General_OpenPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../General/OpenPage */ "./components/General/OpenPage.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _General_BigBlackButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../General/BigBlackButton */ "./components/General/BigBlackButton.tsx");








const {
  Column
} = antd__WEBPACK_IMPORTED_MODULE_4__["Table"];
const AvatarStyled = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"]).withConfig({
  displayName: "DesignerList__AvatarStyled",
  componentId: "sc-4gjozu-0"
})(["margin-bottom:13px;margin-right:15px;"]);
const NameAvatar = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "DesignerList__NameAvatar",
  componentId: "sc-4gjozu-1"
})(["display:flex;flex-direction:row;"]);
const NameTitle = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"]).withConfig({
  displayName: "DesignerList__NameTitle",
  componentId: "sc-4gjozu-2"
})(["color:#000000;font-family:'Mark Pro Bold';font-size:16px;display:flex;align-items:center;padding-bottom:12px;"]);
const ResponseTitle = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"]).withConfig({
  displayName: "DesignerList__ResponseTitle",
  componentId: "sc-4gjozu-3"
})(["color:#000000;opacity:0.5;font-size;14px;font-family:'Mark Pro';"]);

const DesignerList = props => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_3__["UserContext"]);
  const {
    designerList
  } = props;

  const onMoreInfo = user => {
    Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_5__["default"])(context.setLoading, '/profile/' + user.id);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    style: {
      paddingBottom: 10,
      width: '100%',
      fontFamily: 'Mark Pro',
      fontWeight: 'normal'
    },
    size: "large",
    dataSource: designerList,
    bordered: false,
    pagination: {
      defaultPageSize: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    onCell: (data, index) => ({
      style: {
        fontFamily: 'Mark Pro Bold'
      }
    }),
    width: '35%',
    title: "Name",
    dataIndex: "name_feedback",
    key: "name_feedback",
    render: name_feedback => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NameAvatar, null, name_feedback[2] !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AvatarStyled, {
      size: 50,
      src: name_feedback[2]
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AvatarStyled, {
      size: 50,
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["UserOutlined"], null)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NameTitle, null, name_feedback[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResponseTitle, null, name_feedback[1]))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    align: 'center',
    title: "Score",
    dataIndex: "score",
    key: "score",
    render: text => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Text, {
      style: {
        color: _model_model__WEBPACK_IMPORTED_MODULE_2__["UNIVERSAL_COLOR"]
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Text, {
      style: {
        color: _model_model__WEBPACK_IMPORTED_MODULE_2__["UNIVERSAL_COLOR"],
        fontFamily: 'Mark Pro Bold'
      }
    }, text), "/10")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    align: 'center',
    title: "Location",
    dataIndex: "location",
    key: "location"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    align: 'center',
    title: "Primary Skill",
    dataIndex: "primary_skill",
    key: "primary_skill"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    align: 'center',
    title: "Profile",
    dataIndex: "contact",
    key: "contact",
    render: contact => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_7__["BigBlackButton"], {
      onClick: () => onMoreInfo(contact)
    }, "View Profile")
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DesignerList);

/***/ }),

/***/ "./components/Dashboard/Employer/EmployerCommList.tsx":
/*!************************************************************!*\
  !*** ./components/Dashboard/Employer/EmployerCommList.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/server */ "./lib/server.tsx");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/model */ "./model/model.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _General_BigBlackButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../General/BigBlackButton */ "./components/General/BigBlackButton.tsx");
/* harmony import */ var _General_OpenPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../General/OpenPage */ "./components/General/OpenPage.tsx");







const {
  Column
} = antd__WEBPACK_IMPORTED_MODULE_4__["Table"];

const EmployerCommList = props => {
  const {
    communicationList,
    updateDecision
  } = props;
  const [showModal, setModalVisibility] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [currentDesigner, setCurrentDesigner] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_1__["UserContext"]);

  const decisionToText = dec => {
    switch (dec) {
      case _model_model__WEBPACK_IMPORTED_MODULE_3__["DesignerDecisionTalk"].UNDECIDED:
        return 'Reviewing Your Request';

      case _model_model__WEBPACK_IMPORTED_MODULE_3__["DesignerDecisionTalk"].WILL_TALK:
        return `Willing to Talk`;

      case _model_model__WEBPACK_IMPORTED_MODULE_3__["DesignerDecisionTalk"].WILL_NOT_TALK:
        return `Declines to Talk`;
    }
  };

  const onMoreInfo = async commId => {
    const user = await Object(_lib_server__WEBPACK_IMPORTED_MODULE_2__["getDesignerFromCommunication"])(commId);
    Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_6__["default"])(context.setLoading, '/profile/' + user.id);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    style: {
      paddingBottom: 10,
      width: '100%',
      fontFamily: 'Mark Pro Bold',
      fontWeight: 'normal'
    },
    size: "large",
    dataSource: communicationList,
    bordered: false,
    pagination: {
      defaultPageSize: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    width: '35%',
    title: "Name",
    dataIndex: "fullName",
    key: "fullName"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    title: "Designer's Status",
    dataIndex: "designerApprovedTalk",
    key: "designerApprovedTalk",
    render: text => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Text, {
      style: {
        color: '#000'
      }
    }, decisionToText(text))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    align: 'center',
    title: "Decision",
    dataIndex: "decision",
    key: "decision",
    render: (text, record, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Popconfirm"], {
      title: "Are you sure?"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"].Group, {
      onChange: e => updateDecision(communicationList[index].communicationId, e.target.value),
      value: text
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_3__["EmployerDecisionHire"].UNDECIDED
    }, "Reviewing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_3__["EmployerDecisionHire"].REJECT
    }, "Reject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"].Button, {
      value: _model_model__WEBPACK_IMPORTED_MODULE_3__["EmployerDecisionHire"].HIRE
    }, "Hire")))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, {
    align: 'center',
    title: "Info",
    dataIndex: "communicationId",
    key: "communicationId",
    render: communicationId => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_5__["BigBlackButton"], {
      onClick: () => onMoreInfo(communicationId)
    }, "View Profile")
  }), "/>"));
};

/* harmony default export */ __webpack_exports__["default"] = (EmployerCommList);

/***/ }),

/***/ "./components/Dashboard/Employer/FindDesigners.tsx":
/*!*********************************************************!*\
  !*** ./components/Dashboard/Employer/FindDesigners.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/server */ "./lib/server.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _General_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../General/Loading */ "./components/General/Loading.tsx");
/* harmony import */ var _DesignerList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DesignerList */ "./components/Dashboard/Employer/DesignerList.tsx");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);








const FindDesigners = props => {
  const {
    currentUser,
    changeUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_2__["UserContext"]);
  const [designerList, setDesignerList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var id = currentUser.id;

    if (currentUser.isAnonymous !== undefined) {
      id = "60fff552-280b-47ae-b632-25a744a7a910";
    }

    Object(_lib_server__WEBPACK_IMPORTED_MODULE_1__["getGradedDesigners"])(id).then(async commList => {
      const updatedList = await Promise.all(lodash__WEBPACK_IMPORTED_MODULE_6___default.a.map(commList, async user => {
        let profilePic = '';

        if (user.profilePic !== undefined) {
          try {
            profilePic = await _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["storage_ref"].child('profilePic/' + user.profilePic).getDownloadURL();
          } catch (e) {
            console.error(e);
          }
        }

        return {
          name_feedback: [user.firstName + " " + user.lastName, user.grade.response, profilePic],
          score: user.grade.score,
          location: user.location,
          primary_skill: user.designType,
          contact: user
        };
      }));
      console.log(updatedList);
      setDesignerList(updatedList);
    });
  }, [currentUser]);

  if (designerList === undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DesignerList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    designerList: designerList
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FindDesigners);

/***/ }),

/***/ "./components/Dashboard/Employer/ManageCommunications.tsx":
/*!****************************************************************!*\
  !*** ./components/Dashboard/Employer/ManageCommunications.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/server */ "./lib/server.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _EmployerCommList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmployerCommList */ "./components/Dashboard/Employer/EmployerCommList.tsx");






const ManageCommunications = props => {
  const {
    currentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_1__["UserContext"]);
  const [commList, setCommList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);

  const updateDecision = async (commId, update) => {
    window.analytics.track(currentUser.companyName + ' updated Decision on Designer - ' + update);
    await Object(_lib_server__WEBPACK_IMPORTED_MODULE_2__["updateEmployerDecision"])(commId, update);
    antd__WEBPACK_IMPORTED_MODULE_3__["message"].success("Updated Decision");
    setCommList((await Object(_lib_server__WEBPACK_IMPORTED_MODULE_2__["getEmployerCommunicationsList"])(currentUser.id)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_lib_server__WEBPACK_IMPORTED_MODULE_2__["getEmployerCommunicationsList"])(currentUser.id).then(commList => {
      setCommList(commList);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmployerCommList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    communicationList: commList,
    updateDecision: updateDecision
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManageCommunications);

/***/ }),

/***/ "./components/Dashboard/NavigationBar.tsx":
/*!************************************************!*\
  !*** ./components/Dashboard/NavigationBar.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _General_OpenPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../General/OpenPage */ "./components/General/OpenPage.tsx");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];
const SumpixelHeader = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd__WEBPACK_IMPORTED_MODULE_1__["PageHeader"]).withConfig({
  displayName: "NavigationBar__SumpixelHeader",
  componentId: "sc-14u4r04-0"
})(["background:#DAE2EF;padding:30px 8%;min-height:100vh;"]);
const LogoutButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "NavigationBar__LogoutButton",
  componentId: "sc-14u4r04-1"
})(["color:#000000;padding-top:10px;font-family:'Mark Pro Bold';"]);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "NavigationBar__Line",
  componentId: "sc-14u4r04-2"
})(["border:0.5px solid #000000;margin-top:10px;margin-bottom:10px;"]);
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title).withConfig({
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
    changeUser,
    loading,
    setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_3__["UserContext"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SumpixelHeader, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: isDesigner ? '/dashboard_user' : '/dashboard_employer'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      height: 43,
      src: __webpack_require__(/*! ../../assets/sumpixel-logo.png */ "./assets/sumpixel-logo.png")
    })),
    extra: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoutButton, {
      type: "link",
      onClick: () => {
        _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_6___default.a.auth.Auth.Persistence.NONE);
        _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().signOut().then(() => {
          changeUser(undefined);

          if (currentUser.isAnonymous !== undefined) {
            Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_5__["default"])(setLoading, '/signup');
          } else {
            Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_5__["default"])(setLoading, '/');
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

/***/ "./components/General/Container.tsx":
/*!******************************************!*\
  !*** ./components/General/Container.tsx ***!
  \******************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const ColContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Col"]).withConfig({
  displayName: "Container__ColContainer",
  componentId: "sc-1szewme-0"
})(["padding-top:25px;display:flex;flex-direction:column;align-items:center;"]);
const Container = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: 'gutter-row',
    span: props.isDashboard !== undefined ? 2 : 5
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColContainer, {
    style: props.style,
    className: 'gutter-row',
    span: props.isDashboard !== undefined ? 20 : 14
  }, props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: 'gutter-row',
    span: props.isDashboard !== undefined ? 2 : 5
  }));
};

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

/***/ "./components/General/LocationAutocomplete.tsx":
/*!*****************************************************!*\
  !*** ./components/General/LocationAutocomplete.tsx ***!
  \*****************************************************/
/*! exports provided: LocationAutocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationAutocomplete", function() { return LocationAutocomplete; });
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-places-autocomplete */ "react-places-autocomplete");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const PlaceTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
    height: 45px;
    padding: 4px;
    padding-left: 14px;
    border-bottom: 1px solid #DAE2EF;
    border-left: 1px solid #DAE2EF;
    border-right: 1px solid #DAE2EF;
    display: flex;
    align-items: center;
`;
const PlaceText = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text)`
    font-family: 'Mark Pro';
`;
const LocationAutocomplete = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Location",
    name: "location",
    rules: [{
      required: !props.isModifyProfilePage,
      message: !props.isModifyProfilePage ? `Location is required` : ''
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_0___default.a, null, ({
    getInputProps,
    getSuggestionItemProps,
    suggestions,
    loading
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], _extends({}, getInputProps({
    id: "address-input"
  }), {
    defaultValue: props.defaultValue,
    placeholder: "New York City"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaceText, {
    className: "autocomplete-dropdown-container"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaceTextContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaceText, null, "Loading...")) : null, suggestions.map(suggestion => {
    const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
    const style = suggestion.active ? {
      backgroundColor: "#fafafa",
      cursor: "pointer"
    } : {
      backgroundColor: "#ffffff",
      cursor: "pointer"
    };
    const spread = { ...getSuggestionItemProps(suggestion, {
        className,
        style
      })
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaceTextContainer, _extends({}, spread, {
      key: suggestion.id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PlaceText, null, suggestion.description));
  })))));
};

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

/***/ "./components/OnboardingFlow/Employers/FormBusinessData.tsx":
/*!******************************************************************!*\
  !*** ./components/OnboardingFlow/Employers/FormBusinessData.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/model */ "./model/model.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _General_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../General/Loading */ "./components/General/Loading.tsx");
/* harmony import */ var _General_BigBlackButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../General/BigBlackButton */ "./components/General/BigBlackButton.tsx");
/* harmony import */ var _General_OpenPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../General/OpenPage */ "./components/General/OpenPage.tsx");
/* harmony import */ var _General_LocationAutocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../General/LocationAutocomplete */ "./components/General/LocationAutocomplete.tsx");









const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

const FormBusinessData = props => {
  const {
    changeCurrentUser,
    modifyProfile
  } = props;
  const {
    currentUser,
    changeUser,
    setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);
  const [checked, changeChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const isModifyProfilePage = modifyProfile !== undefined;

  if (currentUser == undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }

  const getRules = name => {
    return [{
      required: !isModifyProfilePage,
      message: !isModifyProfilePage ? `${name} is required` : ''
    }];
  };

  const onFinish = values => {
    if (!isModifyProfilePage && !checked) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('Please agree to the Terms of Service');
      return;
    }

    const newEmployer = {
      email: currentUser.email,
      id: currentUser.id,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      companyName: values.companyName,
      phoneNumber: values.phoneNumber,
      location: values.location
    };
    changeCurrentUser(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.pickBy(newEmployer, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.identity));

    if (isModifyProfilePage) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("Your profile has been updated");
    } else {
      Object(_General_OpenPage__WEBPACK_IMPORTED_MODULE_7__["default"])(setLoading, '/dashboard_employer');
    }
  };

  const onFinishFailed = () => {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('There was an error completing your account. Ensure every field is filled out.');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    id: "employer_form",
    name: "basic",
    initialValues: {
      remember: true
    },
    onFinish: onFinish,
    onFinishFailed: onFinishFailed
  }, !isModifyProfilePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Name",
    name: "firstName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: currentUser.firstName
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: currentUser.lastName
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Email",
    name: "email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    defaultValue: currentUser.email
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Company Name",
    name: "companyName",
    rules: getRules("Company Name")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: modifyProfile ? '' : currentUser.companyName || "",
    placeholder: "Company Name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Phone Number",
    name: "phoneNumber",
    rules: getRules("Phone Number")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    defaultValue: modifyProfile ? '' : currentUser.phoneNumber || "",
    placeholder: "+1 (555) 555-5555"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_LocationAutocomplete__WEBPACK_IMPORTED_MODULE_8__["LocationAutocomplete"], {
    isModifyProfilePage: isModifyProfilePage,
    defaultValue: isModifyProfilePage ? '' : currentUser.location || ""
  }), !isModifyProfilePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    valuePropName: 'checked'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    style: {
      fontFamily: 'Mark Pro'
    },
    checked: checked,
    onChange: e => changeChecked(e.target.checked)
  }, "Agree to the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      color: _model_model__WEBPACK_IMPORTED_MODULE_3__["UNIVERSAL_COLOR"]
    },
    target: '_blank',
    href: '/terms'
  }, "Terms of Service"))) : null, isModifyProfilePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "space-between",
    align: "middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_6__["BigBlackButton"], {
    style: {
      marginTop: 10
    },
    htmlType: "submit"
  }, isModifyProfilePage ? "Update Company Profile" : "Finish Setup"))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (FormBusinessData);

/***/ }),

/***/ "./components/Profile/SimpleNavigationBar.tsx":
/*!****************************************************!*\
  !*** ./components/Profile/SimpleNavigationBar.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




const SumpixelHeader = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["PageHeader"]).withConfig({
  displayName: "SimpleNavigationBar__SumpixelHeader",
  componentId: "sc-1pp6gk8-0"
})(["background:#DAE2EF;padding:30px 8%;min-height:100vh;"]);
const LogoutButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "SimpleNavigationBar__LogoutButton",
  componentId: "sc-1pp6gk8-1"
})(["color:#000000;padding-top:10px;font-family:'Mark Pro Bold';"]);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "SimpleNavigationBar__Line",
  componentId: "sc-1pp6gk8-2"
})(["border:0.5px solid #000000;margin-top:10px;margin-bottom:10px;"]);
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title).withConfig({
  displayName: "SimpleNavigationBar__SubTitle",
  componentId: "sc-1pp6gk8-3"
})(["font-family:'Mark Pro Bold';padding-top:20px;padding-bottom:10px;"]);

const SimpleNavigationBar = props => {
  const {
    subtitle,
    avatarSrc
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SumpixelHeader, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: '/'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      height: 43,
      src: __webpack_require__(/*! ../../assets/sumpixel-logo.png */ "./assets/sumpixel-logo.png")
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    style: {
      marginTop: 20
    },
    size: 200,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], null),
    src: avatarSrc
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, null, subtitle), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (SimpleNavigationBar);

/***/ }),

/***/ "./components/Profile/Socials.tsx":
/*!****************************************!*\
  !*** ./components/Profile/Socials.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextAboveAnswer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextAboveAnswer */ "./components/Profile/TextAboveAnswer.tsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);




const TextAboveAnswer = props => {
  const {
    linkedin,
    dribbble
  } = props;

  if (linkedin === null && dribbble === null) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  var dribble_url = dribbble,
      linkedin_url = linkedin;

  if (dribbble !== null && !dribbble.includes('//')) {
    dribble_url = "https://" + dribbble;
  }

  if (linkedin !== null && !linkedin.includes('//')) {
    linkedin_url = "https://" + linkedin;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_1__["AboveText"], null, "Socials"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, linkedin !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: linkedin_url,
    target: '_blank'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LinkedinOutlined"], {
    style: {
      marginRight: 10,
      fontSize: 20,
      color: '#13B0C3'
    }
  })) : null, dribbble !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: dribble_url,
    target: '_blank'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DribbbleOutlined"], {
    style: {
      fontSize: 20,
      color: '#13B0C3'
    }
  })) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (TextAboveAnswer);

/***/ }),

/***/ "./components/Profile/TextAboveAnswer.tsx":
/*!************************************************!*\
  !*** ./components/Profile/TextAboveAnswer.tsx ***!
  \************************************************/
/*! exports provided: Container, AboveText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboveText", function() { return AboveText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "TextAboveAnswer__Container",
  componentId: "hazteg-0"
})(["display:flex;flex-direction:column;"]);
const AboveText = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text).withConfig({
  displayName: "TextAboveAnswer__AboveText",
  componentId: "hazteg-1"
})(["font-family:'Mark Pro';opacity:0.5;padding-bottom:8px;"]);
const BelowText = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(AboveText).withConfig({
  displayName: "TextAboveAnswer__BelowText",
  componentId: "hazteg-2"
})(["opacity:1.0;padding-bottom:0px;max-width:150px;"]);
const ButtonBelow = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "TextAboveAnswer__ButtonBelow",
  componentId: "hazteg-3"
})(["opacity:1.0;padding:0px;font-family:'Mark Pro';color:#13B0C3;background:rgba(0,0,0,0);border:none;max-height:22px;&:hover{background:rgba(0,0,0,0);}&:focus{background:rgba(0,0,0,0);}"]);

const TextAboveAnswer = props => {
  const {
    above,
    below,
    link,
    onClick,
    style,
    belowTextStyle
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboveText, null, above), link !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: '_blank',
    href: link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonBelow, {
    style: belowTextStyle
  }, below)) : onClick !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonBelow, {
    style: belowTextStyle,
    onClick: onClick
  }, below) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BelowText, {
    style: belowTextStyle
  }, below));
};

/* harmony default export */ __webpack_exports__["default"] = (TextAboveAnswer);

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
/*! exports provided: getUser, getEmployer, removeUser, removeEmployer, createUser, modifyUser, createEmployer, modifyEmployer, createCommunication, updateDesignerDecision, updateEmployerDecision, getDesignCommunicationsList, getEmployerCommunicationsList, getGradedDesigners, getDesignerFromCommunication, getQAById, getUserIds */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserIds", function() { return getUserIds; });
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
const getUserIds = async () => {
  return await request('get_user_ids', {});
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

/***/ "./pages/dashboard_employer.tsx":
/*!**************************************!*\
  !*** ./pages/dashboard_employer.tsx ***!
  \**************************************/
/*! exports provided: Background, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_General_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/General/Container */ "./components/General/Container.tsx");
/* harmony import */ var _components_Dashboard_NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dashboard/NavigationBar */ "./components/Dashboard/NavigationBar.tsx");
/* harmony import */ var _components_OnboardingFlow_Employers_FormBusinessData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/OnboardingFlow/Employers/FormBusinessData */ "./components/OnboardingFlow/Employers/FormBusinessData.tsx");
/* harmony import */ var _components_Dashboard_Employer_FindDesigners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Dashboard/Employer/FindDesigners */ "./components/Dashboard/Employer/FindDesigners.tsx");
/* harmony import */ var _components_Dashboard_Employer_ManageCommunications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Dashboard/Employer/ManageCommunications */ "./components/Dashboard/Employer/ManageCommunications.tsx");
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/model */ "./model/model.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/server */ "./lib/server.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! firebase */ "firebase");
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
const Background = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.div.withConfig({
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

/***/ }),

/***/ "./pages/profile/[profile_id].tsx":
/*!****************************************!*\
  !*** ./pages/profile/[profile_id].tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Profile_SimpleNavigationBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Profile/SimpleNavigationBar */ "./components/Profile/SimpleNavigationBar.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/server */ "./lib/server.tsx");
/* harmony import */ var _dashboard_employer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard_employer */ "./pages/dashboard_employer.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Profile/TextAboveAnswer */ "./components/Profile/TextAboveAnswer.tsx");
/* harmony import */ var _components_Profile_Socials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Profile/Socials */ "./components/Profile/Socials.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _components_General_BigBlackButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/General/BigBlackButton */ "./components/General/BigBlackButton.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_General_OpenPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/General/OpenPage */ "./components/General/OpenPage.tsx");















const TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "profile_id__TextContainer",
  componentId: "sc-1cojqhm-0"
})(["display:flex;flex-direction:row;width:75%;justify-content:space-between;padding-top:15px;padding-bottom:40px;"]);
const UpperFullContainer = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "profile_id__UpperFullContainer",
  componentId: "sc-1cojqhm-1"
})(["display:flex;flex-direction:row;width:100%;justify-content:space-between;align-items:center;padding-right:40px;"]);
const HeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_10___default()(antd__WEBPACK_IMPORTED_MODULE_6__["Typography"].Title).withConfig({
  displayName: "profile_id__HeaderTitle",
  componentId: "sc-1cojqhm-2"
})(["font-family:'Mark Pro Bold';padding-bottom:20px;"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
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

  var portfolio = currentProfile.portfolio;

  if (!portfolio.includes('//')) {
    portfolio = "https://" + portfolio;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, profileString)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_SimpleNavigationBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: profileString,
    avatarSrc: profileLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UpperFullContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      width: 100
    },
    above: 'Location',
    below: currentProfile.location
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_TextAboveAnswer__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    link: portfolio,
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

/***/ }),

/***/ 3:
/*!**********************************************!*\
  !*** multi ./pages/profile/[profile_id].tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/insanity/Documents/Sumpixel/sumpixel/client/pages/profile/[profile_id].tsx */"./pages/profile/[profile_id].tsx");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

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

/***/ "react-places-autocomplete":
/*!********************************************!*\
  !*** external "react-places-autocomplete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-places-autocomplete");

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
//# sourceMappingURL=[profile_id].js.map