"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[8889],{

/***/ 31808:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fk: function() { return /* binding */ detectFlexGapSupported; },
/* harmony export */   jD: function() { return /* binding */ canUseDocElement; }
/* harmony export */ });
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98924);


var canUseDocElement = function canUseDocElement() {
  return (0,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)() && window.document.documentElement;
};

var flexGapSupported;
var detectFlexGapSupported = function detectFlexGapSupported() {
  if (!canUseDocElement()) {
    return false;
  }

  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  } // create flex container with row-gap set


  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px'; // create two, elements inside it

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div')); // append to the DOM (needed to obtain scrollHeight)

  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap

  document.body.removeChild(flex);
  return flexGapSupported;
};

/***/ }),

/***/ 48889:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ modal; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(93433);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js + 1 modules
var CheckCircleOutlined = __webpack_require__(15873);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js + 1 modules
var CloseCircleOutlined = __webpack_require__(73218);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleOutlined.js + 1 modules
var ExclamationCircleOutlined = __webpack_require__(57119);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js + 1 modules
var InfoCircleOutlined = __webpack_require__(68628);
// EXTERNAL MODULE: ./node_modules/rc-util/es/React/render.js
var React_render = __webpack_require__(38135);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 4 modules
var config_provider = __webpack_require__(87769);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useState.js
var useState = __webpack_require__(30470);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/button/button.js + 2 modules
var button_button = __webpack_require__(73839);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/ActionButton.js







function isThenable(thing) {
  return !!(thing && !!thing.then);
}

var ActionButton = function ActionButton(props) {
  var clickedRef = react.useRef(false);
  var ref = react.useRef();

  var _useState = (0,useState/* default */.Z)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var close = props.close;

  var onInternalClose = function onInternalClose() {
    close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
  };

  react.useEffect(function () {
    var timeoutId;

    if (props.autoFocus) {
      var $this = ref.current;
      timeoutId = setTimeout(function () {
        return $this.focus();
      });
    }

    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  var handlePromiseOnOk = function handlePromiseOnOk(returnValueOfOnOk) {
    if (!isThenable(returnValueOfOnOk)) {
      return;
    }

    setLoading(true);
    returnValueOfOnOk.then(function () {
      setLoading(false, true);
      onInternalClose.apply(void 0, arguments);
      clickedRef.current = false;
    }, function (e) {
      // Emit error when catch promise reject
      // eslint-disable-next-line no-console
      console.error(e); // See: https://github.com/ant-design/ant-design/issues/6183

      setLoading(false, true);
      clickedRef.current = false;
    });
  };

  var onClick = function onClick(e) {
    var actionFn = props.actionFn;

    if (clickedRef.current) {
      return;
    }

    clickedRef.current = true;

    if (!actionFn) {
      onInternalClose();
      return;
    }

    var returnValueOfOnOk;

    if (props.emitEvent) {
      returnValueOfOnOk = actionFn(e);

      if (props.quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
        clickedRef.current = false;
        onInternalClose(e);
        return;
      }
    } else if (actionFn.length) {
      returnValueOfOnOk = actionFn(close); // https://github.com/ant-design/ant-design/issues/23358

      clickedRef.current = false;
    } else {
      returnValueOfOnOk = actionFn();

      if (!returnValueOfOnOk) {
        onInternalClose();
        return;
      }
    }

    handlePromiseOnOk(returnValueOfOnOk);
  };

  var type = props.type,
      children = props.children,
      prefixCls = props.prefixCls,
      buttonProps = props.buttonProps;
  return /*#__PURE__*/react.createElement(es_button/* default */.Z, (0,esm_extends/* default */.Z)({}, (0,button_button/* convertLegacyProps */.n)(type), {
    onClick: onClick,
    loading: loading,
    prefixCls: prefixCls
  }, buttonProps, {
    ref: ref
  }), children);
};

/* harmony default export */ var _util_ActionButton = (ActionButton);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(33603);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(54549);
// EXTERNAL MODULE: ./node_modules/rc-dialog/es/index.js + 12 modules
var es = __webpack_require__(31391);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var form_context = __webpack_require__(65223);
// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__(42051);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/styleChecker.js
var styleChecker = __webpack_require__(31808);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/locale.js
var locale = __webpack_require__(83008);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/Modal.js



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














var mousePosition; // ref: https://github.com/ant-design/ant-design/issues/15795

var getClickPosition = function getClickPosition(e) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }; // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开

  setTimeout(function () {
    mousePosition = null;
  }, 100);
}; // 只有点击事件支持从鼠标位置动画展开


if ((0,styleChecker/* canUseDocElement */.jD)()) {
  document.documentElement.addEventListener('click', getClickPosition, true);
}

var Modal = function Modal(props) {
  var _classNames;

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var handleCancel = function handleCancel(e) {
    var onCancel = props.onCancel;
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
  };

  var handleOk = function handleOk(e) {
    var onOk = props.onOk;
    onOk === null || onOk === void 0 ? void 0 : onOk(e);
  };

   false ? 0 : void 0;

  var customizePrefixCls = props.prefixCls,
      footer = props.footer,
      visible = props.visible,
      open = props.open,
      wrapClassName = props.wrapClassName,
      centered = props.centered,
      getContainer = props.getContainer,
      closeIcon = props.closeIcon,
      _props$focusTriggerAf = props.focusTriggerAfterClose,
      focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
      restProps = __rest(props, ["prefixCls", "footer", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]);

  var prefixCls = getPrefixCls('modal', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var defaultFooter = /*#__PURE__*/react.createElement(LocaleReceiver/* default */.Z, {
    componentName: "Modal",
    defaultLocale: (0,locale/* getConfirmLocale */.A)()
  }, function (contextLocale) {
    var okText = props.okText,
        okType = props.okType,
        cancelText = props.cancelText,
        confirmLoading = props.confirmLoading;
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(es_button/* default */.Z, (0,esm_extends/* default */.Z)({
      onClick: handleCancel
    }, props.cancelButtonProps), cancelText || contextLocale.cancelText), /*#__PURE__*/react.createElement(es_button/* default */.Z, (0,esm_extends/* default */.Z)({}, (0,button_button/* convertLegacyProps */.n)(okType), {
      loading: confirmLoading,
      onClick: handleOk
    }, props.okButtonProps), okText !== null && okText !== void 0 ? okText : contextLocale.okText));
  });
  var closeIconToRender = /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
    className: "".concat(prefixCls, "-close-icon")
  }));
  var wrapClassNameExtended = classnames_default()(wrapClassName, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-centered"), !!centered), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-wrap-rtl"), direction === 'rtl'), _classNames));
  return /*#__PURE__*/react.createElement(form_context/* NoFormStyle */.Ux, {
    status: true,
    override: true
  }, /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({}, restProps, {
    getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
    prefixCls: prefixCls,
    wrapClassName: wrapClassNameExtended,
    footer: footer === undefined ? defaultFooter : footer,
    visible: open || visible,
    mousePosition: mousePosition,
    onClose: handleCancel,
    closeIcon: closeIconToRender,
    focusTriggerAfterClose: focusTriggerAfterClose,
    transitionName: (0,motion/* getTransitionName */.mL)(rootPrefixCls, 'zoom', props.transitionName),
    maskTransitionName: (0,motion/* getTransitionName */.mL)(rootPrefixCls, 'fade', props.maskTransitionName)
  })));
};

