"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[610],{

/***/ 80953:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ subBtn; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/notification/index.js + 1 modules
var notification = __webpack_require__(38648);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/components/common/subBtn/style.tsx

const SubBtnWrapper = styled_components_browser_esm/* default */.ZP.div`
  background-color: #f2f2f2;
  color: #0f0f0f;
  cursor: pointer;
  font-size: ${20 / 40}rem;

  border-radius: ${24 / 40}rem;
  margin: 0 0 0 ${40 / 40}rem;
  text-align: center;
  .inner {
    width: 100%;
    height: 100%;
    padding: ${10 / 40}rem ${20 / 40}rem;
  }
  &:hover {
    background-color: #e5e5e5;
  }
`;
// EXTERNAL MODULE: ./src/hook/useSub/index.tsx
var useSub = __webpack_require__(33624);
// EXTERNAL MODULE: ./src/hook/useLoginMsg/index.tsx
var useLoginMsg = __webpack_require__(46139);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/network/subscriber/index.tsx
var subscriber = __webpack_require__(40223);
// EXTERNAL MODULE: ./src/views/login/store/actionCreators.ts + 1 modules
var actionCreators = __webpack_require__(95085);
;// CONCATENATED MODULE: ./src/components/common/subBtn/index.tsx








const SubBtn = props => {
  const {
    userId
  } = props;
  const isSub = (0,useSub/* useSub */.$)(userId);
  const loginMsg = (0,useLoginMsg/* useLoginMsg */.y)();
  const dispatch = (0,es/* useDispatch */.I0)();
  const subHandler = async () => {
    if (!isSub) {
      const result = await (0,subscriber/* sub */.lu)(userId);
      if (result.status === 200) {
        notification/* default */.Z.info({
          message: `订阅成功`,
          description: `在“订阅内容中”查看您添加的视频`,
          placement: 'bottomLeft'
        });
      }
    } else {
      const result = await (0,subscriber/* cancelSub */.eM)(userId);
      if (result.status === 200) {}
    }
    if (loginMsg && loginMsg.userMsg) {
      dispatch((0,actionCreators/* changeUserDetailAction */.ZN)(loginMsg.userMsg.userId));
    }
  };
  return /*#__PURE__*/react.createElement(SubBtnWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "inner",
    onClick: async () => {
      await subHandler();
    }
  }, isSub ? '已订阅' : '订阅'));
};
/* harmony default export */ var subBtn = (/*#__PURE__*/(0,react.memo)(SubBtn));

/***/ }),

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

/***/ 30610:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ userDetail; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./node_modules/antd/es/notification/index.js + 1 modules
var notification = __webpack_require__(38648);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 20 modules
var tabs = __webpack_require__(60561);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/components/content/detail/userDetail/style.tsx

const UserDetailWrapper = styled_components_browser_esm/* default */.ZP.div`
  width: 100%;
  height: 86vh;
  background-color: #fff;
  overflow-y: scroll;
  img {
    width: 100%;
  }
  .banner {
    min-height: ${200 / 40}rem;
  }
  .user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: flex-start;
      margin: ${30 / 40}rem 0 ${20 / 40}rem 0;

      .img-container {
        width: ${120 / 40}rem;

        img {
          width: 100%;
          border-radius: 50%;
        }
      }

      .right-info {
        margin: 0 0 0 ${24 / 40}rem;

        .user-name {
          font-size: ${28 / 40}rem;
        }
      }
    }
    .control-btn {
      display: flex;
      align-items: center;
      .sub-btn {
        margin: 0 0 0 ${10 / 40}rem;
      }
    }
  }
`;
// EXTERNAL MODULE: ./src/network/channel/index.tsx
var channel = __webpack_require__(38306);
// EXTERNAL MODULE: ./src/network/subscriber/index.tsx
var subscriber = __webpack_require__(40223);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(14277);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/hls.js/dist/hls.mjs
var dist_hls = __webpack_require__(93041);
// EXTERNAL MODULE: ./src/network/history/index.tsx
var network_history = __webpack_require__(42723);
;// CONCATENATED MODULE: ./src/components/content/detail/userDetail/childCpn/home/style.tsx

