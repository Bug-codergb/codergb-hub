"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[6662],{99562:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(1413),l=a(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"}}]},name:"picture",theme:"outlined"},c=a(30076),o=function(e,t){return l.createElement(c.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:r}))};o.displayName="PictureOutlined";var s=l.forwardRef(o)},32849:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294);const l=a(53133).ZP.div`
  .global-upload-outer-cpn-style {
    background-color: #3399ff;
    .input-container {
      width: 100%;
      height: ${10}rem;
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
            width: ${1.75}rem;
            height: ${1.75}rem;
            color: #cc0101;
          }
        }
        .tip {
          font-size: ${.6}rem;
          letter-spacing: 5px;
          margin: ${.75}rem 0 0 0;
        }
      }
    }
  }
`;var r=a(48889),c=a(54458),o=a(99562),s=a(91591);const i=e=>{const{isShow:t,fileSource:a,isCustom:i,handleOk:m,network:u,uploadName:d,realWidth:p,aspectRatio:f,handleCancel:g}=e,[h,v]=(0,n.useState)(0),[E,y]=(0,n.useState)(!1),[b,w]=(0,n.useState)(null);(0,n.useEffect)((()=>{i&&y(!0)}),[i]);const N=(0,n.useRef)();return n.createElement(r.Z,{title:"自定义图片",open:t,maskClosable:!1,destroyOnClose:!0,onOk:async()=>{const e=new FormData;if(N.current){const t=await N.current.getCropperFile();e.append(d,t);const a=await u(e,(e=>{v(e.loaded/e.total*100)}));200===a.status&&m(a)}},width:"65%",onCancel:()=>{v(0),y(!1),w(null),g()}},t&&n.createElement(l,null,n.createElement("div",{className:"global-upload-outer-cpn-style"},!E&&!i&&n.createElement("div",{className:"input-container"},n.createElement("input",{type:"file",onChange:e=>{(e=>{e.currentTarget.files&&0!==e.currentTarget.files.length&&(w(e.currentTarget.files[0]),y(!0))})(e)}}),n.createElement("div",{className:"msg-tip"},n.createElement("p",{className:"tip"},"请选择图片"),n.createElement(o.Z,{className:"img-icon"}))),E&&n.createElement(s.Z,{file:i?a:b,imgWidth:5,scale:1,aspectRatio:f,isCircle:!1,realWidth:p,ref:N})),n.createElement(c.Z,{percent:parseFloat(h.toFixed(1))})))};var m=(0,n.memo)(i)},73610:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),l=a(89250);const r=a(53133).ZP.div`
  .user-avatar {
    width: 100%;
    padding: ${.6}rem 0;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    border-bottom: 1px solid #e5e5e5;
    .img-container {
      position: relative;
      width: ${3}rem;
      height: ${3}rem;
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
      font-size: ${.5}rem;
      white-space: nowrap;
      margin: ${.375}rem;
    }
  }
  .main-menu,
  .profile-menu {
    & > li {
      display: flex;
      align-items: center;
      padding: ${.3}rem ${.5}rem ${.3}rem ${.5}rem;
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
        width: ${.75}rem;
      }
      .nav-name {
        margin: 0 0 0 ${.5}rem;
        font-size: ${.5}rem;
        width: ${4.25}rem;
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
      height: ${.8}rem;
    }
    & > li {
      border-left: 4px solid #ffffff;
      .nav-name {
        font-family: 'YouTube Sans', 'Roboto', 'Arial', sans-serif;
        font-weight: 600;
        font-size: ${.5}rem;
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
`;var c=a(85161),o=a(95998),s=a(61706),i=a(32849),m=a(45290),u=a(13790);const d=()=>n.createElement("div",null,n.createElement("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",focusable:"false",className:"style-scope yt-icon",style:{pointerEvents:"none",display:"block",width:"100%",height:"100%"}},n.createElement("g",{className:"style-scope yt-icon"},n.createElement("path",{d:"M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z",className:"style-scope yt-icon"}))));var p=(0,n.memo)(d);const f=()=>n.createElement("div",null,n.createElement("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",focusable:"false",className:"style-scope yt-icon",style:{pointerEvents:"none",display:"block",width:"100%",height:"100%"}},n.createElement("g",{className:"style-scope yt-icon"},n.createElement("path",{d:"M15,19v-8l7,4L15,19z M22,7H2v2h20V7z M13,13H2v-2h11V13z M13,17H2v-2h11V17z",className:"style-scope yt-icon"}))));var g=(0,n.memo)(f);const h=e=>{const{isHome:t}=e,[a,d]=(0,n.useState)(!1),[f,h]=(0,n.useState)(null),[v,E]=(0,n.useState)(c.cK),y=(0,l.s0)(),b=(0,o.v9)((e=>e.getIn(["loginReducer","login"]))),[w,N]=(0,n.useState)(0);(0,n.useEffect)((()=>{t&&(0,u.N3)(b.userMsg.userId,0,1e5).then((e=>{if(200===e.status&&e.data.list&&0!==e.data.list.length){const t=e.data.list.map((e=>({id:e.id,name:e.name,path:c.tQ+"/"+e.id,icon:n.createElement(p,null),shadowIcon:n.createElement(g,null)})));if(0!==t.length){const e=c.cK.concat(t);E(e)}}}))}),[b.userMsg.userId]);const k=(e,t)=>{document.title=e.name,N(t),y(e.path,{replace:!0})};return n.createElement(r,null,!t&&n.createElement("div",{className:"user-avatar"},n.createElement("span",null,b.userMsg.userName),n.createElement("span",{className:"label"},"您的频道"),n.createElement("div",{className:"img-container",title:b.userMsg&&!b.userMsg.avatarUrl?"上传头像":""},b.userMsg&&b.userMsg.avatarUrl&&n.createElement("img",{src:b.userMsg.avatarUrl,alt:"avatar"}),b.userMsg&&!b.userMsg.avatarUrl&&n.createElement(s.Z,null),b.userMsg&&!b.userMsg.avatarUrl&&n.createElement("input",{type:"file",onChange:e=>{(e=>{if(e.currentTarget.files&&0!==e.currentTarget.files.length){const t=e.currentTarget.files[0];h(t),d(!0)}})(e)},className:"upload-avatar-icon"}),n.createElement(i.Z,{isShow:a,isCustom:!0,realWidth:200,fileSource:f,aspectRatio:1,handleOk:e=>{d(!1)},handleCancel:()=>{d(!1)},uploadName:"avatar",network:m.hN}))),n.createElement("ul",{className:"main-menu "+(t?"":"fold")},t&&c.cy&&0!==c.cy.length&&c.cy.map(((e,t)=>n.createElement("li",{key:e.name,onClick:a=>{k(e,t)},className:w===t?"active":""},n.createElement("div",{className:"nav-icon"},w===t?e.shadowIcon:e.icon),n.createElement("div",{className:"nav-name"},e.name)))),!t&&c.o2&&0!==c.o2.length&&c.o2.map(((e,t)=>n.createElement("li",{key:e.name,onClick:a=>{k(e,t)},className:w===t?"active":""},n.createElement("div",{className:"nav-icon"},w===t?e.shadowIcon:e.icon),n.createElement("div",{className:"nav-name"},e.name))))),n.createElement("ul",{className:"profile-menu"},t&&v&&v&&v.map(((e,t)=>n.createElement("li",{key:e.name,onClick:a=>{k(e,t+c.cy.length)}},n.createElement("div",{className:"nav-icon"},w===t+c.cy.length?e.shadowIcon:e.icon),n.createElement("div",{className:"nav-name text-nowrap",title:e.name},e.name))))))};var v=(0,n.memo)(h)},6662:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(67294),l=a(89250),r=a(97183),c=a(62301);const o=a(53133).ZP.div`
  .codergb-sider {
    background-color: #fff;
    height: 90vh;
    overflow-y: scroll;
  }
`;var s=a(73610);const{Header:i,Footer:m,Sider:u,Content:d}=r.default,p=()=>n.createElement(o,null,n.createElement(r.default,null,n.createElement(r.default,null,n.createElement(i,null,n.createElement(c.Z,null)),n.createElement(r.default,null,n.createElement(u,{className:"codergb-sider"},n.createElement(s.Z,{isHome:!0})),n.createElement(d,null,n.createElement(l.j3,null))))));var f=(0,n.memo)(p)}}]);
//# sourceMappingURL=6662.91e88742.chunk.js.map