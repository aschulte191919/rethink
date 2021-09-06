(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9943:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./stitches.config.ts
var stitches_config = __webpack_require__(6626);
// EXTERNAL MODULE: external "@typeform/embed-react"
var embed_react_ = __webpack_require__(8810);
;// CONCATENATED MODULE: ./components/home/home.tsx




const Text = (0,stitches_config/* styled */.zo)("div", {
  fontSize: "$90",
  textAlign: "center",
  paddingBottom: "$10",
  variants: {
    color: {
      white: {
        color: "$white500"
      },
      black: {
        color: "$black500"
      }
    }
  }
});
const SubText = (0,stitches_config/* styled */.zo)("div", {
  fontSize: "$60",
  textAlign: "center"
});
const HomeWrapper = (0,stitches_config/* styled */.zo)("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "50px",
  paddingTop: "200px",
  "@md": {
    paddingRight: "200px",
    paddingLeft: "200px"
  }
});
const formButton = (0,stitches_config/* css */.iv)({
  border: "none",
  backgroundColor: "$black500",
  fontSize: "$30",
  color: "$white500",
  borderRadius: "$2",
  height: "60px",
  marginTop: "100px",
  width: "260px",
  cursor: "pointer"
});

const Home = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HomeWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Text, {
      children: "Wellness in the workpace for any employee"
    }), /*#__PURE__*/jsx_runtime_.jsx(SubText, {
      children: "Measure, predict, and analyze wellness with ease"
    }), /*#__PURE__*/jsx_runtime_.jsx(embed_react_.PopupButton, {
      id: "epMlQXpM",
      className: formButton(),
      children: "Try one of our employee forms"
    })]
  });
};

/* harmony default export */ var home = (Home);
;// CONCATENATED MODULE: ./components/home/index.tsx

/* harmony default export */ var components_home = (home);
// EXTERNAL MODULE: ./components/top-nav/index.ts + 1 modules
var top_nav = __webpack_require__(8238);
// EXTERNAL MODULE: ./components/page-layout/index.tsx + 1 modules
var page_layout = __webpack_require__(9531);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@stitches/react"
var react_ = __webpack_require__(1459);
;// CONCATENATED MODULE: ./assets/images/footer.png
/* harmony default export */ var footer = ({"src":"/_next/static/image/assets/images/footer.5dfbccc3e2019f2e5769c4df3eacceed.png","height":408,"width":612,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAnklEQVR42mOAgc5Zncwgesfls5zNsxrqQWxLf4N8huByF86IqiBFmMJJS+Y09c6fuCtYk0EouSgig8Ey0YAzvy4q3taKQbuuv3Fdc1/9+vAYt7VtM3uvNXZX9jIExfvo55XEphRXxU3yC7MK9Q2wrKztabqfVpZ5u6AoYiFDaGJgZGCqn0ttRZRVSUWUmo6VWFt6fvK68OSQe/amDC4A4sk3K0IorlUAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/footer/footer.tsx




const Container = (0,react_.styled)("div", {
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  position: "absolute",
  bottom: -50,
  zIndex: -1
});

const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      objectFit: "cover",
      alt: "plants",
      src: footer
    })
  });
};

/* harmony default export */ var footer_footer = (Footer);
;// CONCATENATED MODULE: ./components/footer/index.tsx

/* harmony default export */ var components_footer = (footer_footer);
;// CONCATENATED MODULE: ./pages/index.tsx









const Page = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(page_layout/* PageWrapper */.FE, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "rethink"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(page_layout/* ContentWrapper */.vs, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(top_nav/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
        children: /*#__PURE__*/jsx_runtime_.jsx(components_home, {})
      })]
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx(components_footer, {})]
});

/* harmony default export */ var pages = (Page);

/***/ }),

/***/ 1459:
/***/ (function(module) {

"use strict";
module.exports = require("@stitches/react");;

/***/ }),

/***/ 8810:
/***/ (function(module) {

"use strict";
module.exports = require("@typeform/embed-react");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,675,626,170], function() { return __webpack_exec__(9943); });
module.exports = __webpack_exports__;

})();