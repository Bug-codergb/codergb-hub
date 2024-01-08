"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[6635],{

/***/ 60331:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ tag; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(54549);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/colors.js
var colors = __webpack_require__(98787);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/wave.js + 1 modules
var wave = __webpack_require__(21790);
;// CONCATENATED MODULE: ./node_modules/antd/es/tag/CheckableTag.js



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var CheckableTag = function CheckableTag(_a) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      checked = _a.checked,
      onChange = _a.onChange,
      onClick = _a.onClick,
      restProps = __rest(_a, ["prefixCls", "className", "checked", "onChange", "onClick"]);

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls;

  var handleClick = function handleClick(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };

  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var cls = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-checkable"), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-checkable-checked"), checked), _classNames), className);
  return /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.Z)({}, restProps, {
    className: cls,
    onClick: handleClick
  }));
};

/* harmony default export */ var tag_CheckableTag = (CheckableTag);
;// CONCATENATED MODULE: ./node_modules/antd/es/tag/index.js




var tag_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










var PresetColorRegex = new RegExp("^(".concat(colors/* PresetColorTypes */.Y.join('|'), ")(-inverse)?$"));
var PresetStatusColorRegex = new RegExp("^(".concat(colors/* PresetStatusColorTypes */.E.join('|'), ")$"));

var InternalTag = function InternalTag(_a, ref) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      style = _a.style,
      children = _a.children,
      icon = _a.icon,
      color = _a.color,
      onClose = _a.onClose,
      closeIcon = _a.closeIcon,
      _a$closable = _a.closable,
      closable = _a$closable === void 0 ? false : _a$closable,
      props = tag_rest(_a, ["prefixCls", "className", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = react.useState(true),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1]; // Warning for deprecated usage


  if (false) {}

  react.useEffect(function () {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);

  var isPresetColor = function isPresetColor() {
    if (!color) {
      return false;
    }

    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  };

  var tagStyle = (0,esm_extends/* default */.Z)({
    backgroundColor: color && !isPresetColor() ? color : undefined
  }, style);

  var presetColor = isPresetColor();
  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var tagClassName = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(color), presetColor), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-has-color"), color && !presetColor), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-hidden"), !visible), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);

  var handleCloseClick = function handleCloseClick(e) {
    e.stopPropagation();
    onClose === null || onClose === void 0 ? void 0 : onClose(e);

    if (e.defaultPrevented) {
      return;
    }

    if (!('visible' in props)) {
      setVisible(false);
    }
  };

  var renderCloseIcon = function renderCloseIcon() {
    if (closable) {
      return closeIcon ? /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-close-icon"),
        onClick: handleCloseClick
      }, closeIcon) : /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
        className: "".concat(prefixCls, "-close-icon"),
        onClick: handleCloseClick
      });
    }

    return null;
  };

  var isNeedWave = 'onClick' in props || children && children.type === 'a';
  var tagProps = (0,omit/* default */.Z)(props, ['visible']);
  var iconNode = icon || null;
  var kids = iconNode ? /*#__PURE__*/react.createElement(react.Fragment, null, iconNode, /*#__PURE__*/react.createElement("span", null, children)) : children;
  var tagNode = /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.Z)({}, tagProps, {
    ref: ref,
    className: tagClassName,
    style: tagStyle
  }), kids, renderCloseIcon());
  return isNeedWave ? /*#__PURE__*/react.createElement(wave/* default */.Z, null, tagNode) : tagNode;
};

var Tag = /*#__PURE__*/react.forwardRef(InternalTag);

if (false) {}

Tag.CheckableTag = tag_CheckableTag;
/* harmony default export */ var tag = (Tag);

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

/***/ 96635:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ content; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/views/profile/pages/content/style.tsx

const ContentWrapper = styled_components_browser_esm/* default */.ZP.div`
  .title-label {
    font-size: ${30 / 40}rem;
    font-weight: bolder;
    margin: 0 0 ${16 / 40}rem 0;
  }
`;
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 20 modules
var tabs = __webpack_require__(60561);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 101 modules
var table = __webpack_require__(94746);
;// CONCATENATED MODULE: ./src/views/profile/pages/content/childCpn/video/style.tsx

