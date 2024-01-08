"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[5092],{

/***/ 61860:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ add; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 30 modules
var es_select = __webpack_require__(42239);
// EXTERNAL MODULE: ./node_modules/antd/es/notification/index.js + 1 modules
var notification = __webpack_require__(38648);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 8 modules
var modal = __webpack_require__(48889);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 14 modules
var input = __webpack_require__(50817);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js + 1 modules
var PlusOutlined = __webpack_require__(49101);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EyeInvisibleOutlined.js + 1 modules
var EyeInvisibleOutlined = __webpack_require__(88633);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EyeOutlined.js + 1 modules
var EyeOutlined = __webpack_require__(95357);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/components/content/add/style.tsx

const AddWrapper = styled_components_browser_esm/* default */.ZP.div`
  background-color: #fff;
  box-shadow: 0 0 ${15 / 40}rem rgba(0, 0, 0, 0.18);
  .add-list {
    padding: ${26 / 40}rem 0;
    & > li {
      padding: ${12 / 40}rem ${20 / 40}rem;
      cursor: pointer;
      .name {
        font-size: ${18 / 40}rem;
      }
      &:hover {
        background-color: #e5e5e5;
      }
    }
  }
  .ant-select {
    width: 100%;
  }
  .create-playlist {
    padding: 0 0 ${20 / 40}rem 0;
    p {
      display: flex;
      justify-content: flex-start;
      font-size: ${18 / 40}rem;
      color: #606060;
      margin: ${14 / 40}rem 0;
    }
    .private {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .create-label {
      font-size: ${18 / 40}rem;
      color: #065fd4;
      margin: ${20 / 40}rem 0 0 0;
      cursor: pointer;
      width: 100%;
    }
  }
`;
// EXTERNAL MODULE: ./src/constant/addList.ts
var addList = __webpack_require__(35824);
;// CONCATENATED MODULE: ./src/components/content/playlist/style.tsx

const PlaylistWrapper = styled_components_browser_esm/* default */.ZP.div`
  .add-play-list {
    & > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${8 / 40}rem 0;
      .left-container {
        display: flex;
        align-items: center;
        .play-list-name {
          margin: 0 0 0 ${30 / 40}rem;
        }
      }
    }
  }
`;
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__(9676);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/network/playlist/index.tsx
var network_playlist = __webpack_require__(33422);
;// CONCATENATED MODULE: ./src/components/content/playlist/index.tsx






const Playlist = props => {
  const {
    select
  } = props;
  const [playlist, setPlaylist] = (0,react.useState)([]);
  const [count, setCount] = (0,react.useState)(0);
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  (0,react.useEffect)(() => {
    (0,network_playlist/* getUserPlaylist */.N3)(login.userMsg.userId, 0, 10).then(data => {
      if (data.status === 200) {
        setPlaylist(data.data.list);
        setCount(data.data.count);
      }
    });
  }, [login]);
  const selectChangeHandle = (e, item) => {
    select(e.target.checked, item);
  };
  return /*#__PURE__*/react.createElement(PlaylistWrapper, null, /*#__PURE__*/react.createElement("ul", {
    className: "add-play-list"
  }, playlist && playlist.length !== 0 && playlist.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react.createElement("div", {
      className: "left-container"
    }, /*#__PURE__*/react.createElement("div", {
      className: "check"
    }, /*#__PURE__*/react.createElement(es_checkbox/* default */.Z, {
      onChange: e => {
        selectChangeHandle(e, item);
      }
    })), /*#__PURE__*/react.createElement("div", {
      className: "play-list-name"
    }, item.name)), /*#__PURE__*/react.createElement("div", {
      className: "right-container"
    }, item.isPublic === 1 && /*#__PURE__*/react.createElement(EyeOutlined/* default */.Z, null), item.isPublic !== 1 && /*#__PURE__*/react.createElement(EyeInvisibleOutlined/* default */.Z, null)));
  })));
};
/* harmony default export */ var playlist = (/*#__PURE__*/(0,react.memo)(Playlist));
// EXTERNAL MODULE: ./src/network/later/index.tsx
var later = __webpack_require__(22803);
;// CONCATENATED MODULE: ./src/components/content/add/index.tsx








const {
  Option
} = es_select["default"];
const Add = /*#__PURE__*/(0,react.forwardRef)((props, propsRef) => {
  const {
    id
  } = props;
  const [isShowAddPlay, setIsShowPlay] = (0,react.useState)(false);
  const [isCreate, setIsCreate] = (0,react.useState)(false);
  const [keyIndex, setKeyIndex] = (0,react.useState)(1);
  const [name, setName] = (0,react.useState)('');
  const [isPublic, setIsPublic] = (0,react.useState)(0);
  const openNotification = placement => {
    notification/* default */.Z.info({
      message: `已成功添加至稍后观看`,
      description: '在"稍后观看"查看您添加的视频',
      placement
    });
  };
  const liClick = item => {
    if (item.name === addList/* ADD_PLAYLIST */.M0) {
      setIsShowPlay(true);
    }
    if (item.name === addList/* ADD_WATCH_LATER */.nu) {
      (0,later/* addLater */.T)(id).then(data => {
        console.log(data);
        if (data.status === 200) {
          openNotification('bottomLeft');
        }
      }).catch(err => {});
    }
  };
  (0,react.useImperativeHandle)(propsRef, () => {
    return {
      liClick
    };
  });
  const cancelHandle = () => {
    setIsShowPlay(false);
  };
  const nameInpHandle = e => {
    setName(e.currentTarget.value);
  };
  const selectPublicHandle = value => {
    setIsPublic(value);
  };
  // 创建播放列表
  const createHandle = () => {
    if (name) {
      (0,network_playlist/* createPlaylist */.cg)(name, name, isPublic).then(data => {
        if (data.status === 200) {
          setIsCreate(false);
          setKeyIndex(keyIndex + 1);
        }
      });
    }
  };
  const checkHandle = (checked, item) => {
    if (checked) {
      (0,network_playlist/* addVideoPlaylist */.xW)(id, item.id).then(data => {
        if (data.status === 200) {
          notification/* default */.Z.info({
            message: `已成功添加至${item.name}`,
            description: `在"${item.name}"查看您添加的视频`,
            placement: 'bottomLeft'
          });
        }
      });
    }
  };
  const createPlaylistHandler = e => {
    e.stopPropagation();
    setIsCreate(true);
  };
  return /*#__PURE__*/react.createElement(AddWrapper, null, /*#__PURE__*/react.createElement("div", {
    onClick: e => {
      e.stopPropagation();
    }
  }, /*#__PURE__*/react.createElement(modal/* default */.Z, {
    key: id,
    title: "\u4FDD\u5B58\u5230...",
    width: '30%',
    destroyOnClose: true,
    maskClosable: false,
    open: isShowAddPlay,
    onCancel: e => {
      cancelHandle();
    },
    footer: !isCreate ? [/*#__PURE__*/react.createElement("div", {
      className: "add-new-playlist"
    }, /*#__PURE__*/react.createElement(PlusOutlined/* default */.Z, null), /*#__PURE__*/react.createElement("div", {
      className: "add-label",
      onClick: e => {
        createPlaylistHandler(e);
      }
    }, "\u65B0\u5EFA\u64AD\u653E\u5217\u8868"))] : [/*#__PURE__*/react.createElement("div", {
      className: "create-playlist"
    }, /*#__PURE__*/react.createElement("p", null, "\u540D\u79F0"), /*#__PURE__*/react.createElement(input["default"], {
      placeholder: "\u8BF7\u8F93\u5165\u64AD\u653E\u5217\u8868\u540D\u79F0",
      showCount: true,
      maxLength: 20,
      onInput: e => {
        nameInpHandle(e);
      }
    }), /*#__PURE__*/react.createElement("p", null, "\u9690\u79C1\u8BBE\u7F6E"), /*#__PURE__*/react.createElement(es_select["default"], {
      onChange: selectPublicHandle,
      value: isPublic,
      placeholder: '请选择播放列表属性'
    }, /*#__PURE__*/react.createElement(Option, {
      value: 0
    }, /*#__PURE__*/react.createElement("div", {
      className: "private"
    }, /*#__PURE__*/react.createElement("div", {
      className: "name"
    }, "\u79C1\u4EAB"), /*#__PURE__*/react.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/react.createElement(EyeInvisibleOutlined/* default */.Z, null)))), /*#__PURE__*/react.createElement(Option, {
      value: 1
    }, /*#__PURE__*/react.createElement("div", {
      className: "private"
    }, /*#__PURE__*/react.createElement("div", {
      className: "name"
    }, "\u516C\u5F00"), /*#__PURE__*/react.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/react.createElement(EyeOutlined/* default */.Z, null))))), /*#__PURE__*/react.createElement("div", {
      className: "create-label",
      onClick: e => {
        createHandle();
      }
    }, "\u521B\u5EFA"))]
  }, isShowAddPlay && /*#__PURE__*/react.createElement(playlist, {
    key: keyIndex,
    select: (checked, item) => {
      checkHandle(checked, item);
    }
  }))));
});
/* harmony default export */ var add = (/*#__PURE__*/(0,react.memo)(Add));

