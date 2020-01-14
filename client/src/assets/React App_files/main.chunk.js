(this["webpackJsonpwater-my-plants"] = this["webpackJsonpwater-my-plants"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_WelcomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/WelcomePage */ "./src/components/WelcomePage.js");

var _jsxFileName = "/Users/robertc1191/Desktop/Lambda-school/Build-Week-2/water-my-plants/src/App.js";

function _templateObject() {
  const data = Object(_Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  * {\n  box-sizing: border-box;\n}\n*:focus {\n    outline: none;\n}\nhtml {\n  font-size: 62.5%;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  }\n  h1, h2, h3, label {\n    font-family: 'Roboto', sans-serif;\n  }\n  small a {\n    font-family: 'Roboto Slab', serif;\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





function App() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_WelcomePage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);
const GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "./src/assets/background.jpeg":
/*!************************************!*\
  !*** ./src/assets/background.jpeg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/background.fb34e242.jpeg";

/***/ }),

/***/ "./src/assets/flower.jpeg":
/*!********************************!*\
  !*** ./src/assets/flower.jpeg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/flower.dbb8ad59.jpeg";

/***/ }),

/***/ "./src/assets/grass.jpeg":
/*!*******************************!*\
  !*** ./src/assets/grass.jpeg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/grass.a6e634a6.jpeg";

/***/ }),

/***/ "./src/assets/profile-img.jpg":
/*!************************************!*\
  !*** ./src/assets/profile-img.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/profile-img.84760cff.jpg";

/***/ }),

/***/ "./src/assets/wall.jpeg":
/*!******************************!*\
  !*** ./src/assets/wall.jpeg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/wall.cbab80a4.jpeg";

/***/ }),

/***/ "./src/assets/waterLogo.png":
/*!**********************************!*\
  !*** ./src/assets/waterLogo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/waterLogo.5658bd8a.png";

/***/ }),

/***/ "./src/components/LoginForm.js":
/*!*************************************!*\
  !*** ./src/components/LoginForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _state_actionCreators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/actionCreators */ "./src/state/actionCreators.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/robertc1191/Desktop/Lambda-school/Build-Week-2/water-my-plants/src/components/LoginForm.js";







const LoginForm = ({
  errors,
  touched,
  values,
  status,
  history,
  login,
  attemptLogin,
  logout
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    attemptLogin(values);
  };

  return (// Login Form with validation using Yup for Formik //
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "login-form",
      className: "form-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      className: "form",
      onSubmit: handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "water-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }, "User Name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      type: "text",
      name: "username",
      placeholder: "User Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, "(Between 4-16 characters)"), touched.userName && errors.userName && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }, errors.userName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }, "Password:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      type: "password",
      name: "password",
      placeholder: "Password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }, "(Between 4-16 characters)"), touched.password && errors.password && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }, errors.password), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, "LOG IN"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "form-link",
      to: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, "Dont have an account?"))) //!!! Login Form with validation using Yup for Formik //

  );
}; // withFormik validation and Yup Error Messages //


const FormikLoginForm = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  mapPropsToValues({
    username,
    password
  }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    username: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(4, "Need atleast 4 characters").max(16, "No more than 16 characters").required("User Name is required"),
    password: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(4, "Need atleast 4 characters").max(16, "No more than 16 characters").required("Password is required")
  })
})(LoginForm); //!!! withFormik validation and Yup Error Messages //
//attemptLogin

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => state, _state_actionCreators__WEBPACK_IMPORTED_MODULE_4__["attemptLogin"])(FormikLoginForm));

/***/ }),

/***/ "./src/components/PlantCard.js":
/*!*************************************!*\
  !*** ./src/components/PlantCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_grass_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/grass.jpeg */ "./src/assets/grass.jpeg");
/* harmony import */ var _assets_grass_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_grass_jpeg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_flower_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/flower.jpeg */ "./src/assets/flower.jpeg");
/* harmony import */ var _assets_flower_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_flower_jpeg__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/robertc1191/Desktop/Lambda-school/Build-Week-2/water-my-plants/src/components/PlantCard.js";