Modal.defaultProps = {
  width: 520,
  confirmLoading: false,
  open: false,
  okType: 'primary'
};
/* harmony default export */ var modal_Modal = (Modal);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/ConfirmDialog.js









var ConfirmDialog = function ConfirmDialog(props) {
  var icon = props.icon,
      onCancel = props.onCancel,
      onOk = props.onOk,
      close = props.close,
      zIndex = props.zIndex,
      afterClose = props.afterClose,
      visible = props.visible,
      open = props.open,
      keyboard = props.keyboard,
      centered = props.centered,
      getContainer = props.getContainer,
      maskStyle = props.maskStyle,
      okText = props.okText,
      okButtonProps = props.okButtonProps,
      cancelText = props.cancelText,
      cancelButtonProps = props.cancelButtonProps,
      direction = props.direction,
      prefixCls = props.prefixCls,
      wrapClassName = props.wrapClassName,
      rootPrefixCls = props.rootPrefixCls,
      iconPrefixCls = props.iconPrefixCls,
      bodyStyle = props.bodyStyle,
      _props$closable = props.closable,
      closable = _props$closable === void 0 ? false : _props$closable,
      closeIcon = props.closeIcon,
      modalRender = props.modalRender,
      focusTriggerAfterClose = props.focusTriggerAfterClose;

  if (false) {} // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon


  var okType = props.okType || 'primary';
  var contentPrefixCls = "".concat(prefixCls, "-confirm"); // 默认为 true，保持向下兼容

  var okCancel = 'okCancel' in props ? props.okCancel : true;
  var width = props.width || 416;
  var style = props.style || {};
  var mask = props.mask === undefined ? true : props.mask; // 默认为 false，保持旧版默认行为

  var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  var classString = classnames_default()(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(props.type), (0,defineProperty/* default */.Z)({}, "".concat(contentPrefixCls, "-rtl"), direction === 'rtl'), props.className);
  var cancelButton = okCancel && /*#__PURE__*/react.createElement(_util_ActionButton, {
    actionFn: onCancel,
    close: close,
    autoFocus: autoFocusButton === 'cancel',
    buttonProps: cancelButtonProps,
    prefixCls: "".concat(rootPrefixCls, "-btn")
  }, cancelText);
  return /*#__PURE__*/react.createElement(config_provider/* default */.ZP, {
    prefixCls: rootPrefixCls,
    iconPrefixCls: iconPrefixCls,
    direction: direction
  }, /*#__PURE__*/react.createElement(modal_Modal, {
    prefixCls: prefixCls,
    className: classString,
    wrapClassName: classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(contentPrefixCls, "-centered"), !!props.centered), wrapClassName),
    onCancel: function onCancel() {
      return close === null || close === void 0 ? void 0 : close({
        triggerCancel: true
      });
    },
    open: open || visible,
    title: "",
    footer: "",
    transitionName: (0,motion/* getTransitionName */.mL)(rootPrefixCls, 'zoom', props.transitionName),
    maskTransitionName: (0,motion/* getTransitionName */.mL)(rootPrefixCls, 'fade', props.maskTransitionName),
    mask: mask,
    maskClosable: maskClosable,
    maskStyle: maskStyle,
    style: style,
    bodyStyle: bodyStyle,
    width: width,
    zIndex: zIndex,
    afterClose: afterClose,
    keyboard: keyboard,
    centered: centered,
    getContainer: getContainer,
    closable: closable,
    closeIcon: closeIcon,
    modalRender: modalRender,
    focusTriggerAfterClose: focusTriggerAfterClose
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(contentPrefixCls, "-body-wrapper")
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(contentPrefixCls, "-body")
  }, icon, props.title === undefined ? null : /*#__PURE__*/react.createElement("span", {
    className: "".concat(contentPrefixCls, "-title")
  }, props.title), /*#__PURE__*/react.createElement("div", {
    className: "".concat(contentPrefixCls, "-content")
  }, props.content)), /*#__PURE__*/react.createElement("div", {
    className: "".concat(contentPrefixCls, "-btns")
  }, cancelButton, /*#__PURE__*/react.createElement(_util_ActionButton, {
    type: okType,
    actionFn: onOk,
    close: close,
    autoFocus: autoFocusButton === 'ok',
    buttonProps: okButtonProps,
    prefixCls: "".concat(rootPrefixCls, "-btn")
  }, okText)))));
};

/* harmony default export */ var modal_ConfirmDialog = (ConfirmDialog);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/destroyFns.js
var destroyFns = [];
/* harmony default export */ var modal_destroyFns = (destroyFns);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/confirm.js



var confirm_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};












var defaultRootPrefixCls = '';

function getRootPrefixCls() {
  return defaultRootPrefixCls;
}

