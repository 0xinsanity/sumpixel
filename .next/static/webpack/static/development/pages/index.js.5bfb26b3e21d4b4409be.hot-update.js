webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/model */ "./model/model.tsx");
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/server */ "./lib/server.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_UserProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/UserProvider */ "./lib/UserProvider.tsx");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Container */ "./components/Container.tsx");









const Index = () => {
  const [status, setStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Undecided);
  const firebaseUser = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_UserProvider__WEBPACK_IMPORTED_MODULE_6__["UserContext"]);

  const onFinish = values => {
    _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().signInWithEmailAndPassword(values.email, values.password).then(async () => {
      switch (values.newStatus) {
        case _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Designer:
          const user = await Object(_lib_server__WEBPACK_IMPORTED_MODULE_4__["getUser"])(firebaseUser.uid);

          if (user['user_exists'] == undefined) {
            antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("It looks like you haven't created an account yet.");
          } else {
            next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/dashboard_user');
          }

          break;

        case _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Designer:
          const employer = await Object(_lib_server__WEBPACK_IMPORTED_MODULE_4__["getEmployer"])(firebaseUser.uid);

          if (employer['user_exists'] == undefined) {
            antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("It looks like you haven't created an account yet.");
          } else {
            next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/dashboard_employer');
          }

          break;

        case _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Undecided:
          antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Please choose whether you are an Employer or Designer.");
      }
    }).catch(error => {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("Looks like your password or email is incorrect.");
    });
  };

  const onFinishFailed = () => {};

  const onClick = () => {
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.replace('/signup');
  };

  const updateStatus = ({
    newStatus
  }) => {
    setStatus(newStatus);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_7__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingTop: '10%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    name: "basic",
    initialValues: {
      remember: true
    },
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    onValuesChange: updateStatus,
    style: {
      marginBottom: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Email",
    name: "email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Password",
    name: "password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "password",
    placeholder: "Password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "You are",
    name: "newStatus"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
    value: status
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
    value: _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Employer
  }, "Employer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
    value: _model_model__WEBPACK_IMPORTED_MODULE_3__["NavBarStatus"].Designer
  }, "Designer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      width: '60%'
    },
    type: "primary",
    htmlType: "submit"
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClick,
    style: {
      paddingTop: 10
    },
    type: "link"
  }, "Haven't made an account? Click here to sign up"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.5bfb26b3e21d4b4409be.hot-update.js.map