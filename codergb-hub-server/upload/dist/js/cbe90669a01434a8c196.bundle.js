"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[8376],{

/***/ 45889:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ components_holder; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/utils/holder.tsx
function holder(count, line) {
  let s = [];
  for (let i = 0; i < Math.ceil(count / line) * line - count; i++) {
    s.push(i);
  }
  return s;
}
;// CONCATENATED MODULE: ./src/components/holder/index.tsx


const HolderCpn = (total, lineCount, width) => {
  return holder(total, lineCount).map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: index,
      style: {
        width: `${width / 40}rem`,
        height: 0,
        border: 'none',
        padding: 0,
        margin: 0,
        outline: 'none'
      }
    }, ' ');
  });
};
/* harmony default export */ var components_holder = (HolderCpn);

/***/ }),

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

/***/ 66711:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bM: function() { return /* binding */ getMomentDetail; },
/* harmony export */   lm: function() { return /* binding */ createMoment; },
/* harmony export */   p6: function() { return /* binding */ getChannelMoment; },
/* harmony export */   uy: function() { return /* binding */ deleteMoment; }
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

async function createMoment(title, content, vid, userId, cId) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/moment',
    data: {
      title,
      content,
      vid,
      cId,
      userId
    }
  });
}
async function getChannelMoment(id, offset, limit) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/moment/channel/' + id,
    params: {
      offset,
      limit
    }
  });
}
async function getMomentDetail(id) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/moment/' + id
  });
}
async function deleteMoment(id) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/moment/delete/' + id
  });
}

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

/***/ 78376:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ community; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/FormOutlined.js + 1 modules
var FormOutlined = __webpack_require__(54977);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js + 1 modules
var PlusOutlined = __webpack_require__(49101);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 14 modules
var input = __webpack_require__(50817);
// EXTERNAL MODULE: ./node_modules/antd/es/notification/index.js + 1 modules
var notification = __webpack_require__(38648);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 3 modules
var message = __webpack_require__(55026);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 8 modules
var modal = __webpack_require__(48889);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 22 modules
var es_form = __webpack_require__(42856);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/views/explore/childCpn/common/childCpn/community/style.tsx

const CommunityWrapper = styled_components_browser_esm/* default */.ZP.div`
  .img-container {
    width: 100%;
    height: ${180 / 40}rem;
    display: flex;
    justify-content: center;
    background-color: var(--line-color);
    img {
      height: 100%;
    }
  }
`;
// EXTERNAL MODULE: ./node_modules/antd/es/pagination/index.js + 12 modules
var pagination = __webpack_require__(97491);
;// CONCATENATED MODULE: ./src/views/explore/childCpn/common/childCpn/community/childCpn/videoList/style.tsx

const VideoListWrapper = styled_components_browser_esm/* default */.ZP.div`
  min-height: ${200 / 40}rem;
  .header-content {
    display: flex;
    align-items: center;
  }
  .vio-list {
    display: flex;
    justify-content: space-between;
    margin: ${20 / 40}rem 0 0 0;
    flex-wrap: wrap;
    & > li {
      width: ${240 / 40}rem;
      margin: 0 0 ${15 / 40}rem 0;
      border: 1px solid var(--line-color);
      padding: ${10 / 40}rem;
      border-radius: 4px;
      &:hover {
        border-color: #3399ff;
      }
      &.active {
        border-color: #3399ff;
      }
      .img-container {
        width: ${220 / 40}rem;
        img {
          vertical-align: middle;
          width: 100%;
        }
      }
      .name {
        font-size: ${18 / 40}rem;
        margin: ${15 / 40}rem 0;
        word-break: break-all;
      }
      .user-name {
        font-size: ${16 / 40}rem;
      }
    }
  }
  .page {
    display: flex;
    align-items: center;
    padding: ${15 / 40}rem 0;
    justify-content: center;
  }
`;
// EXTERNAL MODULE: ./src/network/video/index.tsx
var video = __webpack_require__(13032);
// EXTERNAL MODULE: ./src/hook/useLoginMsg/index.tsx
var useLoginMsg = __webpack_require__(46139);
// EXTERNAL MODULE: ./src/components/holder/index.tsx + 1 modules
var holder = __webpack_require__(45889);
;// CONCATENATED MODULE: ./src/views/explore/childCpn/common/childCpn/community/childCpn/videoList/index.tsx