const HomeWrapper = styled_components_browser_esm/* default */.ZP.div`
  .video-tip {
    font-weight: bold;
    margin: 0 0 ${14 / 40}rem 0;
    font-size: ${20 / 40}rem;
  }
  .trailer {
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #e5e5e5;
    padding: 0 0 ${20 / 40}rem 0;
    margin: 0 0 ${16 / 40}rem 0;
    .left-container {
      width: ${390 / 40}rem;
      position: relative;
      img {
        border-radius: ${8 / 40}rem;
        width: 100%;
      }
      video {
        width: 100%;
        height: ${220 / 40}rem;
        border-radius: 4px;
        object-fit: contain;
        background-color: #333;
      }
    }
    .right-container {
      width: 70%;
      margin: 0 0 0 ${20 / 40}rem;
      .video-name {
        font-size: ${24 / 40}rem;
      }
      .play-count-time {
        display: flex;
        align-items: center;
        margin: ${15 / 40}rem 0;
        p {
          font-size: ${16 / 40}rem;
          color: #606060;
        }
        .count {
          margin: 0 ${8 / 40}rem 0 0;
        }
        .desc {
          font-size: ${18 / 40}rem;
          color: #606060;
        }
      }
    }
  }
`;
// EXTERNAL MODULE: ./src/network/video/index.tsx
var network_video = __webpack_require__(13032);
;// CONCATENATED MODULE: ./src/components/content/detail/userDetail/childCpn/home/index.tsx








const Home = props => {
  const {
    channel
  } = props;
  const navigate = (0,dist/* useNavigate */.s0)();
  const [vioURL, setVioURL] = (0,react.useState)('');
  const videoRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    console.log(channel);
    if (channel?.trailer) {
      (0,network_video/* getVideoURL */.fY)(channel.trailer.id).then(res => {
        if (res.status === 200) {
          setVioURL(res.data.vioUrl);
        }
      });
    }
  }, [channel]);
  (0,react.useEffect)(() => {
    if (videoRef.current && channel) {
      if (dist_hls/* default */.Z.isSupported()) {
        const hls = new dist_hls/* default */.Z();
        hls.loadSource(vioURL);
        hls.attachMedia(videoRef.current);
        if (channel) (0,network_history/* addHistory */.Ve)(channel.trailer.id);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = vioURL;
      }
    }
  }, [videoRef.current, vioURL, channel]);
  const canPlay = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
    }
  };
  const videoRouter = trailer => {
    if (trailer) {
      navigate('/videoDetail', {
        replace: true,
        state: {
          id: trailer.id
        }
      });
    }
  };
  const videoPlayHandle = e => {};
  return /*#__PURE__*/react.createElement(HomeWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "video-tip"
  }, "\u9891\u9053\u9884\u544A\u7247"), /*#__PURE__*/react.createElement("div", {
    className: "trailer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left-container"
  }, channel?.trailer && vioURL && /*#__PURE__*/react.createElement("video", {
    ref: videoRef,
    controls: true,
    muted: false,
    loop: true,
    onTimeUpdate: e => {
      videoPlayHandle(e);
    },
    onCanPlay: canPlay,
    autoPlay: true
  }), !channel?.trailer && /*#__PURE__*/react.createElement(empty/* default */.Z, {
    image: empty/* default */.Z.PRESENTED_IMAGE_SIMPLE,
    description: 'ta还没有添加频道预告片'
  })), channel?.trailer && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "right-container"
  }, /*#__PURE__*/react.createElement("p", {
    className: "video-name",
    onClick: () => {
      videoRouter(channel.trailer);
    }
  }, channel.trailer?.name), /*#__PURE__*/react.createElement("p", {
    className: "play-count-time"
  }, /*#__PURE__*/react.createElement("p", {
    className: "count"
  }, channel.trailer?.playCount, "\u6B21\u89C2\u770B"), /*#__PURE__*/react.createElement("p", null, moment_default()(channel.trailer?.createTime).fromNow())), /*#__PURE__*/react.createElement("p", {
    className: "desc"
  }, channel.trailer?.description)))), /*#__PURE__*/react.createElement("div", {
    className: "video-tip"
  }, "\u9891\u9053\u7CBE\u9009\u89C6\u9891"), /*#__PURE__*/react.createElement("div", {
    className: "trailer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left-container"
  }, channel?.featured && /*#__PURE__*/react.createElement("img", {
    src: channel.featured?.picUrl,
    onClick: () => {
      videoRouter(channel.featured);
    }
  }), !channel?.featured && /*#__PURE__*/react.createElement(empty/* default */.Z, {
    image: empty/* default */.Z.PRESENTED_IMAGE_SIMPLE,
    description: 'ta还没有添加频道精选视频'
  })), channel?.featured && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "right-container"
  }, /*#__PURE__*/react.createElement("p", {
    className: "video-name",
    onClick: () => {
      videoRouter(channel.featured);
    }
  }, channel.featured?.name), /*#__PURE__*/react.createElement("p", {
    className: "play-count-time"
  }, /*#__PURE__*/react.createElement("p", {
    className: "count"
  }, channel.featured?.playCount, "\u6B21\u89C2\u770B"), /*#__PURE__*/react.createElement("p", null, moment_default()(channel.featured?.createTime).fromNow())), /*#__PURE__*/react.createElement("p", {
    className: "desc"
  }, channel.featured?.description)))));
};
/* harmony default export */ var home = (/*#__PURE__*/(0,react.memo)(Home));
// EXTERNAL MODULE: ./src/views/explore/childCpn/common/childCpn/community/index.tsx + 5 modules
var community = __webpack_require__(78376);
;// CONCATENATED MODULE: ./src/components/content/detail/userDetail/childCpn/community/index.tsx