function confirm_confirm(config) {
  var container = document.createDocumentFragment(); // eslint-disable-next-line @typescript-eslint/no-use-before-define

  var currentConfig = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, config), {
    close: close,
    open: true
  });

  function destroy() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, [function () {}].concat((0,toConsumableArray/* default */.Z)(args.slice(1))));
    }

    for (var i = 0; i < modal_destroyFns.length; i++) {
      var fn = modal_destroyFns[i]; // eslint-disable-next-line @typescript-eslint/no-use-before-define

      if (fn === close) {
        modal_destroyFns.splice(i, 1);
        break;
      }
    }

    (0,React_render/* unmount */.v)(container);
  }

  function render(_a) {
    var okText = _a.okText,
        cancelText = _a.cancelText,
        customizePrefixCls = _a.prefixCls,
        props = confirm_rest(_a, ["okText", "cancelText", "prefixCls"]);
    /**
     * https://github.com/ant-design/ant-design/issues/23623
     *
     * Sync render blocks React event. Let's make this async.
     */


    setTimeout(function () {
      var runtimeLocale = (0,locale/* getConfirmLocale */.A)();

      var _globalConfig = (0,config_provider/* globalConfig */.w6)(),
          getPrefixCls = _globalConfig.getPrefixCls,
          getIconPrefixCls = _globalConfig.getIconPrefixCls; // because Modal.config  set rootPrefixCls, which is different from other components


      var rootPrefixCls = getPrefixCls(undefined, getRootPrefixCls());
      var prefixCls = customizePrefixCls || "".concat(rootPrefixCls, "-modal");
      var iconPrefixCls = getIconPrefixCls();
      (0,React_render/* render */.s)( /*#__PURE__*/react.createElement(modal_ConfirmDialog, (0,esm_extends/* default */.Z)({}, props, {
        prefixCls: prefixCls,
        rootPrefixCls: rootPrefixCls,
        iconPrefixCls: iconPrefixCls,
        okText: okText || (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText),
        cancelText: cancelText || runtimeLocale.cancelText
      })), container);
    });
  }

  function close() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    currentConfig = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, currentConfig), {
      open: false,
      afterClose: function afterClose() {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }

        destroy.apply(_this, args);
      }
    }); // Legacy support

    if (currentConfig.visible) {
      delete currentConfig.visible;
    }

    render(currentConfig);
  }

  function update(configUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, currentConfig), configUpdate);
    }

    render(currentConfig);
  }

  render(currentConfig);
  modal_destroyFns.push(close);
  return {
    destroy: close,
    update: update
  };
}
function withWarn(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react.createElement(ExclamationCircleOutlined/* default */.Z, null),
    okCancel: false
  }, props), {
    type: 'warning'
  });
}
function withInfo(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react.createElement(InfoCircleOutlined/* default */.Z, null),
    okCancel: false
  }, props), {
    type: 'info'
  });
}
function withSuccess(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react.createElement(CheckCircleOutlined/* default */.Z, null),
    okCancel: false
  }, props), {
    type: 'success'
  });
}
function withError(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react.createElement(CloseCircleOutlined/* default */.Z, null),
    okCancel: false
  }, props), {
    type: 'error'
  });
}
function withConfirm(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react.createElement(ExclamationCircleOutlined/* default */.Z, null),
    okCancel: true
  }, props), {
    type: 'confirm'
  });
}
function modalGlobalConfig(_ref) {
  var rootPrefixCls = _ref.rootPrefixCls;
   false ? 0 : void 0;
  defaultRootPrefixCls = rootPrefixCls;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/hooks/usePatchElement.js



function usePatchElement() {
  var _React$useState = react.useState([]),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      elements = _React$useState2[0],
      setElements = _React$useState2[1];

  var patchElement = react.useCallback(function (element) {
    // append a new element to elements (and create a new ref)
    setElements(function (originElements) {
      return [].concat((0,toConsumableArray/* default */.Z)(originElements), [element]);
    }); // return a function that removes the new element out of elements (and create a new ref)
    // it works a little like useEffect

    return function () {
      setElements(function (originElements) {
        return originElements.filter(function (ele) {
          return ele !== element;
        });
      });
    };
  }, []);
  return [elements, patchElement];
}
// EXTERNAL MODULE: ./node_modules/antd/es/locale/default.js + 4 modules
var locale_default = __webpack_require__(5767);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/useModal/HookModal.js









var HookModal = function HookModal(_ref, ref) {
  var afterClose = _ref.afterClose,
      config = _ref.config;

  var _React$useState = react.useState(true),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react.useState(config),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      innerConfig = _React$useState4[0],
      setInnerConfig = _React$useState4[1];

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      direction = _React$useContext.direction,
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('modal');
  var rootPrefixCls = getPrefixCls();

  var close = function close() {
    setOpen(false);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (innerConfig.onCancel && triggerCancel) {
      innerConfig.onCancel.apply(innerConfig, [function () {}].concat((0,toConsumableArray/* default */.Z)(args.slice(1))));
    }
  };

  react.useImperativeHandle(ref, function () {
    return {
      destroy: close,
      update: function update(newConfig) {
        setInnerConfig(function (originConfig) {
          return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, originConfig), newConfig);
        });
      }
    };
  });
  return /*#__PURE__*/react.createElement(LocaleReceiver/* default */.Z, {
    componentName: "Modal",
    defaultLocale: locale_default/* default */.Z.Modal
  }, function (contextLocale) {
    return /*#__PURE__*/react.createElement(modal_ConfirmDialog, (0,esm_extends/* default */.Z)({
      prefixCls: prefixCls,
      rootPrefixCls: rootPrefixCls
    }, innerConfig, {
      close: close,
      open: open,
      afterClose: afterClose,
      okText: innerConfig.okText || (innerConfig.okCancel ? contextLocale.okText : contextLocale.justOkText),
      direction: direction,
      cancelText: innerConfig.cancelText || contextLocale.cancelText
    }));
  });
};

/* harmony default export */ var useModal_HookModal = (/*#__PURE__*/react.forwardRef(HookModal));
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/useModal/index.js






