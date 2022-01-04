(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3367:
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
// EXTERNAL MODULE: external "@stitches/react"
var react_ = __webpack_require__(1459);
;// CONCATENATED MODULE: ./components/footer/footer.tsx

 // import FooterImage from "../../assets/images/footer.png";

const Container = (0,react_.styled)("div", {
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  position: "absolute",
  bottom: -50,
  zIndex: -1
});

const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {});
};

/* harmony default export */ var footer = (Footer);
;// CONCATENATED MODULE: ./components/footer/index.tsx

/* harmony default export */ var components_footer = (footer);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/switch/switch.jsx





const SwitchInput = (0,stitches_config/* styled */.zo)("input", {
  height: "0",
  width: "0",
  visibility: "hidden"
});
const SwitchLabel = (0,stitches_config/* styled */.zo)("label", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
  width: "30px",
  height: "15px",
  borderRadius: "100px",
  border: "2px solid gray",
  position: "relative",
  transition: "background-color 0.2s",
  marginRight: "5px"
});
const SwitchButton = (0,stitches_config/* styled */.zo)("span", {
  content: "",
  position: "absolute",
  top: "2px",
  left: "2px",
  width: "12px",
  height: "12px",
  borderRadius: " 45px",
  transition: "0.2s",
  background: "grey",
  boxShadow: "0 0 2px 0 rgba(10, 10, 10, 0.29)",
  [`${SwitchInput}:checked + ${SwitchLabel} &`]: {
    left: " calc(100% - 2px)",
    transform: "translateX(-100%)"
  },
  [`${SwitchInput}:active &`]: {
    width: "45px"
  }
});

const Switch = ({
  id,
  toggled,
  onChange,
  label
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(SwitchInput, {
      className: "switch-checkbox",
      id: id,
      type: "checkbox",
      checked: toggled ? toggled : undefined,
      onChange: onChange
    }), /*#__PURE__*/jsx_runtime_.jsx(SwitchLabel, {
      htmlFor: id,
      children: /*#__PURE__*/jsx_runtime_.jsx(SwitchButton, {})
    }), label]
  });
};

/* harmony default export */ var switch_switch = (Switch);
;// CONCATENATED MODULE: ./components/switch/index.ts

/* harmony default export */ var components_switch = (switch_switch);
// EXTERNAL MODULE: ./hooks/useLocalStorage.tsx
var useLocalStorage = __webpack_require__(2323);
;// CONCATENATED MODULE: ./pages/index.tsx











const Page = () => {
  const [admin, setAdmin] = (0,useLocalStorage/* useLocalStorage */._)("admin", true);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
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
    }), /*#__PURE__*/jsx_runtime_.jsx(components_switch, {
      label: `switch to ${!admin ? "admin" : "employee"} view`,
      id: "test-switch",
      onChange: () => setAdmin(!admin),
      toggled: undefined
    }), /*#__PURE__*/jsx_runtime_.jsx(components_footer, {})]
  });
};

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
var __webpack_exports__ = __webpack_require__.X(0, [664,626,170], function() { return __webpack_exec__(3367); });
module.exports = __webpack_exports__;

})();