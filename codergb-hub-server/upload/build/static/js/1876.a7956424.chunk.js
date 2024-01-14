"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[1876],{936:function(e,t,r){r.d(t,{H:function(){return l},V:function(){return n}});var a=r(74283);async function n(e,t,r){return await a.Z.post({url:"/collection/user/"+e,params:{offset:t,limit:r}})}async function l(e){return await a.Z.post({url:"/collection/detail/"+e})}},23037:function(e,t,r){r.r(t),r.d(t,{default:function(){return me}});var a=r(67294),n=r(60561),l=r(53133);const c=l.ZP.div`
  .explore-list {
    display: flex;
    align-items: center;
    & > li {
      padding: 0 ${.5}rem;
      & > span {
        padding: 0 0 ${5/40}rem 0;
        cursor: pointer;
      }
      &.active {
        & > span {
          border-bottom: 3px solid #cc0101;
        }
      }
    }
  }
`;var s=r(74283);const i="电影和节目";let m=new Map([["音乐","音乐"],["电影和节目",i],["游戏","游戏"],["新闻","新闻"],["体育","体育"],["学习","学习"]]);const o=l.ZP.div`
  height: 80vh;
  overflow-y: scroll;
  .music-header {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .channel-msg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${.6}rem 0;
    padding: 0 ${1}rem 0 0;
    .left-container {
      display: flex;
      align-items: center;
      .left {
        width: ${2.5}rem;
        height: ${2.5}rem;
        border-radius: 50%;
        overflow: hidden;
        & > img {
          width: 100%;
        }
      }
      .right {
        margin: 0 0 0 ${.75}rem;
        .name {
          font-size: ${1}rem;
        }
        .sub {
          font-size: ${.5}rem;
          color: #606060;
        }
      }
    }
    .right-container {
      background-color: #0f0f0f;
      color: #fff;
      cursor: pointer;
      font-size: ${.5}rem;
      padding: ${.25}rem ${.5}rem;
      border-radius: ${.6}rem;
      margin: 0 0 0 ${1}rem;
    }
  }
`;var d=r(49314),u=r(89250),p=r(62462),f=r(97491);const E=l.ZP.div`
  padding: 0 0 ${.5}rem 0;
  .col-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > li {
      display: flex;
      align-items: flex-start;
      margin: 0 ${.5}rem ${.75}rem 0;
      .img-cover {
        border-radius: 4px;
      }
      .right-container {
        width: ${3.75}rem;
        margin: 0 0 0 ${.5}rem;
        .name {
          font-size: ${.45}rem;
          white-space: normal;
          margin: 0 0 ${.375}rem 0;
        }
        .desc {
          font-size: ${.3}rem;
          color: #606060;
          white-space: normal;
        }
        .count {
          font-size: ${.3}rem;
          color: #606060;
          white-space: normal;
          display: flex;
          flex-wrap: wrap;
          margin: ${.25}rem 0 0 0;
        }
      }
    }
  }
  .page {
    padding: ${.375}rem ${.45}rem ${.375}rem 0;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #e5e5e5;
  }
