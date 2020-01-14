webpackHotUpdate("main",{

/***/ "./src/components/WelcomePage.js":
/*!***************************************!*\
  !*** ./src/components/WelcomePage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WelcomePage; });
/* harmony import */ var _Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_axiosWithAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers//axiosWithAuth */ "./src/helpers/axiosWithAuth.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginForm */ "./src/components/LoginForm.js");
/* harmony import */ var _SignupForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignupForm */ "./src/components/SignupForm.js");
/* harmony import */ var _PlantList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PlantList */ "./src/components/PlantList.js");
/* harmony import */ var _assets_background_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/background.jpeg */ "./src/assets/background.jpeg");
/* harmony import */ var _assets_background_jpeg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_background_jpeg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_waterLogo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/waterLogo.png */ "./src/assets/waterLogo.png");
/* harmony import */ var _assets_waterLogo_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_waterLogo_png__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/robertc1191/Desktop/Lambda-school/Build-Week-2/water-my-plants/src/components/WelcomePage.js";

function _templateObject() {
  const data = Object(_Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  @media (max-width: 768px) {\n    justify-content: center;\n  }\n  .form-container {\n    background: white;\n    display: flex;\n    flex-direction: column;\n    opacity: 0.6;\n    width: 360px;\n    max-width: 60%;\n    border-radius: 12px;\n    margin: 5% 5% 0;\n    @media (max-width: 768px) {\n      max-width: 100%;\n      margin: 3% 3% 0;\n    }\n    .form {\n      display: flex;\n      flex-direction: column;\n      label {\n        font-size: 2.2rem;\n        padding: 2% 0 1% 5%;\n      }\n      small {\n        font-size: 1.3rem;\n        margin: 1% 0 0 5%;\n      }\n      input {\n        margin-left: 5%;\n        padding-left: 2%;\n        width: 90%;\n        height: 30px;\n        border-top: none;\n        border-left: none;\n        border-right: none;\n        border-bottom: 1px solid black;\n      }\n      .btn {\n        border: 1px solid black;\n        border-radius: 2px;\n        margin: 5% auto;\n        width: 50%;\n      }\n      .error {\n        margin-left: 5%;\n        font-size: 1.4rem;\n        color: red;\n      }\n    }\n    .form-link {\n      font-size: 1.4rem;\n      margin: 0 auto;\n    }\n    .water-logo{\n      margin: 3% auto;\n      width: 175px;\n      height: 175px;\n      max-width: 100%;\n      max-height: 100%;\n      background-image: url(", ");\n      background-repeat: no-repeat;\n      background-position:center;\n      background-size: contain;\n      .water-img {\n        max-width: 50%;\n        margin: 5% auto;\n      }\n    }\n  }\n  #login-form {\n    height: 60%;\n  }\n  #signup-form {\n    height: 70%;\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}










function WelcomePage() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrapperStyle, {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    exact: true,
    from: "/",
    to: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/login",
    render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/signup",
    exact: true,
    component: _SignupForm__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_helpers_axiosWithAuth__WEBPACK_IMPORTED_MODULE_4__["asRoute"], {
    path: "/plants",
    exact: true,
    component: _PlantList__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
}
const WrapperStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), _assets_background_jpeg__WEBPACK_IMPORTED_MODULE_8___default.a, _assets_waterLogo_png__WEBPACK_IMPORTED_MODULE_9___default.a);

/***/ })

})
//# sourceMappingURL=main.1a7c55d32d38a58af0fa.hot-update.js.map