const {
  Search
} = input["default"];
const VideoList = /*#__PURE__*/(0,react.forwardRef)((props, propsRef) => {
  const [currentIndex, setCurrentIndex] = (0,react.useState)(-1);
  const [videoList, setVideList] = (0,react.useState)([]);
  const [total, setTotal] = (0,react.useState)(0);
  const [isSelf, setIsSelf] = (0,react.useState)(true);
  const [keyword, setKeyword] = (0,react.useState)('');
  const [videoItem, setVideoItem] = (0,react.useState)(null);
  const loginMsg = (0,useLoginMsg/* useLoginMsg */.y)();
  const getVideoList = async (offset, limit, keyword, isSelf) => {
    if (isSelf) {
      const result = await (0,video/* getUserVideo */.sf)(loginMsg.userMsg.userId, keyword, offset, limit);
      if (result.status === 200) {
        setTotal(result.data.count);
        setVideList(result.data.list);
      }
    } else {
      const result = await (0,video/* getAllVideo */.N$)(offset, limit, keyword);
      if (result.status === 200) {
        setTotal(result.data.count);
        setVideList(result.data.list);
      }
    }
  };
  const onSelfSearch = async value => {
    setIsSelf(true);
    setKeyword(value);
    await getVideoList(0, 8, value, true);
  };
  const onAllSearch = async value => {
    setIsSelf(false);
    setKeyword(value);
    await getVideoList(0, 8, value, false);
  };
  (0,react.useImperativeHandle)(propsRef, () => {
    return {
      videoSource: videoItem
    };
  });
  const selectVideo = (item, index) => {
    setCurrentIndex(index);
    setVideoItem(item);
  };
  const pageChange = async e => {
    await getVideoList((e - 1) * 8, 8, keyword, isSelf);
  };
  return /*#__PURE__*/react.createElement(VideoListWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "header-content"
  }, /*#__PURE__*/react.createElement(Search, {
    placeholder: "\u641C\u7D22\u60A8\u7684\u89C6\u9891",
    onSearch: onSelfSearch
  }), /*#__PURE__*/react.createElement(Search, {
    placeholder: "\u641C\u7D22codergb-hub\u5168\u7AD9\u89C6\u9891",
    onSearch: onAllSearch
  })), /*#__PURE__*/react.createElement("ul", {
    className: "vio-list"
  }, videoList && videoList.length !== 0 && videoList.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id,
      onClick: e => {
        selectVideo(item, index);
      },
      className: currentIndex === index ? 'active' : ''
    }, /*#__PURE__*/react.createElement("div", {
      className: "img-container"
    }, /*#__PURE__*/react.createElement("img", {
      src: item.picUrl
    })), /*#__PURE__*/react.createElement("div", {
      className: "name text-nowrap",
      title: item.name
    }, item.name), /*#__PURE__*/react.createElement("div", {
      className: "user-name"
    }, item.user.userName));
  }), (0,holder/* default */.Z)(videoList.length, 4, 240)), total > 8 && /*#__PURE__*/react.createElement("div", {
    className: 'page'
  }, /*#__PURE__*/react.createElement(pagination/* default */.Z, {
    defaultCurrent: 1,
    pageSize: 8,
    total: total,
    onChange: async e => {
      await pageChange(e);
    }
  })));
});
/* harmony default export */ var videoList = (/*#__PURE__*/(0,react.memo)(VideoList));
// EXTERNAL MODULE: ./src/network/moment/index.ts
var network_moment = __webpack_require__(66711);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
;// CONCATENATED MODULE: ./src/views/explore/childCpn/common/childCpn/community/childCpn/momentList/style.tsx

