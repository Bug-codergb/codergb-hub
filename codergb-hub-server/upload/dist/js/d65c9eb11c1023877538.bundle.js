"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[1853],{

/***/ 98787:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: function() { return /* binding */ PresetStatusColorTypes; },
/* harmony export */   Y: function() { return /* binding */ PresetColorTypes; }
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93355);

var PresetStatusColorTypes = (0,_type__WEBPACK_IMPORTED_MODULE_0__/* .tuple */ .b)('success', 'processing', 'error', 'default', 'warning'); // eslint-disable-next-line import/prefer-default-export

var PresetColorTypes = (0,_type__WEBPACK_IMPORTED_MODULE_0__/* .tuple */ .b)('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime');

/***/ }),

/***/ 24308:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c4: function() { return /* binding */ responsiveArray; }
/* harmony export */ });
/* unused harmony export responsiveMap */
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87462);


var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
var responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};
var subscribers = new Map();
var subUid = -1;
var screens = {};
var responsiveObserve = {
  matchHandlers: {},
  dispatch: function dispatch(pointMap) {
    screens = pointMap;
    subscribers.forEach(function (func) {
      return func(screens);
    });
    return subscribers.size >= 1;
  },
  subscribe: function subscribe(func) {
    if (!subscribers.size) this.register();
    subUid += 1;
    subscribers.set(subUid, func);
    func(screens);
    return subUid;
  },
  unsubscribe: function unsubscribe(token) {
    subscribers["delete"](token);
    if (!subscribers.size) this.unregister();
  },
  unregister: function unregister() {
    var _this = this;

    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];
      var handler = _this.matchHandlers[matchMediaQuery];
      handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
    });
    subscribers.clear();
  },
  register: function register() {
    var _this2 = this;

    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];

      var listener = function listener(_ref) {
        var matches = _ref.matches;

        _this2.dispatch((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({}, screens), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, screen, matches)));
      };

      var mql = window.matchMedia(matchMediaQuery);
      mql.addListener(listener);
      _this2.matchHandlers[matchMediaQuery] = {
        mql: mql,
        listener: listener
      };
      listener(mql);
    });
  }
};
/* harmony default export */ __webpack_exports__.ZP = (responsiveObserve);

/***/ }),

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

/***/ 45777:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ tooltip; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(44925);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rc-trigger/es/index.js + 15 modules
var es = __webpack_require__(66619);
// EXTERNAL MODULE: ./node_modules/rc-tooltip/es/placements.js
var placements = __webpack_require__(43159);
;// CONCATENATED MODULE: ./node_modules/rc-tooltip/es/Popup.js


function Popup(props) {
  var showArrow = props.showArrow,
      arrowContent = props.arrowContent,
      children = props.children,
      prefixCls = props.prefixCls,
      id = props.id,
      overlayInnerStyle = props.overlayInnerStyle,
      className = props.className,
      style = props.style;
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-content"), className),
    style: style
  }, showArrow !== false && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-arrow"),
    key: "arrow"
  }, arrowContent), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-inner"),
    id: id,
    role: "tooltip",
    style: overlayInnerStyle
  }, typeof children === 'function' ? children() : children));
}
;// CONCATENATED MODULE: ./node_modules/rc-tooltip/es/Tooltip.js










var Tooltip = function Tooltip(props, ref) {
  var overlayClassName = props.overlayClassName,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
      _props$mouseEnterDela = props.mouseEnterDelay,
      mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      overlayStyle = props.overlayStyle,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-tooltip' : _props$prefixCls,
      children = props.children,
      onVisibleChange = props.onVisibleChange,
      afterVisibleChange = props.afterVisibleChange,
      transitionName = props.transitionName,
      animation = props.animation,
      motion = props.motion,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'right' : _props$placement,
      _props$align = props.align,
      align = _props$align === void 0 ? {} : _props$align,
      _props$destroyTooltip = props.destroyTooltipOnHide,
      destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip,
      defaultVisible = props.defaultVisible,
      getTooltipContainer = props.getTooltipContainer,
      overlayInnerStyle = props.overlayInnerStyle,
      arrowContent = props.arrowContent,
      overlay = props.overlay,
      id = props.id,
      showArrow = props.showArrow,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"]);

  var domRef = (0,react.useRef)(null);
  (0,react.useImperativeHandle)(ref, function () {
    return domRef.current;
  });

  var extraProps = (0,objectSpread2/* default */.Z)({}, restProps);

  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  var getPopupElement = function getPopupElement() {
    return /*#__PURE__*/react.createElement(Popup, {
      showArrow: showArrow,
      arrowContent: arrowContent,
      key: "content",
      prefixCls: prefixCls,
      id: id,
      overlayInnerStyle: overlayInnerStyle
    }, overlay);
  };

  var destroyTooltip = false;
  var autoDestroy = false;

  if (typeof destroyTooltipOnHide === 'boolean') {
    destroyTooltip = destroyTooltipOnHide;
  } else if (destroyTooltipOnHide && (0,esm_typeof/* default */.Z)(destroyTooltipOnHide) === 'object') {
    var keepParent = destroyTooltipOnHide.keepParent;
    destroyTooltip = keepParent === true;
    autoDestroy = keepParent === false;
  }

  return /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({
    popupClassName: overlayClassName,
    prefixCls: prefixCls,
    popup: getPopupElement,
    action: trigger,
    builtinPlacements: placements/* placements */.C,
    popupPlacement: placement,
    ref: domRef,
    popupAlign: align,
    getPopupContainer: getTooltipContainer,
    onPopupVisibleChange: onVisibleChange,
    afterPopupVisibleChange: afterVisibleChange,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupMotion: motion,
    defaultPopupVisible: defaultVisible,
    destroyPopupOnHide: destroyTooltip,
    autoDestroy: autoDestroy,
    mouseLeaveDelay: mouseLeaveDelay,
    popupStyle: overlayStyle,
    mouseEnterDelay: mouseEnterDelay
  }, extraProps), children);
};

