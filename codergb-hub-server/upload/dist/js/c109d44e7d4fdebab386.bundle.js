"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[9132],{

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

/***/ 69132:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ message; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 101 modules
var table = __webpack_require__(94746);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/views/profile/pages/message/style.tsx

const MessageWrapper = styled_components_browser_esm/* default */.ZP.div``;
const NotifyWrapper = styled_components_browser_esm/* default */.ZP.div`
  width: ${400 / 40}rem;
  .user-name {
    cursor: pointer;
    color: #6080ae;
    margin: 0 2px;
  }
  .info {
    font-weight: bolder;
    margin: 0 2px;
    width: 100%;
    cursor: pointer;
  }
`;
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/network/index.ts + 1 modules
var network = __webpack_require__(16398);
;// CONCATENATED MODULE: ./src/network/notify/index.ts

// 获取所有播放列表
async function getAllNotify(id, offset, limit) {
  return await network/* default */.Z.get({
    url: '/notify/all/' + id,
    params: {
      offset,
      limit
    }
  });
}
// EXTERNAL MODULE: ./node_modules/antd/es/tag/index.js + 1 modules
var tag = __webpack_require__(60331);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/views/profile/pages/message/config.tsx




const videoRouter = (item, navigate) => {};
const columns = navigate => {
  return [{
    title: '内容',
    dataIndex: 'name',
    width: '100',
    render: (text, item) => {
      return /*#__PURE__*/react.createElement(NotifyWrapper, null, item.type === 'sub' && /*#__PURE__*/react.createElement("span", {
        className: "user-name"
      }, item.operation.userName, "\u5173\u6CE8\u4E86\u4F60"), item.type === 'upload' && /*#__PURE__*/react.createElement("span", null, "\u60A8\u5173\u6CE8\u7684", /*#__PURE__*/react.createElement("span", {
        className: "user-name"
      }, item.operation.userName), "\u53D1\u5E03\u4E86\u89C6\u9891", /*#__PURE__*/react.createElement("span", {
        className: "info"
      }, item.video?.name)), item.type === 'thumb-vId' && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("span", {
        className: "user-name"
      }, item.operation.userName), "\u70B9\u8D5E\u4E86\u60A8\u7684\u89C6\u9891", /*#__PURE__*/react.createElement("span", {
        className: "info"
      }, item.video?.name)), item.type === 'thumb-commentId' && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("span", {
        className: "user-name"
      }, item.operation.userName), "\u70B9\u8D5E\u4E86\u60A8\u7684\u8BC4\u8BBA", /*#__PURE__*/react.createElement("span", {
        className: "info text-nowrap-mul-line"
      }, item.comment?.content)));
    }
  }, {
    title: '是否已读',
    dataIndex: 'isRead',
    render: item => {
      return /*#__PURE__*/react.createElement(tag/* default */.Z, {
        color: 'green'
      }, item.isRead === 0 ? '已读' : '未读');
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

;// CONCATENATED MODULE: ./src/views/profile/pages/message/index.tsx







const Message = () => {
  const [selectionType, setSelectionType] = (0,react.useState)('checkbox');
  const [nofity, setNotify] = (0,react.useState)([]);
  const [count, setCount] = (0,react.useState)(0);
  const navigate = (0,dist/* useNavigate */.s0)();
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  (0,react.useEffect)(() => {
    getAllNotify(login.userMsg.userId, 0, 6).then(data => {
      if (data.status === 200) {
        setNotify(data.data.list);
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
    getAllNotify(login.userMsg.userId, (e - 1) * 6, 6).then(data => {
      if (data.status === 200) {
        setNotify(data.data.list);
        setCount(data.data.count);
      }
    });
  };
  return /*#__PURE__*/react.createElement(MessageWrapper, null, nofity && nofity.length !== 0 && /*#__PURE__*/react.createElement(table/* default */.Z, {
    rowSelection: {
      type: selectionType,
      ...rowSelection
    },
    rowKey: 'id',
    columns: columns(navigate),
    dataSource: nofity,
    pagination: {
      pageSize: 6,
      total: count,
      onChange: e => {
        pageChangeHandle(e);
      }
    }
  }));
};
/* harmony default export */ var message = (/*#__PURE__*/(0,react.memo)(Message));

/***/ })

}]);
//# sourceMappingURL=c109d44e7d4fdebab386.bundle.js.map