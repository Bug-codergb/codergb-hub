"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[3495],{

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

/***/ 83495:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ thumb; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/views/thumb/style.tsx

const ThumbWrapper = styled_components_browser_esm/* default */.ZP.div`
  display: flex;
  align-items: flex-start;
`;
// EXTERNAL MODULE: ./src/network/video/index.tsx
var video = __webpack_require__(13032);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/views/user-playlist/style.tsx
var style = __webpack_require__(20865);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/views/thumb/index.tsx







const Thumb = () => {
  const [count, setCount] = (0,react.useState)(0);
  const [videoThumb, setVideoThumb] = (0,react.useState)([]);
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  const navigate = (0,dist/* useNavigate */.s0)();
  (0,react.useEffect)(() => {
    (0,video/* getThumbUserVideo */.lq)(login.userMsg.userId, 0, 10).then(data => {
      if (data.status === 200) {
        setCount(data.data.count);
        setVideoThumb(data.data.list);
      }
    });
  }, []);
  const videoRouterHandle = item => {
    navigate('/videoDetail', {
      replace: true,
      state: {
        id: item.id
      }
    });
  };
  return /*#__PURE__*/react.createElement(ThumbWrapper, null, videoThumb && /*#__PURE__*/react.createElement(style/* LeftContent */.PJ, {
    bgc: videoThumb && videoThumb.length !== 0 && videoThumb[0].video ? videoThumb[0].video.picUrl : login.userMsg.avatarUrl
  }, /*#__PURE__*/react.createElement("div", {
    className: "img-container"
  }, videoThumb && /*#__PURE__*/react.createElement("img", {
    src: videoThumb && videoThumb.length !== 0 ? videoThumb[0].video.picUrl : login.userMsg.avatarUrl
  })), /*#__PURE__*/react.createElement("p", {
    className: "later-label"
  }, "\u9876\u8FC7\u7684\u89C6\u9891"), /*#__PURE__*/react.createElement("p", {
    className: "user-name"
  }, login.userMsg.userName), /*#__PURE__*/react.createElement("div", {
    className: "vio-info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "vio-count"
  }, count, "\u4E2A\u89C6\u9891"), /*#__PURE__*/react.createElement("div", {
    className: "update-time"
  }, videoThumb && videoThumb[0] ? moment_default()(videoThumb && videoThumb[0] ? videoThumb[0].updateTime : '').format('yyyy-MM-DD HH:MM') : '暂无', "\u66F4\u65B0")), /*#__PURE__*/react.createElement("div", {
    className: "mask"
  })), /*#__PURE__*/react.createElement(style/* RightContent */.du, null, /*#__PURE__*/react.createElement("ul", {
    className: "vio-list"
  }, videoThumb && videoThumb.length !== 0 && videoThumb.map(item => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react.createElement("div", {
      className: "cover-container",
      onClick: e => {
        videoRouterHandle(item.video);
      }
    }, /*#__PURE__*/react.createElement("img", {
      src: item.video.picUrl
    })), /*#__PURE__*/react.createElement("div", {
      className: "later-right-info"
    }, /*#__PURE__*/react.createElement("p", {
      className: "vio-name text-nowrap-mul-line",
      onClick: e => {
        videoRouterHandle(item.video);
      }
    }, item.video.name), /*#__PURE__*/react.createElement("div", {
      className: "desc"
    }, /*#__PURE__*/react.createElement("div", {
      className: "user-name"
    }, item.user.userName, "."), /*#__PURE__*/react.createElement("div", {
      className: "play-count"
    }, item.video.playCount, "\u6B21\u89C2\u770B."), /*#__PURE__*/react.createElement("div", {
      className: "create-time"
    }, moment_default()(item.createTime).fromNow(), "\u52A0\u5165"))));
  }))));
};
/* harmony default export */ var thumb = (/*#__PURE__*/(0,react.memo)(Thumb));

/***/ })

}]);
//# sourceMappingURL=f1ab027ea6032f833b35.bundle.js.map