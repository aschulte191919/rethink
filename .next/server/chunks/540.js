exports.id = 540;
exports.ids = [540];
exports.modules = {

/***/ 1632:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_employee_sub_nav; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./hooks/useLocalStorage.tsx
var useLocalStorage = __webpack_require__(2323);
// EXTERNAL MODULE: ./stitches.config.ts
var stitches_config = __webpack_require__(6626);
;// CONCATENATED MODULE: ./components/employee-sub-nav/employee-sub-nav.tsx






const Wrapper = (0,stitches_config/* styled */.zo)("div", {
  display: "flex"
});
const Title = (0,stitches_config/* styled */.zo)("h1", {
  fontSize: "30px",
  paddingTop: "10px",
  textAlign: "center"
});
const NavLink = (0,stitches_config/* styled */.zo)("div", {
  fontSize: "15px",
  fontWeight: "500",
  paddingLeft: "10px",
  paddingRight: "10px",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline"
  }
});

const EmployeeSubNav = () => {
  const [subNav, setSubNavState] = (0,useLocalStorage/* useLocalStorage */._)("subNav", "available");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
      children: "surveys"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/surveys/available",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          onClick: () => setSubNavState("available"),
          children: "available surveys"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/surveys/past",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          onClick: () => setSubNavState("past"),
          children: "past surveys"
        })
      })]
    })]
  });
};

/* harmony default export */ var employee_sub_nav = (EmployeeSubNav);
;// CONCATENATED MODULE: ./components/employee-sub-nav/index.ts

/* harmony default export */ var components_employee_sub_nav = (employee_sub_nav);

/***/ }),

/***/ 2687:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_surveys; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./stitches.config.ts
var stitches_config = __webpack_require__(6626);
// EXTERNAL MODULE: external "@typeform/embed-react"
var embed_react_ = __webpack_require__(8810);
// EXTERNAL MODULE: external "ml5"
var external_ml5_ = __webpack_require__(6039);
;// CONCATENATED MODULE: ./components/surveys/surveys.jsx






const Wrapper = (0,stitches_config/* styled */.zo)("div", {
  display: "flex"
});

const Surveys = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(embed_react_.Widget, {
        id: "TnOJqgQA",
        style: {
          height: "400px",
          width: "50%",
          padding: "10px"
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(embed_react_.Widget, {
        id: "TnOJqgQA",
        style: {
          height: "400px",
          width: "50%",
          padding: "10px"
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(embed_react_.Widget, {
        id: "TnOJqgQA",
        style: {
          height: "400px",
          width: "50%",
          padding: "10px"
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(embed_react_.Widget, {
        id: "TnOJqgQA",
        style: {
          height: "400px",
          width: "50%",
          padding: "10px"
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(embed_react_.Widget, {
        id: "TnOJqgQA",
        style: {
          height: "400px",
          width: "50%",
          padding: "10px"
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(embed_react_.Widget, {
        id: "TnOJqgQA",
        style: {
          height: "400px",
          width: "50%",
          padding: "10px"
        }
      })]
    })]
  });
};

/* harmony default export */ var surveys = (Surveys);
;// CONCATENATED MODULE: ./components/surveys/index.tsx

/* harmony default export */ var components_surveys = (surveys);

/***/ })

};
;