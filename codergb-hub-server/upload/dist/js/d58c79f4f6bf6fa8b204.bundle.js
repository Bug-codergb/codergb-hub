"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[1068],{

/***/ 80953:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ subBtn; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/notification/index.js + 1 modules
var notification = __webpack_require__(38648);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/components/common/subBtn/style.tsx

const SubBtnWrapper = styled_components_browser_esm/* default */.ZP.div`
  background-color: #f2f2f2;
  color: #0f0f0f;
  cursor: pointer;
  font-size: ${20 / 40}rem;

  border-radius: ${24 / 40}rem;
  margin: 0 0 0 ${40 / 40}rem;
  text-align: center;
  .inner {
    width: 100%;
    height: 100%;
    padding: ${10 / 40}rem ${20 / 40}rem;
  }
  &:hover {
    background-color: #e5e5e5;
  }
`;
// EXTERNAL MODULE: ./src/hook/useSub/index.tsx
var useSub = __webpack_require__(33624);
// EXTERNAL MODULE: ./src/hook/useLoginMsg/index.tsx
var useLoginMsg = __webpack_require__(46139);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/network/subscriber/index.tsx
var subscriber = __webpack_require__(40223);
// EXTERNAL MODULE: ./src/views/login/store/actionCreators.ts + 1 modules
var actionCreators = __webpack_require__(95085);
;// CONCATENATED MODULE: ./src/components/common/subBtn/index.tsx








const SubBtn = props => {
  const {
    userId
  } = props;
  const isSub = (0,useSub/* useSub */.$)(userId);
  const loginMsg = (0,useLoginMsg/* useLoginMsg */.y)();
  const dispatch = (0,es/* useDispatch */.I0)();
  const subHandler = async () => {
    if (!isSub) {
      const result = await (0,subscriber/* sub */.lu)(userId);
      if (result.status === 200) {
        notification/* default */.Z.info({
          message: `订阅成功`,
          description: `在“订阅内容中”查看您添加的视频`,
          placement: 'bottomLeft'
        });
      }
    } else {
      const result = await (0,subscriber/* cancelSub */.eM)(userId);
      if (result.status === 200) {}
    }
    if (loginMsg && loginMsg.userMsg) {
      dispatch((0,actionCreators/* changeUserDetailAction */.ZN)(loginMsg.userMsg.userId));
    }
  };
  return /*#__PURE__*/react.createElement(SubBtnWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "inner",
    onClick: async () => {
      await subHandler();
    }
  }, isSub ? '已订阅' : '订阅'));
};
/* harmony default export */ var subBtn = (/*#__PURE__*/(0,react.memo)(SubBtn));

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

/***/ 33624:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: function() { return /* binding */ useSub; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95998);

const useSub = upId => {
  let isExists = -1;
  const loginState = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useSelector */ .v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  if (loginState) {
    const {
      userDetail
    } = loginState;
    if (userDetail && userDetail.subscriber.length !== 0 && upId) {
      isExists = userDetail.subscriber.findIndex((item, index) => {
        return upId === item.userId;
      });
    }
  }
  return isExists !== -1;
};

/***/ }),

/***/ 40223:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $p: function() { return /* binding */ getUserSubCount; },
/* harmony export */   eM: function() { return /* binding */ cancelSub; },
/* harmony export */   lu: function() { return /* binding */ sub; },
/* harmony export */   yf: function() { return /* binding */ getUserSub; }
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

function sub(upId) {
  return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/sub/',
    data: {
      upId
    }
  });
}
function cancelSub(upId) {
  return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/sub/cancel',
    data: {
      upId
    }
  });
}
//获取用户订阅
function getUserSub(userId, offset, limit) {
  return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/sub/user/' + userId,
    data: {
      offset,
      limit
    }
  });
}
//获取订阅数
function getUserSubCount(id) {
  return _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: '/sub/count/' + id
  });
}

/***/ }),

/***/ 61068:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ manage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/views/subscriptions/childCpn/manage/style.tsx

const SubManageWrapper = styled_components_browser_esm/* default */.ZP.div`
  .sub-list {
    & > li {
      display: flex;
      align-items: flex-start;
      margin: 0 0 ${26 / 40}rem 0;
      .left-container {
        width: ${160 / 40}rem;
        height: ${160 / 40}rem;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .center-container {
        flex: 8;
        margin: 0 0 0 ${20 / 40}rem;
        .channel-name {
          font-size: ${28 / 40}rem;
        }
        .count {
          & > span {
            font-size: ${18 / 40}rem;
            color: #606060;
            &:nth-child(1) {
              margin: 0 ${5 / 40}rem 0 0;
            }
          }
        }
      }
      .right-container {
        flex: 1;
        padding: 0 ${40 / 40}rem 0;
      }
    }
  }
`;
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/network/subscriber/index.tsx
var subscriber = __webpack_require__(40223);
// EXTERNAL MODULE: ./src/components/common/subBtn/index.tsx + 1 modules
var subBtn = __webpack_require__(80953);
;// CONCATENATED MODULE: ./src/views/subscriptions/childCpn/manage/index.tsx






const SubManage = () => {
  const [up, setUp] = (0,react.useState)([]);
  const [count, setCount] = (0,react.useState)(0);
  const navigate = (0,dist/* useNavigate */.s0)();
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  (0,react.useEffect)(() => {
    (0,subscriber/* getUserSub */.yf)(login.userMsg.userId, 0, 10).then(data => {
      setUp(data.data.list);
      setCount(data.data.count);
    });
  }, []);
  const userRouter = user => {
    if (user) {
      navigate('/home/userDetail', {
        state: {
          userId: user.userId
        },
        replace: false
      });
    }
  };
  return /*#__PURE__*/react.createElement(SubManageWrapper, null, /*#__PURE__*/react.createElement("ul", {
    className: "sub-list"
  }, up && up.length !== 0 && up.map(item => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react.createElement("div", {
      className: "left-container",
      onClick: () => {
        userRouter(item.up);
      }
    }, /*#__PURE__*/react.createElement("img", {
      src: item.up.avatarUrl
    })), /*#__PURE__*/react.createElement("div", {
      className: "center-container"
    }, /*#__PURE__*/react.createElement("div", {
      className: "channel-name",
      onClick: () => {
        userRouter(item.up);
      }
    }, item.up.userName), /*#__PURE__*/react.createElement("div", {
      className: "count"
    }, /*#__PURE__*/react.createElement("span", null, item.fans, "\u4F4D\u8BA2\u9605\u8005"), /*#__PURE__*/react.createElement("span", null, item.video, "\u4E2A\u89C6\u9891")), /*#__PURE__*/react.createElement("div", {
      className: "desc text-nowrap-mul-line"
    }, item.channel.description)), /*#__PURE__*/react.createElement("div", {
      className: "right-container"
    }, /*#__PURE__*/react.createElement(subBtn/* default */.Z, {
      userId: item.up.userId
    })));
  })));
};
/* harmony default export */ var manage = (/*#__PURE__*/(0,react.memo)(SubManage));

/***/ })

}]);
//# sourceMappingURL=d58c79f4f6bf6fa8b204.bundle.js.map