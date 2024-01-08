"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[6482],{

/***/ 92977:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ icons_MoreOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MoreOutlined.js
// This icon file is generated automatically.
var MoreOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "more", "theme": "outlined" };
/* harmony default export */ var asn_MoreOutlined = (MoreOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(30076);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MoreOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var MoreOutlined_MoreOutlined = function MoreOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_MoreOutlined
  }));
};
MoreOutlined_MoreOutlined.displayName = 'MoreOutlined';
/* harmony default export */ var icons_MoreOutlined = (/*#__PURE__*/react.forwardRef(MoreOutlined_MoreOutlined));

/***/ }),

/***/ 49101:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ icons_PlusOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js
// This icon file is generated automatically.
var PlusOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };
/* harmony default export */ var asn_PlusOutlined = (PlusOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(30076);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var PlusOutlined_PlusOutlined = function PlusOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_PlusOutlined
  }));
};
PlusOutlined_PlusOutlined.displayName = 'PlusOutlined';
/* harmony default export */ var icons_PlusOutlined = (/*#__PURE__*/react.forwardRef(PlusOutlined_PlusOutlined));

/***/ }),

/***/ 9676:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ es_checkbox; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-checkbox/es/index.js
var es = __webpack_require__(50132);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var config_provider_context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var context = __webpack_require__(65223);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(93433);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
;// CONCATENATED MODULE: ./node_modules/antd/es/checkbox/Group.js





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






var GroupContext = /*#__PURE__*/react.createContext(null);

var InternalCheckboxGroup = function InternalCheckboxGroup(_a, ref) {
  var defaultValue = _a.defaultValue,
      children = _a.children,
      _a$options = _a.options,
      options = _a$options === void 0 ? [] : _a$options,
      customizePrefixCls = _a.prefixCls,
      className = _a.className,
      style = _a.style,
      onChange = _a.onChange,
      restProps = __rest(_a, ["defaultValue", "children", "options", "prefixCls", "className", "style", "onChange"]);

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = react.useState(restProps.value || defaultValue || []),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = react.useState([]),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      registeredValues = _React$useState4[0],
      setRegisteredValues = _React$useState4[1];

  react.useEffect(function () {
    if ('value' in restProps) {
      setValue(restProps.value || []);
    }
  }, [restProps.value]);

  var getOptions = function getOptions() {
    return options.map(function (option) {
      if (typeof option === 'string' || typeof option === 'number') {
        return {
          label: option,
          value: option
        };
      }

      return option;
    });
  };

  var cancelValue = function cancelValue(val) {
    setRegisteredValues(function (prevValues) {
      return prevValues.filter(function (v) {
        return v !== val;
      });
    });
  };

  var registerValue = function registerValue(val) {
    setRegisteredValues(function (prevValues) {
      return [].concat((0,toConsumableArray/* default */.Z)(prevValues), [val]);
    });
  };

  var toggleOption = function toggleOption(option) {
    var optionIndex = value.indexOf(option.value);

    var newValue = (0,toConsumableArray/* default */.Z)(value);

    if (optionIndex === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(optionIndex, 1);
    }

    if (!('value' in restProps)) {
      setValue(newValue);
    }

    var opts = getOptions();
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue.filter(function (val) {
      return registeredValues.indexOf(val) !== -1;
    }).sort(function (a, b) {
      var indexA = opts.findIndex(function (opt) {
        return opt.value === a;
      });
      var indexB = opts.findIndex(function (opt) {
        return opt.value === b;
      });
      return indexA - indexB;
    }));
  };

  var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
  var groupPrefixCls = "".concat(prefixCls, "-group");
  var domProps = (0,omit/* default */.Z)(restProps, ['value', 'disabled']);

  if (options && options.length > 0) {
    children = getOptions().map(function (option) {
      return /*#__PURE__*/react.createElement(checkbox_Checkbox, {
        prefixCls: prefixCls,
        key: option.value.toString(),
        disabled: 'disabled' in option ? option.disabled : restProps.disabled,
        value: option.value,
        checked: value.indexOf(option.value) !== -1,
        onChange: option.onChange,
        className: "".concat(groupPrefixCls, "-item"),
        style: option.style
      }, option.label);
    });
  } // eslint-disable-next-line react/jsx-no-constructed-context-values


  var context = {
    toggleOption: toggleOption,
    value: value,
    disabled: restProps.disabled,
    name: restProps.name,
    // https://github.com/ant-design/ant-design/issues/16376
    registerValue: registerValue,
    cancelValue: cancelValue
  };
  var classString = classnames_default()(groupPrefixCls, (0,defineProperty/* default */.Z)({}, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), className);
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: classString,
    style: style
  }, domProps, {
    ref: ref
  }), /*#__PURE__*/react.createElement(GroupContext.Provider, {
    value: context
  }, children));
};

