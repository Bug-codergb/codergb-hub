"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[9222],{

/***/ 22803:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: function() { return /* binding */ addLater; },
/* harmony export */   d: function() { return /* binding */ getUserLater; }
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

async function getUserLater(userId, offset, limit) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: '/later/user/' + userId,
    params: {
      offset,
      limit
    }
  });
}
// 添加至稍后观看
async function addLater(id) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/later/' + id
  });
}

/***/ }),

/***/ 99222:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ playlist; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/views/playlist/style.tsx

const PlaylistWrapper = styled_components_browser_esm/* default */.ZP.div`
  display: flex;
  align-items: flex-start;
`;
const LeftContainer = styled_components_browser_esm/* default */.ZP.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: ${30 / 40}rem ${30 / 40}rem;
  height: 86vh;
  background-image: url(${props => props.bgc});
  background-repeat: no-repeat;
  background-size: auto 9999px;
  background-position: center;
  border-radius: ${16 / 40}rem;
  overflow: hidden;
  .mask {
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.08);
  }
  .img-container {
    width: ${450 / 40}rem;
    border-radius: ${16 / 40}rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .later-label {
    font-size: ${30 / 40}rem;
    color: #fff;
    font-weight: bolder;
    margin: ${28 / 40}rem 0 0 0;
  }
  .user-name {
    font-size: ${18 / 40}rem;
    color: #fff;
    margin: ${20 / 40}rem 0 ${18 / 40}rem 0;
  }
  .vio-info {
    display: flex;
    align-items: center;
    .vio-count {
      font-size: ${16 / 40}rem;
      color: #d2cfd0;
    }
    .update-time {
      margin: 0 0 0 ${10 / 40}rem;
      font-size: ${16 / 40}rem;
      color: #d2cfd0;
    }
  }
`;
const RightContainer = styled_components_browser_esm/* default */.ZP.div`
  margin: 0 0 0 ${30 / 40}rem;
  width: 70%;
  height: 86vh;
  overflow-y: scroll;
  .vio-list {
    & > li {
      display: flex;
      align-items: flex-start;
      cursor: pointer;
      padding: ${20 / 40}rem 0 ${20 / 40}rem ${18 / 40}rem;
      border-radius: ${8 / 40}rem;
      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .cover-container {
        margin: 0 ${24 / 20}rem 0 0;
        width: ${200 / 40}rem;
        img {
          width: 100%;
          border-radius: 8px;
        }
      }
      .later-right-info {
        width: 70%;
        .desc {
          display: flex;
          align-items: center;
          margin: ${16 / 40}rem 0 0 0;
          .user-name,
          .play-count,
          .create-time {
            font-size: ${16 / 40}rem;
            color: #606060;
          }
          .play-count {
            margin: 0 ${8 / 40}rem;
          }
        }
      }
    }
  }
`;
// EXTERNAL MODULE: ./src/network/later/index.tsx
var later = __webpack_require__(22803);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
;// CONCATENATED MODULE: ./src/views/playlist/index.tsx






const Playlist = () => {
  const [userLater, setUserLater] = (0,react.useState)([]);
  const [count, setCount] = (0,react.useState)(0);
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  const navigate = (0,dist/* useNavigate */.s0)();
  const getUserLaterReq = async (userId, offset, limit) => {
    const result = await (0,later/* getUserLater */.d)(userId, offset, limit);
    if (result.status === 200) {
      setUserLater(result.data.list);
      setCount(result.data.count);
    }
  };
  (0,react.useEffect)(() => {
    getUserLaterReq(login.userMsg.userId, 0, 10).then(r => {});
  }, []);
  const videoRouterHandle = item => {
    navigate('/videoDetail', {
      replace: true,
      state: {
        id: item.id
      }
    });
  };
  return /*#__PURE__*/react.createElement(PlaylistWrapper, null, userLater && userLater.length !== 0 && /*#__PURE__*/react.createElement(LeftContainer, {
    bgc: userLater[0]?.video?.picUrl
  }, /*#__PURE__*/react.createElement("div", {
    className: "img-container"
  }, userLater && userLater[0] && /*#__PURE__*/react.createElement("img", {
    src: userLater[0].video.picUrl
  })), /*#__PURE__*/react.createElement("p", {
    className: "later-label"
  }, "\u7A0D\u540E\u89C2\u770B"), /*#__PURE__*/react.createElement("p", {
    className: "user-name"
  }, login.userMsg.userName), /*#__PURE__*/react.createElement("div", {
    className: "vio-info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "vio-count"
  }, count, "\u4E2A\u89C6\u9891"), /*#__PURE__*/react.createElement("div", {
    className: "update-time"
  }, "\u6628\u65E5\u66F4\u65B0")), /*#__PURE__*/react.createElement("div", {
    className: "mask"
  })), /*#__PURE__*/react.createElement(RightContainer, null, /*#__PURE__*/react.createElement("ul", {
    className: "vio-list"
  }, userLater && userLater.length !== 0 && userLater.map(item => {
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
    }, item.video.user.userName, "."), /*#__PURE__*/react.createElement("div", {
      className: "play-count"
    }, item.video.playCount, "\u6B21\u89C2\u770B."), /*#__PURE__*/react.createElement("div", {
      className: "create-time"
    }, moment_default()(item.createTime).fromNow(), "\u52A0\u5165"))));
  }))));
};
/* harmony default export */ var playlist = (/*#__PURE__*/(0,react.memo)(Playlist));

/***/ })

}]);
//# sourceMappingURL=749aaef034ff465bcbb6.bundle.js.map