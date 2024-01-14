"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[5296],{54841:function(e,t,n){n.d(t,{y:function(){return r}});var a=n(95998);const r=()=>(0,a.v9)((e=>e.getIn(["loginReducer","login"])))},15296:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(67294),r=n(89250),i=n(94746),l=n(53133);const c=l.ZP.div`
  .title-label {
    font-size: ${.75}rem;
    font-weight: bolder;
    margin: 0 0 ${.4}rem 0;
  }
`,s=l.ZP.div`
  display: flex;
  align-items: flex-start;
  .left-container {
    .img-container {
      width: ${4.5}rem;
      height: ${2.4}rem;
      overflow: hidden;
      img {
        width: 100%;
        border-radius: 4px;
      }
    }
  }
  .right-container {
    margin: 0 0 0 ${.6}rem;
    .name {
      font-size: ${.5}rem;
      font-weight: bold;
      margin: 0 0 ${.25}rem;
      color: #0d0d0d;
    }
    .desc {
      font-size: ${.4}rem;
      color: #909090;
    }
  }
`;var o=n(13790),m=n(54841),d=n(95357),u=n(88633),g=n(30381),f=n.n(g),h=n(85161);const b=e=>[{title:"播放列表",dataIndex:"name",render:(t,n)=>a.createElement(s,null,a.createElement("div",{className:"left-container"},a.createElement("div",{className:"img-container",onClick:t=>((e,t)=>{t(`${h.tQ}/${e.id}`,{replace:!1})})(n,e)},a.createElement("img",{src:n.picUrl,alt:n.name}))),a.createElement("div",{className:"right-container"},a.createElement("div",{className:"right-msg"},a.createElement("p",{className:"name"},n.name),a.createElement("p",{className:"desc"},n.description))))},{title:"公开范围",dataIndex:"isPublic",render:(e,t)=>{const{isPublic:n}=t;return 1===n?a.createElement(d.Z,null):a.createElement(u.Z,null)}},{title:"上次更新时间",dataIndex:"createTime",sorter:(e,t)=>new Date(e.createTime).getTime()-new Date(t.createTime).getTime(),render:e=>f()(e).format("yyyy-MM-DD HH:mm")},{title:"视频数",dataIndex:"video",render:e=>e||0}],v=()=>{const[e,t]=(0,a.useState)([]),[n,l]=(0,a.useState)(0),[s,d]=(0,a.useState)("checkbox"),u=(0,m.y)(),g=(0,r.s0)(),f=(e,n,a)=>{(0,o.N3)(e,n,a).then((e=>{e.status&&(l(e.data.count),t(e.data.list))}))};(0,a.useEffect)((()=>{f(u.userMsg.userId,0,4)}),[]);const h={onChange:(e,t)=>{console.log("selectedRows: ",t)}};return a.createElement(c,null,a.createElement("div",{className:"title-label"},"我的播放列表"),e&&0!==e.length&&a.createElement(i.Z,{rowSelection:{type:s,...h},rowKey:"id",columns:b(g),dataSource:e,pagination:{pageSize:4,total:n,onChange:e=>(e=>{console.log(e),f(u.userMsg.userId,4*(e-1),4)})(e)}}))};var E=(0,a.memo)(v)}}]);
//# sourceMappingURL=5296.0483859f.chunk.js.map