"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[2856],{

/***/ 42856:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ es_form; }
});

// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var context = __webpack_require__(65223);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(93433);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var es = __webpack_require__(5461);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var config_provider_context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(33603);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/hooks/useDebounce.js


function useDebounce(value) {
  var _React$useState = react.useState(value),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      cacheValue = _React$useState2[0],
      setCacheValue = _React$useState2[1];

  react.useEffect(function () {
    var timeout = setTimeout(function () {
      setCacheValue(value);
    }, value.length ? 0 : 10);
    return function () {
      clearTimeout(timeout);
    };
  }, [value]);
  return cacheValue;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/form/ErrorList.js










var EMPTY_LIST = [];

function toErrorEntity(error, errorStatus, prefix) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return {
    key: typeof error === 'string' ? error : "".concat(prefix, "-").concat(index),
    error: error,
    errorStatus: errorStatus
  };
}

function ErrorList(_ref) {
  var help = _ref.help,
      helpStatus = _ref.helpStatus,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? EMPTY_LIST : _ref$errors,
      _ref$warnings = _ref.warnings,
      warnings = _ref$warnings === void 0 ? EMPTY_LIST : _ref$warnings,
      rootClassName = _ref.className,
      fieldId = _ref.fieldId,
      onVisibleChanged = _ref.onVisibleChanged;

  var _React$useContext = react.useContext(context/* FormItemPrefixContext */.Rk),
      prefixCls = _React$useContext.prefixCls;

  var _React$useContext2 = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext2.getPrefixCls;

  var baseClassName = "".concat(prefixCls, "-item-explain");
  var rootPrefixCls = getPrefixCls(); // We have to debounce here again since somewhere use ErrorList directly still need no shaking
  // ref: https://github.com/ant-design/ant-design/issues/36336

  var debounceErrors = useDebounce(errors);
  var debounceWarnings = useDebounce(warnings);
  var fullKeyList = react.useMemo(function () {
    if (help !== undefined && help !== null) {
      return [toErrorEntity(help, helpStatus, 'help')];
    }

    return [].concat((0,toConsumableArray/* default */.Z)(debounceErrors.map(function (error, index) {
      return toErrorEntity(error, 'error', 'error', index);
    })), (0,toConsumableArray/* default */.Z)(debounceWarnings.map(function (warning, index) {
      return toErrorEntity(warning, 'warning', 'warning', index);
    })));
  }, [help, helpStatus, debounceErrors, debounceWarnings]);
  var helpProps = {};

  if (fieldId) {
    helpProps.id = "".concat(fieldId, "_help");
  }

  return /*#__PURE__*/react.createElement(es/* default */.ZP, {
    motionDeadline: motion/* default */.ZP.motionDeadline,
    motionName: "".concat(rootPrefixCls, "-show-help"),
    visible: !!fullKeyList.length,
    onVisibleChanged: onVisibleChanged
  }, function (holderProps) {
    var holderClassName = holderProps.className,
        holderStyle = holderProps.style;
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, helpProps, {
      className: classnames_default()(baseClassName, holderClassName, rootClassName),
      style: holderStyle,
      role: "alert"
    }), /*#__PURE__*/react.createElement(es/* CSSMotionList */.V4, (0,esm_extends/* default */.Z)({
      keys: fullKeyList
    }, motion/* default */.ZP, {
      motionName: "".concat(rootPrefixCls, "-show-help-item"),
      component: false
    }), function (itemProps) {
      var key = itemProps.key,
          error = itemProps.error,
          errorStatus = itemProps.errorStatus,
          itemClassName = itemProps.className,
          itemStyle = itemProps.style;
      return /*#__PURE__*/react.createElement("div", {
        key: key,
        className: classnames_default()(itemClassName, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-").concat(errorStatus), errorStatus)),
        style: itemStyle
      }, error);
    }));
  });
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/rc-field-form/es/index.js + 16 modules
var rc_field_form_es = __webpack_require__(48526);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(98866);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(97647);
;// CONCATENATED MODULE: ./node_modules/compute-scroll-into-view/dist/index.mjs
function t(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return e(r.overflowY,n)||e(r.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}var i=function(e,i){var o=window,l=i.scrollMode,d=i.block,f=i.inline,h=i.boundary,u=i.skipOverflowHiddenElements,s="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var a,c,g=document.scrollingElement||document.documentElement,p=[],m=e;t(m)&&s(m);){if((m=null==(c=(a=m).parentElement)?a.getRootNode().host||null:c)===g){p.push(m);break}null!=m&&m===document.body&&n(m)&&!n(document.documentElement)||null!=m&&n(m,u)&&p.push(m)}for(var w=o.visualViewport?o.visualViewport.width:innerWidth,v=o.visualViewport?o.visualViewport.height:innerHeight,W=window.scrollX||pageXOffset,H=window.scrollY||pageYOffset,b=e.getBoundingClientRect(),y=b.height,E=b.width,M=b.top,V=b.right,x=b.bottom,I=b.left,C="start"===d||"nearest"===d?M:"end"===d?x:M+y/2,R="center"===f?I+E/2:"end"===f?V:I,T=[],k=0;k<p.length;k++){var B=p[k],D=B.getBoundingClientRect(),O=D.height,X=D.width,Y=D.top,L=D.right,S=D.bottom,j=D.left;if("if-needed"===l&&M>=0&&I>=0&&x<=v&&V<=w&&M>=Y&&x<=S&&I>=j&&V<=L)return T;var N=getComputedStyle(B),q=parseInt(N.borderLeftWidth,10),z=parseInt(N.borderTopWidth,10),A=parseInt(N.borderRightWidth,10),F=parseInt(N.borderBottomWidth,10),G=0,J=0,K="offsetWidth"in B?B.offsetWidth-B.clientWidth-q-A:0,P="offsetHeight"in B?B.offsetHeight-B.clientHeight-z-F:0,Q="offsetWidth"in B?0===B.offsetWidth?0:X/B.offsetWidth:0,U="offsetHeight"in B?0===B.offsetHeight?0:O/B.offsetHeight:0;if(g===B)G="start"===d?C:"end"===d?C-v:"nearest"===d?r(H,H+v,v,z,F,H+C,H+C+y,y):C-v/2,J="start"===f?R:"center"===f?R-w/2:"end"===f?R-w:r(W,W+w,w,q,A,W+R,W+R+E,E),G=Math.max(0,G+H),J=Math.max(0,J+W);else{G="start"===d?C-Y-z:"end"===d?C-S+F+P:"nearest"===d?r(Y,S,O,z,F+P,C,C+y,y):C-(Y+O/2)+P/2,J="start"===f?R-j-q:"center"===f?R-(j+X/2)+K/2:"end"===f?R-L+A+K:r(j,L,X,q,A+K,R,R+E,E);var Z=B.scrollLeft,$=B.scrollTop;C+=$-(G=Math.max(0,Math.min($+G/U,B.scrollHeight-O/U+P))),R+=Z-(J=Math.max(0,Math.min(Z+J/Q,B.scrollWidth-X/Q+K)))}T.push({el:B,top:G,left:J})}return T};
//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/scroll-into-view-if-needed/es/index.js

function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}
function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = 'auto';
  }
  var canSmoothScroll = ('scrollBehavior' in document.body.style);
  actions.forEach(function (_ref) {
    var el = _ref.el,
      top = _ref.top,
      left = _ref.left;
    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top,
        left: left,
        behavior: behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}
function getOptions(options) {
  if (options === false) {
    return {
      block: 'end',
      inline: 'nearest'
    };
  }
  if (isOptionsObject(options)) {
    return options;
  }
  return {
    block: 'start',
    inline: 'nearest'
  };
}
function scrollIntoView(target, options) {
  var isTargetAttached = target.isConnected || target.ownerDocument.documentElement.contains(target);
  if (isOptionsObject(options) && typeof options.behavior === 'function') {
    return options.behavior(isTargetAttached ? i(target, options) : []);
  }
  if (!isTargetAttached) {
    return;
  }
  var computeOptions = getOptions(options);
  return defaultBehavior(i(target, computeOptions), computeOptions.behavior);
}
/* harmony default export */ var scroll_into_view_if_needed_es = (scrollIntoView);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/util.js
// form item name black list.  in form ,you can use form.id get the form item element.
// use object hasOwnProperty will get better performance if black list is longer.
var formItemNameBlackList = ['parentNode']; // default form item id prefix.

var defaultItemNamePrefixCls = 'form_item';
function toArray(candidate) {
  if (candidate === undefined || candidate === false) return [];
  return Array.isArray(candidate) ? candidate : [candidate];
}
function getFieldId(namePath, formName) {
  if (!namePath.length) return undefined;
  var mergedId = namePath.join('_');

  if (formName) {
    return "".concat(formName, "_").concat(mergedId);
  }

  var isIllegalName = formItemNameBlackList.indexOf(mergedId) >= 0;
  return isIllegalName ? "".concat(defaultItemNamePrefixCls, "_").concat(mergedId) : mergedId;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/form/hooks/useForm.js







function toNamePathStr(name) {
  var namePath = toArray(name);
  return namePath.join('_');
}

function useForm(form) {
  var _useRcForm = (0,rc_field_form_es/* useForm */.cI)(),
      _useRcForm2 = (0,slicedToArray/* default */.Z)(_useRcForm, 1),
      rcForm = _useRcForm2[0];

  var itemsRef = react.useRef({});
  var wrapForm = react.useMemo(function () {
    return form !== null && form !== void 0 ? form : (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, rcForm), {
      __INTERNAL__: {
        itemRef: function itemRef(name) {
          return function (node) {
            var namePathStr = toNamePathStr(name);

            if (node) {
              itemsRef.current[namePathStr] = node;
            } else {
              delete itemsRef.current[namePathStr];
            }
          };
        }
      },
      scrollToField: function scrollToField(name) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var namePath = toArray(name);
        var fieldId = getFieldId(namePath, wrapForm.__INTERNAL__.name);
        var node = fieldId ? document.getElementById(fieldId) : null;

        if (node) {
          scroll_into_view_if_needed_es(node, (0,esm_extends/* default */.Z)({
            scrollMode: 'if-needed',
            block: 'nearest'
          }, options));
        }
      },
      getFieldInstance: function getFieldInstance(name) {
        var namePathStr = toNamePathStr(name);
        return itemsRef.current[namePathStr];
      }
    });
  }, [form, rcForm]);
  return [wrapForm];
}
;// CONCATENATED MODULE: ./node_modules/antd/es/form/Form.js





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











