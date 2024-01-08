"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[6261],{

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

/***/ 99562:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ icons_PictureOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PictureOutlined.js
// This icon file is generated automatically.
var PictureOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z" } }] }, "name": "picture", "theme": "outlined" };
/* harmony default export */ var asn_PictureOutlined = (PictureOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(30076);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/PictureOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var PictureOutlined_PictureOutlined = function PictureOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_PictureOutlined
  }));
};
PictureOutlined_PictureOutlined.displayName = 'PictureOutlined';
/* harmony default export */ var icons_PictureOutlined = (/*#__PURE__*/react.forwardRef(PictureOutlined_PictureOutlined));

/***/ }),

/***/ 34651:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ emptyHolder; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(14277);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/components/common/emptyHolder/style.tsx

const EmptyHolderWrapper = styled_components_browser_esm/* default */.ZP.div`
  padding: ${props => `${props.padding / 40}rem 0`};
  display: flex;
  align-items: center;
  justify-content: center;
`;
;// CONCATENATED MODULE: ./src/components/common/emptyHolder/index.tsx



const EmptyHolder = props => {
  const {
    msg,
    padding
  } = props;
  return /*#__PURE__*/react.createElement(EmptyHolderWrapper, {
    padding: padding
  }, /*#__PURE__*/react.createElement(empty/* default */.Z, {
    description: msg || '暂无数据'
  }));
};
/* harmony default export */ var emptyHolder = (/*#__PURE__*/(0,react.memo)(EmptyHolder));

/***/ }),

/***/ 46991:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ imgUpload; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/components/common/imgUpload/style.tsx

const ImgUploadWrapper = styled_components_browser_esm/* default */.ZP.div`
  .global-upload-outer-cpn-style {
    background-color: #3399ff;
    .input-container {
      width: 100%;
      height: ${400 / 40}rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #eeeeee;
      input {
        width: 100%;
        height: 100%;
        opacity: 0;
        position: absolute;
        cursor: pointer;
      }
      .msg-tip {
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
        .img-icon {
          svg {
            width: ${70 / 40}rem;
            height: ${70 / 40}rem;
            color: #cc0101;
          }
        }
        .tip {
          font-size: ${24 / 40}rem;
          letter-spacing: 5px;
          margin: ${30 / 40}rem 0 0 0;
        }
      }
    }
  }
`;
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 8 modules
var modal = __webpack_require__(48889);
// EXTERNAL MODULE: ./node_modules/antd/es/progress/index.js + 10 modules
var es_progress = __webpack_require__(54458);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PictureOutlined.js + 1 modules
var PictureOutlined = __webpack_require__(99562);
// EXTERNAL MODULE: ./src/components/customizeUpload/index.tsx + 2 modules
var customizeUpload = __webpack_require__(5366);
;// CONCATENATED MODULE: ./src/components/common/imgUpload/index.tsx





const ImgUpload = props => {
  const {
    isShow,
    fileSource,
    isCustom,
    handleOk,
    network,
    uploadName,
    realWidth,
    aspectRatio,
    handleCancel
  } = props;
  const [progress, setProgress] = (0,react.useState)(0);
  const [isShowCropper, setIsShowCropper] = (0,react.useState)(false);
  const [file, setFile] = (0,react.useState)(null);
  (0,react.useEffect)(() => {
    if (isCustom) {
      setIsShowCropper(true);
    }
  }, [isCustom]);
  const uploadRef = (0,react.useRef)();
  const fileChange = e => {
    if (e.currentTarget.files && e.currentTarget.files.length !== 0) {
      setFile(e.currentTarget.files[0]);
      setIsShowCropper(true);
    }
  };
  const handleAvatarOk = async () => {
    const formData = new FormData();
    if (uploadRef.current) {
      const f = await uploadRef.current.getCropperFile();
      formData.append(uploadName, f);
      const res = await network(formData, e => {
        setProgress(e.loaded / e.total * 100);
      });
      if (res.status === 200) {
        handleOk(res);
      }
    }
  };
  const handleAvatarCancel = () => {
    setProgress(0);
    setIsShowCropper(false);
    setFile(null);
    handleCancel();
  };
  return /*#__PURE__*/react.createElement(modal/* default */.Z, {
    title: "\u81EA\u5B9A\u4E49\u56FE\u7247",
    open: isShow,
    maskClosable: false,
    destroyOnClose: true,
    onOk: handleAvatarOk,
    width: '65%',
    onCancel: handleAvatarCancel
  }, isShow && /*#__PURE__*/react.createElement(ImgUploadWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "global-upload-outer-cpn-style"
  }, !isShowCropper && !isCustom && /*#__PURE__*/react.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/react.createElement("input", {
    type: "file",
    onChange: e => {
      fileChange(e);
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "msg-tip"
  }, /*#__PURE__*/react.createElement("p", {
    className: "tip"
  }, "\u8BF7\u9009\u62E9\u56FE\u7247"), /*#__PURE__*/react.createElement(PictureOutlined/* default */.Z, {
    className: "img-icon"
  }))), isShowCropper && /*#__PURE__*/react.createElement(customizeUpload/* default */.Z, {
    file: isCustom ? fileSource : file,
    imgWidth: 5,
    scale: 1,
    aspectRatio: aspectRatio,
    isCircle: false,
    realWidth: realWidth
    // @ts-expect-error
    ,
    ref: uploadRef
  })), /*#__PURE__*/react.createElement(es_progress/* default */.Z, {
    percent: parseFloat(progress.toFixed(1))
  })));
};
/* harmony default export */ var imgUpload = (/*#__PURE__*/(0,react.memo)(ImgUpload));

