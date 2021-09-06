exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 6441:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_employee_profile; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "recharts"
var external_recharts_ = __webpack_require__(7847);
;// CONCATENATED MODULE: ./components/polar-grid/polar-grid.tsx



const data = [{
  subject: "Physical",
  A: 120,
  fullMark: 150
}, {
  subject: "Mental",
  A: 98,
  fullMark: 150
}, {
  subject: "Spiritual",
  A: 86,
  fullMark: 150
}, {
  subject: "Environmental",
  A: 99,
  fullMark: 150
}, {
  subject: "Social",
  A: 85,
  fullMark: 150
}, {
  subject: "Intellectual",
  A: 65,
  fullMark: 150
}];

const PolarGrid = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.ResponsiveContainer, {
    width: 500,
    height: 300,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_recharts_.RadarChart, {
      cx: 250,
      cy: 125,
      outerRadius: 100,
      width: 100,
      height: 200,
      data: data,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_recharts_.PolarGrid, {}), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.PolarAngleAxis, {
        dataKey: "subject"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.PolarRadiusAxis, {
        angle: 30,
        domain: [0, 150]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.Radar, {
        name: "Mike",
        dataKey: "A",
        stroke: "#511442",
        fill: "#511442",
        fillOpacity: 0.6
      })]
    })
  });
};

/* harmony default export */ var polar_grid = (PolarGrid);
;// CONCATENATED MODULE: ./components/polar-grid/index.tsx

/* harmony default export */ var components_polar_grid = (polar_grid);
// EXTERNAL MODULE: ./components/employee-card/index.ts + 1 modules
var employee_card = __webpack_require__(2329);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/bubble-chart/bubble-chart.tsx




const data01 = [{
  hour: "12a",
  index: 1,
  value: 170
}, {
  hour: "1a",
  index: 1,
  value: 180
}, {
  hour: "2a",
  index: 1,
  value: 150
}, {
  hour: "3a",
  index: 1,
  value: 120
}, {
  hour: "4a",
  index: 1,
  value: 200
}, {
  hour: "5a",
  index: 1,
  value: 300
}, {
  hour: "6a",
  index: 1,
  value: 400
}, {
  hour: "7a",
  index: 1,
  value: 200
}, {
  hour: "8a",
  index: 1,
  value: 100
}, {
  hour: "9a",
  index: 1,
  value: 150
}, {
  hour: "10a",
  index: 1,
  value: 160
}, {
  hour: "11a",
  index: 1,
  value: 170
}, {
  hour: "12a",
  index: 1,
  value: 180
}, {
  hour: "1p",
  index: 1,
  value: 144
}, {
  hour: "2p",
  index: 1,
  value: 166
}, {
  hour: "3p",
  index: 1,
  value: 145
}, {
  hour: "4p",
  index: 1,
  value: 150
}, {
  hour: "5p",
  index: 1,
  value: 170
}, {
  hour: "6p",
  index: 1,
  value: 180
}, {
  hour: "7p",
  index: 1,
  value: 165
}, {
  hour: "8p",
  index: 1,
  value: 130
}, {
  hour: "9p",
  index: 1,
  value: 140
}, {
  hour: "10p",
  index: 1,
  value: 170
}, {
  hour: "11p",
  index: 1,
  value: 180
}];
const data02 = [{
  hour: "12a",
  index: 1,
  value: 160
}, {
  hour: "1a",
  index: 1,
  value: 180
}, {
  hour: "2a",
  index: 1,
  value: 150
}, {
  hour: "3a",
  index: 1,
  value: 120
}, {
  hour: "4a",
  index: 1,
  value: 200
}, {
  hour: "5a",
  index: 1,
  value: 300
}, {
  hour: "6a",
  index: 1,
  value: 100
}, {
  hour: "7a",
  index: 1,
  value: 200
}, {
  hour: "8a",
  index: 1,
  value: 100
}, {
  hour: "9a",
  index: 1,
  value: 150
}, {
  hour: "10a",
  index: 1,
  value: 160
}, {
  hour: "11a",
  index: 1,
  value: 160
}, {
  hour: "12a",
  index: 1,
  value: 180
}, {
  hour: "1p",
  index: 1,
  value: 144
}, {
  hour: "2p",
  index: 1,
  value: 166
}, {
  hour: "3p",
  index: 1,
  value: 145
}, {
  hour: "4p",
  index: 1,
  value: 150
}, {
  hour: "5p",
  index: 1,
  value: 160
}, {
  hour: "6p",
  index: 1,
  value: 180
}, {
  hour: "7p",
  index: 1,
  value: 165
}, {
  hour: "8p",
  index: 1,
  value: 130
}, {
  hour: "9p",
  index: 1,
  value: 140
}, {
  hour: "10p",
  index: 1,
  value: 160
}, {
  hour: "11p",
  index: 1,
  value: 180
}];

