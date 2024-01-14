"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[3876],{92977:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(1413),r=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"},l=n(30076),o=function(e,t){return r.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:i}))};o.displayName="MoreOutlined";var s=r.forwardRef(o)},49101:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(1413),r=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},l=n(30076),o=function(e,t){return r.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:i}))};o.displayName="PlusOutlined";var s=r.forwardRef(o)},9676:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(4942),r=n(87462),i=n(93967),l=n.n(i),o=n(50132),s=n(67294),c=n(53124),u=n(65223),d=n(93433),m=n(29439),f=n(98423),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=s.createContext(null),h=function(e,t){var n=e.defaultValue,i=e.children,o=e.options,u=void 0===o?[]:o,h=e.prefixCls,g=e.className,y=e.style,E=e.onChange,b=p(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),w=s.useContext(c.E_),Z=w.getPrefixCls,x=w.direction,C=s.useState(b.value||n||[]),$=(0,m.Z)(C,2),N=$[0],P=$[1],S=s.useState([]),O=(0,m.Z)(S,2),M=O[0],I=O[1];s.useEffect((function(){"value"in b&&P(b.value||[])}),[b.value]);var F=function(){return u.map((function(e){return"string"==typeof e||"number"==typeof e?{label:e,value:e}:e}))},j=Z("checkbox",h),z="".concat(j,"-group"),U=(0,f.Z)(b,["value","disabled"]);u&&u.length>0&&(i=F().map((function(e){return s.createElement(k,{prefixCls:j,key:e.value.toString(),disabled:"disabled"in e?e.disabled:b.disabled,value:e.value,checked:-1!==N.indexOf(e.value),onChange:e.onChange,className:"".concat(z,"-item"),style:e.style},e.label)})));var q={toggleOption:function(e){var t=N.indexOf(e.value),n=(0,d.Z)(N);-1===t?n.push(e.value):n.splice(t,1),"value"in b||P(n);var a=F();null==E||E(n.filter((function(e){return-1!==M.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:N,disabled:b.disabled,name:b.name,registerValue:function(e){I((function(t){return[].concat((0,d.Z)(t),[e])}))},cancelValue:function(e){I((function(t){return t.filter((function(t){return t!==e}))}))}},H=l()(z,(0,a.Z)({},"".concat(z,"-rtl"),"rtl"===x),g);return s.createElement("div",(0,r.Z)({className:H,style:y},U,{ref:t}),s.createElement(v.Provider,{value:q},i))},g=s.forwardRef(h),y=s.memo(g),E=n(98866),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},w=function(e,t){var n,i=e.prefixCls,d=e.className,m=e.children,f=e.indeterminate,p=void 0!==f&&f,h=e.style,g=e.onMouseEnter,y=e.onMouseLeave,w=e.skipGroup,k=void 0!==w&&w,Z=e.disabled,x=b(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),C=s.useContext(c.E_),$=C.getPrefixCls,N=C.direction,P=s.useContext(v),S=(0,s.useContext)(u.aM).isFormItemInput,O=(0,s.useContext)(E.Z),M=Z||(null==P?void 0:P.disabled)||O,I=s.useRef(x.value);s.useEffect((function(){null==P||P.registerValue(x.value)}),[]),s.useEffect((function(){if(!k)return x.value!==I.current&&(null==P||P.cancelValue(I.current),null==P||P.registerValue(x.value),I.current=x.value),function(){return null==P?void 0:P.cancelValue(x.value)}}),[x.value]);var F=$("checkbox",i),j=(0,r.Z)({},x);P&&!k&&(j.onChange=function(){x.onChange&&x.onChange.apply(x,arguments),P.toggleOption&&P.toggleOption({label:m,value:x.value})},j.name=P.name,j.checked=-1!==P.value.indexOf(x.value));var z=l()((n={},(0,a.Z)(n,"".concat(F,"-wrapper"),!0),(0,a.Z)(n,"".concat(F,"-rtl"),"rtl"===N),(0,a.Z)(n,"".concat(F,"-wrapper-checked"),j.checked),(0,a.Z)(n,"".concat(F,"-wrapper-disabled"),M),(0,a.Z)(n,"".concat(F,"-wrapper-in-form-item"),S),n),d),U=l()((0,a.Z)({},"".concat(F,"-indeterminate"),p)),q=p?"mixed":void 0;return s.createElement("label",{className:z,style:h,onMouseEnter:g,onMouseLeave:y},s.createElement(o.Z,(0,r.Z)({"aria-checked":q},j,{prefixCls:F,className:U,disabled:M,ref:t})),void 0!==m&&s.createElement("span",null,m))};var k=s.forwardRef(w),Z=k;Z.Group=y,Z.__ANT_CHECKBOX=!0;var x=Z},50489:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(67294),r=n(42239),i=n(38648),l=n(48889),o=n(50817),s=n(49101),c=n(88633),u=n(95357),d=n(53133);const m=d.ZP.div`
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
`;var v=n(9676),h=n(95998),g=n(13790);const y=e=>{const{select:t}=e,[n,r]=(0,a.useState)([]),[i,l]=(0,a.useState)(0),o=(0,h.v9)((e=>e.getIn(["loginReducer","login"])));(0,a.useEffect)((()=>{(0,g.N3)(o.userMsg.userId,0,10).then((e=>{200===e.status&&(r(e.data.list),l(e.data.count))}))}),[o]);return a.createElement(p,null,a.createElement("ul",{className:"add-play-list"},n&&0!==n.length&&n.map(((e,n)=>a.createElement("li",{key:e.id},a.createElement("div",{className:"left-container"},a.createElement("div",{className:"check"},a.createElement(v.Z,{onChange:n=>{((e,n)=>{t(e.target.checked,n)})(n,e)}})),a.createElement("div",{className:"play-list-name"},e.name)),a.createElement("div",{className:"right-container"},1===e.isPublic&&a.createElement(u.Z,null),1!==e.isPublic&&a.createElement(c.Z,null)))))))};var E=(0,a.memo)(y),b=n(80852);const{Option:w}=r.default,k=(0,a.forwardRef)(((e,t)=>{const{id:n}=e,[d,p]=(0,a.useState)(!1),[v,h]=(0,a.useState)(!1),[y,k]=(0,a.useState)(1),[Z,x]=(0,a.useState)(""),[C,$]=(0,a.useState)(0),N=e=>{e.name===f.M0&&p(!0),e.name===f.nu&&(0,b.T)(n).then((e=>{var t;console.log(e),200===e.status&&(t="bottomLeft",i.Z.info({message:"已成功添加至稍后观看",description:'在"稍后观看"查看您添加的视频',placement:t}))})).catch((e=>{}))};(0,a.useImperativeHandle)(t,(()=>({liClick:N})));return a.createElement(m,null,a.createElement("div",{onClick:e=>{e.stopPropagation()}},a.createElement(l.Z,{key:n,title:"保存到...",width:"30%",destroyOnClose:!0,maskClosable:!1,open:d,onCancel:e=>{p(!1)},footer:v?[a.createElement("div",{className:"create-playlist"},a.createElement("p",null,"名称"),a.createElement(o.default,{placeholder:"请输入播放列表名称",showCount:!0,maxLength:20,onInput:e=>{(e=>{x(e.currentTarget.value)})(e)}}),a.createElement("p",null,"隐私设置"),a.createElement(r.default,{onChange:e=>{$(e)},value:C,placeholder:"请选择播放列表属性"},a.createElement(w,{value:0},a.createElement("div",{className:"private"},a.createElement("div",{className:"name"},"私享"),a.createElement("div",{className:"icon"},a.createElement(c.Z,null)))),a.createElement(w,{value:1},a.createElement("div",{className:"private"},a.createElement("div",{className:"name"},"公开"),a.createElement("div",{className:"icon"},a.createElement(u.Z,null))))),a.createElement("div",{className:"create-label",onClick:e=>{Z&&(0,g.cg)(Z,Z,C).then((e=>{200===e.status&&(h(!1),k(y+1))}))}},"创建"))]:[a.createElement("div",{className:"add-new-playlist"},a.createElement(s.Z,null),a.createElement("div",{className:"add-label",onClick:e=>{(e=>{e.stopPropagation(),h(!0)})(e)}},"新建播放列表"))]},d&&a.createElement(E,{key:y,select:(e,t)=>{((e,t)=>{e&&(0,g.xW)(n,t.id).then((e=>{200===e.status&&i.Z.info({message:`已成功添加至${t.name}`,description:`在"${t.name}"查看您添加的视频`,placement:"bottomLeft"})}))})(e,t)}}))))}));var Z=(0,a.memo)(k)},35724:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);var r=(e,t,n)=>function(e,t){let n=[];for(let a=0;a<Math.ceil(e/t)*t-e;a++)n.push(a);return n}(e,t).map(((e,t)=>a.createElement("li",{key:t,style:{width:n/40+"rem",height:0,border:"none",padding:0,margin:0,outline:"none"}}," ")))},72249:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(67294),r=n(89250);const i=n(53133).ZP.div`
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
`;var l=n(92977),o=n(16114),s=n(28682),c=n(50489),u=n(5521),d=n(27816),m=n(67294),f=n(30381);const p=e=>{const{user:t,isShowUser:n=!0,isPosUser:p=!1,img:v,vioHeight:h,dt:g,playCount:y,dtPos:E,isFlex:b,state:w,id:k,isShowMore:Z,createTime:x,itemWidth:C,scale:$,video:N,isShowVideo:P,isShowImg:S}=e,[O,M]=(0,a.useState)(!1),I=(0,r.s0)(),F=(0,a.useRef)(null),j=e=>{t&&(e.stopPropagation(),I("/home/userDetail",{state:{userId:t.userId},replace:!1}))};return m.createElement(i,{isShowUser:n,itemWidth:C,scale:$,vioHeight:h,isFlex:b,dtPos:E},!P&&v,P&&m.createElement("div",{className:"video-container"},N),m.createElement("div",{className:"dt-pos"},(0,u.f)(g||"0")),m.createElement("div",{className:"msg-info"},n&&m.createElement("div",{className:"left-container",onClick:e=>{j(e)}},m.createElement("img",{src:t.avatarUrl})),m.createElement("div",{className:"right-container"},m.createElement("div",{className:"msg"},m.createElement("div",{className:"state"},m.createElement("div",{className:"video-name"},w),Z&&m.createElement("div",{className:"more",onClick:e=>{(e=>{e.stopPropagation(),M(!0)})(e)}},m.createElement(o.Z,{trigger:["click"],overlay:m.createElement(s.Z,{onClick:e=>{F&&F.current&&F.current.liClick({icon:"",name:e.key})}},d.$8.map((e=>m.createElement(s.Z.Item,{key:e.name},m.createElement("div",{style:{display:"flex"}},m.createElement("div",null,e.icon),m.createElement("div",null,e.name))))))},m.createElement(l.Z,{className:"more-icon"})))),m.createElement("div",{className:p?"pos-user-container":""},p&&m.createElement("div",{className:"pos-user-container-avatar",onClick:e=>{j(e)}},m.createElement("img",{src:t.avatarUrl})),m.createElement("div",{className:"user-name"},t.userName)),m.createElement("div",{className:"play-count"},m.createElement("span",null,y,"次观看"),m.createElement("span",null,f(new Date(x).getTime()).locale("zh-CN").fromNow()))),m.createElement("div",{className:"more"}))),m.createElement(c.Z,{id:k,ref:F}))};var v=(0,a.memo)(p)},27816:function(e,t,n){n.d(t,{$8:function(){return i},M0:function(){return r},nu:function(){return a}});const a='保存到"稍后观看',r="保存到播放列表",i=[{icon:"",name:"添加到队列"},{icon:"",name:a},{icon:"",name:r}]},48495:function(e,t,n){n.d(t,{Pf:function(){return l},Ve:function(){return r},p5:function(){return i}});var a=n(74283);async function r(e){return await a.Z.post({url:"/history/"+e,data:{}})}async function i(e,t,n,r){return await a.Z.post({url:"/history/user/"+e,params:{offset:t,limit:n,keyword:r}})}async function l(){return await a.Z.post({url:"/history/delete/all"})}},80852:function(e,t,n){n.d(t,{T:function(){return i},d:function(){return r}});var a=n(74283);async function r(e,t,n){return await a.Z.get({url:"/later/user/"+e,params:{offset:t,limit:n}})}async function i(e){return await a.Z.post({url:"/later/"+e})}},49028:function(e,t,n){n.d(t,{$x:function(){return r},Ay:function(){return E},EL:function(){return u},Ek:function(){return h},Fx:function(){return f},Mo:function(){return d},N$:function(){return l},O2:function(){return s},Ty:function(){return i},_M:function(){return p},b0:function(){return b},dd:function(){return v},fY:function(){return o},hk:function(){return y},lq:function(){return m},qI:function(){return g},sf:function(){return c}});var a=n(74283);async function r(e){return await a.Z.post({url:"/video/upload",data:e,headers:{"Content-type":"multipart/form-data"}})}async function i(e,t,n,r,i,l,o,s){return await a.Z.post({url:"/video/create",data:{videoId:e,title:t,desc:n,imgId:r,playlistId:i,tagIds:l,cateId:o,dt:s}})}async function l(e,t,n){return await a.Z.post({url:"/video/all",params:{offset:e,limit:t},data:{keyword:n}})}async function o(e){return await a.Z.get({url:`/video/url/${e}`})}async function s(e){return await a.Z.post({url:`/video/detail/${e}`})}async function c(e,t,n,r){return await a.Z.post({url:`/user/video/${e}`,params:{offset:n,limit:r},data:{keyword:t}})}async function u(e,t,n,r){return await a.Z.post({url:`/user/video/hot/${e}`,params:{offset:n,limit:r},data:{keyword:t}})}async function d(e,t,n,r){return await a.Z.post({url:`/video/sub/user/${e}`,params:{offset:t,limit:n},data:{isMonth:r}})}async function m(e,t,n){return await a.Z.post({url:"/video/thumb/user/"+e,params:{offset:t,limit:n}})}async function f(e,t,n){return await a.Z.post({url:"/video/similar/"+e,params:{offset:t,limit:n}})}async function p(e,t,n){return await a.Z.post({url:"/video/collection/"+e,params:{offset:t,limit:n}})}async function v(e){return await a.Z.post({url:"/record/"+e})}async function h(e){return await a.Z.get({url:"/record/user/"+e})}async function g(e){return await a.Z.get({url:"/record/thumb/"+e})}async function y(e){return await a.Z.post({url:"video/playCount/"+e})}async function E(){return await a.Z.get({url:"/video/carousel/all"})}async function b(e,t,n){return await a.Z.post({url:"/video/cate/"+e,params:{offset:t,limit:n}})}},5521:function(e,t,n){function a(e){"string"==typeof e&&(e=parseInt(e));const t=Math.floor(e/1e3)||0;if(0===t)return"00:00";{const e=Math.floor(t/60/60);let n=t%3600,a=0,r=0;0!==n&&(a=Math.floor(n/60),n%=60,0!==n&&(r=n));return`${0===e?"":`${e.toString().padStart(2,"0")}:`}${a.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}}n.d(t,{f:function(){return a}})},73876:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(67294),r=n(53133);const i=r.ZP.div`
  display: flex;
  align-items: flex-start;
  .left-content {
    width: 75%;
    .line {
      width: 100%;
      height: 1px;
      background-color: #e5e5e5;
      margin: ${.625}rem 0;
    }
  }
  .right-content {
    width: 24%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${1.5}rem;
    .avatar-outer {
      width: ${3}rem;
      height: ${3}rem;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    .user-name {
      margin: ${.5}rem 0 0 0;
    }
    .sub-upload-thumb {
      width: 60%;
      border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      margin: ${1}rem 0 0 0;
      & > li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: ${.2}rem 0;
        &:nth-child(2) {
          border-top: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
        }
        & > span {
          &:nth-child(1) {
            font-size: ${.4}rem;
            color: #606060;
          }
        }
      }
    }
  }
`;var l=n(95998),o=n(48495),s=n(89250);const c=r.ZP.div`
  .vio-list {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    & > li {
      margin: 0 0 ${.75}rem 0;
      transition: transform 0.7s;
    }
  }
`,u=r.ZP.div`
  .header-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 ${.5}rem 0;
    .more {
      font-size: ${.475}rem;
      color: #065fd4;
    }
  }
`,d=e=>{const{title:t,more:n,moreHandle:r}=e;return a.createElement(u,null,a.createElement("div",{className:"header-title"},a.createElement("div",{className:"left-title"},t),a.createElement("div",{className:"more",onClick:e=>{r()}},n)))};var m=(0,a.memo)(d),f=n(72249),p=n(49028),v=n(93041),h=n(35724);const g=e=>{const{video:t,title:n,moreClickHandle:r,more:i}=e,[l,o]=(0,a.useState)(""),[u,d]=(0,a.useState)(-1),g=(0,s.s0)(),y=(0,a.useRef)(null);(0,a.useEffect)((()=>{if(y.current)if(v.ZP.isSupported()){const e=new v.ZP;e.loadSource(l),e.attachMedia(y.current)}else y.current.canPlayType("application/vnd.apple.mpegurl")&&(y.current.src=l)}),[y.current]);const E=()=>{d(-1)};return a.createElement(c,null,a.createElement(m,{title:n,more:i,moreHandle:()=>{r()}}),a.createElement("ul",{className:"vio-list"},t&&0!==t.length&&t.map(((e,t)=>a.createElement("li",{key:e.id,onClick:t=>{(e=>{g("/videoDetail",{replace:!0,state:{id:e.id}})})(e)},className:u===t?"active":""},a.createElement(f.Z,{img:a.createElement("img",{src:e.picUrl,onMouseLeave:e=>{E()},onMouseEnter:async n=>{await(async(e,t)=>{d(t);const n=await(0,p.fY)(e.id);200===n.status&&o(n.data.vioUrl)})(e,t)}}),video:a.createElement("video",{src:l,ref:y,autoPlay:!0,onMouseLeave:e=>{E()},muted:!0}),dtPos:{left:98,top:56},isShowVideo:u===t,state:e.name,vioHeight:149,id:e.id,user:e.user,createTime:e.createTime,dt:e.dt,playCount:e.playCount,itemWidth:292,isShowMore:!1,scale:.89})))),(0,h.Z)(t.length,4,292)))};var y=(0,a.memo)(g),E=n(80852),b=n(45290);const w=()=>{const[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)([]),s=(0,l.v9)((e=>e.getIn(["loginReducer","login"])));(0,a.useEffect)((()=>{(0,o.p5)(s.userMsg.userId,0,4,"").then((e=>{200===e.status&&t(e.data.list)}))}),[s.userMsg.userId]),(0,a.useEffect)((()=>{(0,E.d)(s.userMsg.userId,0,4).then((e=>{if(200===e.status){const t=e.data.list.map((e=>e.video));r(t)}}))}),[]);const[c,u]=(0,a.useState)({subCount:0,uploadCount:0,thumbCount:0});(0,a.useEffect)((()=>{(0,b.ur)(s.userMsg.userId).then((e=>{200===e.status&&u(e.data)}))}),[]);return a.createElement(i,null,a.createElement("div",{className:"left-content"},a.createElement(y,{video:e,more:"查看更多",title:"历史记录",moreClickHandle:()=>{}}),a.createElement("div",{className:"line"}," "),a.createElement(y,{video:n,more:"查看更多",title:"稍后观看",moreClickHandle:()=>{}})),a.createElement("div",{className:"right-content"},a.createElement("div",{className:"avatar-outer"},a.createElement("img",{src:s.userMsg.avatarUrl,alt:s.userMsg.userName})),a.createElement("div",{className:"user-name"},s.userMsg.userName),a.createElement("ul",{className:"sub-upload-thumb"},a.createElement("li",null,a.createElement("span",null,"订阅数量"),a.createElement("span",null,c.subCount)),a.createElement("li",null,a.createElement("span",null,"上传数量"),a.createElement("span",null,c.uploadCount)),a.createElement("li",null,a.createElement("span",null,"顶过的视频数"),a.createElement("span",null,c.thumbCount)))))};var k=(0,a.memo)(w)},50132:function(e,t,n){var a=n(87462),r=n(4942),i=n(44925),l=n(1413),o=n(15671),s=n(43144),c=n(79340),u=n(98557),d=n(67294),m=n(93967),f=n.n(m),p=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,o.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,l.Z)((0,l.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,s.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,l=t.className,o=t.style,s=t.name,c=t.id,u=t.type,m=t.disabled,p=t.readOnly,v=t.tabIndex,h=t.onClick,g=t.onFocus,y=t.onBlur,E=t.onKeyDown,b=t.onKeyPress,w=t.onKeyUp,k=t.autoFocus,Z=t.value,x=t.required,C=(0,i.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),$=Object.keys(C).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=C[t]),e}),{}),N=this.state.checked,P=f()(n,l,(e={},(0,r.Z)(e,"".concat(n,"-checked"),N),(0,r.Z)(e,"".concat(n,"-disabled"),m),e));return d.createElement("span",{className:P,style:o},d.createElement("input",(0,a.Z)({name:s,id:c,type:u,required:x,readOnly:p,disabled:m,tabIndex:v,className:"".concat(n,"-input"),checked:!!N,onClick:h,onFocus:g,onBlur:y,onKeyUp:w,onKeyDown:E,onKeyPress:b,onChange:this.handleChange,autoFocus:k,ref:this.saveInput,value:Z},$)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,l.Z)((0,l.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);p.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.Z=p}}]);
//# sourceMappingURL=3876.ef34d413.chunk.js.map