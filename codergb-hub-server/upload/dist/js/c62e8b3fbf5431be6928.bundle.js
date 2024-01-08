"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[2146],{

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

/***/ 34078:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hi: function() { return /* binding */ replyComment; },
/* harmony export */   WF: function() { return /* binding */ getAllReply; },
/* harmony export */   Z4: function() { return /* binding */ getUserComment; },
/* harmony export */   dR: function() { return /* binding */ getAllComment; },
/* harmony export */   uo: function() { return /* binding */ publishComment; }
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

// 获取所有评论
async function getAllComment(id, offset, limit, alias) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: '/comment/all/' + id,
    params: {
      offset,
      limit,
      alias
    }
  });
}
// 获取所有回复
async function getAllReply(id, offset, limit) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: '/comment/reply/all/' + id,
    params: {
      offset,
      limit
    }
  });
}
// 发布评论
async function publishComment(id, alias, content) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/comment',
    data: {
      id,
      alias,
      content
    }
  });
}
// 回复评论
async function replyComment(id, content) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/comment/reply/' + id,
    data: {
      content
    }
  });
}
// 获取所有评论
async function getUserComment(userId, offset, limit) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: `/comment/user/${userId}`,
    params: {
      offset,
      limit
    }
  });
}

/***/ }),

/***/ 42146:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ comment; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 101 modules
var table = __webpack_require__(94746);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/views/profile/pages/comment/style.tsx

const CommentWrapper = styled_components_browser_esm/* default */.ZP.div``;
const CommentItemWrapper = styled_components_browser_esm/* default */.ZP.div`
  .comment-container {
    width: ${400 / 40}rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .avatar-container {
    img {
      width: ${70 / 40}rem;
      height: ${70 / 40}rem;
      border-radius: 50%;
      margin: 0 10px 0 0;
    }
    .user-name {
      font-size: ${18 / 40}rem;
      color: #616161;
    }
  }
  .comment-from {
    .content {
      width: ${400 / 40}rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/network/comment/index.tsx
var network_comment = __webpack_require__(34078);
// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var tag = __webpack_require__(60331);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/views/profile/pages/comment/config.tsx




const columns = [{
  title: '内容',
  dataIndex: 'content',
  render: (text, item) => {
    return /*#__PURE__*/react.createElement(CommentItemWrapper, null, /*#__PURE__*/react.createElement("div", {
      className: "comment-container",
      title: text
    }, text));
  }
}, {
  title: '创建人',
  dataIndex: 'user.userName',
  render: (_, item) => {
    return /*#__PURE__*/react.createElement(CommentItemWrapper, null, /*#__PURE__*/react.createElement("div", {
      className: "avatar-container"
    }, /*#__PURE__*/react.createElement("img", {
      src: item.user.avatarUrl
    }), /*#__PURE__*/react.createElement("span", {
      className: "user-name"
    }, item.user.userName)));
  }
}, {
  title: '评论时间',
  dataIndex: 'createTime',
  render: (_, item) => {
    return /*#__PURE__*/react.createElement(CommentItemWrapper, null, /*#__PURE__*/react.createElement("span", null, moment_default()(item.createTime).format('yyyy-MM-DD HH:mm')));
  }
}, {
  title: '评论来自',
  dataIndex: 'createTime',
  width: 200,
  render: (_, item) => {
    return /*#__PURE__*/react.createElement(CommentItemWrapper, null, /*#__PURE__*/react.createElement("div", {
      className: "comment-from"
    }, /*#__PURE__*/react.createElement(tag/* default */.Z, {
      key: item.id,
      color: 'geekblue'
    }, item.video ? '视频' : item.moment ? '动态' : item.reply && typeof item.reply === 'object' ? '评论' : ''), /*#__PURE__*/react.createElement("div", {
      key: item.id,
      className: 'content'
    }, item.video ? item.video.name : item.moment ? item.moment.title : item.reply && typeof item.reply === 'object' ? item.reply.content : '')));
  }
}];

;// CONCATENATED MODULE: ./src/views/profile/pages/comment/index.tsx






const Comment = () => {
  const [selectionType, setSelectionType] = (0,react.useState)('checkbox');
  const [comment, setComment] = (0,react.useState)([]);
  const [count, setCount] = (0,react.useState)(0);
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  (0,react.useEffect)(() => {
    (0,network_comment/* getUserComment */.Z4)(login.userMsg.userId, 0, 4).then(data => {
      if (data.status === 200) {
        setComment(data.data.list);
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
    (0,network_comment/* getUserComment */.Z4)(login.userMsg.userId, (e - 1) * 4, 4).then(data => {
      if (data.status === 200) {
        setComment(data.data.list);
        setCount(data.data.count);
      }
    });
  };
  return /*#__PURE__*/react.createElement(CommentWrapper, null, comment && comment.length !== 0 && /*#__PURE__*/react.createElement(table/* default */.Z, {
    rowSelection: {
      type: selectionType,
      ...rowSelection
    },
    rowKey: 'id',
    columns: columns,
    dataSource: comment,
    pagination: {
      pageSize: 4,
      total: count,
      onChange: e => pageChangeHandle(e)
    }
  }));
};
/* harmony default export */ var comment = (/*#__PURE__*/(0,react.memo)(Comment));

/***/ })

}]);
//# sourceMappingURL=c62e8b3fbf5431be6928.bundle.js.map