var uuid = 0;
var ElementsHolder = /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(function (_props, ref) {
  var _usePatchElement = usePatchElement(),
      _usePatchElement2 = (0,slicedToArray/* default */.Z)(_usePatchElement, 2),
      elements = _usePatchElement2[0],
      patchElement = _usePatchElement2[1];

  react.useImperativeHandle(ref, function () {
    return {
      patchElement: patchElement
    };
  }, []); // eslint-disable-next-line react/jsx-no-useless-fragment

  return /*#__PURE__*/react.createElement(react.Fragment, null, elements);
}));
function useModal() {
  var holderRef = react.useRef(null); // ========================== Effect ==========================

  var _React$useState = react.useState([]),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      actionQueue = _React$useState2[0],
      setActionQueue = _React$useState2[1];

  react.useEffect(function () {
    if (actionQueue.length) {
      var cloneQueue = (0,toConsumableArray/* default */.Z)(actionQueue);

      cloneQueue.forEach(function (action) {
        action();
      });
      setActionQueue([]);
    }
  }, [actionQueue]); // =========================== Hook ===========================

  var getConfirmFunc = react.useCallback(function (withFunc) {
    return function hookConfirm(config) {
      var _a;

      uuid += 1;
      var modalRef = /*#__PURE__*/react.createRef();
      var closeFunc;
      var modal = /*#__PURE__*/react.createElement(useModal_HookModal, {
        key: "modal-".concat(uuid),
        config: withFunc(config),
        ref: modalRef,
        afterClose: function afterClose() {
          closeFunc();
        }
      });
      closeFunc = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.patchElement(modal);
      return {
        destroy: function destroy() {
          function destroyAction() {
            var _a;

            (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
          }

          if (modalRef.current) {
            destroyAction();
          } else {
            setActionQueue(function (prev) {
              return [].concat((0,toConsumableArray/* default */.Z)(prev), [destroyAction]);
            });
          }
        },
        update: function update(newConfig) {
          function updateAction() {
            var _a;

            (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.update(newConfig);
          }

          if (modalRef.current) {
            updateAction();
          } else {
            setActionQueue(function (prev) {
              return [].concat((0,toConsumableArray/* default */.Z)(prev), [updateAction]);
            });
          }
        }
      };
    };
  }, []);
  var fns = react.useMemo(function () {
    return {
      info: getConfirmFunc(withInfo),
      success: getConfirmFunc(withSuccess),
      error: getConfirmFunc(withError),
      warning: getConfirmFunc(withWarn),
      confirm: getConfirmFunc(withConfirm)
    };
  }, []); // eslint-disable-next-line react/jsx-key

  return [fns, /*#__PURE__*/react.createElement(ElementsHolder, {
    ref: holderRef
  })];
}
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/index.js





function modalWarn(props) {
  return confirm_confirm(withWarn(props));
}

var es_modal_Modal = modal_Modal;
es_modal_Modal.useModal = useModal;

es_modal_Modal.info = function infoFn(props) {
  return confirm_confirm(withInfo(props));
};

es_modal_Modal.success = function successFn(props) {
  return confirm_confirm(withSuccess(props));
};

es_modal_Modal.error = function errorFn(props) {
  return confirm_confirm(withError(props));
};

es_modal_Modal.warning = modalWarn;
es_modal_Modal.warn = modalWarn;

es_modal_Modal.confirm = function confirmFn(props) {
  return confirm_confirm(withConfirm(props));
};

es_modal_Modal.destroyAll = function destroyAllFn() {
  while (modal_destroyFns.length) {
    var close = modal_destroyFns.pop();

    if (close) {
      close();
    }
  }
};

es_modal_Modal.config = modalGlobalConfig;
/* harmony default export */ var modal = (es_modal_Modal);

/***/ }),

/***/ 31391:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ rc_dialog_es; }
});

// UNUSED EXPORTS: Panel

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(97326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(79340);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(98557);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Portal.js
var Portal = __webpack_require__(59015);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(98924);
// EXTERNAL MODULE: ./node_modules/rc-util/es/getScrollBarSize.js
var getScrollBarSize = __webpack_require__(74204);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/setStyle.js
/**
 * Easy to set element style, return previous style
 * IE browser compatible(IE browser doesn't merge overflow style, need to set it separately)
 * https://github.com/ant-design/ant-design/issues/19393
 *
 */
function setStyle(style) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!style) {
    return {};
  }
  var _options$element = options.element,
    element = _options$element === void 0 ? document.body : _options$element;
  var oldStyle = {};
  var styleKeys = Object.keys(style);

  // IE browser compatible
  styleKeys.forEach(function (key) {
    oldStyle[key] = element.style[key];
  });
  styleKeys.forEach(function (key) {
    element.style[key] = style[key];
  });
  return oldStyle;
}
/* harmony default export */ var es_setStyle = (setStyle);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/switchScrollingEffect.js


