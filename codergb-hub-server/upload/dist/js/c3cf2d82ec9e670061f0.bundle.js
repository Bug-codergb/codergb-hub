"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[6996],{

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

/***/ 96996:
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
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 101 modules
var table = __webpack_require__(94746);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/views/profile/pages/playlist/style.tsx

const PlaylistWrapper = styled_components_browser_esm/* default */.ZP.div`
  .title-label {
    font-size: ${30 / 40}rem;
    font-weight: bolder;
    margin: 0 0 ${16 / 40}rem 0;
  }
`;
const PlaylistItemWrapper = styled_components_browser_esm/* default */.ZP.div`
  display: flex;
  align-items: flex-start;
  .left-container {
    .img-container {
      width: ${180 / 40}rem;
      height: ${96 / 40}rem;
      overflow: hidden;
      img {
        width: 100%;
        border-radius: 4px;
      }
    }
  }
  .right-container {
    margin: 0 0 0 ${24 / 40}rem;
    .name {
      font-size: ${20 / 40}rem;
      font-weight: bold;
      margin: 0 0 ${10 / 40}rem;
      color: #0d0d0d;
    }
    .desc {
      font-size: ${16 / 40}rem;
      color: #909090;
    }
  }
`;
// EXTERNAL MODULE: ./src/network/playlist/index.tsx
var network_playlist = __webpack_require__(33422);
// EXTERNAL MODULE: ./src/hook/useLoginMsg/index.tsx
var useLoginMsg = __webpack_require__(46139);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EyeOutlined.js + 1 modules
var EyeOutlined = __webpack_require__(95357);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EyeInvisibleOutlined.js + 1 modules
var EyeInvisibleOutlined = __webpack_require__(88633);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/constant/menu.tsx + 19 modules
var menu = __webpack_require__(48011);
;// CONCATENATED MODULE: ./src/views/profile/pages/playlist/config.tsx





const playlistRouter = (item, navigate) => {
  navigate(`${menu/* USER_PLAYLIST */.tQ}/${item.id}`, {
    replace: false
  });
};
const columns = navigate => {
  return [{
    title: '播放列表',
    dataIndex: 'name',
    render: (text, item) => {
      return /*#__PURE__*/react.createElement(PlaylistItemWrapper, null, /*#__PURE__*/react.createElement("div", {
        className: "left-container"
      }, /*#__PURE__*/react.createElement("div", {
        className: "img-container",
        onClick: e => playlistRouter(item, navigate)
      }, /*#__PURE__*/react.createElement("img", {
        src: item.picUrl,
        alt: item.name
      }))), /*#__PURE__*/react.createElement("div", {
        className: "right-container"
      }, /*#__PURE__*/react.createElement("div", {
        className: "right-msg"
      }, /*#__PURE__*/react.createElement("p", {
        className: "name"
      }, item.name), /*#__PURE__*/react.createElement("p", {
        className: "desc"
      }, item.description))));
    }
  }, {
    title: '公开范围',
    dataIndex: 'isPublic',
    render: (text, item) => {
      const {
        isPublic
      } = item;
      if (isPublic === 1) {
        return /*#__PURE__*/react.createElement(EyeOutlined/* default */.Z, null);
      } else {
        return /*#__PURE__*/react.createElement(EyeInvisibleOutlined/* default */.Z, null);
      }
    }
  }, {
    title: '上次更新时间',
    dataIndex: 'createTime',
    sorter: (a, b) => new Date(a.createTime).getTime() - new Date(b.createTime).getTime(),
    render: time => {
      return moment_default()(time).format('yyyy-MM-DD HH:mm');
    }
  }, {
    title: '视频数',
    dataIndex: 'video',
    render: video => {
      return video ? video : 0;
    }
  }];
};

;// CONCATENATED MODULE: ./src/views/profile/pages/playlist/index.tsx







const Playlist = () => {
  const [playlist, setPlaylist] = (0,react.useState)([]);
  const [count, setCount] = (0,react.useState)(0);
  const [selectionType, setSelectionType] = (0,react.useState)('checkbox');
  const login = (0,useLoginMsg/* useLoginMsg */.y)();
  const navigate = (0,dist/* useNavigate */.s0)();
  const getUserPlaylistReq = (userId, offset, limit) => {
    (0,network_playlist/* getUserPlaylist */.N3)(userId, offset, limit).then(data => {
      if (data.status) {
        setCount(data.data.count);
        setPlaylist(data.data.list);
      }
    });
  };
  (0,react.useEffect)(() => {
    getUserPlaylistReq(login.userMsg.userId, 0, 4);
  }, []);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log('selectedRows: ', selectedRows);
    }
  };
  const pageChangeHandle = e => {
    console.log(e);
    getUserPlaylistReq(login.userMsg.userId, (e - 1) * 4, 4);
  };
  return /*#__PURE__*/react.createElement(PlaylistWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "title-label"
  }, "\u6211\u7684\u64AD\u653E\u5217\u8868"), playlist && playlist.length !== 0 && /*#__PURE__*/react.createElement(table/* default */.Z, {
    rowSelection: {
      type: selectionType,
      ...rowSelection
    },
    rowKey: 'id',
    columns: columns(navigate),
    dataSource: playlist,
    pagination: {
      pageSize: 4,
      total: count,
      onChange: e => pageChangeHandle(e)
    }
  }));
};
/* harmony default export */ var playlist = (/*#__PURE__*/(0,react.memo)(Playlist));

/***/ })

}]);
//# sourceMappingURL=c3cf2d82ec9e670061f0.bundle.js.map