/***/ }),

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

/***/ 3405:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bt: function() { return /* binding */ SUB_CHANNEL; },
/* harmony export */   UE: function() { return /* binding */ CREATED_PLAYLIST; },
/* harmony export */   Yd: function() { return /* binding */ HOT_VIDEO; },
/* harmony export */   cA: function() { return /* binding */ WONDER_CHANNEL; },
/* harmony export */   dh: function() { return /* binding */ SINGLE_PLAYLIST; },
/* harmony export */   tn: function() { return /* binding */ UPLOADED_VIDEO; }
/* harmony export */ });
/* unused harmony exports SHORT, LIVE, YESTERDAY_LIVE, LIVE_ON_THE_WAY, MUL_PLAYLIST */
const UPLOADED_VIDEO = '上传的视频';
const HOT_VIDEO = '热门上传视频';
const SHORT = '短视频';
const LIVE = '正在直播';
const YESTERDAY_LIVE = '过往的直播归档的视频';
const LIVE_ON_THE_WAY = '即将开始的直播';
const SINGLE_PLAYLIST = '单个播放列表';
const CREATED_PLAYLIST = '创建的播放列表';
const MUL_PLAYLIST = '多个播放列表';
const SUB_CHANNEL = '订阅的频道';
const WONDER_CHANNEL = '精选频道';


/***/ }),

/***/ 76872:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ds: function() { return /* binding */ getUserBlock; },
/* harmony export */   VA: function() { return /* binding */ userAddBlock; },
/* harmony export */   cS: function() { return /* binding */ getAllBlock; }
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

async function getAllBlock() {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: '/block/all'
  });
}
async function userAddBlock(blockId) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/block/user/add',
    data: {
      blockId
    }
  });
}
async function getUserBlock(userId) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: `/block/user/${userId}`
  });
}

/***/ }),

/***/ 36261:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ customize; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 20 modules
var tabs = __webpack_require__(60561);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 14 modules
var input = __webpack_require__(50817);
// EXTERNAL MODULE: ./node_modules/antd/es/notification/index.js + 1 modules
var notification = __webpack_require__(38648);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/basic/style.tsx

const BasicWrapper = styled_components_browser_esm/* default */.ZP.div`
  .desc-label {
    font-size: ${18 / 40}rem;
    color: #606060;
  }
  .name-label-second {
    margin: ${16 / 40}rem 0 0 0;
  }
  .publish-outer {
    display: flex;
    justify-content: flex-end;
    button {
      padding: ${5 / 40}rem ${15 / 40}rem;
      background-color: #1162cc;
      color: #fff;
      font-size: ${18 / 40}rem;
      border-radius: ${4 / 40}rem;
    }
    [disabled] {
      background-color: #e5e5e5;
      color: #000000;
      cursor: not-allowed;
    }
  }
`;
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/network/channel/index.tsx
var network_channel = __webpack_require__(38306);
// EXTERNAL MODULE: ./src/views/profile/pages/customize/store/actionCreators.tsx
var actionCreators = __webpack_require__(92157);
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/basic/index.tsx






const {
  TextArea
} = input["default"];
const Basic = () => {
  const channel = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['channelReducer', 'channel']);
  });
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  const [name, setName] = (0,react.useState)(channel.name);
  const [desc, setDesc] = (0,react.useState)(channel.description);
  const dispatch = (0,es/* useDispatch */.I0)();
  const channelNameInp = e => {
    setName(e.currentTarget.value);
  };
  const channelDescInp = e => {
    setDesc(e.currentTarget.value);
  };
  const updateChannelHandle = async () => {
    const result = await (0,network_channel/* updateChannel */.pW)(channel.id, {
      description: desc,
      name
    });
    if (result.status === 200) {
      dispatch((0,actionCreators/* changeChannelAction */.Q)(login.userMsg.userId));
      notification/* default */.Z.success({
        message: `通知`,
        description: '您的信息更新成功',
        placement: 'bottomLeft'
      });
    }
  };
  return /*#__PURE__*/react.createElement(BasicWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "publish-outer"
  }, /*#__PURE__*/react.createElement("button", {
    disabled: !name || name.trim().length === 0 || !desc || desc.trim().length === 0,
    onClick: async e => {
      await updateChannelHandle();
    }
  }, "\u53D1\u5E03")), /*#__PURE__*/react.createElement("div", {
    className: "name-label-first"
  }, "\u540D\u79F0"), /*#__PURE__*/react.createElement("p", {
    className: "desc-label"
  }, "\u9009\u7528\u7684\u9891\u9053\u540D\u79F0\u8981\u80FD\u53CD\u6620\u60A8\u7684\u8EAB\u4EFD\u548C\u5185\u5BB9\u3002"), /*#__PURE__*/react.createElement(input["default"], {
    placeholder: "\u8BF7\u8F93\u5165\u4EBA\u9891\u9053\u540D\u79F0",
    value: name,
    onInput: e => {
      channelNameInp(e);
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "name-label-second"
  }, "\u8BF4\u660E"), /*#__PURE__*/react.createElement("p", {
    className: "desc-label"
  }, "\u8BF7\u4ECB\u7ECD\u60A8\u7684\u9891\u9053\uFF0C\u65B9\u4FBF\u5927\u5BB6\u8BA4\u8BC6\u4F60"), /*#__PURE__*/react.createElement(TextArea, {
    rows: 4,
    onInput: e => {
      channelDescInp(e);
    },
    value: desc,
    placeholder: "\u8BF7\u8F93\u5165\u7B80\u4ECB",
    maxLength: 200
  }));
};
/* harmony default export */ var basic = (/*#__PURE__*/(0,react.memo)(Basic));
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 8 modules
var modal = __webpack_require__(48889);
// EXTERNAL MODULE: ./node_modules/antd/es/progress/index.js + 10 modules
var es_progress = __webpack_require__(54458);
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/brand/style.tsx