var InternalForm = function InternalForm(props, ref) {
  var _classNames;

  var contextSize = react.useContext(SizeContext/* default */.Z);
  var contextDisabled = react.useContext(DisabledContext/* default */.Z);

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      contextForm = _React$useContext.form;

  var customizePrefixCls = props.prefixCls,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$size = props.size,
      size = _props$size === void 0 ? contextSize : _props$size,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? contextDisabled : _props$disabled,
      form = props.form,
      colon = props.colon,
      labelAlign = props.labelAlign,
      labelWrap = props.labelWrap,
      labelCol = props.labelCol,
      wrapperCol = props.wrapperCol,
      hideRequiredMark = props.hideRequiredMark,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? 'horizontal' : _props$layout,
      scrollToFirstError = props.scrollToFirstError,
      requiredMark = props.requiredMark,
      onFinishFailed = props.onFinishFailed,
      name = props.name,
      restFormProps = __rest(props, ["prefixCls", "className", "size", "disabled", "form", "colon", "labelAlign", "labelWrap", "labelCol", "wrapperCol", "hideRequiredMark", "layout", "scrollToFirstError", "requiredMark", "onFinishFailed", "name"]);

  var mergedRequiredMark = (0,react.useMemo)(function () {
    if (requiredMark !== undefined) {
      return requiredMark;
    }

    if (contextForm && contextForm.requiredMark !== undefined) {
      return contextForm.requiredMark;
    }

    if (hideRequiredMark) {
      return false;
    }

    return true;
  }, [hideRequiredMark, requiredMark, contextForm]);
  var mergedColon = colon !== null && colon !== void 0 ? colon : contextForm === null || contextForm === void 0 ? void 0 : contextForm.colon;
  var prefixCls = getPrefixCls('form', customizePrefixCls);
  var formClassName = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(layout), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-hide-required-mark"), mergedRequiredMark === false), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(size), size), _classNames), className);

  var _useForm = useForm(form),
      _useForm2 = (0,slicedToArray/* default */.Z)(_useForm, 1),
      wrapForm = _useForm2[0];

  var __INTERNAL__ = wrapForm.__INTERNAL__;
  __INTERNAL__.name = name;
  var formContextValue = (0,react.useMemo)(function () {
    return {
      name: name,
      labelAlign: labelAlign,
      labelCol: labelCol,
      labelWrap: labelWrap,
      wrapperCol: wrapperCol,
      vertical: layout === 'vertical',
      colon: mergedColon,
      requiredMark: mergedRequiredMark,
      itemRef: __INTERNAL__.itemRef,
      form: wrapForm
    };
  }, [name, labelAlign, labelCol, wrapperCol, layout, mergedColon, mergedRequiredMark, wrapForm]);
  react.useImperativeHandle(ref, function () {
    return wrapForm;
  });

  var onInternalFinishFailed = function onInternalFinishFailed(errorInfo) {
    onFinishFailed === null || onFinishFailed === void 0 ? void 0 : onFinishFailed(errorInfo);
    var defaultScrollToFirstError = {
      block: 'nearest'
    };

    if (scrollToFirstError && errorInfo.errorFields.length) {
      if ((0,esm_typeof/* default */.Z)(scrollToFirstError) === 'object') {
        defaultScrollToFirstError = scrollToFirstError;
      }

      wrapForm.scrollToField(errorInfo.errorFields[0].name, defaultScrollToFirstError);
    }
  };

  return /*#__PURE__*/react.createElement(DisabledContext/* DisabledContextProvider */.n, {
    disabled: disabled
  }, /*#__PURE__*/react.createElement(SizeContext/* SizeContextProvider */.q, {
    size: size
  }, /*#__PURE__*/react.createElement(context/* FormContext */.q3.Provider, {
    value: formContextValue
  }, /*#__PURE__*/react.createElement(rc_field_form_es/* default */.ZP, (0,esm_extends/* default */.Z)({
    id: name
  }, restFormProps, {
    name: name,
    onFinishFailed: onInternalFinishFailed,
    form: wrapForm,
    className: formClassName
  })))));
};