const parseDomain = () => [0, Math.max(Math.max.apply(null, data01.map(entry => entry.value)), Math.max.apply(null, data02.map(entry => entry.value)))];

const renderTooltip = props => {
  const {
    active,
    payload
  } = props;

  if (active && payload && payload.length) {
    const data = payload[0] && payload[0].payload;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        backgroundColor: "#fff",
        border: "1px solid #999",
        margin: 0,
        padding: 10
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: data.hour
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "value: "
        }), data.value]
      })]
    });
  }

  return null;
};

const BubbleChart = () => {
  const domain = parseDomain();
  const range = [16, 225];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_recharts_.ScatterChart, {
      width: 700,
      height: 60,
      margin: {
        top: 10,
        right: 0,
        bottom: 0,
        left: 0
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_recharts_.XAxis, {
        type: "category",
        dataKey: "hour",
        interval: 0,
        tick: {
          fontSize: 0
        },
        tickLine: {
          transform: "translate(0, -6)"
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.YAxis, {
        type: "number",
        dataKey: "index",
        name: "mood",
        height: 10,
        width: 80,
        tick: false,
        tickLine: false,
        axisLine: false,
        label: {
          value: "mood",
          position: "insideRight"
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.ZAxis, {
        type: "number",
        dataKey: "value",
        domain: domain,
        range: range
      }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.Tooltip, {
        cursor: {
          strokeDasharray: "3 3"
        },
        wrapperStyle: {
          zIndex: 100
        },
        content: renderTooltip
      }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.Scatter, {
        data: data01,
        fill: "#511442"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_recharts_.ScatterChart, {
      width: 700,
      height: 60,
      margin: {
        top: 10,
        right: 0,
        bottom: 0,
        left: 0
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_recharts_.XAxis, {
        type: "category",
        dataKey: "hour",
        interval: 0,
        tick: {
          fontSize: 0
        },
        tickLine: {
          transform: "translate(0, -6)"
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.YAxis, {
        type: "number",
        dataKey: "index",
        name: "body",
        height: 10,
        width: 80,
        tick: false,
        tickLine: false,
        axisLine: false,
        label: {
          value: "body",
          position: "insideRight"
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.ZAxis, {
        type: "number",
        dataKey: "value",
        domain: domain,
        range: range
      }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.Tooltip, {
        cursor: {
          strokeDasharray: "3 3"
        },
        wrapperStyle: {
          zIndex: 100
        },
        content: renderTooltip
      }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.Scatter, {
        data: data01,
        fill: "#511442"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_recharts_.ScatterChart, {
      width: 700,
      height: 60,
      margin: {
        top: 10,
        right: 0,
        bottom: 0,
        left: 0
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_recharts_.XAxis, {
        type: "category",
        dataKey: "hour",
        interval: 0,
        tick: {
          fontSize: 0
        },
        tickLine: {
          transform: "translate(0, -6)"
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.YAxis, {
        type: "number",
        dataKey: "index",
        name: "social",
        height: 10,
        width: 80,
        tick: false,
        tickLine: false,
        axisLine: false,
        label: {
          value: "social",
          position: "insideRight"
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.ZAxis, {
        type: "number",
        dataKey: "value",
        domain: domain,
        range: range
      }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.Tooltip, {
        cursor: {
          strokeDasharray: "3 3"
        },
        wrapperStyle: {
          zIndex: 100
        },
        content: renderTooltip
      }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_.Scatter, {
        data: data01,
        fill: "#511442"
      })]
    })]
  });
};

/* harmony default export */ var bubble_chart = (BubbleChart);
;// CONCATENATED MODULE: ./components/bubble-chart/index.tsx

/* harmony default export */ var components_bubble_chart = (bubble_chart);
// EXTERNAL MODULE: ./components/page-layout/index.tsx + 1 modules
var page_layout = __webpack_require__(9531);
;// CONCATENATED MODULE: ./components/employee-profile/employee-profile.tsx






const employee = [{
  name: "Sarah Smith",
  position: "Software Engineer",
  wellnessScore: 100,
  src: "https://images.unsplash.com/photo-1520998116484-6eeb2f72b5b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
}];

const EmployeeProfile = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(page_layout/* Wrapper */.im, {
    direction: "column",
    children: [/*#__PURE__*/jsx_runtime_.jsx(employee_card/* default */.Z, {
      name: employee[0].name,
      position: employee[0].position,
      src: employee[0].src
    }, 1), /*#__PURE__*/jsx_runtime_.jsx(components_polar_grid, {}), /*#__PURE__*/jsx_runtime_.jsx(components_bubble_chart, {})]
  });
};

/* harmony default export */ var employee_profile = (EmployeeProfile);
;// CONCATENATED MODULE: ./components/employee-profile/index.tsx

/* harmony default export */ var components_employee_profile = (employee_profile);

/***/ })

};
;