function _templateObject() {
  const data = Object(_Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-image: linear-gradient(to bottom, transparent 50%, black 100%), url(", ");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  box-shadow: 2px 3px 5px black;\n  border-radius: 12px;\n  opacity: 0.9;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items; center;\n  padding: 3% 3% 1%;\n  margin: 3%;\n  width: 300px;\n  max-width: 25%;\n  .btn-container {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    button{\n      width: 100%;\n      margin: 3% 5%;\n      background: #518999;\n      color: white;\n      border-radius: 8px;\n      border: none;\n    }\n  }\n  .plant-img {\n    margin: 0 auto;\n    border-radius: 50%;\n    width: 125px;\n    height: 125px;\n    max-width: 100%;\n    background-image: url(", ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n  }\n  h2 {\n    text-align: center;\n    color: white; \n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}






const PlantCard = ({
  plant,
  editingPlant,
  deletePlant
}) => {
  const onEdit = e => {
    editingPlant(plant);
  };

  const onDelete = e => {
    deletePlant(plant.id);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlantCardStyle, {
    className: "plant-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "plant-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, plant.id), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, plant.species), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, plant.h3oFrequency), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "btn-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: onEdit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Edit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: onDelete,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Delete")));
};

/* harmony default export */ __webpack_exports__["default"] = (PlantCard);
const PlantCardStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].article(_templateObject(), _assets_grass_jpeg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_flower_jpeg__WEBPACK_IMPORTED_MODULE_4___default.a);

/***/ }),

/***/ "./src/components/PlantList.js":
/*!*************************************!*\
  !*** ./src/components/PlantList.js ***!
  \*************************************/
/*! exports provided: PlantList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantList", function() { return PlantList; });
/* harmony import */ var _Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ProfileCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProfileCard */ "./src/components/ProfileCard.js");
/* harmony import */ var _PlantCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlantCard */ "./src/components/PlantCard.js");
/* harmony import */ var _UploadForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UploadForm */ "./src/components/UploadForm.js");
/* harmony import */ var _assets_wall_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/wall.jpeg */ "./src/assets/wall.jpeg");
/* harmony import */ var _assets_wall_jpeg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_wall_jpeg__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/robertc1191/Desktop/Lambda-school/Build-Week-2/water-my-plants/src/components/PlantList.js";

function _templateObject3() {
  const data = Object(_Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nbackground-image: linear-gradient(to bottom, #99b272 0%, transparent 100%), url(", ");\nbackground-repeat: no-repeat;\n  background-position: bottom;\n  background-size: cover;\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\n.plant-grid {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n}\nh1 {\n  color: #1a202c;\n  margin: 8% auto;\n  font-size: 4rem;\n}\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\ndisplay: flex;\nflex-direction: column;\njustify-content: flex-end;\nwidth: 100%;\nh1 {\n  text-align: center;\n}\n.form {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 1px 1px 3px black;\n  border-radius: 4px;\n  label {\n    margin: 2% 0 2% 5%;\n    font-size: 1.6rem;\n  }\n  input {\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: 1px solid black;\n  }\n}\n\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\ndisplay: flex;\nflex-direction: column;\njustify-content: flex-start;\nalign-items: flex-start;\nbackground-image: linear-gradient(to bottom, #518999 0%, #CE96A6 100%);\nmax-width: 280px;\nwidth: 28%;\n.add-plant-container {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  form {\n    width: 90%;\n    margin: 5% auto 20%;\n  }\n  input {\n    background: transparent;\n    margin: 5% auto;\n    width: 90%;\n  }\n  .add-btn{\n    margin: 5% auto;\n    width: 60%;\n    background: #518999;\n    color: white;\n    border-radius: 8px;\n    border: none;\n  }\n}\n.upload-container {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  margin: 2% auto;\n  button {\n    margin: 3%;\n  }\n}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}









const PlantList = ({
  errors,
  touched,
  values,
  status
}) => {
  const plantList = [{
    username: 'robert',
    phoneNumber: "+1 (509)991-1965",
    password: 'password'
  }, {
    username: 'jonny',
    phoneNumber: "+44 (209)801-1456",
    password: 'asdf'
  }, {
    username: 'jill',
    phoneNumber: "+20 (242)164-1854",
    password: 'pass'
  }];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProfileStyle, {
    className: "profile-form-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProfileCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlantFormStyle, {
    className: "add-plant-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Add your plants here!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    className: "form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Nick Name:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    name: "nickName",
    placeholder: "Nick Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), touched.nickName && errors.nickName && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, errors.nickName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Species:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    name: "species",
    placeholder: "Species",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), touched.species && errors.species && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, errors.species), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "H2O Frequency:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    name: "h2oFrequency",
    placeholder: "H20 Frequency",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), touched.h2oFrequency && errors.h2oFrequency && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, errors.h2oFrequency), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "add-btn",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "ADD PLANT")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UploadForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlantListStyle, {
    className: "plant-list-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Dont forget to water your plants!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "plant-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, plantList ? plantList.map(plant => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PlantCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: plant.id,
    plant: plant,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })) : null)));
};
const FormikPlantForm = Object(formik__WEBPACK_IMPORTED_MODULE_2__["withFormik"])({
  mapPropsToValues({
    nickName,
    species,
    h2oFrequency,
    image
  }) {
    return {
      nickName: nickName || "",
      species: species || "",
      h2oFrequency: h2oFrequency || "",
      image: image || ""
    };
  },

  validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
    NickName: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Enter a name for your plant"),
    species: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("What species is your plant"),
    h2oFrequency: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Dont forget to water your plant!")
  })
})(PlantList); //!!! withFormik validation and Yup Error Messages //