var Form = /*#__PURE__*/react.forwardRef(InternalForm);

/* harmony default export */ var form_Form = (Form);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useState.js
var useState = __webpack_require__(30470);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var ref = __webpack_require__(42550);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/hooks/useFormItemStatus.js




var useFormItemStatus = function useFormItemStatus() {
  var _useContext = (0,react.useContext)(context/* FormItemInputContext */.aM),
      status = _useContext.status;

   false ? 0 : void 0;
  return {
    status: status
  };
};

/* harmony default export */ var hooks_useFormItemStatus = (useFormItemStatus);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__(93355);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/hooks/useFrameState.js




function useFrameState(defaultValue) {
  var _React$useState = react.useState(defaultValue),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var frameRef = (0,react.useRef)(null);
  var batchRef = (0,react.useRef)([]);
  var destroyRef = (0,react.useRef)(false);
  react.useEffect(function () {
    destroyRef.current = false;
    return function () {
      destroyRef.current = true;
      raf/* default */.Z.cancel(frameRef.current);
      frameRef.current = null;
    };
  }, []);

  function setFrameValue(updater) {
    if (destroyRef.current) {
      return;
    }

    if (frameRef.current === null) {
      batchRef.current = [];
      frameRef.current = (0,raf/* default */.Z)(function () {
        frameRef.current = null;
        setValue(function (prevValue) {
          var current = prevValue;
          batchRef.current.forEach(function (func) {
            current = func(current);
          });
          return current;
        });
      });
    }

    batchRef.current.push(updater);
  }

  return [value, setFrameValue];
}
;// CONCATENATED MODULE: ./node_modules/antd/es/form/hooks/useItemRef.js




function useItemRef() {
  var _React$useContext = react.useContext(context/* FormContext */.q3),
      itemRef = _React$useContext.itemRef;

  var cacheRef = react.useRef({});

  function getRef(name, children) {
    var childrenRef = children && (0,esm_typeof/* default */.Z)(children) === 'object' && children.ref;
    var nameStr = name.join('_');

    if (cacheRef.current.name !== nameStr || cacheRef.current.originRef !== childrenRef) {
      cacheRef.current.name = nameStr;
      cacheRef.current.originRef = childrenRef;
      cacheRef.current.ref = (0,ref/* composeRef */.sQ)(itemRef(name), childrenRef);
    }

    return cacheRef.current.ref;
  }

  return getRef;
}
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(38819);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(43061);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js + 1 modules
var ExclamationCircleFilled = __webpack_require__(68855);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(7085);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/styleChecker.js
var styleChecker = __webpack_require__(31808);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/hooks/useFlexGapSupport.js



/* harmony default export */ var useFlexGapSupport = (function () {
  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      flexible = _React$useState2[0],
      setFlexible = _React$useState2[1];

  react.useEffect(function () {
    setFlexible((0,styleChecker/* detectFlexGapSupported */.fk)());
  }, []);
  return flexible;
});
// EXTERNAL MODULE: ./node_modules/antd/es/_util/responsiveObserve.js
var responsiveObserve = __webpack_require__(24308);
;// CONCATENATED MODULE: ./node_modules/antd/es/grid/RowContext.js

var RowContext = /*#__PURE__*/(0,react.createContext)({});
/* harmony default export */ var grid_RowContext = (RowContext);
;// CONCATENATED MODULE: ./node_modules/antd/es/grid/row.js





var row_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