const MomentListWrapper = styled_components_browser_esm/* default */.ZP.div`
  margin: ${30 / 40}rem ${30 / 40}rem 0 0;

  .moment-list {
    & > li {
      display: flex;
      align-items: flex-start;
      border: 1px solid #e5e5e5;
      margin: 0 0 ${30 / 40}rem 0;
      border-radius: ${12 / 40}rem;
      padding: ${16 / 40}rem ${30 / 40}rem ${30 / 40}rem ${16 / 40}rem;

      .avatar-container {
        width: ${50 / 40}rem;
        height: ${50 / 40}rem;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
        }
      }

      .right-container {
        margin: 0 0 0 ${20 / 40}rem;
        flex: 1;
        position: relative;

        .operation {
          position: absolute;
          left: 100%;
          top: 2%;
          transform: translate(-120%, 0);
          cursor: pointer;

          .more-icon {
            cursor: pointer;

            svg {
              font-size: ${34 / 40}rem;
            }
          }
        }

        .g-user-info {
          display: flex;
          align-items: center;

          .user-name {
            font-size: ${16 / 40}rem;
            font-weight: bolder;
            margin: 0 ${12 / 40}rem 0 0;
          }

          .create-time {
            font-size: ${16 / 40}rem;
            color: #606060;
          }
        }

        .title {
          color: #065fd4;
          font-size: ${20 / 40}rem;
          margin: ${15 / 40}rem 0;
          cursor: pointer;
        }

        .content {
          text-indent: 2em;
          font-size: ${18 / 40}rem;
          cursor: pointer;
        }

        .video-container {
          width: ${400 / 40}rem;
          margin: ${20 / 40}rem 0;

          img {
            width: 100%;
            cursor: pointer;
          }
        }

        .thumb {
          display: inline-flex;
          align-items: center;

          .tread {
            border-left: 1px solid #d9d9d9;
            padding: 0 0 0 ${18 / 40}rem;
            margin: 0 0 0 ${18 / 40}rem;
          }
        }

        .thumb {
          cursor: pointer;
          background-color: #f2f2f2;
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
  }
  .page {
    display: flex;
    justify-content: center;
    padding: ${20 / 40}rem 0 ${30 / 40}rem 0;
  }
`;
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment_moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment_moment);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js + 2 modules
var dropdown = __webpack_require__(16114);
// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 5 modules
var menu = __webpack_require__(28682);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MoreOutlined.js + 1 modules
var MoreOutlined = __webpack_require__(92977);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LikeOutlined.js + 1 modules
var LikeOutlined = __webpack_require__(58812);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LikeFilled.js + 1 modules
var LikeFilled = __webpack_require__(80177);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DislikeOutlined.js + 1 modules
var DislikeOutlined = __webpack_require__(81825);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DislikeFilled.js + 1 modules
var DislikeFilled = __webpack_require__(6073);
;// CONCATENATED MODULE: ./src/views/explore/childCpn/common/childCpn/community/childCpn/momentList/index.tsx