/* harmony default export */ __webpack_exports__["default"] = (FormikPlantForm);
const ProfileStyle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
const PlantFormStyle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
const PlantListStyle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section(_templateObject3(), _assets_wall_jpeg__WEBPACK_IMPORTED_MODULE_8___default.a);

/***/ }),

/***/ "./src/components/ProfileCard.js":
/*!***************************************!*\
  !*** ./src/components/ProfileCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_profile_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/profile-img.jpg */ "./src/assets/profile-img.jpg");
/* harmony import */ var _assets_profile_img_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_profile_img_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/robertc1191/Desktop/Lambda-school/Build-Week-2/water-my-plants/src/components/ProfileCard.js";

function _templateObject() {
  const data = Object(_Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\ndisplay: flex;\njustify-content: center;\nflex-direction: column;\nmax-width: 100%;\nmax-height: 50vh;\ntext-align: center;\nimg {\n    border-radius: 50%;\n    margin: 25% auto 10%;\n    max-width: 80%;\n    max-height: 50vh;\n}\nh3 {\n    margin: 3%;\n    font-size: 1.6rem;\n}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}





const ProfileCard = () => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProfileCardStyle, {
    className: "profile-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "profile thumbnail",
    src: _assets_profile_img_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "profile-phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "+1 (509)991-1865"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "profile-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Nunya"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileCard);
const ProfileCardStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].aside(_templateObject());

/***/ }),

/***/ "./src/components/SignupForm.js":
/*!**************************************!*\
  !*** ./src/components/SignupForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actionCreators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/actionCreators */ "./src/state/actionCreators.js");
/* harmony import */ var _assets_waterLogo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/waterLogo.png */ "./src/assets/waterLogo.png");
/* harmony import */ var _assets_waterLogo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_waterLogo_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/robertc1191/Desktop/Lambda-school/Build-Week-2/water-my-plants/src/components/SignupForm.js";








const SignupForm = ({
  errors,
  touched,
  userData,
  values,
  status,
  userSignUpRequest // onSignUpInputChange

}) => {
  const handleSubmit = e => {
    console.log('in handleSub', values);
    e.preventDefault();
    userSignUpRequest(values);
  };

  return (// SIGN UP Form with validation using Yup for Formik //
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "signup-form",
      className: "form-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      className: "form",
      onSubmit: handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "water-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }, "User Name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      type: "text",
      name: "username",
      placeholder: "User Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }, "(Between 4-16 characters)"), touched.userName && errors.userName && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }, errors.userName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, "Mobile Phone #:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      type: "text",
      name: "phoneNumber",
      placeholder: "+1 (123) 456-7890",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }), touched.phone && errors.phone && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, errors.phone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }, "Password:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      type: "password",
      name: "password",
      placeholder: "Password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, "(Between 4-16 characters)"), touched.password && errors.password && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }, errors.password), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }, "SIGN UP")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "form-link",
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, "Already have an account?")) //!!! SIGN UP Form with validation using Yup for Formik //

  );
}; //phone number Regex Validation
// const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
//!!!phone number Regex Validation
// withFormik validation and Yup Error Messages //


