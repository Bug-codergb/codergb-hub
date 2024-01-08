"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[3506],{

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

/***/ 85261:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ explore; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 20 modules
var tabs = __webpack_require__(60561);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/views/explore/style.tsx

const ExploreWrapper = styled_components_browser_esm/* default */.ZP.div`
  .explore-list {
    display: flex;
    align-items: center;
    & > li {
      padding: 0 ${20 / 40}rem;
      & > span {
        padding: 0 0 ${5 / 40}rem 0;
        cursor: pointer;
      }
      &.active {
        & > span {
          border-bottom: 3px solid #cc0101;
        }
      }
    }
  }
`;
// EXTERNAL MODULE: ./src/network/index.ts + 1 modules
var network = __webpack_require__(16398);
;// CONCATENATED MODULE: ./src/network/explore/index.tsx

async function getExplore() {
  return await network/* default */.Z.post({
    url: '/user/all',
    params: {
      isExplore: 1
    }
  });
}
;// CONCATENATED MODULE: ./src/constant/explore.tsx
const EXPLORE_MUSIC = '音乐';
const EXPLORE_MOVIE = '电影和节目';
const EXPLORE_GAME = '游戏';
const EXPLORE_NEW = '新闻';
const EXPLORE_SPORT = '体育';
const EXPLORE_STUDY = '学习';
let exploreMap = new Map([['音乐', EXPLORE_MUSIC], ['电影和节目', EXPLORE_MOVIE], ['游戏', EXPLORE_GAME], ['新闻', EXPLORE_NEW], ['体育', EXPLORE_SPORT], ['学习', EXPLORE_STUDY]]);

;// CONCATENATED MODULE: ./src/views/explore/childCpn/music/style.tsx

const MusicWrapper = styled_components_browser_esm/* default */.ZP.div`
  height: 80vh;
  overflow-y: scroll;
  .music-header {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .channel-msg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${24 / 40}rem 0;
    padding: 0 ${40 / 40}rem 0 0;
    .left-container {
      display: flex;
      align-items: center;
      .left {
        width: ${100 / 40}rem;
        height: ${100 / 40}rem;
        border-radius: 50%;
        overflow: hidden;
        & > img {
          width: 100%;
        }
      }
      .right {
        margin: 0 0 0 ${30 / 40}rem;
        .name {
          font-size: ${40 / 40}rem;
        }
        .sub {
          font-size: ${20 / 40}rem;
          color: #606060;
        }
      }
    }
    .right-container {
      background-color: #0f0f0f;
      color: #fff;
      cursor: pointer;
      font-size: ${20 / 40}rem;
      padding: ${10 / 40}rem ${20 / 40}rem;
      border-radius: ${24 / 40}rem;
      margin: 0 0 0 ${40 / 40}rem;
    }
  }
`;
// EXTERNAL MODULE: ./src/network/channel/index.tsx
var network_channel = __webpack_require__(38306);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/antd/es/image/index.js + 15 modules
var es_image = __webpack_require__(62462);
// EXTERNAL MODULE: ./node_modules/antd/es/pagination/index.js + 12 modules
var pagination = __webpack_require__(97491);
;// CONCATENATED MODULE: ./src/views/explore/childCpn/music/childCpn/home/style.tsx