/* harmony default export */ var es_Tooltip = (/*#__PURE__*/(0,react.forwardRef)(Tooltip));
;// CONCATENATED MODULE: ./node_modules/rc-tooltip/es/index.js



/* harmony default export */ var rc_tooltip_es = (es_Tooltip);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(21770);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/colors.js
var colors = __webpack_require__(98787);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(33603);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/placements.js
var _util_placements = __webpack_require__(80636);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
;// CONCATENATED MODULE: ./node_modules/antd/es/tooltip/index.js




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












var splitObject = function splitObject(obj, keys) {
  var picked = {};

  var omitted = (0,esm_extends/* default */.Z)({}, obj);

  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked: picked,
    omitted: omitted
  };
};

var PresetColorRegex = new RegExp("^(".concat(colors/* PresetColorTypes */.Y.join('|'), ")(-inverse)?$")); // Fix Tooltip won't hide at disabled button
// mouse events don't trigger at disabled button in Chrome
// https://github.com/react-component/tooltip/issues/18

function getDisabledCompatibleChildren(element, prefixCls) {
  var elementType = element.type;

  if ((elementType.__ANT_BUTTON === true || element.type === 'button') && element.props.disabled || elementType.__ANT_SWITCH === true && (element.props.disabled || element.props.loading) || elementType.__ANT_RADIO === true && element.props.disabled) {
    // Pick some layout related style properties up to span
    // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
    var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
        picked = _splitObject.picked,
        omitted = _splitObject.omitted;

    var spanStyle = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
      display: 'inline-block'
    }, picked), {
      cursor: 'not-allowed',
      width: element.props.block ? '100%' : null
    });

    var buttonStyle = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, omitted), {
      pointerEvents: 'none'
    });

    var child = (0,reactNode/* cloneElement */.Tm)(element, {
      style: buttonStyle,
      className: null
    });
    return /*#__PURE__*/react.createElement("span", {
      style: spanStyle,
      className: classnames_default()(element.props.className, "".concat(prefixCls, "-disabled-compatible-wrapper"))
    }, child);
  }

  return element;
}