const MomentList = /*#__PURE__*/(0,react.forwardRef)((props, propsRef) => {
  const {
    cId
  } = props;
  const [total, setTotal] = (0,react.useState)(0);
  const [moment, setMoment] = (0,react.useState)([]);
  const getChannelMomentReq = async (id, offset, limit) => {
    const result = await (0,network_moment/* getChannelMoment */.p6)(id, offset, limit);
    if (result.status === 200) {
      setTotal(result.data.count);
      setMoment(result.data.list);
    }
  };
  (0,react.useImperativeHandle)(propsRef, () => {
    return {
      getChannelMomentReq
    };
  });
  (0,react.useEffect)(() => {
    getChannelMomentReq(cId, 0, 10).then(() => {});
  }, [cId]);
  const pageChange = e => {
    getChannelMomentReq(cId, (e - 1) * 10, 10).then(() => {});
  };
  const navigate = (0,dist/* useNavigate */.s0)();
  const momentRouter = item => {
    navigate('/home/moment', {
      replace: false,
      state: {
        id: item.id
      }
    });
  };
  const drodownHandler = (e, item) => {
    console.log(e);
    const {
      key
    } = e;
    if (key === 'del') {
      (0,network_moment/* deleteMoment */.uy)(item.id).then(res => {
        if (res.status === 200) {
          message/* default */.ZP.info('删除成功');
          getChannelMomentReq(cId, 0, 10).then(() => {});
        }
      });
    }
  };
  return /*#__PURE__*/react.createElement(MomentListWrapper, null, /*#__PURE__*/react.createElement("ul", {
    className: "moment-list"
  }, moment && moment.length !== 0 && moment.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react.createElement("div", {
      className: "avatar-container"
    }, /*#__PURE__*/react.createElement("img", {
      src: item.user.avatarUrl
    })), /*#__PURE__*/react.createElement("div", {
      className: "right-container"
    }, /*#__PURE__*/react.createElement("div", {
      className: "operation"
    }, /*#__PURE__*/react.createElement(dropdown/* default */.Z, {
      trigger: ['click'],
      overlay: /*#__PURE__*/react.createElement(menu/* default */.Z, {
        onClick: e => {
          drodownHandler(e, item);
        }
      }, /*#__PURE__*/react.createElement(menu/* default */.Z.Item, {
        key: "del"
      }, /*#__PURE__*/react.createElement("div", null, "\u5220\u9664"))),
      placement: "bottom"
    }, /*#__PURE__*/react.createElement(MoreOutlined/* default */.Z, {
      className: "more-icon"
    }))), /*#__PURE__*/react.createElement("div", {
      className: "g-user-info"
    }, /*#__PURE__*/react.createElement("p", {
      className: "user-name"
    }, item.user.userName), /*#__PURE__*/react.createElement("p", {
      className: "create-time"
    }, moment_default()(item.createTime).fromNow())), /*#__PURE__*/react.createElement("p", {
      className: "title",
      onClick: () => {
        momentRouter(item);
      }
    }, item.title), /*#__PURE__*/react.createElement("p", {
      className: "content"
    }, item.content), /*#__PURE__*/react.createElement("div", {
      className: "video-container",
      onClick: () => {
        momentRouter(item);
      }
    }, /*#__PURE__*/react.createElement("img", {
      src: item.video.picUrl
    })), /*#__PURE__*/react.createElement("div", {
      className: "thumb"
    }, /*#__PURE__*/react.createElement("div", {
      className: "thumb-inner"
    }, /*#__PURE__*/react.createElement(LikeOutlined/* default */.Z, {
      className: `thumb-icon`
    }), /*#__PURE__*/react.createElement(LikeFilled/* default */.Z, {
      className: `thumb-icon`
    }), /*#__PURE__*/react.createElement("span", {
      className: "label"
    }, "14\u4E07")), /*#__PURE__*/react.createElement("div", {
      className: "tread"
    }, /*#__PURE__*/react.createElement(DislikeOutlined/* default */.Z, {
      className: "tread-icon"
    }), /*#__PURE__*/react.createElement(DislikeFilled/* default */.Z, {
      className: "tread-icon"
    })))));
  })), total > 10 && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: 'page'
  }, /*#__PURE__*/react.createElement(pagination/* default */.Z, {
    defaultCurrent: 1,
    pageSize: 10,
    total: total,
    onChange: e => {
      pageChange(e);
    }
  }))));
});
/* harmony default export */ var momentList = (/*#__PURE__*/(0,react.memo)(MomentList));
/*
  
*/
;// CONCATENATED MODULE: ./src/views/explore/childCpn/common/childCpn/community/index.tsx








