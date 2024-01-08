"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[9974],{

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

/***/ 33775:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ navList; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/components/navList/style.tsx

const NavListWrapper = styled_components_browser_esm/* default */.ZP.div`
  .user-avatar {
    width: 100%;
    padding: ${24 / 40}rem 0;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    border-bottom: 1px solid #e5e5e5;
    .img-container {
      position: relative;
      width: ${120 / 40}rem;
      height: ${120 / 40}rem;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #eeeeee;
      img {
        width: 100%;
      }
      .upload-avatar-icon {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
    .label {
      font-family: 'YouTube Sans', 'Roboto', 'Arial', sans-serif;
      font-weight: 600;
      font-size: ${20 / 40}rem;
      white-space: nowrap;
      margin: ${15 / 40}rem;
    }
  }
  .main-menu,
  .profile-menu {
    & > li {
      display: flex;
      align-items: center;
      padding: ${12 / 40}rem ${20 / 40}rem ${12 / 40}rem ${20 / 40}rem;
      cursor: pointer;
      &.active {
        background-color: #e5e5e5;
        &:hover {
          background-color: #d9d9d9;
        }
      }
      &:hover {
        background-color: #f2f2f2;
      }
      .nav-icon {
        width: ${30 / 40}rem;
      }
      .nav-name {
        margin: 0 0 0 ${20 / 40}rem;
        font-size: ${20 / 40}rem;
        width: ${170 / 40}rem;
      }
    }
  }
  .main-menu {
    padding-bottom: 12px;
  }
  .profile-menu {
    border-top: 1px solid #e5e5e5;
    padding-top: 12px;
  }
  .fold {
    max-height: 60vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 5px;
      background-color: #cccccc;
      height: ${40 / 50}rem;
    }
    & > li {
      border-left: 4px solid #ffffff;
      .nav-name {
        font-family: 'YouTube Sans', 'Roboto', 'Arial', sans-serif;
        font-weight: 600;
        font-size: ${20 / 40}rem;
        color: #616161;
      }
      &.active {
        border-left-color: #cc0101;
        .nav-name {
          color: #cc0101;
        }
      }
    }
  }
`;
// EXTERNAL MODULE: ./src/constant/menu.tsx + 19 modules
var menu = __webpack_require__(48011);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/assets/html/user/userIcon.tsx + 1 modules
var userIcon = __webpack_require__(68114);
// EXTERNAL MODULE: ./src/components/common/imgUpload/index.tsx + 1 modules
var imgUpload = __webpack_require__(46991);
// EXTERNAL MODULE: ./src/network/user/index.tsx
var user = __webpack_require__(80854);
// EXTERNAL MODULE: ./src/network/playlist/index.tsx
var playlist = __webpack_require__(33422);
;// CONCATENATED MODULE: ./src/assets/html/playlist/playlistIcon.tsx

const PlaylistIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
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
    d: "M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var playlistIcon = (/*#__PURE__*/(0,react.memo)(PlaylistIcon));
;// CONCATENATED MODULE: ./src/assets/html/playlist/playlistShadowIcon.tsx

const PlaylistShadowIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
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
    d: "M15,19v-8l7,4L15,19z M22,7H2v2h20V7z M13,13H2v-2h11V13z M13,17H2v-2h11V17z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var playlistShadowIcon = (/*#__PURE__*/(0,react.memo)(PlaylistShadowIcon));
;// CONCATENATED MODULE: ./src/components/navList/index.tsx