/***/ }),

/***/ 95092:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ videoDetail; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PlayCircleOutlined.js + 1 modules
var PlayCircleOutlined = __webpack_require__(29934);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PauseCircleOutlined.js + 1 modules
var PauseCircleOutlined = __webpack_require__(46561);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ExpandOutlined.js + 1 modules
var ExpandOutlined = __webpack_require__(62602);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CompressOutlined.js + 1 modules
var CompressOutlined = __webpack_require__(22699);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/index.js
var layout = __webpack_require__(97183);
// EXTERNAL MODULE: ./node_modules/antd/es/slider/index.js + 15 modules
var slider = __webpack_require__(99177);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/constant/centerWidth.tsx
const centerWidth = 1780;

;// CONCATENATED MODULE: ./src/components/content/detail/videoDetail/style.tsx


const VideoDetailWrapper = styled_components_browser_esm/* default */.ZP.div``;
const CenterContent = styled_components_browser_esm/* default */.ZP.div`
  width: ${centerWidth / 40}rem;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
`;
const LeftContentWrapper = styled_components_browser_esm/* default */.ZP.div`
  width: 67%;
  padding: ${20 / 40}rem 0;
  .video-dm-container {
    width: ${1190 / 40}rem;
    height: ${640 / 40}rem;
    position: relative;
    overflow: hidden;
    .inner {
      display: flex;
      align-items: center;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .start,
      .end {
        width: 400px;
        height: 100%;
      }
      .start {
        display: flex;
        justify-content: flex-end;
        position: relative;
        z-index: 99;
        & > ul {
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
          & > li {
            text-align: end;
            list-style: none;
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: 18px;
            padding: 5px 12px 8px 12px;
            color: #fff;
            font-weight: bolder;
            letter-spacing: 2px;
            font-size: ${20 / 40}rem;
            text-shadow: 1px 1px 2px black;
          }
        }
      }
      .text {
        white-space: nowrap;
        color: #ec4141;
      }
    }
  }
  .video-container {
    width: ${1190 / 40}rem;
    height: ${640 / 40}rem;
    overflow: hidden;
    background-color: black;
    border-radius: 3px;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-position: 50% 50%;
      object-fit: contain;
    }
    .controller-container {
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      padding: 20px 0 15px 0;
      transform: translate(0, -100%);
      color: #fff;
      background: linear-gradient(to top, rgba(33, 33, 33, 0.9) 1%, rgba(0, 0, 0, 0) 99%);
      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        .left {
          display: flex;
          align-items: center;
          .play-pause {
            margin: 0 ${8 / 40}rem 0 0;
            display: flex;
            align-items: center;
            svg {
              font-size: ${28 / 40}rem;
              cursor: pointer;
            }
          }
          .dt {
            display: flex;
            align-items: center;
            font-size: 14px;
          }
        }
        .right {
          display: flex;
          align-items: center;
          .volume {
            width: 120px;
          }
          .full {
            margin: 0 0 0 ${8 / 40}rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            svg {
              font-size: ${26 / 40}rem;
            }
          }
        }
      }
    }
  }
`;
const RightContentWrapper = styled_components_browser_esm/* default */.ZP.div`
  padding: 0 0 0 ${26 / 40}rem;
  width: 33%;
`;
// EXTERNAL MODULE: ./src/network/video/index.tsx
var network_video = __webpack_require__(13032);
// EXTERNAL MODULE: ./node_modules/hls.js/dist/hls.mjs
var dist_hls = __webpack_require__(93041);
// EXTERNAL MODULE: ./src/components/content/add/index.tsx + 3 modules
var add = __webpack_require__(61860);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EyeOutlined.js + 1 modules
var EyeOutlined = __webpack_require__(95357);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LikeOutlined.js + 1 modules
var LikeOutlined = __webpack_require__(58812);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LikeFilled.js + 1 modules
var LikeFilled = __webpack_require__(80177);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DislikeOutlined.js + 1 modules
var DislikeOutlined = __webpack_require__(81825);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DislikeFilled.js + 1 modules
var DislikeFilled = __webpack_require__(6073);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/FileAddOutlined.js + 1 modules
var FileAddOutlined = __webpack_require__(84189);
;// CONCATENATED MODULE: ./src/components/content/detail/videoDetail/childCpn/videoInfo/style.tsx

