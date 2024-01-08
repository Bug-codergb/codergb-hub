"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[537],{

/***/ 46139:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: function() { return /* binding */ useLoginMsg; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95998);

const useLoginMsg = () => {
  const login = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useSelector */ .v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  return login;
};

/***/ }),

/***/ 13032:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $x: function() { return /* binding */ uploadVideo; },
/* harmony export */   Ek: function() { return /* binding */ getUserRecordVideo; },
/* harmony export */   Fx: function() { return /* binding */ getSimilarVideo; },
/* harmony export */   Mo: function() { return /* binding */ getSubUserVideo; },
/* harmony export */   N$: function() { return /* binding */ getAllVideo; },
/* harmony export */   O2: function() { return /* binding */ getVideoDetail; },
/* harmony export */   Ty: function() { return /* binding */ createVideo; },
/* harmony export */   _M: function() { return /* binding */ getCollectionVideo; },
/* harmony export */   dd: function() { return /* binding */ recordVideo; },
/* harmony export */   fY: function() { return /* binding */ getVideoURL; },
/* harmony export */   hk: function() { return /* binding */ addPlayCount; },
/* harmony export */   lq: function() { return /* binding */ getThumbUserVideo; },
/* harmony export */   qI: function() { return /* binding */ getUserRecordThumb; },
/* harmony export */   sf: function() { return /* binding */ getUserVideo; }
/* harmony export */ });
/* unused harmony export mergeVideo */
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

async function uploadVideo(formData) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/video/upload',
    data: formData,
    headers: {
      'Content-type': 'multipart/form-data'
    }
  });
}
// 视频合并
async function mergeVideo(path, hash, name, type, total) {
  return await gbRequest.post({
    url: '/video/merge',
    data: {
      dest: path,
      hash,
      originalname: name,
      type,
      total
    }
  });
}
// 创建video
async function createVideo(videoId, title, desc, imgId, playlistId, tagIds, cateId, dt) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/video/create',
    data: {
      videoId,
      title,
      desc,
      imgId,
      playlistId,
      tagIds,
      cateId,
      dt
    }
  });
}
// 获取所有视频
async function getAllVideo(offset, limit, keyword) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/video/all',
    params: {
      offset,
      limit
    },
    data: {
      keyword
    }
  });
}
// 获取视频URL
async function getVideoURL(id) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: `/video/url/${id}`
  });
}
async function getVideoDetail(id) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: `/video/detail/${id}`
  });
}
// 获取用户视频
async function getUserVideo(id, keyword, offset, limit) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: `/user/video/${id}`,
    params: {
      offset,
      limit
    },
    data: {
      keyword
    }
  });
}
// 获取订阅用户视频
async function getSubUserVideo(userId, offset, limit, isMonth) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: `/video/sub/user/${userId}`,
    params: {
      offset,
      limit
    },
    data: {
      isMonth
    }
  });
}
// 获取用户点赞视频
async function getThumbUserVideo(userId, offset, limit) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/video/thumb/user/' + userId,
    params: {
      offset,
      limit
    }
  });
}
// 获取相关视频
async function getSimilarVideo(id, offset, limit) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/video/similar/' + id,
    params: {
      offset,
      limit
    }
  });
}
async function getCollectionVideo(id, offset, limit) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/video/collection/' + id,
    params: {
      offset,
      limit
    }
  });
}
async function recordVideo(id) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/record/' + id
  });
}
async function getUserRecordVideo(id) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: '/record/user/' + id
  });
}
async function getUserRecordThumb(id) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: '/record/thumb/' + id
  });
}
async function addPlayCount(id) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: 'video/playCount/' + id
  });
}

/***/ }),

/***/ 20537:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ dataAnalyze; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/echarts/index.js + 541 modules
var echarts = __webpack_require__(72866);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/views/profile/pages/dataAnalyze/childCpn/playData/style.tsx

const PlayDataWrapper = styled_components_browser_esm/* default */.ZP.div`
  .charts-container {
    width: ${750 / 40}rem;
    height: ${300 / 40}rem;
    background-color: #fff;
  }
`;
// EXTERNAL MODULE: ./src/hook/useLoginMsg/index.tsx
var useLoginMsg = __webpack_require__(46139);
// EXTERNAL MODULE: ./src/network/video/index.tsx
var video = __webpack_require__(13032);
;// CONCATENATED MODULE: ./src/views/profile/pages/dataAnalyze/childCpn/playData/index.tsx





