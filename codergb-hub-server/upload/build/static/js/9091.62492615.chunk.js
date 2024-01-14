"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[9091],{49101:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(1413),r=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},o=n(30076),l=function(e,t){return r.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:i}))};l.displayName="PlusOutlined";var c=r.forwardRef(l)},9676:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(4942),r=n(87462),i=n(93967),o=n.n(i),l=n(50132),c=n(67294),s=n(53124),u=n(65223),d=n(93433),m=n(29439),f=n(98423),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=c.createContext(null),h=function(e,t){var n=e.defaultValue,i=e.children,l=e.options,u=void 0===l?[]:l,h=e.prefixCls,g=e.className,y=e.style,b=e.onChange,w=p(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),E=c.useContext(s.E_),x=E.getPrefixCls,Z=E.direction,C=c.useState(w.value||n||[]),$=(0,m.Z)(C,2),N=$[0],S=$[1],P=c.useState([]),O=(0,m.Z)(P,2),I=O[0],F=O[1];c.useEffect((function(){"value"in w&&S(w.value||[])}),[w.value]);var M=function(){return u.map((function(e){return"string"==typeof e||"number"==typeof e?{label:e,value:e}:e}))},j=x("checkbox",h),U="".concat(j,"-group"),q=(0,f.Z)(w,["value","disabled"]);u&&u.length>0&&(i=M().map((function(e){return c.createElement(k,{prefixCls:j,key:e.value.toString(),disabled:"disabled"in e?e.disabled:w.disabled,value:e.value,checked:-1!==N.indexOf(e.value),onChange:e.onChange,className:"".concat(U,"-item"),style:e.style},e.label)})));var K={toggleOption:function(e){var t=N.indexOf(e.value),n=(0,d.Z)(N);-1===t?n.push(e.value):n.splice(t,1),"value"in w||S(n);var a=M();null==b||b(n.filter((function(e){return-1!==I.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:N,disabled:w.disabled,name:w.name,registerValue:function(e){F((function(t){return[].concat((0,d.Z)(t),[e])}))},cancelValue:function(e){F((function(t){return t.filter((function(t){return t!==e}))}))}},z=o()(U,(0,a.Z)({},"".concat(U,"-rtl"),"rtl"===Z),g);return c.createElement("div",(0,r.Z)({className:z,style:y},q,{ref:t}),c.createElement(v.Provider,{value:K},i))},g=c.forwardRef(h),y=c.memo(g),b=n(98866),w=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},E=function(e,t){var n,i=e.prefixCls,d=e.className,m=e.children,f=e.indeterminate,p=void 0!==f&&f,h=e.style,g=e.onMouseEnter,y=e.onMouseLeave,E=e.skipGroup,k=void 0!==E&&E,x=e.disabled,Z=w(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),C=c.useContext(s.E_),$=C.getPrefixCls,N=C.direction,S=c.useContext(v),P=(0,c.useContext)(u.aM).isFormItemInput,O=(0,c.useContext)(b.Z),I=x||(null==S?void 0:S.disabled)||O,F=c.useRef(Z.value);c.useEffect((function(){null==S||S.registerValue(Z.value)}),[]),c.useEffect((function(){if(!k)return Z.value!==F.current&&(null==S||S.cancelValue(F.current),null==S||S.registerValue(Z.value),F.current=Z.value),function(){return null==S?void 0:S.cancelValue(Z.value)}}),[Z.value]);var M=$("checkbox",i),j=(0,r.Z)({},Z);S&&!k&&(j.onChange=function(){Z.onChange&&Z.onChange.apply(Z,arguments),S.toggleOption&&S.toggleOption({label:m,value:Z.value})},j.name=S.name,j.checked=-1!==S.value.indexOf(Z.value));var U=o()((n={},(0,a.Z)(n,"".concat(M,"-wrapper"),!0),(0,a.Z)(n,"".concat(M,"-rtl"),"rtl"===N),(0,a.Z)(n,"".concat(M,"-wrapper-checked"),j.checked),(0,a.Z)(n,"".concat(M,"-wrapper-disabled"),I),(0,a.Z)(n,"".concat(M,"-wrapper-in-form-item"),P),n),d),q=o()((0,a.Z)({},"".concat(M,"-indeterminate"),p)),K=p?"mixed":void 0;return c.createElement("label",{className:U,style:h,onMouseEnter:g,onMouseLeave:y},c.createElement(l.Z,(0,r.Z)({"aria-checked":K},j,{prefixCls:M,className:q,disabled:I,ref:t})),void 0!==m&&c.createElement("span",null,m))};var k=c.forwardRef(E),x=k;x.Group=y,x.__ANT_CHECKBOX=!0;var Z=x},50489:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(67294),r=n(42239),i=n(38648),o=n(48889),l=n(50817),c=n(49101),s=n(88633),u=n(95357),d=n(53133);const m=d.ZP.div`
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
`;var f=n(27816);const p=d.ZP.div`
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
`;var v=n(9676),h=n(95998),g=n(13790);const y=e=>{const{select:t}=e,[n,r]=(0,a.useState)([]),[i,o]=(0,a.useState)(0),l=(0,h.v9)((e=>e.getIn(["loginReducer","login"])));(0,a.useEffect)((()=>{(0,g.N3)(l.userMsg.userId,0,10).then((e=>{200===e.status&&(r(e.data.list),o(e.data.count))}))}),[l]);return a.createElement(p,null,a.createElement("ul",{className:"add-play-list"},n&&0!==n.length&&n.map(((e,n)=>a.createElement("li",{key:e.id},a.createElement("div",{className:"left-container"},a.createElement("div",{className:"check"},a.createElement(v.Z,{onChange:n=>{((e,n)=>{t(e.target.checked,n)})(n,e)}})),a.createElement("div",{className:"play-list-name"},e.name)),a.createElement("div",{className:"right-container"},1===e.isPublic&&a.createElement(u.Z,null),1!==e.isPublic&&a.createElement(s.Z,null)))))))};var b=(0,a.memo)(y),w=n(80852);const{Option:E}=r.default,k=(0,a.forwardRef)(((e,t)=>{const{id:n}=e,[d,p]=(0,a.useState)(!1),[v,h]=(0,a.useState)(!1),[y,k]=(0,a.useState)(1),[x,Z]=(0,a.useState)(""),[C,$]=(0,a.useState)(0),N=e=>{e.name===f.M0&&p(!0),e.name===f.nu&&(0,w.T)(n).then((e=>{var t;console.log(e),200===e.status&&(t="bottomLeft",i.Z.info({message:"已成功添加至稍后观看",description:'在"稍后观看"查看您添加的视频',placement:t}))})).catch((e=>{}))};(0,a.useImperativeHandle)(t,(()=>({liClick:N})));return a.createElement(m,null,a.createElement("div",{onClick:e=>{e.stopPropagation()}},a.createElement(o.Z,{key:n,title:"保存到...",width:"30%",destroyOnClose:!0,maskClosable:!1,open:d,onCancel:e=>{p(!1)},footer:v?[a.createElement("div",{className:"create-playlist"},a.createElement("p",null,"名称"),a.createElement(l.default,{placeholder:"请输入播放列表名称",showCount:!0,maxLength:20,onInput:e=>{(e=>{Z(e.currentTarget.value)})(e)}}),a.createElement("p",null,"隐私设置"),a.createElement(r.default,{onChange:e=>{$(e)},value:C,placeholder:"请选择播放列表属性"},a.createElement(E,{value:0},a.createElement("div",{className:"private"},a.createElement("div",{className:"name"},"私享"),a.createElement("div",{className:"icon"},a.createElement(s.Z,null)))),a.createElement(E,{value:1},a.createElement("div",{className:"private"},a.createElement("div",{className:"name"},"公开"),a.createElement("div",{className:"icon"},a.createElement(u.Z,null))))),a.createElement("div",{className:"create-label",onClick:e=>{x&&(0,g.cg)(x,x,C).then((e=>{200===e.status&&(h(!1),k(y+1))}))}},"创建"))]:[a.createElement("div",{className:"add-new-playlist"},a.createElement(c.Z,null),a.createElement("div",{className:"add-label",onClick:e=>{(e=>{e.stopPropagation(),h(!0)})(e)}},"新建播放列表"))]},d&&a.createElement(b,{key:y,select:(e,t)=>{((e,t)=>{e&&(0,g.xW)(n,t.id).then((e=>{200===e.status&&i.Z.info({message:`已成功添加至${t.name}`,description:`在"${t.name}"查看您添加的视频`,placement:"bottomLeft"})}))})(e,t)}}))))}));var x=(0,a.memo)(k)},35724:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);var r=(e,t,n)=>function(e,t){let n=[];for(let a=0;a<Math.ceil(e/t)*t-e;a++)n.push(a);return n}(e,t).map(((e,t)=>a.createElement("li",{key:t,style:{width:n/40+"rem",height:0,border:"none",padding:0,margin:0,outline:"none"}}," ")))},72249:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(67294),r=n(89250);const i=n(53133).ZP.div`
  background-color: #fff;
  width: ${e=>e.isFlex?"100%":e.itemWidth/40+"rem"};
  height: ${e=>e.isFlex?"auto":e.itemWidth*e.scale/40+"rem"};
  display: ${e=>e.isFlex?"flex":"block"};
  align-items: flex-start;
  position: relative;
  & > img {
    width: ${e=>e.isFlex?e.itemWidth/40+"rem":"100%"};
    border-radius: ${.2}rem ${.2}rem
      ${e=>e.isFlex?"0.2rem":"0"}
      ${e=>e.isFlex?"0.2rem":"0"};
  }
  .dt-pos {
    position: absolute;
    left: ${e=>e.dtPos?e.dtPos.left+"%":"100%"};
    top: ${e=>e.dtPos?e.dtPos.top+"%":"100%"};
    transform: translate(-100%, -100%);
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-weight: bolder;
    font-size: ${.45}rem;
    padding: 1px 6px;
    border-radius: 5px;
    white-space: nowrap;
  }
  .video-container {
    border-radius: ${.2}rem ${.2}rem 0 0;
    overflow: hidden;
    width: 100%;
    height: ${e=>e.vioHeight/40+"rem"};
    background-color: black;
    & > video {
      width: 100%;
      height: ${e=>e.vioHeight/40+"rem"};
      object-position: 50% 50%;
      object-fit: contain;
    }
  }
  .msg-info {
    display: ${e=>e.isFlex?"block":"flex"};
    align-items: flex-start;
    margin: ${e=>e.isFlex?0:"0.5rem"} 0 0 0;
    padding: 0 ${.375}rem;
    width: 100%;
    .left-container {
      width: ${1.25}rem;
      height: ${1.25}rem;
      border-radius: 50%;
      background-color: #eeeeee;
      overflow: hidden;
      display: ${e=>e.isFlex&&!e.isShowUser?"none":"block"};
      img {
        width: 100%;
      }
    }
    .right-container {
      width: ${e=>e.isShowUser?"80%":"100%"};
      margin: 0 0 0 ${e=>e.isShowUser?"0.5rem":"0"};
      .msg {
        .state {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
          .video-name {
            font-size: ${e=>e.isFlex?e.itemWidth/16/40+"rem":e.itemWidth/20/40+"rem"};
            color: #0f0f0f;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            width: 100%;
            word-break: break-all;
          }
          .more {
            width: 10%;
            .more-icon {
              cursor: pointer;
              svg {
                font-size: ${.85}rem;
              }
            }
          }
        }
        .pos-user-container {
          display: flex;
          align-items: center;
          padding: ${.25}rem 0;
          .pos-user-container-avatar {
            width: ${1.25}rem;
            height: ${1.25}rem;
            border-radius: 50%;
            background-color: #eeeeee;
            overflow: hidden;
            margin: 0 ${.25}rem 0 0;
            img {
              width: 100%;
            }
          }
        }
        .user-name {
          font-size: ${.4}rem;
          color: #606060;
          margin: ${5/40}rem 0 0 0;
        }
        .play-count {
          & > span {
            color: #606060;
            font-size: ${.4}rem;
            &:nth-child(1) {
              margin: 0 ${5/40}rem 0 0;
            }
          }
        }
      }
    }
  }