`;var g=r(936),h=r(35724),v=r.p+"static/medis/placeholder.b3140e2d0994f05071a1.png";const w=e=>{const{userId:t}=e,[r,n]=(0,a.useState)([]),[l,c]=(0,a.useState)(0),s=(0,u.s0)();(0,a.useEffect)((()=>{(0,g.V)(t,0,8).then((e=>{200===e.status&&(c(e.data.count),n(e.data.list))}))}),[t]);return a.createElement(E,null,a.createElement("ul",{className:"col-list"},r&&0!==r.length&&r.map(((e,t)=>a.createElement("li",{key:e.id},a.createElement("div",{className:"left-container"},a.createElement(p.Z,{className:"img-cover",width:120,height:120,src:e.picUrl,onClick:()=>(e=>{console.log(e),s("/videoDetail",{replace:!0,state:{cId:e.id,type:"collection"}})})(e),fallback:v,preview:!1})),a.createElement("div",{className:"right-container"},a.createElement("p",{className:"name text-nowrap-mul-line"},e.name),a.createElement("p",{className:"desc text-nowrap-mul-line"},e.description),a.createElement("p",{className:"count"},e.count,"个作品"))))),(0,h.Z)(r.length,4,350)),a.createElement("div",{className:"page"},a.createElement(f.Z,{defaultCurrent:1,pageSize:8,total:l,onChange:e=>(e=>{(0,g.V)(t,8*(e-1),8).then((e=>{200===e.status&&(c(e.data.count),n(e.data.list))}))})(e)})))};var $=(0,a.memo)(w);const b=l.ZP.div``,x=()=>a.createElement(b,null,"www");var y=(0,a.memo)(x);const N=l.ZP.div``,I=()=>a.createElement(N,null,"www");var Z=(0,a.memo)(I);const k=e=>{const{userId:t}=e,[r,l]=(0,a.useState)();(0,a.useEffect)((()=>{(0,d.Ff)(t).then((e=>{200===e.status&&l(e.data)}))}),[t]);const c=[{label:"首页",key:"item-1",children:a.createElement($,{userId:t})},{label:"社区",key:"item-2",children:a.createElement(y,null)},{label:"简介",key:"item-3",children:a.createElement(Z,null)}];return a.createElement(o,null,a.createElement("div",{className:"music-header"},a.createElement("img",{src:r?.picUrl,alt:r?.name})),a.createElement("div",{className:"channel-msg"},a.createElement("div",{className:"left-container"},a.createElement("div",{className:"left"},a.createElement("img",{src:r?.user.avatarUrl})),a.createElement("div",{className:"right"},a.createElement("div",{className:"name"},r?.name),a.createElement("div",{className:"sub"},"1.8亿位订阅"))),a.createElement("div",{className:"right-container"},"订阅")),a.createElement(n.Z,{items:c}))};var z=(0,a.memo)(k),S=r(14277),P=r(98453),C=r(89366),j=r.p+"static/medis/1677308494819.355551f0efdd3a2bc6b5.png";const U=l.ZP.div`
  height: 80vh;
  overflow-y: scroll;

  .common-header {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .channel-msg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${.6}rem 0;
    padding: 0 ${1}rem 0 0;

    .left-container {
      display: flex;
      align-items: center;

      .left {
        width: ${2.5}rem;
        height: ${2.5}rem;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        & > img {
          width: 100%;
        }
        .ant-avatar-circle,
        .anticon-user {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        svg {
          width: ${1}rem;
          height: ${1}rem;
        }
      }

      .right {
        margin: 0 0 0 ${.75}rem;

        .name {
          font-size: ${1}rem;
        }

        .sub {
          font-size: ${.5}rem;
          color: #606060;
        }
      }
    }

    .right-container {
      background-color: #0f0f0f;
      color: #fff;
      cursor: pointer;
      font-size: ${.5}rem;
      padding: ${.25}rem ${.5}rem;
      border-radius: ${.6}rem;
      margin: 0 0 0 ${1}rem;
    }
  }
`;var _=r(13790),D=r(59466),F=r(67724),M=r(8812),V=r(30381),R=r.n(V);const T=l.ZP.div`
  .common-video-list {
    display: flex !important;
    margin: ${.375}rem 0 ${.75}rem 0;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 ${.5}rem;
    position: relative;
    .prev,
    .next {
      width: ${1.375}rem;
      height: ${1.375}rem;
      position: absolute;
      top: 15%;
      left: 0;
      transform: translate(-50, -50%);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .next {
      left: 100%;
      transform: translateX(-100%);
    }
    & > li {
      width: ${7}rem;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.09);
      padding: 0 0 10px 0;
      &:hover {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.17);
      }
      .img-container {
        width: ${7}rem;
        img {
          width: 100%;
        }
      }
      .video-name {
        font-size: ${.5}rem;
        padding: 10px 8px 0 8px;
        display: inline-block;
        word-break: break-all;
      }
      .user-name {
        padding: 5px 0 5px 8px;
        font-size: ${.45}rem;
        cursor: pointer;
      }
      .create-time {
        font-size: ${.45}rem;
        padding: 0 0 0 8px;
      }
    }
  }
