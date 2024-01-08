"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[9788],{

/***/ 29788:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ comment; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/components/common/comment/style.tsx

const CommentWrapper = styled_components_browser_esm/* default */.ZP.div`
  .publish-outer {
    display: flex;
    align-items: center;
    .user-msg {
      margin: 0 ${18 / 40}rem 0 0;
      width: ${55 / 40}rem;
      height: ${55 / 40}rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .right-input {
      flex: 1;
      .input-container {
        border-bottom: 2px solid #e5e5e5;
        input {
          width: 100%;
          padding: 0 0 ${8 / 40}rem 0;
        }
      }
      .input-focus {
        border-bottom-color: #0f0f0f;
      }
      .btn-controller {
        margin: ${10 / 40}rem 0 0 0;
        display: flex;
        justify-content: flex-end;
        button {
          cursor: pointer;
          padding: ${8 / 40}rem ${18 / 40}rem;
          margin: 0 0 0 ${8 / 40}rem;
          border-radius: ${20 / 40}rem;
        }
        .cancel {
          background-color: #fff;
          &:hover {
            background-color: #e5e5e5;
          }
        }
        .confirm {
          background-color: #065fd4;
          color: #fff;
        }
        [disabled] {
          background-color: #f2f2f2;
          color: #909090;
        }
      }
    }
  }
  .publish-outer-start {
    align-items: flex-start;
  }
  .comment-list {
    width: 100%;
    margin: ${20 / 40}rem 0 0 0;
    & > li {
      width: 100%;
      margin: 0 0 ${15 / 40}rem 0;
      .comment-content {
        width: 100%;
        display: flex;
        align-items: flex-start;
      }
      .left-container {
        width: ${55 / 40}rem;
        height: ${55 / 40}rem;
        background-color: black;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .right-container {
        flex: 1;
        margin: 0 0 0 ${15 / 40}rem;
        .user-name-time {
          display: flex;
          align-items: center;
          margin: 0 0 ${10 / 40}rem 0;
          .user-name {
            font-weight: bold;
            font-size: ${14 / 40}rem;
            margin: 0 ${5 / 40}rem 0 0;
          }
          .create-time {
            color: #606060;
          }
        }
        .content {
          font-size: ${18 / 40}rem;
        }
        .reply-count-btn {
          margin: ${10 / 40}rem 0 ${15 / 40}rem 0;
          padding: ${7 / 40}rem ${20 / 40}rem;
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          cursor: pointer;
          border-radius: ${20 / 40}rem;
          & > span {
            color: #065fd4;
            font-size: ${18 / 40}rem;
          }
          svg {
            font-size: ${24 / 40}rem;
          }
          .count {
            margin: 0 0 0 ${5 / 40}rem;
          }
          &:hover {
            background-color: #def1ff;
          }
        }
        .publish-comment-reply-container {
          margin: ${15 / 40}rem 0;
        }
        .reply-controller-btn {
          display: flex;
          align-items: center;
          margin: ${15 / 40}rem 0 0 0;
          .thumb,
          .tread,
          .reply-label {
            margin: 0 ${20 / 40}rem 0 0;
            cursor: pointer;
            svg {
              font-size: ${24 / 40}rem;
            }
          }
          .thumb-count {
            margin: 0 0 0 ${5 / 40}rem;
          }
          .reply-label {
            padding: ${5 / 40}rem ${15 / 40}rem;
            border-radius: ${18 / 40}rem;
            font-size: ${17 / 40}rem;
            &:hover {
              background-color: #e5e5e5;
            }
          }
        }
      }
    }
  }
`;
// EXTERNAL MODULE: ./src/network/comment/index.tsx
var network_comment = __webpack_require__(34078);
// EXTERNAL MODULE: ./src/hook/useThumb/index.tsx
var useThumb = __webpack_require__(10249);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LikeOutlined.js + 1 modules
var LikeOutlined = __webpack_require__(58812);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LikeFilled.js + 1 modules
var LikeFilled = __webpack_require__(80177);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DislikeOutlined.js + 1 modules
var DislikeOutlined = __webpack_require__(81825);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DislikeFilled.js + 1 modules
var DislikeFilled = __webpack_require__(6073);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CaretDownOutlined.js + 1 modules
var CaretDownOutlined = __webpack_require__(19675);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CaretUpOutlined.js + 1 modules
var CaretUpOutlined = __webpack_require__(28612);
;// CONCATENATED MODULE: ./src/components/common/comment/childCpn/commentItem/style.tsx