var RowAligns = (0,type/* tuple */.b)('top', 'middle', 'bottom', 'stretch');
var RowJustify = (0,type/* tuple */.b)('start', 'end', 'center', 'space-around', 'space-between', 'space-evenly');
var Row = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;

  var customizePrefixCls = props.prefixCls,
      justify = props.justify,
      align = props.align,
      className = props.className,
      style = props.style,
      children = props.children,
      _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 0 : _props$gutter,
      wrap = props.wrap,
      others = row_rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = react.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  }),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      screens = _React$useState2[0],
      setScreens = _React$useState2[1];

  var supportFlexGap = useFlexGapSupport();
  var gutterRef = react.useRef(gutter); // ================================== Effect ==================================

  react.useEffect(function () {
    var token = responsiveObserve/* default */.ZP.subscribe(function (screen) {
      var currentGutter = gutterRef.current || 0;

      if (!Array.isArray(currentGutter) && (0,esm_typeof/* default */.Z)(currentGutter) === 'object' || Array.isArray(currentGutter) && ((0,esm_typeof/* default */.Z)(currentGutter[0]) === 'object' || (0,esm_typeof/* default */.Z)(currentGutter[1]) === 'object')) {
        setScreens(screen);
      }
    });
    return function () {
      return responsiveObserve/* default */.ZP.unsubscribe(token);
    };
  }, []); // ================================== Render ==================================

  var getGutter = function getGutter() {
    var results = [undefined, undefined];
    var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];
    normalizedGutter.forEach(function (g, index) {
      if ((0,esm_typeof/* default */.Z)(g) === 'object') {
        for (var i = 0; i < responsiveObserve/* responsiveArray */.c4.length; i++) {
          var breakpoint = responsiveObserve/* responsiveArray */.c4[i];

          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g;
      }
    });
    return results;
  };

  var prefixCls = getPrefixCls('row', customizePrefixCls);
  var gutters = getGutter();
  var classes = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-no-wrap"), wrap === false), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(justify), justify), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(align), align), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className); // Add gutter related style

  var rowStyle = {};
  var horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
  var verticalGutter = gutters[1] != null && gutters[1] > 0 ? gutters[1] / -2 : undefined;

  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }

  if (supportFlexGap) {
    // Set gap direct if flex gap support
    var _gutters = (0,slicedToArray/* default */.Z)(gutters, 2);

    rowStyle.rowGap = _gutters[1];
  } else if (verticalGutter) {
    rowStyle.marginTop = verticalGutter;
    rowStyle.marginBottom = verticalGutter;
  } // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
  // So we deconstruct "gutters" variable here.


  var _gutters2 = (0,slicedToArray/* default */.Z)(gutters, 2),
      gutterH = _gutters2[0],
      gutterV = _gutters2[1];

  var rowContext = react.useMemo(function () {
    return {
      gutter: [gutterH, gutterV],
      wrap: wrap,
      supportFlexGap: supportFlexGap
    };
  }, [gutterH, gutterV, wrap, supportFlexGap]);
  return /*#__PURE__*/react.createElement(grid_RowContext.Provider, {
    value: rowContext
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, others, {
    className: classes,
    style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, rowStyle), style),
    ref: ref
  }), children));
});

if (false) {}

/* harmony default export */ var row = (Row);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/QuestionCircleOutlined.js
// This icon file is generated automatically.
var QuestionCircleOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, "name": "question-circle", "theme": "outlined" };
/* harmony default export */ var asn_QuestionCircleOutlined = (QuestionCircleOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(30076);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/QuestionCircleOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var QuestionCircleOutlined_QuestionCircleOutlined = function QuestionCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_QuestionCircleOutlined
  }));
};
QuestionCircleOutlined_QuestionCircleOutlined.displayName = 'QuestionCircleOutlined';
/* harmony default export */ var icons_QuestionCircleOutlined = (/*#__PURE__*/react.forwardRef(QuestionCircleOutlined_QuestionCircleOutlined));
;// CONCATENATED MODULE: ./node_modules/antd/es/grid/col.js




var col_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






function parseFlex(flex) {
  if (typeof flex === 'number') {
    return "".concat(flex, " ").concat(flex, " auto");
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return "0 0 ".concat(flex);
  }

  return flex;
}

var sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var Col = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useContext2 = react.useContext(grid_RowContext),
      gutter = _React$useContext2.gutter,
      wrap = _React$useContext2.wrap,
      supportFlexGap = _React$useContext2.supportFlexGap;

  var customizePrefixCls = props.prefixCls,
      span = props.span,
      order = props.order,
      offset = props.offset,
      push = props.push,
      pull = props.pull,
      className = props.className,
      children = props.children,
      flex = props.flex,
      style = props.style,
      others = col_rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);

  var prefixCls = getPrefixCls('col', customizePrefixCls);
  var sizeClassObj = {};
  sizes.forEach(function (size) {
    var _extends2;

    var sizeProps = {};
    var propSize = props[size];

    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if ((0,esm_typeof/* default */.Z)(propSize) === 'object') {
      sizeProps = propSize || {};
    }

    delete others[size];
    sizeClassObj = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, sizeClassObj), (_extends2 = {}, (0,defineProperty/* default */.Z)(_extends2, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), (0,defineProperty/* default */.Z)(_extends2, "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), (0,defineProperty/* default */.Z)(_extends2, "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), (0,defineProperty/* default */.Z)(_extends2, "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), (0,defineProperty/* default */.Z)(_extends2, "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), (0,defineProperty/* default */.Z)(_extends2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _extends2));
  });
  var classes = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(span), span !== undefined), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-order-").concat(order), order), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-push-").concat(push), push), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-pull-").concat(pull), pull), _classNames), className, sizeClassObj);
  var mergedStyle = {}; // Horizontal gutter use padding

  if (gutter && gutter[0] > 0) {
    var horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  } // Vertical gutter use padding when gap not support


  if (gutter && gutter[1] > 0 && !supportFlexGap) {
    var verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex); // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553

    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }

  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, others, {
    style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, mergedStyle), style),
    className: classes,
    ref: ref
  }), children);
});

if (false) {}

/* harmony default export */ var col = (Col);
// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__(42051);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/default.js + 4 modules
var locale_default = __webpack_require__(5767);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 3 modules
var es_tooltip = __webpack_require__(45777);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/FormItemLabel.js





var FormItemLabel_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










function toTooltipProps(tooltip) {
  if (!tooltip) {
    return null;
  }

  if ((0,esm_typeof/* default */.Z)(tooltip) === 'object' && ! /*#__PURE__*/react.isValidElement(tooltip)) {
    return tooltip;
  }

  return {
    title: tooltip
  };
}