const HomeWrapper = styled_components_browser_esm/* default */.ZP.div`
  padding: 0 0 ${20 / 40}rem 0;
  .col-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > li {
      display: flex;
      align-items: flex-start;
      margin: 0 ${20 / 40}rem ${30 / 40}rem 0;
      .img-cover {
        border-radius: 4px;
      }
      .right-container {
        width: ${150 / 40}rem;
        margin: 0 0 0 ${20 / 40}rem;
        .name {
          font-size: ${18 / 40}rem;
          white-space: normal;
          margin: 0 0 ${15 / 40}rem 0;
        }
        .desc {
          font-size: ${12 / 40}rem;
          color: #606060;
          white-space: normal;
        }
        .count {
          font-size: ${12 / 40}rem;
          color: #606060;
          white-space: normal;
          display: flex;
          flex-wrap: wrap;
          margin: ${10 / 40}rem 0 0 0;
        }
      }
    }
  }
  .page {
    padding: ${15 / 40}rem ${18 / 40}rem ${15 / 40}rem 0;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #e5e5e5;
  }
`;
// EXTERNAL MODULE: ./src/network/collection/index.tsx
var network_collection = __webpack_require__(25876);
// EXTERNAL MODULE: ./src/components/holder/index.tsx + 1 modules
var holder = __webpack_require__(45889);
;// CONCATENATED MODULE: ./src/assets/img/placeholder.png
var placeholder_namespaceObject = __webpack_require__.p + "images/b3140e2d0994f05071a1.png";
;// CONCATENATED MODULE: ./src/views/explore/childCpn/music/childCpn/home/index.tsx







const Home = props => {
  const {
    userId
  } = props;
  const [collection, setCollection] = (0,react.useState)([]);
  const [total, setTotal] = (0,react.useState)(0);
  const navigate = (0,dist/* useNavigate */.s0)();
  (0,react.useEffect)(() => {
    (0,network_collection/* getUserCol */.V)(userId, 0, 8).then(data => {
      if (data.status === 200) {
        setTotal(data.data.count);
        setCollection(data.data.list);
      }
    });
  }, [userId]);
  const pageChange = e => {
    (0,network_collection/* getUserCol */.V)(userId, (e - 1) * 8, 8).then(data => {
      if (data.status === 200) {
        setTotal(data.data.count);
        setCollection(data.data.list);
      }
    });
  };
  const videoRouter = item => {
    console.log(item);
    navigate('/videoDetail', {
      replace: true,
      state: {
        cId: item.id,
        type: 'collection'
      }
    });
  };
  return /*#__PURE__*/react.createElement(HomeWrapper, null, /*#__PURE__*/react.createElement("ul", {
    className: "col-list"
  }, collection && collection.length !== 0 && collection.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react.createElement("div", {
      className: "left-container"
    }, /*#__PURE__*/react.createElement(es_image/* default */.Z, {
      className: 'img-cover',
      width: 120,
      height: 120,
      src: item.picUrl,
      onClick: () => videoRouter(item),
      fallback: placeholder_namespaceObject,
      preview: false
    })), /*#__PURE__*/react.createElement("div", {
      className: "right-container"
    }, /*#__PURE__*/react.createElement("p", {
      className: "name text-nowrap-mul-line"
    }, item.name), /*#__PURE__*/react.createElement("p", {
      className: 'desc text-nowrap-mul-line'
    }, item.description), /*#__PURE__*/react.createElement("p", {
      className: "count"
    }, item.count, "\u4E2A\u4F5C\u54C1")));
  }), (0,holder/* default */.Z)(collection.length, 4, 350)), /*#__PURE__*/react.createElement("div", {
    className: "page"
  }, /*#__PURE__*/react.createElement(pagination/* default */.Z, {
    defaultCurrent: 1,
    pageSize: 8,
    total: total,
    onChange: e => pageChange(e)
  })));
};
/* harmony default export */ var home = (/*#__PURE__*/(0,react.memo)(Home));
;// CONCATENATED MODULE: ./src/views/explore/childCpn/music/childCpn/community/style.tsx

const CommunityWrapper = styled_components_browser_esm/* default */.ZP.div``;
;// CONCATENATED MODULE: ./src/views/explore/childCpn/music/childCpn/community/index.tsx


const Community = () => {
  return /*#__PURE__*/react.createElement(CommunityWrapper, null, "www");
};
/* harmony default export */ var community = (/*#__PURE__*/(0,react.memo)(Community));
;// CONCATENATED MODULE: ./src/views/explore/childCpn/music/childCpn/desc/style.tsx

const DescWrapper = styled_components_browser_esm/* default */.ZP.div``;
;// CONCATENATED MODULE: ./src/views/explore/childCpn/music/childCpn/desc/index.tsx


