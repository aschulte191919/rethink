(function() {
var exports = {};
exports.id = 44;
exports.ids = [44];
exports.modules = {

/***/ 7984:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_card; }
});

// EXTERNAL MODULE: ./stitches.config.ts
var stitches_config = __webpack_require__(6626);
;// CONCATENATED MODULE: ./components/card/card.tsx

const Card = (0,stitches_config/* styled */.zo)("div", {
  display: "flex",
  padding: "$6",
  margin: "$4",
  borderRadius: "$2",
  minWidth: "150px",
  maxWidth: "900px",
  backgroundColor: "#f8f6f0",
  variants: {
    hover: {
      true: {
        "&:hover": {
          boxShadow: "3px 3px 7px 0 rgba(0, 0, 0, 0.2), -4px -4px 9px 0 rgba(255, 255, 255, 0.55)",
          cursor: "pointer"
        }
      },
      false: {
        "&:hover": {
          boxShadow: "none",
          cursor: "none"
        }
      }
    },
    direction: {
      column: {
        flexDirection: "column"
      },
      row: {
        flexDirection: "row"
      }
    }
  },
  defaultVariants: {
    direction: "column"
  }
});
/* harmony default export */ var card = (Card);
;// CONCATENATED MODULE: ./components/card/index.tsx

/* harmony default export */ var components_card = (card);

/***/ }),

/***/ 90:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_top_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8238);
/* harmony import */ var _components_page_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9531);
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7984);








const Page = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_page_layout__WEBPACK_IMPORTED_MODULE_3__/* .PageWrapper */ .FE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "community"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_page_layout__WEBPACK_IMPORTED_MODULE_3__/* .ContentWrapper */ .vs, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_top_nav__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_page_layout__WEBPACK_IMPORTED_MODULE_3__/* .Wrapper */ .im, {
          children: [...Array(8)].map((e, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            hover: true,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              children: "To: Kate"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              children: "From: Ann"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
            })]
          }, i))
        })
      })]
    })]
  })
});

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ 1459:
/***/ (function(module) {

"use strict";
module.exports = require("@stitches/react");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,626,170], function() { return __webpack_exec__(90); });
module.exports = __webpack_exports__;

})();