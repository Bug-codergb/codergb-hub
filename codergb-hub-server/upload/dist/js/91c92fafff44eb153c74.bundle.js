"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[2068],{

/***/ 14638:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: function() { return /* binding */ getAllCate; }
/* harmony export */ });
/* unused harmony export getCateExplore */
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

async function getAllCate(offset, limit) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: '/cate/all',
    params: {
      offset,
      limit
    }
  });
}
async function getCateExplore() {
  return await gbRequest.get({
    url: '/cate/explore'
  });
}

/***/ }),

/***/ 24199:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ views_all; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/network/category/index.tsx
var category = __webpack_require__(14638);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/assets/img/cate.png
var cate_namespaceObject = __webpack_require__.p + "images/91c9c5048ff9683f6f2d.png";
;// CONCATENATED MODULE: ./src/views/all/style.tsx


const AllWrapper = styled_components_browser_esm/* default */.ZP.div`
  .cate-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    li.item {
      background-image: url(${cate_namespaceObject}),
        linear-gradient(312deg, rgb(192, 208, 255) 3%, rgb(112, 147, 204) 100%);
      background-position: center;
      background-size: cover;
      color: #fff;
      padding: 5px 15px;
      margin: 0 10px 0 0;
      border-radius: 4px;
      cursor: pointer;
      &.active {
        background-image: url(${cate_namespaceObject}),
          linear-gradient(303deg, rgb(255, 155, 126) -10%, rgb(255, 21, 21) 92%);
      }
    }
  }
`;
;// CONCATENATED MODULE: ./src/views/all/index.tsx



const AllVideo = () => {
  const [cate, setCate] = (0,react.useState)([]);
  const [count, setCount] = (0,react.useState)(0);
  (0,react.useEffect)(() => {
    (0,category/* getAllCate */.I)(0, 10).then(res => {
      if (res.status === 200) {
        setCate(res.data.list);
        setCount(res.data.count);
      }
    });
  }, []);
  const [currentIndex, setCurrentIndex] = (0,react.useState)(0);
  const liClick = (item, index) => {
    setCurrentIndex(index);
  };
  return /*#__PURE__*/react.createElement(AllWrapper, null, /*#__PURE__*/react.createElement("ul", {
    className: "cate-list"
  }, cate && cate.length !== 0 && cate.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      className: `item ${currentIndex === index ? 'active' : ''}`,
      onClick: () => {
        liClick(item, index);
      },
      key: item.id
    }, item.name);
  })));
};
/* harmony default export */ var views_all = (/*#__PURE__*/(0,react.memo)(AllVideo));

/***/ })

}]);
//# sourceMappingURL=91c92fafff44eb153c74.bundle.js.map