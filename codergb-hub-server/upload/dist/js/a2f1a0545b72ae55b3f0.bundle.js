"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[5376],{

/***/ 68114:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ userIcon; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/assets/html/user/style.tsx

const UserIconWrapper = styled_components_browser_esm/* default */.ZP.div`
  width: ${36 / 40}rem;
  svg,
  g {
    color: #065fd4;
  }
`;
;// CONCATENATED MODULE: ./src/assets/html/user/userIcon.tsx


const UserIcon = () => {
  return /*#__PURE__*/react.createElement(UserIconWrapper, null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,3c4.96,0,9,4.04,9,9 c0,1.42-0.34,2.76-0.93,3.96c-1.53-1.72-3.98-2.89-7.38-3.03C14.57,12.6,16,10.97,16,9c0-2.21-1.79-4-4-4C9.79,5,8,6.79,8,9 c0,1.97,1.43,3.6,3.31,3.93c-3.4,0.14-5.85,1.31-7.38,3.03C3.34,14.76,3,13.42,3,12C3,7.04,7.04,3,12,3z M9,9c0-1.65,1.35-3,3-3 s3,1.35,3,3c0,1.65-1.35,3-3,3S9,10.65,9,9z M12,21c-3.16,0-5.94-1.64-7.55-4.12C6.01,14.93,8.61,13.9,12,13.9 c3.39,0,5.99,1.03,7.55,2.98C17.94,19.36,15.16,21,12,21z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var userIcon = (/*#__PURE__*/(0,react.memo)(UserIcon));

/***/ }),

/***/ 45859:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ header; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/antd/es/badge/index.js + 4 modules
var badge = __webpack_require__(79166);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 8 modules
var modal = __webpack_require__(48889);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js + 2 modules
var dropdown = __webpack_require__(16114);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(76570);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/VideoCameraOutlined.js + 1 modules
var VideoCameraOutlined = __webpack_require__(94291);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MailOutlined.js + 1 modules
var MailOutlined = __webpack_require__(64302);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/components/header/style.tsx

