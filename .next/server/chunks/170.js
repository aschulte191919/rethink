exports.id = 170;
exports.ids = [170];
exports.modules = {

/***/ 9531:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "vs": function() { return /* reexport */ ContentWrapper; },
  "FE": function() { return /* reexport */ PageWrapper; },
  "im": function() { return /* reexport */ Wrapper; }
});

// EXTERNAL MODULE: ./stitches.config.ts
var stitches_config = __webpack_require__(6626);
;// CONCATENATED MODULE: ./components/page-layout/page-layout.tsx

const ContentWrapper = (0,stitches_config/* styled */.zo)('div', {
  paddingRight: '0px',
  paddingLeft: '0px',
  width: '100%',
  '@md': {
    paddingRight: '75px',
    paddingLeft: '75px'
  },
  '@lg': {
    paddingRight: '150px',
    paddingLeft: '150px'
  },
  '@xl': {
    paddingRight: '200px',
    paddingLeft: '200px'
  }
});
const PageWrapper = (0,stitches_config/* styled */.zo)('div', {
  display: 'flex',
  width: '100%'
});
const Wrapper = (0,stitches_config/* styled */.zo)('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  variants: {
    direction: {
      row: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      }
    }
  }
});
;// CONCATENATED MODULE: ./components/page-layout/index.tsx


/***/ }),

/***/ 8238:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_top_nav; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./stitches.config.ts
var stitches_config = __webpack_require__(6626);
;// CONCATENATED MODULE: ./components/top-nav/top-nav.tsx




const NavBar = (0,stitches_config/* styled */.zo)('div', {
  display: 'flex',
  alignItems: 'center',
  height: '72px',
  marginBottom: '30px',
  paddingTop: '20px',
  justifyContent: 'space-between',
  width: '100%'
});
const NavBarGroup = (0,stitches_config/* styled */.zo)('div', {
  display: 'flex',
  alignItems: 'center'
});
const NavLink = (0,stitches_config/* styled */.zo)('div', {
  fontSize: '18px',
  fontWeight: '500',
  paddingLeft: '10px',
  paddingRight: '10px',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
});
const RethinkText = (0,stitches_config/* styled */.zo)('div', {
  fontSize: '20px',
  fontWeight: '500',
  paddingLeft: '$5',
  paddingRight: '$6',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
});
const RightNavBox = (0,stitches_config/* styled */.zo)('div', {
  display: 'flex'
});
const StyledAvatar = (0,stitches_config/* styled */.zo)('div', {
  borderRadius: '4px',
  cursor: 'pointer',
  height: '35px',
  margin: '10px',
  padding: '10px'
});