const Community = props => {
  const {
    userId,
    channel
  } = props;
  console.log(channel);
  return /*#__PURE__*/react.createElement("div", null, channel && /*#__PURE__*/react.createElement(community/* default */.Z, {
    userId: userId,
    cId: channel.id,
    isShowPub: false
  }));
};
/* harmony default export */ var childCpn_community = (/*#__PURE__*/(0,react.memo)(Community));
;// CONCATENATED MODULE: ./src/components/content/detail/userDetail/childCpn/desc/style.tsx

const DescWrapper = styled_components_browser_esm/* default */.ZP.div``;
;// CONCATENATED MODULE: ./src/components/content/detail/userDetail/childCpn/desc/index.tsx


const Desc = () => {
  return /*#__PURE__*/react.createElement(DescWrapper, null, "jianjie");
};
/* harmony default export */ var desc = (/*#__PURE__*/(0,react.memo)(Desc));
;// CONCATENATED MODULE: ./src/components/content/detail/userDetail/config/index.tsx




const config_tabs = (userId, channel) => {
  return [{
    label: '首页',
    key: '1001',
    children: /*#__PURE__*/react.createElement(home, {
      userId: userId,
      channel: channel
    })
  }, {
    label: '社区',
    key: '1006',
    children: /*#__PURE__*/react.createElement(childCpn_community, {
      userId: userId,
      channel: channel
    })
  }, {
    label: '简介',
    key: '1008',
    children: /*#__PURE__*/react.createElement(desc, {
      userId: userId
    })
  }];
};

// EXTERNAL MODULE: ./src/network/block/index.tsx
var network_block = __webpack_require__(76872);
// EXTERNAL MODULE: ./src/constant/block.ts
var constant_block = __webpack_require__(3405);
;// CONCATENATED MODULE: ./src/components/content/detail/userDetail/childCpn/uploadedVideo/style.tsx