const HeaderWrapper = styled_components_browser_esm/* default */.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LeftContent = styled_components_browser_esm/* default */.ZP.div`
  display: flex;
  align-items: center;
  .logo-outer {
    padding: 0 0 0 ${20 / 40}rem;
    img {
      width: ${120 / 40}rem;
    }
  }
`;
const CenterContent = styled_components_browser_esm/* default */.ZP.div`
  display: flex;
  align-items: center;
  width: ${640 / 40}rem;
  .search-outer {
    display: flex;
    align-items: center;
    border: 1px solid #cccccc;
    height: ${56 / 40}rem;
    width: 100%;
    input {
      padding: 2px 6px;
      height: 100%;
      width: 90%;
    }
    .search-icon {
      padding: 0 ${30 / 40}rem;
      border-left: 1px solid #cccccc;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f8f8f8;
      cursor: pointer;
      &:hover {
        background-color: #f0f0f0;
      }
      svg {
        width: ${24 / 40}rem;
        height: ${24 / 40}rem;
      }
    }
  }
`;
const RightContent = styled_components_browser_esm/* default */.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .tip {
    padding: 0 ${46 / 40}rem;
  }
  .upload,
  .tip,
  .user {
    display: flex;
    align-items: center;
    svg {
      width: ${30 / 40}rem;
      height: ${30 / 40}rem;
    }
  }
  .user {
    background-color: #fff;
    padding: 0 ${30 / 40}rem 0 0;
    .logout {
      display: flex;
      align-items: center;
      border: 1px solid #065fd4;
      padding: 0 ${10 / 40}rem;
      height: ${48 / 40}rem;
      border-radius: 2px;
      cursor: pointer;
      svg {
        color: #065fd4;
      }
      .label {
        font-size: ${20 / 40}rem;
        margin: 0 0 0 ${15 / 40}rem;
        color: #065fd4;
      }
    }
    .login-status {
      width: ${50 / 40}rem;
      height: ${50 / 40}rem;
      position: relative;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      img {
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .no-avatar-container {
      width: ${50 / 40}rem;
      height: ${50 / 40}rem;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
;// CONCATENATED MODULE: ./src/assets/img/logo.png
var logo_namespaceObject = __webpack_require__.p + "images/4d50147b5563f7770d3f.png";
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloudUploadOutlined.js + 1 modules
var CloudUploadOutlined = __webpack_require__(62298);
// EXTERNAL MODULE: ./node_modules/antd/es/progress/index.js + 10 modules
var progress = __webpack_require__(54458);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var spin = __webpack_require__(11382);
;// CONCATENATED MODULE: ./src/components/header/childCpn/uploadVideo/style.tsx

const UploadVideoWrapper = styled_components_browser_esm/* default */.ZP.div`
  .upload {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    position: relative;
    padding: ${80 / 40}rem;
    width: 100%;
    .file-inp {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      width: 100%;
      height: 100%;
    }
    .select-btn {
      font-size: ${20 / 40}rem;
      background-color: #065fd4;
      color: #fff;
      padding: ${10 / 40}rem ${20 / 40}rem;
      border-radius: 4px;
      cursor: pointer;
    }
    .upload-icon {
      svg {
        width: ${50 / 40}rem;
        height: ${50 / 40}rem;
        color: #909090;
      }
    }
    .upload-label {
      margin: ${30 / 40}rem 0;
    }
  }
  .video-upload-loading {
    display: flex;
    align-items: center;
    margin: 10px 0 0 0;
    .video-upload-loading-icon {
      display: flex;
      align-items: center;
      span {
        font-size: ${26 / 40}rem;
      }
    }
    .label {
      font-size: ${14 / 40}rem;
      margin: 0 0 0 20px;
    }
  }
`;
// EXTERNAL MODULE: ./src/network/video/index.tsx
var video = __webpack_require__(13032);
// EXTERNAL MODULE: ./src/constant/host.ts
var host = __webpack_require__(22139);
// EXTERNAL MODULE: ./node_modules/spark-md5/spark-md5.js
var spark_md5 = __webpack_require__(8322);
var spark_md5_default = /*#__PURE__*/__webpack_require__.n(spark_md5);
;// CONCATENATED MODULE: ./src/network/websocket/mergeVideo.tsx
async function socketOpen(websocket) {
  return await new Promise((resolve, reject) => {
    websocket.onopen = function () {
      console.log('socket 建立成功');
      websocket.send('open');
      resolve(true);
    };
  });
}
async function getSocketMsg(websocket, handle) {
  return await new Promise((resolve, reject) => {
    websocket.onmessage = function (e) {
      const res = JSON.parse(e.data);
      const percent = res.percent ? res.percent : 0;
      if (res.isProgress === false) {
        resolve(res.id);
      } else {
        handle(percent);
      }
    };
  });
}
async function socketClose(websocket, videoId) {
  return await new Promise((resolve, reject) => {
    websocket.onclose = function () {
      console.log('socket 关闭');
      resolve({
        status: 200,
        data: {
          id: videoId
        }
      });
    };
  });
}

;// CONCATENATED MODULE: ./src/utils/video.tsx
async function getVideoDuration(file) {
  let url = URL.createObjectURL(file);
  let oVideo = document.createElement('video');
  oVideo.setAttribute('src', url);
  return new Promise((resolve, reject) => {
    oVideo.oncanplay = () => {
      resolve(oVideo.duration * 1000);
    };
  });
}
;// CONCATENATED MODULE: ./src/utils/shard.tsx





const chunkSize = 1024 * 1000;
async function getFileHash(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function (e) {
      if (e.target) {
        let buffer = e.target.result;
        let spark = new (spark_md5_default()).ArrayBuffer();
        let HASH;
        let suffix;
        if (buffer) {
          spark.append(buffer);
          HASH = spark.end();
          suffix = file.name.substring(file.name.lastIndexOf('.') + 1);
          resolve({
            buffer,
            HASH,
            suffix
          });
        }
      }
    };
  });
}
async function chunkHandle(HASH, index, file, name, total, type, uploadedSize, dest, dt, fn, handle) {
  try {
    fn(uploadedSize);
    if (uploadedSize > total) {
      let videoId = '';
      let params = `?dest=${dest}&hash=${HASH}&originalname=${name}&type=${type}&total=${total}&dt=${dt}`;
      let websocket = new WebSocket(`${host/* WEBSOCKET_HOST_NAME */.i}/video/merge${params}`);
      await socketOpen(websocket);
      videoId = await getSocketMsg(websocket, handle);
      return await socketClose(websocket, videoId);
    }
    let end = index * chunkSize + chunkSize;
    if (end > total - 1) {
      end = total - 1;
    }
    let blobFile = file.slice(index * chunkSize, end);
    let formData = new FormData();
    let fileBlob = new File([blobFile], name, {
      type: type
    });
    formData.append('index', `${index}`);
    formData.append('hash', HASH);
    formData.append('name', name);
    formData.append('size', `${total}`);
    formData.append('type', type);
    formData.append('chunkSize', `${chunkSize}`);
    formData.append('uploadedSize', `${uploadedSize}`);
    formData.append('video', fileBlob);
    const result = await (0,video/* uploadVideo */.$x)(formData);
    if (result.status === 200) {
      const res = await chunkHandle(HASH, index + 1, file, name, total, type, result.data.uploadedSize, result.data.dest, dt, fn, handle);
      return res;
    }
  } catch (e) {
    console.log(e);
  }
}
async function shardUtils(file, fn, handle) {
  const {
    name,
    size,
    type
  } = file;
  let index = 0;
  const fileData = await getFileHash(file);
  const dt = await getVideoDuration(file);
  return await chunkHandle(fileData.HASH, index, file, name, size, type, 0, '', dt, fn, handle);
}

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RocketOutlined.js + 1 modules
var RocketOutlined = __webpack_require__(50161);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 14 modules
var input = __webpack_require__(50817);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 30 modules
var es_select = __webpack_require__(42239);
;// CONCATENATED MODULE: ./src/components/header/childCpn/uploadVideo/childCpn/videoInfo/style.tsx

const VideoInfoWrapper = styled_components_browser_esm/* default */.ZP.div`
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;
const style_LeftContent = styled_components_browser_esm/* default */.ZP.div`
  height: ${480 / 40}rem;
  overflow-y: scroll;
  width: 60%;
  padding: 0 ${20 / 40}rem 0 0;
  p {
    margin: 0;
    padding: 0;
  }
  .title-tip {
    font-weight: bolder;
    font-size: ${26 / 40}rem;
    margin: 0 0 ${10 / 40}rem;
  }
  .ant-input-textarea-show-count {
    .ant-input {
      border-radius: 4px;
    }
  }
  .abbreviation {
    font-family: 'Roboto', 'Noto', sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    font-size: ${20 / 40}rem;
    line-height: ${30 / 40}rem;
    margin: ${10 / 40}rem 0 ${10 / 40}rem 0;
  }
  .desc {
    font-family: 'Roboto', 'Noto', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-size: ${18 / 40}rem;
    line-height: ${20 / 40}rem;
    padding-bottom: 8px;
    color: #606060;
  }
  .abbreviation-upload-outer {
    display: flex;
    align-items: center;
    .delete-abb {
      width: ${145 / 40}rem;
      height: ${145 / 40}rem;
      background-color: rgba(238, 238, 238, 0.7);
      border-left: 1px solid #f2f2f2;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: #e3e3e3;
      }
      & > span {
        svg {
          font-size: ${40 / 40}rem;
          color: #cc0101;
          cursor: pointer;
        }
      }
    }
  }
  .abbreviation-upload {
    width: ${280 / 40}rem;
    height: ${145 / 40}rem;
    margin: ${15 / 40}rem 0;
    background-color: #eeeeee;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    & > img {
      width: 100%;
    }
    & > span {
      svg {
        display: inline-block;
        width: ${40 / 40}rem;
        height: ${40 / 40}rem;
        font-size: ${30 / 40}rem;
        color: #cc0101;
      }
    }
  }
  .playlist {
    width: ${300 / 40}rem;
  }
