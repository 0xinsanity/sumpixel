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
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/server */ "./lib/server.tsx");






const DashboardUser = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function findUser() {
      const user = await Object(_lib_server__WEBPACK_IMPORTED_MODULE_4__["getUser"])(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().currentUser.uid);

      if (user['user_exists'] === undefined) {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/');
      }
    }

    const firebaseUser = _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().currentUser;

    if (firebaseUser !== null) {
      findUser();
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title, null, "Hello, welcome to the designer dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: async () => {
      await _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["myFirebase"].auth().signOut();
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/');
    }
  }, "Logout"));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardUser);

/***/ })

})
//# sourceMappingURL=dashboard_user.js.757199e05cd211a85a90.hot-update.js.map