const VideoInfoWrapper = styled_components_browser_esm/* default */.ZP.div`
  padding: ${30 / 40}rem 0 ${40 / 40}rem;
  .video-title {
    font-size: ${24 / 40}rem;
    font-weight: bold;
    margin: 0 0 ${4 / 40}rem 0;
  }
  .tag-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 0 ${10 / 40}rem 0;
    .name {
      color: #295dcd;
      cursor: pointer;
      font-size: ${20 / 40}rem;
      margin: 0 ${2 / 40}rem;
    }
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-content {
      display: flex;
      align-items: center;
      .user-msg-container {
        display: flex;
        align-items: center;
        .img-container {
          height: ${60 / 40}rem;
          width: ${60 / 40}rem;
          border-radius: 50%;
          overflow: hidden;
          background-color: black;
          img {
            width: 100%;
          }
        }
        .right-msg {
          margin: 0 0 0 ${18 / 40}rem;
          .user-name {
            margin: 0 0 ${5 / 40}rem 0;
          }
          .sub-counter {
            margin: 0;
            font-size: ${16 / 40}rem;
            color: #606060;
          }
        }
      }
      .sub-btn {
        background-color: #0f0f0f;
        color: #fff;
        cursor: pointer;
        font-size: ${20 / 40}rem;
        padding: ${10 / 40}rem ${20 / 40}rem;
        border-radius: ${24 / 40}rem;
        margin: 0 0 0 ${40 / 40}rem;
      }
    }
    .right-content {
      display: flex;
      align-items: center;
      .thumb {
        display: flex;
        align-items: center;
        .tread {
          border-left: 1px solid #d9d9d9;
          padding: 0 0 0 ${18 / 40}rem;
          margin: 0 0 0 ${18 / 40}rem;
        }
      }
      .thumb,
      .collection {
        cursor: pointer;
        background-color: #f2f2f2;
        margin: 0 0 0 ${20 / 40}rem;
        padding: ${9 / 40}rem ${18 / 40}rem ${5 / 40}rem;
        border-radius: ${20 / 40}rem;
        .thumb-icon,
        .collection-icon,
        .tread-icon {
          svg {
            font-size: ${24 / 40}rem;
          }
        }
        .label {
          margin: 0 0 0 ${15 / 40}rem;
        }
        .thumb-icon-active {
          svg {
            color: #ff0000;
          }
        }
      }
    }
  }
  .desc {
    background-color: #f2f2f2;
    padding: ${15 / 40}rem;
    margin: ${15 / 40}rem 0;
    border-radius: ${10 / 40}rem;
  }
`;
// EXTERNAL MODULE: ./src/network/subscriber/index.tsx
var subscriber = __webpack_require__(40223);
// EXTERNAL MODULE: ./src/network/thumb/index.tsx
var thumb = __webpack_require__(87931);
// EXTERNAL MODULE: ./src/hook/useSub/index.tsx
var useSub = __webpack_require__(33624);
// EXTERNAL MODULE: ./src/views/login/store/actionCreators.ts + 1 modules
var actionCreators = __webpack_require__(95085);
// EXTERNAL MODULE: ./src/hook/useThumb/index.tsx
var useThumb = __webpack_require__(10249);
// EXTERNAL MODULE: ./src/constant/addList.ts
var addList = __webpack_require__(35824);
;// CONCATENATED MODULE: ./src/components/content/detail/videoDetail/childCpn/videoInfo/index.tsx