const CommentItemWrapper = styled_components_browser_esm/* default */.ZP.div``;
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/components/common/publish/style.tsx

const PublishWrapper = styled_components_browser_esm/* default */.ZP.div`
  .publish-component-outer {
    display: flex;
    align-items: center;
    .user-msg {
      margin: 0 ${18 / 40}rem 0 0;
      width: ${40 / 40}rem;
      height: ${40 / 40}rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .right-input {
      flex: 1;
      .input-container {
        border-bottom: 2px solid #e5e5e5;
        display: flex;
        align-items: center;
        .at-user {
          display: flex;
          align-items: center;
          background-color: #f2f2f2;
          padding: ${2 / 40}rem ${8 / 40}rem;
          border-radius: 5px;
          margin: 0 ${5 / 40}rem ${5 / 40}rem 0;
          .at-label {
            font-size: ${18 / 40}rem;
          }
          .at-user-name {
            white-space: nowrap;
            font-size: ${18 / 40}rem;
          }
        }
        input {
          width: 100%;
          padding: 0 0 ${8 / 40}rem 0;
        }
      }
      .input-focus {
        border-bottom-color: #0f0f0f;
      }
      .btn-controller {
        margin: ${10 / 40}rem 0 0 0;
        display: flex;
        justify-content: flex-end;
        button {
          cursor: pointer;
          padding: ${8 / 40}rem ${18 / 40}rem;
          margin: 0 0 0 ${8 / 40}rem;
          border-radius: ${20 / 40}rem;
        }
        .cancel {
          background-color: #fff;
          &:hover {
            background-color: #e5e5e5;
          }
        }
        .confirm {
          background-color: #065fd4;
          color: #fff;
        }
        [disabled] {
          background-color: #f2f2f2;
          color: #909090;
        }
      }
    }
  }
  .publish-component-outer-start {
    align-items: flex-start;
  }
`;
;// CONCATENATED MODULE: ./src/components/common/publish/index.tsx


