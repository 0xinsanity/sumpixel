module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/terms.tsx":
/*!*************************!*\
  !*** ./pages/terms.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_General_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/General/Container */ "./components/General/Container.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);





const Terms = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Terms of Service")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_General_Container__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title, null, "Terms of Service"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Text, null, "1. Terms By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law. 2. Use License Permission is granted to temporarily download one copy of the materials (information or software) on Sumpixel\u2019s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or \"mirror\" the materials on any other server. This license shall automatically terminate if you violate any of these restrictions and may be terminated by Sumpixel at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format. 3. Dis\xADclaimer The mate\xADri\xADals on Sumpixel\u2019s web\xADsite are pro\xADvid\xADed on an \u200B\u2018as is\u2019 basis. Sumpixel makes no war\xADranties, expressed or implied, and here\xADby dis\xADclaims and negates all oth\xADer war\xADranties includ\xADing, with\xADout lim\xADi\xADta\xADtion, implied war\xADranties or con\xADdi\xADtions of mer\xADchantabil\xADi\xADty, fit\xADness for a par\xADtic\xADu\xADlar pur\xADpose, or non-infringe\xADment of intel\xADlec\xADtu\xADal prop\xADer\xADty or oth\xADer vio\xADla\xADtion of rights. Fur\xADther, Sumpixel does not war\xADrant or make any rep\xADre\xADsen\xADta\xADtions con\xADcern\xADing the accu\xADra\xADcy, like\xADly results, or reli\xADa\xADbil\xADi\xADty of the use of the mate\xADri\xADals on its web\xADsite or oth\xADer\xADwise relat\xADing to such mate\xADri\xADals or on any sites linked to this site. 4. Lim\xADi\xADta\xADtions In no event shall Sumpixel or its sup\xADpli\xADers be liable for any dam\xADages (includ\xADing, with\xADout lim\xADi\xADta\xADtion, dam\xADages for loss of data or prof\xADit, or due to busi\xADness inter\xADrup\xADtion) aris\xADing out of the use or inabil\xADi\xADty to use the mate\xADri\xADals on Sumpixel web\xADsite, even if an autho\xADrized rep\xADre\xADsen\xADta\xADtive has been noti\xADfied oral\xADly or in writ\xADing of the pos\xADsi\xADbil\xADi\xADty of such dam\xADage. Because some juris\xADdic\xADtions do not allow lim\xADi\xADta\xADtions on implied war\xADranties, or lim\xADi\xADta\xADtions of lia\xADbil\xADi\xADty for con\xADse\xADquen\xADtial or inci\xADden\xADtal dam\xADages, these lim\xADi\xADta\xADtions may not apply to you. 5. Accu\xADra\xADcy of materials The mate\xADri\xADals appear\xADing on Sumpixel web\xADsite could include tech\xADni\xADcal, typo\xADgraph\xADi\xADcal, or pho\xADto\xADgraph\xADic errors. Sumpixel does not war\xADrant that any of the mate\xADri\xADals on its web\xADsite are accu\xADrate, com\xADplete or cur\xADrent. Sumpixel  may make changes to the mate\xADri\xADals con\xADtained on its web\xADsite at any time with\xADout notice. How\xADev\xADer Sumpixel does not make any com\xADmit\xADment to update the materials. 6. Links Sumpixel has not reviewed all of the sites linked to its web\xADsite and is not respon\xADsi\xADble for the con\xADtents of any such linked site. The inclu\xADsion of any link does not imply endorse\xADment by Sumpixel of the site. Use of any such linked web\xADsite is at the user\u2019s own risk. 7. Site Terms of Use Modifications Sumpixel may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use. 8. Governing Law Any claim relating to Sumpixel\u2019s website shall be governed by the laws of the State of Delaware without regard to its conflict of law provisions. 9. Placements For services rendered in the placement of any candidate under this agreement (\u201CAgreement\u201D), Customer agrees to pay Sumpixel (\"Company\"), a fee equal to 20% of the placed candidate's first year\u2019s annual compensation, within 10 days of the placed candidate's commencement of employment. Such fee will be billed in U.S. dollars if the placement is made with Customer in the U.S., or billed in Canadian dollars if the placement is made with Customer in Canada. Provided payment is received within 10 days of the placed candidate\u2019s commencement of employment, Company will offer Customer the following guarantee: \u2022 If the candidate is terminated for substandard work performance or voluntarily resigns within the first 30 calendar days of the candidate\u2019s start date, all monies paid by Customer for the related transaction will be refunded. \u2022 If the candidate is terminated for substandard work performance or voluntarily resigns between 31 and 60 calendar days of the candidate\u2019s start date, two-thirds of all monies paid by Customer for the related transaction collected will be refunded. \u2022 If the candidate is terminated for substandard work performance or voluntarily resigns between 61 and 90 calendar days of the candidate\u2019s start date, one-third of all monies paid by Customer for the related transaction will be refunded. This guarantee does not apply in cases of merger, acquisition or layoff. To qualify for this guarantee, Customer must notify Company within 15 days after the candidate\u2019s last day of work. All referrals will remain in effect for one year. If Customer interviews a candidate from Company and that candidate is hired by Customer anytime over the following year, Company will be entitled to its entire fee regardless of Customer\u2019s evidence of prior or subsequent introductions to the candidate. Customer agrees to pay in full all sums due to Company under this agreement, regardless if Customer redirects or outsources placement services to a third party organization. Any additional costs incurred by Customer will be the sole responsibility of Customer.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Terms);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/terms.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/insanity/Documents/personalprojects/sumpixel/client/pages/terms.tsx */"./pages/terms.tsx");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=terms.js.map