const VideoInfo = props => {
  const {
    videoInfo,
    id: videoId,
    playCount
  } = props;
  const loginState = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  const isSub = (0,useSub/* useSub */.$)(videoInfo?.user.userId);
  const isThumb = (0,useThumb/* useThumb */.K)('video', videoInfo?.id);
  const isTread = (0,useThumb/* useTread */.Q)('video', videoInfo?.id);
  const dispatch = (0,es/* useDispatch */.I0)();
  const addRef = (0,react.useRef)(null);
  const [subCount, setSubCount] = (0,react.useState)(0);
  (0,react.useEffect)(() => {
    if (videoInfo) {
      (0,subscriber/* getUserSubCount */.$p)(videoInfo.user.userId).then(res => {
        if (res.status === 200) {
          setSubCount(res.data);
        }
      });
    }
  }, [videoId]);
  const [videoThumb, setVideoThumb] = (0,react.useState)(0);
  const getVideoThumbReq = videoInfo => {
    (0,thumb/* getVideoThumb */.$x)(videoInfo.id).then(res => {
      if (res.status === 200) {
        setVideoThumb(res.data.count);
      }
    });
  };
  (0,react.useEffect)(() => {
    if (videoInfo) {
      getVideoThumbReq(videoInfo);
    }
  }, [videoInfo, videoId]);
  const subHandle = async () => {
    if (videoInfo?.user && !isSub) {
      const result = await (0,subscriber/* sub */.lu)(videoInfo?.user.userId);
      if (result.status === 200) {
        console.log(result.data);
      }
    } else if (videoInfo?.user && isSub) {
      const result = await (0,subscriber/* cancelSub */.eM)(videoInfo.user.userId);
      if (result.status === 200) {
        console.log(result.data);
      }
    }
    if (videoInfo?.user && loginState && loginState.userMsg) {
      dispatch((0,actionCreators/* changeUserDetailAction */.ZN)(loginState.userMsg.userId));
    }
    if (videoInfo) {
      (0,subscriber/* getUserSubCount */.$p)(videoInfo.user.userId).then(res => {
        if (res.status === 200) {
          setSubCount(res.data);
        }
      });
    }
  };
  const thumbHandle = async () => {
    if (videoInfo) {
      console.log(isThumb);
      if (isThumb) {
        const result = await (0,thumb/* cancelThumb */.NZ)(videoInfo.id, 'vId');
        if (result.status === 200) {
          console.log(result.data);
        }
      } else {
        const result = await (0,thumb/* thumb */.Nb)(videoInfo.id, 'vId');
        if (result.status === 200) {
          console.log(result.data);
        }
      }
      if (videoInfo && videoInfo.user && loginState && loginState.userMsg) {
        dispatch((0,actionCreators/* changeUserDetailAction */.ZN)(loginState.userMsg.userId));
      }
      if (videoInfo) {
        getVideoThumbReq(videoInfo);
      }
    }
  };
  const treadHandle = async () => {
    if (videoInfo) {
      if (!isTread) {
        const result = await (0,thumb/* tread */.RM)(videoInfo.id, 'vId');
        if (result.status === 200) {
          console.log(result.data);
        }
      } else {
        const result = await (0,thumb/* cancelTread */._0)(videoInfo.id, 'vId');
        if (result.status === 200) {
          console.log(result.data);
        }
      }
      if (videoInfo && videoInfo.user && loginState && loginState.userMsg) {
        dispatch((0,actionCreators/* changeUserDetailAction */.ZN)(loginState.userMsg.userId));
      }
      if (videoInfo) {
        getVideoThumbReq(videoInfo);
      }
    }
  };
  const navigate = (0,dist/* useNavigate */.s0)();
  const userRouter = user => {
    if (user) {
      navigate('/home/userDetail', {
        state: {
          userId: user.userId
        },
        replace: false
      });
    }
  };
  const openChangeHandle = () => {
    if (addRef && addRef.current) {
      addRef.current.liClick({
        icon: '',
        name: addList/* ADD_PLAYLIST */.M0
      });
    }
  };
  return /*#__PURE__*/react.createElement(VideoInfoWrapper, null, /*#__PURE__*/react.createElement("p", {
    className: "video-title text-nowrap-mul-line"
  }, videoInfo?.name), /*#__PURE__*/react.createElement("ul", {
    className: "tag-list"
  }, videoInfo?.tag && videoInfo.tag.length !== 0 && videoInfo.tag.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id
    }, index == 0 && /*#__PURE__*/react.createElement("span", {
      className: "icon"
    }, "#"), /*#__PURE__*/react.createElement("span", {
      className: "name"
    }, item.name), /*#__PURE__*/react.createElement("span", {
      className: "icon"
    }, "#"));
  })), /*#__PURE__*/react.createElement("div", {
    className: "info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left-content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "user-msg-container"
  }, videoInfo && /*#__PURE__*/react.createElement("div", {
    className: "img-container",
    onClick: e => {
      userRouter(videoInfo?.user);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: videoInfo?.user.avatarUrl
  })), /*#__PURE__*/react.createElement("div", {
    className: "right-msg"
  }, /*#__PURE__*/react.createElement("p", {
    className: "user-name"
  }, videoInfo?.user.userName), /*#__PURE__*/react.createElement("p", {
    className: "sub-counter"
  }, subCount, "\u4F4D\u8BA2\u9605\u8005"))), videoInfo && loginState.userMsg.userId !== videoInfo.user.userId && /*#__PURE__*/react.createElement("div", {
    className: "sub-btn",
    onClick: async e => {
      await subHandle();
    }
  }, isSub ? '已订阅' : '订阅')), /*#__PURE__*/react.createElement("div", {
    className: "right-content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "collection",
    onClick: () => {
      openChangeHandle();
    }
  }, /*#__PURE__*/react.createElement(EyeOutlined/* default */.Z, null), /*#__PURE__*/react.createElement("span", {
    className: "label"
  }, playCount)), /*#__PURE__*/react.createElement("div", {
    className: "thumb"
  }, /*#__PURE__*/react.createElement("div", {
    className: "thumb-inner"
  }, videoInfo && !isThumb && /*#__PURE__*/react.createElement(LikeOutlined/* default */.Z, {
    className: `thumb-icon`,
    onClick: async e => {
      await thumbHandle();
    }
  }), videoInfo && isThumb && /*#__PURE__*/react.createElement(LikeFilled/* default */.Z, {
    className: `thumb-icon`,
    onClick: async e => {
      await thumbHandle();
    }
  }), /*#__PURE__*/react.createElement("span", {
    className: "label"
  }, videoThumb)), /*#__PURE__*/react.createElement("div", {
    className: "tread"
  }, videoInfo && !isTread && /*#__PURE__*/react.createElement(DislikeOutlined/* default */.Z, {
    className: "tread-icon",
    onClick: async e => {
      await treadHandle();
    }
  }), videoInfo && isTread && /*#__PURE__*/react.createElement(DislikeFilled/* default */.Z, {
    className: "tread-icon",
    onClick: async e => {
      await treadHandle();
    }
  }))), /*#__PURE__*/react.createElement("div", {
    className: "collection",
    onClick: () => {
      openChangeHandle();
    }
  }, /*#__PURE__*/react.createElement(FileAddOutlined/* default */.Z, {
    className: 'collection-icon'
  }), /*#__PURE__*/react.createElement("span", {
    className: "label"
  }, "\u4FDD\u5B58")))), /*#__PURE__*/react.createElement("div", {
    className: "desc"
  }, videoInfo?.description), videoInfo && /*#__PURE__*/react.createElement(add/* default */.Z, {
    id: videoInfo.id,
    ref: addRef
  }));
};
/* harmony default export */ var videoInfo = (/*#__PURE__*/(0,react.memo)(VideoInfo));
// EXTERNAL MODULE: ./src/components/common/comment/index.tsx + 9 modules
var comment = __webpack_require__(29788);
// EXTERNAL MODULE: ./src/network/history/index.tsx
var network_history = __webpack_require__(42723);
;// CONCATENATED MODULE: ./src/components/content/detail/videoDetail/childCpn/dm/style.tsx

const DmWrapper = styled_components_browser_esm/* default */.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${20 / 40}rem 0 0 0;
  .dm-outer {
    display: flex;
    align-items: center;
    border-radius: ${8 / 40}rem;
    overflow: hidden;
    margin: 0 0 0 ${15 / 40}rem;
    & > input {
      display: inline-block;
      width: ${500 / 40}rem;
      background-color: #f1f2f3;
      padding: ${8 / 40}rem ${15 / 40}rem;
    }
    .pub {
      cursor: pointer;
      background-color: #ff0000;
      color: #fff;
      height: 100%;
      padding: ${8 / 40}rem ${15 / 40}rem;
    }
  }