`;
const style_RightContent = styled_components_browser_esm/* default */.ZP.div`
  width: 38%;
  height: ${440 / 40}rem;
  video {
    margin: ${46 / 40}rem 0 0 0;
    width: 100%;
    height: ${312 / 40}rem;
    object-fit: contain;
  }
  .video-info {
    width: 100%;
    margin: ${20 / 40}rem 0 0 0;
    border-radius: 5px;
    padding: ${15 / 40}rem ${8 / 40}rem;
    background-color: #f9f9f9;
    .label,
    .value {
      font-size: ${16 / 40}rem;
    }
  }
`;
// EXTERNAL MODULE: ./src/components/customizeUpload/index.tsx + 2 modules
var customizeUpload = __webpack_require__(5366);
// EXTERNAL MODULE: ./src/network/image/index.tsx
var network_image = __webpack_require__(15908);
// EXTERNAL MODULE: ./src/network/playlist/index.tsx
var network_playlist = __webpack_require__(33422);
// EXTERNAL MODULE: ./src/network/index.ts + 1 modules
var network = __webpack_require__(16398);
;// CONCATENATED MODULE: ./src/network/tag/index.tsx

async function getAllTag(offset, limit) {
  return await network/* default */.Z.get({
    url: '/tag/all',
    params: {
      offset,
      limit
    }
  });
}
// EXTERNAL MODULE: ./src/network/category/index.tsx
var category = __webpack_require__(14638);
// EXTERNAL MODULE: ./src/hook/useLoginMsg/index.tsx
var useLoginMsg = __webpack_require__(46139);
;// CONCATENATED MODULE: ./src/components/header/childCpn/uploadVideo/childCpn/videoInfo/index.tsx










const {
  TextArea
} = input["default"];
const {
  Option
} = es_select["default"];
const VideoInfo = /*#__PURE__*/(0,react.forwardRef)((props, propsRef) => {
  const {
    videoURL,
    videoName
  } = props;
  const [isModalOpen, setIsModalOpen] = (0,react.useState)(false);
  const [file, setFile] = (0,react.useState)(null);
  const [isShowAbbreviation, setIsShowAbbreviation] = (0,react.useState)(true);
  const [imgURL, setImgURL] = (0,react.useState)('');
  const [imgID, setImgID] = (0,react.useState)('');
  const login = (0,useLoginMsg/* useLoginMsg */.y)();
  // 播放列表
  const [playlist, setPlaylist] = (0,react.useState)([]);
  const uploadRef = (0,react.useRef)(null);
  // 标签
  const [tag, setTag] = (0,react.useState)([]);
  // 分类
  const [cate, setCate] = (0,react.useState)([]);

  // 创建视频时传的参数
  const [title, setTitle] = (0,react.useState)('');
  const [desc, setDesc] = (0,react.useState)('');
  const [playlistParam, setPlaylistParam] = (0,react.useState)('2');
  const [tagParam, setTagParam] = (0,react.useState)([]);
  const [cateParam, setCateParam] = (0,react.useState)('1');
  (0,react.useImperativeHandle)(propsRef, () => {
    return {
      videoId: '',
      imgId: imgID,
      title,
      desc,
      playlist: playlistParam,
      tag: tagParam,
      cate: cateParam,
      file: null
    };
  }, [imgID, title, desc, playlistParam, cateParam, tagParam.length]);
  (0,react.useEffect)(() => {
    (0,network_playlist/* getUserPlaylist */.N3)(login.userMsg.userId, 0, 10).then(data => {
      if (data.status === 200) {
        setPlaylist(data.data.list);
      }
    });
  }, []);
  (0,react.useEffect)(() => {
    getAllTag(0, 50).then(data => {
      if (data.status === 200) {
        setTag(data.data.list);
      }
    });
  }, []);
  (0,react.useEffect)(() => {
    (0,category/* getAllCate */.I)(0, 50).then(data => {
      if (data.status === 200) {
        setCate(data.data.list);
      }
    });
  }, []);
  const abbreviationHandle = e => {
    if (e.currentTarget.files) {
      setFile(e.currentTarget.files[0]);
      setIsModalOpen(true);
    }
  };
  const handleOk = async () => {
    const file = await uploadRef.current.getCropperFile();
    const formData = new FormData();
    formData.append('file', file);
    const result = await (0,network_image/* uploadImage */.I)(formData, () => {});
    if (result.status === 200) {
      setImgURL(result.data.picUrl);
      setImgID(result.data.id);
      setIsShowAbbreviation(false);
      setIsModalOpen(false);
    } else {}
  };
  const handleCancel = () => {};
  // 删除缩略图
  const deleteAbb = async () => {
    const result = await (0,network_image/* deleteImage */.a)(imgID);
    if (result.status === 200) {
      setImgURL('');
      setIsShowAbbreviation(true);
    }
  };
  // 选择播放列表
  const selectPlaylistHandle = e => {
    setPlaylistParam(e);
  };
  // 选择标签
  const selectTagHandle = e => {
    setTagParam(e);
  };
  // 选择分类
  const selectCateHandle = e => {
    setCateParam(e);
  };
  // 视频title
  const titleChangeHandle = e => {
    console.log(e.currentTarget.value);
    setTitle(e.currentTarget.value);
  };
  // 视频内容
  const contentChangeHandle = e => {
    setDesc(e.currentTarget.value);
  };
  return /*#__PURE__*/react.createElement(VideoInfoWrapper, null, /*#__PURE__*/react.createElement(style_LeftContent, null, /*#__PURE__*/react.createElement("p", {
    className: "title-tip"
  }, "\u8BE6\u7EC6\u4FE1\u606F"), /*#__PURE__*/react.createElement(TextArea, {
    rows: 4,
    placeholder: "\u8BF7\u8F93\u5165\u6807\u9898",
    maxLength: 100,
    showCount: true,
    onChange: e => {
      titleChangeHandle(e);
    }
  }), /*#__PURE__*/react.createElement(TextArea, {
    rows: 4,
    placeholder: "\u5411\u89C2\u4F17\u4ECB\u7ECD\u60A8\u7684\u89C6\u9891",
    maxLength: 500,
    showCount: true,
    onChange: e => {
      contentChangeHandle(e);
    }
  }), /*#__PURE__*/react.createElement("p", {
    className: "abbreviation"
  }, "\u7F29\u7565\u56FE"), /*#__PURE__*/react.createElement("p", {
    className: "desc"
  }, "\u8BF7\u4E0A\u4F20\u4E00\u5F20\u53EF\u5C55\u793A\u60A8\u89C6\u9891\u5185\u5BB9\u7684\u56FE\u7247\u3002\u597D\u7684\u7F29\u7565\u56FE\u80FD\u8131\u9896\u800C\u51FA\uFF0C\u5438\u5F15\u89C2\u770B\u8005\u7684\u773C\u7403"), /*#__PURE__*/react.createElement("div", {
    className: "abbreviation-upload-outer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "abbreviation-upload"
  }, isShowAbbreviation && /*#__PURE__*/react.createElement("input", {
    type: "file",
    onChange: e => {
      abbreviationHandle(e);
    }
  }), isShowAbbreviation && /*#__PURE__*/react.createElement(CloudUploadOutlined/* default */.Z, null), !isShowAbbreviation && /*#__PURE__*/react.createElement("img", {
    src: imgURL,
    alt: "\u7F29\u7565\u56FE"
  }), /*#__PURE__*/react.createElement(modal/* default */.Z, {
    title: "\u7F29\u7565\u56FE\u4E0A\u4F20",
    cancelText: '取消',
    okText: '确定',
    open: isModalOpen,
    destroyOnClose: true,
    onOk: handleOk,
    width: '70%',
    onCancel: handleCancel
  }, isModalOpen && /*#__PURE__*/react.createElement(customizeUpload/* default */.Z, {
    file: file,
    imgWidth: 7,
    scale: 1.95,
    aspectRatio: 1.95,
    isCircle: false,
    realWidth: 300
    // @ts-expect-error
    ,
    ref: uploadRef
  }))), !isShowAbbreviation && /*#__PURE__*/react.createElement("div", {
    className: "delete-abb",
    title: '删除缩略图',
    onClick: async e => {
      await deleteAbb();
    }
  }, /*#__PURE__*/react.createElement(RocketOutlined/* default */.Z, null))), /*#__PURE__*/react.createElement("p", {
    className: "abbreviation"
  }, "\u64AD\u653E\u5217\u8868"), /*#__PURE__*/react.createElement("p", {
    className: "desc"
  }, "\u5C06\u60A8\u7684\u89C6\u9891\u6DFB\u52A0\u5230\u4E00\u4E2A\u6216\u591A\u4E2A\u64AD\u653E\u5217\u8868\u4E2D\u3002\u64AD\u653E\u5217\u8868\u6709\u52A9\u4E8E\u89C2\u770B\u8005\u66F4\u5FEB\u5730\u53D1\u73B0\u60A8\u7684\u5185\u5BB9\u3002"), /*#__PURE__*/react.createElement(es_select["default"], {
    showSearch: true,
    placeholder: "\u8BF7\u9009\u62E9\u64AD\u653E\u5217\u8868",
    className: "playlist",
    optionFilterProp: "children",
    onChange: e => {
      selectPlaylistHandle(e);
    }
  }, playlist && playlist.length !== 0 && playlist.map((item, index) => {
    return /*#__PURE__*/react.createElement(Option, {
      key: item.id,
      value: item.id
    }, item.name);
  })), /*#__PURE__*/react.createElement("p", {
    className: "abbreviation"
  }, "\u6807\u7B7E"), /*#__PURE__*/react.createElement("p", {
    className: "desc"
  }, "\u6807\u7B7E\u53EF\u4EE5\u5E2E\u52A9\u89C2\u770B\u8005\u627E\u5230\u60A8\u7684\u89C6\u9891"), /*#__PURE__*/react.createElement(es_select["default"], {
    showSearch: true,
    placeholder: "\u8BF7\u9009\u62E9\u6807\u7B7E",
    className: "playlist",
    optionFilterProp: "children",
    mode: "multiple",
    onChange: e => {
      selectTagHandle(e);
    }
  }, tag && tag.length !== 0 && tag.map((item, index) => {
    return /*#__PURE__*/react.createElement(Option, {
      key: item.id,
      value: item.id
    }, item.name);
  })), /*#__PURE__*/react.createElement("p", {
    className: "abbreviation"
  }, "\u7C7B\u522B"), /*#__PURE__*/react.createElement("p", {
    className: "desc"
  }, "\u5C06\u60A8\u7684\u89C6\u9891\u6DFB\u52A0\u5230\u67D0\u4E2A\u7C7B\u522B\u4E2D\uFF0C\u65B9\u4FBF\u89C2\u770B\u8005\u627E\u5230\u5B83"), /*#__PURE__*/react.createElement(es_select["default"], {
    showSearch: true,
    placeholder: "\u8BF7\u9009\u62E9\u5206\u7C7B",
    className: "playlist",
    optionFilterProp: "children",
    onChange: e => {
      selectCateHandle(e);
    }
  }, cate && cate.length !== 0 && cate.map((item, index) => {
    return /*#__PURE__*/react.createElement(Option, {
      key: item.id,
      value: item.id
    }, item.name);
  }))), /*#__PURE__*/react.createElement(style_RightContent, null, /*#__PURE__*/react.createElement("video", {
    controls: true,
    src: videoURL
  }, ' '), /*#__PURE__*/react.createElement("div", {
    className: "video-info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "label"
  }, "\u6587\u4EF6\u540D"), /*#__PURE__*/react.createElement("div", {
    className: "value"
  }, videoName))));
});
/* harmony default export */ var videoInfo = (/*#__PURE__*/(0,react.memo)(VideoInfo));
;// CONCATENATED MODULE: ./src/components/header/childCpn/uploadVideo/index.tsx






const UploadVideo = /*#__PURE__*/(0,react.forwardRef)((props, propsRef) => {
  const {
    keyIndex
  } = props;
  const [file, setFile] = (0,react.useState)(null);
  //const [childKeyIndex,setChildKeyIndex] = useState<number>(keyIndex);
  const [videoURL, setVideoURL] = (0,react.useState)('');
  const [videoName, setVideoName] = (0,react.useState)('');
  const [videoId, setVideoId] = (0,react.useState)('');
  const [percent, setPercent] = (0,react.useState)(0);
  const [isShowUpload, setIsShowUpload] = (0,react.useState)(true);
  const [isShowLoading, setIsShowLoading] = (0,react.useState)(false);
  const videoInfoRef = (0,react.useRef)({
    title: '',
    desc: '',
    playlist: '',
    tag: [],
    cate: '',
    imgId: '',
    videoId: '',
    file: null
  });
  (0,react.useImperativeHandle)(propsRef, () => {
    return {
      videoId: videoId,
      title: videoInfoRef.current.title,
      desc: videoInfoRef.current.desc,
      playlist: videoInfoRef.current.playlist,
      tag: videoInfoRef.current.tag,
      cate: videoInfoRef.current.cate,
      imgId: videoInfoRef.current.imgId,
      file: file
    };
  }, [videoInfoRef.current, videoId, keyIndex, file]);
  const fileChangeHandle = async e => {
    if (e.currentTarget.files && e.currentTarget.files.length !== 0) {
      const file = e.currentTarget.files[0];
      setVideoURL(URL.createObjectURL(file));
      setVideoName(file.name);
      setFile(file);
      setPercent(0);
      setIsShowUpload(false);
      const result = await shardUtils(file, e => {
        setPercent(e / file.size * 100);
      }, e => {
        setPercent(e);
        if (!isShowLoading) {
          setIsShowLoading(true);
        }
      });
      if (result.status === 200) {
        setVideoId(result.data.id);
        setPercent(100);
        setIsShowLoading(false);
      }
    }
  };
  return /*#__PURE__*/react.createElement(UploadVideoWrapper, null, isShowUpload && /*#__PURE__*/react.createElement("div", {
    className: "upload"
  }, /*#__PURE__*/react.createElement("button", {
    className: "select-btn"
  }, "\u9009\u62E9\u6587\u4EF6"), /*#__PURE__*/react.createElement("p", {
    className: "upload-label"
  }, "\u8BF7\u9009\u62E9\u60A8\u8981\u4E0A\u4F20\u7684\u6587\u4EF6"), /*#__PURE__*/react.createElement(CloudUploadOutlined/* default */.Z, {
    className: "upload-icon"
  }), /*#__PURE__*/react.createElement("input", {
    type: "file",
    className: "file-inp",
    onChange: e => fileChangeHandle(e)
  })), !isShowUpload && /*#__PURE__*/react.createElement(videoInfo, {
    videoURL: videoURL,
    videoName: videoName,
    ref: videoInfoRef
  }), !isShowUpload && /*#__PURE__*/react.createElement(progress/* default */.Z, {
    percent: parseFloat(percent.toFixed(2))
  }), isShowLoading && /*#__PURE__*/react.createElement("div", {
    className: "video-upload-loading"
  }, /*#__PURE__*/react.createElement(spin/* default */.Z, {
    className: "video-upload-loading-icon"
  }), /*#__PURE__*/react.createElement("div", {
    className: "label"
  }, "\u89C6\u9891\u5904\u7406\u4E2D...")));
});
/* harmony default export */ var uploadVideo = (/*#__PURE__*/(0,react.memo)(UploadVideo));
;// CONCATENATED MODULE: ./src/assets/html/fold/style.tsx

const FoldWrapper = styled_components_browser_esm/* default */.ZP.div`
  width: ${31 / 40}rem;
  cursor: pointer;