const FormikSignupForm = Object(formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"])({
  mapPropsToValues({
    username,
    phoneNumber,
    password
  }) {
    return {
      username: username || "",
      phoneNumber: phoneNumber || "",
      password: password || ""
    };
  },

  validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    username: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(4, "Need atleast 4 characters").max(16, "No more than 16 characters").required("User Name is required"),
    phoneNumber: yup__WEBPACK_IMPORTED_MODULE_2__["string"](),
    password: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(4, "Need atleast 4 characters").max(16, "No more than 16 characters").required("Password is required")
  })
})(SignupForm); //!!! withFormik validation and Yup Error Messages //

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(state => state, _state_actionCreators__WEBPACK_IMPORTED_MODULE_5__)(FormikSignupForm));

/***/ }),

/***/ "./src/components/UploadForm.js":
/*!**************************************!*\
  !*** ./src/components/UploadForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/robertc1191/Desktop/Lambda-school/Build-Week-2/water-my-plants/src/components/UploadForm.js";


class UploadForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      selectedImg: null
    };

    this.imgSelectedHandler = e => {
      console.log(e.target);
      this.setState({
        selectedImg: e.target.files[0]
      });
    };

    this.imgUploadHandler = e => {
      console.log(e.target.files);
      const formData = new FormData();
      formData.append('image', this.state.selectedImg, this.state.selectedImg.name);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('https://build-week-4.herokuapp.com/api/plants', formData).then(res => {
        console.log(res);
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "upload-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      style: {
        display: 'none'
      },
      type: "file",
      onChange: this.imgSelectedHandler,
      ref: imgInput => this.imgInput = imgInput,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.imgInput.click(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Select an Image"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.imgUploadHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Upload"));
  }

}

/***/ }),

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

/***/ }),

/***/ "./src/helpers/axiosWithAuth.js":
/*!**************************************!*\
  !*** ./src/helpers/axiosWithAuth.js ***!
  \**************************************/
/*! exports provided: axiosWithAuth, asRoute, isLoggedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axiosWithAuth", function() { return axiosWithAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asRoute", function() { return asRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggedIn", function() { return isLoggedIn; });
/* harmony import */ var _Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/robertc1191/Desktop/Lambda-school/Build-Week-2/water-my-plants/src/helpers/axiosWithAuth.js";


 //create axios with Auth

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
};
const asRoute = (_ref) => {
  let Component = _ref.component,
      _ref$props = _ref.props,
      props = _ref$props === void 0 ? {} : _ref$props,
      rest = Object(_Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component", "props"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], Object.assign({}, rest, {
    render: routeProps => localStorage.getItem("login_token") ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, routeProps, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }));
};
const isLoggedIn = () => localStorage.getItem("login_token") ? true : false;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/reducers */ "./src/state/reducers.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/robertc1191/Desktop/Lambda-school/Build-Week-2/water-my-plants/src/index.js";








 // const store = createStore(
//   reducer,
//   {},
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   ),
// );

let store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_state_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_5__["default"]));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}))), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_8__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/state/actionCreators.js":
/*!*************************************!*\
  !*** ./src/state/actionCreators.js ***!
  \*************************************/