const Publish = props => {
  const {
    user,
    publish,
    isShowAt,
    atUser
  } = props;
  const [isFocus, setIsFocus] = (0,react.useState)(false);
  const [content, setContent] = (0,react.useState)('');
  const inpFocusHandle = () => {
    setIsFocus(true);
  };
  const inpBlurHandle = () => {
    // setIsFocus(false);
  };
  const inpChangeHandle = e => {
    setContent(e.currentTarget.value);
  };
  const cancelHandle = () => {
    setIsFocus(false);
    setContent('');
  };
  const publishHandle = () => {
    setContent('');
    setIsFocus(false);
    publish(content);
  };
  return /*#__PURE__*/react.createElement(PublishWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: `publish-component-outer ${isFocus ? 'publish-component-outer-start' : ''}`
  }, /*#__PURE__*/react.createElement("div", {
    className: "user-msg"
  }, /*#__PURE__*/react.createElement("img", {
    src: user.avatarUrl
  })), /*#__PURE__*/react.createElement("div", {
    className: "right-input"
  }, /*#__PURE__*/react.createElement("div", {
    className: `input-container ${isFocus ? 'input-focus' : ''}`
  }, isShowAt && /*#__PURE__*/react.createElement("div", {
    className: "at-user"
  }, /*#__PURE__*/react.createElement("span", {
    className: "at-label"
  }, "@"), /*#__PURE__*/react.createElement("span", {
    className: "at-user-name"
  }, atUser?.userName)), /*#__PURE__*/react.createElement("input", {
    type: 'text',
    placeholder: "\u6DFB\u52A0\u56DE\u590D...",
    value: content,
    onFocus: e => {
      inpFocusHandle();
    },
    onBlur: e => {
      inpBlurHandle();
    },
    onInput: e => {
      inpChangeHandle(e);
    }
  })), isFocus && /*#__PURE__*/react.createElement("div", {
    className: "btn-controller"
  }, /*#__PURE__*/react.createElement("button", {
    className: "cancel",
    onClick: e => {
      cancelHandle();
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/react.createElement("button", {
    className: "confirm",
    disabled: content.length === 0,
    onClick: e => {
      publishHandle();
    }
  }, "\u8BC4\u8BBA")))));
};
/* harmony default export */ var publish = (/*#__PURE__*/(0,react.memo)(Publish));
;// CONCATENATED MODULE: ./src/components/common/comment/childCpn/reply/style.tsx

const ReplyWrapper = styled_components_browser_esm/* default */.ZP.div`
  .reply-list {
    & > li {
      display: flex;
      align-items: flex-start;
      margin: 0 0 ${15 / 40}rem 0;
      width: 100%;
      .left-msg {
        width: ${40 / 40}rem;
        height: ${40 / 40}rem;
        background-color: #000;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .right-msg {
        flex: 1;
        margin: 0 0 0 ${15 / 40}rem;
        .user-name-time {
          display: flex;
          align-items: center;
          margin: 0 0 ${10 / 40}rem 0;
          .user-name {
            font-weight: bold;
            font-size: ${14 / 40}rem;
            margin: 0 ${5 / 40}rem 0 0;
          }
          .create-time {
            color: #606060;
          }
        }
        .content {
          font-size: ${18 / 40}rem;
        }
        .reply-for-name {
          font-size: ${18 / 40}rem;
          color: #065fd4;
        }
        .reply-controller-btn {
          display: flex;
          align-items: center;
          margin: ${15 / 40}rem 0 0 0;
          .thumb,
          .tread,
          .reply-label {
            margin: 0 ${20 / 40}rem 0 0;
            cursor: pointer;
            svg {
              font-size: ${24 / 40}rem;
            }
          }
          .thumb-count {
            margin: 0 0 0 ${5 / 40}rem;
          }
          .reply-label {
            padding: ${5 / 40}rem ${15 / 40}rem;
            border-radius: ${18 / 40}rem;
            font-size: ${17 / 40}rem;
            &:hover {
              background-color: #e5e5e5;
            }
          }
        }
        .reply-reply {
          margin: ${15 / 40}rem 0;
        }
      }
    }
  }
`;
;// CONCATENATED MODULE: ./src/components/common/comment/childCpn/reply/childCpn/replyItem/style.tsx

const ReplyItemWrapper = styled_components_browser_esm/* default */.ZP.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  .right-msg {
    flex: 1;
  }
`;
// EXTERNAL MODULE: ./src/network/thumb/index.tsx
var thumb = __webpack_require__(87931);
// EXTERNAL MODULE: ./src/views/login/store/actionCreators.ts + 1 modules
var actionCreators = __webpack_require__(95085);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
;// CONCATENATED MODULE: ./src/components/common/comment/childCpn/reply/childCpn/replyItem/index.tsx









const ReplyItem = props => {
  const {
    reply,
    id,
    user,
    replyIndex,
    index,
    propsShowReplyHandle,
    propsReplyReplyHandle,
    thubmHandler: propThumbHandler
  } = props;
  const loginState = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  const isThumb = (0,useThumb/* useThumb */.K)('comment', reply.id);
  const isTread = (0,useThumb/* useTread */.Q)('comment', reply.id);
  const dispatch = (0,es/* useDispatch */.I0)();
  const showReplyHandle = index => {
    propsShowReplyHandle(index);
  };
  const replyReplyHandle = (content, item) => {
    propsReplyReplyHandle(content, item);
  };
  const thumbHandle = async () => {
    if (reply) {
      console.log(isThumb);
      if (isThumb) {
        const result = await (0,thumb/* cancelThumb */.NZ)(reply.id, 'commentId');
        if (result.status === 200) {
          propThumbHandler();
        }
      } else {
        const result = await (0,thumb/* thumb */.Nb)(reply.id, 'commentId');
        if (result.status === 200) {
          propThumbHandler();
        }
      }
      if (reply && reply.user && loginState && loginState.userMsg) {
        dispatch((0,actionCreators/* changeUserDetailAction */.ZN)(loginState.userMsg.userId));
      }
    }
  };
  const treadHandle = async () => {
    if (reply) {
      if (!isTread) {
        const result = await (0,thumb/* tread */.RM)(reply.id, 'commentId');
        if (result.status === 200) {
          propThumbHandler();
        }
      } else {
        const result = await (0,thumb/* cancelTread */._0)(reply.id, 'commentId');
        if (result.status === 200) {
          propThumbHandler();
        }
      }
      if (reply && reply.user && loginState && loginState.userMsg) {
        dispatch((0,actionCreators/* changeUserDetailAction */.ZN)(loginState.userMsg.userId));
      }
    }
  };
  return /*#__PURE__*/react.createElement(ReplyItemWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "left-msg"
  }, /*#__PURE__*/react.createElement("img", {
    src: reply.user.avatarUrl
  })), /*#__PURE__*/react.createElement("div", {
    className: "right-msg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "user-name-time"
  }, /*#__PURE__*/react.createElement("span", {
    className: "user-name"
  }, reply.user.userName), /*#__PURE__*/react.createElement("span", {
    className: "create-time"
  }, moment_default()(reply.createTime).locale('zh-CN').fromNow())), /*#__PURE__*/react.createElement("div", {
    className: "content"
  }, reply.content), id && typeof reply.reply === 'object' && reply.reply.hasOwnProperty('user') && reply.reply.id !== id && /*#__PURE__*/react.createElement("div", {
    className: "reply-for-name"
  }, "@", reply.reply ? typeof reply.reply === 'object' && reply.reply.hasOwnProperty('user') ? reply.reply.user.userName : '' : ''), /*#__PURE__*/react.createElement("div", {
    className: "reply-controller-btn"
  }, /*#__PURE__*/react.createElement("div", {
    className: "thumb"
  }, !isThumb && /*#__PURE__*/react.createElement(LikeOutlined/* default */.Z, {
    onClick: async e => {
      await thumbHandle();
    }
  }), isThumb && /*#__PURE__*/react.createElement(LikeFilled/* default */.Z, {
    onClick: async e => {
      await thumbHandle();
    }
  }), /*#__PURE__*/react.createElement("span", {
    className: "thumb-count"
  }, reply.thumb ?? 0)), /*#__PURE__*/react.createElement("div", {
    className: "tread"
  }, !isTread && /*#__PURE__*/react.createElement(DislikeOutlined/* default */.Z, {
    onClick: async e => {
      await treadHandle();
    }
  }), isTread && /*#__PURE__*/react.createElement(DislikeFilled/* default */.Z, {
    onClick: async e => {
      await treadHandle();
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "reply-label",
    onClick: e => {
      showReplyHandle(index);
    }
  }, "\u56DE\u590D")), index === replyIndex && /*#__PURE__*/react.createElement("div", {
    className: "reply-reply"
  }, /*#__PURE__*/react.createElement(publish, {
    user: user,
    isShowAt: true,
    atUser: reply.user,
    publish: content => {
      replyReplyHandle(content, reply);
    }
  }))));
};
/* harmony default export */ var replyItem = (/*#__PURE__*/(0,react.memo)(ReplyItem));
;// CONCATENATED MODULE: ./src/components/common/comment/childCpn/reply/index.tsx




const Reply = props => {
  const {
    id,
    user,
    replyHandle
  } = props;
  const [reply, setReply] = (0,react.useState)([]);
  const [count, setCount] = (0,react.useState)(0);
  const [replyIndex, setReplyIndex] = (0,react.useState)(-1);
  (0,react.useEffect)(() => {
    getAllReplyHandle(id, 0, 10);
  }, [id]);
  const getAllReplyHandle = async (id, offset, limit) => {
    const data = await (0,network_comment/* getAllReply */.WF)(id, offset, limit);
    if (data.status === 200) {
      setReply(data.data.list);
      setCount(data.data.count);
    }
  };
  const replyReplyHandle = async (content, item) => {
    const result = await (0,network_comment/* replyComment */.Hi)(item.id, content);
    if (result.status === 200) {
      await getAllReplyHandle(id, 0, 10);
      setReplyIndex(-1);
      replyHandle(count);
    }
  };
  const showReplyHandle = index => {
    if (index === replyIndex) {
      setReplyIndex(-1);
    } else {
      setReplyIndex(index);
    }
  };
  const thubmHandler = async () => {
    await getAllReplyHandle(id, 0, 10);
  };
  return /*#__PURE__*/react.createElement(ReplyWrapper, null, /*#__PURE__*/react.createElement("ul", {
    className: "reply-list"
  }, reply && reply.length !== 0 && reply.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react.createElement(replyItem, {
      replyIndex: replyIndex,
      index: index,
      reply: item,
      id: id,
      user: user,
      thubmHandler: async () => {
        await thubmHandler();
      },
      propsShowReplyHandle: index => {
        showReplyHandle(index);
      },
      propsReplyReplyHandle: async (content, item) => {
        await replyReplyHandle(content, item);
      }
    }));
  })));
};
/* harmony default export */ var reply = (/*#__PURE__*/(0,react.memo)(Reply));
;// CONCATENATED MODULE: ./src/components/common/comment/childCpn/commentItem/index.tsx











const CommentItem = props => {
  const {
    comment,
    comIndex,
    index,
    replyIndex,
    user,
    propsShowReplyHandle,
    propsPublishReplyHandle,
    propsShowReply,
    thumbHandler: propThumber
  } = props;
  const [tempReplyCount, setReplyCount] = (0,react.useState)(0);
  const navigate = (0,dist/* useNavigate */.s0)();
  const loginState = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  const isThumb = (0,useThumb/* useThumb */.K)('comment', comment.id);
  const isTread = (0,useThumb/* useTread */.Q)('comment', comment.id);
  const dispatch = (0,es/* useDispatch */.I0)();
  const showReplyHandle = index => {
    propsShowReplyHandle(index);
  };
  const publishReplyHandle = (content, item) => {
    propsPublishReplyHandle(content, item);
  };
  const showReply = index => {
    propsShowReply(index);
  };
  const changeReplyCount = count => {
    console.log(count);
    setReplyCount(count + 1);
  };
  const thumbHandle = async () => {
    if (comment) {
      console.log(isThumb);
      if (isThumb) {
        const result = await (0,thumb/* cancelThumb */.NZ)(comment.id, 'commentId');
        if (result.status === 200) {
          propThumber();
        }
      } else {
        const result = await (0,thumb/* thumb */.Nb)(comment.id, 'commentId');
        if (result.status === 200) {
          propThumber();
        }
      }
      if (comment && comment.user && loginState && loginState.userMsg) {
        dispatch((0,actionCreators/* changeUserDetailAction */.ZN)(loginState.userMsg.userId));
      }
    }
  };
  const treadHandle = async () => {
    if (comment) {
      if (!isTread) {
        const result = await (0,thumb/* tread */.RM)(comment.id, 'commentId');
        if (result.status === 200) {
          propThumber();
        }
      } else {
        const result = await (0,thumb/* cancelTread */._0)(comment.id, 'commentId');
        if (result.status === 200) {
          propThumber();
        }
      }
      if (comment && comment.user && loginState && loginState.userMsg) {
        dispatch((0,actionCreators/* changeUserDetailAction */.ZN)(loginState.userMsg.userId));
      }
    }
  };
  const userRouter = () => {
    if (comment) {
      navigate('/home/userDetail', {
        state: {
          userId: comment.user.userId
        }
      });
    }
  };
  return /*#__PURE__*/react.createElement(CommentItemWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "comment-content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left-container",
    onClick: () => {
      userRouter();
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: comment.user.avatarUrl
  })), /*#__PURE__*/react.createElement("div", {
    className: "right-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "user-name-time"
  }, /*#__PURE__*/react.createElement("span", {
    className: "user-name"
  }, comment.user.userName), /*#__PURE__*/react.createElement("span", {
    className: "create-time"
  }, moment_default()(comment.createTime).locale('zh-CN').fromNow())), /*#__PURE__*/react.createElement("div", {
    className: "content"
  }, comment.content), /*#__PURE__*/react.createElement("div", {
    className: "reply-controller-btn"
  }, /*#__PURE__*/react.createElement("div", {
    className: "thumb"
  }, !isThumb && /*#__PURE__*/react.createElement(LikeOutlined/* default */.Z, {
    onClick: async e => {
      await thumbHandle();
    }
  }), isThumb && /*#__PURE__*/react.createElement(LikeFilled/* default */.Z, {
    onClick: async e => {
      await thumbHandle();
    }
  }), /*#__PURE__*/react.createElement("span", {
    className: "thumb-count"
  }, comment.thumb ?? 0)), /*#__PURE__*/react.createElement("div", {
    className: "tread"
  }, !isTread && /*#__PURE__*/react.createElement(DislikeOutlined/* default */.Z, {
    onClick: async e => {
      await treadHandle();
    }
  }), isTread && /*#__PURE__*/react.createElement(DislikeFilled/* default */.Z, {
    onClick: async e => {
      await treadHandle();
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "reply-label",
    onClick: e => {
      showReplyHandle(index);
    }
  }, "\u56DE\u590D")), index === replyIndex && /*#__PURE__*/react.createElement("div", {
    className: "publish-comment-reply-container"
  }, /*#__PURE__*/react.createElement(publish, {
    isShowAt: false,
    user: user,
    publish: content => {
      publishReplyHandle(content, comment);
    }
  })), typeof comment.reply === 'number' && comment.reply !== 0 && /*#__PURE__*/react.createElement("div", {
    className: "reply-count-btn",
    onClick: e => {
      showReply(index);
    }
  }, index !== comIndex && /*#__PURE__*/react.createElement(CaretDownOutlined/* default */.Z, null), index === comIndex && /*#__PURE__*/react.createElement(CaretUpOutlined/* default */.Z, null), /*#__PURE__*/react.createElement("span", {
    className: 'count'
  }, tempReplyCount === 0 ? typeof comment.reply === 'number' ? comment.reply : '' : tempReplyCount), /*#__PURE__*/react.createElement("span", {
    className: 'label'
  }, "\u6761\u56DE\u590D")), index === comIndex && /*#__PURE__*/react.createElement(reply, {
    id: comment.id,
    user: user,
    replyHandle: count => {
      changeReplyCount(count);
    }
  }))));
};
/* harmony default export */ var commentItem = (/*#__PURE__*/(0,react.memo)(CommentItem));
// EXTERNAL MODULE: ./src/components/common/emptyHolder/index.tsx + 1 modules
var emptyHolder = __webpack_require__(34651);
;// CONCATENATED MODULE: ./src/components/common/comment/index.tsx






const Comment = props => {
  const {
    user,
    alias,
    id
  } = props;
  const [comment, setComment] = (0,react.useState)([]);
  const [commentCount, setCommentCount] = (0,react.useState)(0);
  const [isShowReply, setIsShowReply] = (0,react.useState)(false);
  const [isFocus, setIsFocus] = (0,react.useState)(false);
  const [content, setContent] = (0,react.useState)('');
  const [comIndex, setComIndex] = (0,react.useState)(-1);
  const [replyIndex, setReplyIndex] = (0,react.useState)(-1);
  (0,react.useEffect)(() => {
    getAllCommentHandle(id, 0, 10, alias);
  }, [id]);
  const isThumb = useThumb/* useThumb */.K;
  const isTread = useThumb/* useTread */.Q;
  const getAllCommentHandle = (id, offset, limit, alias) => {
    (0,network_comment/* getAllComment */.dR)(id, offset, limit, alias).then(data => {
      if (data.status === 200) {
        setComment(data.data.list);
        setCommentCount(data.data.count);
      }
    });
  };
  const inpFocusHandle = () => {
    setIsFocus(true);
  };
  const inpBlurHandle = () => {
    // setIsFocus(false);
  };
  const inpChangeHandle = e => {
    setContent(e.currentTarget.value);
  };
  const cancelHandle = () => {
    setIsFocus(false);
    setContent('');
  };
  // 发表评论
  const publishHandle = () => {
    (0,network_comment/* publishComment */.uo)(id, alias, content).then(data => {
      console.log(data);
      if (data.status === 200) {
        setContent('');
        setIsFocus(false);
        getAllCommentHandle(id, 0, 10, alias);
      }
    });
  };
  // 显示回复评论内容
  const showReply = index => {
    if (index === comIndex) {
      setComIndex(-1);
    } else {
      setComIndex(index);
    }
  };
  // 显示回复发布框
  const showReplyHandle = index => {
    if (index === replyIndex) {
      setReplyIndex(-1);
    } else {
      setReplyIndex(index);
    }
  };
  // 回复评论
  const publishReplyHandle = async (content, item) => {
    console.log(content, item);
    const result = await (0,network_comment/* replyComment */.Hi)(item.id, content);
    if (result.status === 200) {
      getAllCommentHandle(id, 0, 10, alias);
    }
  };
  const thumbHandler = () => {
    getAllCommentHandle(id, 0, 10, alias);
  };
  return /*#__PURE__*/react.createElement(CommentWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: `publish-outer ${isFocus ? 'publish-outer-start' : ''}`
  }, /*#__PURE__*/react.createElement("div", {
    className: "user-msg"
  }, /*#__PURE__*/react.createElement("img", {
    src: user.avatarUrl
  })), /*#__PURE__*/react.createElement("div", {
    className: "right-input"
  }, /*#__PURE__*/react.createElement("div", {
    className: `input-container ${isFocus ? 'input-focus' : ''}`
  }, /*#__PURE__*/react.createElement("input", {
    type: 'text',
    placeholder: "\u6DFB\u52A0\u8BC4\u8BBA...",
    value: content,
    onFocus: e => {
      inpFocusHandle();
    },
    onBlur: e => {
      inpBlurHandle();
    },
    onInput: e => {
      inpChangeHandle(e);
    }
  })), isFocus && /*#__PURE__*/react.createElement("div", {
    className: "btn-controller"
  }, /*#__PURE__*/react.createElement("button", {
    className: "cancel",
    onClick: e => {
      cancelHandle();
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/react.createElement("button", {
    className: "confirm",
    disabled: content.length === 0,
    onClick: e => {
      publishHandle();
    }
  }, "\u8BC4\u8BBA")))), /*#__PURE__*/react.createElement("ul", {
    className: "comment-list"
  }, comment && comment.length !== 0 && comment.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react.createElement(commentItem, {
      comment: item,
      user: user,
      index: index,
      comIndex: comIndex,
      replyIndex: replyIndex,
      propsPublishReplyHandle: async (content, item) => {
        await publishReplyHandle(content, item);
      },
      propsShowReply: index => {
        showReply(index);
      },
      thumbHandler: () => {
        thumbHandler();
      },
      propsShowReplyHandle: index => {
        showReplyHandle(index);
      }
    }));
  }), (!comment || comment && comment.length === 0) && /*#__PURE__*/react.createElement(emptyHolder/* default */.Z, {
    padding: 200,
    msg: '暂无评论，快来发布您的第一条评论'
  })));
};
/* harmony default export */ var comment = (/*#__PURE__*/(0,react.memo)(Comment));

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

/***/ 10249:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: function() { return /* binding */ useThumb; },
/* harmony export */   Q: function() { return /* binding */ useTread; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95998);

const useThumb = (alias, id) => {
  const loginState = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useSelector */ .v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  let isExists = -1;
  if (loginState) {
    const {
      userDetail
    } = loginState;
    if (userDetail && userDetail.thumb[alias] && userDetail.thumb[alias].length !== 0 && id) {
      isExists = userDetail.thumb[alias].findIndex((item, index) => {
        return id === item.id;
      });
    }
  }
  return isExists !== -1;
};
const useTread = (alias, id) => {
  const loginState = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useSelector */ .v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  let isExists = -1;
  if (loginState) {
    const {
      userDetail
    } = loginState;
    if (userDetail && userDetail.tread[alias] && userDetail.tread[alias].length !== 0 && id) {
      isExists = userDetail.tread[alias].findIndex((item, index) => {
        return id === item.id;
      });
    }
  }
  return isExists !== -1;
};

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

/***/ 87931:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $x: function() { return /* binding */ getVideoThumb; },
/* harmony export */   NZ: function() { return /* binding */ cancelThumb; },
/* harmony export */   Nb: function() { return /* binding */ thumb; },
/* harmony export */   RM: function() { return /* binding */ tread; },
/* harmony export */   _0: function() { return /* binding */ cancelTread; }
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

// 点赞
async function thumb(id, alias) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/thumb',
    data: {
      id,
      alias
    }
  });
}
// 取消点赞
async function cancelThumb(id, alias) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/thumb/cancel',
    data: {
      id,
      alias
    }
  });
}
// 踩
async function tread(id, alias) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/tread',
    data: {
      id,
      alias
    }
  });
}
async function cancelTread(id, alias) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/tread/cancel',
    data: {
      id,
      alias
    }
  });
}
// 获取视频点赞数
async function getVideoThumb(id) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: 'thumb/video/' + id
  });
}

/***/ })

}]);
//# sourceMappingURL=26c2f3cea97f445841b4.bundle.js.map