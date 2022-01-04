(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4041:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ UserContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();

/***/ }),

/***/ 4898:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": function() { return /* binding */ magic; }
});

;// CONCATENATED MODULE: external "magic-sdk"
var external_magic_sdk_namespaceObject = require("magic-sdk");;
;// CONCATENATED MODULE: external "@magic-ext/oauth"
var oauth_namespaceObject = require("@magic-ext/oauth");;
;// CONCATENATED MODULE: ./lib/magic.tsx
var _process$env$NEXT_PUB;




const createMagic = key => {
  return  false && 0;
};

const magic = createMagic((_process$env$NEXT_PUB = "pk_live_D183037D2D6D1687") !== null && _process$env$NEXT_PUB !== void 0 ? _process$env$NEXT_PUB : "");

/***/ }),

/***/ 1476:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6626);
/* harmony import */ var _lib_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4041);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_magic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4898);
/* harmony import */ var _magiclabs_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9576);
/* harmony import */ var _magiclabs_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_magiclabs_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _magiclabs_ui_dist_cjs_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7388);
/* harmony import */ var _magiclabs_ui_dist_cjs_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_magiclabs_ui_dist_cjs_index_css__WEBPACK_IMPORTED_MODULE_7__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Login = /*#__PURE__*/(/* unused pure expression or super */ null && (React.lazy(() => __webpack_require__.e(/* import() */ 594).then(__webpack_require__.bind(__webpack_require__, 9594)))));
/* --------------------------------------------------------
 * Global Styles
 * ------------------------------------------------------*/

const globalStyles = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_2__/* .stitchesGlobal */ .IS)({
  body: {
    padding: "0",
    margin: "0",
    fontFamily: "Poppins",
    backgroundColor: "#f8f6f0"
  },
  a: {
    color: "inherit",
    textDecoration: "none"
  }
});

function MyApp({
  Component,
  pageProps
}) {
  globalStyles();
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // If isLoggedIn is true, set the UserContext with user data
  // Otherwise, redirect to /login and set UserContext to { user: null }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setLoading(true);
    _lib_magic__WEBPACK_IMPORTED_MODULE_5__/* .magic.user.isLoggedIn */ .m.user.isLoggedIn().then(isLoggedIn => {
      if (isLoggedIn) {
        _lib_magic__WEBPACK_IMPORTED_MODULE_5__/* .magic.user.getMetadata */ .m.user.getMetadata().then(userData => setUser(userData));
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/login");
        setUser(undefined);
      }
    });
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_magiclabs_ui__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_UserContext__WEBPACK_IMPORTED_MODULE_3__/* .UserContext.Provider */ .S.Provider, {
      value: {
        user,
        setUser,
        loading
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, _objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 7388:
/***/ (function() {



/***/ }),

/***/ 9576:
/***/ (function(module) {

"use strict";
module.exports = require("@magiclabs/ui");;

/***/ }),

/***/ 1459:
/***/ (function(module) {

"use strict";
module.exports = require("@stitches/react");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [626], function() { return __webpack_exec__(1476); });
module.exports = __webpack_exports__;

})();