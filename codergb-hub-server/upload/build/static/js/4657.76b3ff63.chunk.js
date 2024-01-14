"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[4657],{92977:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(1413),n=a(67294),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"},i=a(30076),c=function(e,t){return n.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:l}))};c.displayName="MoreOutlined";var s=n.forwardRef(c)},99562:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(1413),n=a(67294),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"}}]},name:"picture",theme:"outlined"},i=a(30076),c=function(e,t){return n.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:l}))};c.displayName="PictureOutlined";var s=n.forwardRef(c)},37986:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(67294),n=a(14277);const l=a(53133).ZP.div`
  padding: ${e=>e.padding/40+"rem 0"};
  display: flex;
  align-items: center;
  justify-content: center;
`,i=e=>{const{msg:t,padding:a}=e;return r.createElement(l,{padding:a},r.createElement(n.Z,{description:t||"暂无数据"}))};var c=(0,r.memo)(i)},32849:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294);const n=a(53133).ZP.div`
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
`;var l=a(48889),i=a(54458),c=a(99562),s=a(91591);const o=e=>{const{isShow:t,fileSource:a,isCustom:o,handleOk:m,network:d,uploadName:u,realWidth:g,aspectRatio:f,handleCancel:p}=e,[v,h]=(0,r.useState)(0),[E,b]=(0,r.useState)(!1),[y,N]=(0,r.useState)(null);(0,r.useEffect)((()=>{o&&b(!0)}),[o]);const w=(0,r.useRef)();return r.createElement(l.Z,{title:"自定义图片",open:t,maskClosable:!1,destroyOnClose:!0,onOk:async()=>{const e=new FormData;if(w.current){const t=await w.current.getCropperFile();e.append(u,t);const a=await d(e,(e=>{h(e.loaded/e.total*100)}));200===a.status&&m(a)}},width:"65%",onCancel:()=>{h(0),b(!1),N(null),p()}},t&&r.createElement(n,null,r.createElement("div",{className:"global-upload-outer-cpn-style"},!E&&!o&&r.createElement("div",{className:"input-container"},r.createElement("input",{type:"file",onChange:e=>{(e=>{e.currentTarget.files&&0!==e.currentTarget.files.length&&(N(e.currentTarget.files[0]),b(!0))})(e)}}),r.createElement("div",{className:"msg-tip"},r.createElement("p",{className:"tip"},"请选择图片"),r.createElement(c.Z,{className:"img-icon"}))),E&&r.createElement(s.Z,{file:o?a:y,imgWidth:5,scale:1,aspectRatio:f,isCircle:!1,realWidth:g,ref:w})),r.createElement(i.Z,{percent:parseFloat(v.toFixed(1))})))};var m=(0,r.memo)(o)},35724:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(67294);var n=(e,t,a)=>function(e,t){let a=[];for(let r=0;r<Math.ceil(e/t)*t-e;r++)a.push(r);return a}(e,t).map(((e,t)=>r.createElement("li",{key:t,style:{width:a/40+"rem",height:0,border:"none",padding:0,margin:0,outline:"none"}}," ")))},42752:function(e,t,a){a.d(t,{Bt:function(){return o},Qo:function(){return l},UE:function(){return c},Yd:function(){return n},ZU:function(){return s},cA:function(){return m},dh:function(){return i},tn:function(){return r}});const r="上传的视频",n="热门上传视频",l="短视频",i="单个播放列表",c="创建的播放列表",s="收藏的播放列表",o="订阅的频道",m="精选频道"},93038:function(e,t,a){a.d(t,{Ds:function(){return i},VA:function(){return l},cS:function(){return n}});var r=a(74283);async function n(){return await r.Z.get({url:"/block/all"})}async function l(e){return await r.Z.post({url:"/block/user/add",data:{blockId:e}})}async function i(e){return await r.Z.get({url:`/block/user/${e}`})}},64657:function(e,t,a){a.r(t),a.d(t,{default:function(){return ge}});var r=a(67294),n=a(60561),l=a(50817),i=a(38648),c=a(53133);const s=c.ZP.div`
  .desc-label {
    font-size: ${.45}rem;
    color: #606060;
  }
  .name-label-second {
    margin: ${.4}rem 0 0 0;
  }
  .publish-outer {
    display: flex;
    justify-content: flex-end;
    button {
      padding: ${5/40}rem ${.375}rem;
      background-color: #1162cc;
      color: #fff;
      font-size: ${.45}rem;
      border-radius: ${.1}rem;
    }
    [disabled] {
      background-color: #e5e5e5;
      color: #000000;
      cursor: not-allowed;
    }
  }
