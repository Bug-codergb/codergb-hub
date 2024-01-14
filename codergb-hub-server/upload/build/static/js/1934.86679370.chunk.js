"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[1934],{92977:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(1413),r=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"},l=n(30076),o=function(e,t){return r.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:i}))};o.displayName="MoreOutlined";var c=r.forwardRef(o)},9676:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(4942),r=n(87462),i=n(93967),l=n.n(i),o=n(50132),c=n(67294),s=n(53124),u=n(65223),d=n(93433),m=n(29439),f=n(98423),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=c.createContext(null),h=function(e,t){var n=e.defaultValue,i=e.children,o=e.options,u=void 0===o?[]:o,h=e.prefixCls,g=e.className,y=e.style,E=e.onChange,b=p(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),w=c.useContext(s.E_),Z=w.getPrefixCls,x=w.direction,$=c.useState(b.value||n||[]),N=(0,m.Z)($,2),C=N[0],P=N[1],S=c.useState([]),I=(0,m.Z)(S,2),O=I[0],M=I[1];c.useEffect((function(){"value"in b&&P(b.value||[])}),[b.value]);var F=function(){return u.map((function(e){return"string"==typeof e||"number"==typeof e?{label:e,value:e}:e}))},U=Z("checkbox",h),j="".concat(U,"-group"),z=(0,f.Z)(b,["value","disabled"]);u&&u.length>0&&(i=F().map((function(e){return c.createElement(k,{prefixCls:U,key:e.value.toString(),disabled:"disabled"in e?e.disabled:b.disabled,value:e.value,checked:-1!==C.indexOf(e.value),onChange:e.onChange,className:"".concat(j,"-item"),style:e.style},e.label)})));var K={toggleOption:function(e){var t=C.indexOf(e.value),n=(0,d.Z)(C);-1===t?n.push(e.value):n.splice(t,1),"value"in b||P(n);var a=F();null==E||E(n.filter((function(e){return-1!==O.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:C,disabled:b.disabled,name:b.name,registerValue:function(e){M((function(t){return[].concat((0,d.Z)(t),[e])}))},cancelValue:function(e){M((function(t){return t.filter((function(t){return t!==e}))}))}},T=l()(j,(0,a.Z)({},"".concat(j,"-rtl"),"rtl"===x),g);return c.createElement("div",(0,r.Z)({className:T,style:y},z,{ref:t}),c.createElement(v.Provider,{value:K},i))},g=c.forwardRef(h),y=c.memo(g),E=n(98866),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},w=function(e,t){var n,i=e.prefixCls,d=e.className,m=e.children,f=e.indeterminate,p=void 0!==f&&f,h=e.style,g=e.onMouseEnter,y=e.onMouseLeave,w=e.skipGroup,k=void 0!==w&&w,Z=e.disabled,x=b(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),$=c.useContext(s.E_),N=$.getPrefixCls,C=$.direction,P=c.useContext(v),S=(0,c.useContext)(u.aM).isFormItemInput,I=(0,c.useContext)(E.Z),O=Z||(null==P?void 0:P.disabled)||I,M=c.useRef(x.value);c.useEffect((function(){null==P||P.registerValue(x.value)}),[]),c.useEffect((function(){if(!k)return x.value!==M.current&&(null==P||P.cancelValue(M.current),null==P||P.registerValue(x.value),M.current=x.value),function(){return null==P?void 0:P.cancelValue(x.value)}}),[x.value]);var F=N("checkbox",i),U=(0,r.Z)({},x);P&&!k&&(U.onChange=function(){x.onChange&&x.onChange.apply(x,arguments),P.toggleOption&&P.toggleOption({label:m,value:x.value})},U.name=P.name,U.checked=-1!==P.value.indexOf(x.value));var j=l()((n={},(0,a.Z)(n,"".concat(F,"-wrapper"),!0),(0,a.Z)(n,"".concat(F,"-rtl"),"rtl"===C),(0,a.Z)(n,"".concat(F,"-wrapper-checked"),U.checked),(0,a.Z)(n,"".concat(F,"-wrapper-disabled"),O),(0,a.Z)(n,"".concat(F,"-wrapper-in-form-item"),S),n),d),z=l()((0,a.Z)({},"".concat(F,"-indeterminate"),p)),K=p?"mixed":void 0;return c.createElement("label",{className:j,style:h,onMouseEnter:g,onMouseLeave:y},c.createElement(o.Z,(0,r.Z)({"aria-checked":K},U,{prefixCls:F,className:z,disabled:O,ref:t})),void 0!==m&&c.createElement("span",null,m))};var k=c.forwardRef(w),Z=k;Z.Group=y,Z.__ANT_CHECKBOX=!0;var x=Z},50489:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(67294),r=n(42239),i=n(38648),l=n(48889),o=n(50817),c=n(49101),s=n(88633),u=n(95357),d=n(53133);const m=d.ZP.div`
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
`;var v=n(9676),h=n(95998),g=n(13790);const y=e=>{const{select:t}=e,[n,r]=(0,a.useState)([]),[i,l]=(0,a.useState)(0),o=(0,h.v9)((e=>e.getIn(["loginReducer","login"])));(0,a.useEffect)((()=>{(0,g.N3)(o.userMsg.userId,0,10).then((e=>{200===e.status&&(r(e.data.list),l(e.data.count))}))}),[o]);return a.createElement(p,null,a.createElement("ul",{className:"add-play-list"},n&&0!==n.length&&n.map(((e,n)=>a.createElement("li",{key:e.id},a.createElement("div",{className:"left-container"},a.createElement("div",{className:"check"},a.createElement(v.Z,{onChange:n=>{((e,n)=>{t(e.target.checked,n)})(n,e)}})),a.createElement("div",{className:"play-list-name"},e.name)),a.createElement("div",{className:"right-container"},1===e.isPublic&&a.createElement(u.Z,null),1!==e.isPublic&&a.createElement(s.Z,null)))))))};var E=(0,a.memo)(y),b=n(80852);const{Option:w}=r.default,k=(0,a.forwardRef)(((e,t)=>{const{id:n}=e,[d,p]=(0,a.useState)(!1),[v,h]=(0,a.useState)(!1),[y,k]=(0,a.useState)(1),[Z,x]=(0,a.useState)(""),[$,N]=(0,a.useState)(0),C=e=>{e.name===f.M0&&p(!0),e.name===f.nu&&(0,b.T)(n).then((e=>{var t;console.log(e),200===e.status&&(t="bottomLeft",i.Z.info({message:"已成功添加至稍后观看",description:'在"稍后观看"查看您添加的视频',placement:t}))})).catch((e=>{}))};(0,a.useImperativeHandle)(t,(()=>({liClick:C})));return a.createElement(m,null,a.createElement("div",{onClick:e=>{e.stopPropagation()}},a.createElement(l.Z,{key:n,title:"保存到...",width:"30%",destroyOnClose:!0,maskClosable:!1,open:d,onCancel:e=>{p(!1)},footer:v?[a.createElement("div",{className:"create-playlist"},a.createElement("p",null,"名称"),a.createElement(o.default,{placeholder:"请输入播放列表名称",showCount:!0,maxLength:20,onInput:e=>{(e=>{x(e.currentTarget.value)})(e)}}),a.createElement("p",null,"隐私设置"),a.createElement(r.default,{onChange:e=>{N(e)},value:$,placeholder:"请选择播放列表属性"},a.createElement(w,{value:0},a.createElement("div",{className:"private"},a.createElement("div",{className:"name"},"私享"),a.createElement("div",{className:"icon"},a.createElement(s.Z,null)))),a.createElement(w,{value:1},a.createElement("div",{className:"private"},a.createElement("div",{className:"name"},"公开"),a.createElement("div",{className:"icon"},a.createElement(u.Z,null))))),a.createElement("div",{className:"create-label",onClick:e=>{Z&&(0,g.cg)(Z,Z,$).then((e=>{200===e.status&&(h(!1),k(y+1))}))}},"创建"))]:[a.createElement("div",{className:"add-new-playlist"},a.createElement(c.Z,null),a.createElement("div",{className:"add-label",onClick:e=>{(e=>{e.stopPropagation(),h(!0)})(e)}},"新建播放列表"))]},d&&a.createElement(E,{key:y,select:(e,t)=>{((e,t)=>{e&&(0,g.xW)(n,t.id).then((e=>{200===e.status&&i.Z.info({message:`已成功添加至${t.name}`,description:`在"${t.name}"查看您添加的视频`,placement:"bottomLeft"})}))})(e,t)}}))))}));var Z=(0,a.memo)(k)},35724:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);var r=(e,t,n)=>function(e,t){let n=[];for(let a=0;a<Math.ceil(e/t)*t-e;a++)n.push(a);return n}(e,t).map(((e,t)=>a.createElement("li",{key:t,style:{width:n/40+"rem",height:0,border:"none",padding:0,margin:0,outline:"none"}}," ")))},72249:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(67294),r=n(89250);const i=n(53133).ZP.div`
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
`;var l=n(92977),o=n(16114),c=n(28682),s=n(50489),u=n(5521),d=n(27816),m=n(67294),f=n(30381);const p=e=>{const{user:t,isShowUser:n=!0,isPosUser:p=!1,img:v,vioHeight:h,dt:g,playCount:y,dtPos:E,isFlex:b,state:w,id:k,isShowMore:Z,createTime:x,itemWidth:$,scale:N,video:C,isShowVideo:P,isShowImg:S}=e,[I,O]=(0,a.useState)(!1),M=(0,r.s0)(),F=(0,a.useRef)(null),U=e=>{t&&(e.stopPropagation(),M("/home/userDetail",{state:{userId:t.userId},replace:!1}))};return m.createElement(i,{isShowUser:n,itemWidth:$,scale:N,vioHeight:h,isFlex:b,dtPos:E},!P&&v,P&&m.createElement("div",{className:"video-container"},C),m.createElement("div",{className:"dt-pos"},(0,u.f)(g||"0")),m.createElement("div",{className:"msg-info"},n&&m.createElement("div",{className:"left-container",onClick:e=>{U(e)}},m.createElement("img",{src:t.avatarUrl})),m.createElement("div",{className:"right-container"},m.createElement("div",{className:"msg"},m.createElement("div",{className:"state"},m.createElement("div",{className:"video-name"},w),Z&&m.createElement("div",{className:"more",onClick:e=>{(e=>{e.stopPropagation(),O(!0)})(e)}},m.createElement(o.Z,{trigger:["click"],overlay:m.createElement(c.Z,{onClick:e=>{F&&F.current&&F.current.liClick({icon:"",name:e.key})}},d.$8.map((e=>m.createElement(c.Z.Item,{key:e.name},m.createElement("div",{style:{display:"flex"}},m.createElement("div",null,e.icon),m.createElement("div",null,e.name))))))},m.createElement(l.Z,{className:"more-icon"})))),m.createElement("div",{className:p?"pos-user-container":""},p&&m.createElement("div",{className:"pos-user-container-avatar",onClick:e=>{U(e)}},m.createElement("img",{src:t.avatarUrl})),m.createElement("div",{className:"user-name"},t.userName)),m.createElement("div",{className:"play-count"},m.createElement("span",null,y,"次观看"),m.createElement("span",null,f(new Date(x).getTime()).locale("zh-CN").fromNow()))),m.createElement("div",{className:"more"}))),m.createElement(s.Z,{id:k,ref:F}))};var v=(0,a.memo)(p)},27816:function(e,t,n){n.d(t,{$8:function(){return i},M0:function(){return r},nu:function(){return a}});const a='保存到"稍后观看',r="保存到播放列表",i=[{icon:"",name:"添加到队列"},{icon:"",name:a},{icon:"",name:r}]},80852:function(e,t,n){n.d(t,{T:function(){return i},d:function(){return r}});var a=n(74283);async function r(e,t,n){return await a.Z.get({url:"/later/user/"+e,params:{offset:t,limit:n}})}async function i(e){return await a.Z.post({url:"/later/"+e})}},49028:function(e,t,n){n.d(t,{$x:function(){return r},Ay:function(){return E},EL:function(){return u},Ek:function(){return h},Fx:function(){return f},Mo:function(){return d},N$:function(){return l},O2:function(){return c},Ty:function(){return i},_M:function(){return p},b0:function(){return b},dd:function(){return v},fY:function(){return o},hk:function(){return y},lq:function(){return m},qI:function(){return g},sf:function(){return s}});var a=n(74283);async function r(e){return await a.Z.post({url:"/video/upload",data:e,headers:{"Content-type":"multipart/form-data"}})}async function i(e,t,n,r,i,l,o,c){return await a.Z.post({url:"/video/create",data:{videoId:e,title:t,desc:n,imgId:r,playlistId:i,tagIds:l,cateId:o,dt:c}})}async function l(e,t,n){return await a.Z.post({url:"/video/all",params:{offset:e,limit:t},data:{keyword:n}})}async function o(e){return await a.Z.get({url:`/video/url/${e}`})}async function c(e){return await a.Z.post({url:`/video/detail/${e}`})}async function s(e,t,n,r){return await a.Z.post({url:`/user/video/${e}`,params:{offset:n,limit:r},data:{keyword:t}})}async function u(e,t,n,r){return await a.Z.post({url:`/user/video/hot/${e}`,params:{offset:n,limit:r},data:{keyword:t}})}async function d(e,t,n,r){return await a.Z.post({url:`/video/sub/user/${e}`,params:{offset:t,limit:n},data:{isMonth:r}})}async function m(e,t,n){return await a.Z.post({url:"/video/thumb/user/"+e,params:{offset:t,limit:n}})}async function f(e,t,n){return await a.Z.post({url:"/video/similar/"+e,params:{offset:t,limit:n}})}async function p(e,t,n){return await a.Z.post({url:"/video/collection/"+e,params:{offset:t,limit:n}})}async function v(e){return await a.Z.post({url:"/record/"+e})}async function h(e){return await a.Z.get({url:"/record/user/"+e})}async function g(e){return await a.Z.get({url:"/record/thumb/"+e})}async function y(e){return await a.Z.post({url:"video/playCount/"+e})}async function E(){return await a.Z.get({url:"/video/carousel/all"})}async function b(e,t,n){return await a.Z.post({url:"/video/cate/"+e,params:{offset:t,limit:n}})}},5521:function(e,t,n){function a(e){"string"==typeof e&&(e=parseInt(e));const t=Math.floor(e/1e3)||0;if(0===t)return"00:00";{const e=Math.floor(t/60/60);let n=t%3600,a=0,r=0;0!==n&&(a=Math.floor(n/60),n%=60,0!==n&&(r=n));return`${0===e?"":`${e.toString().padStart(2,"0")}:`}${a.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}}n.d(t,{f:function(){return a}})},91934:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(67294),r=n(89250),i=n(53133);const l=i.ZP.div`
  .banner {
    width: 100%;
    height: ${6.5}rem;
    background-color: #eeeeee;
    img {
      width: 100%;
    }
  }
  .user-info {
    display: flex;
    align-items: flex-start;
    margin: ${.75}rem 0 0 0;
    .img-container {
      width: ${3}rem;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    .right-info {
      margin: 0 0 0 ${.6}rem;
      .user-name {
        font-size: ${.7}rem;
      }
    }
  }
`;var o=n(95998),c=n(60561);const s=i.ZP.div`
  padding: ${.75}rem 0 0 0;
`;var u=n(30381),d=n.n(u);const m=i.ZP.div`
  .trailer {
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #e5e5e5;
    padding: 0 0 ${.5}rem 0;
    .left-container {
      width: ${9.5}rem;
      img {
        border-radius: ${.2}rem;
        width: 100%;
      }
    }
    .right-container {
      width: 70%;
      margin: 0 0 0 ${.5}rem;
      .video-name {
        font-size: ${.6}rem;
      }
      .play-count-time {
        display: flex;
        align-items: center;
        margin: ${.375}rem 0;
        p {
          font-size: ${.4}rem;
          color: #606060;
        }
        .count {
          margin: 0 ${.2}rem 0 0;
        }
        .desc {
          font-size: ${.45}rem;
          color: #606060;
        }
      }
    }
  }
`,f=e=>{const t=(0,o.v9)((e=>e.getIn(["channelReducer","channel"])));return a.createElement(m,null,a.createElement("div",{className:"trailer"},a.createElement("div",{className:"left-container"},t?.trailer&&a.createElement("img",{src:t.trailer?.picUrl,alt:t.trailer.name})),a.createElement("div",{className:"right-container"},a.createElement("p",{className:"video-name"},t.trailer?.name),a.createElement("p",{className:"play-count-time"},a.createElement("p",{className:"count"},t.trailer?.playCount,"次观看"),a.createElement("p",null,d()(t.trailer?.createTime).fromNow())),a.createElement("p",{className:"desc"},t.trailer?.description))))};var p=(0,a.memo)(f);const v=i.ZP.div`
  .user-video-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > li {
      margin: 0 0 ${.75}rem 0;
      transition: transform 0.7s;
      &.active {
        transform: scale(1.3) translateY(8%);
        box-shadow: 0 0 ${.6}rem rgba(0, 0, 0, 0.1);
      }
    }
  }
`;var h=n(49028),g=n(72249),y=n(93041),E=n(35724);const b=e=>{const[t,n]=(0,a.useState)(0),[i,l]=(0,a.useState)([]),[o,c]=(0,a.useState)(""),[s,u]=(0,a.useState)(-1),d=(0,a.useRef)(null),m=(0,r.s0)(),{userId:f}=e;(0,a.useEffect)((()=>{(0,h.sf)(f,"",0,10).then((e=>{200===e.status&&(n(e.data.count),l(e.data.list))}))}),[f]),(0,a.useEffect)((()=>{if(d.current)if(y.ZP.isSupported()){let e=new y.ZP;e.loadSource(o),e.attachMedia(d.current)}else d.current.canPlayType("application/vnd.apple.mpegurl")&&(d.current.src=o)}),[d.current]);const p=()=>{u(-1)};return a.createElement(v,null,a.createElement("ul",{className:"user-video-list"},i&&0!==i.length&&i.map(((e,t)=>a.createElement("li",{key:e.id,onClick:t=>(e=>{m("/videoDetail",{replace:!0,state:{id:e.id}})})(e),className:s===t?"active":""},a.createElement(g.Z,{img:a.createElement("img",{src:e.picUrl,onMouseLeave:e=>p(),onMouseEnter:n=>(async(e,t)=>{u(t);const n=await(0,h.fY)(e.id);200===n.status&&c(n.data.vioUrl)})(e,t)}),video:a.createElement("video",{src:o,ref:d,autoPlay:!0,onMouseLeave:e=>p(),muted:!0}),dtPos:{left:98,top:54},isShowMore:!1,isShowVideo:s===t,state:e.name,id:e.id,vioHeight:200,user:e.user,createTime:e.createTime,dt:e.dt,playCount:e.playCount,itemWidth:380,scale:.92})))),(0,E.Z)(i.length,4,380)))};var w=(0,a.memo)(b);const k=e=>a.createElement("div",null,"短视频");var Z=(0,a.memo)(k);const x=e=>a.createElement("div",null,"直播");var $=(0,a.memo)(x);const N=e=>a.createElement("div",null,"播放列表");var C=(0,a.memo)(N);const P=e=>a.createElement("div",null,"动态");var S=(0,a.memo)(P);const I=e=>a.createElement("div",null,"频道");var O=(0,a.memo)(I);const M=e=>a.createElement("div",null,"简介");var F=(0,a.memo)(M),U=n(67294);const j=e=>[{label:"首页",key:"1001",children:U.createElement(p,{userId:e})},{label:"视频",key:"1002",children:U.createElement(w,{userId:e})},{label:"SHORTS",key:"1003",children:U.createElement(Z,{userId:e})},{label:"直播",key:"1004",children:U.createElement($,{userId:e})},{label:"播放列表",key:"1005",children:U.createElement(C,{userId:e})},{label:"社区",key:"1006",children:U.createElement(S,{userId:e})},{label:"频道",key:"1007",children:U.createElement(O,{userId:e})},{label:"简介",key:"1008",children:U.createElement(F,{userId:e})}],z=e=>{const{userId:t}=e;return a.createElement(s,null,a.createElement(c.Z,{defaultActiveKey:"1",items:j(t)}))};var K=(0,a.memo)(z);const T=()=>{const e=(0,r.TH)(),{id:t}=e.state,n=(0,o.v9)((e=>e.getIn(["channelReducer","channel"]))),i=(0,o.v9)((e=>e.getIn(["loginReducer","login"])));return a.createElement(l,null,a.createElement("div",{className:"banner"},a.createElement("img",{src:n.picUrl})),a.createElement("div",{className:"user-info"},a.createElement("div",{className:"img-container"},a.createElement("img",{src:i.userMsg.avatarUrl})),a.createElement("div",{className:"right-info"},a.createElement("div",{className:"user-name"},i.userMsg.userName))),a.createElement(K,{userId:t}))};var R=(0,a.memo)(T)},50132:function(e,t,n){var a=n(87462),r=n(4942),i=n(44925),l=n(1413),o=n(15671),c=n(43144),s=n(79340),u=n(98557),d=n(67294),m=n(93967),f=n.n(m),p=function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,o.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,l.Z)((0,l.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,c.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,l=t.className,o=t.style,c=t.name,s=t.id,u=t.type,m=t.disabled,p=t.readOnly,v=t.tabIndex,h=t.onClick,g=t.onFocus,y=t.onBlur,E=t.onKeyDown,b=t.onKeyPress,w=t.onKeyUp,k=t.autoFocus,Z=t.value,x=t.required,$=(0,i.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),N=Object.keys($).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=$[t]),e}),{}),C=this.state.checked,P=f()(n,l,(e={},(0,r.Z)(e,"".concat(n,"-checked"),C),(0,r.Z)(e,"".concat(n,"-disabled"),m),e));return d.createElement("span",{className:P,style:o},d.createElement("input",(0,a.Z)({name:c,id:s,type:u,required:x,readOnly:p,disabled:m,tabIndex:v,className:"".concat(n,"-input"),checked:!!C,onClick:h,onFocus:g,onBlur:y,onKeyUp:w,onKeyDown:E,onKeyPress:b,onChange:this.handleChange,autoFocus:k,ref:this.saveInput,value:Z},N)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,l.Z)((0,l.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);p.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.Z=p}}]);
//# sourceMappingURL=1934.86679370.chunk.js.map