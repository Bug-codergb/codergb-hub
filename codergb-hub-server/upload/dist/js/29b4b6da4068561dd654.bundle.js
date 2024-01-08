"use strict";
(self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || []).push([[6994],{

/***/ 56991:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ chatDetail; }
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
;// CONCATENATED MODULE: ./src/assets/img/chat-window.jpg
var chat_window_namespaceObject = __webpack_require__.p + "images/ce83c35be34a9cac0e6a.jpg";
;// CONCATENATED MODULE: ./src/components/content/detail/chatDetail/style.tsx


const ChatWrapper = styled_components_browser_esm/* default */.ZP.div`
  .gb-content {
    width: 100%;
    background-image: url(${chat_window_namespaceObject});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    .gb-content-inner {
      width: ${1620 / 40}rem;
      margin: ${1 / 40}rem auto;
      min-height: ${820 / 40}rem;
      /*background-color: #f0f2f5;*/
      .title {
        background-color: #ffffff;
        padding: ${15 / 40}rem ${20 / 40}rem ${15 / 40}rem;
        border-radius: 10px;
        margin: 0 0 ${15 / 40}rem;
      }
    }
  }
`;
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 14 modules
var input = __webpack_require__(50817);
;// CONCATENATED MODULE: ./src/components/content/detail/chatDetail/childCpn/chatWindow/style.tsx

const ChatWindowWrapper = styled_components_browser_esm/* default */.ZP.div`
  background-color: #ffffff;
  .recent-title {
    font-size: ${16 / 40}rem;
    color: #666666;
    padding: ${20 / 40}rem ${20 / 40}rem;
    white-space: nowrap;
    box-sizing: border-box;
  }
  .gb-chat-header {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .gb-chat {
    height: ${520 / 40}rem;
    overflow-y: scroll;
    background-color: #f4f5f7;
    .chat-history {
      & > li {
        display: flex;
        padding: ${20 / 40}rem 0;
        align-items: flex-start;
        .img-container {
          width: ${50 / 40}rem;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .content-container {
          max-width: 90%;
          margin: 0 0 0 ${10 / 40}rem;
          .content {
            max-width: 100%;
            background-color: #ffffff;
            padding: ${10 / 40}rem ${15 / 40}rem;
            font-size: ${20 / 40}rem;
            border-radius: ${24 / 40}rem;
          }
          .time {
            font-size: ${16 / 40}rem;
            color: #999999;
            display: flex;
            justify-content: flex-start;
            margin: ${10 / 40}rem 0 0 ${5 / 40}rem;
          }
        }
        &.active {
          flex-direction: row-reverse;
          .content {
            margin: 0 ${10 / 40}rem 0 0;
            background-color: #80b9f2;
            color: #fff;
          }
          .time {
            justify-content: flex-end;
          }
        }
      }
    }
  }
  .gb-chat-side {
    min-width: ${320 / 40}rem!important;
    max-width: ${320 / 40}rem!important;
    width: ${320 / 40}rem!important;
    .chat-queue {
      & > li {
        display: flex;
        align-items: flex-start;
        padding: ${10 / 40}rem ${15 / 40}rem;
        cursor: pointer;
        &:hover {
          background-color: #e4e5e6;
        }
        &.active {
          background-color: #e4e5e6;
        }
        .img-container {
          width: ${70 / 40}rem;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .right-container {
          width: 70%;
          background-color: transparent;
          margin: 0 0 0 ${20 / 40}rem;
          .user-name {
            color: #333333;
            font-size: ${18 / 40}rem;
          }
          .content {
            color: #999999;
            font-size: ${14 / 40}rem;
            width: 100%;
          }
        }
      }
    }
  }
  .gb-chat-footer {
    background-color: #ffffff;
    border-top: 1px solid #e5e5e5;
    height: ${200 / 40}rem;
    padding: ${20 / 40}rem ${10 / 40}rem ${20 / 40}rem ${10 / 40}rem;
    .publish-container {
      padding: ${10 / 40}rem 0 0 0;
      display: flex;
      justify-content: flex-end;
      .publish-btn {
        display: inline-flex;
        border: 1px solid #cccccc;
        justify-content: center;
        font-size: ${18 / 40}rem;
        padding: ${5 / 40}rem ${10 / 40}rem;
        cursor: pointer;
        border-radius: 4px;
      }
    }
    .ant-input {
      border: none;
      resize: none;
      outline: none;
      box-shadow: none;
    }
    .ant-input:focus {
      border: none;
      outline: none;
    }
  }
`;
// EXTERNAL MODULE: ./src/constant/host.ts
var host = __webpack_require__(22139);
;// CONCATENATED MODULE: ./src/network/websocket/chat.ts

class CommonWebSocket {
  constructor(url, params) {
    const keys = Object.keys(params);
    let query = '';
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      query += `${key}=${params[key]}${i === keys.length - 1 ? '' : '&'}`;
    }
    const socketUrl = `${url}?${query}`;
    this.websocket = new WebSocket(`${host/* WEBSOCKET_HOST_NAME */.i}${socketUrl}`);
  }

  // 废弃
  async getSocketMsg() {
    return await new Promise((resolve, reject) => {
      this.websocket.onmessage = function (e) {
        const res = JSON.parse(e.data);
        resolve(res);
      };
    });
  }
  sendSocketMsg(params) {
    console.log(this.websocket.readyState);
    this.websocket.send(params);
  }
}
const CHAT_QUEUE = '/chat/queue';
const CHAT = '/chat';
const CHAT_CONTENT = '/chat/content';

// EXTERNAL MODULE: ./src/hook/useLoginMsg/index.tsx
var useLoginMsg = __webpack_require__(46139);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/components/content/detail/chatDetail/childCpn/chatWindow/index.tsx






const {
  Header,
  Footer,
  Sider,
  Content
} = layout["default"];
const {
  TextArea
} = input["default"];
const ChatWindow = props => {
  const {
    userName,
    userId
  } = props; // 目标用户
  // 目标聊天用户
  const [targetUser, setTargetUser] = (0,react.useState)(userId);
  const [targetUserName, setTargetUserName] = (0,react.useState)(userName);
  const [chatQueue, setChatQueue] = (0,react.useState)([]);
  const [chatQueueTotal, setChatQueueTotal] = (0,react.useState)(0);
  const [chatContent, setContent] = (0,react.useState)('');
  const login = (0,useLoginMsg/* useLoginMsg */.y)();
  const [chatWebSocket, setChatWebSocket] = (0,react.useState)(null); // 发布聊天
  const [historyWebSocket, setHistoryWebSocket] = (0,react.useState)(null); // 聊天记录
  const [queueWebSocket, setQueueWebSocket] = (0,react.useState)(null); // 聊天队列
  (0,react.useEffect)(() => {
    // 获取聊天队列(当前登陆人)
    const params = {
      targetUser: login.userMsg.userId,
      // 当前登陆人
      targetChatUser: targetUser // 目标聊天用户是否再聊天队列里
    };
    const webSocket = new CommonWebSocket(CHAT_QUEUE, params);
    setQueueWebSocket(webSocket);
    webSocket.websocket.onmessage = function (e) {
      const data = JSON.parse(e.data);
      if (data.status === 200) {
        setChatQueue(data.data.list);
        setChatQueueTotal(data.data.count);
      }
    };
  }, [login.userMsg.userId]);
  // 聊天发布(交互socket)
  (0,react.useEffect)(() => {
    if (targetUser && login.userMsg.userId) {
      const params = {
        targetUser,
        sourceUser: login.userMsg.userId
      };
      const webSocket = new CommonWebSocket(CHAT, params);
      setChatWebSocket(webSocket);
      webSocket.websocket.onmessage = function (e) {
        if (historyWebSocket) {
          historyWebSocket.sendSocketMsg('pull');
        }
        if (queueWebSocket) {
          queueWebSocket.sendSocketMsg('pull');
        }
      };
      webSocket.websocket.onopen = function () {
        console.log('建立成功');
      };
    }
  }, [targetUser, login.userMsg.userId, historyWebSocket]);
  // 聊天记录
  const [contentHistory, setContentHistory] = (0,react.useState)([]);
  const [contentHistoryTotal, setContentHistoryTotal] = (0,react.useState)(0);
  (0,react.useEffect)(() => {
    if (targetUser) {
      const params = {
        targetUser,
        sourceUser: login.userMsg.userId,
        limit: 30000
      };
      const webSocket = new CommonWebSocket(CHAT_CONTENT, params);
      setHistoryWebSocket(webSocket);
      webSocket.websocket.onmessage = function (e) {
        const data = JSON.parse(e.data);
        if (data.status === 200) {
          setContentHistory(data.data.list);
        }
        if (queueWebSocket) {
          queueWebSocket.sendSocketMsg('pull');
        }
      };
      webSocket.websocket.onopen = function () {
        console.log('建立成功');
      };
    }
  }, [targetUser, queueWebSocket]);
  // 聊天输入
  const chatInp = e => {
    if (e.currentTarget && e.currentTarget.value !== undefined && e.currentTarget.value !== null) {
      setContent(e.currentTarget.value);
    }
  };
  const publishContent = () => {
    if (chatWebSocket) {
      chatWebSocket.sendSocketMsg(chatContent);
      setContent('');
    }
  };
  const [currentIndex, setCurrentIndex] = (0,react.useState)(0);
  const userClick = (item, index) => {
    setTargetUser(item.sourceUser.userId);
    setTargetUserName(item.sourceUser.userName);
    setCurrentIndex(index);
  };
  const contentRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    console.log(contentRef.current?.offsetHeight, contentRef.current?.scrollHeight);
    if (contentRef.current && contentRef.current.offsetHeight <= contentRef.current.scrollHeight) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight; // -contentRef.current.offsetHeight
    }
  }, [contentRef.current, contentHistory.length]);
  return /*#__PURE__*/react.createElement(ChatWindowWrapper, null, /*#__PURE__*/react.createElement(layout["default"], null, /*#__PURE__*/react.createElement(Sider, {
    className: "gb-chat-side"
  }, /*#__PURE__*/react.createElement("div", {
    className: "recent-title"
  }, "\u8FD1\u671F\u6D88\u606F"), /*#__PURE__*/react.createElement("ul", {
    className: "chat-queue"
  }, chatQueue && chatQueue.length !== 0 && chatQueue.map((item, index) => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id,
      onClick: e => {
        userClick(item, index);
      },
      className: currentIndex === index ? 'active' : ''
    }, /*#__PURE__*/react.createElement("div", {
      className: "img-container"
    }, /*#__PURE__*/react.createElement("img", {
      src: item.sourceUser.avatarUrl
    })), /*#__PURE__*/react.createElement("div", {
      className: "right-container"
    }, /*#__PURE__*/react.createElement("div", {
      className: "user-name"
    }, item.sourceUser.userName), /*#__PURE__*/react.createElement("div", {
      className: "content text-nowrap"
    }, item.content)));
  }))), /*#__PURE__*/react.createElement(layout["default"], null, /*#__PURE__*/react.createElement(Header, {
    className: "gb-chat-header"
  }, targetUserName), /*#__PURE__*/react.createElement(Content, {
    className: "gb-chat",
    ref: contentRef
  }, /*#__PURE__*/react.createElement("ul", {
    className: "chat-history"
  }, contentHistory && contentHistory.length !== 0 && contentHistory.map(item => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id,
      className: item.sourceUser.userId !== targetUser ? 'active' : ''
    }, /*#__PURE__*/react.createElement("div", {
      className: "img-container"
    }, /*#__PURE__*/react.createElement("img", {
      src: item.sourceUser.avatarUrl
    })), /*#__PURE__*/react.createElement("div", {
      className: "content-container"
    }, /*#__PURE__*/react.createElement("div", {
      className: "content"
    }, item.content), /*#__PURE__*/react.createElement("div", {
      className: "time"
    }, moment_default()(item.createTime).fromNow())));
  }))), /*#__PURE__*/react.createElement(Footer, {
    className: "gb-chat-footer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "chat-inp"
  }, /*#__PURE__*/react.createElement(TextArea, {
    rows: 3,
    maxLength: 500,
    value: chatContent,
    onChange: e => {
      chatInp(e);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "publish-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "publish-btn",
    onClick: e => {
      publishContent();
    }
  }, "\u53D1\u5E03"))))));
};
/* harmony default export */ var chatWindow = (/*#__PURE__*/(0,react.memo)(ChatWindow));
;// CONCATENATED MODULE: ./src/components/content/detail/chatDetail/index.tsx






const {
  Header: chatDetail_Header,
  Footer: chatDetail_Footer,
  Sider: chatDetail_Sider,
  Content: chatDetail_Content
} = layout["default"];
const ChatDetail = () => {
  const location = (0,dist/* useLocation */.TH)();
  const {
    userId,
    userName
  } = location.state;
  return /*#__PURE__*/react.createElement(ChatWrapper, null, /*#__PURE__*/react.createElement(layout["default"], null, /*#__PURE__*/react.createElement(chatDetail_Header, null, /*#__PURE__*/react.createElement(header/* default */.Z, null)), /*#__PURE__*/react.createElement(chatDetail_Content, {
    className: "gb-content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "gb-content-inner"
  }, /*#__PURE__*/react.createElement("div", {
    className: "title"
  }, "\u6211\u7684\u6D88\u606F"), /*#__PURE__*/react.createElement(chatWindow, {
    userId: userId,
    userName: userName
  })))));
};
/* harmony default export */ var chatDetail = (/*#__PURE__*/(0,react.memo)(ChatDetail));

/***/ })

}]);
//# sourceMappingURL=29b4b6da4068561dd654.bundle.js.map