var tooltip_Tooltip = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames2;

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction; // Warning for deprecated usage


  if (false) {}

  var _useMergedState = (0,useMergedState/* default */.Z)(false, {
    value: props.open !== undefined ? props.open : props.visible,
    defaultValue: props.defaultOpen !== undefined ? props.defaultOpen : props.defaultVisible
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      open = _useMergedState2[0],
      setOpen = _useMergedState2[1];

  var isNoTitle = function isNoTitle() {
    var title = props.title,
        overlay = props.overlay;
    return !title && !overlay && title !== 0; // overlay for old version compatibility
  };

  var onOpenChange = function onOpenChange(vis) {
    var _a, _b;

    setOpen(isNoTitle() ? false : vis);

    if (!isNoTitle()) {
      (_a = props.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(props, vis);
      (_b = props.onVisibleChange) === null || _b === void 0 ? void 0 : _b.call(props, vis);
    }
  };

  var getTooltipPlacements = function getTooltipPlacements() {
    var builtinPlacements = props.builtinPlacements,
        arrowPointAtCenter = props.arrowPointAtCenter,
        autoAdjustOverflow = props.autoAdjustOverflow;
    return builtinPlacements || (0,_util_placements/* default */.Z)({
      arrowPointAtCenter: arrowPointAtCenter,
      autoAdjustOverflow: autoAdjustOverflow
    });
  }; // 动态设置动画点


  var onPopupAlign = function onPopupAlign(domNode, align) {
    var placements = getTooltipPlacements(); // 当前返回的位置

    var placement = Object.keys(placements).find(function (key) {
      return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
    });

    if (!placement) {
      return;
    } // 根据当前坐标设置动画点


    var rect = domNode.getBoundingClientRect();
    var transformOrigin = {
      top: '50%',
      left: '50%'
    };

    if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
      transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
    } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
      transformOrigin.top = "".concat(-align.offset[1], "px");
    }

    if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
      transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
    } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
      transformOrigin.left = "".concat(-align.offset[0], "px");
    }

    domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
  };

  var getOverlay = function getOverlay() {
    var title = props.title,
        overlay = props.overlay;

    if (title === 0) {
      return title;
    }

    return overlay || title || '';
  };

  var getPopupContainer = props.getPopupContainer,
      otherProps = __rest(props, ["getPopupContainer"]);

  var customizePrefixCls = props.prefixCls,
      openClassName = props.openClassName,
      getTooltipContainer = props.getTooltipContainer,
      overlayClassName = props.overlayClassName,
      color = props.color,
      overlayInnerStyle = props.overlayInnerStyle,
      children = props.children;
  var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var tempOpen = open; // Hide tooltip when there is no title

  if (!('open' in props) && !('visible' in props) && isNoTitle()) {
    tempOpen = false;
  }

  var child = getDisabledCompatibleChildren((0,reactNode/* isValidElement */.l$)(children) && !(0,reactNode/* isFragment */.M2)(children) ? children : /*#__PURE__*/react.createElement("span", null, children), prefixCls);
  var childProps = child.props;
  var childCls = !childProps.className || typeof childProps.className === 'string' ? classnames_default()(childProps.className, (0,defineProperty/* default */.Z)({}, openClassName || "".concat(prefixCls, "-open"), true)) : childProps.className;
  var customOverlayClassName = classnames_default()(overlayClassName, (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-").concat(color), color && PresetColorRegex.test(color)), _classNames2));
  var formattedOverlayInnerStyle = overlayInnerStyle;
  var arrowContentStyle;

  if (color && !PresetColorRegex.test(color)) {
    formattedOverlayInnerStyle = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, overlayInnerStyle), {
      background: color
    }); // @ts-ignore

    arrowContentStyle = {
      '--antd-arrow-background-color': color
    };
  }

  return /*#__PURE__*/react.createElement(rc_tooltip_es, (0,esm_extends/* default */.Z)({}, otherProps, {
    prefixCls: prefixCls,
    overlayClassName: customOverlayClassName,
    getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
    ref: ref,
    builtinPlacements: getTooltipPlacements(),
    overlay: getOverlay(),
    visible: tempOpen,
    onVisibleChange: onOpenChange,
    onPopupAlign: onPopupAlign,
    overlayInnerStyle: formattedOverlayInnerStyle,
    arrowContent: /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-arrow-content"),
      style: arrowContentStyle
    }),
    motion: {
      motionName: (0,motion/* getTransitionName */.mL)(rootPrefixCls, 'zoom-big-fast', props.transitionName),
      motionDeadline: 1000
    }
  }), tempOpen ? (0,reactNode/* cloneElement */.Tm)(child, {
    className: childCls
  }) : child);
});

if (false) {}

tooltip_Tooltip.defaultProps = {
  placement: 'top',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
};
/* harmony default export */ var tooltip = (tooltip_Tooltip);

/***/ }),

/***/ 17378:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ login; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 22 modules
var es_form = __webpack_require__(42856);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 14 modules
var input = __webpack_require__(50817);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/assets/img/login.svg
var login_namespaceObject = __webpack_require__.p + "images/751f37e69d1f1bc57a2f.svg";
;// CONCATENATED MODULE: ./src/views/login/style.tsx