var CheckboxGroup = /*#__PURE__*/react.forwardRef(InternalCheckboxGroup);
/* harmony default export */ var Group = (/*#__PURE__*/react.memo(CheckboxGroup));
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(98866);
;// CONCATENATED MODULE: ./node_modules/antd/es/checkbox/Checkbox.js



var Checkbox_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











var InternalCheckbox = function InternalCheckbox(_a, ref) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      children = _a.children,
      _a$indeterminate = _a.indeterminate,
      indeterminate = _a$indeterminate === void 0 ? false : _a$indeterminate,
      style = _a.style,
      onMouseEnter = _a.onMouseEnter,
      onMouseLeave = _a.onMouseLeave,
      _a$skipGroup = _a.skipGroup,
      skipGroup = _a$skipGroup === void 0 ? false : _a$skipGroup,
      disabled = _a.disabled,
      restProps = Checkbox_rest(_a, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]);

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var checkboxGroup = react.useContext(GroupContext);

  var _useContext = (0,react.useContext)(context/* FormItemInputContext */.aM),
      isFormItemInput = _useContext.isFormItemInput;

  var contextDisabled = (0,react.useContext)(DisabledContext/* default */.Z);
  var mergedDisabled = disabled || (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.disabled) || contextDisabled;
  var prevValue = react.useRef(restProps.value);
  react.useEffect(function () {
    checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
     false ? 0 : void 0;
  }, []);
  react.useEffect(function () {
    if (skipGroup) {
      return;
    }

    if (restProps.value !== prevValue.current) {
      checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(prevValue.current);
      checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
      prevValue.current = restProps.value;
    }

    return function () {
      return checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(restProps.value);
    };
  }, [restProps.value]);
  var prefixCls = getPrefixCls('checkbox', customizePrefixCls);

  var checkboxProps = (0,esm_extends/* default */.Z)({}, restProps);

  if (checkboxGroup && !skipGroup) {
    checkboxProps.onChange = function () {
      if (restProps.onChange) {
        restProps.onChange.apply(restProps, arguments);
      }

      if (checkboxGroup.toggleOption) {
        checkboxGroup.toggleOption({
          label: children,
          value: restProps.value
        });
      }
    };

    checkboxProps.name = checkboxGroup.name;
    checkboxProps.checked = checkboxGroup.value.indexOf(restProps.value) !== -1;
  }

  var classString = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-wrapper"), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-wrapper-disabled"), mergedDisabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-wrapper-in-form-item"), isFormItemInput), _classNames), className);
  var checkboxClass = classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-indeterminate"), indeterminate));
  var ariaChecked = indeterminate ? 'mixed' : undefined;
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    react.createElement("label", {
      className: classString,
      style: style,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }, /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({
      "aria-checked": ariaChecked
    }, checkboxProps, {
      prefixCls: prefixCls,
      className: checkboxClass,
      disabled: mergedDisabled,
      ref: ref
    })), children !== undefined && /*#__PURE__*/react.createElement("span", null, children))
  );
};

var Checkbox = /*#__PURE__*/react.forwardRef(InternalCheckbox);

if (false) {}

/* harmony default export */ var checkbox_Checkbox = (Checkbox);
;// CONCATENATED MODULE: ./node_modules/antd/es/checkbox/index.js


var es_checkbox_Checkbox = checkbox_Checkbox;
es_checkbox_Checkbox.Group = Group;
es_checkbox_Checkbox.__ANT_CHECKBOX = true;
/* harmony default export */ var es_checkbox = (es_checkbox_Checkbox);

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


/***/ }),

/***/ 46482:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ views_history; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 8 modules
var modal = __webpack_require__(48889);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(76570);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/views/history/style.tsx

const HistoryWrapper = styled_components_browser_esm/* default */.ZP.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
`;
const LeftContentWrapper = styled_components_browser_esm/* default */.ZP.div`
  width: 65%;
  height: 86vh;
  overflow-y: scroll;
  .label-title {
    font-size: ${24 / 40}rem;
    margin: 0 0 ${20 / 40}rem 0;
  }
  .vio-list {
    & > li {
      width: ${850 / 40}rem;
      margin: 0 0 ${50 / 40}rem 0;
      .time {
        font-size: ${20 / 40}rem;
        margin: 0 0 ${16 / 40}rem 0;
      }
    }
  }
