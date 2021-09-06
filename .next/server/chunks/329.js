exports.id = 329;
exports.ids = [329];
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

/***/ 2329:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_employee_card; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./stitches.config.ts
var stitches_config = __webpack_require__(6626);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/card/index.tsx + 1 modules
var card = __webpack_require__(7984);
;// CONCATENATED MODULE: ./components/employee-card/employee-card.tsx





const Name = (0,stitches_config/* styled */.zo)("h2", {
  fontSize: "20px"
});
const SubText = (0,stitches_config/* styled */.zo)("div", {
  fontSize: "14px",
  color: "gray"
}); // const Emotions = () => (
//   <div style={{ display: 'flex' }}>
//     <Emoji symbol='😡' />
//     <Emoji symbol='😩' />
//     <Emoji symbol='😳' />
//     <Emoji symbol='😐' />
//     <Emoji symbol='😀' label='value' />
//   </div>
// )

const EmployeeCard = props => {
  const {
    name,
    position,
    src,
    hover
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(card/* default */.Z, {
    hover: hover,
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      width: 320,
      height: 250,
      objectFit: "cover",
      alt: "Headshot",
      src: src
    }), /*#__PURE__*/jsx_runtime_.jsx(Name, {
      children: name
    }), /*#__PURE__*/jsx_runtime_.jsx(SubText, {
      children: position
    })]
  });
};

/* harmony default export */ var employee_card = (EmployeeCard);
;// CONCATENATED MODULE: ./components/employee-card/index.ts

/* harmony default export */ var components_employee_card = (employee_card);

/***/ })

};
;