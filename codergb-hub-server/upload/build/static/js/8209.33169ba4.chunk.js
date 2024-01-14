"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[8209],{50489:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(67294),r=n(42239),l=n(38648),s=n(48889),c=n(50817),i=n(49101),o=n(88633),m=n(95357),u=n(53133);const d=u.ZP.div`
  background-color: #fff;
  box-shadow: 0 0 ${.375}rem rgba(0, 0, 0, 0.18);
  .add-list {
    padding: ${.65}rem 0;
    & > li {
      padding: ${.3}rem ${.5}rem;
      cursor: pointer;
      .name {
        font-size: ${.45}rem;
      }
      &:hover {
        background-color: #e5e5e5;
      }
    }
  }
  .ant-select {
    width: 100%;
  }
  .create-playlist {
    padding: 0 0 ${.5}rem 0;
    p {
      display: flex;
      justify-content: flex-start;
      font-size: ${.45}rem;
      color: #606060;
      margin: ${.35}rem 0;
    }
    .private {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .create-label {
      font-size: ${.45}rem;
      color: #065fd4;
      margin: ${.5}rem 0 0 0;
      cursor: pointer;
      width: 100%;
    }
  }
`;var f=n(27816);const p=u.ZP.div`
  .add-play-list {
    & > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${.2}rem 0;
      .left-container {
        display: flex;
        align-items: center;
        .play-list-name {
          margin: 0 0 0 ${.75}rem;
        }
      }
    }
  }
`;var g=n(9676),v=n(95998),h=n(13790);const E=e=>{const{select:t}=e,[n,r]=(0,a.useState)([]),[l,s]=(0,a.useState)(0),c=(0,v.v9)((e=>e.getIn(["loginReducer","login"])));(0,a.useEffect)((()=>{(0,h.N3)(c.userMsg.userId,0,10).then((e=>{200===e.status&&(r(e.data.list),s(e.data.count))}))}),[c]);return a.createElement(p,null,a.createElement("ul",{className:"add-play-list"},n&&0!==n.length&&n.map(((e,n)=>a.createElement("li",{key:e.id},a.createElement("div",{className:"left-container"},a.createElement("div",{className:"check"},a.createElement(g.Z,{onChange:n=>{((e,n)=>{t(e.target.checked,n)})(n,e)}})),a.createElement("div",{className:"play-list-name"},e.name)),a.createElement("div",{className:"right-container"},1===e.isPublic&&a.createElement(m.Z,null),1!==e.isPublic&&a.createElement(o.Z,null)))))))};var y=(0,a.memo)(E),b=n(80852);const{Option:$}=r.default,w=(0,a.forwardRef)(((e,t)=>{const{id:n}=e,[u,p]=(0,a.useState)(!1),[g,v]=(0,a.useState)(!1),[E,w]=(0,a.useState)(1),[N,x]=(0,a.useState)(""),[k,Z]=(0,a.useState)(0),C=e=>{e.name===f.M0&&p(!0),e.name===f.nu&&(0,b.T)(n).then((e=>{var t;console.log(e),200===e.status&&(t="bottomLeft",l.Z.info({message:"已成功添加至稍后观看",description:'在"稍后观看"查看您添加的视频',placement:t}))})).catch((e=>{}))};(0,a.useImperativeHandle)(t,(()=>({liClick:C})));return a.createElement(d,null,a.createElement("div",{onClick:e=>{e.stopPropagation()}},a.createElement(s.Z,{key:n,title:"保存到...",width:"30%",destroyOnClose:!0,maskClosable:!1,open:u,onCancel:e=>{p(!1)},footer:g?[a.createElement("div",{className:"create-playlist"},a.createElement("p",null,"名称"),a.createElement(c.default,{placeholder:"请输入播放列表名称",showCount:!0,maxLength:20,onInput:e=>{(e=>{x(e.currentTarget.value)})(e)}}),a.createElement("p",null,"隐私设置"),a.createElement(r.default,{onChange:e=>{Z(e)},value:k,placeholder:"请选择播放列表属性"},a.createElement($,{value:0},a.createElement("div",{className:"private"},a.createElement("div",{className:"name"},"私享"),a.createElement("div",{className:"icon"},a.createElement(o.Z,null)))),a.createElement($,{value:1},a.createElement("div",{className:"private"},a.createElement("div",{className:"name"},"公开"),a.createElement("div",{className:"icon"},a.createElement(m.Z,null))))),a.createElement("div",{className:"create-label",onClick:e=>{N&&(0,h.cg)(N,N,k).then((e=>{200===e.status&&(v(!1),w(E+1))}))}},"创建"))]:[a.createElement("div",{className:"add-new-playlist"},a.createElement(i.Z,null),a.createElement("div",{className:"add-label",onClick:e=>{(e=>{e.stopPropagation(),v(!0)})(e)}},"新建播放列表"))]},u&&a.createElement(y,{key:E,select:(e,t)=>{((e,t)=>{e&&(0,h.xW)(n,t.id).then((e=>{200===e.status&&l.Z.info({message:`已成功添加至${t.name}`,description:`在"${t.name}"查看您添加的视频`,placement:"bottomLeft"})}))})(e,t)}}))))}));var N=(0,a.memo)(w)},58209:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var a=n(67294),r=n(29934),l=n(46561),s=n(62602),c=n(22699),i=n(89250),o=n(30381),m=n.n(o),u=n(97183),d=n(99177),f=n(53133);const p=f.ZP.div``,g=f.ZP.div`
  width: ${44.5}rem;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