const TopNavigation = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavBar, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(NavBarGroup, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
        id: "Capa_1",
        enableBackground: "new 0 0 511.977 511.977",
        height: "40",
        viewBox: "0 0 511.977 511.977",
        width: "40",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
            cx: "279.865",
            cy: "501.977",
            r: "10"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "m382.353 338.712-4.145-1.178c-25.566-7.268-52.434-4.144-75.651 8.795-14.468 8.063-26.437 19.338-35.164 32.876-2.16-17.253-4-35.599-5.247-54.579 8.275 2.168 16.701 3.259 25.112 3.259 14.356 0 28.661-3.148 42.054-9.404 24.081-11.249 42.341-31.203 51.414-56.185l1.472-4.051c.908-2.499.786-5.256-.339-7.664-1.126-2.409-3.161-4.272-5.66-5.18l-4.05-1.471c-41.116-14.934-85.805-.98-111.729 31.424-.045-19.05.687-37.186 2.18-54.398 10.829 3.877 22.089 5.826 33.367 5.826 12.184 0 24.387-2.268 36.085-6.814 24.774-9.631 44.314-28.333 55.021-52.659l1.736-3.944c2.231-5.066-.069-10.982-5.135-13.212l-3.945-1.736c-24.329-10.71-51.37-11.301-76.142-1.671-12.675 4.928-23.968 12.243-33.421 21.458 2.102-10.107 4.539-19.792 7.316-29.041 50.268-20.682 74.739-78.223 54.569-128.845l-1.595-4.004c-.985-2.469-2.909-4.448-5.351-5.498s-5.201-1.087-7.671-.103l-4.002 1.594c-50.972 20.311-75.917 78.303-55.607 129.274l.584 1.466c-3.878 12.873-7.135 26.505-9.766 40.882-7.41-13.829-18.065-25.783-31.371-34.919-21.913-15.046-48.376-20.657-74.504-15.8l-4.237.787c-2.613.485-4.927 1.99-6.433 4.181-1.504 2.191-2.077 4.892-1.591 7.505l.787 4.236c4.856 26.132 19.597 48.81 41.509 63.855 16.771 11.515 36.202 17.503 56.114 17.503 4.524 0 9.075-.313 13.624-.937-1.451 17.089-2.18 35.012-2.171 53.76-23.041-33.084-65.025-50.179-106.334-39.636l-4.175 1.066c-5.363 1.369-8.602 6.827-7.232 12.191l1.066 4.175c11.474 44.942 52.04 74.906 96.429 74.906 7.238 0 14.584-.804 21.918-2.463 1.104 17.262 2.687 34.015 4.561 49.932-25.599-29.41-67.334-42.251-106.576-29.182l-4.088 1.361c-5.252 1.748-8.092 7.424-6.342 12.675l1.361 4.088c8.396 25.218 26.111 45.658 49.881 57.553 14.035 7.024 29.188 10.572 44.438 10.572 9.686 0 19.408-1.449 28.909-4.331 2.022 11.946 4.085 22.939 6.053 32.727.957 4.76 5.14 8.049 9.815 8.049.655 0 1.319-.065 1.987-.199 5.426-1.091 8.941-6.375 7.85-11.802-1.809-8.998-3.701-19.029-5.564-29.894 6.042 1.124 12.123 1.695 18.18 1.695 16.731 0 33.278-4.263 48.295-12.632 23.218-12.939 40.007-34.146 47.274-59.712l1.178-4.145c1.513-5.325-1.577-10.867-6.901-12.382zm-71.504-173.283c17.93-6.97 37.347-7.233 55.29-.857-8.924 16.822-23.421 29.742-41.351 36.712s-37.345 7.233-55.289.856c8.924-16.822 23.421-29.741 41.35-36.711zm-126.699 21.82c-15.859-10.889-27.014-26.782-31.851-45.202 18.93-2.1 37.769 2.601 53.625 13.488 15.859 10.889 27.014 26.782 31.851 45.202-18.927 2.103-37.769-2.601-53.625-13.488zm5.658 215.591c-17.202-8.608-30.432-22.82-37.752-40.399 38.016-9.599 77.618 10.222 92.72 46.401-18.457 4.679-37.765 2.606-54.968-6.002zm169.849-141.887c-7.792 17.374-21.402 31.225-38.829 39.367-17.426 8.14-36.781 9.69-55.109 4.514 16.072-35.758 56.198-54.504 93.938-43.881zm-44.236-237.625c10.171 32.289-1.5 67.015-27.565 86.951 3.093-7.292 6.436-14.255 10.047-20.859 2.655-4.857.871-10.947-3.986-13.603-4.857-2.652-10.947-.871-13.603 3.986-3.339 6.107-6.467 12.483-9.39 19.116-1.612-31.171 15.374-61.408 44.497-75.591zm-170.623 229.303c38.606-6.86 76.69 15.735 89.169 52.899-38.596 6.871-76.687-15.732-89.169-52.899zm186.244 144.811c-16.803 9.366-35.999 12.289-54.649 8.436 6.531-17.888 19.118-32.675 35.922-42.04 16.804-9.366 36.001-12.293 54.648-8.436-6.531 17.888-19.117 32.675-35.921 42.04z"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(RethinkText, {
          children: "rethink.ai"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/how-it-works",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          children: "about"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/community",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          children: "community"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/team",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          children: "team"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/employee-view",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
          children: "employee view"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(NavBarGroup, {
      children: /*#__PURE__*/jsx_runtime_.jsx(RightNavBox, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/profile",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(StyledAvatar, {
            children: "AS"
          })
        })
      })
    })]
  });
};

/* harmony default export */ var top_nav = (TopNavigation);
;// CONCATENATED MODULE: ./components/top-nav/index.ts

/* harmony default export */ var components_top_nav = (top_nav);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;