const VideoPageWrapper = styled_components_browser_esm/* default */.ZP.div``;
const VideoListItemWrapper = styled_components_browser_esm/* default */.ZP.div`
  display: flex;
  align-items: flex-start;
  .left-container {
    .img-container {
      width: ${180 / 40}rem;
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
// EXTERNAL MODULE: ./src/network/video/index.tsx
var network_video = __webpack_require__(13032);
// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var tag = __webpack_require__(60331);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/views/profile/pages/content/childCpn/video/config.tsx




const videoRouter = (item, navigate) => {
  navigate(`/videoDetail`, {
    replace: false,
    state: {
      id: item.id
    }
  });
};
const columns = navigate => {
  return [{
    title: '视频',
    dataIndex: 'name',
    render: (text, item) => {
      return /*#__PURE__*/react.createElement(VideoListItemWrapper, null, /*#__PURE__*/react.createElement("div", {
        className: "left-container"
      }, /*#__PURE__*/react.createElement("div", {
        className: "img-container",
        onClick: () => videoRouter(item, navigate)
      }, /*#__PURE__*/react.createElement("img", {
        src: item.picUrl,
        alt: item.name
      }))), /*#__PURE__*/react.createElement("div", {
        className: "right-container"
      }, /*#__PURE__*/react.createElement("div", {
        className: "right-msg"
      }, /*#__PURE__*/react.createElement("p", {
        className: "name",
        onClick: () => videoRouter(item, navigate)
      }, item.name), /*#__PURE__*/react.createElement("p", {
        className: "desc"
      }, item.description))));
    }
  }, {
    title: '分类',
    dataIndex: 'category',
    render: cate => {
      return /*#__PURE__*/react.createElement(tag/* default */.Z, {
        color: 'green'
      }, cate.name);
    }
  }, {
    title: '标签',
    dataIndex: 'tag',
    render: (_, item) => {
      return item.tag && item.tag.length !== 0 && item.tag.map(record => {
        return /*#__PURE__*/react.createElement(tag/* default */.Z, {
          key: record.id,
          color: 'geekblue'
        }, record.name);
      });
    }
  }, {
    title: '日期',
    dataIndex: 'createTime',
    width: '140',
    sorter: (a, b) => new Date(a.createTime).getTime() - new Date(b.createTime).getTime(),
    render: time => {
      return moment_default()(time).format('yyyy-MM-DD HH:mm');
    }
  }];
};

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
;// CONCATENATED MODULE: ./src/views/profile/pages/content/childCpn/video/index.tsx







const VideoPage = () => {
  const [selectionType, setSelectionType] = (0,react.useState)('checkbox');
  const [video, setVideo] = (0,react.useState)([]);
  const [count, setCount] = (0,react.useState)(0);
  const navigate = (0,dist/* useNavigate */.s0)();
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  (0,react.useEffect)(() => {
    (0,network_video/* getUserVideo */.sf)(login.userMsg.userId, '', 0, 4).then(data => {
      if (data.status === 200) {
        setVideo(data.data.list);
        setCount(data.data.count);
      }
    });
  }, []);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log('selectedRows: ', selectedRows);
    }
  };
  const pageChangeHandle = e => {
    (0,network_video/* getUserVideo */.sf)(login.userMsg.userId, '', (e - 1) * 4, 4).then(data => {
      if (data.status === 200) {
        setVideo(data.data.list);
        setCount(data.data.count);
      }
    });
  };
  return /*#__PURE__*/react.createElement(VideoPageWrapper, null, video && video.length !== 0 && /*#__PURE__*/react.createElement(table/* default */.Z, {
    rowSelection: {
      type: selectionType,
      ...rowSelection
    },
    rowKey: 'id',
    columns: columns(navigate),
    dataSource: video,
    pagination: {
      pageSize: 4,
      total: count,
      onChange: e => pageChangeHandle(e)
    }
  }));
};
/* harmony default export */ var video = (/*#__PURE__*/(0,react.memo)(VideoPage));
;// CONCATENATED MODULE: ./src/views/profile/pages/content/childCpn/liveStream/style.tsx

const LiveStreamWrapper = styled_components_browser_esm/* default */.ZP.div``;
;// CONCATENATED MODULE: ./src/views/profile/pages/content/childCpn/liveStream/index.tsx


const LiveStream = () => {
  return /*#__PURE__*/react.createElement(LiveStreamWrapper, null, "\u76F4\u64AD");
};
/* harmony default export */ var liveStream = (/*#__PURE__*/(0,react.memo)(LiveStream));
;// CONCATENATED MODULE: ./src/views/profile/pages/content/index.tsx





const Content = () => {
  const onChange = () => {};
  return /*#__PURE__*/react.createElement(ContentWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "title-label"
  }, "\u9891\u9053\u5185\u5BB9"), /*#__PURE__*/react.createElement(tabs/* default */.Z, {
    defaultActiveKey: "1",
    onChange: onChange,
    items: [{
      label: `视频`,
      key: '1',
      children: /*#__PURE__*/react.createElement(video, null)
    }, {
      label: `直播`,
      key: '2',
      children: /*#__PURE__*/react.createElement(liveStream, null)
    }]
  }));
};
/* harmony default export */ var content = (/*#__PURE__*/(0,react.memo)(Content));

/***/ })

}]);
//# sourceMappingURL=fc27376ee5ec0ce931b2.bundle.js.map