const NavList = props => {
  const {
    isHome
  } = props;
  const [isAvatarModalOpen, setIsAvatarModalOpen] = (0,react.useState)(false);
  const [file, setFile] = (0,react.useState)(null);
  const [homeMain, setHomeMain] = (0,react.useState)(menu/* profileMenu */.cK);
  // const [progress,setProgress]=useState<number>(0);
  const navigate = (0,dist/* useNavigate */.s0)();
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  const [currentIndex, setCurrentIndex] = (0,react.useState)(0);
  (0,react.useEffect)(() => {
    if (isHome) {
      (0,playlist/* getUserPlaylist */.N3)(login.userMsg.userId, 0, 100000).then(data => {
        if (data.status === 200) {
          if (data.data.list && data.data.list.length !== 0) {
            const list = data.data.list.map(item => {
              return {
                id: item.id,
                name: item.name,
                path: menu/* USER_PLAYLIST */.tQ + '/' + item.id,
                icon: /*#__PURE__*/react.createElement(playlistIcon, null),
                shadowIcon: /*#__PURE__*/react.createElement(playlistShadowIcon, null)
              };
            });
            if (list.length !== 0) {
              /* for(let item of list){
              const childrenRoute = routes.find((it)=>{
                return it.path === HOME_PATH
              })
              if(childrenRoute && childrenRoute.children && childrenRoute.children.length!==0){
                childrenRoute.children.push({
                  path:USER_PLAYLIST+"/"+item.id,
                  element:(
                      <Suspense>
                        <UserPlaylist id={item.id}/>
                      </Suspense>
                  )
                })
              }
              } */
              const newMenu = menu/* profileMenu */.cK.concat(list);
              setHomeMain(newMenu);
            }
          }
        }
      });
    }
  }, [login.userMsg.userId]);
  const navClickHandle = (item, index) => {
    document.title = item.name;
    setCurrentIndex(index);
    navigate(item.path, {
      replace: true
    });
  };
  const fileChange = e => {
    if (e.currentTarget.files && e.currentTarget.files.length !== 0) {
      const file = e.currentTarget.files[0];
      setFile(file);
      setIsAvatarModalOpen(true);
    }
  };
  const handleAvatarOk = f => {
    setIsAvatarModalOpen(false);
  };
  const handleAvatarCancel = () => {};
  return /*#__PURE__*/react.createElement(NavListWrapper, null, !isHome && /*#__PURE__*/react.createElement("div", {
    className: "user-avatar"
  }, /*#__PURE__*/react.createElement("span", null, login.userMsg.userName), /*#__PURE__*/react.createElement("span", {
    className: 'label'
  }, "\u60A8\u7684\u9891\u9053"), /*#__PURE__*/react.createElement("div", {
    className: "img-container",
    title: login.userMsg && !login.userMsg.avatarUrl ? '上传头像' : ''
  }, login.userMsg && login.userMsg.avatarUrl && /*#__PURE__*/react.createElement("img", {
    src: login.userMsg.avatarUrl,
    alt: 'avatar'
  }), login.userMsg && !login.userMsg.avatarUrl && /*#__PURE__*/react.createElement(userIcon/* default */.Z, null), login.userMsg && !login.userMsg.avatarUrl && /*#__PURE__*/react.createElement("input", {
    type: 'file',
    onChange: e => {
      fileChange(e);
    },
    className: "upload-avatar-icon"
  }), /*#__PURE__*/react.createElement(imgUpload/* default */.Z, {
    isShow: isAvatarModalOpen,
    isCustom: true,
    realWidth: 200,
    fileSource: file,
    aspectRatio: 1,
    handleOk: file => {
      handleAvatarOk(file);
    },
    handleCancel: () => {
      setIsAvatarModalOpen(false);
    },
    uploadName: 'avatar',
    network: user/* userUploadAvatar */.hN
  }))), /*#__PURE__*/react.createElement("ul", {
    className: `main-menu ${isHome ? '' : 'fold'}`
  }, isHome && menu/* mainMenu */.cy && menu/* mainMenu */.cy.length !== 0 && menu/* mainMenu */.cy.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.name,
      onClick: e => {
        navClickHandle(item, index);
      },
      className: currentIndex === index ? 'active' : ''
    }, /*#__PURE__*/react.createElement("div", {
      className: "nav-icon"
    }, currentIndex === index ? item.shadowIcon : item.icon), /*#__PURE__*/react.createElement("div", {
      className: "nav-name"
    }, item.name));
  }), !isHome && menu/* studioMenu */.o2 && menu/* studioMenu */.o2.length !== 0 && menu/* studioMenu */.o2.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.name,
      onClick: e => {
        navClickHandle(item, index);
      },
      className: currentIndex === index ? 'active' : ''
    }, /*#__PURE__*/react.createElement("div", {
      className: "nav-icon"
    }, currentIndex === index ? item.shadowIcon : item.icon), /*#__PURE__*/react.createElement("div", {
      className: "nav-name"
    }, item.name));
  })), /*#__PURE__*/react.createElement("ul", {
    className: "profile-menu"
  }, isHome && homeMain && homeMain && homeMain.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.name,
      onClick: e => {
        navClickHandle(item, index + menu/* mainMenu */.cy.length);
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: "nav-icon"
    }, currentIndex === index + menu/* mainMenu */.cy.length ? item.shadowIcon : item.icon), /*#__PURE__*/react.createElement("div", {
      className: "nav-name text-nowrap",
      title: item.name
    }, item.name));
  })));
};
/* harmony default export */ var navList = (/*#__PURE__*/(0,react.memo)(NavList));

/***/ }),

/***/ 39974:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ home; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/index.js
var layout = __webpack_require__(97183);
// EXTERNAL MODULE: ./src/components/header/index.tsx + 20 modules
var header = __webpack_require__(45859);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/views/home/style.tsx

const HomeWrapper = styled_components_browser_esm/* default */.ZP.div`
  .codergb-sider {
    background-color: #fff;
    height: 90vh;
    overflow-y: scroll;
  }
`;
// EXTERNAL MODULE: ./src/components/navList/index.tsx + 3 modules
var navList = __webpack_require__(33775);
;// CONCATENATED MODULE: ./src/views/home/index.tsx






const {
  Header,
  Footer,
  Sider,
  Content
} = layout["default"];
const Home = () => {
  return /*#__PURE__*/react.createElement(HomeWrapper, null, /*#__PURE__*/react.createElement(layout["default"], null, /*#__PURE__*/react.createElement(layout["default"], null, /*#__PURE__*/react.createElement(Header, null, /*#__PURE__*/react.createElement(header/* default */.Z, null)), /*#__PURE__*/react.createElement(layout["default"], null, /*#__PURE__*/react.createElement(Sider, {
    className: 'codergb-sider'
  }, /*#__PURE__*/react.createElement(navList/* default */.Z, {
    isHome: true
  })), /*#__PURE__*/react.createElement(Content, null, /*#__PURE__*/react.createElement(dist/* Outlet */.j3, null))))));
};
/* harmony default export */ var home = (/*#__PURE__*/(0,react.memo)(Home));

/***/ })

}]);
//# sourceMappingURL=3e01e4fca571f9f3c2dc.bundle.js.map