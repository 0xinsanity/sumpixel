webpackHotUpdate("static/development/pages/onboarding.js",{

/***/ "./components/OnboardingFlow/Designers/AvatarUpload.tsx":
/*!**************************************************************!*\
  !*** ./components/OnboardingFlow/Designers/AvatarUpload.tsx ***!
  \**************************************************************/
/*! exports provided: AvatarUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarUpload", function() { return AvatarUpload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('Images must be smaller than 2 Megabytes!');
  }

  return isLt2M;
}

class AvatarUpload extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loading: false,
      imageUrl: ''
    });

    _defineProperty(this, "handleChange", info => {
      if (info.file.status === 'uploading') {
        this.setState({
          loading: true
        });
        return;
      }

      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => this.setState({
          imageUrl,
          loading: false
        }));
      }
    });
  }

  render() {
    const uploadButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        fontFamily: 'Mark Pro'
      },
      className: "ant-upload-text"
    }, "Profile Picture"));
    const {
      imageUrl
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
      name: "avatar",
      accept: ".png",
      listType: "picture-card",
      className: "avatar-uploader",
      showUploadList: false,
      beforeUpload: beforeUpload,
      onChange: this.handleChange
    }, imageUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: imageUrl,
      alt: "avatar",
      style: {
        width: '100%'
      }
    }) : uploadButton);
  }

}

/***/ })

})
//# sourceMappingURL=onboarding.js.138d8b74b83015428130.hot-update.js.map