`;
;// CONCATENATED MODULE: ./src/assets/html/fold/index.tsx


const Fold = () => {
  return /*#__PURE__*/react.createElement(FoldWrapper, {
    className: "fold-outer"
  }, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var fold = (/*#__PURE__*/(0,react.memo)(Fold));
// EXTERNAL MODULE: ./src/assets/html/user/userIcon.tsx + 1 modules
var userIcon = __webpack_require__(68114);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
;// CONCATENATED MODULE: ./src/components/header/childCpn/profile/style.tsx

const ProfileWrapper = styled_components_browser_esm/* default */.ZP.div`
  background-color: #fff;
  padding: ${30 / 40}rem 0;
  width: ${400 / 40}rem;
  .profile {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    padding: 0 ${20 / 40}rem ${20 / 40}rem ${20 / 40}rem;
    .avatar-container {
      width: ${50 / 40}rem;
      height: ${50 / 40}rem;
      background-color: #eeeeee;
      position: relative;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      margin: 0 ${24 / 40}rem 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .user-name {
      font-size: ${20 / 40}rem;
    }
  }
  .mine {
    padding: ${20 / 40}rem 0 0 0;
    .mine-list {
      & > li {
        display: flex;
        align-items: center;
        padding: ${10 / 40}rem ${20 / 40}rem ${10 / 40}rem ${20 / 40}rem;
        cursor: pointer;
        &:hover {
          background-color: #eeeef0;
        }
        .icon {
          width: ${32 / 40}rem;
        }
        .name {
          margin: 0 0 0 ${24 / 40}rem;
        }
      }
    }
  }
`;
;// CONCATENATED MODULE: ./src/assets/html/profile/channel/channel.tsx

const Channel = () => {
  return /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z",
    className: "style-scope yt-icon"
  })));
};
/* harmony default export */ var channel = (Channel);
;// CONCATENATED MODULE: ./src/assets/html/profile/studio/studio.tsx

const Studio = () => {
  return /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    "enable-background": "new 0 0 24 24",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M10,9.35,15,12l-5,2.65ZM12,3a.73.73,0,0,0-.31.06L4.3,7.28A.79.79,0,0,0,4,7.8v8.4a.79.79,0,0,0,.3.52l7.39,4.22a.83.83,0,0,0,.62,0l7.39-4.22a.79.79,0,0,0,.3-.52V7.8a.79.79,0,0,0-.3-.52L12.31,3.06A.73.73,0,0,0,12,3m0-1a1.6,1.6,0,0,1,.8.19l7.4,4.22A1.77,1.77,0,0,1,21,7.8v8.4a1.77,1.77,0,0,1-.8,1.39l-7.4,4.22a1.78,1.78,0,0,1-1.6,0L3.8,17.59A1.77,1.77,0,0,1,3,16.2V7.8a1.77,1.77,0,0,1,.8-1.39l7.4-4.22A1.6,1.6,0,0,1,12,2Zm0,4a.42.42,0,0,0-.17,0l-4.7,2.8A.59.59,0,0,0,7,9.19V14.8a.65.65,0,0,0,.13.37l4.7,2.8A.42.42,0,0,0,12,18a.34.34,0,0,0,.17,0l4.7-2.81A.56.56,0,0,0,17,14.8V9.19a.62.62,0,0,0-.13-.37L12.17,6A.34.34,0,0,0,12,6m0-1a1.44,1.44,0,0,1,.69.17L17.39,8A1.46,1.46,0,0,1,18,9.19V14.8A1.46,1.46,0,0,1,17.39,16l-4.7,2.81A1.44,1.44,0,0,1,12,19a1.4,1.4,0,0,1-.68-.17L6.62,16A1.47,1.47,0,0,1,6,14.8V9.19A1.47,1.47,0,0,1,6.62,8l4.7-2.8A1.4,1.4,0,0,1,12,5Z",
    className: "style-scope yt-icon"
  })));
};
/* harmony default export */ var studio = (/*#__PURE__*/(0,react.memo)(Studio));
;// CONCATENATED MODULE: ./src/assets/html/profile/change/index.tsx

const Change = () => {
  return /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M4,20h14v1H3V6h1V20z M6,3v15h15V3H6z M8.02,17c0.36-2.13,1.93-4.1,5.48-4.1s5.12,1.97,5.48,4.1H8.02z M11,8.5 C11,7.12,12.12,6,13.5,6S16,7.12,16,8.5c0,1.38-1.12,2.5-2.5,2.5S11,9.88,11,8.5z M14.21,11.93C15.8,11.6,17,10.19,17,8.5 C17,6.57,15.43,5,13.5,5S10,6.57,10,8.5c0,1.69,1.2,3.1,2.79,3.43c-3.48,0.26-5.4,2.42-5.78,5.07H7V4h13v13h-0.01 C19.61,14.35,17.68,12.19,14.21,11.93z",
    className: "style-scope yt-icon"
  })));
};
/* harmony default export */ var change = (/*#__PURE__*/(0,react.memo)(Change));
;// CONCATENATED MODULE: ./src/assets/html/profile/exit/exit.tsx

const Exit = () => {
  return /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z",
    className: "style-scope yt-icon"
  })));
};
/* harmony default export */ var exit = (/*#__PURE__*/(0,react.memo)(Exit));
;// CONCATENATED MODULE: ./src/constant/profileMenu.tsx





const profileMenu = [{
  name: '您的频道',
  icon: /*#__PURE__*/react.createElement(channel, null),
  path: '/home/myChannel'
}, {
  name: 'YouTuBe工作室',
  icon: /*#__PURE__*/react.createElement(studio, null),
  path: '/studio'
}, {
  name: '切换账号',
  icon: /*#__PURE__*/react.createElement(change, null),
  path: '/studio'
}, {
  name: '退出账号',
  icon: /*#__PURE__*/react.createElement(exit, null),
  path: '/login'
}];

;// CONCATENATED MODULE: ./src/components/header/childCpn/profile/index.tsx






const Profile = () => {
  const navigate = (0,dist/* useNavigate */.s0)();
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  const profileMenuHandle = item => {
    console.log(item);
    navigate(item.path, {
      replace: true,
      state: {
        id: login.userMsg.userId
      }
    });
  };
  return /*#__PURE__*/react.createElement(ProfileWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "profile"
  }, login.loginType === 1 && login.userMsg.avatarUrl && /*#__PURE__*/react.createElement("div", {
    className: "avatar-container"
  }, /*#__PURE__*/react.createElement("img", {
    className: "avatar",
    src: login.userMsg.avatarUrl,
    alt: 'avatar'
  })), login.loginType === 1 && !login.userMsg.avatarUrl && /*#__PURE__*/react.createElement("div", {
    className: "avatar-container"
  }, /*#__PURE__*/react.createElement(userIcon/* default */.Z, null)), /*#__PURE__*/react.createElement("span", {
    className: "user-name"
  }, login.userMsg.userName)), /*#__PURE__*/react.createElement("div", {
    className: "mine"
  }, /*#__PURE__*/react.createElement("ul", {
    className: "mine-list"
  }, profileMenu && profileMenu.length !== 0 && profileMenu.map(item => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.name,
      onClick: e => {
        profileMenuHandle(item);
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: "icon"
    }, item.icon), /*#__PURE__*/react.createElement("div", {
      className: "name"
    }, item.name));
  }))));
};
/* harmony default export */ var profile = (/*#__PURE__*/(0,react.memo)(Profile));
;// CONCATENATED MODULE: ./src/utils/debounce.ts
function debounce(fn, time, immediate) {
  let t = null;
  const debounced = function () {
    // @ts-ignore
    const self = this;
    const args = arguments;
    if (t) {
      clearTimeout(t);
    }
    if (immediate) {
      const exec = !t;
      t = setTimeout(() => {
        t = null;
      }, time);
      if (exec) fn.apply(self, args);
    } else {
      t = setTimeout(() => {
        fn.apply(self, args);
      }, time);
    }
  };
  debounced.remove = function () {
    clearTimeout(t);
    t = null;
  };
  return debounced;
}
// EXTERNAL MODULE: ./src/constant/routes.ts
var routes = __webpack_require__(11067);
;// CONCATENATED MODULE: ./src/components/header/index.tsx















const Header = () => {
  const [isModalOpen, setIsModelOpen] = (0,react.useState)(false);
  const [searchContent, setSearchContent] = (0,react.useState)('');
  const [keyIndex, setKeyIndex] = (0,react.useState)(0);
  const loginState = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  const navigate = (0,dist/* useNavigate */.s0)();
  const location = (0,dist/* useLocation */.TH)();
  const videoRef = (0,react.useRef)(null);
  const showDialogHandle = () => {
    setIsModelOpen(true);
  };
  (0,react.useEffect)(() => {
    if (videoRef.current && videoRef.current.videoId && videoRef.current.imgId) {
      const {
        videoId,
        title,
        desc,
        playlist,
        tag,
        cate,
        imgId,
        file
      } = videoRef.current;
      if (file) {
        try {
          getVideoDuration(file).then(data => {
            (0,video/* createVideo */.Ty)(videoId, title, desc, imgId, playlist, tag, cate, data).then(data => {
              if (data.status == 200) {
                console.log(data.data);
                setIsModelOpen(false);
              }
            });
          });
        } catch (e) {}
      }
    }
  }, [keyIndex]);
  const handleOk = async () => {
    setKeyIndex(keyIndex + 1);
  };
  const handleCancel = () => {
    setIsModelOpen(false);
  };
  const login = () => {
    navigate('/login', {
      replace: false
    });
  };
  const homeRouter = debounce(() => {
    if (location.pathname === routes/* HOME_RECOMMEND */.e) {} else {
      navigate('/home', {
        replace: false
      });
    }
  }, 100, false);
  const searchInp = e => {
    if (e.currentTarget && e.currentTarget.value !== undefined && e.currentTarget.value !== null) {
      setSearchContent(e.currentTarget.value);
    }
  };
  const searchRouter = () => {
    if (searchContent.trim().length !== 0) {
      navigate('/home/search', {
        replace: false,
        state: {
          keyword: searchContent
        }
      });
    }
  };
  const searchKeyDownHandler = e => {
    if (e.code === 'enter' || e.code === 'Enter') {
      searchRouter();
    }
  };
  return /*#__PURE__*/react.createElement(HeaderWrapper, null, /*#__PURE__*/react.createElement(LeftContent, null, /*#__PURE__*/react.createElement(fold, null), /*#__PURE__*/react.createElement("div", {
    className: "logo-outer",
    onClick: e => homeRouter()
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    alt: 'logo'
  }))), /*#__PURE__*/react.createElement(CenterContent, null, /*#__PURE__*/react.createElement("div", {
    className: "search-outer"
  }, /*#__PURE__*/react.createElement("input", {
    placeholder: "\u641C\u7D22",
    value: searchContent,
    maxLength: 30,
    onKeyUp: e => {
      searchKeyDownHandler(e);
    },
    onInput: e => {
      searchInp(e);
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "search-icon",
    onClick: e => {
      searchRouter();
    }
  }, /*#__PURE__*/react.createElement(SearchOutlined/* default */.Z, null)))), /*#__PURE__*/react.createElement(RightContent, null, /*#__PURE__*/react.createElement("div", {
    className: "upload",
    onClick: e => {
      showDialogHandle();
    }
  }, /*#__PURE__*/react.createElement(VideoCameraOutlined/* default */.Z, null)), /*#__PURE__*/react.createElement("div", {
    className: "tip"
  }, /*#__PURE__*/react.createElement(badge/* default */.Z, {
    count: 100,
    size: "default",
    offset: [4, -1]
  }, /*#__PURE__*/react.createElement(MailOutlined/* default */.Z, null))), /*#__PURE__*/react.createElement(modal/* default */.Z, {
    title: "\u89C6\u9891\u4E0A\u4F20",
    cancelText: '取消',
    okText: '确定',
    open: isModalOpen,
    onOk: handleOk,
    maskClosable: false,
    destroyOnClose: true,
    width: '74%',
    onCancel: handleCancel
  }, isModalOpen && /*#__PURE__*/react.createElement(uploadVideo, {
    keyIndex: keyIndex,
    ref: videoRef
  })), /*#__PURE__*/react.createElement("div", {
    className: "user"
  }, loginState && loginState.loginType === 0 && /*#__PURE__*/react.createElement("div", {
    className: "logout",
    onClick: e => {
      login();
    }
  }, /*#__PURE__*/react.createElement(userIcon/* default */.Z, null), /*#__PURE__*/react.createElement("span", {
    className: "label"
  }, "\u767B\u5F55")), loginState && loginState.loginType === 1 && /*#__PURE__*/react.createElement(dropdown/* default */.Z, {
    overlayClassName: 'profile-drop-style',
    trigger: ['click'],
    overlay: /*#__PURE__*/react.createElement(profile, null)
  }, /*#__PURE__*/react.createElement("div", {
    className: "login-status"
  }, loginState && loginState.userMsg && loginState.userMsg.avatarUrl && /*#__PURE__*/react.createElement("img", {
    src: loginState.userMsg.avatarUrl,
    alt: "avatar"
  }), loginState && loginState.userMsg && !loginState.userMsg.avatarUrl && /*#__PURE__*/react.createElement("div", {
    className: "no-avatar-container"
  }, /*#__PURE__*/react.createElement(userIcon/* default */.Z, null)))))));
};
/* harmony default export */ var header = (/*#__PURE__*/(0,react.memo)(Header));

/***/ }),

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

/***/ 14638:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: function() { return /* binding */ getAllCate; }
/* harmony export */ });
/* unused harmony export getCateExplore */
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

async function getAllCate(offset, limit) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: '/cate/all',
    params: {
      offset,
      limit
    }
  });
}
async function getCateExplore() {
  return await gbRequest.get({
    url: '/cate/explore'
  });
}

/***/ })

}]);
//# sourceMappingURL=a2f1a0545b72ae55b3f0.bundle.js.map