const UploadedVideoWrapper = styled_components_browser_esm/* default */.ZP.div`
  .video-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
// EXTERNAL MODULE: ./src/components/videoItem/index.tsx + 1 modules
var videoItem = __webpack_require__(95566);
// EXTERNAL MODULE: ./src/components/holder/index.tsx + 1 modules
var holder = __webpack_require__(45889);
;// CONCATENATED MODULE: ./src/components/content/detail/userDetail/childCpn/uploadedVideo/index.tsx






const UploadedVideo = props => {
  const {
    userId
  } = props;
  const navigate = (0,dist/* useNavigate */.s0)();
  const [video, setVideo] = (0,react.useState)([]);
  const [total, setTotal] = (0,react.useState)(0);
  const getUserVideoReq = (userId, keyword, offset, limit) => {
    (0,network_video/* getUserVideo */.sf)(userId, keyword, offset, limit).then(data => {
      if (data.status === 200) {
        setVideo(data.data.list);
        setTotal(data.data.count);
      }
    });
  };
  (0,react.useEffect)(() => {
    getUserVideoReq(userId, '', 0, 10);
  }, [userId]);
  const videoRouter = item => {
    navigate('/videoDetail', {
      replace: true,
      state: {
        id: item.id
      }
    });
  };
  return /*#__PURE__*/react.createElement(UploadedVideoWrapper, null, /*#__PURE__*/react.createElement("ul", {
    className: "video-list"
  }, video && video.length !== 0 && video.map(item => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react.createElement(videoItem/* default */.Z, {
      img: /*#__PURE__*/react.createElement("img", {
        src: item.picUrl,
        onClick: () => videoRouter(item)
      }),
      dt: item.dt,
      isShowUser: false,
      playCount: item.playCount,
      createTime: item.createTime,
      id: item.id,
      state: item.name,
      isShowVideo: false,
      scale: 0.92,
      itemWidth: 300,
      vioHeight: 140,
      dtPos: {
        left: 98,
        top: 54
      },
      user: item.user
    }));
  }), (0,holder/* default */.Z)(video.length, 5, 300)));
};
/* harmony default export */ var uploadedVideo = (/*#__PURE__*/(0,react.memo)(UploadedVideo));
// EXTERNAL MODULE: ./src/hook/useLoginMsg/index.tsx
var useLoginMsg = __webpack_require__(46139);
// EXTERNAL MODULE: ./src/network/playlist/index.tsx
var network_playlist = __webpack_require__(33422);
;// CONCATENATED MODULE: ./src/components/content/detail/userDetail/childCpn/playlist/style.tsx

const PlaylistWrapper = styled_components_browser_esm/* default */.ZP.div`
  .play-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > li {
      width: ${300 / 40}rem;
      height: ${153 / 40}rem;
      margin: 0 0 ${140 / 40}rem 0;
    }
    .cover {
      width: 100%;
      height: 100%;
      background-color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      overflow: hidden;
      img {
        height: 100%;
        width: auto;
        border-radius: 4px;
      }
    }
    .state {
      .name {
        font-size: ${18 / 40}rem;
        margin: ${15 / 40}rem 0 ${5 / 40}rem 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        width: 100%;
        word-break: break-all;
      }
      .create-time,
      .count {
        font-size: ${16 / 40}rem;
        color: #606060;
      }
    }
  }
