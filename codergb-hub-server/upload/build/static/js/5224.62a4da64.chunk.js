"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[5224],{79821:function(e,t,r){r.r(t),r.d(t,{default:function(){return I}});var n=r(67294),a=r(89250),c=r(97183),s=r(62301),o=r(53133),l=r.p+"static/medis/chat-window.ce83c35be34a9cac0e6a.jpg";const i=o.ZP.div`
  .gb-content {
    width: 100%;
    background-image: url(${l});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    .gb-content-inner {
      width: ${40.5}rem;
      margin: ${1/40}rem auto;
      min-height: ${20.5}rem;
      /*background-color: #f0f2f5;*/
      .title {
        background-color: #ffffff;
        padding: ${.375}rem ${.5}rem ${.375}rem;
        border-radius: 10px;
        margin: 0 0 ${.375}rem;
      }
    }
  }
`;var u=r(50817);const m=o.ZP.div`
  background-color: #ffffff;
  .recent-title {
    font-size: ${.4}rem;
    color: #666666;
    padding: ${.5}rem ${.5}rem;
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
    height: ${13}rem;
    overflow-y: scroll;
    background-color: #f4f5f7;
    .chat-history {
      & > li {
        display: flex;
        padding: ${.5}rem 0;
        align-items: flex-start;
        .img-container {
          width: ${1.25}rem;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .content-container {
          max-width: 90%;
          margin: 0 0 0 ${.25}rem;
          .content {
            max-width: 100%;
            background-color: #ffffff;
            padding: ${.25}rem ${.375}rem;
            font-size: ${.5}rem;
            border-radius: ${.6}rem;
          }
          .time {
            font-size: ${.4}rem;
            color: #999999;
            display: flex;
            justify-content: flex-start;
            margin: ${.25}rem 0 0 ${5/40}rem;
          }
        }
        &.active {
          flex-direction: row-reverse;
          .content {
            margin: 0 ${.25}rem 0 0;
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
    min-width: ${8}rem!important;
    max-width: ${8}rem!important;
    width: ${8}rem!important;
    .chat-queue {
      & > li {
        display: flex;
        align-items: flex-start;
        padding: ${.25}rem ${.375}rem;
        cursor: pointer;
        &:hover {
          background-color: #e4e5e6;
        }
        &.active {
          background-color: #e4e5e6;
        }
        .img-container {
          width: ${1.75}rem;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .right-container {
          width: 70%;
          background-color: transparent;
          margin: 0 0 0 ${.5}rem;
          .user-name {
            color: #333333;
            font-size: ${.45}rem;
          }
          .content {
            color: #999999;
            font-size: ${.35}rem;
            width: 100%;
          }
        }
      }
    }
  }
  .gb-chat-footer {
    background-color: #ffffff;
    border-top: 1px solid #e5e5e5;
    height: ${5}rem;
    padding: ${.5}rem ${.25}rem ${.5}rem ${.25}rem;
    .publish-container {
      padding: ${.25}rem 0 0 0;
      display: flex;
      justify-content: flex-end;
      .publish-btn {
        display: inline-flex;
        border: 1px solid #cccccc;
        justify-content: center;
        font-size: ${.45}rem;
        padding: ${5/40}rem ${.25}rem;
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
`;var d=r(79179);class g{constructor(e,t){const r=Object.keys(t);let n="";for(let e=0;e<r.length;e++){const a=r[e];n+=`${a}=${t[a]}${e===r.length-1?"":"&"}`}const a=`${e}?${n}`;this.websocket=new WebSocket(`${d.i}${a}`)}async getSocketMsg(){return await new Promise(((e,t)=>{this.websocket.onmessage=function(t){const r=JSON.parse(t.data);e(r)}}))}sendSocketMsg(e){console.log(this.websocket.readyState),this.websocket.send(e)}}var f=r(54841),h=r(30381),b=r.n(h);const{Header:p,Footer:$,Sider:w,Content:k}=c.default,{TextArea:v}=u.default,E=e=>{const{userName:t,userId:r}=e,[a,s]=(0,n.useState)(r),[o,l]=(0,n.useState)(t),[i,u]=(0,n.useState)([]),[d,h]=(0,n.useState)(0),[E,N]=(0,n.useState)(""),x=(0,f.y)(),[S,y]=(0,n.useState)(null),[U,M]=(0,n.useState)(null),[I,z]=(0,n.useState)(null);(0,n.useEffect)((()=>{const e={targetUser:x.userMsg.userId,targetChatUser:a},t=new g("/chat/queue",e);z(t),t.websocket.onmessage=function(e){const t=JSON.parse(e.data);200===t.status&&(u(t.data.list),h(t.data.count))}}),[x.userMsg.userId]),(0,n.useEffect)((()=>{if(a&&x.userMsg.userId){const e={targetUser:a,sourceUser:x.userMsg.userId},t=new g("/chat",e);y(t),t.websocket.onmessage=function(e){U&&U.sendSocketMsg("pull"),I&&I.sendSocketMsg("pull")},t.websocket.onopen=function(){console.log("建立成功")}}}),[a,x.userMsg.userId,U]);const[C,H]=(0,n.useState)([]),[T,j]=(0,n.useState)(0);(0,n.useEffect)((()=>{if(a){const e={targetUser:a,sourceUser:x.userMsg.userId,limit:3e4},t=new g("/chat/content",e);M(t),t.websocket.onmessage=function(e){const t=JSON.parse(e.data);200===t.status&&H(t.data.list),I&&I.sendSocketMsg("pull")},t.websocket.onopen=function(){console.log("建立成功")}}}),[a,I]);const[O,_]=(0,n.useState)(0),q=(0,n.useRef)(null);return(0,n.useEffect)((()=>{console.log(q.current?.offsetHeight,q.current?.scrollHeight),q.current&&q.current.offsetHeight<=q.current.scrollHeight&&(q.current.scrollTop=q.current.scrollHeight)}),[q.current,C.length]),n.createElement(m,null,n.createElement(c.default,null,n.createElement(w,{className:"gb-chat-side"},n.createElement("div",{className:"recent-title"},"近期消息"),n.createElement("ul",{className:"chat-queue"},i&&0!==i.length&&i.map(((e,t)=>n.createElement("li",{key:e.id,onClick:r=>{((e,t)=>{s(e.sourceUser.userId),l(e.sourceUser.userName),_(t)})(e,t)},className:O===t?"active":""},n.createElement("div",{className:"img-container"},n.createElement("img",{src:e.sourceUser.avatarUrl})),n.createElement("div",{className:"right-container"},n.createElement("div",{className:"user-name"},e.sourceUser.userName),n.createElement("div",{className:"content text-nowrap"},e.content))))))),n.createElement(c.default,null,n.createElement(p,{className:"gb-chat-header"},o),n.createElement(k,{className:"gb-chat",ref:q},n.createElement("ul",{className:"chat-history"},C&&0!==C.length&&C.map((e=>n.createElement("li",{key:e.id,className:e.sourceUser.userId!==a?"active":""},n.createElement("div",{className:"img-container"},n.createElement("img",{src:e.sourceUser.avatarUrl})),n.createElement("div",{className:"content-container"},n.createElement("div",{className:"content"},e.content),n.createElement("div",{className:"time"},b()(e.createTime).fromNow()))))))),n.createElement($,{className:"gb-chat-footer"},n.createElement("div",{className:"chat-inp"},n.createElement(v,{rows:3,maxLength:500,value:E,onChange:e=>{(e=>{e.currentTarget&&void 0!==e.currentTarget.value&&null!==e.currentTarget.value&&N(e.currentTarget.value)})(e)}})),n.createElement("div",{className:"publish-container"},n.createElement("div",{className:"publish-btn",onClick:e=>{S&&(S.sendSocketMsg(E),N(""))}},"发布"))))))};var N=(0,n.memo)(E);const{Header:x,Footer:S,Sider:y,Content:U}=c.default,M=()=>{const e=(0,a.TH)(),{userId:t,userName:r}=e.state;return n.createElement(i,null,n.createElement(c.default,null,n.createElement(x,null,n.createElement(s.Z,null)),n.createElement(U,{className:"gb-content"},n.createElement("div",{className:"gb-content-inner"},n.createElement("div",{className:"title"},"我的消息"),n.createElement(N,{userId:t,userName:r})))))};var I=(0,n.memo)(M)}}]);
//# sourceMappingURL=5224.62a4da64.chunk.js.map