const BrandWrapper = styled_components_browser_esm/* default */.ZP.div``;
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/brand/childCpn/brandItem/style.tsx

const BrandItemWrapper = styled_components_browser_esm/* default */.ZP.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 0 0 ${20 / 40}rem 0;
  .title {
    font-family: 'Roboto', 'Noto', sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    font-size: 15px;
  }
  .label {
    font-family: 'Roboto', 'Noto', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-size: 13px;
  }
  .content {
    display: flex;
    align-items: flex-start;
    margin: ${20 / 40}rem 0 0 0;
    .img-container {
      width: ${300 / 40}rem;
      height: ${170 / 40}rem;
      background-color: #f9f9f9;
      position: relative;
      margin: 0 ${24 / 40}rem 0 0;
      overflow: hidden;
      img {
        border-radius: ${props => props.isAvatar ? '50%' : 0};
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .right-content {
      width: 50%;
      .desc {
        font-size: 13px;
        color: #606060;
      }
      .upload {
        color: #1162cc;
        cursor: pointer;
        margin: 5px 0 0 0;
      }
    }
  }
`;
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/brand/childCpn/brandItem/index.tsx


const BrandItem = props => {
  const {
    title,
    label,
    img,
    desc,
    uploadHandle,
    operator,
    isAvatar
  } = props;
  const uploadClick = () => {
    uploadHandle();
  };
  return /*#__PURE__*/react.createElement(BrandItemWrapper, {
    isAvatar: isAvatar
  }, /*#__PURE__*/react.createElement("div", {
    className: "title"
  }, title), /*#__PURE__*/react.createElement("div", {
    className: "label"
  }, label), /*#__PURE__*/react.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "img-container"
  }, img), /*#__PURE__*/react.createElement("div", {
    className: "right-content"
  }, /*#__PURE__*/react.createElement("p", {
    className: "desc"
  }, desc), /*#__PURE__*/react.createElement("div", {
    className: "upload",
    onClick: e => uploadClick()
  }, operator))));
};
/* harmony default export */ var brandItem = (/*#__PURE__*/(0,react.memo)(BrandItem));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PictureOutlined.js + 1 modules
var PictureOutlined = __webpack_require__(99562);
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/brand/childCpn/avatarUpload/style.tsx

const AvatarUploadWrapper = styled_components_browser_esm/* default */.ZP.div`
  .input-container {
    width: 100%;
    height: ${400 / 40}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eeeeee;
    input {
      width: 100%;
      height: 100%;
      opacity: 0;
      position: absolute;
      cursor: pointer;
    }
    .msg-tip {
      display: flex;
      align-items: center;
      flex-direction: column-reverse;
      .img-icon {
        svg {
          width: ${70 / 40}rem;
          height: ${70 / 40}rem;
          color: #cc0101;
        }
      }
      .tip {
        font-size: ${24 / 40}rem;
        letter-spacing: 5px;
        margin: ${30 / 40}rem 0 0 0;
      }
    }
  }
`;
// EXTERNAL MODULE: ./src/components/customizeUpload/index.tsx + 2 modules
var customizeUpload = __webpack_require__(5366);
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/brand/childCpn/avatarUpload/index.tsx




const AvatarUpload = /*#__PURE__*/(0,react.forwardRef)((props, propsRef) => {
  const [file, setFile] = (0,react.useState)(null);
  const [isShowCropper, setIsShowCropper] = (0,react.useState)(false);
  const uploadRef = (0,react.useRef)(null);
  const fileChange = e => {
    console.log(e.currentTarget.files);
    if (e.currentTarget.files) {
      setFile(e.currentTarget.files[0]);
      setIsShowCropper(true);
    }
  };
  const getCropperFile = async () => {
    return await uploadRef.current.getCropperFile();
  };
  (0,react.useImperativeHandle)(propsRef, () => {
    return {
      getCropperFile: getCropperFile
    };
  });
  return /*#__PURE__*/react.createElement(AvatarUploadWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "upload-outer"
  }, !isShowCropper && /*#__PURE__*/react.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/react.createElement("input", {
    type: "file",
    onChange: e => fileChange(e)
  }), /*#__PURE__*/react.createElement("div", {
    className: "msg-tip"
  }, /*#__PURE__*/react.createElement("p", {
    className: "tip"
  }, "\u8BF7\u9009\u62E9\u56FE\u7247"), /*#__PURE__*/react.createElement(PictureOutlined/* default */.Z, {
    className: "img-icon"
  }))), isShowCropper && /*#__PURE__*/react.createElement(customizeUpload/* default */.Z, {
    file: file,
    imgWidth: 5,
    scale: 1,
    aspectRatio: 1,
    isCircle: false,
    realWidth: 200
    //@ts-ignore
    ,
    ref: uploadRef
  })));
});
/* harmony default export */ var childCpn_avatarUpload = (/*#__PURE__*/(0,react.memo)(AvatarUpload));
// EXTERNAL MODULE: ./src/network/user/index.tsx
var user = __webpack_require__(80854);
// EXTERNAL MODULE: ./src/components/common/imgUpload/index.tsx + 1 modules
var imgUpload = __webpack_require__(46991);
// EXTERNAL MODULE: ./src/network/image/index.tsx
var network_image = __webpack_require__(15908);
// EXTERNAL MODULE: ./src/views/login/store/actionCreators.ts + 1 modules
var store_actionCreators = __webpack_require__(95085);
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/brand/index.tsx












const Brand = () => {
  const [isAvatarModalOpen, setIsAvatarModalOpen] = (0,react.useState)(false);
  const [isShowCover, setIsShowCover] = (0,react.useState)(false);
  const [progress, setProgress] = (0,react.useState)(0);
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  const channel = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['channelReducer', 'channel']);
  });
  const dispatch = (0,es/* useDispatch */.I0)();
  const avatarUpload = (0,react.useRef)(null);
  const uploadAvatar = () => {
    setIsAvatarModalOpen(true);
  };
  const uploadCover = () => {
    setIsShowCover(true);
  };
  //频道头像
  const handleAvatarOk = async () => {
    const file = await avatarUpload.current.getCropperFile();
    let formData = new FormData();
    formData.append('avatar', file);
    let result;
    if (login.userMsg.avatarUrl) {
      result = await (0,user/* updateAvatar */.n1)(login.userMsg.userId, formData, progress => {
        setProgress(progress.loaded / progress.total * 100);
      });
    } else {
      result = await (0,network_channel/* uploadAvatar */.gg)(formData, progress => {
        setProgress(progress.loaded / progress.total * 100);
      });
    }
    if (result.status === 200) {
      dispatch((0,store_actionCreators/* changeUserDetailAction */.ZN)(login.userMsg.userId));
      setIsAvatarModalOpen(false);
    }
  };
  const handleAvatarCancel = () => {
    setIsAvatarModalOpen(false);
  };
  //上传横幅
  const uploadCoverHandle = async res => {
    if (res && res.data && res.data.id) {
      await (0,network_channel/* updateChannel */.pW)(channel.id, {
        banner: `${res.data.id}`
      });
      if (login && login.userMsg && channel && Object.keys(res.data).length !== 0) {
        dispatch((0,actionCreators/* changeChannelAction */.Q)(login.userMsg.userId));
      }
    }
    setIsShowCover(false);
  };
  return /*#__PURE__*/react.createElement(BrandWrapper, null, /*#__PURE__*/react.createElement(brandItem, {
    title: '照片',
    label: '您的个人资料照片会随您的频道一起出现在 YouTube 上的一些地方，例如您的视频和评论旁边',
    desc: '建议使用一张不低于 98 x 98 像素而且大小不超过 4MB 的照片。文件格式为 PNG 或 GIF（不带动画）。请确保您的照片符合《YouTube 社区准则》',
    operator: login.userMsg.avatarUrl ? '更换' : '上传',
    isAvatar: true,
    img: /*#__PURE__*/react.createElement("img", {
      src: login.userMsg.avatarUrl
    }),
    uploadHandle: () => uploadAvatar()
  }), /*#__PURE__*/react.createElement(brandItem, {
    title: '横幅图片',
    label: '此图片将会显示在您频道的顶部',
    desc: '建议使用一张不低于 98 x 98 像素而且大小不超过 4MB 的照片。文件格式为 PNG 或 GIF（不带动画）。请确保您的照片符合《YouTube 社区准则》',
    operator: channel.picUrl ? '更换' : '上传',
    isAvatar: false,
    img: /*#__PURE__*/react.createElement("img", {
      src: channel.picUrl
    }),
    uploadHandle: () => uploadCover()
  }), /*#__PURE__*/react.createElement(modal/* default */.Z, {
    title: "\u81EA\u5B9A\u4E49\u56FE\u7247",
    open: isAvatarModalOpen,
    destroyOnClose: true,
    onOk: handleAvatarOk,
    width: '65%',
    onCancel: handleAvatarCancel
  }, /*#__PURE__*/react.createElement(childCpn_avatarUpload
  //@ts-ignore
  , {
    ref: avatarUpload
  }), /*#__PURE__*/react.createElement(es_progress/* default */.Z, {
    percent: parseFloat(progress.toFixed(1))
  })), isShowCover && /*#__PURE__*/react.createElement(imgUpload/* default */.Z, {
    isCustom: false,
    aspectRatio: 6.2,
    realWidth: 1000,
    isShow: isShowCover,
    handleOk: res => uploadCoverHandle(res),
    handleCancel: () => setIsShowCover(false),
    network: network_image/* uploadImage */.I,
    uploadName: 'file'
  }));
};
/* harmony default export */ var brand = (/*#__PURE__*/(0,react.memo)(Brand));
;// CONCATENATED MODULE: ./src/assets/html/other/video/videoIcon.tsx

const VideoIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope tp-yt-iron-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope tp-yt-iron-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z",
    className: "style-scope tp-yt-iron-icon"
  }))));
};
/* harmony default export */ var videoIcon = (/*#__PURE__*/(0,react.memo)(VideoIcon));
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/layout/style.tsx

const LayoutWrapper = styled_components_browser_esm/* default */.ZP.div`
  background-color: #ffffff;
  .label {
    font-family: 'Roboto', 'Noto', sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    font-size: ${20 / 40}rem;
  }
  .tip {
    font-family: 'Roboto', 'Noto', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-size: ${15 / 40}rem;
  }
  .trailer-outer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e5e5e5;
    padding: ${20 / 40}rem ${20 / 40}rem ${20 / 40}rem 0;
    margin: ${20 / 40}rem 0 ${20 / 40}rem 0;
    border-radius: 5px;
    .left-content {
      display: flex;
      align-items: center;
      .video-container {
        width: ${45 / 40}rem;
        height: ${45 / 40}rem;
        background-color: #e9e9e9;
        margin: 0 ${16 / 40}rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: ${5 / 40}rem;
      }
      &.trailer-start {
        align-items: flex-start;
        width: 100%;
        .trailer {
          margin: ${20 / 40}rem 0 0 0;
          width: 90%;
          display: flex;
          align-items: flex-start;
          .trailer-img-container {
            width: ${280 / 40}rem;
            img {
              width: 100%;
            }
          }
          .trailer-video-name {
            width: 76%;
            margin: 0 0 0 ${25 / 40}rem;
          }
        }
      }
    }
    .right-content {
      color: #065fd4;
      cursor: pointer;
      white-space: nowrap;
    }
  }
`;
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/layout/childCpn/videoSearch/style.tsx

const VideoSearchWrapper = styled_components_browser_esm/* default */.ZP.div`
  .search-container {
    display: flex;
    align-items: center;
    .user-self,
    .video-lib {
      flex: 1;
    }
  }
  .video-list {
    height: ${400 / 40}rem;
    padding: ${24 / 40}rem 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    & > li {
      padding: ${18 / 40}rem;
      border: 1px solid #e5e5e5;
      margin: 0 0 ${24 / 40}rem 0;
      width: ${220 / 40}rem;
      border-radius: ${4 / 40}rem;
      &:hover {
        border: 1px solid #065fd4;
        cursor: pointer;
      }
      &.active {
        border: 1px solid #065fd4;
      }
      .video-cover {
        img {
          width: 100%;
        }
      }
      .video-name {
        margin: ${15 / 40}rem 0 0 0;
        font-size: ${18 / 40}rem;
        height: ${50 / 40}rem;
      }
    }
  }
`;
// EXTERNAL MODULE: ./src/network/video/index.tsx
var video = __webpack_require__(13032);
// EXTERNAL MODULE: ./src/components/holder/index.tsx + 1 modules
var holder = __webpack_require__(45889);
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/layout/childCpn/videoSearch/index.tsx






const {
  Search
} = input["default"];
const VideoSearch = props => {
  const {
    isTrailer,
    updateVideo
  } = props;
  const [userInp, setUserInp] = (0,react.useState)('');
  const [userVideo, setUserVideo] = (0,react.useState)([]);
  const [userVideoCount, setUserVideoCount] = (0,react.useState)(0);
  const [currentIndex, setCurrentIndex] = (0,react.useState)(-1);
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  const getUserVideoHandle = async (keyword, offset, limit) => {
    const result = await (0,video/* getUserVideo */.sf)(login.userMsg.userId, keyword, offset, limit);
    if (result.status === 200) {
      setUserVideo(result.data.list);
      setUserVideoCount(result.data.count);
    }
  };
  const onSearchUserSelf = async value => {
    setUserInp(value);
    await getUserVideoHandle(value, 0, 10);
  };
  const onSearchOther = () => {};
  const changeVideo = async (item, index) => {
    setCurrentIndex(index);
    let obj = {
      [isTrailer ? 'trailer' : 'featured']: item.id
    };
    updateVideo(obj);
  };
  return /*#__PURE__*/react.createElement(VideoSearchWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "search-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "user-self"
  }, /*#__PURE__*/react.createElement(Search, {
    placeholder: "\u641C\u7D22\u60A8\u7684\u89C6\u9891",
    onSearch: (value, event) => onSearchUserSelf(value)
  })), !isTrailer && /*#__PURE__*/react.createElement("div", {
    className: "video-lib"
  }, /*#__PURE__*/react.createElement(Search, {
    placeholder: "\u641C\u7D22\u6574\u7AD9\u7684\u89C6\u9891",
    onSearch: e => onSearchOther()
  }))), /*#__PURE__*/react.createElement("ul", {
    className: "video-list"
  }, userVideo && userVideo.length !== 0 && userVideo.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id,
      onClick: e => changeVideo(item, index),
      className: currentIndex === index ? 'active' : ''
    }, /*#__PURE__*/react.createElement("div", {
      className: "video-cover"
    }, /*#__PURE__*/react.createElement("img", {
      src: item.picUrl,
      alt: item.name
    })), /*#__PURE__*/react.createElement("div", {
      className: "video-name text-nowrap-mul-line"
    }, item.name));
  }), (0,holder/* default */.Z)(userVideo.length, 5, 220)));
};
/* harmony default export */ var videoSearch = (/*#__PURE__*/(0,react.memo)(VideoSearch));
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js + 2 modules
var dropdown = __webpack_require__(16114);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js + 1 modules
var PlusOutlined = __webpack_require__(49101);
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/layout/childCpn/block/style.tsx

const BlockPageWrapper = styled_components_browser_esm/* default */.ZP.div`
  margin: ${20 / 40}rem ${10 / 40}rem ${20 / 40}rem 0;
  width: 90%;
  .block-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header-left {
      .name {
        margin: 0 0 ${8 / 40}rem 0;
      }
      .desc {
        font-size: ${16 / 40}rem;
      }
    }
    .header-right {
      display: flex;
      align-items: center;

      .add {
        cursor: pointer;
        svg {
          color: #065fd4;
        }
      }
      .add-label {
        cursor: pointer;
        color: #065fd4;
        margin: 0 0 0 ${10 / 40}rem;
      }
    }
  }