`,v=f.ZP.div`
  width: 67%;
  padding: ${.5}rem 0;
  .video-dm-container {
    width: ${29.75}rem;
    height: ${16}rem;
    position: relative;
    overflow: hidden;
    .inner {
      display: flex;
      align-items: center;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .start,
      .end {
        width: 400px;
        height: 100%;
      }
      .start {
        display: flex;
        justify-content: flex-end;
        position: relative;
        z-index: 99;
        & > ul {
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
          & > li {
            text-align: end;
            list-style: none;
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: 18px;
            padding: 5px 12px 8px 12px;
            color: #fff;
            font-weight: bolder;
            letter-spacing: 2px;
            font-size: ${.5}rem;
            text-shadow: 1px 1px 2px black;
          }
        }
      }
      .text {
        white-space: nowrap;
        color: #ec4141;
      }
    }
  }
  .video-container {
    width: ${29.75}rem;
    height: ${16}rem;
    overflow: hidden;
    background-color: black;
    border-radius: 3px;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-position: 50% 50%;
      object-fit: contain;
    }
    .controller-container {
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      padding: 20px 0 15px 0;
      transform: translate(0, -100%);
      color: #fff;
      background: linear-gradient(to top, rgba(33, 33, 33, 0.9) 1%, rgba(0, 0, 0, 0) 99%);
      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        .left {
          display: flex;
          align-items: center;
          .play-pause {
            margin: 0 ${.2}rem 0 0;
            display: flex;
            align-items: center;
            svg {
              font-size: ${.7}rem;
              cursor: pointer;
            }
          }
          .dt {
            display: flex;
            align-items: center;
            font-size: 14px;
          }
        }
        .right {
          display: flex;
          align-items: center;
          .volume {
            width: 120px;
          }
          .full {
            margin: 0 0 0 ${.2}rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            svg {
              font-size: ${.65}rem;
            }
          }
        }
      }
    }
  }
`,h=f.ZP.div`
  padding: 0 0 0 ${.65}rem;
  width: 33%;