const Desc = () => {
  return /*#__PURE__*/react.createElement(DescWrapper, null, "www");
};
/* harmony default export */ var desc = (/*#__PURE__*/(0,react.memo)(Desc));
;// CONCATENATED MODULE: ./src/views/explore/childCpn/music/index.tsx







const Music = props => {
  const {
    userId
  } = props;
  const [channel, setChannel] = (0,react.useState)();
  (0,react.useEffect)(() => {
    (0,network_channel/* getUserChannel */.Ff)(userId).then(data => {
      if (data.status === 200) {
        setChannel(data.data);
      }
    });
  }, [userId]);
  const items = [{
    label: '首页',
    key: 'item-1',
    children: /*#__PURE__*/react.createElement(home, {
      userId: userId
    })
  }, {
    label: '社区',
    key: 'item-2',
    children: /*#__PURE__*/react.createElement(community, null)
  }, {
    label: '简介',
    key: 'item-3',
    children: /*#__PURE__*/react.createElement(desc, null)
  }];
  return /*#__PURE__*/react.createElement(MusicWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "music-header"
  }, /*#__PURE__*/react.createElement("img", {
    src: channel?.picUrl,
    alt: channel?.name
  })), /*#__PURE__*/react.createElement("div", {
    className: "channel-msg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left"
  }, /*#__PURE__*/react.createElement("img", {
    src: channel?.user.avatarUrl
  })), /*#__PURE__*/react.createElement("div", {
    className: "right"
  }, /*#__PURE__*/react.createElement("div", {
    className: 'name'
  }, channel?.name), /*#__PURE__*/react.createElement("div", {
    className: 'sub'
  }, "1.8\u4EBF\u4F4D\u8BA2\u9605"))), /*#__PURE__*/react.createElement("div", {
    className: "right-container"
  }, "\u8BA2\u9605")), /*#__PURE__*/react.createElement(tabs/* default */.Z, {
    items: items
  }));
};
/* harmony default export */ var music = (/*#__PURE__*/(0,react.memo)(Music));
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(14277);
// EXTERNAL MODULE: ./node_modules/antd/es/avatar/index.js + 5 modules
var avatar = __webpack_require__(98453);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(89366);
;// CONCATENATED MODULE: ./src/assets/img/1677308494819.png
var _1677308494819_namespaceObject = __webpack_require__.p + "images/355551f0efdd3a2bc6b5.png";
;// CONCATENATED MODULE: ./src/views/explore/childCpn/common/style.tsx

const CommonWrapper = styled_components_browser_esm/* default */.ZP.div`
  height: 80vh;
  overflow-y: scroll;

  .common-header {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .channel-msg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${24 / 40}rem 0;
    padding: 0 ${40 / 40}rem 0 0;

    .left-container {
      display: flex;
      align-items: center;

      .left {
        width: ${100 / 40}rem;
        height: ${100 / 40}rem;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        & > img {
          width: 100%;
        }
        .ant-avatar-circle,
        .anticon-user {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        svg {
          width: ${40 / 40}rem;
          height: ${40 / 40}rem;
        }
      }

      .right {
        margin: 0 0 0 ${30 / 40}rem;

        .name {
          font-size: ${40 / 40}rem;
        }

        .sub {
          font-size: ${20 / 40}rem;
          color: #606060;
        }
      }
    }

    .right-container {
      background-color: #0f0f0f;
      color: #fff;
      cursor: pointer;
      font-size: ${20 / 40}rem;
      padding: ${10 / 40}rem ${20 / 40}rem;
      border-radius: ${24 / 40}rem;
      margin: 0 0 0 ${40 / 40}rem;
    }
  }
`;
// EXTERNAL MODULE: ./src/network/playlist/index.tsx
var network_playlist = __webpack_require__(33422);
// EXTERNAL MODULE: ./node_modules/antd/es/carousel/index.js + 9 modules
var carousel = __webpack_require__(59466);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LeftOutlined.js + 1 modules
var LeftOutlined = __webpack_require__(67724);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(8812);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/views/explore/childCpn/common/childCpn/home/childCpn/videoList/style.tsx