`;
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/layout/childCpn/block/childCpn/blockList/style.tsx

const BlockListWrapper = styled_components_browser_esm/* default */.ZP.div`
  background-color: #fff;
  padding: ${15 / 40}rem 0;
  .block-list {
    & > li {
      padding: ${8 / 40}rem ${25 / 40}rem;
      white-space: nowrap;
      &:hover {
        background-color: #f9f9f9;
        cursor: pointer;
      }
    }
  }
`;
// EXTERNAL MODULE: ./src/network/block/index.tsx
var network_block = __webpack_require__(76872);
// EXTERNAL MODULE: ./src/constant/block.ts
var constant_block = __webpack_require__(3405);
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/layout/childCpn/block/childCpn/blockList/childCpn/playlist/style.tsx

const PlaylistWrapper = styled_components_browser_esm/* default */.ZP.div`
  .search-container {
    display: flex;
    align-items: center;
    .user-self,
    .video-lib {
      flex: 1;
    }
  }
`;
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/layout/childCpn/block/childCpn/blockList/childCpn/playlist/index.tsx



const {
  Search: playlist_Search
} = input["default"];
const Playlist = () => {
  const [userInp, setUserInp] = (0,react.useState)('');
  const onSearchUserSelf = async value => {
    setUserInp(value);
  };
  const onSearchOther = () => {};
  return /*#__PURE__*/react.createElement(PlaylistWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "search-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "user-self"
  }, /*#__PURE__*/react.createElement(playlist_Search, {
    placeholder: "\u641C\u7D22\u60A8\u7684\u64AD\u653E\u5217\u8868",
    onSearch: async (value, event) => {
      await onSearchUserSelf(value);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "video-lib"
  }, /*#__PURE__*/react.createElement(playlist_Search, {
    placeholder: "\u641C\u7D22\u6574\u7AD9\u7684\u64AD\u653E\u5217\u8868",
    onSearch: e => {
      onSearchOther();
    }
  }))));
};
/* harmony default export */ var playlist = (/*#__PURE__*/(0,react.memo)(Playlist));
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/layout/childCpn/block/childCpn/blockList/index.tsx






const BlockList = props => {
  const {
    addBlock
  } = props;
  const [block, setBlock] = (0,react.useState)([]);
  const [isShowPlay, setIsShowPlay] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    (0,network_block/* getAllBlock */.cS)().then(data => {
      if (data.status === 200) {
        setBlock(data.data);
      }
    });
  }, []);
  const confirmHandle = () => {
    setIsShowPlay(false);
  };
  const cancelHandle = () => {
    setIsShowPlay(false);
  };
  const addBlockHandle = item => {
    console.log(item);
    if (item.name === constant_block/* SINGLE_PLAYLIST */.dh) {
      setIsShowPlay(true);
    } else if (item.name === constant_block/* UPLOADED_VIDEO */.tn || item.name === constant_block/* HOT_VIDEO */.Yd) {
      (0,network_block/* userAddBlock */.VA)(item.id).then(data => {
        if (data.status === 200) {
          addBlock();
        }
      });
    } else if (item.name === constant_block/* CREATED_PLAYLIST */.UE) {
      (0,network_block/* userAddBlock */.VA)(item.id).then(data => {
        if (data.status === 200) {
          addBlock();
        }
      });
    } else if (item.name === constant_block/* SUB_CHANNEL */.Bt) {
      (0,network_block/* userAddBlock */.VA)(item.id).then(data => {
        if (data.status === 200) {
          addBlock();
        }
      });
    } else if (item.name === constant_block/* WONDER_CHANNEL */.cA) {
      (0,network_block/* userAddBlock */.VA)(item.id).then(data => {
        if (data.status === 200) {
          addBlock();
        }
      });
    }
  };
  return /*#__PURE__*/react.createElement(BlockListWrapper, null, /*#__PURE__*/react.createElement("ul", {
    className: "block-list"
  }, block && block.length !== 0 && block.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id,
      onClick: e => addBlockHandle(item)
    }, item.name);
  })), /*#__PURE__*/react.createElement(modal/* default */.Z, {
    title: "\u9009\u62E9\u64AD\u653E\u5217\u8868",
    cancelText: '取消',
    okText: '确定',
    open: isShowPlay,
    onOk: confirmHandle,
    maskClosable: false,
    destroyOnClose: true,
    width: '60%',
    onCancel: cancelHandle
  }, isShowPlay && /*#__PURE__*/react.createElement(playlist, null)));
};
/* harmony default export */ var blockList = (/*#__PURE__*/(0,react.memo)(BlockList));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MoreOutlined.js + 1 modules
var MoreOutlined = __webpack_require__(92977);
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/layout/childCpn/block/childCpn/userBlockList/style.tsx

const UserBlockListWrapper = styled_components_browser_esm/* default */.ZP.div`
  margin: ${20 / 40}rem 0 0 0;
  .user-block-list {
    & > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #e5e5e5;
      margin: 0 0 ${20 / 40}rem 0;
      padding: ${17 / 40}rem ${20 / 40}rem;
      border-radius: 4px;
      .left-container {
        .layout-icon {
          width: 10%;
        }
        .block {
          .block-name {
            font-size: ${18 / 40}rem;
            color: #0d0d0d;
            margin: 0 0 ${13 / 40}rem 0;
          }
          .block-desc {
            font-size: ${16 / 40}rem;
            color: #606060;
          }
        }
      }
    }
  }