`;var E=n(49028),y=n(93041),b=n(50489),$=n(95998),w=n(95357),N=n(58812),x=n(80177),k=n(81825),Z=n(6073),C=n(84189);const S=f.ZP.div`
  padding: ${.75}rem 0 ${1}rem;
  .video-title {
    font-size: ${.6}rem;
    font-weight: bold;
    margin: 0 0 ${.1}rem 0;
  }
  .tag-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 0 ${.25}rem 0;
    .name {
      color: #295dcd;
      cursor: pointer;
      font-size: ${.5}rem;
      margin: 0 ${.05}rem;
    }
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-content {
      display: flex;
      align-items: center;
      .user-msg-container {
        display: flex;
        align-items: center;
        .img-container {
          height: ${1.5}rem;
          width: ${1.5}rem;
          border-radius: 50%;
          overflow: hidden;
          background-color: black;
          img {
            width: 100%;
          }
        }
        .right-msg {
          margin: 0 0 0 ${.45}rem;
          .user-name {
            margin: 0 0 ${5/40}rem 0;
          }
          .sub-counter {
            margin: 0;
            font-size: ${.4}rem;
            color: #606060;
          }
        }
      }
      .sub-btn {
        background-color: #0f0f0f;
        color: #fff;
        cursor: pointer;
        font-size: ${.5}rem;
        padding: ${.25}rem ${.5}rem;
        border-radius: ${.6}rem;
        margin: 0 0 0 ${1}rem;
      }
    }
    .right-content {
      display: flex;
      align-items: center;
      .thumb {
        display: flex;
        align-items: center;
        .tread {
          border-left: 1px solid #d9d9d9;
          padding: 0 0 0 ${.45}rem;
          margin: 0 0 0 ${.45}rem;
        }
      }
      .thumb,
      .collection {
        cursor: pointer;
        background-color: #f2f2f2;
        margin: 0 0 0 ${.5}rem;
        padding: ${9/40}rem ${.45}rem ${5/40}rem;
        border-radius: ${.5}rem;
        .thumb-icon,
        .collection-icon,
        .tread-icon {
          svg {
            font-size: ${.6}rem;
          }
        }
        .label {
          margin: 0 0 0 ${.375}rem;
        }
        .thumb-icon-active {
          svg {
            color: #ff0000;
          }
        }
      }
    }
  }
  .desc {
    background-color: #f2f2f2;
    padding: ${.375}rem;
    margin: ${.375}rem 0;
    border-radius: ${.25}rem;
  }