function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var cacheStyle = {};
/* harmony default export */ var switchScrollingEffect = (function (close) {
  if (!isBodyOverflowing() && !close) {
    return;
  }

  // https://github.com/ant-design/ant-design/issues/19729
  var scrollingEffectClassName = 'ant-scrolling-effect';
  var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g');
  var bodyClassName = document.body.className;
  if (close) {
    if (!scrollingEffectClassNameReg.test(bodyClassName)) return;
    es_setStyle(cacheStyle);
    cacheStyle = {};
    document.body.className = bodyClassName.replace(scrollingEffectClassNameReg, '').trim();
    return;
  }
  var scrollBarSize = (0,getScrollBarSize/* default */.Z)();
  if (scrollBarSize) {
    cacheStyle = es_setStyle({
      position: 'relative',
      width: "calc(100% - ".concat(scrollBarSize, "px)")
    });
    if (!scrollingEffectClassNameReg.test(bodyClassName)) {
      var addClassName = "".concat(bodyClassName, " ").concat(scrollingEffectClassName);
      document.body.className = addClassName.trim();
    }
  }
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(93433);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/scrollLocker.js






var uuid = 0;
var locks = [];
var scrollingEffectClassName = 'ant-scrolling-effect';
var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g');

// https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332
var scrollLocker_cacheStyle = new Map();
var ScrollLocker = /*#__PURE__*/(0,createClass/* default */.Z)(function ScrollLocker(_options) {
  var _this = this;
  (0,classCallCheck/* default */.Z)(this, ScrollLocker);
  (0,defineProperty/* default */.Z)(this, "lockTarget", void 0);
  (0,defineProperty/* default */.Z)(this, "options", void 0);
  (0,defineProperty/* default */.Z)(this, "getContainer", function () {
    var _this$options;
    return (_this$options = _this.options) === null || _this$options === void 0 ? void 0 : _this$options.container;
  });
  // if options change...
  (0,defineProperty/* default */.Z)(this, "reLock", function (options) {
    var findLock = locks.find(function (_ref) {
      var target = _ref.target;
      return target === _this.lockTarget;
    });
    if (findLock) {
      _this.unLock();
    }
    _this.options = options;
    if (findLock) {
      findLock.options = options;
      _this.lock();
    }
  });
  (0,defineProperty/* default */.Z)(this, "lock", function () {
    var _this$options3;
    // If lockTarget exist return
    if (locks.some(function (_ref2) {
      var target = _ref2.target;
      return target === _this.lockTarget;
    })) {
      return;
    }

    // If same container effect, return
    if (locks.some(function (_ref3) {
      var _this$options2;
      var options = _ref3.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_this$options2 = _this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.container);
    })) {
      locks = [].concat((0,toConsumableArray/* default */.Z)(locks), [{
        target: _this.lockTarget,
        options: _this.options
      }]);
      return;
    }
    var scrollBarSize = 0;
    var container = ((_this$options3 = _this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.container) || document.body;
    if (container === document.body && window.innerWidth - document.documentElement.clientWidth > 0 || container.scrollHeight > container.clientHeight) {
      if (getComputedStyle(container).overflow !== 'hidden') {
        scrollBarSize = (0,getScrollBarSize/* default */.Z)();
      }
    }
    var containerClassName = container.className;
    if (locks.filter(function (_ref4) {
      var _this$options4;
      var options = _ref4.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_this$options4 = _this.options) === null || _this$options4 === void 0 ? void 0 : _this$options4.container);
    }).length === 0) {
      scrollLocker_cacheStyle.set(container, es_setStyle({
        width: scrollBarSize !== 0 ? "calc(100% - ".concat(scrollBarSize, "px)") : undefined,
        overflow: 'hidden',
        overflowX: 'hidden',
        overflowY: 'hidden'
      }, {
        element: container
      }));
    }

    // https://github.com/ant-design/ant-design/issues/19729
    if (!scrollingEffectClassNameReg.test(containerClassName)) {
      var addClassName = "".concat(containerClassName, " ").concat(scrollingEffectClassName);
      container.className = addClassName.trim();
    }
    locks = [].concat((0,toConsumableArray/* default */.Z)(locks), [{
      target: _this.lockTarget,
      options: _this.options
    }]);
  });
  (0,defineProperty/* default */.Z)(this, "unLock", function () {
    var _this$options5;
    var findLock = locks.find(function (_ref5) {
      var target = _ref5.target;
      return target === _this.lockTarget;
    });
    locks = locks.filter(function (_ref6) {
      var target = _ref6.target;
      return target !== _this.lockTarget;
    });
    if (!findLock || locks.some(function (_ref7) {
      var _findLock$options;
      var options = _ref7.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_findLock$options = findLock.options) === null || _findLock$options === void 0 ? void 0 : _findLock$options.container);
    })) {
      return;
    }

    // Remove Effect
    var container = ((_this$options5 = _this.options) === null || _this$options5 === void 0 ? void 0 : _this$options5.container) || document.body;
    var containerClassName = container.className;
    if (!scrollingEffectClassNameReg.test(containerClassName)) return;
    es_setStyle(scrollLocker_cacheStyle.get(container), {
      element: container
    });
    scrollLocker_cacheStyle.delete(container);
    container.className = container.className.replace(scrollingEffectClassNameReg, '').trim();
  });
  // eslint-disable-next-line no-plusplus
  this.lockTarget = uuid++;
  this.options = _options;
});

;// CONCATENATED MODULE: ./node_modules/rc-util/es/PortalWrapper.js







/* eslint-disable no-underscore-dangle,react/require-default-props */







var openCount = 0;
var supportDom = (0,canUseDom/* default */.Z)();

/** @private Test usage only */
function getOpenCount() {
  return  false ? 0 : 0;
}