var FormItemLabel = function FormItemLabel(_ref) {
  var prefixCls = _ref.prefixCls,
      label = _ref.label,
      htmlFor = _ref.htmlFor,
      labelCol = _ref.labelCol,
      labelAlign = _ref.labelAlign,
      colon = _ref.colon,
      required = _ref.required,
      requiredMark = _ref.requiredMark,
      tooltip = _ref.tooltip;

  var _useLocaleReceiver = (0,LocaleReceiver/* useLocaleReceiver */.E)('Form'),
      _useLocaleReceiver2 = (0,slicedToArray/* default */.Z)(_useLocaleReceiver, 1),
      formLocale = _useLocaleReceiver2[0];

  if (!label) return null;
  return /*#__PURE__*/react.createElement(context/* FormContext */.q3.Consumer, {
    key: "label"
  }, function (_ref2) {
    var _classNames2;

    var vertical = _ref2.vertical,
        contextLabelAlign = _ref2.labelAlign,
        contextLabelCol = _ref2.labelCol,
        labelWrap = _ref2.labelWrap,
        contextColon = _ref2.colon;

    var _a;

    var mergedLabelCol = labelCol || contextLabelCol || {};
    var mergedLabelAlign = labelAlign || contextLabelAlign;
    var labelClsBasic = "".concat(prefixCls, "-item-label");
    var labelColClassName = classnames_default()(labelClsBasic, mergedLabelAlign === 'left' && "".concat(labelClsBasic, "-left"), mergedLabelCol.className, (0,defineProperty/* default */.Z)({}, "".concat(labelClsBasic, "-wrap"), !!labelWrap));
    var labelChildren = label; // Keep label is original where there should have no colon

    var computedColon = colon === true || contextColon !== false && colon !== false;
    var haveColon = computedColon && !vertical; // Remove duplicated user input colon

    if (haveColon && typeof label === 'string' && label.trim() !== '') {
      labelChildren = label.replace(/[:|：]\s*$/, '');
    } // Tooltip


    var tooltipProps = toTooltipProps(tooltip);

    if (tooltipProps) {
      var _tooltipProps$icon = tooltipProps.icon,
          icon = _tooltipProps$icon === void 0 ? /*#__PURE__*/react.createElement(icons_QuestionCircleOutlined, null) : _tooltipProps$icon,
          restTooltipProps = FormItemLabel_rest(tooltipProps, ["icon"]);

      var tooltipNode = /*#__PURE__*/react.createElement(es_tooltip/* default */.Z, (0,esm_extends/* default */.Z)({}, restTooltipProps), /*#__PURE__*/react.cloneElement(icon, {
        className: "".concat(prefixCls, "-item-tooltip"),
        title: ''
      }));
      labelChildren = /*#__PURE__*/react.createElement(react.Fragment, null, labelChildren, tooltipNode);
    } // Add required mark if optional


    if (requiredMark === 'optional' && !required) {
      labelChildren = /*#__PURE__*/react.createElement(react.Fragment, null, labelChildren, /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-item-optional"),
        title: ""
      }, (formLocale === null || formLocale === void 0 ? void 0 : formLocale.optional) || ((_a = locale_default/* default */.Z.Form) === null || _a === void 0 ? void 0 : _a.optional)));
    }

    var labelClassName = classnames_default()((_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-item-required"), required), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-item-required-mark-optional"), requiredMark === 'optional'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-item-no-colon"), !computedColon), _classNames2));
    return /*#__PURE__*/react.createElement(col, (0,esm_extends/* default */.Z)({}, mergedLabelCol, {
      className: labelColClassName
    }), /*#__PURE__*/react.createElement("label", {
      htmlFor: htmlFor,
      className: labelClassName,
      title: typeof label === 'string' ? label : ''
    }, labelChildren));
  });
};

/* harmony default export */ var form_FormItemLabel = (FormItemLabel);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/FormItemInput.js







var FormItemInput = function FormItemInput(props) {
  var prefixCls = props.prefixCls,
      status = props.status,
      wrapperCol = props.wrapperCol,
      children = props.children,
      errors = props.errors,
      warnings = props.warnings,
      formItemRender = props._internalItemRender,
      extra = props.extra,
      help = props.help,
      fieldId = props.fieldId,
      marginBottom = props.marginBottom,
      onErrorVisibleChanged = props.onErrorVisibleChanged;
  var baseClassName = "".concat(prefixCls, "-item");
  var formContext = react.useContext(context/* FormContext */.q3);
  var mergedWrapperCol = wrapperCol || formContext.wrapperCol || {};
  var className = classnames_default()("".concat(baseClassName, "-control"), mergedWrapperCol.className); // Pass to sub FormItem should not with col info

  var subFormContext = react.useMemo(function () {
    return (0,esm_extends/* default */.Z)({}, formContext);
  }, [formContext]);
  delete subFormContext.labelCol;
  delete subFormContext.wrapperCol;
  var inputDom = /*#__PURE__*/react.createElement("div", {
    className: "".concat(baseClassName, "-control-input")
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(baseClassName, "-control-input-content")
  }, children));
  var formItemContext = react.useMemo(function () {
    return {
      prefixCls: prefixCls,
      status: status
    };
  }, [prefixCls, status]);
  var errorListDom = marginBottom !== null || errors.length || warnings.length ? /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'nowrap'
    }
  }, /*#__PURE__*/react.createElement(context/* FormItemPrefixContext */.Rk.Provider, {
    value: formItemContext
  }, /*#__PURE__*/react.createElement(ErrorList, {
    fieldId: fieldId,
    errors: errors,
    warnings: warnings,
    help: help,
    helpStatus: status,
    className: "".concat(baseClassName, "-explain-connected"),
    onVisibleChanged: onErrorVisibleChanged
  })), !!marginBottom && /*#__PURE__*/react.createElement("div", {
    style: {
      width: 0,
      height: marginBottom
    }
  })) : null;
  var extraProps = {};

  if (fieldId) {
    extraProps.id = "".concat(fieldId, "_extra");
  } // If extra = 0, && will goes wrong
  // 0&&error -> 0


  var extraDom = extra ? /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, extraProps, {
    className: "".concat(baseClassName, "-extra")
  }), extra) : null;
  var dom = formItemRender && formItemRender.mark === 'pro_table_render' && formItemRender.render ? formItemRender.render(props, {
    input: inputDom,
    errorList: errorListDom,
    extra: extraDom
  }) : /*#__PURE__*/react.createElement(react.Fragment, null, inputDom, errorListDom, extraDom);
  return /*#__PURE__*/react.createElement(context/* FormContext */.q3.Provider, {
    value: subFormContext
  }, /*#__PURE__*/react.createElement(col, (0,esm_extends/* default */.Z)({}, mergedWrapperCol, {
    className: className
  }), dom));
};

