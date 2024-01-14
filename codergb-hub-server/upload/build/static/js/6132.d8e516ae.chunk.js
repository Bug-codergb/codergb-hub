"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[6132],{56132:function(e,t,r){r.d(t,{Z:function(){return P}});var n=r(67294),a=r(53133);const l=a.ZP.div`
  .publish-outer {
    display: flex;
    align-items: center;
    .user-msg {
      margin: 0 ${.45}rem 0 0;
      width: ${1.375}rem;
      height: ${1.375}rem;
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
          padding: 0 0 ${.2}rem 0;
        }
      }
      .input-focus {
        border-bottom-color: #0f0f0f;
      }
      .btn-controller {
        margin: ${.25}rem 0 0 0;
        display: flex;
        justify-content: flex-end;
        button {
          cursor: pointer;
          padding: ${.2}rem ${.45}rem;
          margin: 0 0 0 ${.2}rem;
          border-radius: ${.5}rem;
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
    margin: ${.5}rem 0 0 0;
    & > li {
      width: 100%;
      margin: 0 0 ${.375}rem 0;
      .comment-content {
        width: 100%;
        display: flex;
        align-items: flex-start;
      }
      .left-container {
        width: ${1.375}rem;
        height: ${1.375}rem;
        background-color: black;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .right-container {
        flex: 1;
        margin: 0 0 0 ${.375}rem;
        .user-name-time {
          display: flex;
          align-items: center;
          margin: 0 0 ${.25}rem 0;
          .user-name {
            font-weight: bold;
            font-size: ${.35}rem;
            margin: 0 ${5/40}rem 0 0;
          }
          .create-time {
            color: #606060;
          }
        }
        .content {
          font-size: ${.45}rem;
        }
        .reply-count-btn {
          margin: ${.25}rem 0 ${.375}rem 0;
          padding: ${7/40}rem ${.5}rem;
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          cursor: pointer;
          border-radius: ${.5}rem;
          & > span {
            color: #065fd4;
            font-size: ${.45}rem;
          }
          svg {
            font-size: ${.6}rem;
          }
          .count {
            margin: 0 0 0 ${5/40}rem;
          }
          &:hover {
            background-color: #def1ff;
          }
        }
        .publish-comment-reply-container {
          margin: ${.375}rem 0;
        }
        .reply-controller-btn {
          display: flex;
          align-items: center;
          margin: ${.375}rem 0 0 0;
          .thumb,
          .tread,
          .reply-label {
            margin: 0 ${.5}rem 0 0;
            cursor: pointer;
            svg {
              font-size: ${.6}rem;
            }
          }
          .thumb-count {
            margin: 0 0 0 ${5/40}rem;
          }
          .reply-label {
            padding: ${5/40}rem ${.375}rem;
            border-radius: ${.45}rem;
            font-size: ${.425}rem;
            &:hover {
              background-color: #e5e5e5;
            }
          }
        }
      }
    }
  }
`;var s=r(71344),i=r(85965),c=r(89250),o=r(58812),m=r(80177),u=r(81825),d=r(6073),p=r(19675),f=r(28612);const g=a.ZP.div``;var y=r(30381),b=r.n(y);const h=a.ZP.div`
  .publish-component-outer {
    display: flex;
    align-items: center;
    .user-msg {
      margin: 0 ${.45}rem 0 0;
      width: ${1}rem;
      height: ${1}rem;
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
          padding: ${.05}rem ${.2}rem;
          border-radius: 5px;
          margin: 0 ${5/40}rem ${5/40}rem 0;
          .at-label {
            font-size: ${.45}rem;
          }
          .at-user-name {
            white-space: nowrap;
            font-size: ${.45}rem;
          }
        }
        input {
          width: 100%;
          padding: 0 0 ${.2}rem 0;
        }
      }
      .input-focus {
        border-bottom-color: #0f0f0f;
      }
      .btn-controller {
        margin: ${.25}rem 0 0 0;
        display: flex;
        justify-content: flex-end;
        button {
          cursor: pointer;
          padding: ${.2}rem ${.45}rem;
          margin: 0 0 0 ${.2}rem;
          border-radius: ${.5}rem;
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
`,E=e=>{const{user:t,publish:r,isShowAt:a,atUser:l}=e,[s,i]=(0,n.useState)(!1),[c,o]=(0,n.useState)("");return n.createElement(h,null,n.createElement("div",{className:"publish-component-outer "+(s?"publish-component-outer-start":"")},n.createElement("div",{className:"user-msg"},n.createElement("img",{src:t.avatarUrl})),n.createElement("div",{className:"right-input"},n.createElement("div",{className:"input-container "+(s?"input-focus":"")},a&&n.createElement("div",{className:"at-user"},n.createElement("span",{className:"at-label"},"@"),n.createElement("span",{className:"at-user-name"},l?.userName)),n.createElement("input",{type:"text",placeholder:"添加回复...",value:c,onFocus:e=>{i(!0)},onBlur:e=>{},onInput:e=>{(e=>{o(e.currentTarget.value)})(e)}})),s&&n.createElement("div",{className:"btn-controller"},n.createElement("button",{className:"cancel",onClick:e=>{i(!1),o("")}},"取消"),n.createElement("button",{className:"confirm",disabled:0===c.length,onClick:e=>{o(""),i(!1),r(c)}},"评论")))))};var v=(0,n.memo)(E);const w=a.ZP.div`
  .reply-list {
    & > li {
      display: flex;
      align-items: flex-start;
      margin: 0 0 ${.375}rem 0;
      width: 100%;
      .left-msg {
        width: ${1}rem;
        height: ${1}rem;
        background-color: #000;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .right-msg {
        flex: 1;
        margin: 0 0 0 ${.375}rem;
        .user-name-time {
          display: flex;
          align-items: center;
          margin: 0 0 ${.25}rem 0;
          .user-name {
            font-weight: bold;
            font-size: ${.35}rem;
            margin: 0 ${5/40}rem 0 0;
          }
          .create-time {
            color: #606060;
          }
        }
        .content {
          font-size: ${.45}rem;
        }
        .reply-for-name {
          font-size: ${.45}rem;
          color: #065fd4;
        }
        .reply-controller-btn {
          display: flex;
          align-items: center;
          margin: ${.375}rem 0 0 0;
          .thumb,
          .tread,
          .reply-label {
            margin: 0 ${.5}rem 0 0;
            cursor: pointer;
            svg {
              font-size: ${.6}rem;
            }
          }
          .thumb-count {
            margin: 0 0 0 ${5/40}rem;
          }
          .reply-label {
            padding: ${5/40}rem ${.375}rem;
            border-radius: ${.45}rem;
            font-size: ${.425}rem;
            &:hover {
              background-color: #e5e5e5;
            }
          }
        }
        .reply-reply {
          margin: ${.375}rem 0;
        }
      }
    }
  }
`,$=a.ZP.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  .right-msg {
    flex: 1;
  }
`;var N=r(20494),x=r(8069),Z=r(95998);const k=e=>{const{reply:t,id:r,user:a,replyIndex:l,index:s,propsShowReplyHandle:c,propsReplyReplyHandle:p,thubmHandler:f}=e,g=(0,Z.v9)((e=>e.getIn(["loginReducer","login"]))),y=(0,i.K)("comment",t.id),h=(0,i.Q)("comment",t.id),E=(0,Z.I0)(),w=async()=>{if(t){if(console.log(y),y){200===(await(0,N.NZ)(t.id,"commentId")).status&&f()}else{200===(await(0,N.Nb)(t.id,"commentId")).status&&f()}t&&t.user&&g&&g.userMsg&&E((0,x.ZN)(g.userMsg.userId))}},k=async()=>{if(t){if(h){200===(await(0,N._0)(t.id,"commentId")).status&&f()}else{200===(await(0,N.RM)(t.id,"commentId")).status&&f()}t&&t.user&&g&&g.userMsg&&E((0,x.ZN)(g.userMsg.userId))}};return n.createElement($,null,n.createElement("div",{className:"left-msg"},n.createElement("img",{src:t.user.avatarUrl})),n.createElement("div",{className:"right-msg"},n.createElement("div",{className:"user-name-time"},n.createElement("span",{className:"user-name"},t.user.userName),n.createElement("span",{className:"create-time"},b()(t.createTime).locale("zh-CN").fromNow())),n.createElement("div",{className:"content"},t.content),r&&"object"==typeof t.reply&&t.reply.hasOwnProperty("user")&&t.reply.id!==r&&n.createElement("div",{className:"reply-for-name"},"@",t.reply&&"object"==typeof t.reply&&t.reply.hasOwnProperty("user")?t.reply.user.userName:""),n.createElement("div",{className:"reply-controller-btn"},n.createElement("div",{className:"thumb"},!y&&n.createElement(o.Z,{onClick:async e=>{await w()}}),y&&n.createElement(m.Z,{onClick:async e=>{await w()}}),n.createElement("span",{className:"thumb-count"},t.thumb??0)),n.createElement("div",{className:"tread"},!h&&n.createElement(u.Z,{onClick:async e=>{await k()}}),h&&n.createElement(d.Z,{onClick:async e=>{await k()}})),n.createElement("div",{className:"reply-label",onClick:e=>{(e=>{c(e)})(s)}},"回复")),s===l&&n.createElement("div",{className:"reply-reply"},n.createElement(v,{user:a,isShowAt:!0,atUser:t.user,publish:e=>{((e,t)=>{p(e,t)})(e,t)}}))))};var I=(0,n.memo)(k);const S=e=>{const{id:t,user:r,replyHandle:a}=e,[l,i]=(0,n.useState)([]),[c,o]=(0,n.useState)(0),[m,u]=(0,n.useState)(-1);(0,n.useEffect)((()=>{d(t,0,10)}),[t]);const d=async(e,t,r)=>{const n=await(0,s.WF)(e,t,r);200===n.status&&(i(n.data.list),o(n.data.count))};return n.createElement(w,null,n.createElement("ul",{className:"reply-list"},l&&0!==l.length&&l.map(((e,l)=>n.createElement("li",{key:e.id},n.createElement(I,{replyIndex:m,index:l,reply:e,id:t,user:r,thubmHandler:async()=>{await(async()=>{await d(t,0,10)})()},propsShowReplyHandle:e=>{(e=>{u(e===m?-1:e)})(e)},propsReplyReplyHandle:async(e,r)=>{await(async(e,r)=>{200===(await(0,s.Hi)(r.id,e)).status&&(await d(t,0,10),u(-1),a(c))})(e,r)}}))))))};var R=(0,n.memo)(S);const C=e=>{const{comment:t,comIndex:r,index:a,replyIndex:l,user:s,propsShowReplyHandle:y,propsPublishReplyHandle:h,propsShowReply:E,thumbHandler:w}=e,[$,k]=(0,n.useState)(0),I=(0,c.s0)(),S=(0,Z.v9)((e=>e.getIn(["loginReducer","login"]))),C=(0,i.K)("comment",t.id),H=(0,i.Q)("comment",t.id),z=(0,Z.I0)(),M=async()=>{if(t){if(console.log(C),C){200===(await(0,N.NZ)(t.id,"commentId")).status&&w()}else{200===(await(0,N.Nb)(t.id,"commentId")).status&&w()}t&&t.user&&S&&S.userMsg&&z((0,x.ZN)(S.userMsg.userId))}},P=async()=>{if(t){if(H){200===(await(0,N._0)(t.id,"commentId")).status&&w()}else{200===(await(0,N.RM)(t.id,"commentId")).status&&w()}t&&t.user&&S&&S.userMsg&&z((0,x.ZN)(S.userMsg.userId))}};return n.createElement(g,null,n.createElement("div",{className:"comment-content"},n.createElement("div",{className:"left-container",onClick:()=>{t&&I("/home/userDetail",{state:{userId:t.user.userId}})}},n.createElement("img",{src:t.user.avatarUrl})),n.createElement("div",{className:"right-container"},n.createElement("div",{className:"user-name-time"},n.createElement("span",{className:"user-name"},t.user.userName),n.createElement("span",{className:"create-time"},b()(t.createTime).locale("zh-CN").fromNow())),n.createElement("div",{className:"content"},t.content),n.createElement("div",{className:"reply-controller-btn"},n.createElement("div",{className:"thumb"},!C&&n.createElement(o.Z,{onClick:async e=>{await M()}}),C&&n.createElement(m.Z,{onClick:async e=>{await M()}}),n.createElement("span",{className:"thumb-count"},t.thumb??0)),n.createElement("div",{className:"tread"},!H&&n.createElement(u.Z,{onClick:async e=>{await P()}}),H&&n.createElement(d.Z,{onClick:async e=>{await P()}})),n.createElement("div",{className:"reply-label",onClick:e=>{(e=>{y(e)})(a)}},"回复")),a===l&&n.createElement("div",{className:"publish-comment-reply-container"},n.createElement(v,{isShowAt:!1,user:s,publish:e=>{((e,t)=>{h(e,t)})(e,t)}})),"number"==typeof t.reply&&0!==t.reply&&n.createElement("div",{className:"reply-count-btn",onClick:e=>{(e=>{E(e)})(a)}},a!==r&&n.createElement(p.Z,null),a===r&&n.createElement(f.Z,null),n.createElement("span",{className:"count"},0===$?"number"==typeof t.reply?t.reply:"":$),n.createElement("span",{className:"label"},"条回复")),a===r&&n.createElement(R,{id:t.id,user:s,replyHandle:e=>{(e=>{console.log(e),k(e+1)})(e)}}))))};var H=(0,n.memo)(C),z=r(37986);const M=e=>{const{user:t,alias:r,id:a}=e,[c,o]=(0,n.useState)([]),[m,u]=(0,n.useState)(0),[d,p]=(0,n.useState)(!1),[f,g]=(0,n.useState)(!1),[y,b]=(0,n.useState)(""),[h,E]=(0,n.useState)(-1),[v,w]=(0,n.useState)(-1);(0,n.useEffect)((()=>{$(a,0,10,r)}),[a]);i.K,i.Q;const $=(e,t,r,n)=>{(0,s.dR)(e,t,r,n).then((e=>{200===e.status&&(o(e.data.list),u(e.data.count))}))};return n.createElement(l,null,n.createElement("div",{className:"publish-outer "+(f?"publish-outer-start":"")},n.createElement("div",{className:"user-msg"},n.createElement("img",{src:t.avatarUrl})),n.createElement("div",{className:"right-input"},n.createElement("div",{className:"input-container "+(f?"input-focus":"")},n.createElement("input",{type:"text",placeholder:"添加评论...",value:y,onFocus:e=>{g(!0)},onBlur:e=>{},onInput:e=>{(e=>{b(e.currentTarget.value)})(e)}})),f&&n.createElement("div",{className:"btn-controller"},n.createElement("button",{className:"cancel",onClick:e=>{g(!1),b("")}},"取消"),n.createElement("button",{className:"confirm",disabled:0===y.length,onClick:e=>{(0,s.uo)(a,r,y).then((e=>{console.log(e),200===e.status&&(b(""),g(!1),$(a,0,10,r))}))}},"评论")))),n.createElement("ul",{className:"comment-list"},c&&0!==c.length&&c.map(((e,l)=>n.createElement("li",{key:e.id},n.createElement(H,{comment:e,user:t,index:l,comIndex:h,replyIndex:v,propsPublishReplyHandle:async(e,t)=>{await(async(e,t)=>{console.log(e,t),200===(await(0,s.Hi)(t.id,e)).status&&$(a,0,10,r)})(e,t)},propsShowReply:e=>{(e=>{E(e===h?-1:e)})(e)},thumbHandler:()=>{$(a,0,10,r)},propsShowReplyHandle:e=>{(e=>{w(e===v?-1:e)})(e)}})))),(!c||c&&0===c.length)&&n.createElement(z.Z,{padding:200,msg:"暂无评论，快来发布您的第一条评论"})))};var P=(0,n.memo)(M)},37986:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(67294),a=r(14277);const l=r(53133).ZP.div`
  padding: ${e=>e.padding/40+"rem 0"};
  display: flex;
  align-items: center;
  justify-content: center;
`,s=e=>{const{msg:t,padding:r}=e;return n.createElement(l,{padding:r},n.createElement(a.Z,{description:t||"暂无数据"}))};var i=(0,n.memo)(s)},85965:function(e,t,r){r.d(t,{K:function(){return a},Q:function(){return l}});var n=r(95998);const a=(e,t)=>{const r=(0,n.v9)((e=>e.getIn(["loginReducer","login"])));let a=-1;if(r){const{userDetail:n}=r;n&&n.thumb[e]&&0!==n.thumb[e].length&&t&&(a=n.thumb[e].findIndex(((e,r)=>t===e.id)))}return-1!==a},l=(e,t)=>{const r=(0,n.v9)((e=>e.getIn(["loginReducer","login"])));let a=-1;if(r){const{userDetail:n}=r;n&&n.tread[e]&&0!==n.tread[e].length&&t&&(a=n.tread[e].findIndex(((e,r)=>t===e.id)))}return-1!==a}},71344:function(e,t,r){r.d(t,{Hi:function(){return i},WF:function(){return l},Z4:function(){return c},dR:function(){return a},uo:function(){return s}});var n=r(74283);async function a(e,t,r,a){return await n.Z.get({url:"/comment/all/"+e,params:{offset:t,limit:r,alias:a}})}async function l(e,t,r){return await n.Z.get({url:"/comment/reply/all/"+e,params:{offset:t,limit:r}})}async function s(e,t,r){return await n.Z.post({url:"/comment",data:{id:e,alias:t,content:r}})}async function i(e,t){return await n.Z.post({url:"/comment/reply/"+e,data:{content:t}})}async function c(e,t,r){return await n.Z.get({url:`/comment/user/${e}`,params:{offset:t,limit:r}})}},20494:function(e,t,r){r.d(t,{$x:function(){return c},NZ:function(){return l},Nb:function(){return a},RM:function(){return s},_0:function(){return i}});var n=r(74283);async function a(e,t){return await n.Z.post({url:"/thumb",data:{id:e,alias:t}})}async function l(e,t){return await n.Z.post({url:"/thumb/cancel",data:{id:e,alias:t}})}async function s(e,t){return await n.Z.post({url:"/tread",data:{id:e,alias:t}})}async function i(e,t){return await n.Z.post({url:"/tread/cancel",data:{id:e,alias:t}})}async function c(e){return await n.Z.get({url:"thumb/video/"+e})}}}]);
//# sourceMappingURL=6132.d8e516ae.chunk.js.map