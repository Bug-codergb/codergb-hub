"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[2475],{92977:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(1413),r=n(67294),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"},i=n(30076),o=function(e,t){return r.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:l}))};o.displayName="MoreOutlined";var c=r.forwardRef(o)},49101:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(1413),r=n(67294),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=n(30076),o=function(e,t){return r.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:l}))};o.displayName="PlusOutlined";var c=r.forwardRef(o)},9676:function(e,t,n){n.d(t,{Z:function(){return $}});var a=n(4942),r=n(87462),l=n(93967),i=n.n(l),o=n(50132),c=n(67294),s=n(53124),u=n(65223),d=n(93433),m=n(29439),f=n(98423),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=c.createContext(null),h=function(e,t){var n=e.defaultValue,l=e.children,o=e.options,u=void 0===o?[]:o,h=e.prefixCls,g=e.className,y=e.style,b=e.onChange,E=p(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),w=c.useContext(s.E_),x=w.getPrefixCls,$=w.direction,Z=c.useState(E.value||n||[]),C=(0,m.Z)(Z,2),N=C[0],P=C[1],S=c.useState([]),O=(0,m.Z)(S,2),M=O[0],I=O[1];c.useEffect((function(){"value"in E&&P(E.value||[])}),[E.value]);var F=function(){return u.map((function(e){return"string"==typeof e||"number"==typeof e?{label:e,value:e}:e}))},z=x("checkbox",h),D="".concat(z,"-group"),j=(0,f.Z)(E,["value","disabled"]);u&&u.length>0&&(l=F().map((function(e){return c.createElement(k,{prefixCls:z,key:e.value.toString(),disabled:"disabled"in e?e.disabled:E.disabled,value:e.value,checked:-1!==N.indexOf(e.value),onChange:e.onChange,className:"".concat(D,"-item"),style:e.style},e.label)})));var U={toggleOption:function(e){var t=N.indexOf(e.value),n=(0,d.Z)(N);-1===t?n.push(e.value):n.splice(t,1),"value"in E||P(n);var a=F();null==b||b(n.filter((function(e){return-1!==M.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:N,disabled:E.disabled,name:E.name,registerValue:function(e){I((function(t){return[].concat((0,d.Z)(t),[e])}))},cancelValue:function(e){I((function(t){return t.filter((function(t){return t!==e}))}))}},K=i()(D,(0,a.Z)({},"".concat(D,"-rtl"),"rtl"===$),g);return c.createElement("div",(0,r.Z)({className:K,style:y},j,{ref:t}),c.createElement(v.Provider,{value:U},l))},g=c.forwardRef(h),y=c.memo(g),b=n(98866),E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},w=function(e,t){var n,l=e.prefixCls,d=e.className,m=e.children,f=e.indeterminate,p=void 0!==f&&f,h=e.style,g=e.onMouseEnter,y=e.onMouseLeave,w=e.skipGroup,k=void 0!==w&&w,x=e.disabled,$=E(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),Z=c.useContext(s.E_),C=Z.getPrefixCls,N=Z.direction,P=c.useContext(v),S=(0,c.useContext)(u.aM).isFormItemInput,O=(0,c.useContext)(b.Z),M=x||(null==P?void 0:P.disabled)||O,I=c.useRef($.value);c.useEffect((function(){null==P||P.registerValue($.value)}),[]),c.useEffect((function(){if(!k)return $.value!==I.current&&(null==P||P.cancelValue(I.current),null==P||P.registerValue($.value),I.current=$.value),function(){return null==P?void 0:P.cancelValue($.value)}}),[$.value]);var F=C("checkbox",l),z=(0,r.Z)({},$);P&&!k&&(z.onChange=function(){$.onChange&&$.onChange.apply($,arguments),P.toggleOption&&P.toggleOption({label:m,value:$.value})},z.name=P.name,z.checked=-1!==P.value.indexOf($.value));var D=i()((n={},(0,a.Z)(n,"".concat(F,"-wrapper"),!0),(0,a.Z)(n,"".concat(F,"-rtl"),"rtl"===N),(0,a.Z)(n,"".concat(F,"-wrapper-checked"),z.checked),(0,a.Z)(n,"".concat(F,"-wrapper-disabled"),M),(0,a.Z)(n,"".concat(F,"-wrapper-in-form-item"),S),n),d),j=i()((0,a.Z)({},"".concat(F,"-indeterminate"),p)),U=p?"mixed":void 0;return c.createElement("label",{className:D,style:h,onMouseEnter:g,onMouseLeave:y},c.createElement(o.Z,(0,r.Z)({"aria-checked":U},z,{prefixCls:F,className:j,disabled:M,ref:t})),void 0!==m&&c.createElement("span",null,m))};var k=c.forwardRef(w),x=k;x.Group=y,x.__ANT_CHECKBOX=!0;var $=x},50489:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(67294),r=n(42239),l=n(38648),i=n(48889),o=n(50817),c=n(49101),s=n(88633),u=n(95357),d=n(53133);const m=d.ZP.div`
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
`;var v=n(9676),h=n(95998),g=n(13790);const y=e=>{const{select:t}=e,[n,r]=(0,a.useState)([]),[l,i]=(0,a.useState)(0),o=(0,h.v9)((e=>e.getIn(["loginReducer","login"])));(0,a.useEffect)((()=>{(0,g.N3)(o.userMsg.userId,0,10).then((e=>{200===e.status&&(r(e.data.list),i(e.data.count))}))}),[o]);return a.createElement(p,null,a.createElement("ul",{className:"add-play-list"},n&&0!==n.length&&n.map(((e,n)=>a.createElement("li",{key:e.id},a.createElement("div",{className:"left-container"},a.createElement("div",{className:"check"},a.createElement(v.Z,{onChange:n=>{((e,n)=>{t(e.target.checked,n)})(n,e)}})),a.createElement("div",{className:"play-list-name"},e.name)),a.createElement("div",{className:"right-container"},1===e.isPublic&&a.createElement(u.Z,null),1!==e.isPublic&&a.createElement(s.Z,null)))))))};var b=(0,a.memo)(y),E=n(80852);const{Option:w}=r.default,k=(0,a.forwardRef)(((e,t)=>{const{id:n}=e,[d,p]=(0,a.useState)(!1),[v,h]=(0,a.useState)(!1),[y,k]=(0,a.useState)(1),[x,$]=(0,a.useState)(""),[Z,C]=(0,a.useState)(0),N=e=>{e.name===f.M0&&p(!0),e.name===f.nu&&(0,E.T)(n).then((e=>{var t;console.log(e),200===e.status&&(t="bottomLeft",l.Z.info({message:"已成功添加至稍后观看",description:'在"稍后观看"查看您添加的视频',placement:t}))})).catch((e=>{}))};(0,a.useImperativeHandle)(t,(()=>({liClick:N})));return a.createElement(m,null,a.createElement("div",{onClick:e=>{e.stopPropagation()}},a.createElement(i.Z,{key:n,title:"保存到...",width:"30%",destroyOnClose:!0,maskClosable:!1,open:d,onCancel:e=>{p(!1)},footer:v?[a.createElement("div",{className:"create-playlist"},a.createElement("p",null,"名称"),a.createElement(o.default,{placeholder:"请输入播放列表名称",showCount:!0,maxLength:20,onInput:e=>{(e=>{$(e.currentTarget.value)})(e)}}),a.createElement("p",null,"隐私设置"),a.createElement(r.default,{onChange:e=>{C(e)},value:Z,placeholder:"请选择播放列表属性"},a.createElement(w,{value:0},a.createElement("div",{className:"private"},a.createElement("div",{className:"name"},"私享"),a.createElement("div",{className:"icon"},a.createElement(s.Z,null)))),a.createElement(w,{value:1},a.createElement("div",{className:"private"},a.createElement("div",{className:"name"},"公开"),a.createElement("div",{className:"icon"},a.createElement(u.Z,null))))),a.createElement("div",{className:"create-label",onClick:e=>{x&&(0,g.cg)(x,x,Z).then((e=>{200===e.status&&(h(!1),k(y+1))}))}},"创建"))]:[a.createElement("div",{className:"add-new-playlist"},a.createElement(c.Z,null),a.createElement("div",{className:"add-label",onClick:e=>{(e=>{e.stopPropagation(),h(!0)})(e)}},"新建播放列表"))]},d&&a.createElement(b,{key:y,select:(e,t)=>{((e,t)=>{e&&(0,g.xW)(n,t.id).then((e=>{200===e.status&&l.Z.info({message:`已成功添加至${t.name}`,description:`在"${t.name}"查看您添加的视频`,placement:"bottomLeft"})}))})(e,t)}}))))}));var x=(0,a.memo)(k)},72249:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(67294),r=n(89250);const l=n(53133).ZP.div`
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
`;var i=n(92977),o=n(16114),c=n(28682),s=n(50489),u=n(5521),d=n(27816),m=n(67294),f=n(30381);const p=e=>{const{user:t,isShowUser:n=!0,isPosUser:p=!1,img:v,vioHeight:h,dt:g,playCount:y,dtPos:b,isFlex:E,state:w,id:k,isShowMore:x,createTime:$,itemWidth:Z,scale:C,video:N,isShowVideo:P,isShowImg:S}=e,[O,M]=(0,a.useState)(!1),I=(0,r.s0)(),F=(0,a.useRef)(null),z=e=>{t&&(e.stopPropagation(),I("/home/userDetail",{state:{userId:t.userId},replace:!1}))};return m.createElement(l,{isShowUser:n,itemWidth:Z,scale:C,vioHeight:h,isFlex:E,dtPos:b},!P&&v,P&&m.createElement("div",{className:"video-container"},N),m.createElement("div",{className:"dt-pos"},(0,u.f)(g||"0")),m.createElement("div",{className:"msg-info"},n&&m.createElement("div",{className:"left-container",onClick:e=>{z(e)}},m.createElement("img",{src:t.avatarUrl})),m.createElement("div",{className:"right-container"},m.createElement("div",{className:"msg"},m.createElement("div",{className:"state"},m.createElement("div",{className:"video-name"},w),x&&m.createElement("div",{className:"more",onClick:e=>{(e=>{e.stopPropagation(),M(!0)})(e)}},m.createElement(o.Z,{trigger:["click"],overlay:m.createElement(c.Z,{onClick:e=>{F&&F.current&&F.current.liClick({icon:"",name:e.key})}},d.$8.map((e=>m.createElement(c.Z.Item,{key:e.name},m.createElement("div",{style:{display:"flex"}},m.createElement("div",null,e.icon),m.createElement("div",null,e.name))))))},m.createElement(i.Z,{className:"more-icon"})))),m.createElement("div",{className:p?"pos-user-container":""},p&&m.createElement("div",{className:"pos-user-container-avatar",onClick:e=>{z(e)}},m.createElement("img",{src:t.avatarUrl})),m.createElement("div",{className:"user-name"},t.userName)),m.createElement("div",{className:"play-count"},m.createElement("span",null,y,"次观看"),m.createElement("span",null,f(new Date($).getTime()).locale("zh-CN").fromNow()))),m.createElement("div",{className:"more"}))),m.createElement(s.Z,{id:k,ref:F}))};var v=(0,a.memo)(p)},27816:function(e,t,n){n.d(t,{$8:function(){return l},M0:function(){return r},nu:function(){return a}});const a='保存到"稍后观看',r="保存到播放列表",l=[{icon:"",name:"添加到队列"},{icon:"",name:a},{icon:"",name:r}]},48495:function(e,t,n){n.d(t,{Pf:function(){return i},Ve:function(){return r},p5:function(){return l}});var a=n(74283);async function r(e){return await a.Z.post({url:"/history/"+e,data:{}})}async function l(e,t,n,r){return await a.Z.post({url:"/history/user/"+e,params:{offset:t,limit:n,keyword:r}})}async function i(){return await a.Z.post({url:"/history/delete/all"})}},80852:function(e,t,n){n.d(t,{T:function(){return l},d:function(){return r}});var a=n(74283);async function r(e,t,n){return await a.Z.get({url:"/later/user/"+e,params:{offset:t,limit:n}})}async function l(e){return await a.Z.post({url:"/later/"+e})}},5521:function(e,t,n){function a(e){"string"==typeof e&&(e=parseInt(e));const t=Math.floor(e/1e3)||0;if(0===t)return"00:00";{const e=Math.floor(t/60/60);let n=t%3600,a=0,r=0;0!==n&&(a=Math.floor(n/60),n%=60,0!==n&&(r=n));return`${0===e?"":`${e.toString().padStart(2,"0")}:`}${a.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}}n.d(t,{f:function(){return a}})},72475:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(67294),r=n(48889),l=n(89250),i=n(76570),o=n(53133);const c=o.ZP.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
`,s=o.ZP.div`
  width: 65%;
  height: 86vh;
  overflow-y: scroll;
  .label-title {
    font-size: ${.6}rem;
    margin: 0 0 ${.5}rem 0;
  }
  .vio-list {
    & > li {
      width: ${21.25}rem;
      margin: 0 0 ${1.25}rem 0;
      .time {
        font-size: ${.5}rem;
        margin: 0 0 ${.4}rem 0;
      }
    }
  }
`,u=o.ZP.div`
  width: 34%;
  padding: 0 0 0 ${.5}rem;
  .search-outer {
    border-bottom: ${e=>e.isBolderBorder?"2px solid #0f0f0f":"1px solid #606060"};
    padding: 0 0 ${.25}rem 0;
    display: flex;
    align-items: center;
    input {
      padding: 0 0 0 ${.375}rem;
      width: ${7.5}rem;
    }
    svg {
      font-size: ${.7}rem;
      cursor: pointer;
    }
  }
  .operate {
    margin: ${.75}rem 0 0 0;
    & > li {
      padding: ${.5}rem 0 ${.5}rem ${.5}rem;
      font-size: ${.5}rem;
      cursor: pointer;
      &:hover {
        background-color: #e5e5e5;
      }
    }
  }
`;var d=n(95998),m=n(48495),f=n(72249),p=n(67294),v=n(30381);const h=()=>{const[e,t]=(0,a.useState)([]),[n,o]=(0,a.useState)(0),[h,g]=(0,a.useState)(!1),[y,b]=(0,a.useState)(!1),[E,w]=(0,a.useState)(""),k=(0,d.v9)((e=>e.getIn(["loginReducer","login"]))),x=(0,l.s0)();(0,a.useEffect)((()=>{$(k.userMsg.userId,0,10,"")}),[k.userMsg.userId]);const $=async(e,n,a,r)=>{(0,m.p5)(e,n,a,r).then((e=>{200===e.status&&(t(e.data.list),o(e.data.count))}))};return p.createElement(c,null,p.createElement(s,null,p.createElement("p",{className:"label-title"},"观看记录"),p.createElement("ul",{className:"vio-list"},e&&0!==e.length&&e.map(((e,t)=>p.createElement("li",{key:e.id,onClick:t=>{(e=>{x("/videoDetail",{replace:!0,state:{id:e.id}})})(e)}},p.createElement("p",{className:"time"},v().format("yyyy-MM-DD")===v(e.history).format("yyyy-MM-DD")?v(e.history).fromNow():v().format("yyyy-MM-DD")),p.createElement(f.Z,{img:p.createElement("img",{src:e.picUrl}),isShowVideo:!1,state:e.name,id:e.id,vioHeight:152.5,user:e.user,createTime:e.createTime,dt:e.dt,playCount:e.playCount,itemWidth:330,dtPos:{left:38,top:97},isShowMore:!1,isFlex:!0,isShowUser:!1,scale:.55})))))),p.createElement(u,{isBolderBorder:y},p.createElement("div",{className:"search-outer"},p.createElement(i.Z,{onClick:async e=>{await(async()=>{await $(k.userMsg.userId,0,10,E)})()}}),p.createElement("input",{type:"input",placeholder:"搜索观看记录",onInput:e=>{(e=>{w(e.currentTarget.value)})(e)},onFocus:e=>{b(!0)},onBlur:e=>{b(!1)}})),p.createElement("ul",{className:"operate"},p.createElement("li",{onClick:e=>{g(!0)}},"清除所有历史记录"),p.createElement("li",null,"暂停观看记录"),p.createElement("li",null,"管理所有历史记录"))),p.createElement(r.Z,{title:"要清除观看记录吗",open:h,onOk:()=>{(0,m.Pf)().then((async e=>{200===e.status&&(await $(k.userMsg.userId,0,10,""),g(!1))}))},onCancel:async()=>{g(!1)}},p.createElement("p",{style:{fontWeight:"bolder"}},k.userMsg.userName),p.createElement("p",null,"你的codergb-hub观看记录将从所有设备上的所有codergb-hub应用中清除")))};var g=(0,a.memo)(h)},50132:function(e,t,n){var a=n(87462),r=n(4942),l=n(44925),i=n(1413),o=n(15671),c=n(43144),s=n(79340),u=n(98557),d=n(67294),m=n(93967),f=n.n(m),p=function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,o.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,i.Z)((0,i.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,c.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,i=t.className,o=t.style,c=t.name,s=t.id,u=t.type,m=t.disabled,p=t.readOnly,v=t.tabIndex,h=t.onClick,g=t.onFocus,y=t.onBlur,b=t.onKeyDown,E=t.onKeyPress,w=t.onKeyUp,k=t.autoFocus,x=t.value,$=t.required,Z=(0,l.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),C=Object.keys(Z).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=Z[t]),e}),{}),N=this.state.checked,P=f()(n,i,(e={},(0,r.Z)(e,"".concat(n,"-checked"),N),(0,r.Z)(e,"".concat(n,"-disabled"),m),e));return d.createElement("span",{className:P,style:o},d.createElement("input",(0,a.Z)({name:c,id:s,type:u,required:$,readOnly:p,disabled:m,tabIndex:v,className:"".concat(n,"-input"),checked:!!N,onClick:h,onFocus:g,onBlur:y,onKeyUp:w,onKeyDown:b,onKeyPress:E,onChange:this.handleChange,autoFocus:k,ref:this.saveInput,value:x},C)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,i.Z)((0,i.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);p.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.Z=p}}]);
//# sourceMappingURL=2475.ffc80b2b.chunk.js.map