/* harmony default export */ var form_FormItemInput = (FormItemInput);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/FormItem/ItemHolder.js




var ItemHolder_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};














var iconMap = {
  success: CheckCircleFilled/* default */.Z,
  warning: ExclamationCircleFilled/* default */.Z,
  error: CloseCircleFilled/* default */.Z,
  validating: LoadingOutlined/* default */.Z
};
function ItemHolder(props) {
  var _itemClassName;

  var prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      help = props.help,
      errors = props.errors,
      warnings = props.warnings,
      validateStatus = props.validateStatus,
      meta = props.meta,
      hasFeedback = props.hasFeedback,
      hidden = props.hidden,
      children = props.children,
      fieldId = props.fieldId,
      isRequired = props.isRequired,
      onSubItemMetaChange = props.onSubItemMetaChange,
      restProps = ItemHolder_rest(props, ["prefixCls", "className", "style", "help", "errors", "warnings", "validateStatus", "meta", "hasFeedback", "hidden", "children", "fieldId", "isRequired", "onSubItemMetaChange"]);

  var itemPrefixCls = "".concat(prefixCls, "-item");

  var _React$useContext = react.useContext(context/* FormContext */.q3),
      requiredMark = _React$useContext.requiredMark; // ======================== Margin ========================


  var itemRef = react.useRef(null);
  var debounceErrors = useDebounce(errors);
  var debounceWarnings = useDebounce(warnings);
  var hasHelp = help !== undefined && help !== null;
  var hasError = !!(hasHelp || errors.length || warnings.length);

  var _React$useState = react.useState(null),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      marginBottom = _React$useState2[0],
      setMarginBottom = _React$useState2[1];

  (0,useLayoutEffect/* default */.Z)(function () {
    if (hasError && itemRef.current) {
      var itemStyle = getComputedStyle(itemRef.current);
      setMarginBottom(parseInt(itemStyle.marginBottom, 10));
    }
  }, [hasError]);

  var onErrorVisibleChanged = function onErrorVisibleChanged(nextVisible) {
    if (!nextVisible) {
      setMarginBottom(null);
    }
  }; // ======================== Status ========================


  var mergedValidateStatus = '';

  if (validateStatus !== undefined) {
    mergedValidateStatus = validateStatus;
  } else if (meta.validating) {
    mergedValidateStatus = 'validating';
  } else if (debounceErrors.length) {
    mergedValidateStatus = 'error';
  } else if (debounceWarnings.length) {
    mergedValidateStatus = 'warning';
  } else if (meta.touched) {
    mergedValidateStatus = 'success';
  }

  var formItemStatusContext = react.useMemo(function () {
    var feedbackIcon;

    if (hasFeedback) {
      var IconNode = mergedValidateStatus && iconMap[mergedValidateStatus];
      feedbackIcon = IconNode ? /*#__PURE__*/react.createElement("span", {
        className: classnames_default()("".concat(itemPrefixCls, "-feedback-icon"), "".concat(itemPrefixCls, "-feedback-icon-").concat(mergedValidateStatus))
      }, /*#__PURE__*/react.createElement(IconNode, null)) : null;
    }

    return {
      status: mergedValidateStatus,
      hasFeedback: hasFeedback,
      feedbackIcon: feedbackIcon,
      isFormItemInput: true
    };
  }, [mergedValidateStatus, hasFeedback]); // ======================== Render ========================

  var itemClassName = (_itemClassName = {}, (0,defineProperty/* default */.Z)(_itemClassName, itemPrefixCls, true), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(itemPrefixCls, "-with-help"), hasHelp || debounceErrors.length || debounceWarnings.length), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(className), !!className), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(itemPrefixCls, "-has-feedback"), mergedValidateStatus && hasFeedback), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(itemPrefixCls, "-has-success"), mergedValidateStatus === 'success'), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(itemPrefixCls, "-has-warning"), mergedValidateStatus === 'warning'), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(itemPrefixCls, "-has-error"), mergedValidateStatus === 'error'), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(itemPrefixCls, "-is-validating"), mergedValidateStatus === 'validating'), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(itemPrefixCls, "-hidden"), hidden), _itemClassName);
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(itemClassName),
    style: style,
    ref: itemRef
  }, /*#__PURE__*/react.createElement(row, (0,esm_extends/* default */.Z)({
    className: "".concat(itemPrefixCls, "-row")
  }, (0,omit/* default */.Z)(restProps, ['_internalItemRender', 'colon', 'dependencies', 'extra', 'fieldKey', 'getValueFromEvent', 'getValueProps', 'htmlFor', 'id', 'initialValue', 'isListField', 'label', 'labelAlign', 'labelCol', 'labelWrap', 'messageVariables', 'name', 'normalize', 'noStyle', 'preserve', 'required', 'requiredMark', 'rules', 'shouldUpdate', 'trigger', 'tooltip', 'validateFirst', 'validateTrigger', 'valuePropName', 'wrapperCol'])), /*#__PURE__*/react.createElement(form_FormItemLabel, (0,esm_extends/* default */.Z)({
    htmlFor: fieldId,
    required: isRequired,
    requiredMark: requiredMark
  }, props, {
    prefixCls: prefixCls
  })), /*#__PURE__*/react.createElement(form_FormItemInput, (0,esm_extends/* default */.Z)({}, props, meta, {
    errors: debounceErrors,
    warnings: debounceWarnings,
    prefixCls: prefixCls,
    status: mergedValidateStatus,
    help: help,
    marginBottom: marginBottom,
    onErrorVisibleChanged: onErrorVisibleChanged
  }), /*#__PURE__*/react.createElement(context/* NoStyleItemContext */.qI.Provider, {
    value: onSubItemMetaChange
  }, /*#__PURE__*/react.createElement(context/* FormItemInputContext */.aM.Provider, {
    value: formItemStatusContext
  }, children)))), !!marginBottom && /*#__PURE__*/react.createElement("div", {
    className: "".concat(itemPrefixCls, "-margin-offset"),
    style: {
      marginBottom: -marginBottom
    }
  }));
}
;// CONCATENATED MODULE: ./node_modules/antd/es/form/FormItem/index.js



















