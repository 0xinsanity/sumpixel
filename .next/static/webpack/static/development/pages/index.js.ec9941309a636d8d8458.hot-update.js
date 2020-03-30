webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/server.tsx":
/*!************************!*\
  !*** ./lib/server.tsx ***!
  \************************/
/*! exports provided: didCompleteQuiz, getUser, createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "didCompleteQuiz", function() { return didCompleteQuiz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const SERVER_BASE = 'https://sumpixel-server.herokuapp.com/';
var HTTP_Requests;

(function (HTTP_Requests) {
  HTTP_Requests["GET"] = "GET";
  HTTP_Requests["POST"] = "POST";
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
  }

  console.log(response);

  if (response.status !== 200) {
    return generateErrorResponse('The server responded with an unexpected status.');
  }

  const result = response.data;
  return result;
};

const objectToQueryString = obj => {
  return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
};

const generateErrorResponse = message => {
  return {
    status: 'error',
    message
  };
};

const didCompleteQuiz = async id => {
  return await request('user-finished-quiz', {
    id: id
  });
};
const getUser = async id => {
  return await request('get-user', {
    id: id
  });
};
const createUser = async user => {
  return await request('create-user', user, HTTP_Requests.POST);
};

/***/ })

})
//# sourceMappingURL=index.js.ec9941309a636d8d8458.hot-update.js.map