const LoginWrappers = styled_components_browser_esm/* default */.ZP.div`
  background-color: #060d20;
  position: relative;
  height: 100%;
  .login-bgc {
    display: flex;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    flex-direction: column;
    background-image: url(${login_namespaceObject});
    background-position: center center;
    overflow: hidden;
    .signup-space {
      width: 100%;
    }
    .signup-stars {
      width: 100%;
    }
  }

  .signup-space,
  .signup-stars {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 100vh;
    height: 100vw;
  }
  .signup-stars:nth-child(1) {
    background-position: 10% 90%;
    animation-delay: 0s;
  }
  .signup-stars:nth-child(2) {
    background-position: 20% 50%;
    background-size: 270px 500px;
    animation-delay: 0.3s;
  }
  .signup-stars:nth-child(3) {
    background-position: 40% -80%;
    animation-delay: 1.2s;
  }
  .signup-stars:nth-child(4) {
    background-position: -20% -30%;
    transform: rotate(60deg);
    animation-delay: 2.5s;
  }
  .signup-stars:nth-child(5) {
    background-image: radial-gradient(2px 2px at 10px 100px, #eee, rgba(0, 0, 0, 0)),
      radial-gradient(2px 2px at 20px 10px, #fff, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 150px 40px, #ddd, rgba(0, 0, 0, 0));
    background-position: 80% 30%;
    animation-delay: 4s;
  }
  .signup-stars:nth-child(6) {
    background-position: 50% 20%;
    animation-delay: 6s;
  }
  .signup-stars {
    background-image: radial-gradient(2px 2px at 50px 200px, #eee, rgba(0, 0, 0, 0)),
      radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #ddd, rgba(0, 0, 0, 0));
    background-repeat: repeat;
    background-size: 250px 250px;
    opacity: 0;
    animation: zoom 10s infinite;
  }
  @keyframes zoom {
    0% {
      opacity: 0;
      transform: rotate(5deg);
    }
    85% {
      opacity: 1;
    }
    100% {
      opacity: calc() 0.2;
      transform: scale(2.2);
    }
  }
  .form-container {
    position: absolute;
    top: 0;
    left: 0;
  }
  .title {
    text-align: center;
  }
  .login-inner {
    padding: ${80 / 40}rem ${30 / 40}rem ${40 / 40}rem ${30 / 40}rem;
    border-radius: 8px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    width: ${600 / 40}rem;
    background-color: #0e162b;
    border: 1px solid #212636;
    .ant-form-item {
      .ant-form-item-required {
        color: #5eccc7;
      }
    }
  }
  @keyframes hostTitle {
    from {
      letter-spacing: -20px;
    }
    to {
      letter-spacing: 20px;
    }
  }
  .codergb-hub-title {
    display: flex;
    justify-content: center;
    filter: contrast(130px);
    .label {
      font-size: ${60 / 40}rem;
      letter-spacing: 15px;
      animation: hostTitle 3s infinite;
    }
  }
`;
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/views/login/store/actionCreators.ts + 1 modules
var actionCreators = __webpack_require__(95085);
;// CONCATENATED MODULE: ./src/views/login/index.tsx






const Login = () => {
  const navigate = (0,dist/* useNavigate */.s0)();
  const dispatch = (0,es/* useDispatch */.I0)();
  const onFinish = (0,react.useCallback)(values => {
    const {
      username,
      password
    } = values;
    dispatch((0,actionCreators/* loginAction */.y)(username, password, navigate));
  }, []);
  const onFinishFailed = (0,react.useCallback)(errorInfo => {
    console.log('Failed:', errorInfo);
  }, []);
  return /*#__PURE__*/react.createElement(LoginWrappers, null, /*#__PURE__*/react.createElement("div", {
    className: "login-bgc"
  }, /*#__PURE__*/react.createElement("div", {
    className: "signup-space"
  }, /*#__PURE__*/react.createElement("div", {
    className: "signup-stars"
  }), /*#__PURE__*/react.createElement("div", {
    className: "signup-stars"
  }), /*#__PURE__*/react.createElement("div", {
    className: "signup-stars"
  }), /*#__PURE__*/react.createElement("div", {
    className: "signup-stars"
  }), /*#__PURE__*/react.createElement("div", {
    className: "signup-stars"
  }), /*#__PURE__*/react.createElement("div", {
    className: "signup-stars"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "login-inner"
  }, /*#__PURE__*/react.createElement(es_form/* default */.Z, {
    name: "basic",
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 16
    },
    initialValues: {
      remember: true
    },
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    autoComplete: "off"
  }, /*#__PURE__*/react.createElement(es_form/* default */.Z.Item, {
    label: "\u7528\u6237\u540D",
    name: "username",
    rules: [{
      required: true,
      message: '请输入您的用户名'
    }]
  }, /*#__PURE__*/react.createElement(input["default"], null)), /*#__PURE__*/react.createElement(es_form/* default */.Z.Item, {
    label: "\u5BC6\u7801",
    name: "password",
    rules: [{
      required: true,
      message: '请输入您的密码'
    }]
  }, /*#__PURE__*/react.createElement(input["default"].Password, null)), /*#__PURE__*/react.createElement(es_form/* default */.Z.Item, {
    wrapperCol: {
      offset: 7,
      span: 16
    }
  }, /*#__PURE__*/react.createElement(es_button/* default */.Z, null, "\u6CE8\u518C"), /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    type: "primary",
    htmlType: "submit"
  }, "\u767B\u5F55")))));
};
/* harmony default export */ var login = (/*#__PURE__*/(0,react.memo)(Login));

/***/ })

}]);
//# sourceMappingURL=d65c9eb11c1023877538.bundle.js.map