`;var I=n(97465),M=n(20494),R=n(29143),P=n(8069),z=n(85965),L=n(27816);const T=e=>{const{videoInfo:t,id:n,playCount:r}=e,l=(0,$.v9)((e=>e.getIn(["loginReducer","login"]))),s=(0,R.$)(t?.user.userId),c=(0,z.K)("video",t?.id),o=(0,z.Q)("video",t?.id),m=(0,$.I0)(),u=(0,a.useRef)(null),[d,f]=(0,a.useState)(0);(0,a.useEffect)((()=>{t&&(0,I.$p)(t.user.userId).then((e=>{200===e.status&&f(e.data)}))}),[n]);const[p,g]=(0,a.useState)(0),v=e=>{(0,M.$x)(e.id).then((e=>{200===e.status&&g(e.data.count)}))};(0,a.useEffect)((()=>{t&&v(t)}),[t,n]);const h=async()=>{if(t){if(console.log(c),c){const e=await(0,M.NZ)(t.id,"vId");200===e.status&&console.log(e.data)}else{const e=await(0,M.Nb)(t.id,"vId");200===e.status&&console.log(e.data)}t&&t.user&&l&&l.userMsg&&m((0,P.ZN)(l.userMsg.userId)),t&&v(t)}},E=async()=>{if(t){if(o){const e=await(0,M._0)(t.id,"vId");200===e.status&&console.log(e.data)}else{const e=await(0,M.RM)(t.id,"vId");200===e.status&&console.log(e.data)}t&&t.user&&l&&l.userMsg&&m((0,P.ZN)(l.userMsg.userId)),t&&v(t)}},y=(0,i.s0)(),T=()=>{u&&u.current&&u.current.liClick({icon:"",name:L.M0})};return a.createElement(S,null,a.createElement("p",{className:"video-title text-nowrap-mul-line"},t?.name),a.createElement("ul",{className:"tag-list"},t?.tag&&0!==t.tag.length&&t.tag.map(((e,t)=>a.createElement("li",{key:e.id},0==t&&a.createElement("span",{className:"icon"},"#"),a.createElement("span",{className:"name"},e.name),a.createElement("span",{className:"icon"},"#"))))),a.createElement("div",{className:"info"},a.createElement("div",{className:"left-content"},a.createElement("div",{className:"user-msg-container"},t&&a.createElement("div",{className:"img-container",onClick:e=>{var n;n=t?.user,n&&y("/home/userDetail",{state:{userId:n.userId},replace:!1})}},a.createElement("img",{src:t?.user.avatarUrl})),a.createElement("div",{className:"right-msg"},a.createElement("p",{className:"user-name"},t?.user.userName),a.createElement("p",{className:"sub-counter"},d,"位订阅者"))),t&&l.userMsg.userId!==t.user.userId&&a.createElement("div",{className:"sub-btn",onClick:async e=>{await(async()=>{if(t?.user&&!s){const e=await(0,I.lu)(t?.user.userId);200===e.status&&console.log(e.data)}else if(t?.user&&s){const e=await(0,I.eM)(t.user.userId);200===e.status&&console.log(e.data)}t?.user&&l&&l.userMsg&&m((0,P.ZN)(l.userMsg.userId)),t&&(0,I.$p)(t.user.userId).then((e=>{200===e.status&&f(e.data)}))})()}},s?"已订阅":"订阅")),a.createElement("div",{className:"right-content"},a.createElement("div",{className:"collection",onClick:()=>{T()}},a.createElement(w.Z,null),a.createElement("span",{className:"label"},r)),a.createElement("div",{className:"thumb"},a.createElement("div",{className:"thumb-inner"},t&&!c&&a.createElement(N.Z,{className:"thumb-icon",onClick:async e=>{await h()}}),t&&c&&a.createElement(x.Z,{className:"thumb-icon",onClick:async e=>{await h()}}),a.createElement("span",{className:"label"},p)),a.createElement("div",{className:"tread"},t&&!o&&a.createElement(k.Z,{className:"tread-icon",onClick:async e=>{await E()}}),t&&o&&a.createElement(Z.Z,{className:"tread-icon",onClick:async e=>{await E()}}))),a.createElement("div",{className:"collection",onClick:()=>{T()}},a.createElement(C.Z,{className:"collection-icon"}),a.createElement("span",{className:"label"},"保存")))),a.createElement("div",{className:"desc"},t?.description),t&&a.createElement(b.Z,{id:t.id,ref:u}))};var j=(0,a.memo)(T),H=n(56132),F=n(48495);const U=f.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${.5}rem 0 0 0;
  .dm-outer {
    display: flex;
    align-items: center;
    border-radius: ${.2}rem;
    overflow: hidden;
    margin: 0 0 0 ${.375}rem;
    & > input {
      display: inline-block;
      width: ${12.5}rem;
      background-color: #f1f2f3;
      padding: ${.2}rem ${.375}rem;
    }
    .pub {
      cursor: pointer;
      background-color: #ff0000;
      color: #fff;
      height: 100%;
      padding: ${.2}rem ${.375}rem;
    }
  }
`;var D=n(74283);async function V(e){return await D.Z.post({url:"/dm/video/"+e})}const _=e=>{const{id:t,time:n,pub:r}=e,[l,s]=(0,a.useState)(""),c=()=>{(async function(e,t,n){return await D.Z.post({url:"/dm",data:{vId:e,text:t,time:n}})})(t,l,n).then((e=>{200===e.status&&(s(""),r())}))};return a.createElement(U,null,a.createElement("span",null,"已装填2条弹幕"),a.createElement("div",{className:"dm-outer"},a.createElement("input",{type:"text",value:l,onInput:e=>{(e=>{s(e.currentTarget.value)})(e)},placeholder:"发个弹幕,见证当下"}),a.createElement("div",{className:"pub",onClick:e=>{c()}},"发送")))};var O=(0,a.memo)(_),W=n(5521);const Y=f.ZP.div`
  padding: ${.4}rem 0;
  .bar {
    display: flex;
    align-items: center;
    & > li {
      padding: ${5/40}rem ${.375}rem;
      background-color: #f2f2f2;
      margin: 0 ${.5}rem 0 0;
      border-radius: ${.2}rem;
      cursor: pointer;
      &.active {
        background-color: #0f0f0f;
        color: #ffffff;
      }
    }
  }
  .similar-video-list {
    margin: ${.5}rem 0 0 0;
    & > li {
      display: flex;
      align-items: flex-start;
      width: 100%;
      margin: 0 0 ${.5}rem 0;
      .vio-img-container {
        width: ${6.25}rem;
        margin: 0 ${.5}rem 0 0;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        background-color: #e5e5e5;
        display: flex;
        align-items: center;
        img {
          width: 100%;
          cursor: pointer;
        }
        .dt {
          position: absolute;
          left: 100%;
          top: 100%;
          transform: translate(-110%, -110%);
          background-color: rgba(0, 0, 0, 0.65);
          color: #ffffff;
          padding: ${3/40}rem ${.25}rem;
          border-radius: ${.2}rem;
          font-size: ${.35}rem;
          font-weight: bolder;
          white-space: nowrap;
        }
      }
      .right-container {
        width: ${6}rem;
        overflow: hidden;
        .label-n {
          width: 100%;
          margin: 0 0 ${5/40}rem 0;

          word-break: break-all;
        }
        .dt-play-count {
          display: flex;
          align-items: center;
          & > p {
            color: #606060;
            font-size: ${.375}rem;
          }
        }
      }
    }
  }
`,q=e=>{const{id:t,userId:n,userName:r,play:l,videoId:s}=e,[c,i]=(0,a.useState)([]),[o,u]=(0,a.useState)(0),[d,f]=(0,a.useState)(0),[p,g]=(0,a.useState)(["全部"]);(0,a.useEffect)((()=>{console.log(r),r&&g(["全部",r])}),[r]),(0,a.useEffect)((()=>{t&&(0,E.Fx)(t,0,15).then((e=>{200===e.status&&(i(e.data.list),u(e.data.count))}))}),[t]);return a.createElement(Y,null,a.createElement("ul",{className:"bar"},p&&p.map(((e,r)=>a.createElement("li",{key:e,className:d===r?"active":"",onClick:a=>{((e,a)=>{"全部"!==e&&n?(0,E.sf)(n,"",0,15).then((e=>{200===e.status&&(i(e.data.list),u(e.data.count))})):t&&(0,E.Fx)(t,0,15).then((e=>{200===e.status&&(i(e.data.list),u(e.data.count))})),f(a)})(e,r)}},e)))),a.createElement("ul",{className:"similar-video-list"},c&&0!==c.length&&c.map(((e,t)=>s!==e.id&&a.createElement("li",{key:e.id},a.createElement("div",{className:"vio-img-container",onClick:t=>{(e=>{l(e.id)})(e)}},a.createElement("img",{src:e.picUrl,alt:e.name}),a.createElement("div",{className:"dt"},(0,W.f)(e.dt?e.dt:"0"))),a.createElement("div",{className:"right-container"},a.createElement("div",{className:"label-n text-nowrap-mul-line",title:e.name},e.name),a.createElement("div",{className:"label-n"},e.user.userName),a.createElement("div",{className:"dt-play-count"},a.createElement("p",null,e.playCount,"次观看"),a.createElement("p",null,m()(e.createTime).fromNow()))))))))};var X=(0,a.memo)(q),A=n(62301),K=n(69816);const Q=f.ZP.div`
  margin: ${.5}rem 0 0 0;
  width: 100%;
  .col-header {
    background-color: #f1f2f3;
    padding: ${.375}rem 0 ${.25}rem ${.375}rem;
    font-size: ${.525}rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    .name {
      max-width: 60%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .count {
      color: #a8acb1;
      font-weight: normal;
      margin: 0 0 0 ${.25}rem;
    }
  }
  .video-list {
    background-color: #f1f2f3;
    padding: 0 0 ${.375}rem 0;
    width: 100%;
    max-height: 410px;
    overflow-y: auto;
    margin-bottom: ${.3}rem;
    .item {
      display: flex;
      align-items: center;
      padding: ${.25}rem;
      justify-content: space-between;
      border-bottom: 1px solid #fff;
      &:hover {
        background-color: #e0e4eb;
        cursor: pointer;
      }
      .gb-play {
        color: #ea3323;
        margin: 0 ${5/40}rem 0;
        margin-left: 0 !important;
        svg {
          font-size: ${.575}rem;
        }
      }
      .sort {
        color: #ea3323;
        text-align: left;
        color: #969aa0;
        white-space: nowrap;
        padding-right: 5.7px;
        font-size: ${18.4/40}rem;
      }
      .img-container {
        width: ${3.75}rem;
        margin: 0 ${.25}rem 0 0;
        img {
          width: 100%;
          border-radius: 4px;
        }
      }
      .right-container {
        display: flex;
        justify-content: space-between;
        width: 67%;
        .label {
          flex: 7;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: #18191c;
        }
        .dt {
          flex: 2;
          text-align: right;
          color: #969aa0;
        }
      }
    }
  }
`;var B=n(936);const G=e=>{const{videoList:t,cId:n,onClick:r}=e,[l,s]=(0,a.useState)(null),[c,i]=(0,a.useState)(0);(0,a.useEffect)((()=>{(0,B.H)(n).then((e=>{200===e.status&&s(e.data)}))}),[n]);return a.createElement(Q,null,a.createElement("div",{className:"col-header"},a.createElement("span",{className:"name"},l&&l.name," . 合集"),a.createElement("span",{className:"count"},"(",c+1,"/",t.length,")")),a.createElement("ul",{className:"video-list"},t&&0!==t.length&&t.map(((e,t)=>a.createElement("li",{key:e.id,className:"item",onClick:()=>{((e,t)=>{r(e,t),i(t)})(e,t)}},c===t&&a.createElement(K.Z,{className:"gb-play",spin:!1,style:{color:t===c?"":"#f1f2f3"}}),c!==t&&a.createElement("span",{className:"sort"},(t+1).toString().padStart(2,"0")),a.createElement("div",{className:"img-container"},a.createElement("img",{src:e.picUrl})),a.createElement("div",{className:"right-container"},a.createElement("span",{className:"label"},e.name),a.createElement("span",{className:"dt"},(0,W.f)(e.dt))))))))};var J=(0,a.memo)(G);const ee="abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789";function te(e,t,n){let a=Math.floor(Math.random()*(t-e+1)+e);const r=ee.length-10;return 0===n&&a>=r&&(a=te(e,t,n)),a}function ne(e,t,n){let a=(r=-e.offsetHeight+n*t.offsetHeight+t.offsetHeight,l=n*t.offsetHeight,Math.floor(Math.random()*(l-r+1))+r);var r,l;let s=function(e){const t=ee.length-1;let n="";e=e||15;for(let a,r=0;r<e;r++)a=te(0,t,r),n+=ee[a];return n}(10),c=`\n        @keyframes ${s}{\n          0%{\n            transform :translateX(0) translateY(${a}px);\n          }  \n          100%{\n            transform :translateX(${window.innerWidth+30+t.offsetWidth}px) translateY(${a}px);\n          }\n        }\n        `;document.styleSheets[0].insertRule(c),t.style.animation=`${s} 16s normal`,t.style.animationFillMode="forwards"}const{Header:ae,Footer:re,Sider:le,Content:se}=u.default,ce=()=>{const e=(0,i.TH)(),{id:t,type:n="source",cId:o}=e.state;console.log(t);const[f,b]=(0,a.useState)(n),[w,N]=(0,a.useState)(""),[x,k]=(0,a.useState)(""),[Z,C]=(0,a.useState)(t),[S,I]=(0,a.useState)(),[M,R]=(0,a.useState)(),[P,z]=(0,a.useState)(0),L=(0,a.useRef)(null),T=(0,$.v9)((e=>e.getIn(["loginReducer","login"]))),U=(0,a.useRef)(null),D=(0,a.useRef)(null),[_,Y]=(0,a.useState)([]);(0,a.useEffect)((()=>{"collection"===n&&(0,E._M)(o,0,1e4).then((e=>{200===e.status&&e.data.list&&0!==e.data.list.length&&(Y(e.data.list),C(e.data.list[0].id))}))}),[n,o]),(0,a.useEffect)((()=>{D.current&&D.current.addEventListener("contextmenu",(e=>(e.preventDefault(),!1)))}),[D.current]),(0,a.useEffect)((()=>{Z&&(0,E.dd)(Z)}),[Z]),(0,a.useEffect)((()=>{Z&&(V(Z).then((e=>{if(0!==e.data.list.length){z(e.data.count);const t=e.data.list.map(((e,t)=>({...e,contentRef:(0,a.createRef)()})));R(t)}else R([]);(0,E.fY)(Z).then((e=>{if(200===e.status){let t=e.data.vioUrl;0,k(t)}}))})),(0,E.O2)(Z).then((e=>{200===e.status&&(I(e.data),ee(e.data.playCount))})))}),[Z]),(0,a.useEffect)((()=>{if(null!==L.current)if(y.ZP.isSupported()){const e=new y.ZP;e.loadSource(x),e.attachMedia(L.current),(0,F.Ve)(Z)}else L.current.canPlayType("application/vnd.apple.mpegurl")&&(L.current.src=x)}),[L.current,x]),(0,a.useEffect)((()=>{document.title=S?.name??"codergbhub"}),[S]);const[q,K]=(0,a.useState)(0),Q=(0,a.useRef)(!1),B=e=>{C(e),ie(!0)},[G,ee]=(0,a.useState)(0),te=(0,a.useRef)(null);(0,a.useEffect)((()=>{te.current&&te.current.addEventListener("fullscreenchange",(e=>{document.fullscreenElement?D.current&&(D.current.style.width="100vw",D.current.style.height="100vh",le(!0)):D.current&&(D.current.style.width="29.75rem",D.current.style.height="16rem",le(!1))}))}),[te,te.current]);const[re,le]=(0,a.useState)(!1);(0,a.useEffect)((()=>{}),[re]);const[ce,ie]=(0,a.useState)(!0),oe=()=>{ie(!ce),L.current&&(ce?L.current.pause():L.current.play())};(0,a.useEffect)((()=>{document.onkeydown=e=>{console.log(e),void 0===e.code||"space"!==e.code.toLocaleLowerCase()&&"keyf"!==e.code.toLocaleLowerCase()&&"escape"!==e.code.toLocaleUpperCase()||e.preventDefault()},document.onkeyup=e=>{!e.code||"space"!==e.code&&"Space"!==e.code?e.code&&"keyf"===e.code.toLocaleLowerCase()?(te.current?.requestFullscreen(),le(!0)):e.code&&"escape"===e.code.toLocaleLowerCase()&&(document.exitFullscreen(),le(!1)):(e.preventDefault(),oe())}}),[L.current,ce]);return a.createElement(p,null,a.createElement(u.default,null,a.createElement(ae,null,a.createElement(A.Z,null)),a.createElement(se,null,a.createElement(g,null,a.createElement(v,{videoRef:L},a.createElement("div",{className:"video-dm-container",ref:te},a.createElement("div",{className:"inner"},a.createElement("div",{className:"start"},a.createElement("ul",{ref:U},M?.map(((e,t)=>a.createElement("li",{key:e.id,className:"text",ref:e.contentRef,onMouseEnter:t=>{(e=>{e.contentRef.current&&(e.contentRef.current.style.animationPlayState="paused")})(e)},onMouseLeave:t=>{(e=>{e.contentRef.current&&(e.contentRef.current.style.animationPlayState="running")})(e)}},e.text))))),a.createElement("div",{className:"video-container",ref:D},x&&S&&a.createElement("video",{ref:L,poster:S.picUrl,controls:!1,muted:!1,onCanPlay:()=>{L.current&&(L.current.volume=.6,(0,E.hk)(Z).then((e=>{ee(e.data.playCount)})))},onTimeUpdate:e=>{(e=>{if(S&&!Q.current){const t=1e3*e.currentTarget.currentTime/Number(S.dt)*100;K(t)}if(M){N(m()(1e3*e.currentTarget.currentTime).format("mm:ss"));for(let t=0;t<M.length;t++)if(M&&D.current){const n=M[t];m()(1e3*e.currentTarget.currentTime).format("mm:ss")===n.time&&n.contentRef.current&&ne(D.current,n.contentRef.current,t)}}})(e)},autoPlay:!0,onEnded:()=>{ie(!1)},onClick:()=>{oe()}}),S&&a.createElement("div",{className:"controller-container"},a.createElement(d.Z,{defaultValue:0,value:q,step:.1,tooltip:{open:!1},onChange:e=>{(e=>{K(e),Q.current||(Q.current=!0)})(e)},onAfterChange:e=>{(e=>{if(S&&L.current){const t=e/100,n=Number(S.dt)*t/1e3;console.log(n),L.current.currentTime=n}Q.current=!1})(e)}}),a.createElement("div",{className:"container"},a.createElement("div",{className:"left"},a.createElement("div",{className:"play-pause",onClick:()=>{oe()}},!ce&&a.createElement(r.Z,{style:{color:"#ffffff"}}),ce&&a.createElement(l.Z,{style:{color:"#ffffff"}})),a.createElement("div",{className:"dt"},w," / ",(0,W.f)(S.dt))),a.createElement("div",{className:"right"},a.createElement("div",{className:"volume"},a.createElement(d.Z,{defaultValue:60,onChange:e=>{(e=>{console.log(e),L.current&&(L.current.volume=e/100)})(e)}})),a.createElement("div",{className:"full",onClick:()=>{te.current&&(re?document.exitFullscreen():te.current?.requestFullscreen())}},!re&&a.createElement(s.Z,null),re&&a.createElement(c.Z,null)))))),a.createElement("div",{className:"end"}," "))),a.createElement(O,{id:Z,time:w,pub:()=>{V(Z).then((e=>{if(0!==e.data.list.length){const t=e.data.list.map(((e,t)=>({...e,contentRef:(0,a.createRef)()})));R(t)}else R([])}))}}),a.createElement("div",{className:"video-info"},S?.user&&a.createElement(j,{videoInfo:S,id:Z,playCount:G})),a.createElement("div",{className:"video-comment"},T&&T.userMsg&&S&&a.createElement(H.Z,{user:T.userMsg,id:S.id,alias:"vId"}))),a.createElement(h,null,"collection"===f&&a.createElement(J,{videoList:_,cId:o,onClick:(e,t)=>{B(e.id)}}),S?.user&&a.createElement(X,{id:S?.category.id,key:Z,videoId:S?.id,userId:S?.user.userId,userName:S?.user.userName,play:t=>{(t=>{b("source"),B(t),e.state.id=t,C(t)})(t)}}))))))};var ie=(0,a.memo)(ce)},27816:function(e,t,n){n.d(t,{$8:function(){return l},M0:function(){return r},nu:function(){return a}});const a='保存到"稍后观看',r="保存到播放列表",l=[{icon:"",name:"添加到队列"},{icon:"",name:a},{icon:"",name:r}]},29143:function(e,t,n){n.d(t,{$:function(){return r}});var a=n(95998);const r=e=>{let t=-1;const n=(0,a.v9)((e=>e.getIn(["loginReducer","login"])));if(n){const{userDetail:a}=n;a&&0!==a.subscriber.length&&e&&(t=a.subscriber.findIndex(((t,n)=>e===t.userId)))}return-1!==t}},936:function(e,t,n){n.d(t,{H:function(){return l},V:function(){return r}});var a=n(74283);async function r(e,t,n){return await a.Z.post({url:"/collection/user/"+e,params:{offset:t,limit:n}})}async function l(e){return await a.Z.post({url:"/collection/detail/"+e})}},48495:function(e,t,n){n.d(t,{Pf:function(){return s},Ve:function(){return r},p5:function(){return l}});var a=n(74283);async function r(e){return await a.Z.post({url:"/history/"+e,data:{}})}async function l(e,t,n,r){return await a.Z.post({url:"/history/user/"+e,params:{offset:t,limit:n,keyword:r}})}async function s(){return await a.Z.post({url:"/history/delete/all"})}},80852:function(e,t,n){n.d(t,{T:function(){return l},d:function(){return r}});var a=n(74283);async function r(e,t,n){return await a.Z.get({url:"/later/user/"+e,params:{offset:t,limit:n}})}async function l(e){return await a.Z.post({url:"/later/"+e})}},97465:function(e,t,n){n.d(t,{$p:function(){return c},eM:function(){return l},lu:function(){return r},yf:function(){return s}});var a=n(74283);function r(e){return a.Z.post({url:"/sub/",data:{upId:e}})}function l(e){return a.Z.post({url:"/sub/cancel",data:{upId:e}})}function s(e,t,n){return a.Z.post({url:"/sub/user/"+e,data:{offset:t,limit:n}})}function c(e){return a.Z.get({url:"/sub/count/"+e})}},5521:function(e,t,n){function a(e){"string"==typeof e&&(e=parseInt(e));const t=Math.floor(e/1e3)||0;if(0===t)return"00:00";{const e=Math.floor(t/60/60);let n=t%3600,a=0,r=0;0!==n&&(a=Math.floor(n/60),n%=60,0!==n&&(r=n));return`${0===e?"":`${e.toString().padStart(2,"0")}:`}${a.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}}n.d(t,{f:function(){return a}})}}]);
//# sourceMappingURL=8209.33169ba4.chunk.js.map