`;
// EXTERNAL MODULE: ./src/network/index.ts + 1 modules
var network = __webpack_require__(16398);
;// CONCATENATED MODULE: ./src/network/dm/index.tsx

async function pubDm(vId, text, time) {
  return await network/* default */.Z.post({
    url: '/dm',
    data: {
      vId,
      text,
      time
    }
  });
}
// 获取视频弹幕
async function getVideoDm(vId) {
  return await network/* default */.Z.post({
    url: '/dm/video/' + vId
  });
}
;// CONCATENATED MODULE: ./src/components/content/detail/videoDetail/childCpn/dm/index.tsx



const Dm = props => {
  const {
    id,
    time,
    pub
  } = props;
  const [content, setContent] = (0,react.useState)('');
  const dmInp = e => {
    setContent(e.currentTarget.value);
  };
  const pubHandle = () => {
    pubDm(id, content, time).then(data => {
      if (data.status === 200) {
        setContent('');
        pub();
      }
    });
  };
  return /*#__PURE__*/react.createElement(DmWrapper, null, /*#__PURE__*/react.createElement("span", null, "\u5DF2\u88C5\u586B2\u6761\u5F39\u5E55"), /*#__PURE__*/react.createElement("div", {
    className: "dm-outer"
  }, /*#__PURE__*/react.createElement("input", {
    type: 'text',
    value: content,
    onInput: e => {
      dmInp(e);
    },
    placeholder: '发个弹幕,见证当下'
  }), /*#__PURE__*/react.createElement("div", {
    className: "pub",
    onClick: e => {
      pubHandle();
    }
  }, "\u53D1\u9001")));
};
/* harmony default export */ var dm = (/*#__PURE__*/(0,react.memo)(Dm));
// EXTERNAL MODULE: ./src/utils/time.tsx
var time = __webpack_require__(20871);
;// CONCATENATED MODULE: ./src/components/content/detail/videoDetail/childCpn/similar/style.tsx

const SimilarWrapper = styled_components_browser_esm/* default */.ZP.div`
  padding: ${16 / 40}rem 0;
  .bar {
    display: flex;
    align-items: center;
    & > li {
      padding: ${5 / 40}rem ${15 / 40}rem;
      background-color: #f2f2f2;
      margin: 0 ${20 / 40}rem 0 0;
      border-radius: ${8 / 40}rem;
      cursor: pointer;
      &.active {
        background-color: #0f0f0f;
        color: #ffffff;
      }
    }
  }
  .similar-video-list {
    margin: ${20 / 40}rem 0 0 0;
    & > li {
      display: flex;
      align-items: flex-start;
      width: 100%;
      margin: 0 0 ${20 / 40}rem 0;
      .vio-img-container {
        width: ${250 / 40}rem;
        margin: 0 ${20 / 40}rem 0 0;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        background-color: #e5e5e5;
        display: flex;
        align-items: center;
        img {
          width: 100%;
          cursor: pointer;
        }
        .dt {
          position: absolute;
          left: 100%;
          top: 100%;
          transform: translate(-110%, -110%);
          background-color: rgba(0, 0, 0, 0.65);
          color: #ffffff;
          padding: ${3 / 40}rem ${10 / 40}rem;
          border-radius: ${8 / 40}rem;
          font-size: ${14 / 40}rem;
          font-weight: bolder;
          white-space: nowrap;
        }
      }
      .right-container {
        width: ${240 / 40}rem;
        overflow: hidden;
        .label-n {
          width: 100%;
          margin: 0 0 ${5 / 40}rem 0;

          word-break: break-all;
        }
        .dt-play-count {
          display: flex;
          align-items: center;
          & > p {
            color: #606060;
            font-size: ${15 / 40}rem;
          }
        }
      }
    }
  }