// https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332
var cacheOverflow = {};
var getParent = function getParent(getContainer) {
  if (!supportDom) {
    return null;
  }
  if (getContainer) {
    if (typeof getContainer === 'string') {
      return document.querySelectorAll(getContainer)[0];
    }
    if (typeof getContainer === 'function') {
      return getContainer();
    }
    if ((0,esm_typeof/* default */.Z)(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
      return getContainer;
    }
  }
  return document.body;
};
var PortalWrapper = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(PortalWrapper, _React$Component);
  var _super = (0,createSuper/* default */.Z)(PortalWrapper);
  function PortalWrapper(props) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, PortalWrapper);
    _this = _super.call(this, props);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "container", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "componentRef", /*#__PURE__*/react.createRef());
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "rafId", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "scrollLocker", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "renderComponent", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "updateScrollLocker", function (prevProps) {
      var _ref = prevProps || {},
        prevVisible = _ref.visible;
      var _this$props = _this.props,
        getContainer = _this$props.getContainer,
        visible = _this$props.visible;
      if (visible && visible !== prevVisible && supportDom && getParent(getContainer) !== _this.scrollLocker.getContainer()) {
        _this.scrollLocker.reLock({
          container: getParent(getContainer)
        });
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "updateOpenCount", function (prevProps) {
      var _ref2 = prevProps || {},
        prevVisible = _ref2.visible,
        prevGetContainer = _ref2.getContainer;
      var _this$props2 = _this.props,
        visible = _this$props2.visible,
        getContainer = _this$props2.getContainer;

      // Update count
      if (visible !== prevVisible && supportDom && getParent(getContainer) === document.body) {
        if (visible && !prevVisible) {
          openCount += 1;
        } else if (prevProps) {
          openCount -= 1;
        }
      }

      // Clean up container if needed
      var getContainerIsFunc = typeof getContainer === 'function' && typeof prevGetContainer === 'function';
      if (getContainerIsFunc ? getContainer.toString() !== prevGetContainer.toString() : getContainer !== prevGetContainer) {
        _this.removeCurrentContainer();
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "attachToParent", function () {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (force || _this.container && !_this.container.parentNode) {
        var parent = getParent(_this.props.getContainer);
        if (parent) {
          parent.appendChild(_this.container);
          return true;
        }
        return false;
      }
      return true;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getContainer", function () {
      if (!supportDom) {
        return null;
      }
      if (!_this.container) {
        _this.container = document.createElement('div');
        _this.attachToParent(true);
      }
      _this.setWrapperClassName();
      return _this.container;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "setWrapperClassName", function () {
      var wrapperClassName = _this.props.wrapperClassName;
      if (_this.container && wrapperClassName && wrapperClassName !== _this.container.className) {
        _this.container.className = wrapperClassName;
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "removeCurrentContainer", function () {
      var _this$container;
      // Portal will remove from `parentNode`.
      // Let's handle this again to avoid refactor issue.
      (_this$container = _this.container) === null || _this$container === void 0 || (_this$container = _this$container.parentNode) === null || _this$container === void 0 || _this$container.removeChild(_this.container);
    });
    /**
     * Enhance ./switchScrollingEffect
     * 1. Simulate document body scroll bar with
     * 2. Record body has overflow style and recover when all of PortalWrapper invisible
     * 3. Disable body scroll when PortalWrapper has open
     *
     * @memberof PortalWrapper
     */
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "switchScrollingEffect", function () {
      if (openCount === 1 && !Object.keys(cacheOverflow).length) {
        switchScrollingEffect();
        // Must be set after switchScrollingEffect
        cacheOverflow = es_setStyle({
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden'
        });
      } else if (!openCount) {
        es_setStyle(cacheOverflow);
        cacheOverflow = {};
        switchScrollingEffect(true);
      }
    });
    _this.scrollLocker = new ScrollLocker({
      container: getParent(props.getContainer)
    });
    return _this;
  }
  (0,createClass/* default */.Z)(PortalWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.updateOpenCount();
      if (!this.attachToParent()) {
        this.rafId = (0,raf/* default */.Z)(function () {
          _this2.forceUpdate();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.updateOpenCount(prevProps);
      this.updateScrollLocker(prevProps);
      this.setWrapperClassName();
      this.attachToParent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props3 = this.props,
        visible = _this$props3.visible,
        getContainer = _this$props3.getContainer;
      if (supportDom && getParent(getContainer) === document.body) {
        // 离开时不会 render， 导到离开时数值不变，改用 func 。。
        openCount = visible && openCount ? openCount - 1 : openCount;
      }
      this.removeCurrentContainer();
      raf/* default */.Z.cancel(this.rafId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        children = _this$props4.children,
        forceRender = _this$props4.forceRender,
        visible = _this$props4.visible;
      var portal = null;
      var childProps = {
        getOpenCount: function getOpenCount() {
          return openCount;
        },
        getContainer: this.getContainer,
        switchScrollingEffect: this.switchScrollingEffect,
        scrollLocker: this.scrollLocker
      };
      if (forceRender || visible || this.componentRef.current) {
        portal = /*#__PURE__*/react.createElement(Portal/* default */.Z, {
          getContainer: this.getContainer,
          ref: this.componentRef
        }, children(childProps));
      }
      return portal;
    }
  }]);
  return PortalWrapper;
}(react.Component);
/* harmony default export */ var es_PortalWrapper = (PortalWrapper);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(15105);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useId.js



function getUseId() {
  // We need fully clone React function here to avoid webpack warning React 17 do not export `useId`
  var fullClone = (0,objectSpread2/* default */.Z)({}, react_namespaceObject);
  return fullClone.useId;
}
var useId_uuid = 0;

/** @private Note only worked in develop env. Not work in production. */
function resetUuid() {
  if (false) {}
}
var useOriginId = getUseId();
/* harmony default export */ var useId = (useOriginId ?
// Use React `useId`
function useId(id) {
  var reactId = useOriginId();

  // Developer passed id is single source of truth
  if (id) {
    return id;
  }

  // Test env always return mock id
  if (false) {}
  return reactId;
} :
// Use compatible of `useId`
function useCompatId(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = react.useState('ssr-id'),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  react.useEffect(function () {
    var nextId = useId_uuid;
    useId_uuid += 1;
    setInnerId("rc_unique_".concat(nextId));
  }, []);

  // Developer passed id is single source of truth
  if (id) {
    return id;
  }

  // Test env always return mock id
  if (false) {}

  // Return react native id or inner id
  return innerId;
});
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/contains.js
var contains = __webpack_require__(94999);
// EXTERNAL MODULE: ./node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(64217);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var es = __webpack_require__(5461);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Mask.js





function Mask(props) {
  var prefixCls = props.prefixCls,
      style = props.style,
      visible = props.visible,
      maskProps = props.maskProps,
      motionName = props.motionName;
  return /*#__PURE__*/react.createElement(es/* default */.ZP, {
    key: "mask",
    visible: visible,
    motionName: motionName,
    leavedClassName: "".concat(prefixCls, "-mask-hidden")
  }, function (_ref) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), style),
      className: classnames_default()("".concat(prefixCls, "-mask"), motionClassName)
    }, maskProps));
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/util.js
// =============================== Motion ===============================
function getMotionName(prefixCls, transitionName, animationName) {
  var motionName = transitionName;

  if (!motionName && animationName) {
    motionName = "".concat(prefixCls, "-").concat(animationName);
  }

  return motionName;
} // =============================== Offset ===============================

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }

  return ret;
}

function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Content/MemoChildren.js

/* harmony default export */ var MemoChildren = (/*#__PURE__*/react.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (_, _ref2) {
  var shouldUpdate = _ref2.shouldUpdate;
  return !shouldUpdate;
}));
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Content/Panel.js