`;
// EXTERNAL MODULE: ./src/components/common/emptyHolder/index.tsx + 1 modules
var emptyHolder = __webpack_require__(34651);
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/layout/childCpn/block/childCpn/userBlockList/index.tsx






const UserBlockList = () => {
  const [block, setBlock] = (0,react.useState)([]);
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  (0,react.useEffect)(() => {
    if (login && login.userMsg) {
      (0,network_block/* getUserBlock */.Ds)(login.userMsg.userId).then(data => {
        if (data.status === 200) {
          setBlock(data.data);
        }
      });
    }
  }, [login]);
  return /*#__PURE__*/react.createElement(UserBlockListWrapper, null, /*#__PURE__*/react.createElement("ul", {
    className: "user-block-list"
  }, block && block.length !== 0 && block.map(item => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react.createElement("div", {
      className: "left-container"
    }, /*#__PURE__*/react.createElement("div", {
      className: "layout-icon"
    }, " "), /*#__PURE__*/react.createElement("div", {
      className: "block"
    }, /*#__PURE__*/react.createElement("div", {
      className: "block-name"
    }, item.name), /*#__PURE__*/react.createElement("div", {
      className: "block-desc"
    }, item.description))), /*#__PURE__*/react.createElement("div", {
      className: "right-container"
    }, /*#__PURE__*/react.createElement(MoreOutlined/* default */.Z, null)));
  }), block && block.length == 0 && /*#__PURE__*/react.createElement(emptyHolder/* default */.Z, {
    msg: '请添加板块，添加后在您的首页显示',
    padding: 70
  })));
};
/* harmony default export */ var userBlockList = (/*#__PURE__*/(0,react.memo)(UserBlockList));
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/layout/childCpn/block/index.tsx






const BlockPage = () => {
  const [keyIndex, setKeyIndex] = (0,react.useState)(1);
  const addBlockHandle = () => {
    setKeyIndex(keyIndex + 1);
  };
  return /*#__PURE__*/react.createElement(BlockPageWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "block-header"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header-left"
  }, /*#__PURE__*/react.createElement("div", {
    className: "name"
  }, "\u7CBE\u9009\u677F\u5757"), /*#__PURE__*/react.createElement("div", {
    className: "desc"
  }, "\u81EA\u5B9A\u4E49\u9891\u9053\u9996\u9875\u7684\u5E03\u5C40")), /*#__PURE__*/react.createElement("div", {
    className: "header-right"
  }, /*#__PURE__*/react.createElement("div", {
    className: "add-icon"
  }, /*#__PURE__*/react.createElement(PlusOutlined/* default */.Z, {
    className: "add"
  })), /*#__PURE__*/react.createElement(dropdown/* default */.Z, {
    overlayClassName: 'profile-drop-style',
    placement: 'topLeft',
    trigger: ['click'],
    overlay: /*#__PURE__*/react.createElement(blockList, {
      addBlock: () => addBlockHandle()
    })
  }, /*#__PURE__*/react.createElement("div", {
    className: "add-label"
  }, "\u6DFB\u52A0\u677F\u5757")))), /*#__PURE__*/react.createElement(userBlockList, {
    key: keyIndex
  }));
};
/* harmony default export */ var block = (/*#__PURE__*/(0,react.memo)(BlockPage));
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/childCpn/layout/index.tsx









const Layout = () => {
  const [isModalOpen, setIsModalOpen] = (0,react.useState)(false);
  const [isTrailer, setTrailer] = (0,react.useState)(true);
  const [videoInfo, setVideoInfo] = (0,react.useState)({});
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  const channel = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['channelReducer', 'channel']);
  });
  const dispatch = (0,es/* useDispatch */.I0)();
  console.log(channel);
  //添加预告片
  const addTrailHandle = () => {
    setTrailer(true);
    setIsModalOpen(true);
  };
  //添加推荐视频
  const addRecHandle = () => {
    setTrailer(false);
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    console.log(channel);
    await (0,network_channel/* updateChannel */.pW)(channel.id, videoInfo);
    if (login && login.userMsg && channel && Object.keys(videoInfo).length !== 0) {
      dispatch((0,actionCreators/* changeChannelAction */.Q)(login.userMsg.userId));
    }
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const changeVideo = async obj => {
    console.log(obj);
    setVideoInfo(obj);
  };
  return /*#__PURE__*/react.createElement(LayoutWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "label"
  }, "\u4E3B\u63A8\u89C6\u9891"), /*#__PURE__*/react.createElement("div", {
    className: "tip"
  }, "\u5728\u60A8\u7684\u9891\u9053\u9996\u9875\u9876\u90E8\u6DFB\u52A0\u4E00\u4E2A\u89C6\u9891"), /*#__PURE__*/react.createElement("div", {
    className: "trailer-outer"
  }, /*#__PURE__*/react.createElement("div", {
    className: `left-content ${channel && channel.trailer ? 'trailer-start' : ''}`
  }, /*#__PURE__*/react.createElement("div", {
    className: "video-container"
  }, /*#__PURE__*/react.createElement(videoIcon, null)), /*#__PURE__*/react.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "label"
  }, "\u9891\u9053\u9884\u544A\u7247-\u7528\u6765\u5438\u5F15\u5C1A\u672A\u8BA2\u9605\u7684\u7528\u6237"), /*#__PURE__*/react.createElement("div", {
    className: "tip"
  }, "\u5411\u5C1A\u672A\u8BA2\u9605\u7684\u7528\u6237\u5206\u4EAB\u60A8\u7684\u9891\u9053\u7684\u9884\u89C8"), channel && channel.trailer && /*#__PURE__*/react.createElement("div", {
    className: "trailer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "trailer-img-container"
  }, /*#__PURE__*/react.createElement("img", {
    src: channel.trailer.picUrl
  })), /*#__PURE__*/react.createElement("div", {
    className: "trailer-video-name"
  }, channel.trailer.name)))), /*#__PURE__*/react.createElement("div", {
    className: "right-content",
    onClick: e => addTrailHandle()
  }, !channel || channel && !channel.trailer ? '添加' : '更换')), /*#__PURE__*/react.createElement("div", {
    className: "trailer-outer"
  }, /*#__PURE__*/react.createElement("div", {
    className: `left-content ${channel && channel.trailer ? 'trailer-start' : ''}`
  }, /*#__PURE__*/react.createElement("div", {
    className: "video-container"
  }, /*#__PURE__*/react.createElement(videoIcon, null)), /*#__PURE__*/react.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "label"
  }, "\u7CBE\u9009\u89C6\u9891 - \u7528\u6765\u5438\u5F15\u56DE\u8BBF\u7684\u8BA2\u9605\u8005"), /*#__PURE__*/react.createElement("div", {
    className: "tip"
  }, "\u91CD\u70B9\u63A8\u8350\u4E00\u4E2A\u89C6\u9891\uFF0C\u5438\u5F15\u60A8\u7684\u8BA2\u9605\u8005\u89C2\u770B\u3002"), channel && channel.featured && /*#__PURE__*/react.createElement("div", {
    className: "trailer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "trailer-img-container"
  }, /*#__PURE__*/react.createElement("img", {
    src: channel.featured.picUrl
  })), /*#__PURE__*/react.createElement("div", {
    className: "trailer-video-name"
  }, channel.featured.name)))), /*#__PURE__*/react.createElement("div", {
    className: "right-content",
    onClick: e => addRecHandle()
  }, !channel || channel && !channel.featured ? '添加' : '更换')), /*#__PURE__*/react.createElement(modal/* default */.Z, {
    open: isModalOpen,
    onOk: handleOk,
    cancelText: '取消',
    destroyOnClose: true,
    okText: '确定',
    title: '选择视频',
    width: '65%',
    onCancel: handleCancel
  }, /*#__PURE__*/react.createElement(videoSearch, {
    isTrailer: isTrailer,
    updateVideo: obj => changeVideo(obj)
  })), /*#__PURE__*/react.createElement(block, null));
};
/* harmony default export */ var layout = (/*#__PURE__*/(0,react.memo)(Layout));
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/style.tsx

const CustomizeWrapper = styled_components_browser_esm/* default */.ZP.div`
  .title-tip {
    font-size: ${30 / 40}rem;
    font-weight: bolder;
    padding: ${5 / 40}rem 0 ${5 / 40}rem 0;
  }
  .tab-pub {
    display: flex;
    align-items: flex-start;
    .customize-tabs {
      flex: 1;
    }
    .pub-btn {
      cursor: pointer;
      background-color: #065fd4;
      color: #fff;
      padding: ${5 / 40}rem ${15 / 40}rem;
      border-radius: ${6 / 40}rem;
    }
  }
`;
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/index.tsx






const Customize = () => {
  const onChange = () => {};
  return /*#__PURE__*/react.createElement(CustomizeWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "title-tip"
  }, "\u9891\u9053\u81EA\u5B9A\u4E49"), /*#__PURE__*/react.createElement("div", {
    className: "tab-pub"
  }, /*#__PURE__*/react.createElement("div", {
    className: "customize-tabs"
  }, /*#__PURE__*/react.createElement(tabs/* default */.Z, {
    defaultActiveKey: "1",
    onChange: onChange,
    items: [{
      label: `布局`,
      key: '1',
      children: /*#__PURE__*/react.createElement(layout, null)
    }, {
      label: `品牌`,
      key: '2',
      children: /*#__PURE__*/react.createElement(brand, null)
    }, {
      label: `基本信息`,
      key: '3',
      children: /*#__PURE__*/react.createElement(basic, null)
    }]
  }))));
};
/* harmony default export */ var customize = (/*#__PURE__*/(0,react.memo)(Customize));

/***/ })

}]);
//# sourceMappingURL=666de548831405d0dc63.bundle.js.map