const VideoListWrapper = styled_components_browser_esm/* default */.ZP.div`
  .common-video-list {
    display: flex !important;
    margin: ${15 / 40}rem 0 ${30 / 40}rem 0;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 ${20 / 40}rem;
    position: relative;
    .prev,
    .next {
      width: ${55 / 40}rem;
      height: ${55 / 40}rem;
      position: absolute;
      top: 15%;
      left: 0;
      transform: translate(-50, -50%);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .next {
      left: 100%;
      transform: translateX(-100%);
    }
    & > li {
      width: ${280 / 40}rem;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.09);
      padding: 0 0 10px 0;
      &:hover {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.17);
      }
      .img-container {
        width: ${280 / 40}rem;
        img {
          width: 100%;
        }
      }
      .video-name {
        font-size: ${20 / 40}rem;
        padding: 10px 8px 0 8px;
        display: inline-block;
        word-break: break-all;
      }
      .user-name {
        padding: 5px 0 5px 8px;
        font-size: ${18 / 40}rem;
        cursor: pointer;
      }
      .create-time {
        font-size: ${18 / 40}rem;
        padding: 0 0 0 8px;
      }
    }
  }
`;
;// CONCATENATED MODULE: ./src/views/explore/childCpn/common/childCpn/home/childCpn/videoList/index.tsx








const VideoList = props => {
  const {
    id
  } = props;
  const [total, setTotal] = (0,react.useState)(0);
  const [videoList, setVideo] = (0,react.useState)([]);
  const carouselRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    (0,network_playlist/* getPlaylistVideo */.Oi)(id, 0, 10).then(data => {
      if (data.status === 200) {
        setTotal(data.data.count);
        setVideo(data.data.list);
      }
    });
  }, [id]);
  const prevHandle = () => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current?.prev();
    }
  };
  const nextHandle = () => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current?.next();
    }
  };
  const navigate = (0,dist/* useNavigate */.s0)();
  const videoRouter = item => {
    navigate('/videoDetail', {
      replace: true,
      state: {
        id: item.id
      }
    });
  };
  return /*#__PURE__*/react.createElement(VideoListWrapper, null, /*#__PURE__*/react.createElement(carousel/* default */.Z, {
    ref: carouselRef,
    dots: false
  }, [0, 1].map((item, index) => {
    return /*#__PURE__*/react.createElement("ul", {
      key: item,
      className: "common-video-list"
    }, videoList && videoList.length !== 0 && videoList.slice(item * 5, item * 5 + 5).map(item => {
      return /*#__PURE__*/react.createElement("li", {
        key: item.id
      }, /*#__PURE__*/react.createElement("div", {
        className: "img-container",
        onClick: e => videoRouter(item)
      }, /*#__PURE__*/react.createElement("img", {
        src: item.picUrl
      })), /*#__PURE__*/react.createElement("div", {
        className: "video-name text-nowrap-mul-line"
      }, item.name), /*#__PURE__*/react.createElement("div", {
        className: "user-name"
      }, item.user.userName), /*#__PURE__*/react.createElement("div", {
        className: "create-time"
      }, moment_default()(item.createTime).fromNow()));
    }), videoList && videoList.length !== 0 && (0,holder/* default */.Z)(videoList.length, 5, 300), videoList && videoList.length > 5 && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
      className: 'prev',
      onClick: e => prevHandle()
    }, ' ', /*#__PURE__*/react.createElement(LeftOutlined/* default */.Z, null)), /*#__PURE__*/react.createElement("div", {
      className: 'next',
      onClick: e => nextHandle()
    }, /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, null), ' ')));
  })), (!videoList || videoList.length === 0) && /*#__PURE__*/react.createElement(empty/* default */.Z, {
    description: '暂无视频',
    image: empty/* default */.Z.PRESENTED_IMAGE_SIMPLE
  }));
};
/* harmony default export */ var videoList = (/*#__PURE__*/(0,react.memo)(VideoList));
;// CONCATENATED MODULE: ./src/views/explore/childCpn/common/childCpn/home/style.tsx