/*! exports provided: userSignUpRequest, setLoading, attemptLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSignUpRequest", function() { return userSignUpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return setLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attemptLogin", function() { return attemptLogin; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/state/actionTypes.js");

 // import * as withAuth from '../helpers/axiosWithAuth';

const registerApi = "https://build-week-4.herokuapp.com/api/user/register";
const loginApi = "https://build-week-4.herokuapp.com/api/user/login";
const userSignUpRequest = userData => dispatch => {
  console.log('in action creator', userData);
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(registerApi, userData).then(({
    data
  }) => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP"]
    });
    localStorage.setItem('login_token', data.payload);
  }).catch(err => console.log(err));
}; //   export const onSignUpInputChange = field => {
//       return {
//           type: types.ON_SIGNUP_INPUT_CHANGE,
//           payload: { [field.name]: field.value}
//       };
//   }

const setLoading = isLoading => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_LOADING"],
    payload: isLoading
  };
}; // export const logout = () => {
// 	localStorage.removeItem('login_token');
// 	return { type: types.LOGOUT };
// }

const attemptLogin = login => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(loginApi, login).then(({
    data
  }) => {
    console.log('logged in', data);
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["LOGIN"]
    });
    localStorage.setItem('login_token', data.payload);
  }).catch(err => console.log(err));
};

/***/ }),

/***/ "./src/state/actionTypes.js":
/*!**********************************!*\
  !*** ./src/state/actionTypes.js ***!
  \**********************************/
/*! exports provided: SIGN_UP, LOGIN, LOGOUT, SET_LOADING, ON_SIGNUP_INPUT_CHANGE, ON_LOGIN_INPUT_CHANGE, ON_PLANTS_INPUT_CHANGE, GET_PLANTS_LIST, SET_PLANTS_LIST, EDIT_PLANT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP", function() { return SIGN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SIGNUP_INPUT_CHANGE", function() { return ON_SIGNUP_INPUT_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_LOGIN_INPUT_CHANGE", function() { return ON_LOGIN_INPUT_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_PLANTS_INPUT_CHANGE", function() { return ON_PLANTS_INPUT_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PLANTS_LIST", function() { return GET_PLANTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PLANTS_LIST", function() { return SET_PLANTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_PLANT", function() { return EDIT_PLANT; });
const SIGN_UP = "SIGN_UP";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SET_LOADING = "SET_LOADING";
const ON_SIGNUP_INPUT_CHANGE = "ON_SIGNUP_INPUT_CHANGE";
const ON_LOGIN_INPUT_CHANGE = "ON_LOGIN_INPUT_CHANGE";
const ON_PLANTS_INPUT_CHANGE = "ON_PLANTS_INPUT_CHANGE";
const GET_PLANTS_LIST = "GET_PLANTS_LIST";
const SET_PLANTS_LIST = "SET_PLANTS_LIST";
const EDIT_PLANT = "EDIT_PLANT";

/***/ }),

/***/ "./src/state/reducers.js":
/*!*******************************!*\
  !*** ./src/state/reducers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/state/actionTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_robertc1191_Desktop_Lambda_school_Build_Week_2_water_my_plants_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


const initialSignupState = {
  username: "",
  password: "",
  phoneNumber: ""
};

const signupReducer = (state = initialSignupState, action) => {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP"]:
      return state;

    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["ON_SIGNUP_INPUT_CHANGE"]:
      return _objectSpread({}, state, {}, action.payload);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["LOGIN"]:
      return initialSignupState;

    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["ON_LOGIN_INPUT_CHANGE"]:
      return _objectSpread({}, state, {}, action.payload);

    default:
      return state;
  }
}; //     case types.LOGOUT:
// const initialLoadingState = true;
// const loadingReducer = (state = initialLoadingState, action) => {
//   switch (action.type) {
//     case types.LOGOUT:
//       return initialLoadingState;
//     case types.SET_LOADING:
//       return action.payload;
//     default:
//       return state;
//   }
// };
// const initialPlantsState = [];
// export const plantsReducer = (state = initialPlantsState, action) => {
//   switch (action.type) {
//     case types.LOGOUT:
//       return initialPlantsState;
//     case types.SET_PLANTS_LIST:
//       return action.payload;
//     default:
//       return state;
//   }
// };


/* harmony default export */ __webpack_exports__["default"] = (signupReducer);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/robertc1191/Desktop/Lambda-school/Build-Week-2/water-my-plants/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/robertc1191/Desktop/Lambda-school/Build-Week-2/water-my-plants/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map