`;
;// CONCATENATED MODULE: ./src/components/content/detail/videoDetail/childCpn/similar/index.tsx





const Similar = props => {
  const {
    id,
    userId,
    userName,
    play,
    videoId
  } = props;
  const [video, setVideo] = (0,react.useState)([]);
  const [count, setCount] = (0,react.useState)(0);
  const [currentIndex, setCurrentIndex] = (0,react.useState)(0);
  const [bar, setBar] = (0,react.useState)(['全部']);
  (0,react.useEffect)(() => {
    console.log(userName);
    if (userName) {
      setBar(['全部', userName]);
    }
  }, [userName]);
  (0,react.useEffect)(() => {
    if (id) {
      (0,network_video/* getSimilarVideo */.Fx)(id, 0, 15).then(data => {
        if (data.status === 200) {
          setVideo(data.data.list);
          setCount(data.data.count);
        }
      });
    }
  }, [id]);
  const liClick = (item, index) => {
    if (item !== '全部' && userId) {
      (0,network_video/* getUserVideo */.sf)(userId, '', 0, 15).then(data => {
        if (data.status === 200) {
          setVideo(data.data.list);
          setCount(data.data.count);
        }
      });
    } else if (id) {
      (0,network_video/* getSimilarVideo */.Fx)(id, 0, 15).then(data => {
        if (data.status === 200) {
          setVideo(data.data.list);
          setCount(data.data.count);
        }
      });
    }
    setCurrentIndex(index);
  };
  const videoClick = item => {
    play(item.id);
  };
  return /*#__PURE__*/react.createElement(SimilarWrapper, null, /*#__PURE__*/react.createElement("ul", {
    className: "bar"
  }, bar && bar.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item,
      className: currentIndex === index ? 'active' : '',
      onClick: e => {
        liClick(item, index);
      }
    }, item);
  })), /*#__PURE__*/react.createElement("ul", {
    className: "similar-video-list"
  }, video && video.length !== 0 && video.map((item, index) => {
    return videoId !== item.id && /*#__PURE__*/react.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react.createElement("div", {
      className: "vio-img-container",
      onClick: e => {
        videoClick(item);
      }
    }, /*#__PURE__*/react.createElement("img", {
      src: item.picUrl,
      alt: item.name
    }), /*#__PURE__*/react.createElement("div", {
      className: "dt"
    }, (0,time/* getDurationByTimestamp */.f)(item.dt ? item.dt : '0'))), /*#__PURE__*/react.createElement("div", {
      className: "right-container"
    }, /*#__PURE__*/react.createElement("div", {
      className: "label-n text-nowrap-mul-line",
      title: item.name
    }, item.name), /*#__PURE__*/react.createElement("div", {
      className: "label-n"
    }, item.user.userName), /*#__PURE__*/react.createElement("div", {
      className: "dt-play-count"
    }, /*#__PURE__*/react.createElement("p", null, item.playCount, "\u6B21\u89C2\u770B"), /*#__PURE__*/react.createElement("p", null, moment_default()(item.createTime).fromNow()))));
  })));
};
/* harmony default export */ var similar = (/*#__PURE__*/(0,react.memo)(Similar));
// EXTERNAL MODULE: ./src/components/header/index.tsx + 20 modules
var header = __webpack_require__(45859);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PauseOutlined.js + 1 modules
var PauseOutlined = __webpack_require__(69816);
;// CONCATENATED MODULE: ./src/components/content/detail/videoDetail/childCpn/collectionVideo/style.tsx

const CollectionVideoWrapper = styled_components_browser_esm/* default */.ZP.div`
  margin: ${20 / 40}rem 0 0 0;
  width: 100%;
  .col-header {
    background-color: #f1f2f3;
    padding: ${15 / 40}rem 0 ${10 / 40}rem ${15 / 40}rem;
    font-size: ${21 / 40}rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    .name {
      max-width: 60%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .count {
      color: #a8acb1;
      font-weight: normal;
      margin: 0 0 0 ${10 / 40}rem;
    }
  }
  .video-list {
    background-color: #f1f2f3;
    padding: 0 0 ${15 / 40}rem 0;
    width: 100%;
    max-height: 410px;
    overflow-y: auto;
    margin-bottom: ${12 / 40}rem;
    .item {
      display: flex;
      align-items: center;
      padding: ${10 / 40}rem;
      justify-content: space-between;
      border-bottom: 1px solid #fff;
      &:hover {
        background-color: #e0e4eb;
        cursor: pointer;
      }
      .gb-play {
        color: #ea3323;
        margin: 0 ${5 / 40}rem 0;
        margin-left: 0 !important;
        svg {
          font-size: ${23 / 40}rem;
        }
      }
      .sort {
        color: #ea3323;
        text-align: left;
        color: #969aa0;
        white-space: nowrap;
        padding-right: 5.7px;
        font-size: ${18.4 / 40}rem;
      }
      .img-container {
        width: ${150 / 40}rem;
        margin: 0 ${10 / 40}rem 0 0;
        img {
          width: 100%;
          border-radius: 4px;
        }
      }
      .right-container {
        display: flex;
        justify-content: space-between;
        width: 67%;
        .label {
          flex: 7;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: #18191c;
        }
        .dt {
          flex: 2;
          text-align: right;
          color: #969aa0;
        }
      }
    }
  }
`;
// EXTERNAL MODULE: ./src/network/collection/index.tsx
var network_collection = __webpack_require__(25876);
;// CONCATENATED MODULE: ./src/components/content/detail/videoDetail/childCpn/collectionVideo/index.tsx





const CollectionVideo = props => {
  const {
    videoList,
    cId,
    onClick
  } = props;
  const [collection, setCollection] = (0,react.useState)(null);
  const [currentIndex, setCurrentIndex] = (0,react.useState)(0);
  (0,react.useEffect)(() => {
    (0,network_collection/* getCollectionDetail */.H)(cId).then(res => {
      if (res.status === 200) {
        setCollection(res.data);
      }
    });
  }, [cId]);
  const videoClick = (item, index) => {
    onClick(item, index);
    setCurrentIndex(index);
  };
  return /*#__PURE__*/react.createElement(CollectionVideoWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "col-header"
  }, /*#__PURE__*/react.createElement("span", {
    className: "name"
  }, collection && collection.name, " . \u5408\u96C6"), /*#__PURE__*/react.createElement("span", {
    className: "count"
  }, "(", currentIndex + 1, "/", videoList.length, ")")), /*#__PURE__*/react.createElement("ul", {
    className: "video-list"
  }, videoList && videoList.length !== 0 && videoList.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id,
      className: "item",
      onClick: () => {
        videoClick(item, index);
      }
    }, currentIndex === index && /*#__PURE__*/react.createElement(PauseOutlined/* default */.Z, {
      className: "gb-play",
      spin: false,
      style: {
        color: index === currentIndex ? '' : '#f1f2f3'
      }
    }), currentIndex !== index && /*#__PURE__*/react.createElement("span", {
      className: "sort"
    }, (index + 1).toString().padStart(2, '0')), /*#__PURE__*/react.createElement("div", {
      className: "img-container"
    }, /*#__PURE__*/react.createElement("img", {
      src: item.picUrl
    })), /*#__PURE__*/react.createElement("div", {
      className: "right-container"
    }, /*#__PURE__*/react.createElement("span", {
      className: "label"
    }, item.name), /*#__PURE__*/react.createElement("span", {
      className: "dt"
    }, (0,time/* getDurationByTimestamp */.f)(item.dt))));
  })));
};
/* harmony default export */ var childCpn_collectionVideo = (/*#__PURE__*/(0,react.memo)(CollectionVideo));
;// CONCATENATED MODULE: ./src/utils/getRandom.tsx
let charStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';
function randomIndex(min, max, i) {
  let index = Math.floor(Math.random() * (max - min + 1) + min);
  let numStart = charStr.length - 10;
  if (i == 0 && index >= numStart) {
    index = randomIndex(min, max, i);
  }
  return index;
}
function getRandomStr(len) {
  let min = 0,
    max = charStr.length - 1,
    str = '';
  len = len || 15;
  for (let i = 0, index; i < len; i++) {
    index = randomIndex(min, max, i);
    str += charStr[index];
  }
  return str;
}
const getRandom = (m, n) => {
  return Math.floor(Math.random() * (n - m + 1)) + m;
};

;// CONCATENATED MODULE: ./src/utils/dom.ts

function generateAnimation(container, item, index) {
  let r = getRandom(-container.offsetHeight + index * item.offsetHeight + item.offsetHeight, index * item.offsetHeight);
  let anName = getRandomStr(10);
  let keyframes = `
        @keyframes ${anName}{
          0%{
            transform :translateX(0) translateY(${r}px);
          }  
          100%{
            transform :translateX(${window.innerWidth + 30 + item.offsetWidth}px) translateY(${r}px);
          }
        }
        `;
  const style = document.styleSheets[0];
  style.insertRule(keyframes);
  item.style.animation = `${anName} 16s normal`;
  item.style.animationFillMode = `forwards`;
}

;// CONCATENATED MODULE: ./src/components/content/detail/videoDetail/index.tsx



















const {
  Header,
  Footer,
  Sider,
  Content
} = layout["default"];
const VideoDetail = () => {
  const location = (0,dist/* useLocation */.TH)();
  const {
    id,
    type = 'source',
    cId
  } = location.state;
  const [videoSourceType, setVideoSourceType] = (0,react.useState)(type);
  const [currentTime, setCurrentTime] = (0,react.useState)('');
  const [vioURL, setVioURL] = (0,react.useState)('');
  const [vioId, setVioId] = (0,react.useState)(id);
  const [videoDetail, setVideoDetail] = (0,react.useState)();
  const [videoDm, setVideoDm] = (0,react.useState)();
  const [dmTotal, setDmTotal] = (0,react.useState)(0);
  const videoRef = (0,react.useRef)(null);
  const loginState = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  const contentRef = (0,react.useRef)(null);
  const screenRef = (0,react.useRef)(null);
  const [collectionVideo, setCollectionVideo] = (0,react.useState)([]);
  (0,react.useEffect)(() => {
    if (type === 'collection') {
      (0,network_video/* getCollectionVideo */._M)(cId, 0, 10000).then(res => {
        if (res.status === 200) {
          if (res.data.list && res.data.list.length !== 0) {
            setCollectionVideo(res.data.list);
            setVioId(res.data.list[0].id);
          }
        }
      });
    }
  }, [type, cId]);
  (0,react.useEffect)(() => {
    if (screenRef.current) {
      screenRef.current.addEventListener('contextmenu', e => {
        e.preventDefault();
        return false;
      });
    }
  }, [screenRef.current]);
  (0,react.useEffect)(() => {
    if (vioId) {
      (0,network_video/* recordVideo */.dd)(vioId);
    }
  }, [vioId]);
  (0,react.useEffect)(() => {
    if (vioId) {
      getVideoDm(vioId).then(res => {
        if (res.data.list.length !== 0) {
          setDmTotal(res.data.count);
          const list = res.data.list.map((item, index) => {
            return {
              ...item,
              contentRef: /*#__PURE__*/(0,react.createRef)()
            };
          });
          setVideoDm(list);
        } else {
          setVideoDm([]);
        }
        (0,network_video/* getVideoURL */.fY)(vioId).then(data => {
          if (data.status === 200) {
            let url = data.data.vioUrl;
            if (false) {}
            setVioURL(url);
          }
        });
      });
      (0,network_video/* getVideoDetail */.O2)(vioId).then(data => {
        if (data.status === 200) {
          setVideoDetail(data.data);
          setPlayCount(data.data.playCount);
        }
      });
    }
  }, [vioId]);
  (0,react.useEffect)(() => {
    if (videoRef.current !== null) {
      if (dist_hls/* default */.Z.isSupported()) {
        const hls = new dist_hls/* default */.Z();
        hls.loadSource(vioURL);
        // hls.loadSource('http://localhost:8888/video/0718294d1c07ee39c7ebb9cb93b0f9580.ts');
        hls.attachMedia(videoRef.current);
        (0,network_history/* addHistory */.Ve)(vioId);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = vioURL;
      }
    }
  }, [videoRef.current, vioURL]);
  (0,react.useEffect)(() => {
    document.title = videoDetail?.name ?? 'codergbhub';
  }, [videoDetail]);
  const pubSuccess = () => {
    getVideoDm(vioId).then(res => {
      if (res.data.list.length !== 0) {
        const list = res.data.list.map((item, index) => {
          return {
            ...item,
            contentRef: /*#__PURE__*/(0,react.createRef)()
          };
        });
        setVideoDm(list);
      } else {
        setVideoDm([]);
      }
    });
  };
  const [timestamp, setTimeStamp] = (0,react.useState)(0);
  const isController = (0,react.useRef)(false);
  const dmGenerateHandler = () => {};
  const videoPlayHandle = e => {
    if (videoDetail && !isController.current) {
      const precent = e.currentTarget.currentTime * 1000 / Number(videoDetail.dt) * 100;
      setTimeStamp(precent);
    }
    if (videoDm) {
      setCurrentTime(moment_default()(e.currentTarget.currentTime * 1000).format('mm:ss'));
      for (let index = 0; index < videoDm.length; index++) {
        if (videoDm && screenRef.current) {
          const item = videoDm[index];
          if (moment_default()(e.currentTarget.currentTime * 1000).format('mm:ss') === item.time && item.contentRef.current) {
            generateAnimation(screenRef.current, item.contentRef.current, index);
          }
        }
      }
    }
  };
  const pauseHandle = item => {
    if (item.contentRef.current) item.contentRef.current.style.animationPlayState = 'paused';
  };
  const playHandle = item => {
    if (item.contentRef.current) item.contentRef.current.style.animationPlayState = 'running';
  };
  const playVideo = id => {
    setVioId(id);
    setIsPlay(true);
  };
  const changeVideoType = id => {
    setVideoSourceType('source');
    playVideo(id);
  };
  const [playCount, setPlayCount] = (0,react.useState)(0);
  const canPlayHandler = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.6;
      (0,network_video/* addPlayCount */.hk)(vioId).then(res => {
        setPlayCount(res.data.playCount);
      });
    }
  };
  const dmInner = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    if (dmInner.current) {
      dmInner.current.addEventListener('fullscreenchange', e => {
        if (document.fullscreenElement) {
          if (screenRef.current) {
            screenRef.current.style.width = '100vw';
            screenRef.current.style.height = '100vh';
            setIsFull(true);
          }
          // 进入全屏
        } else {
          // 退出全屏幕
          if (screenRef.current) {
            screenRef.current.style.width = `${1190 / 40}rem`;
            screenRef.current.style.height = `${640 / 40}rem`;
            setIsFull(false);
          }
        }
      });
    }
  }, [dmInner, dmInner.current]);
  const [isFull, setIsFull] = (0,react.useState)(false);
  (0,react.useEffect)(() => {}, [isFull]);
  const fullHandler = () => {
    if (dmInner.current) {
      if (isFull) {
        document.exitFullscreen();
      } else {
        dmInner.current?.requestFullscreen();
      }
    }
  };
  const [isPlay, setIsPlay] = (0,react.useState)(true);
  const playHandler = () => {
    setIsPlay(!isPlay);
    if (videoRef.current) {
      if (isPlay) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };
  const onAfterChange = e => {
    if (videoDetail && videoRef.current) {
      const precent = e / 100;
      const current = Number(videoDetail.dt) * precent / 1000;
      console.log(current);
      videoRef.current.currentTime = current;
    }
    isController.current = false;
  };
  const silderChange = e => {
    setTimeStamp(e);
    if (!isController.current) isController.current = true;
  };
  const endHandler = () => {
    setIsPlay(false);
  };
  (0,react.useEffect)(() => {
    document.onkeydown = e => {
      if (e.code.toLocaleLowerCase() === 'space' || e.code.toLocaleLowerCase() === 'keyf' || e.code.toLocaleUpperCase() === 'escape') {
        e.preventDefault();
      }
    };
    document.onkeyup = e => {
      if (e.code === 'space' || e.code === 'Space') {
        e.preventDefault();
        playHandler();
      } else if (e.code.toLocaleLowerCase() === 'keyf') {
        dmInner.current?.requestFullscreen();
        setIsFull(true);
      } else if (e.code.toLocaleLowerCase() === 'escape') {
        document.exitFullscreen();
        setIsFull(false);
      }
    };
  }, [videoRef.current, isPlay]);
  const volumeChangeHandler = e => {
    console.log(e);
    if (videoRef.current) {
      videoRef.current.volume = e / 100;
    }
  };
  return /*#__PURE__*/react.createElement(VideoDetailWrapper, null, /*#__PURE__*/react.createElement(layout["default"], null, /*#__PURE__*/react.createElement(Header, null, /*#__PURE__*/react.createElement(header/* default */.Z, null)), /*#__PURE__*/react.createElement(Content, null, /*#__PURE__*/react.createElement(CenterContent, null, /*#__PURE__*/react.createElement(LeftContentWrapper, {
    videoRef: videoRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "video-dm-container",
    ref: dmInner
  }, /*#__PURE__*/react.createElement("div", {
    className: "inner"
  }, /*#__PURE__*/react.createElement("div", {
    className: "start"
  }, /*#__PURE__*/react.createElement("ul", {
    ref: contentRef
  }, videoDm?.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id,
      className: "text",
      ref: item.contentRef,
      onMouseEnter: e => {
        pauseHandle(item);
      },
      onMouseLeave: e => {
        playHandle(item);
      }
    }, item.text);
  }))), /*#__PURE__*/react.createElement("div", {
    className: "video-container",
    ref: screenRef
  }, vioURL && videoDetail && /*#__PURE__*/react.createElement("video", {
    ref: videoRef,
    poster: videoDetail.picUrl,
    controls: false,
    muted: false,
    onCanPlay: canPlayHandler,
    onTimeUpdate: e => {
      videoPlayHandle(e);
    },
    autoPlay: true,
    onEnded: () => {
      endHandler();
    },
    onClick: () => {
      playHandler();
    }
  }), videoDetail && /*#__PURE__*/react.createElement("div", {
    className: "controller-container"
  }, /*#__PURE__*/react.createElement(slider/* default */.Z, {
    defaultValue: 0,
    value: timestamp,
    step: 0.1,
    tooltip: {
      open: false
    },
    onChange: e => {
      silderChange(e);
    },
    onAfterChange: e => {
      onAfterChange(e);
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left"
  }, /*#__PURE__*/react.createElement("div", {
    className: "play-pause",
    onClick: () => {
      playHandler();
    }
  }, !isPlay && /*#__PURE__*/react.createElement(PlayCircleOutlined/* default */.Z, {
    style: {
      color: '#ffffff'
    }
  }), isPlay && /*#__PURE__*/react.createElement(PauseCircleOutlined/* default */.Z, {
    style: {
      color: '#ffffff'
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "dt"
  }, currentTime, " / ", (0,time/* getDurationByTimestamp */.f)(videoDetail.dt))), /*#__PURE__*/react.createElement("div", {
    className: "right"
  }, /*#__PURE__*/react.createElement("div", {
    className: "volume"
  }, /*#__PURE__*/react.createElement(slider/* default */.Z, {
    defaultValue: 60,
    onChange: e => {
      volumeChangeHandler(e);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "full",
    onClick: fullHandler
  }, !isFull && /*#__PURE__*/react.createElement(ExpandOutlined/* default */.Z, null), isFull && /*#__PURE__*/react.createElement(CompressOutlined/* default */.Z, null)))))), /*#__PURE__*/react.createElement("div", {
    className: "end"
  }, " "))), /*#__PURE__*/react.createElement(dm, {
    id: vioId,
    time: currentTime,
    pub: () => {
      pubSuccess();
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "video-info"
  }, videoDetail?.user && /*#__PURE__*/react.createElement(videoInfo, {
    videoInfo: videoDetail,
    id: vioId,
    playCount: playCount
  })), /*#__PURE__*/react.createElement("div", {
    className: "video-comment"
  }, loginState && loginState.userMsg && videoDetail && /*#__PURE__*/react.createElement(comment/* default */.Z, {
    user: loginState.userMsg,
    id: videoDetail.id,
    alias: 'vId'
  }))), /*#__PURE__*/react.createElement(RightContentWrapper, null, videoSourceType === 'collection' && /*#__PURE__*/react.createElement(childCpn_collectionVideo, {
    videoList: collectionVideo,
    cId: cId,
    onClick: (item, index) => {
      playVideo(item.id);
    }
  }), videoDetail?.user && /*#__PURE__*/react.createElement(similar, {
    id: videoDetail?.category.id,
    key: vioId,
    videoId: videoDetail?.id,
    userId: videoDetail?.user.userId,
    userName: videoDetail?.user.userName,
    play: id => {
      changeVideoType(id);
    }
  }))))));
};
/* harmony default export */ var videoDetail = (/*#__PURE__*/(0,react.memo)(VideoDetail));

/***/ }),

/***/ 35824:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $8: function() { return /* binding */ addList; },
/* harmony export */   M0: function() { return /* binding */ ADD_PLAYLIST; },
/* harmony export */   nu: function() { return /* binding */ ADD_WATCH_LATER; }
/* harmony export */ });
/* unused harmony export ADD_QUEUE */
const ADD_QUEUE = '添加到队列';
const ADD_WATCH_LATER = `保存到"稍后观看`;
const ADD_PLAYLIST = '保存到播放列表';
const addList = [{
  icon: '',
  name: ADD_QUEUE
}, {
  icon: '',
  name: ADD_WATCH_LATER
}, {
  icon: '',
  name: ADD_PLAYLIST
}];


/***/ }),