`;var o=n(92977),l=n(16114),c=n(28682),s=n(50489),u=n(5521),d=n(27816),m=n(67294),f=n(30381);const p=e=>{const{user:t,isShowUser:n=!0,isPosUser:p=!1,img:v,vioHeight:h,dt:g,playCount:y,dtPos:b,isFlex:w,state:E,id:k,isShowMore:x,createTime:Z,itemWidth:C,scale:$,video:N,isShowVideo:S,isShowImg:P}=e,[O,I]=(0,a.useState)(!1),F=(0,r.s0)(),M=(0,a.useRef)(null),j=e=>{t&&(e.stopPropagation(),F("/home/userDetail",{state:{userId:t.userId},replace:!1}))};return m.createElement(i,{isShowUser:n,itemWidth:C,scale:$,vioHeight:h,isFlex:w,dtPos:b},!S&&v,S&&m.createElement("div",{className:"video-container"},N),m.createElement("div",{className:"dt-pos"},(0,u.f)(g||"0")),m.createElement("div",{className:"msg-info"},n&&m.createElement("div",{className:"left-container",onClick:e=>{j(e)}},m.createElement("img",{src:t.avatarUrl})),m.createElement("div",{className:"right-container"},m.createElement("div",{className:"msg"},m.createElement("div",{className:"state"},m.createElement("div",{className:"video-name"},E),x&&m.createElement("div",{className:"more",onClick:e=>{(e=>{e.stopPropagation(),I(!0)})(e)}},m.createElement(l.Z,{trigger:["click"],overlay:m.createElement(c.Z,{onClick:e=>{M&&M.current&&M.current.liClick({icon:"",name:e.key})}},d.$8.map((e=>m.createElement(c.Z.Item,{key:e.name},m.createElement("div",{style:{display:"flex"}},m.createElement("div",null,e.icon),m.createElement("div",null,e.name))))))},m.createElement(o.Z,{className:"more-icon"})))),m.createElement("div",{className:p?"pos-user-container":""},p&&m.createElement("div",{className:"pos-user-container-avatar",onClick:e=>{j(e)}},m.createElement("img",{src:t.avatarUrl})),m.createElement("div",{className:"user-name"},t.userName)),m.createElement("div",{className:"play-count"},m.createElement("span",null,y,"次观看"),m.createElement("span",null,f(new Date(Z).getTime()).locale("zh-CN").fromNow()))),m.createElement("div",{className:"more"}))),m.createElement(s.Z,{id:k,ref:M}))};var v=(0,a.memo)(p)},27816:function(e,t,n){n.d(t,{$8:function(){return i},M0:function(){return r},nu:function(){return a}});const a='保存到"稍后观看',r="保存到播放列表",i=[{icon:"",name:"添加到队列"},{icon:"",name:a},{icon:"",name:r}]},24692:function(e,t,n){n.d(t,{I:function(){return r}});var a=n(74283);async function r(e,t){return await a.Z.get({url:"/cate/all",params:{offset:e,limit:t}})}},80852:function(e,t,n){n.d(t,{T:function(){return i},d:function(){return r}});var a=n(74283);async function r(e,t,n){return await a.Z.get({url:"/later/user/"+e,params:{offset:t,limit:n}})}async function i(e){return await a.Z.post({url:"/later/"+e})}},49028:function(e,t,n){n.d(t,{$x:function(){return r},Ay:function(){return b},EL:function(){return u},Ek:function(){return h},Fx:function(){return f},Mo:function(){return d},N$:function(){return o},O2:function(){return c},Ty:function(){return i},_M:function(){return p},b0:function(){return w},dd:function(){return v},fY:function(){return l},hk:function(){return y},lq:function(){return m},qI:function(){return g},sf:function(){return s}});var a=n(74283);async function r(e){return await a.Z.post({url:"/video/upload",data:e,headers:{"Content-type":"multipart/form-data"}})}async function i(e,t,n,r,i,o,l,c){return await a.Z.post({url:"/video/create",data:{videoId:e,title:t,desc:n,imgId:r,playlistId:i,tagIds:o,cateId:l,dt:c}})}async function o(e,t,n){return await a.Z.post({url:"/video/all",params:{offset:e,limit:t},data:{keyword:n}})}async function l(e){return await a.Z.get({url:`/video/url/${e}`})}async function c(e){return await a.Z.post({url:`/video/detail/${e}`})}async function s(e,t,n,r){return await a.Z.post({url:`/user/video/${e}`,params:{offset:n,limit:r},data:{keyword:t}})}async function u(e,t,n,r){return await a.Z.post({url:`/user/video/hot/${e}`,params:{offset:n,limit:r},data:{keyword:t}})}async function d(e,t,n,r){return await a.Z.post({url:`/video/sub/user/${e}`,params:{offset:t,limit:n},data:{isMonth:r}})}async function m(e,t,n){return await a.Z.post({url:"/video/thumb/user/"+e,params:{offset:t,limit:n}})}async function f(e,t,n){return await a.Z.post({url:"/video/similar/"+e,params:{offset:t,limit:n}})}async function p(e,t,n){return await a.Z.post({url:"/video/collection/"+e,params:{offset:t,limit:n}})}async function v(e){return await a.Z.post({url:"/record/"+e})}async function h(e){return await a.Z.get({url:"/record/user/"+e})}async function g(e){return await a.Z.get({url:"/record/thumb/"+e})}async function y(e){return await a.Z.post({url:"video/playCount/"+e})}async function b(){return await a.Z.get({url:"/video/carousel/all"})}async function w(e,t,n){return await a.Z.post({url:"/video/cate/"+e,params:{offset:t,limit:n}})}},5521:function(e,t,n){function a(e){"string"==typeof e&&(e=parseInt(e));const t=Math.floor(e/1e3)||0;if(0===t)return"00:00";{const e=Math.floor(t/60/60);let n=t%3600,a=0,r=0;0!==n&&(a=Math.floor(n/60),n%=60,0!==n&&(r=n));return`${0===e?"":`${e.toString().padStart(2,"0")}:`}${a.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}}n.d(t,{f:function(){return a}})},12492:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(67294),r=n(89250),i=n(59466),o=n(53133);const l=o.ZP.div`
  max-height: 87vh;
  overflow-y: scroll;
  .carousel-container {
    margin: 0 0 ${.625}rem 0;
    border-radius: 8px;
    overflow: hidden;
    .carousel-item {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .video-list {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    & > li {
      margin: 0 0 ${.75}rem 0;
      transition: transform 0.3s;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      overflow: hidden;
    }
  }
`;var c=n(49028),s=n.p+"static/medis/cate.91c9c5048ff9683f6f2d.png";const u=o.ZP.div`
  width: 100%;
  .page {
    margin: 20px 0;
    display: flex;
    width: 100%;
    background-color: #ffffff;
    max-width: 100% !important;
  }

  // Start here
  .container {
    width: 100%;
    background: #ffffff;
    overflow: hidden;
    border-radius: 4px;
  }
  .photo-container {
    position: relative;
    top: 0;
    left: 0px; // Adjust
    transform: rotate(0deg);
  }
  .photo-cont-item {
    display: flex;
    //width: 784px; // 320px + 60px margin
    .photo-item {
      white-space: nowrap;
      margin-right: 15px;
      border-radius: 4px;
      padding: 5px 10px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      color: #fff;

      background-image: url(${s}),
        linear-gradient(312deg, rgb(192, 208, 255) 3%, rgb(112, 147, 204) 100%);
      cursor: pointer;
      &.active {
        background-image: url(${s}),
          linear-gradient(303deg, rgb(255, 155, 126) -10%, rgb(255, 21, 21) 92%);
      }
    }
  }
  .animation-3 {
    animation: scroller 50s linear infinite;
    display: flex;
  }

  // Animations
  @keyframes scroller {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-${e=>e.width}px); // 320px + 60px margin: ;
    }
  }
`;var d=n(24692),m=n(67294);const f=e=>{const{itemClick:t}=e,[n,r]=(0,a.useState)([]),[i,o]=(0,a.useState)(0);(0,a.useEffect)((()=>{(0,d.I)(0,1e5).then((e=>{if(200===e.status){const n=[];for(const t of e.data.list){const e={...t,ref:(0,a.createRef)()};n.push(e)}r(n),o(e.data.count),0!==e.data.list.length&&t(e.data.list[0])}}))}),[]);const l=(0,a.useRef)(null),c=(0,a.useRef)(null),[s,f]=(0,a.useState)(0);(0,a.useEffect)((()=>{if(n&&0!==n.length&&l.current&&c.current){const e=Array.from(l.current.children);let t=0;for(const n of e)t+=n.offsetWidth+15;console.log(t),l.current.style.width=`${t}px`,c.current.style.width=t/2+"px",f(t/2)}}),[n,l.current,c.current]);const[p,v]=(0,a.useState)(0),h=(e,n)=>{t(e),v(n)};return m.createElement(u,{width:s},m.createElement("div",{className:"page",ref:c},m.createElement("div",{className:"container"},m.createElement("div",{className:"photo-container"},m.createElement("div",{className:"photo-cont-item animation-3",ref:l},n&&0!==n.length&&n.map(((e,t)=>m.createElement("div",{key:e.id,ref:e.ref,className:"photo-item "+(p===t?"active":""),onClick:()=>{h(e,t)}},e.name))),n&&0!==n.length&&n.map(((e,t)=>m.createElement("div",{key:e.id,className:"photo-item "+(p===t?"active":""),onClick:()=>{h(e,t)}},e.name))))))))};var p=(0,a.memo)(f),v=n(72249),h=n(35724),g=n(67294);const y=()=>{const e=(0,r.s0)(),[t,n]=(0,a.useState)([]);(0,a.useEffect)((()=>{(0,c.Ay)().then((e=>{e.status&&n(e.data.list)}))}),[]);const[o,s]=(0,a.useState)([]);return g.createElement(l,null,g.createElement("div",{className:"carousel-container"},g.createElement(i.Z,{autoplay:!0},t&&0!==t.length&&t.map((t=>g.createElement("div",{key:t.id,className:"carousel-item",onClick:()=>{(t=>{e("/videoDetail",{replace:!0,state:{id:t.videoId}})})(t)}},g.createElement("img",{src:t.picUrl})))))),g.createElement(p,{itemClick:e=>{(e=>{(0,c.b0)(e.id,0,20).then((e=>{200===e.status&&s(e.data.list)}))})(e)}}),g.createElement("ul",{className:"video-list"},o&&0!==o.length&&o.map(((t,n)=>g.createElement("li",{key:t.id,onClick:n=>{(t=>{e("/videoDetail",{replace:!0,state:{id:t.id}})})(t)}},g.createElement(v.Z,{img:g.createElement("img",{src:t.picUrl}),dtPos:{left:98,top:54},isShowVideo:!1,state:t.name,vioHeight:200,id:t.id,user:t.user,createTime:t.createTime,dt:t.dt,playCount:t.playCount,itemWidth:380,isShowMore:!0,scale:.92})))),(0,h.Z)(o.length,4,380)))};var b=(0,a.memo)(y)},50132:function(e,t,n){var a=n(87462),r=n(4942),i=n(44925),o=n(1413),l=n(15671),c=n(43144),s=n(79340),u=n(98557),d=n(67294),m=n(93967),f=n.n(m),p=function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,l.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,o.Z)((0,o.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,c.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,l=t.style,c=t.name,s=t.id,u=t.type,m=t.disabled,p=t.readOnly,v=t.tabIndex,h=t.onClick,g=t.onFocus,y=t.onBlur,b=t.onKeyDown,w=t.onKeyPress,E=t.onKeyUp,k=t.autoFocus,x=t.value,Z=t.required,C=(0,i.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),$=Object.keys(C).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=C[t]),e}),{}),N=this.state.checked,S=f()(n,o,(e={},(0,r.Z)(e,"".concat(n,"-checked"),N),(0,r.Z)(e,"".concat(n,"-disabled"),m),e));return d.createElement("span",{className:S,style:l},d.createElement("input",(0,a.Z)({name:c,id:s,type:u,required:Z,readOnly:p,disabled:m,tabIndex:v,className:"".concat(n,"-input"),checked:!!N,onClick:h,onFocus:g,onBlur:y,onKeyUp:E,onKeyDown:b,onKeyPress:w,onChange:this.handleChange,autoFocus:k,ref:this.saveInput,value:x},$)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,o.Z)((0,o.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);p.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.Z=p}}]);
//# sourceMappingURL=9091.62492615.chunk.js.map