`;
const RightContentWrapper = styled_components_browser_esm/* default */.ZP.div`
  width: 34%;
  padding: 0 0 0 ${20 / 40}rem;
  .search-outer {
    border-bottom: ${props => props.isBolderBorder ? '2px solid #0f0f0f' : '1px solid #606060'};
    padding: 0 0 ${10 / 40}rem 0;
    display: flex;
    align-items: center;
    input {
      padding: 0 0 0 ${15 / 40}rem;
      width: ${300 / 40}rem;
    }
    svg {
      font-size: ${28 / 40}rem;
      cursor: pointer;
    }
  }
  .operate {
    margin: ${30 / 40}rem 0 0 0;
    & > li {
      padding: ${20 / 40}rem 0 ${20 / 40}rem ${20 / 40}rem;
      font-size: ${20 / 40}rem;
      cursor: pointer;
      &:hover {
        background-color: #e5e5e5;
      }
    }
  }
`;
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/network/history/index.tsx
var network_history = __webpack_require__(42723);
// EXTERNAL MODULE: ./src/components/videoItem/index.tsx + 1 modules
var videoItem = __webpack_require__(95566);
;// CONCATENATED MODULE: ./src/views/history/index.tsx









const History = () => {
  const [video, setVideo] = (0,react.useState)([]);
  const [count, setCount] = (0,react.useState)(0);
  const [isShowDelHisModal, setIsShowDelHisModal] = (0,react.useState)(false);
  const [isBolderBorder, setIsBolderBorder] = (0,react.useState)(false);
  const [keyword, setKeyword] = (0,react.useState)('');
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  const navigate = (0,dist/* useNavigate */.s0)();
  (0,react.useEffect)(() => {
    getAllUserHistory(login.userMsg.userId, 0, 10, '');
  }, [login.userMsg.userId]);
  const getAllUserHistory = async (userId, offset, limit, keyword) => {
    (0,network_history/* getUserHistory */.p5)(userId, offset, limit, keyword).then(data => {
      if (data.status === 200) {
        setVideo(data.data.list);
        setCount(data.data.count);
      }
    });
  };
  const handleDelHistOk = () => {
    (0,network_history/* deleteAllHistory */.Pf)().then(async data => {
      if (data.status === 200) {
        await getAllUserHistory(login.userMsg.userId, 0, 10, '');
        setIsShowDelHisModal(false);
      }
    });
  };
  const handleDelHisCancel = async () => {
    setIsShowDelHisModal(false);
  };
  const searchHistory = e => {
    setKeyword(e.currentTarget.value);
  };
  const confirmSearch = async () => {
    await getAllUserHistory(login.userMsg.userId, 0, 10, keyword);
  };
  const videoRouterHandle = item => {
    navigate('/videoDetail', {
      replace: true,
      state: {
        id: item.id
      }
    });
  };
  return /*#__PURE__*/react.createElement(HistoryWrapper, null, /*#__PURE__*/react.createElement(LeftContentWrapper, null, /*#__PURE__*/react.createElement("p", {
    className: "label-title"
  }, "\u89C2\u770B\u8BB0\u5F55"), /*#__PURE__*/react.createElement("ul", {
    className: "vio-list"
  }, video && video.length !== 0 && video.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id,
      onClick: e => {
        videoRouterHandle(item);
      }
    }, /*#__PURE__*/react.createElement("p", {
      className: "time"
    }, moment_default()().format('yyyy-MM-DD') === moment_default()(item.history).format('yyyy-MM-DD') ? moment_default()(item.history).fromNow() : moment_default()().format('yyyy-MM-DD')), /*#__PURE__*/react.createElement(videoItem/* default */.Z, {
      img: /*#__PURE__*/react.createElement("img", {
        src: item.picUrl
      }),
      isShowVideo: false,
      state: item.name,
      id: item.id,
      vioHeight: 152.5,
      user: item.user,
      createTime: item.createTime,
      dt: item.dt,
      playCount: item.playCount,
      itemWidth: 330,
      dtPos: {
        left: 38,
        top: 97
      },
      isShowMore: false,
      isFlex: true,
      isShowUser: false,
      scale: 0.55
    }));
  }))), /*#__PURE__*/react.createElement(RightContentWrapper, {
    isBolderBorder: isBolderBorder
  }, /*#__PURE__*/react.createElement("div", {
    className: "search-outer"
  }, /*#__PURE__*/react.createElement(SearchOutlined/* default */.Z, {
    onClick: async e => {
      await confirmSearch();
    }
  }), /*#__PURE__*/react.createElement("input", {
    type: 'input',
    placeholder: "\u641C\u7D22\u89C2\u770B\u8BB0\u5F55",
    onInput: e => {
      searchHistory(e);
    },
    onFocus: e => {
      setIsBolderBorder(true);
    },
    onBlur: e => {
      setIsBolderBorder(false);
    }
  })), /*#__PURE__*/react.createElement("ul", {
    className: "operate"
  }, /*#__PURE__*/react.createElement("li", {
    onClick: e => {
      setIsShowDelHisModal(true);
    }
  }, "\u6E05\u9664\u6240\u6709\u5386\u53F2\u8BB0\u5F55"), /*#__PURE__*/react.createElement("li", null, "\u6682\u505C\u89C2\u770B\u8BB0\u5F55"), /*#__PURE__*/react.createElement("li", null, "\u7BA1\u7406\u6240\u6709\u5386\u53F2\u8BB0\u5F55"))), /*#__PURE__*/react.createElement(modal/* default */.Z, {
    title: "\u8981\u6E05\u9664\u89C2\u770B\u8BB0\u5F55\u5417",
    open: isShowDelHisModal,
    onOk: handleDelHistOk,
    onCancel: handleDelHisCancel
  }, /*#__PURE__*/react.createElement("p", {
    style: {
      fontWeight: 'bolder'
    }
  }, login.userMsg.userName), /*#__PURE__*/react.createElement("p", null, "\u4F60\u7684codergb-hub\u89C2\u770B\u8BB0\u5F55\u5C06\u4ECE\u6240\u6709\u8BBE\u5907\u4E0A\u7684\u6240\u6709codergb-hub\u5E94\u7528\u4E2D\u6E05\u9664")));
};
/* harmony default export */ var views_history = (/*#__PURE__*/(0,react.memo)(History));

/***/ }),

/***/ 50132:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44925);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15671);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43144);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79340);
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98557);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93967);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);








// eslint-disable-next-line import/no-extraneous-dependencies



var Checkbox = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Checkbox, _Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(Checkbox);

  function Checkbox(props) {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(this, Checkbox);

    _this = _super.call(this, props);

    _this.handleChange = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange;

      if (disabled) {
        return;
      }

      if (!('checked' in _this.props)) {
        _this.setState({
          checked: e.target.checked
        });
      }

      if (onChange) {
        onChange({
          target: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, _this.props), {}, {
            checked: e.target.checked
          }),
          stopPropagation: function stopPropagation() {
            e.stopPropagation();
          },
          preventDefault: function preventDefault() {
            e.preventDefault();
          },
          nativeEvent: e.nativeEvent
        });
      }
    };

    _this.saveInput = function (node) {
      _this.input = node;
    };

    var checked = 'checked' in props ? props.checked : props.defaultChecked;
    _this.state = {
      checked: checked
    };
    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(Checkbox, [{
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          style = _this$props2.style,
          name = _this$props2.name,
          id = _this$props2.id,
          type = _this$props2.type,
          disabled = _this$props2.disabled,
          readOnly = _this$props2.readOnly,
          tabIndex = _this$props2.tabIndex,
          onClick = _this$props2.onClick,
          onFocus = _this$props2.onFocus,
          onBlur = _this$props2.onBlur,
          onKeyDown = _this$props2.onKeyDown,
          onKeyPress = _this$props2.onKeyPress,
          onKeyUp = _this$props2.onKeyUp,
          autoFocus = _this$props2.autoFocus,
          value = _this$props2.value,
          required = _this$props2.required,
          others = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(_this$props2, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]);

      var globalProps = Object.keys(others).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
          // eslint-disable-next-line no-param-reassign
          prev[key] = others[key];
        }

        return prev;
      }, {});
      var checked = this.state.checked;
      var classString = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-checked"), checked), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: classString,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)({
        name: name,
        id: id,
        type: type,
        required: required,
        readOnly: readOnly,
        disabled: disabled,
        tabIndex: tabIndex,
        className: "".concat(prefixCls, "-input"),
        checked: !!checked,
        onClick: onClick,
        onFocus: onFocus,
        onBlur: onBlur,
        onKeyUp: onKeyUp,
        onKeyDown: onKeyDown,
        onKeyPress: onKeyPress,
        onChange: this.handleChange,
        autoFocus: autoFocus,
        ref: this.saveInput,
        value: value
      }, globalProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "".concat(prefixCls, "-inner")
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if ('checked' in props) {
        return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, state), {}, {
          checked: props.checked
        });
      }

      return null;
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  className: '',
  style: {},
  type: 'checkbox',
  defaultChecked: false,
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {}
};
/* harmony default export */ __webpack_exports__.Z = (Checkbox);

/***/ })

}]);
//# sourceMappingURL=4ddd99a3af781b3fc686.bundle.js.map