const {
  TextArea
} = input["default"];
const Community = props => {
  const [isModalOpen, setIsModalOpen] = (0,react.useState)(false);
  const formRef = (0,react.useRef)(null);
  const loginMsg = (0,useLoginMsg/* useLoginMsg */.y)();
  const publishClick = () => {
    formRef.current?.resetFields();
    setIsModalOpen(true);
    setVideoSource(null);
  };
  const momentRef = (0,react.useRef)(null);
  const handleOk = () => {
    formRef.current?.validateFields().then(async value => {
      const result = await (0,network_moment/* createMoment */.lm)(value.title, value.content, value.videoId, props.userId, props.cId);
      if (result.status === 200) {
        setIsModalOpen(false);
        momentRef.current?.getChannelMomentReq(props.cId, 0, 15);
        notification/* default */.Z.info({
          message: '动态创建成功',
          description: '请在您的频道社区查看您的发布',
          placement: 'bottomLeft'
        });
      }
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [isShowVideoModel, setShowVideoModel] = (0,react.useState)(false);
  const selectVideo = () => {
    setShowVideoModel(true);
  };
  const videoListRef = (0,react.useRef)(null);
  const [videoSource, setVideoSource] = (0,react.useState)(null);
  const [videoId, setVideoId] = (0,react.useState)('');
  const selectFinish = () => {
    if (videoListRef.current && videoListRef.current.videoSource) {
      setShowVideoModel(false);
      setVideoSource(videoListRef.current.videoSource);
      setVideoId(videoListRef.current.videoSource.id);
      if (formRef.current) formRef.current.setFieldValue('videoId', videoListRef.current.videoSource.id);
    } else {
      message/* default */.ZP.warning('请选择一个视频');
    }
  };
  const selectCancel = () => {
    setShowVideoModel(false);
  };
  return /*#__PURE__*/react.createElement(CommunityWrapper, null, (loginMsg.userMsg.userId === props.userId || props.isShowPub) && /*#__PURE__*/react.createElement("div", {
    className: "publish-btn"
  }, /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    type: "primary",
    icon: /*#__PURE__*/react.createElement(FormOutlined/* default */.Z, null),
    onClick: e => publishClick()
  }, "\u53D1\u8868\u4F60\u7684\u770B\u6CD5")), /*#__PURE__*/react.createElement(modal/* default */.Z, {
    title: "\u53D1\u5E03\u52A8\u6001",
    open: isModalOpen,
    maskClosable: false,
    onOk: handleOk,
    onCancel: handleCancel,
    destroyOnClose: true
  }, /*#__PURE__*/react.createElement(es_form/* default */.Z, {
    ref: formRef,
    name: "basic",
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 167
    },
    initialValues: {
      remember: true
    },
    autoComplete: "off",
    layout: 'vertical'
  }, /*#__PURE__*/react.createElement(es_form/* default */.Z.Item, {
    label: "\u6807\u9898",
    name: "title",
    rules: [{
      required: true,
      message: '为你的动态添加一个标题吧!'
    }]
  }, /*#__PURE__*/react.createElement(input["default"], {
    size: "large",
    placeholder: '添加精彩标题'
  })), /*#__PURE__*/react.createElement(es_form/* default */.Z.Item, {
    label: "\u5185\u5BB9",
    name: "content",
    rules: [{
      required: true,
      message: '请添加你的动态内容'
    }]
  }, /*#__PURE__*/react.createElement(TextArea, {
    rows: 4,
    placeholder: "\u53D1\u8868\u4F60\u6240\u60F3",
    maxLength: 300
  })), /*#__PURE__*/react.createElement(es_form/* default */.Z.Item, {
    label: "\u89C6\u9891",
    name: "videoId",
    valuePropName: 'videoId',
    rules: [{
      required: true,
      message: '添加视频丰富一下你的动态吧'
    }]
  }, videoSource && videoSource.picUrl && /*#__PURE__*/react.createElement("div", {
    className: "moment-out-of-body-img-container"
  }, /*#__PURE__*/react.createElement("img", {
    src: videoSource.picUrl
  })), /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    type: "dashed",
    onClick: () => selectVideo(),
    block: true,
    icon: /*#__PURE__*/react.createElement(PlusOutlined/* default */.Z, null)
  }, "\u9009\u62E9\u89C6\u9891")))), /*#__PURE__*/react.createElement(modal/* default */.Z, {
    title: '视频列表',
    open: isShowVideoModel,
    maskClosable: false,
    onOk: selectFinish,
    onCancel: selectCancel,
    destroyOnClose: true,
    width: '60%'
  }, /*#__PURE__*/react.createElement(videoList, {
    ref: videoListRef
  })), props.cId && /*#__PURE__*/react.createElement(momentList, {
    cId: props.cId,
    ref: momentRef
  }));
};
/* harmony default export */ var community = (/*#__PURE__*/(0,react.memo)(Community));

/***/ })

}]);
//# sourceMappingURL=cbe90669a01434a8c196.bundle.js.map