/***/ 33624:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: function() { return /* binding */ useSub; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95998);

const useSub = upId => {
  let isExists = -1;
  const loginState = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useSelector */ .v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  if (loginState) {
    const {
      userDetail
    } = loginState;
    if (userDetail && userDetail.subscriber.length !== 0 && upId) {
      isExists = userDetail.subscriber.findIndex((item, index) => {
        return upId === item.userId;
      });
    }
  }
  return isExists !== -1;
};

/***/ }),

/***/ 25876:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ getCollectionDetail; },
/* harmony export */   V: function() { return /* binding */ getUserCol; }
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

async function getUserCol(id, offset, limit) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/collection/user/' + id,
    params: {
      offset,
      limit
    }
  });
}
async function getCollectionDetail(id) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/collection/detail/' + id
  });
}

/***/ }),

/***/ 42723:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pf: function() { return /* binding */ deleteAllHistory; },
/* harmony export */   Ve: function() { return /* binding */ addHistory; },
/* harmony export */   p5: function() { return /* binding */ getUserHistory; }
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

// 添加历史记录
async function addHistory(id) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/history/' + id,
    data: {}
  });
}
async function getUserHistory(userId, offset, limit, keyword) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/history/user/' + userId,
    params: {
      offset,
      limit,
      keyword
    }
  });
}
// 清除所有历史记录
async function deleteAllHistory() {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/history/delete/all'
  });
}