`;
;// CONCATENATED MODULE: ./src/components/content/detail/userDetail/childCpn/playlist/index.tsx






const CreatePlaylist = props => {
  const {
    userId
  } = props;
  const [playlist, setPlaylist] = (0,react.useState)([]);
  const [total, setTotal] = (0,react.useState)(0);
  const getUserPlaylistReq = (userId, offset, limit) => {
    (0,network_playlist/* getUserPlaylist */.N3)(userId, offset, limit).then(data => {
      if (data.status === 200) {
        setPlaylist(data.data.list);
        setTotal(data.data.count);
      }
    });
  };
  const navigate = (0,dist/* useNavigate */.s0)();
  (0,react.useEffect)(() => {
    getUserPlaylistReq(userId, 0, 10);
  }, [userId]);
  const playlistRouter = item => {
    navigate(`/home/playlist/${item.id}`, {
      replace: false
    });
  };
  return /*#__PURE__*/react.createElement(PlaylistWrapper, null, /*#__PURE__*/react.createElement("ul", {
    className: "play-list"
  }, playlist && playlist.length !== 0 && playlist.map(item => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react.createElement("div", {
      className: 'cover',
      onClick: e => {
        playlistRouter(item);
      }
    }, /*#__PURE__*/react.createElement("img", {
      src: item.picUrl
    })), /*#__PURE__*/react.createElement("div", {
      className: "state"
    }, /*#__PURE__*/react.createElement("p", {
      className: "name"
    }, item.name), /*#__PURE__*/react.createElement("p", {
      className: "create-time"
    }, moment_default()(item.createTime).format('yyyy-MM-DD HH:mm')), /*#__PURE__*/react.createElement("p", {
      className: "count"
    }, item.video, "\u4E2A\u89C6\u9891")));
  }), (0,holder/* default */.Z)(playlist.length, 5, 300)));
};
/* harmony default export */ var playlist = (/*#__PURE__*/(0,react.memo)(CreatePlaylist));
;// CONCATENATED MODULE: ./src/components/content/detail/userDetail/childCpn/subscriber/style.tsx

const SubWrapper = styled_components_browser_esm/* default */.ZP.div`
  padding: ${20 / 40}rem 0;
  .sub-list {
    & > li {
      display: flex;
      align-items: flex-start;
      margin: 0 0 ${26 / 40}rem 0;
      .left-container {
        width: ${140 / 40}rem;
        height: ${140 / 40}rem;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .center-container {
        flex: 8;
        margin: 0 0 0 ${20 / 40}rem;
        .channel-name {
          font-size: ${28 / 40}rem;
        }
        .count {
          & > span {
            font-size: ${18 / 40}rem;
            color: #606060;
            &:nth-child(1) {
              margin: 0 ${5 / 40}rem 0 0;
            }
          }
        }
      }
      .right-container {
        flex: 1;
        padding: 0 ${40 / 40}rem 0;
      }
    }
  }
`;
// EXTERNAL MODULE: ./src/components/common/subBtn/index.tsx + 1 modules
var subBtn = __webpack_require__(80953);
;// CONCATENATED MODULE: ./src/components/content/detail/userDetail/childCpn/subscriber/index.tsx




const Subscriber = props => {
  const {
    userId
  } = props;
  const [sub, setSub] = (0,react.useState)([]);
  const [total, setTotal] = (0,react.useState)(0);
  const getUserSubReq = (userId, offset, limit) => {
    (0,subscriber/* getUserSub */.yf)(userId, offset, limit).then(data => {
      if (data.status === 200) {
        setSub(data.data.list);
        setTotal(data.data.count);
      }
    });
  };
  (0,react.useEffect)(() => {
    getUserSubReq(userId, 0, 10);
  }, [userId]);
  return /*#__PURE__*/react.createElement(SubWrapper, null, /*#__PURE__*/react.createElement("ul", {
    className: "sub-list"
  }, sub && sub.length !== 0 && sub.map(item => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react.createElement("div", {
      className: "left-container"
    }, /*#__PURE__*/react.createElement("img", {
      src: item.up.avatarUrl
    })), /*#__PURE__*/react.createElement("div", {
      className: "center-container"
    }, /*#__PURE__*/react.createElement("div", {
      className: "channel-name"
    }, item.up.userName), /*#__PURE__*/react.createElement("div", {
      className: "count"
    }, /*#__PURE__*/react.createElement("span", null, item.fans, "\u4F4D\u8BA2\u9605\u8005"), /*#__PURE__*/react.createElement("span", null, item.video, "\u4E2A\u89C6\u9891")), /*#__PURE__*/react.createElement("div", {
      className: "desc text-nowrap-mul-line"
    }, item.channel.description)), /*#__PURE__*/react.createElement("div", {
      className: "right-container"
    }, /*#__PURE__*/react.createElement(subBtn/* default */.Z, {
      userId: item.up.userId
    })));
  })));
};
/* harmony default export */ var childCpn_subscriber = (/*#__PURE__*/(0,react.memo)(Subscriber));
// EXTERNAL MODULE: ./src/hook/useSub/index.tsx
var useSub = __webpack_require__(33624);
// EXTERNAL MODULE: ./src/views/login/store/actionCreators.ts + 1 modules
var actionCreators = __webpack_require__(95085);
;// CONCATENATED MODULE: ./src/components/content/detail/userDetail/index.tsx
















const UserDetail = () => {
  const location = (0,dist/* useLocation */.TH)();
  const navigate = (0,dist/* useNavigate */.s0)();
  const {
    userId
  } = location.state;
  const dispatch = (0,es/* useDispatch */.I0)();
  const isSub = (0,useSub/* useSub */.$)(userId);
  const [keyIndex, setKeyIndex] = (0,react.useState)(0);
  const [userChannel, setUserChannel] = (0,react.useState)();
  const [block, setBlock] = (0,react.useState)([]);
  const [userTabs, setUserTabs] = (0,react.useState)([]);
  const loginMsg = (0,useLoginMsg/* useLoginMsg */.y)();
  (0,react.useEffect)(() => {
    (0,channel/* getUserChannel */.Ff)(userId).then(data => {
      if (data.status === 200) {
        setUserChannel(data.data);
        setUserTabs(config_tabs(userId, data.data));
        setKeyIndex(1);
      }
    });
  }, [userId]);
  (0,react.useEffect)(() => {
    if (keyIndex !== 0) {
      (0,network_block/* getUserBlock */.Ds)(userId).then(data => {
        if (data.status === 200) {
          setBlock(data.data);
          if (data.data.length !== 0) {
            let tabList = [...userTabs];
            for (let item of data.data) {
              if (item.name === constant_block/* UPLOADED_VIDEO */.tn) {
                tabList.push({
                  key: item.id,
                  label: item.name,
                  children: /*#__PURE__*/react.createElement(uploadedVideo, {
                    userId: userId
                  })
                });
              }
              if (item.name === constant_block/* CREATED_PLAYLIST */.UE) {
                tabList.push({
                  key: item.id,
                  label: item.name,
                  children: /*#__PURE__*/react.createElement(playlist, {
                    userId: userId
                  })
                });
              }
              if (item.name === constant_block/* SUB_CHANNEL */.Bt) {
                tabList.push({
                  key: item.id,
                  label: item.name,
                  children: /*#__PURE__*/react.createElement(childCpn_subscriber, {
                    userId: userId
                  })
                });
              }
            }
            setUserTabs(tabList);
          }
        }
      });
    }
  }, [keyIndex]);
  const chatRouter = () => {
    if (userId && userChannel && userChannel.user) {
      navigate('/chatDetail', {
        state: {
          userId: userId,
          userName: userChannel.user.userName
        }
      });
    }
  };
  const subHandler = async () => {
    if (!isSub) {
      const result = await (0,subscriber/* sub */.lu)(userId);
      if (result.status === 200) {
        notification/* default */.Z.info({
          message: `订阅成功`,
          description: `在“订阅内容中”查看您添加的视频`,
          placement: 'bottomLeft'
        });
      }
    } else {
      const result = await (0,subscriber/* cancelSub */.eM)(userId);
      if (result.status === 200) {}
    }
    if (loginMsg && loginMsg.userMsg) {
      dispatch((0,actionCreators/* changeUserDetailAction */.ZN)(loginMsg.userMsg.userId));
    }
  };
  return /*#__PURE__*/react.createElement(UserDetailWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: 'banner'
  }, /*#__PURE__*/react.createElement("img", {
    src: userChannel?.picUrl
  })), /*#__PURE__*/react.createElement("div", {
    className: "user-info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left"
  }, /*#__PURE__*/react.createElement("div", {
    className: "img-container"
  }, /*#__PURE__*/react.createElement("img", {
    src: userChannel?.user?.avatarUrl
  })), /*#__PURE__*/react.createElement("div", {
    className: "right-info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "user-name"
  }, userChannel?.user?.userName))), /*#__PURE__*/react.createElement("div", {
    className: "control-btn"
  }, loginMsg.userMsg.userId !== userId && /*#__PURE__*/react.createElement("div", {
    className: "sub-btn",
    onClick: () => subHandler()
  }, isSub ? '已订阅' : '订阅'), loginMsg.userMsg.userId !== userId && /*#__PURE__*/react.createElement("div", {
    className: "sub-btn message",
    onClick: e => chatRouter()
  }, "\u79C1\u4FE1"))), userTabs && userTabs.length !== 0 && /*#__PURE__*/react.createElement(tabs/* default */.Z, {
    defaultActiveKey: "1",
    items: userTabs
  }));
};
/* harmony default export */ var userDetail = (/*#__PURE__*/(0,react.memo)(UserDetail));

/***/ }),

/***/ 95566:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ videoItem; }
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
;// CONCATENATED MODULE: ./src/components/videoItem/style.tsx

const VideoItemWrapper = styled_components_browser_esm/* default */.ZP.div`
  background-color: #fff;
  width: ${props => props.isFlex ? '100%' : props.itemWidth / 40 + 'rem'};
  height: ${props => props.isFlex ? 'auto' : props.itemWidth * props.scale / 40 + 'rem'};
  display: ${props => props.isFlex ? 'flex' : 'block'};
  align-items: flex-start;
  position: relative;
  & > img {
    width: ${props => props.isFlex ? props.itemWidth / 40 + 'rem' : '100%'};
    border-radius: ${8 / 40}rem ${8 / 40}rem
      ${props => props.isFlex ? `${8 / 40}rem` : '0'}
      ${props => props.isFlex ? `${8 / 40}rem` : '0'};
  }
  .dt-pos {
    position: absolute;
    left: ${props => props.dtPos ? props.dtPos.left + '%' : '100%'};
    top: ${props => props.dtPos ? props.dtPos.top + '%' : '100%'};
    transform: translate(-100%, -100%);
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-weight: bolder;
    font-size: ${18 / 40}rem;
    padding: 1px 6px;
    border-radius: 5px;
    white-space: nowrap;
  }
  .video-container {
    border-radius: ${8 / 40}rem ${8 / 40}rem 0 0;
    overflow: hidden;
    width: 100%;
    height: ${props => props.vioHeight / 40 + 'rem'};
    background-color: black;
    & > video {
      width: 100%;
      height: ${props => props.vioHeight / 40 + 'rem'};
      object-position: 50% 50%;
      object-fit: contain;
    }
  }
  .msg-info {
    display: ${props => props.isFlex ? 'block' : 'flex'};
    align-items: flex-start;
    margin: ${props => props.isFlex ? 0 : `${20 / 40}rem`} 0 0 0;
    padding: 0 ${15 / 40}rem;
    width: 100%;
    .left-container {
      width: ${50 / 40}rem;
      height: ${50 / 40}rem;
      border-radius: 50%;
      background-color: #eeeeee;
      overflow: hidden;
      display: ${props => props.isFlex && !props.isShowUser ? `none` : 'block'};
      img {
        width: 100%;
      }
    }
    .right-container {
      width: ${props => props.isShowUser ? '80%' : '100%'};
      margin: 0 0 0 ${props => props.isShowUser ? `${20 / 40}rem` : '0'};
      .msg {
        .state {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
          .video-name {
            font-size: ${props => props.isFlex ? props.itemWidth / 16 / 40 + 'rem' : props.itemWidth / 20 / 40 + 'rem'};
            color: #0f0f0f;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            width: 100%;
            word-break: break-all;
          }
          .more {
            width: 10%;
            .more-icon {
              cursor: pointer;
              svg {
                font-size: ${34 / 40}rem;
              }
            }
          }
        }
        .pos-user-container {
          display: flex;
          align-items: center;
          padding: ${10 / 40}rem 0;
          .pos-user-container-avatar {
            width: ${50 / 40}rem;
            height: ${50 / 40}rem;
            border-radius: 50%;
            background-color: #eeeeee;
            overflow: hidden;
            margin: 0 ${10 / 40}rem 0 0;
            img {
              width: 100%;
            }
          }
        }
        .user-name {
          font-size: ${16 / 40}rem;
          color: #606060;
          margin: ${5 / 40}rem 0 0 0;
        }
        .play-count {
          & > span {
            color: #606060;
            font-size: ${16 / 40}rem;
            &:nth-child(1) {
              margin: 0 ${5 / 40}rem 0 0;
            }
          }
        }
      }
    }
  }
`;
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MoreOutlined.js + 1 modules
var MoreOutlined = __webpack_require__(92977);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js + 2 modules
var dropdown = __webpack_require__(16114);
// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 5 modules
var menu = __webpack_require__(28682);
// EXTERNAL MODULE: ./src/components/content/add/index.tsx + 3 modules
var add = __webpack_require__(61860);
// EXTERNAL MODULE: ./src/utils/time.tsx
var time = __webpack_require__(20871);
// EXTERNAL MODULE: ./src/constant/addList.ts
var addList = __webpack_require__(35824);
;// CONCATENATED MODULE: ./src/components/videoItem/index.tsx









const VideoItem = props => {
  const {
    user,
    isShowUser = true,
    isPosUser = false,
    img,
    vioHeight,
    dt,
    playCount,
    dtPos,
    isFlex,
    state,
    id,
    isShowMore,
    createTime,
    itemWidth,
    scale,
    video,
    isShowVideo,
    isShowImg
  } = props;
  const [isShowDrop, setIsShowDrop] = (0,react.useState)(false);
  const navigate = (0,dist/* useNavigate */.s0)();
  const moreOperatorHandle = e => {
    e.stopPropagation();
    setIsShowDrop(true);
  };
  const addRef = (0,react.useRef)(null);
  const openChangeHandle = a => {
    if (addRef && addRef.current) {
      addRef.current.liClick({
        icon: '',
        name: a.key
      });
    }
  };
  const userRouter = e => {
    if (user) {
      e.stopPropagation();
      navigate('/home/userDetail', {
        state: {
          userId: user.userId
        },
        replace: false
      });
    }
  };
  return /*#__PURE__*/react.createElement(VideoItemWrapper, {
    isShowUser: isShowUser,
    itemWidth: itemWidth,
    scale: scale,
    vioHeight: vioHeight,
    isFlex: isFlex,
    dtPos: dtPos
  }, !isShowVideo && img, isShowVideo && /*#__PURE__*/react.createElement("div", {
    className: "video-container"
  }, video), /*#__PURE__*/react.createElement("div", {
    className: "dt-pos"
  }, (0,time/* getDurationByTimestamp */.f)(dt || '0')), /*#__PURE__*/react.createElement("div", {
    className: "msg-info"
  }, isShowUser && /*#__PURE__*/react.createElement("div", {
    className: "left-container",
    onClick: e => {
      userRouter(e);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: user.avatarUrl
  })), /*#__PURE__*/react.createElement("div", {
    className: "right-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "msg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "state"
  }, /*#__PURE__*/react.createElement("div", {
    className: "video-name"
  }, state), isShowMore && /*#__PURE__*/react.createElement("div", {
    className: "more",
    onClick: e => {
      moreOperatorHandle(e);
    }
  }, /*#__PURE__*/react.createElement(dropdown/* default */.Z, {
    trigger: ['click'],
    overlay: /*#__PURE__*/react.createElement(menu/* default */.Z, {
      onClick: openChangeHandle
    }, addList/* addList */.$8.map(item => {
      return /*#__PURE__*/react.createElement(menu/* default */.Z.Item, {
        key: item.name
      }, /*#__PURE__*/react.createElement("div", {
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/react.createElement("div", null, item.icon), /*#__PURE__*/react.createElement("div", null, item.name)));
    }))
  }, /*#__PURE__*/react.createElement(MoreOutlined/* default */.Z, {
    className: "more-icon"
  })))), /*#__PURE__*/react.createElement("div", {
    className: isPosUser ? 'pos-user-container' : ''
  }, isPosUser && /*#__PURE__*/react.createElement("div", {
    className: "pos-user-container-avatar",
    onClick: e => {
      userRouter(e);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: user.avatarUrl
  })), /*#__PURE__*/react.createElement("div", {
    className: "user-name"
  }, user.userName)), /*#__PURE__*/react.createElement("div", {
    className: "play-count"
  }, /*#__PURE__*/react.createElement("span", null, playCount, "\u6B21\u89C2\u770B"), /*#__PURE__*/react.createElement("span", null, moment_default()(new Date(createTime).getTime()).locale('zh-CN').fromNow()))), /*#__PURE__*/react.createElement("div", {
    className: "more"
  }))), /*#__PURE__*/react.createElement(add/* default */.Z, {
    id: id,
    ref: addRef
  }));
};
/* harmony default export */ var videoItem = (/*#__PURE__*/(0,react.memo)(VideoItem));

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

/***/ 3405:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bt: function() { return /* binding */ SUB_CHANNEL; },
/* harmony export */   UE: function() { return /* binding */ CREATED_PLAYLIST; },
/* harmony export */   Yd: function() { return /* binding */ HOT_VIDEO; },
/* harmony export */   cA: function() { return /* binding */ WONDER_CHANNEL; },
/* harmony export */   dh: function() { return /* binding */ SINGLE_PLAYLIST; },
/* harmony export */   tn: function() { return /* binding */ UPLOADED_VIDEO; }
/* harmony export */ });
/* unused harmony exports SHORT, LIVE, YESTERDAY_LIVE, LIVE_ON_THE_WAY, MUL_PLAYLIST */
const UPLOADED_VIDEO = '上传的视频';
const HOT_VIDEO = '热门上传视频';
const SHORT = '短视频';
const LIVE = '正在直播';
const YESTERDAY_LIVE = '过往的直播归档的视频';
const LIVE_ON_THE_WAY = '即将开始的直播';
const SINGLE_PLAYLIST = '单个播放列表';
const CREATED_PLAYLIST = '创建的播放列表';
const MUL_PLAYLIST = '多个播放列表';
const SUB_CHANNEL = '订阅的频道';
const WONDER_CHANNEL = '精选频道';


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

/***/ 76872:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ds: function() { return /* binding */ getUserBlock; },
/* harmony export */   VA: function() { return /* binding */ userAddBlock; },
/* harmony export */   cS: function() { return /* binding */ getAllBlock; }
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

async function getAllBlock() {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: '/block/all'
  });
}
async function userAddBlock(blockId) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/block/user/add',
    data: {
      blockId
    }
  });
}
async function getUserBlock(userId) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: `/block/user/${userId}`
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
//# sourceMappingURL=62a0b42f8982051e8528.bundle.js.map