const style_HomeWrapper = styled_components_browser_esm/* default */.ZP.div``;
;// CONCATENATED MODULE: ./src/views/explore/childCpn/common/childCpn/home/index.tsx




const home_Home = props => {
  const {
    userId
  } = props;
  const [total, setTotal] = (0,react.useState)(0);
  const [playlist, setPlaylist] = (0,react.useState)([]);
  (0,react.useEffect)(() => {
    (0,network_playlist/* getUserPlaylist */.N3)(userId, 0, 10).then(data => {
      if (data.status === 200) {
        setTotal(data.data.count);
        setPlaylist(data.data.list);
      }
    });
  }, [userId]);
  return /*#__PURE__*/react.createElement(style_HomeWrapper, null, /*#__PURE__*/react.createElement("ul", null, playlist && playlist.length !== 0 && playlist.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react.createElement("div", {
      className: "play-list-name"
    }, item.name), /*#__PURE__*/react.createElement(videoList, {
      id: item.id
    }));
  })));
};
/* harmony default export */ var childCpn_home = (/*#__PURE__*/(0,react.memo)(home_Home));
// EXTERNAL MODULE: ./src/views/explore/childCpn/common/childCpn/community/index.tsx + 5 modules
var childCpn_community = __webpack_require__(78376);
;// CONCATENATED MODULE: ./src/views/explore/childCpn/common/childCpn/desc/index.tsx

const desc_Desc = () => {
  return /*#__PURE__*/react.createElement("div", null, "\u7B80\u4ECB");
};
/* harmony default export */ var childCpn_desc = (/*#__PURE__*/(0,react.memo)(desc_Desc));
;// CONCATENATED MODULE: ./src/views/explore/childCpn/common/index.tsx










const Common = props => {
  const {
    userId
  } = props;
  const [channel, setChannel] = (0,react.useState)();
  (0,react.useEffect)(() => {
    (0,network_channel/* getUserChannel */.Ff)(userId).then(data => {
      if (data.status === 200) {
        setChannel(data.data);
      }
    });
  }, []);
  const items = [{
    label: '首页',
    key: 'item-1',
    children: /*#__PURE__*/react.createElement(childCpn_home, {
      userId: userId
    })
  }, {
    label: '社区',
    key: 'item-2',
    children: channel ? /*#__PURE__*/react.createElement(childCpn_community/* default */.Z, {
      cId: channel.id,
      userId: userId
    }) : /*#__PURE__*/react.createElement(empty/* default */.Z, null)
  }, {
    label: '简介',
    key: 'item-3',
    children: /*#__PURE__*/react.createElement(childCpn_desc, null)
  }];
  return /*#__PURE__*/react.createElement(CommonWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "common-header"
  }, channel?.picUrl && /*#__PURE__*/react.createElement("img", {
    src: channel?.picUrl,
    alt: channel?.name
  }), (!channel || !channel.picUrl) && /*#__PURE__*/react.createElement("img", {
    src: _1677308494819_namespaceObject,
    alt: channel?.name
  })), /*#__PURE__*/react.createElement("div", {
    className: "channel-msg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left"
  }, channel && channel.user && /*#__PURE__*/react.createElement(avatar/* default */.C, {
    src: channel?.user.avatarUrl,
    size: 70,
    icon: /*#__PURE__*/react.createElement(UserOutlined/* default */.Z, {
      style: {
        fontSize: '80px'
      }
    })
  })), /*#__PURE__*/react.createElement("div", {
    className: "right"
  }, /*#__PURE__*/react.createElement("div", {
    className: 'name'
  }, channel?.name), /*#__PURE__*/react.createElement("div", {
    className: 'sub'
  }, "1.8\u4EBF\u4F4D\u8BA2\u9605"))), /*#__PURE__*/react.createElement("div", {
    className: "right-container"
  }, "\u8BA2\u9605")), /*#__PURE__*/react.createElement(tabs/* default */.Z, {
    items: items
  }));
};
/* harmony default export */ var common = (/*#__PURE__*/(0,react.memo)(Common));
;// CONCATENATED MODULE: ./src/views/explore/childCpn/movie/index.tsx