/***/ }),

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

/***/ 40223:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $p: function() { return /* binding */ getUserSubCount; },
/* harmony export */   eM: function() { return /* binding */ cancelSub; },
/* harmony export */   lu: function() { return /* binding */ sub; },
/* harmony export */   yf: function() { return /* binding */ getUserSub; }
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

function sub(upId) {
  return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/sub/',
    data: {
      upId
    }
  });
}
function cancelSub(upId) {
  return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/sub/cancel',
    data: {
      upId
    }
  });
}
//获取用户订阅
function getUserSub(userId, offset, limit) {
  return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/sub/user/' + userId,
    data: {
      offset,
      limit
    }
  });
}
//获取订阅数
function getUserSubCount(id) {
  return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: '/sub/count/' + id
  });
}

/***/ }),

/***/ 20871:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: function() { return /* binding */ getDurationByTimestamp; }
/* harmony export */ });
function getDurationByTimestamp(time) {
  if (typeof time === 'string') time = parseInt(time);
  let timestamp = Math.floor(time / 1000) || 0;
  if (timestamp === 0) {
    return '00:00';
  } else {
    let hour = Math.floor(timestamp / 60 / 60);
    let yTimestamp = timestamp % 3600;
    let minute = 0;
    let second = 0;
    if (yTimestamp !== 0) {
      minute = Math.floor(yTimestamp / 60);
      yTimestamp = yTimestamp % 60;
      if (yTimestamp !== 0) {
        second = yTimestamp;
      }
    }
    let newHour = hour === 0 ? '' : `${hour.toString().padStart(2, '0')}:`;
    return `${newHour}${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
  }
}


/***/ })

}]);
//# sourceMappingURL=83e7474805b22047a593.bundle.js.map