const PlayData = () => {
  const divRef = (0,react.useRef)(null);
  const login = (0,useLoginMsg/* useLoginMsg */.y)();
  (0,react.useEffect)(() => {
    if (divRef.current) {
      (0,video/* getUserRecordVideo */.Ek)(login.userMsg.userId).then(res => {
        if (res.status === 200 && res.data.length !== 0) {
          const key = [];
          const value = [];
          for (const item of res.data) {
            key.push(item.createTime);
            value.push(item.count);
          }
          const chartDom = divRef.current;
          const myChart = echarts/* init */.S1(chartDom);
          const option = {
            title: {
              text: '作品近一个月播放量',
              textAlign: 'center',
              left: '50%',
              textStyle: {
                fontSize: 12
              }
            },
            legend: {
              show: false
            },
            tooltip: {
              show: true,
              trigger: 'axis'
            },
            xAxis: {
              type: 'category',
              data: key
            },
            yAxis: {
              type: 'value'
            },
            grid: {
              left: '5%',
              bottom: 0,
              top: '15%',
              right: '5%',
              containLabel: true
            },
            series: [{
              data: value,
              type: 'line',
              smooth: true,
              name: '播放量',
              lineStyle: {
                color: '#ec5b56'
              },
              itemStyle: {
                color: '#ec5b56'
              }
            }]
          };
          option && myChart.setOption(option);
          window.addEventListener('resize', () => {
            myChart.resize();
          });
        }
      });
    }
  }, [divRef, divRef.current]);
  return /*#__PURE__*/react.createElement(PlayDataWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "charts-container",
    ref: divRef
  }));
};
/* harmony default export */ var playData = (/*#__PURE__*/(0,react.memo)(PlayData));
;// CONCATENATED MODULE: ./src/views/profile/pages/dataAnalyze/childCpn/thumbData/style.tsx

const ThumbDataWrapper = styled_components_browser_esm/* default */.ZP.div`
  .charts-container {
    width: ${750 / 40}rem;
    height: ${300 / 40}rem;
    background-color: #fff;
  }
`;
;// CONCATENATED MODULE: ./src/views/profile/pages/dataAnalyze/childCpn/thumbData/index.tsx





const ThumbData = () => {
  const divRef = (0,react.useRef)(null);
  const login = (0,useLoginMsg/* useLoginMsg */.y)();
  (0,react.useEffect)(() => {
    if (divRef.current) {
      (0,video/* getUserRecordThumb */.qI)(login.userMsg.userId).then(res => {
        if (res.status === 200 && res.data.length !== 0) {
          const key = [];
          const value = [];
          for (const item of res.data) {
            key.push(item.createTime);
            value.push(item.count);
          }
          const chartDom = divRef.current;
          const myChart = echarts/* init */.S1(chartDom);
          const option = {
            title: {
              text: '作品近一个月作品被点赞数',
              textAlign: 'center',
              left: '50%',
              textStyle: {
                fontSize: 12
              }
            },
            legend: {
              show: false
            },
            tooltip: {
              show: true,
              trigger: 'axis'
            },
            xAxis: {
              type: 'category',
              data: key
            },
            yAxis: {
              type: 'value'
            },
            grid: {
              left: '5%',
              bottom: 0,
              top: '15%',
              right: '5%',
              containLabel: true
            },
            series: [{
              data: value,
              type: 'line',
              smooth: true,
              name: '点赞数',
              lineStyle: {
                color: '#61c373'
              },
              itemStyle: {
                color: '#61c373'
              }
            }]
          };
          option && myChart.setOption(option);
          window.addEventListener('resize', () => {
            myChart.resize();
          });
        }
      });
    }
  }, [divRef, divRef.current]);
  return /*#__PURE__*/react.createElement(ThumbDataWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "charts-container",
    ref: divRef
  }));
};
/* harmony default export */ var thumbData = (/*#__PURE__*/(0,react.memo)(ThumbData));
;// CONCATENATED MODULE: ./src/views/profile/pages/dataAnalyze/style.tsx

const DataAnalyzeWrapper = styled_components_browser_esm/* default */.ZP.div`
  .chart-list {
    .item {
      display: flex;
      justify-content: space-between;
    }
  }
`;
;// CONCATENATED MODULE: ./src/views/profile/pages/dataAnalyze/index.tsx




const DataAnalyze = () => {
  return /*#__PURE__*/react.createElement(DataAnalyzeWrapper, null, /*#__PURE__*/react.createElement("ul", {
    className: "chart-list"
  }, /*#__PURE__*/react.createElement("li", {
    className: "item"
  }, /*#__PURE__*/react.createElement(playData, null), /*#__PURE__*/react.createElement(thumbData, null))));
};
/* harmony default export */ var dataAnalyze = (/*#__PURE__*/(0,react.memo)(DataAnalyze));

/***/ })

}]);
//# sourceMappingURL=df17232ea09f443337fc.bundle.js.map