"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[1736],{98787:function(e,t,n){n.d(t,{E:function(){return o},Y:function(){return i}});var a=n(93355),o=(0,a.b)("success","processing","error","default","warning"),i=(0,a.b)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},24308:function(e,t,n){n.d(t,{c4:function(){return i}});var a=n(4942),o=n(87462),i=["xxl","xl","lg","md","sm","xs"],r={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},l=new Map,s=-1,c={},p={matchHandlers:{},dispatch:function(e){return c=e,l.forEach((function(e){return e(c)})),l.size>=1},subscribe:function(e){return l.size||this.register(),s+=1,l.set(s,e),e(c),s},unsubscribe:function(e){l.delete(e),l.size||this.unregister()},unregister:function(){var e=this;Object.keys(r).forEach((function(t){var n=r[t],a=e.matchHandlers[n];null==a||a.mql.removeListener(null==a?void 0:a.listener)})),l.clear()},register:function(){var e=this;Object.keys(r).forEach((function(t){var n=r[t],i=function(n){var i=n.matches;e.dispatch((0,o.Z)((0,o.Z)({},c),(0,a.Z)({},t,i)))},l=window.matchMedia(n);l.addListener(i),e.matchHandlers[n]={mql:l,listener:i},i(l)}))}};t.ZP=p},31808:function(e,t,n){n.d(t,{fk:function(){return r},jD:function(){return i}});var a,o=n(98924),i=function(){return(0,o.Z)()&&window.document.documentElement},r=function(){if(!i())return!1;if(void 0!==a)return a;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),a=1===e.scrollHeight,document.body.removeChild(e),a}},45777:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(4942),o=n(29439),i=n(87462),r=n(93967),l=n.n(r),s=n(71002),c=n(1413),p=n(44925),d=n(67294),u=n(66619),m=n(43159);function f(e){var t=e.showArrow,n=e.arrowContent,a=e.children,o=e.prefixCls,i=e.id,r=e.overlayInnerStyle,s=e.className,c=e.style;return d.createElement("div",{className:l()("".concat(o,"-content"),s),style:c},!1!==t&&d.createElement("div",{className:"".concat(o,"-arrow"),key:"arrow"},n),d.createElement("div",{className:"".concat(o,"-inner"),id:i,role:"tooltip",style:r},"function"==typeof a?a():a))}var g=function(e,t){var n=e.overlayClassName,a=e.trigger,o=void 0===a?["hover"]:a,r=e.mouseEnterDelay,l=void 0===r?0:r,g=e.mouseLeaveDelay,v=void 0===g?.1:g,b=e.overlayStyle,h=e.prefixCls,y=void 0===h?"rc-tooltip":h,x=e.children,w=e.onVisibleChange,C=e.afterVisibleChange,E=e.transitionName,k=e.animation,N=e.motion,O=e.placement,Z=void 0===O?"right":O,P=e.align,T=void 0===P?{}:P,A=e.destroyTooltipOnHide,I=void 0!==A&&A,V=e.defaultVisible,j=e.getTooltipContainer,_=e.overlayInnerStyle,D=e.arrowContent,S=e.overlay,z=e.id,H=e.showArrow,$=(0,p.Z)(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"]),L=(0,d.useRef)(null);(0,d.useImperativeHandle)(t,(function(){return L.current}));var R=(0,c.Z)({},$);"visible"in e&&(R.popupVisible=e.visible);var q=!1,F=!1;if("boolean"==typeof I)q=I;else if(I&&"object"===(0,s.Z)(I)){var M=I.keepParent;q=!0===M,F=!1===M}return d.createElement(u.Z,(0,i.Z)({popupClassName:n,prefixCls:y,popup:function(){return d.createElement(f,{showArrow:H,arrowContent:D,key:"content",prefixCls:y,id:z,overlayInnerStyle:_},S)},action:o,builtinPlacements:m.C,popupPlacement:Z,ref:L,popupAlign:T,getPopupContainer:j,onPopupVisibleChange:w,afterPopupVisibleChange:C,popupTransitionName:E,popupAnimation:k,popupMotion:N,defaultPopupVisible:V,destroyPopupOnHide:q,autoDestroy:F,mouseLeaveDelay:v,popupStyle:b,mouseEnterDelay:l},R),x)},v=(0,d.forwardRef)(g),b=n(21770),h=n(53124),y=n(98787),x=n(33603),w=n(80636),C=n(96159),E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},k=new RegExp("^(".concat(y.Y.join("|"),")(-inverse)?$"));function N(e,t){var n=e.type;if((!0===n.__ANT_BUTTON||"button"===e.type)&&e.props.disabled||!0===n.__ANT_SWITCH&&(e.props.disabled||e.props.loading)||!0===n.__ANT_RADIO&&e.props.disabled){var a=function(e,t){var n={},a=(0,i.Z)({},e);return t.forEach((function(t){e&&t in e&&(n[t]=e[t],delete a[t])})),{picked:n,omitted:a}}(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),o=a.picked,r=a.omitted,s=(0,i.Z)((0,i.Z)({display:"inline-block"},o),{cursor:"not-allowed",width:e.props.block?"100%":null}),c=(0,i.Z)((0,i.Z)({},r),{pointerEvents:"none"}),p=(0,C.Tm)(e,{style:c,className:null});return d.createElement("span",{style:s,className:l()(e.props.className,"".concat(t,"-disabled-compatible-wrapper"))},p)}return e}var O=d.forwardRef((function(e,t){var n,r=d.useContext(h.E_),s=r.getPopupContainer,c=r.getPrefixCls,p=r.direction;var u=(0,b.Z)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),m=(0,o.Z)(u,2),f=m[0],g=m[1],y=function(){var t=e.title,n=e.overlay;return!t&&!n&&0!==t},O=function(){var t=e.builtinPlacements,n=e.arrowPointAtCenter,a=e.autoAdjustOverflow;return t||(0,w.Z)({arrowPointAtCenter:n,autoAdjustOverflow:a})},Z=e.getPopupContainer,P=E(e,["getPopupContainer"]),T=e.prefixCls,A=e.openClassName,I=e.getTooltipContainer,V=e.overlayClassName,j=e.color,_=e.overlayInnerStyle,D=e.children,S=c("tooltip",T),z=c(),H=f;"open"in e||"visible"in e||!y()||(H=!1);var $,L,R,q=N((0,C.l$)(D)&&!(0,C.M2)(D)?D:d.createElement("span",null,D),S),F=q.props,M=F.className&&"string"!=typeof F.className?F.className:l()(F.className,(0,a.Z)({},A||"".concat(S,"-open"),!0)),B=l()(V,(n={},(0,a.Z)(n,"".concat(S,"-rtl"),"rtl"===p),(0,a.Z)(n,"".concat(S,"-").concat(j),j&&k.test(j)),n)),Y=_;return j&&!k.test(j)&&(Y=(0,i.Z)((0,i.Z)({},_),{background:j}),$={"--antd-arrow-background-color":j}),d.createElement(v,(0,i.Z)({},P,{prefixCls:S,overlayClassName:B,getTooltipContainer:Z||I||s,ref:t,builtinPlacements:O(),overlay:(L=e.title,R=e.overlay,0===L?L:R||L||""),visible:H,onVisibleChange:function(t){var n,a;g(!y()&&t),y()||(null===(n=e.onOpenChange)||void 0===n||n.call(e,t),null===(a=e.onVisibleChange)||void 0===a||a.call(e,t))},onPopupAlign:function(e,t){var n=O(),a=Object.keys(n).find((function(e){return n[e].points[0]===t.points[0]&&n[e].points[1]===t.points[1]}));if(a){var o=e.getBoundingClientRect(),i={top:"50%",left:"50%"};a.indexOf("top")>=0||a.indexOf("Bottom")>=0?i.top="".concat(o.height-t.offset[1],"px"):(a.indexOf("Top")>=0||a.indexOf("bottom")>=0)&&(i.top="".concat(-t.offset[1],"px")),a.indexOf("left")>=0||a.indexOf("Right")>=0?i.left="".concat(o.width-t.offset[0],"px"):(a.indexOf("right")>=0||a.indexOf("Left")>=0)&&(i.left="".concat(-t.offset[0],"px")),e.style.transformOrigin="".concat(i.left," ").concat(i.top)}},overlayInnerStyle:Y,arrowContent:d.createElement("span",{className:"".concat(S,"-arrow-content"),style:$}),motion:{motionName:(0,x.mL)(z,"zoom-big-fast",e.transitionName),motionDeadline:1e3}}),H?(0,C.Tm)(q,{className:M}):q)}));O.defaultProps={placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0};var Z=O},76565:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(67294),o=n(89250),i=n(42856),r=n(50817),l=n(71577),s=n(53133),c=n.p+"static/medis/login.751f37e69d1f1bc57a2f.svg";const p=s.ZP.div`
  background-color: #060d20;
  position: relative;
  height: 100%;
  .login-bgc {
    display: flex;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    flex-direction: column;
    background-image: url(${c});
    background-position: center center;
    overflow: hidden;
    .signup-space {
      width: 100%;
    }
    .signup-stars {
      width: 100%;
    }
  }

  .signup-space,
  .signup-stars {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 100vh;
    height: 100vw;
  }
  .signup-stars:nth-child(1) {
    background-position: 10% 90%;
    animation-delay: 0s;
  }
  .signup-stars:nth-child(2) {
    background-position: 20% 50%;
    background-size: 270px 500px;
    animation-delay: 0.3s;
  }
  .signup-stars:nth-child(3) {
    background-position: 40% -80%;
    animation-delay: 1.2s;
  }
  .signup-stars:nth-child(4) {
    background-position: -20% -30%;
    transform: rotate(60deg);
    animation-delay: 2.5s;
  }
  .signup-stars:nth-child(5) {
    background-image: radial-gradient(2px 2px at 10px 100px, #eee, rgba(0, 0, 0, 0)),
      radial-gradient(2px 2px at 20px 10px, #fff, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 150px 40px, #ddd, rgba(0, 0, 0, 0));
    background-position: 80% 30%;
    animation-delay: 4s;
  }
  .signup-stars:nth-child(6) {
    background-position: 50% 20%;
    animation-delay: 6s;
  }
  .signup-stars {
    background-image: radial-gradient(2px 2px at 50px 200px, #eee, rgba(0, 0, 0, 0)),
      radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #ddd, rgba(0, 0, 0, 0));
    background-repeat: repeat;
    background-size: 250px 250px;
    opacity: 0;
    animation: zoom 10s infinite;
  }
  @keyframes zoom {
    0% {
      opacity: 0;
      transform: rotate(5deg);
    }
    85% {
      opacity: 1;
    }
    100% {
      opacity: calc() 0.2;
      transform: scale(2.2);
    }
  }
  .form-container {
    position: absolute;
    top: 0;
    left: 0;
  }
  .title {
    text-align: center;
  }
  .login-inner {
    padding: ${2}rem ${.75}rem ${1}rem ${.75}rem;
    border-radius: 8px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    width: ${15}rem;
    background-color: #0e162b;
    border: 1px solid #212636;
    .ant-form-item {
      .ant-form-item-required {
        color: #5eccc7;
      }
    }
  }
  @keyframes hostTitle {
    from {
      letter-spacing: -20px;
    }
    to {
      letter-spacing: 20px;
    }
  }
  .codergb-hub-title {
    display: flex;
    justify-content: center;
    filter: contrast(130px);
    .label {
      font-size: ${1.5}rem;
      letter-spacing: 15px;
      animation: hostTitle 3s infinite;
    }
  }
`;var d=n(95998),u=n(8069);const m=()=>{const e=(0,o.s0)(),t=(0,d.I0)(),n=(0,a.useCallback)((n=>{const{username:a,password:o}=n;t((0,u.y)(a,o,e))}),[]),s=(0,a.useCallback)((e=>{console.log("Failed:",e)}),[]);return a.createElement(p,null,a.createElement("div",{className:"login-bgc"},a.createElement("div",{className:"signup-space"},a.createElement("div",{className:"signup-stars"}),a.createElement("div",{className:"signup-stars"}),a.createElement("div",{className:"signup-stars"}),a.createElement("div",{className:"signup-stars"}),a.createElement("div",{className:"signup-stars"}),a.createElement("div",{className:"signup-stars"}))),a.createElement("div",{className:"login-inner"},a.createElement(i.Z,{name:"basic",labelCol:{span:6},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:n,onFinishFailed:s,autoComplete:"off"},a.createElement(i.Z.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入您的用户名"}]},a.createElement(r.default,null)),a.createElement(i.Z.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入您的密码"}]},a.createElement(r.default.Password,null)),a.createElement(i.Z.Item,{wrapperCol:{offset:7,span:16}},a.createElement(l.Z,null,"注册"),a.createElement(l.Z,{type:"primary",htmlType:"submit"},"登录")))))};var f=(0,a.memo)(m)}}]);
//# sourceMappingURL=1736.9a30da0e.chunk.js.map