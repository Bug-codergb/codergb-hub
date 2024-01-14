"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[7006],{2798:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(67294),a=t(38648);const c=t(53133).ZP.div`
  background-color: #f2f2f2;
  color: #0f0f0f;
  cursor: pointer;
  font-size: ${.5}rem;

  border-radius: ${.6}rem;
  margin: 0 0 0 ${1}rem;
  text-align: center;
  .inner {
    width: 100%;
    height: 100%;
    padding: ${.25}rem ${.5}rem;
  }
  &:hover {
    background-color: #e5e5e5;
  }
`;var u=t(29143),s=t(54841),i=t(95998),l=t(97465),o=t(8069);const d=e=>{const{userId:n}=e,t=(0,u.$)(n),d=(0,s.y)(),m=(0,i.I0)();return r.createElement(c,null,r.createElement("div",{className:"inner",onClick:async()=>{await(async()=>{t?(await(0,l.eM)(n)).status:200===(await(0,l.lu)(n)).status&&a.Z.info({message:"订阅成功",description:"在“订阅内容中”查看您添加的视频",placement:"bottomLeft"});d&&d.userMsg&&m((0,o.ZN)(d.userMsg.userId))})()}},t?"已订阅":"订阅"))};var m=(0,r.memo)(d)},54841:function(e,n,t){t.d(n,{y:function(){return a}});var r=t(95998);const a=()=>(0,r.v9)((e=>e.getIn(["loginReducer","login"])))},29143:function(e,n,t){t.d(n,{$:function(){return a}});var r=t(95998);const a=e=>{let n=-1;const t=(0,r.v9)((e=>e.getIn(["loginReducer","login"])));if(t){const{userDetail:r}=t;r&&0!==r.subscriber.length&&e&&(n=r.subscriber.findIndex(((n,t)=>e===n.userId)))}return-1!==n}},97465:function(e,n,t){t.d(n,{$p:function(){return s},eM:function(){return c},lu:function(){return a},yf:function(){return u}});var r=t(74283);function a(e){return r.Z.post({url:"/sub/",data:{upId:e}})}function c(e){return r.Z.post({url:"/sub/cancel",data:{upId:e}})}function u(e,n,t){return r.Z.post({url:"/sub/user/"+e,data:{offset:n,limit:t}})}function s(e){return r.Z.get({url:"/sub/count/"+e})}},47006:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var r=t(67294),a=t(89250);const c=t(53133).ZP.div`
  .sub-list {
    & > li {
      display: flex;
      align-items: flex-start;
      margin: 0 0 ${.65}rem 0;
      .left-container {
        width: ${4}rem;
        height: ${4}rem;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .center-container {
        flex: 8;
        margin: 0 0 0 ${.5}rem;
        .channel-name {
          font-size: ${.7}rem;
        }
        .count {
          & > span {
            font-size: ${.45}rem;
            color: #606060;
            &:nth-child(1) {
              margin: 0 ${5/40}rem 0 0;
            }
          }
        }
      }
      .right-container {
        flex: 1;
        padding: 0 ${1}rem 0;
      }
    }
  }
`;var u=t(95998),s=t(97465),i=t(2798);const l=()=>{const[e,n]=(0,r.useState)([]),[t,l]=(0,r.useState)(0),o=(0,a.s0)(),d=(0,u.v9)((e=>e.getIn(["loginReducer","login"])));(0,r.useEffect)((()=>{(0,s.yf)(d.userMsg.userId,0,10).then((e=>{n(e.data.list),l(e.data.count)}))}),[]);const m=e=>{e&&o("/home/userDetail",{state:{userId:e.userId},replace:!1})};return r.createElement(c,null,r.createElement("ul",{className:"sub-list"},e&&0!==e.length&&e.map((e=>r.createElement("li",{key:e.id},r.createElement("div",{className:"left-container",onClick:()=>{m(e.up)}},r.createElement("img",{src:e.up.avatarUrl})),r.createElement("div",{className:"center-container"},r.createElement("div",{className:"channel-name",onClick:()=>{m(e.up)}},e.up.userName),r.createElement("div",{className:"count"},r.createElement("span",null,e.fans,"位订阅者"),r.createElement("span",null,e.video,"个视频")),r.createElement("div",{className:"desc text-nowrap-mul-line"},e.channel.description)),r.createElement("div",{className:"right-container"},r.createElement(i.Z,{userId:e.up.userId})))))))};var o=(0,r.memo)(l)}}]);
//# sourceMappingURL=7006.0e6efcd5.chunk.js.map