`;var o=a(95998),m=a(49314),d=a(48017);const{TextArea:u}=l.default,g=()=>{const e=(0,o.v9)((e=>e.getIn(["channelReducer","channel"]))),t=(0,o.v9)((e=>e.getIn(["loginReducer","login"]))),[a,n]=(0,r.useState)(e.name),[c,g]=(0,r.useState)(e.description),f=(0,o.I0)();return r.createElement(s,null,r.createElement("div",{className:"publish-outer"},r.createElement("button",{disabled:!a||0===a.trim().length||!c||0===c.trim().length,onClick:async r=>{await(async()=>{200===(await(0,m.pW)(e.id,{description:c,name:a})).status&&(f((0,d.Q)(t.userMsg.userId)),i.Z.success({message:"通知",description:"您的信息更新成功",placement:"bottomLeft"}))})()}},"发布")),r.createElement("div",{className:"name-label-first"},"名称"),r.createElement("p",{className:"desc-label"},"选用的频道名称要能反映您的身份和内容。"),r.createElement(l.default,{placeholder:"请输入人频道名称",value:a,onInput:e=>{(e=>{n(e.currentTarget.value)})(e)}}),r.createElement("div",{className:"name-label-second"},"说明"),r.createElement("p",{className:"desc-label"},"请介绍您的频道，方便大家认识你"),r.createElement(u,{rows:4,onInput:e=>{(e=>{g(e.currentTarget.value)})(e)},value:c,placeholder:"请输入简介",maxLength:200}))};var f=(0,r.memo)(g),p=a(48889),v=a(54458);const h=c.ZP.div``,E=c.ZP.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 0 0 ${.5}rem 0;
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
    margin: ${.5}rem 0 0 0;
    .img-container {
      width: ${7.5}rem;
      height: ${4.25}rem;
      background-color: #f9f9f9;
      position: relative;
      margin: 0 ${.6}rem 0 0;
      overflow: hidden;
      img {
        border-radius: ${e=>e.isAvatar?"50%":0};
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
`,b=e=>{const{title:t,label:a,img:n,desc:l,uploadHandle:i,operator:c,isAvatar:s}=e;return r.createElement(E,{isAvatar:s},r.createElement("div",{className:"title"},t),r.createElement("div",{className:"label"},a),r.createElement("div",{className:"content"},r.createElement("div",{className:"img-container"},n),r.createElement("div",{className:"right-content"},r.createElement("p",{className:"desc"},l),r.createElement("div",{className:"upload",onClick:e=>{i()}},c))))};var y=(0,r.memo)(b),N=a(99562);const w=c.ZP.div`
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
`;var $=a(91591);const k=(0,r.forwardRef)(((e,t)=>{const[a,n]=(0,r.useState)(null),[l,i]=(0,r.useState)(!1),c=(0,r.useRef)(null),s=async()=>await c.current.getCropperFile();return(0,r.useImperativeHandle)(t,(()=>({getCropperFile:s}))),r.createElement(w,null,r.createElement("div",{className:"upload-outer"},!l&&r.createElement("div",{className:"input-container"},r.createElement("input",{type:"file",onChange:e=>(e=>{console.log(e.currentTarget.files),e.currentTarget.files&&(n(e.currentTarget.files[0]),i(!0))})(e)}),r.createElement("div",{className:"msg-tip"},r.createElement("p",{className:"tip"},"请选择图片"),r.createElement(N.Z,{className:"img-icon"}))),l&&r.createElement($.Z,{file:a,imgWidth:5,scale:1,aspectRatio:1,isCircle:!1,realWidth:200,ref:c})))}));var x=(0,r.memo)(k),Z=a(45290),S=a(32849),C=a(44316),z=a(8069);const I=()=>{const[e,t]=(0,r.useState)(!1),[a,n]=(0,r.useState)(!1),[l,i]=(0,r.useState)(0),c=(0,o.v9)((e=>e.getIn(["loginReducer","login"]))),s=(0,o.v9)((e=>e.getIn(["channelReducer","channel"]))),u=(0,o.I0)(),g=(0,r.useRef)(null);return r.createElement(h,null,r.createElement(y,{title:"照片",label:"您的个人资料照片会随您的频道一起出现在 YouTube 上的一些地方，例如您的视频和评论旁边",desc:"建议使用一张不低于 98 x 98 像素而且大小不超过 4MB 的照片。文件格式为 PNG 或 GIF（不带动画）。请确保您的照片符合《YouTube 社区准则》",operator:c.userMsg.avatarUrl?"更换":"上传",isAvatar:!0,img:r.createElement("img",{src:c.userMsg.avatarUrl}),uploadHandle:()=>{t(!0)}}),r.createElement(y,{title:"横幅图片",label:"此图片将会显示在您频道的顶部",desc:"建议使用一张不低于 98 x 98 像素而且大小不超过 4MB 的照片。文件格式为 PNG 或 GIF（不带动画）。请确保您的照片符合《YouTube 社区准则》",operator:s.picUrl?"更换":"上传",isAvatar:!1,img:r.createElement("img",{src:s.picUrl}),uploadHandle:()=>{n(!0)}}),r.createElement(p.Z,{title:"自定义图片",open:e,destroyOnClose:!0,onOk:async()=>{const e=await g.current.getCropperFile();let a,r=new FormData;r.append("avatar",e),a=c.userMsg.avatarUrl?await(0,Z.n1)(c.userMsg.userId,r,(e=>{i(e.loaded/e.total*100)})):await(0,m.gg)(r,(e=>{i(e.loaded/e.total*100)})),200===a.status&&(u((0,z.ZN)(c.userMsg.userId)),t(!1))},width:"65%",onCancel:()=>{t(!1)}},r.createElement(x,{ref:g}),r.createElement(v.Z,{percent:parseFloat(l.toFixed(1))})),a&&r.createElement(S.Z,{isCustom:!1,aspectRatio:6.2,realWidth:1e3,isShow:a,handleOk:e=>(async e=>{e&&e.data&&e.data.id&&(await(0,m.pW)(s.id,{banner:`${e.data.id}`}),c&&c.userMsg&&s&&0!==Object.keys(e.data).length&&u((0,d.Q)(c.userMsg.userId))),n(!1)})(e),handleCancel:()=>n(!1),network:C.I,uploadName:"file"}))};var M=(0,r.memo)(I);const R=()=>r.createElement("div",null,r.createElement("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",focusable:"false",className:"style-scope tp-yt-iron-icon",style:{pointerEvents:"none",display:"block",width:"100%",height:"100%"}},r.createElement("g",{className:"style-scope tp-yt-iron-icon"},r.createElement("path",{d:"M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z",className:"style-scope tp-yt-iron-icon"}))));var T=(0,r.memo)(R);const P=c.ZP.div`
  background-color: #ffffff;
  .label {
    font-family: 'Roboto', 'Noto', sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    font-size: ${.5}rem;
  }
  .tip {
    font-family: 'Roboto', 'Noto', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-size: ${.375}rem;
  }
  .trailer-outer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e5e5e5;
    padding: ${.5}rem ${.5}rem ${.5}rem 0;
    margin: ${.5}rem 0 ${.5}rem 0;
    border-radius: 5px;
    .left-content {
      display: flex;
      align-items: center;
      .video-container {
        width: ${1.125}rem;
        height: ${1.125}rem;
        background-color: #e9e9e9;
        margin: 0 ${.4}rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: ${5/40}rem;
      }
      &.trailer-start {
        align-items: flex-start;
        width: 100%;
        .trailer {
          margin: ${.5}rem 0 0 0;
          width: 90%;
          display: flex;
          align-items: flex-start;
          .trailer-img-container {
            width: ${7}rem;
            img {
              width: 100%;
            }
          }
          .trailer-video-name {
            width: 76%;
            margin: 0 0 0 ${.625}rem;
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
`,O=c.ZP.div`
  .search-container {
    display: flex;
    align-items: center;
    .user-self,
    .video-lib {
      flex: 1;
    }
  }
  .video-list {
    height: ${10}rem;
    padding: ${.6}rem 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    & > li {
      padding: ${.45}rem;
      border: 1px solid #e5e5e5;
      margin: 0 0 ${.6}rem 0;
      width: ${5.5}rem;
      border-radius: ${.1}rem;
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
        margin: ${.375}rem 0 0 0;
        font-size: ${.45}rem;
        height: ${1.25}rem;
      }
    }
  }
`;var A=a(49028),F=a(35724);const{Search:H}=l.default,U=e=>{const{isTrailer:t,updateVideo:a}=e,[n,l]=(0,r.useState)(""),[i,c]=(0,r.useState)([]),[s,m]=(0,r.useState)(0),[d,u]=(0,r.useState)(-1),g=(0,o.v9)((e=>e.getIn(["loginReducer","login"]))),f=async e=>{l(e),await(async(e,t,a)=>{const r=await(0,A.sf)(g.userMsg.userId,e,t,a);200===r.status&&(c(r.data.list),m(r.data.count))})(e,0,10)};return r.createElement(O,null,r.createElement("div",{className:"search-container"},r.createElement("div",{className:"user-self"},r.createElement(H,{placeholder:"搜索您的视频",onSearch:(e,t)=>f(e)})),!t&&r.createElement("div",{className:"video-lib"},r.createElement(H,{placeholder:"搜索整站的视频",onSearch:e=>{}}))),r.createElement("ul",{className:"video-list"},i&&0!==i.length&&i.map(((e,n)=>r.createElement("li",{key:e.id,onClick:r=>(async(e,r)=>{u(r);let n={[t?"trailer":"featured"]:e.id};a(n)})(e,n),className:d===n?"active":""},r.createElement("div",{className:"video-cover"},r.createElement("img",{src:e.picUrl,alt:e.name})),r.createElement("div",{className:"video-name text-nowrap-mul-line"},e.name)))),(0,F.Z)(i.length,5,220)))};var V=(0,r.memo)(U),j=a(16114),B=a(49101);const W=c.ZP.div`
  margin: ${.5}rem ${.25}rem ${.5}rem 0;
  width: 90%;
  .block-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header-left {
      .name {
        margin: 0 0 ${.2}rem 0;
      }
      .desc {
        font-size: ${.4}rem;
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
        margin: 0 0 0 ${.25}rem;
      }
    }
  }
`,L=c.ZP.div`
  background-color: #fff;
  padding: ${.375}rem 0;
  .block-list {
    & > li {
      padding: ${.2}rem ${.625}rem;
      white-space: nowrap;
      &:hover {
        background-color: #f9f9f9;
        cursor: pointer;
      }
    }
  }
`;var Y=a(93038),Q=a(42752);const D=c.ZP.div`
  .search-container {
    display: flex;
    align-items: center;
    .user-self,
    .video-lib {
      flex: 1;
    }
  }
`,{Search:G}=l.default,_=()=>{const[e,t]=(0,r.useState)("");return r.createElement(D,null,r.createElement("div",{className:"search-container"},r.createElement("div",{className:"user-self"},r.createElement(G,{placeholder:"搜索您的播放列表",onSearch:async(e,a)=>{await(async e=>{t(e)})(e)}})),r.createElement("div",{className:"video-lib"},r.createElement(G,{placeholder:"搜索整站的播放列表",onSearch:e=>{}}))))};var K=(0,r.memo)(_);const q=e=>{const{addBlock:t}=e,[a,n]=(0,r.useState)([]),[l,i]=(0,r.useState)(!1);(0,r.useEffect)((()=>{(0,Y.cS)().then((e=>{200===e.status&&n(e.data)}))}),[]);return r.createElement(L,null,r.createElement("ul",{className:"block-list"},a&&0!==a.length&&a.map(((e,a)=>r.createElement("li",{key:e.id,onClick:a=>{(e=>{console.log(e),e.name===Q.dh?i(!0):(e.name===Q.tn||e.name===Q.Yd||e.name===Q.UE||e.name===Q.ZU||e.name===Q.Bt||e.name===Q.cA||e.name===Q.Qo)&&(0,Y.VA)(e.id).then((e=>{200===e.status&&t()}))})(e)}},e.name)))),r.createElement(p.Z,{title:"选择播放列表",cancelText:"取消",okText:"确定",open:l,onOk:()=>{i(!1)},maskClosable:!1,destroyOnClose:!0,width:"60%",onCancel:()=>{i(!1)}},l&&r.createElement(K,null)))};var J=(0,r.memo)(q),X=a(92977);const ee=c.ZP.div`
  margin: ${.5}rem 0 0 0;
  .user-block-list {
    & > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #e5e5e5;
      margin: 0 0 ${.5}rem 0;
      padding: ${.425}rem ${.5}rem;
      border-radius: 4px;
      .left-container {
        .layout-icon {
          width: 10%;
        }
        .block {
          .block-name {
            font-size: ${.45}rem;
            color: #0d0d0d;
            margin: 0 0 ${.325}rem 0;
          }
          .block-desc {
            font-size: ${.4}rem;
            color: #606060;
          }
        }
      }
    }
  }
`;var te=a(37986);const ae=()=>{const[e,t]=(0,r.useState)([]),a=(0,o.v9)((e=>e.getIn(["loginReducer","login"])));return(0,r.useEffect)((()=>{a&&a.userMsg&&(0,Y.Ds)(a.userMsg.userId).then((e=>{200===e.status&&t(e.data)}))}),[a]),r.createElement(ee,null,r.createElement("ul",{className:"user-block-list"},e&&0!==e.length&&e.map((e=>r.createElement("li",{key:e.id},r.createElement("div",{className:"left-container"},r.createElement("div",{className:"layout-icon"}," "),r.createElement("div",{className:"block"},r.createElement("div",{className:"block-name"},e.name),r.createElement("div",{className:"block-desc"},e.description))),r.createElement("div",{className:"right-container"},r.createElement(X.Z,null))))),e&&0==e.length&&r.createElement(te.Z,{msg:"请添加板块，添加后在您的首页显示",padding:70})))};var re=(0,r.memo)(ae),ne=a(67294);const le=()=>{const[e,t]=(0,r.useState)(1);return ne.createElement(W,null,ne.createElement("div",{className:"block-header"},ne.createElement("div",{className:"header-left"},ne.createElement("div",{className:"name"},"精选板块"),ne.createElement("div",{className:"desc"},"自定义频道首页的布局")),ne.createElement("div",{className:"header-right"},ne.createElement("div",{className:"add-icon"},ne.createElement(B.Z,{className:"add"})),ne.createElement(j.Z,{overlayClassName:"profile-drop-style",placement:"topLeft",trigger:["click"],overlay:ne.createElement(J,{addBlock:()=>{t(e+1)}})},ne.createElement("div",{className:"add-label"},"添加板块")))),ne.createElement(re,{key:e}))};var ie=(0,r.memo)(le),ce=a(67294);const se=()=>{const[e,t]=(0,r.useState)(!1),[a,n]=(0,r.useState)(!0),[l,i]=(0,r.useState)({}),c=(0,o.v9)((e=>e.getIn(["loginReducer","login"]))),s=(0,o.v9)((e=>e.getIn(["channelReducer","channel"]))),u=(0,o.I0)();console.log(s);return ce.createElement(P,null,ce.createElement("div",{className:"label"},"主推视频"),ce.createElement("div",{className:"tip"},"在您的频道首页顶部添加一个视频"),ce.createElement("div",{className:"trailer-outer"},ce.createElement("div",{className:"left-content "+(s?.trailer?"trailer-start":"")},ce.createElement("div",{className:"video-container"},ce.createElement(T,null)),ce.createElement("div",{style:{flex:1}},ce.createElement("div",{className:"label"},"频道预告片-用来吸引尚未订阅的用户"),ce.createElement("div",{className:"tip"},"向尚未订阅的用户分享您的频道的预览"),s?.trailer&&ce.createElement("div",{className:"trailer"},ce.createElement("div",{className:"trailer-img-container"},ce.createElement("img",{src:s.trailer.picUrl})),ce.createElement("div",{className:"trailer-video-name"},s.trailer.name)))),ce.createElement("div",{className:"right-content",onClick:e=>{n(!0),t(!0)}},!s||s&&!s.trailer?"添加":"更换")),ce.createElement("div",{className:"trailer-outer"},ce.createElement("div",{className:"left-content "+(s?.trailer?"trailer-start":"")},ce.createElement("div",{className:"video-container"},ce.createElement(T,null)),ce.createElement("div",{style:{flex:1}},ce.createElement("div",{className:"label"},"精选视频 - 用来吸引回访的订阅者"),ce.createElement("div",{className:"tip"},"重点推荐一个视频，吸引您的订阅者观看。"),s?.featured&&ce.createElement("div",{className:"trailer"},ce.createElement("div",{className:"trailer-img-container"},ce.createElement("img",{src:s.featured.picUrl})),ce.createElement("div",{className:"trailer-video-name"},s.featured.name)))),ce.createElement("div",{className:"right-content",onClick:e=>{n(!1),t(!0)}},!s||s&&!s.featured?"添加":"更换")),ce.createElement(p.Z,{open:e,onOk:async()=>{console.log(s),await(0,m.pW)(s.id,l),c&&c.userMsg&&s&&0!==Object.keys(l).length&&u((0,d.Q)(c.userMsg.userId)),t(!1)},cancelText:"取消",destroyOnClose:!0,okText:"确定",title:"选择视频",width:"65%",onCancel:()=>{t(!1)}},ce.createElement(V,{isTrailer:a,updateVideo:async e=>{await(async e=>{console.log(e),i(e)})(e)}})),ce.createElement(ie,null))};var oe=(0,r.memo)(se);const me=c.ZP.div`
  .title-tip {
    font-size: ${.75}rem;
    font-weight: bolder;
    padding: ${5/40}rem 0 ${5/40}rem 0;
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
      padding: ${5/40}rem ${.375}rem;
      border-radius: ${.15}rem;
    }
  }
`;var de=a(67294);const ue=()=>de.createElement(me,null,de.createElement("div",{className:"title-tip"},"频道自定义"),de.createElement("div",{className:"tab-pub"},de.createElement("div",{className:"customize-tabs"},de.createElement(n.Z,{defaultActiveKey:"1",onChange:()=>{},items:[{label:"布局",key:"1",children:de.createElement(oe,null)},{label:"品牌",key:"2",children:de.createElement(M,null)},{label:"基本信息",key:"3",children:de.createElement(f,null)}]}))));var ge=(0,r.memo)(ue)}}]);
//# sourceMappingURL=4657.76b3ff63.chunk.js.map