var NAME_SPLIT = '__SPLIT__';
var ValidateStatuses = (0,type/* tuple */.b)('success', 'warning', 'error', 'validating', '');
var MemoInput = /*#__PURE__*/react.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (prev, next) {
  return prev.value === next.value && prev.update === next.update && prev.childProps.length === next.childProps.length && prev.childProps.every(function (value, index) {
    return value === next.childProps[index];
  });
});

function hasValidName(name) {
  if (name === null) {
     false ? 0 : void 0;
  }

  return !(name === undefined || name === null);
}

function genEmptyMeta() {
  return {
    errors: [],
    warnings: [],
    touched: false,
    validating: false,
    name: []
  };
}

function InternalFormItem(props) {
  var name = props.name,
      noStyle = props.noStyle,
      dependencies = props.dependencies,
      customizePrefixCls = props.prefixCls,
      shouldUpdate = props.shouldUpdate,
      rules = props.rules,
      children = props.children,
      required = props.required,
      label = props.label,
      messageVariables = props.messageVariables,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? 'onChange' : _props$trigger,
      validateTrigger = props.validateTrigger,
      hidden = props.hidden;

  var _useContext = (0,react.useContext)(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _useContext.getPrefixCls;

  var _useContext2 = (0,react.useContext)(context/* FormContext */.q3),
      formName = _useContext2.name;

  var isRenderProps = typeof children === 'function';
  var notifyParentMetaChange = (0,react.useContext)(context/* NoStyleItemContext */.qI);

  var _useContext3 = (0,react.useContext)(rc_field_form_es/* FieldContext */.zb),
      contextValidateTrigger = _useContext3.validateTrigger;

  var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : contextValidateTrigger;
  var hasName = hasValidName(name);
  var prefixCls = getPrefixCls('form', customizePrefixCls); // ========================= MISC =========================
  // Get `noStyle` required info

  var listContext = react.useContext(rc_field_form_es/* ListContext */.ZM);
  var fieldKeyPathRef = react.useRef(); // ======================== Errors ========================
  // >>>>> Collect sub field errors

  var _useFrameState = useFrameState({}),
      _useFrameState2 = (0,slicedToArray/* default */.Z)(_useFrameState, 2),
      subFieldErrors = _useFrameState2[0],
      setSubFieldErrors = _useFrameState2[1]; // >>>>> Current field errors


  var _useState = (0,useState/* default */.Z)(function () {
    return genEmptyMeta();
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      meta = _useState2[0],
      setMeta = _useState2[1];

  var onMetaChange = function onMetaChange(nextMeta) {
    // This keyInfo is not correct when field is removed
    // Since origin keyManager no longer keep the origin key anymore
    // Which means we need cache origin one and reuse when removed
    var keyInfo = listContext === null || listContext === void 0 ? void 0 : listContext.getKey(nextMeta.name); // Destroy will reset all the meta

    setMeta(nextMeta.destroy ? genEmptyMeta() : nextMeta, true); // Bump to parent since noStyle

    if (noStyle && notifyParentMetaChange) {
      var namePath = nextMeta.name;

      if (!nextMeta.destroy) {
        if (keyInfo !== undefined) {
          var _keyInfo = (0,slicedToArray/* default */.Z)(keyInfo, 2),
              fieldKey = _keyInfo[0],
              restPath = _keyInfo[1];

          namePath = [fieldKey].concat((0,toConsumableArray/* default */.Z)(restPath));
          fieldKeyPathRef.current = namePath;
        }
      } else {
        // Use origin cache data
        namePath = fieldKeyPathRef.current || namePath;
      }

      notifyParentMetaChange(nextMeta, namePath);
    }
  }; // >>>>> Collect noStyle Field error to the top FormItem


  var onSubItemMetaChange = function onSubItemMetaChange(subMeta, uniqueKeys) {
    // Only `noStyle` sub item will trigger
    setSubFieldErrors(function (prevSubFieldErrors) {
      var clone = (0,esm_extends/* default */.Z)({}, prevSubFieldErrors); // name: ['user', 1] + key: [4] = ['user', 4]


      var mergedNamePath = [].concat((0,toConsumableArray/* default */.Z)(subMeta.name.slice(0, -1)), (0,toConsumableArray/* default */.Z)(uniqueKeys));
      var mergedNameKey = mergedNamePath.join(NAME_SPLIT);

      if (subMeta.destroy) {
        // Remove
        delete clone[mergedNameKey];
      } else {
        // Update
        clone[mergedNameKey] = subMeta;
      }

      return clone;
    });
  }; // >>>>> Get merged errors


  var _React$useMemo = react.useMemo(function () {
    var errorList = (0,toConsumableArray/* default */.Z)(meta.errors);

    var warningList = (0,toConsumableArray/* default */.Z)(meta.warnings);

    Object.values(subFieldErrors).forEach(function (subFieldError) {
      errorList.push.apply(errorList, (0,toConsumableArray/* default */.Z)(subFieldError.errors || []));
      warningList.push.apply(warningList, (0,toConsumableArray/* default */.Z)(subFieldError.warnings || []));
    });
    return [errorList, warningList];
  }, [subFieldErrors, meta.errors, meta.warnings]),
      _React$useMemo2 = (0,slicedToArray/* default */.Z)(_React$useMemo, 2),
      mergedErrors = _React$useMemo2[0],
      mergedWarnings = _React$useMemo2[1]; // ===================== Children Ref =====================


  var getItemRef = useItemRef(); // ======================== Render ========================

  function renderLayout(baseChildren, fieldId, isRequired) {
    if (noStyle && !hidden) {
      return baseChildren;
    }

    return /*#__PURE__*/react.createElement(ItemHolder, (0,esm_extends/* default */.Z)({
      key: "row"
    }, props, {
      prefixCls: prefixCls,
      fieldId: fieldId,
      isRequired: isRequired,
      errors: mergedErrors,
      warnings: mergedWarnings,
      meta: meta,
      onSubItemMetaChange: onSubItemMetaChange
    }), baseChildren);
  }

  if (!hasName && !isRenderProps && !dependencies) {
    return renderLayout(children);
  }

  var variables = {};

  if (typeof label === 'string') {
    variables.label = label;
  } else if (name) {
    variables.label = String(name);
  }

  if (messageVariables) {
    variables = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, variables), messageVariables);
  } // >>>>> With Field


  return /*#__PURE__*/react.createElement(rc_field_form_es/* Field */.gN, (0,esm_extends/* default */.Z)({}, props, {
    messageVariables: variables,
    trigger: trigger,
    validateTrigger: mergedValidateTrigger,
    onMetaChange: onMetaChange
  }), function (control, renderMeta, context) {
    var mergedName = toArray(name).length && renderMeta ? renderMeta.name : [];
    var fieldId = getFieldId(mergedName, formName);
    var isRequired = required !== undefined ? required : !!(rules && rules.some(function (rule) {
      if (rule && (0,esm_typeof/* default */.Z)(rule) === 'object' && rule.required && !rule.warningOnly) {
        return true;
      }

      if (typeof rule === 'function') {
        var ruleEntity = rule(context);
        return ruleEntity && ruleEntity.required && !ruleEntity.warningOnly;
      }

      return false;
    })); // ======================= Children =======================

    var mergedControl = (0,esm_extends/* default */.Z)({}, control);

    var childNode = null;
     false ? 0 : void 0;

    if (Array.isArray(children) && hasName) {
       false ? 0 : void 0;
      childNode = children;
    } else if (isRenderProps && (!(shouldUpdate || dependencies) || hasName)) {
       false ? 0 : void 0;
       false ? 0 : void 0;
    } else if (dependencies && !isRenderProps && !hasName) {
       false ? 0 : void 0;
    } else if ((0,reactNode/* isValidElement */.l$)(children)) {
       false ? 0 : void 0;

      var childProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, children.props), mergedControl);

      if (!childProps.id) {
        childProps.id = fieldId;
      }

      if (props.help || mergedErrors.length > 0 || mergedWarnings.length > 0 || props.extra) {
        var describedbyArr = [];

        if (props.help || mergedErrors.length > 0) {
          describedbyArr.push("".concat(fieldId, "_help"));
        }

        if (props.extra) {
          describedbyArr.push("".concat(fieldId, "_extra"));
        }

        childProps['aria-describedby'] = describedbyArr.join(' ');
      }

      if (mergedErrors.length > 0) {
        childProps['aria-invalid'] = 'true';
      }

      if (isRequired) {
        childProps['aria-required'] = 'true';
      }

      if ((0,ref/* supportRef */.Yr)(children)) {
        childProps.ref = getItemRef(mergedName, children);
      } // We should keep user origin event handler


      var triggers = new Set([].concat((0,toConsumableArray/* default */.Z)(toArray(trigger)), (0,toConsumableArray/* default */.Z)(toArray(mergedValidateTrigger))));
      triggers.forEach(function (eventName) {
        childProps[eventName] = function () {
          var _a2, _c2;

          var _a, _b, _c;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          (_a = mergedControl[eventName]) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [mergedControl].concat(args));
          (_c = (_b = children.props)[eventName]) === null || _c === void 0 ? void 0 : (_c2 = _c).call.apply(_c2, [_b].concat(args));
        };
      }); // List of props that need to be watched for changes -> if changes are detected in MemoInput -> rerender

      var watchingChildProps = [childProps['aria-required'], childProps['aria-invalid'], childProps['aria-describedby']];
      childNode = /*#__PURE__*/react.createElement(MemoInput, {
        value: mergedControl[props.valuePropName || 'value'],
        update: children,
        childProps: watchingChildProps
      }, (0,reactNode/* cloneElement */.Tm)(children, childProps));
    } else if (isRenderProps && (shouldUpdate || dependencies) && !hasName) {
      childNode = children(context);
    } else {
       false ? 0 : void 0;
      childNode = children;
    }

    return renderLayout(childNode, fieldId, isRequired);
  });
}