var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none'
};
var Panel = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      title = props.title,
      ariaId = props.ariaId,
      footer = props.footer,
      closable = props.closable,
      closeIcon = props.closeIcon,
      onClose = props.onClose,
      children = props.children,
      bodyStyle = props.bodyStyle,
      bodyProps = props.bodyProps,
      modalRender = props.modalRender,
      onMouseDown = props.onMouseDown,
      onMouseUp = props.onMouseUp,
      holderRef = props.holderRef,
      visible = props.visible,
      forceRender = props.forceRender,
      width = props.width,
      height = props.height; // ================================= Refs =================================

  var sentinelStartRef = (0,react.useRef)();
  var sentinelEndRef = (0,react.useRef)();
  react.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        var _sentinelStartRef$cur;

        (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 ? void 0 : _sentinelStartRef$cur.focus();
      },
      changeActive: function changeActive(next) {
        var _document = document,
            activeElement = _document.activeElement;

        if (next && activeElement === sentinelEndRef.current) {
          sentinelStartRef.current.focus();
        } else if (!next && activeElement === sentinelStartRef.current) {
          sentinelEndRef.current.focus();
        }
      }
    };
  }); // ================================ Style =================================

  var contentStyle = {};

  if (width !== undefined) {
    contentStyle.width = width;
  }

  if (height !== undefined) {
    contentStyle.height = height;
  } // ================================ Render ================================


  var footerNode;

  if (footer) {
    footerNode = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, footer);
  }

  var headerNode;

  if (title) {
    headerNode = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-header")
    }, /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-title"),
      id: ariaId
    }, title));
  }

  var closer;

  if (closable) {
    closer = /*#__PURE__*/react.createElement("button", {
      type: "button",
      onClick: onClose,
      "aria-label": "Close",
      className: "".concat(prefixCls, "-close")
    }, closeIcon || /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-close-x")
    }));
  }

  var content = /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-content")
  }, closer, headerNode, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: "".concat(prefixCls, "-body"),
    style: bodyStyle
  }, bodyProps), children), footerNode);
  return /*#__PURE__*/react.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": title ? ariaId : null,
    "aria-modal": "true",
    ref: holderRef,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), contentStyle),
    className: classnames_default()(prefixCls, className),
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp
  }, /*#__PURE__*/react.createElement("div", {
    tabIndex: 0,
    ref: sentinelStartRef,
    style: sentinelStyle,
    "aria-hidden": "true"
  }), /*#__PURE__*/react.createElement(MemoChildren, {
    shouldUpdate: visible || forceRender
  }, modalRender ? modalRender(content) : content), /*#__PURE__*/react.createElement("div", {
    tabIndex: 0,
    ref: sentinelEndRef,
    style: sentinelStyle,
    "aria-hidden": "true"
  }));
});

if (false) {}

/* harmony default export */ var Content_Panel = (Panel);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Content/index.js









var Content = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
      title = props.title,
      style = props.style,
      className = props.className,
      visible = props.visible,
      forceRender = props.forceRender,
      destroyOnClose = props.destroyOnClose,
      motionName = props.motionName,
      ariaId = props.ariaId,
      onVisibleChanged = props.onVisibleChanged,
      mousePosition = props.mousePosition;
  var dialogRef = (0,react.useRef)(); // ============================= Style ==============================

  var _React$useState = react.useState(),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      transformOrigin = _React$useState2[0],
      setTransformOrigin = _React$useState2[1];

  var contentStyle = {};

  if (transformOrigin) {
    contentStyle.transformOrigin = transformOrigin;
  }

  function onPrepare() {
    var elementOffset = offset(dialogRef.current);
    setTransformOrigin(mousePosition ? "".concat(mousePosition.x - elementOffset.left, "px ").concat(mousePosition.y - elementOffset.top, "px") : '');
  } // ============================= Render =============================


  return /*#__PURE__*/react.createElement(es/* default */.ZP, {
    visible: visible,
    onVisibleChanged: onVisibleChanged,
    onAppearPrepare: onPrepare,
    onEnterPrepare: onPrepare,
    forceRender: forceRender,
    motionName: motionName,
    removeOnLeave: destroyOnClose,
    ref: dialogRef
  }, function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    return /*#__PURE__*/react.createElement(Content_Panel, (0,esm_extends/* default */.Z)({}, props, {
      ref: ref,
      title: title,
      ariaId: ariaId,
      prefixCls: prefixCls,
      holderRef: motionRef,
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), style), contentStyle),
      className: classnames_default()(className, motionClassName)
    }));
  });
});
Content.displayName = 'Content';
/* harmony default export */ var Dialog_Content = (Content);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/index.js