`,A=e=>{const{id:t}=e,[r,n]=(0,a.useState)(0),[l,c]=(0,a.useState)([]),s=(0,a.useRef)(null);(0,a.useEffect)((()=>{(0,_.Oi)(t,0,10).then((e=>{200===e.status&&(n(e.data.count),c(e.data.list))}))}),[t]);const i=(0,u.s0)();return a.createElement(T,null,a.createElement(D.Z,{ref:s,dots:!1},[0,1].map(((e,t)=>a.createElement("ul",{key:e,className:"common-video-list"},l&&0!==l.length&&l.slice(5*e,5*e+5).map((e=>a.createElement("li",{key:e.id},a.createElement("div",{className:"img-container",onClick:t=>(e=>{i("/videoDetail",{replace:!0,state:{id:e.id}})})(e)},a.createElement("img",{src:e.picUrl})),a.createElement("div",{className:"video-name text-nowrap-mul-line"},e.name),a.createElement("div",{className:"user-name"},e.user.userName),a.createElement("div",{className:"create-time"},R()(e.createTime).fromNow())))),l&&0!==l.length&&(0,h.Z)(l.length,5,300),l&&l.length>5&&a.createElement(a.Fragment,null,a.createElement("div",{className:"prev",onClick:e=>{s&&s.current&&s.current?.prev()}}," ",a.createElement(F.Z,null)),a.createElement("div",{className:"next",onClick:e=>{s&&s.current&&s.current?.next()}},a.createElement(M.Z,null)," ")))))),(!l||0===l.length)&&a.createElement(S.Z,{description:"暂无视频",image:S.Z.PRESENTED_IMAGE_SIMPLE}))};var G=(0,a.memo)(A);const H=l.ZP.div``,L=e=>{const{userId:t}=e,[r,n]=(0,a.useState)(0),[l,c]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(0,_.N3)(t,0,10).then((e=>{200===e.status&&(n(e.data.count),c(e.data.list))}))}),[t]),a.createElement(H,null,a.createElement("ul",null,l&&0!==l.length&&l.map(((e,t)=>a.createElement("li",{key:e.id},a.createElement("div",{className:"play-list-name"},e.name),a.createElement(G,{id:e.id}))))))};var O=(0,a.memo)(L),X=r(20902);const q=()=>a.createElement("div",null,"简介");var B=(0,a.memo)(q);const J=e=>{const{userId:t}=e,[r,l]=(0,a.useState)();(0,a.useEffect)((()=>{(0,d.Ff)(t).then((e=>{200===e.status&&l(e.data)}))}),[]);const c=[{label:"首页",key:"item-1",children:a.createElement(O,{userId:t})},{label:"社区",key:"item-2",children:r?a.createElement(X.Z,{cId:r.id,userId:t}):a.createElement(S.Z,null)},{label:"简介",key:"item-3",children:a.createElement(B,null)}];return a.createElement(U,null,a.createElement("div",{className:"common-header"},r?.picUrl&&a.createElement("img",{src:r?.picUrl,alt:r?.name}),(!r||!r.picUrl)&&a.createElement("img",{src:j,alt:r?.name})),a.createElement("div",{className:"channel-msg"},a.createElement("div",{className:"left-container"},a.createElement("div",{className:"left"},r&&r.user&&a.createElement(P.C,{src:r?.user.avatarUrl,size:70,icon:a.createElement(C.Z,{style:{fontSize:"80px"}})})),a.createElement("div",{className:"right"},a.createElement("div",{className:"name"},r?.name),a.createElement("div",{className:"sub"},"1.8亿位订阅"))),a.createElement("div",{className:"right-container"},"订阅")),a.createElement(n.Z,{items:c}))};var K=(0,a.memo)(J);const Q=e=>{const{userId:t}=e;return a.createElement("div",null,a.createElement(K,{userId:t}))};var W=(0,a.memo)(Q);const Y=e=>{const{userId:t}=e;return a.createElement("div",null,a.createElement(K,{userId:t}))};var ee=(0,a.memo)(Y);const te=l.ZP.div``,re=e=>{const{userId:t}=e;return a.createElement(te,null,a.createElement(K,{userId:t}))};var ae=(0,a.memo)(re);const ne=e=>{const{userId:t}=e;return a.createElement("div",null,a.createElement(K,{userId:t}))};var le=(0,a.memo)(ne);const ce=e=>{const{userId:t}=e;return a.createElement("div",null,a.createElement(K,{userId:t}))};var se=(0,a.memo)(ce);const ie=()=>{const[e,t]=(0,a.useState)([]),[r,l]=(0,a.useState)([]),o=(e,t)=>{switch(m.get(e)){case"音乐":return a.createElement(z,{userId:t});case i:return a.createElement(W,{userId:t});case"游戏":return a.createElement(ee,{userId:t});case"新闻":return a.createElement(ae,{userId:t});case"体育":return a.createElement(le,{userId:t});case"学习":return a.createElement(se,{userId:t});default:return a.createElement(z,{userId:t})}};return(0,a.useEffect)((()=>{(async function(){return await s.Z.post({url:"/user/all",params:{isExplore:1}})})().then((e=>{t(e.data.list);let r=[];for(let t of e.data.list)r.push({label:t.userName,key:t.userId,children:o(t.userName,t.userId)});l(r)}))}),[]),a.createElement(c,null,a.createElement(n.Z,{items:r}))};var me=(0,a.memo)(ie)}}]);
//# sourceMappingURL=1876.a7956424.chunk.js.map