var FormItem = InternalFormItem;
FormItem.useStatus = hooks_useFormItemStatus;
/* harmony default export */ var form_FormItem = (FormItem);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/FormList.js


var FormList_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







var FormList = function FormList(_a) {
  var customizePrefixCls = _a.prefixCls,
      children = _a.children,
      props = FormList_rest(_a, ["prefixCls", "children"]);

   false ? 0 : void 0;

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('form', customizePrefixCls);
  var contextValue = react.useMemo(function () {
    return {
      prefixCls: prefixCls,
      status: 'error'
    };
  }, [prefixCls]);
  return /*#__PURE__*/react.createElement(rc_field_form_es/* List */.aV, (0,esm_extends/* default */.Z)({}, props), function (fields, operation, meta) {
    return /*#__PURE__*/react.createElement(context/* FormItemPrefixContext */.Rk.Provider, {
      value: contextValue
    }, children(fields.map(function (field) {
      return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, field), {
        fieldKey: field.key
      });
    }), operation, {
      errors: meta.errors,
      warnings: meta.warnings
    }));
  });
};

/* harmony default export */ var form_FormList = (FormList);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/hooks/useFormInstance.js


function useFormInstance() {
  var _useContext = (0,react.useContext)(context/* FormContext */.q3),
      form = _useContext.form;

  return form;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/form/index.js







var es_form_Form = form_Form;
es_form_Form.Item = form_FormItem;
es_form_Form.List = form_FormList;
es_form_Form.ErrorList = ErrorList;
es_form_Form.useForm = useForm;
es_form_Form.useFormInstance = useFormInstance;
es_form_Form.useWatch = rc_field_form_es/* useWatch */.qo;
es_form_Form.Provider = context/* FormProvider */.RV;

es_form_Form.create = function () {
   false ? 0 : void 0;
};

/* harmony default export */ var es_form = (es_form_Form);

/***/ })

}]);
//# sourceMappingURL=a1a75fed56b2005496a5.bundle.js.map