const Movie = props => {
  const {
    userId
  } = props;
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(common, {
    userId: userId
  }));
};
/* harmony default export */ var movie = (/*#__PURE__*/(0,react.memo)(Movie));
;// CONCATENATED MODULE: ./src/views/explore/childCpn/game/index.tsx


const Game = props => {
  const {
    userId
  } = props;
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(common, {
    userId: userId
  }));
};
/* harmony default export */ var game = (/*#__PURE__*/(0,react.memo)(Game));
;// CONCATENATED MODULE: ./src/views/explore/childCpn/news/style.tsx

const NewsWrapper = styled_components_browser_esm/* default */.ZP.div``;
;// CONCATENATED MODULE: ./src/views/explore/childCpn/news/index.tsx



const News = props => {
  const {
    userId
  } = props;
  return /*#__PURE__*/react.createElement(NewsWrapper, null, /*#__PURE__*/react.createElement(common, {
    userId: userId
  }));
};
/* harmony default export */ var news = (/*#__PURE__*/(0,react.memo)(News));
;// CONCATENATED MODULE: ./src/views/explore/childCpn/sport/index.tsx


const Sport = props => {
  const {
    userId
  } = props;
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(common, {
    userId: userId
  }));
};
/* harmony default export */ var sport = (/*#__PURE__*/(0,react.memo)(Sport));
;// CONCATENATED MODULE: ./src/views/explore/childCpn/study/index.tsx


const Study = props => {
  const {
    userId
  } = props;
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(common, {
    userId: userId
  }));
};
/* harmony default export */ var study = (/*#__PURE__*/(0,react.memo)(Study));
;// CONCATENATED MODULE: ./src/views/explore/index.tsx











const Explore = () => {
  const [explore, setExplore] = (0,react.useState)([]);
  const [tabItems, setTabItems] = (0,react.useState)([]);
  const getExploreContent = (activeName, userId) => {
    switch (exploreMap.get(activeName)) {
      case EXPLORE_MUSIC:
        return /*#__PURE__*/react.createElement(music, {
          userId: userId
        });
      case EXPLORE_MOVIE:
        return /*#__PURE__*/react.createElement(movie, {
          userId: userId
        });
      case EXPLORE_GAME:
        return /*#__PURE__*/react.createElement(game, {
          userId: userId
        });
      case EXPLORE_NEW:
        return /*#__PURE__*/react.createElement(news, {
          userId: userId
        });
      case EXPLORE_SPORT:
        return /*#__PURE__*/react.createElement(sport, {
          userId: userId
        });
      case EXPLORE_STUDY:
        return /*#__PURE__*/react.createElement(study, {
          userId: userId
        });
      default:
        return /*#__PURE__*/react.createElement(music, {
          userId: userId
        });
    }
  };
  (0,react.useEffect)(() => {
    getExplore().then(data => {
      setExplore(data.data.list);
      let list = [];
      for (let item of data.data.list) {
        list.push({
          label: item.userName,
          key: item.userId,
          children: getExploreContent(item.userName, item.userId)
        });
      }
      setTabItems(list);
    });
  }, []);
  return /*#__PURE__*/react.createElement(ExploreWrapper, null, /*#__PURE__*/react.createElement(tabs/* default */.Z, {
    items: tabItems
  }));
};
/* harmony default export */ var explore = (/*#__PURE__*/(0,react.memo)(Explore));

/***/ })

}]);
//# sourceMappingURL=b00fc08340ddc5323b07.bundle.js.map