function Dialog(props) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-dialog' : _props$prefixCls,
      zIndex = props.zIndex,
      _props$visible = props.visible,
      visible = _props$visible === void 0 ? false : _props$visible,
      _props$keyboard = props.keyboard,
      keyboard = _props$keyboard === void 0 ? true : _props$keyboard,
      _props$focusTriggerAf = props.focusTriggerAfterClose,
      focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
      scrollLocker = props.scrollLocker,
      wrapStyle = props.wrapStyle,
      wrapClassName = props.wrapClassName,
      wrapProps = props.wrapProps,
      onClose = props.onClose,
      afterClose = props.afterClose,
      transitionName = props.transitionName,
      animation = props.animation,
      _props$closable = props.closable,
      closable = _props$closable === void 0 ? true : _props$closable,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      maskTransitionName = props.maskTransitionName,
      maskAnimation = props.maskAnimation,
      _props$maskClosable = props.maskClosable,
      maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
      maskStyle = props.maskStyle,
      maskProps = props.maskProps,
      rootClassName = props.rootClassName;
  var lastOutSideActiveElementRef = (0,react.useRef)();
  var wrapperRef = (0,react.useRef)();
  var contentRef = (0,react.useRef)();

  var _React$useState = react.useState(visible),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      animatedVisible = _React$useState2[0],
      setAnimatedVisible = _React$useState2[1]; // ========================== Init ==========================


  var ariaId = useId(); // ========================= Events =========================

  function onDialogVisibleChanged(newVisible) {
    if (newVisible) {
      // Try to focus
      if (!(0,contains/* default */.Z)(wrapperRef.current, document.activeElement)) {
        var _contentRef$current;

        lastOutSideActiveElementRef.current = document.activeElement;
        (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.focus();
      }
    } else {
      // Clean up scroll bar & focus back
      setAnimatedVisible(false);

      if (mask && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
        try {
          lastOutSideActiveElementRef.current.focus({
            preventScroll: true
          });
        } catch (e) {// Do nothing
        }

        lastOutSideActiveElementRef.current = null;
      } // Trigger afterClose only when change visible from true to false


      if (animatedVisible) {
        afterClose === null || afterClose === void 0 ? void 0 : afterClose();
      }
    }
  }

  function onInternalClose(e) {
    onClose === null || onClose === void 0 ? void 0 : onClose(e);
  } // >>> Content


  var contentClickRef = (0,react.useRef)(false);
  var contentTimeoutRef = (0,react.useRef)(); // We need record content click incase content popup out of dialog

  var onContentMouseDown = function onContentMouseDown() {
    clearTimeout(contentTimeoutRef.current);
    contentClickRef.current = true;
  };

  var onContentMouseUp = function onContentMouseUp() {
    contentTimeoutRef.current = setTimeout(function () {
      contentClickRef.current = false;
    });
  }; // >>> Wrapper
  // Close only when element not on dialog


  var onWrapperClick = null;

  if (maskClosable) {
    onWrapperClick = function onWrapperClick(e) {
      if (contentClickRef.current) {
        contentClickRef.current = false;
      } else if (wrapperRef.current === e.target) {
        onInternalClose(e);
      }
    };
  }

  function onWrapperKeyDown(e) {
    if (keyboard && e.keyCode === KeyCode/* default */.Z.ESC) {
      e.stopPropagation();
      onInternalClose(e);
      return;
    } // keep focus inside dialog


    if (visible) {
      if (e.keyCode === KeyCode/* default */.Z.TAB) {
        contentRef.current.changeActive(!e.shiftKey);
      }
    }
  } // ========================= Effect =========================


  (0,react.useEffect)(function () {
    if (visible) {
      setAnimatedVisible(true);
    }

    return function () {};
  }, [visible]); // Remove direct should also check the scroll bar update

  (0,react.useEffect)(function () {
    return function () {
      clearTimeout(contentTimeoutRef.current);
    };
  }, []);
  (0,react.useEffect)(function () {
    if (animatedVisible) {
      scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.lock();
      return scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.unLock;
    }

    return function () {};
  }, [animatedVisible, scrollLocker]); // ========================= Render =========================

  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: classnames_default()("".concat(prefixCls, "-root"), rootClassName)
  }, (0,pickAttrs/* default */.Z)(props, {
    data: true
  })), /*#__PURE__*/react.createElement(Mask, {
    prefixCls: prefixCls,
    visible: mask && visible,
    motionName: getMotionName(prefixCls, maskTransitionName, maskAnimation),
    style: (0,objectSpread2/* default */.Z)({
      zIndex: zIndex
    }, maskStyle),
    maskProps: maskProps
  }), /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    tabIndex: -1,
    onKeyDown: onWrapperKeyDown,
    className: classnames_default()("".concat(prefixCls, "-wrap"), wrapClassName),
    ref: wrapperRef,
    onClick: onWrapperClick,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      zIndex: zIndex
    }, wrapStyle), {}, {
      display: !animatedVisible ? 'none' : null
    })
  }, wrapProps), /*#__PURE__*/react.createElement(Dialog_Content, (0,esm_extends/* default */.Z)({}, props, {
    onMouseDown: onContentMouseDown,
    onMouseUp: onContentMouseUp,
    ref: contentRef,
    closable: closable,
    ariaId: ariaId,
    prefixCls: prefixCls,
    visible: visible,
    onClose: onInternalClose,
    onVisibleChanged: onDialogVisibleChanged,
    motionName: getMotionName(prefixCls, transitionName, animation)
  }))));
}
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/DialogWrap.js




 // fix issue #10656

/*
 * getContainer remarks
 * Custom container should not be return, because in the Portal component, it will remove the
 * return container element here, if the custom container is the only child of it's component,
 * like issue #10656, It will has a conflict with removeChild method in react-dom.
 * So here should add a child (div element) to custom container.
 * */

var DialogWrap = function DialogWrap(props) {
  var visible = props.visible,
      getContainer = props.getContainer,
      forceRender = props.forceRender,
      _props$destroyOnClose = props.destroyOnClose,
      destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose,
      _afterClose = props.afterClose;

  var _React$useState = react.useState(visible),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      animatedVisible = _React$useState2[0],
      setAnimatedVisible = _React$useState2[1];

  react.useEffect(function () {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]); // 渲染在当前 dom 里；

  if (getContainer === false) {
    return /*#__PURE__*/react.createElement(Dialog, (0,esm_extends/* default */.Z)({}, props, {
      getOpenCount: function getOpenCount() {
        return 2;
      } // 不对 body 做任何操作。。

    }));
  } // Destroy on close will remove wrapped div


  if (!forceRender && destroyOnClose && !animatedVisible) {
    return null;
  }

  return /*#__PURE__*/react.createElement(es_PortalWrapper, {
    visible: visible,
    forceRender: forceRender,
    getContainer: getContainer
  }, function (childProps) {
    return /*#__PURE__*/react.createElement(Dialog, (0,esm_extends/* default */.Z)({}, props, {
      destroyOnClose: destroyOnClose,
      afterClose: function afterClose() {
        _afterClose === null || _afterClose === void 0 ? void 0 : _afterClose();
        setAnimatedVisible(false);
      }
    }, childProps));
  });
};

DialogWrap.displayName = 'Dialog';
/* harmony default export */ var es_DialogWrap = (DialogWrap);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/index.js



/* harmony default export */ var rc_dialog_es = (es_DialogWrap);

/***/ })

}]);
//# sourceMappingURL=095679618bf001039198.bundle.js.map