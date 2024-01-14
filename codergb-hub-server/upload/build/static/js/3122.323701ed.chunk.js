"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[3122],{2798:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),r=a(38648);const i=a(53133).ZP.div`
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
`;var l=a(29143),s=a(54841),c=a(95998),o=a(97465),m=a(8069);const d=e=>{const{userId:t}=e,a=(0,l.$)(t),d=(0,s.y)(),u=(0,c.I0)();return n.createElement(i,null,n.createElement("div",{className:"inner",onClick:async()=>{await(async()=>{a?(await(0,o.eM)(t)).status:200===(await(0,o.lu)(t)).status&&r.Z.info({message:"订阅成功",description:"在“订阅内容中”查看您添加的视频",placement:"bottomLeft"});d&&d.userMsg&&u((0,m.ZN)(d.userMsg.userId))})()}},a?"已订阅":"订阅"))};var u=(0,n.memo)(d)},50489:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(67294),r=a(42239),i=a(38648),l=a(48889),s=a(50817),c=a(49101),o=a(88633),m=a(95357),d=a(53133);const u=d.ZP.div`
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
`;var f=a(27816);const p=d.ZP.div`
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
`;var g=a(9676),h=a(95998),v=a(13790);const E=e=>{const{select:t}=e,[a,r]=(0,n.useState)([]),[i,l]=(0,n.useState)(0),s=(0,h.v9)((e=>e.getIn(["loginReducer","login"])));(0,n.useEffect)((()=>{(0,v.N3)(s.userMsg.userId,0,10).then((e=>{200===e.status&&(r(e.data.list),l(e.data.count))}))}),[s]);return n.createElement(p,null,n.createElement("ul",{className:"add-play-list"},a&&0!==a.length&&a.map(((e,a)=>n.createElement("li",{key:e.id},n.createElement("div",{className:"left-container"},n.createElement("div",{className:"check"},n.createElement(g.Z,{onChange:a=>{((e,a)=>{t(e.target.checked,a)})(a,e)}})),n.createElement("div",{className:"play-list-name"},e.name)),n.createElement("div",{className:"right-container"},1===e.isPublic&&n.createElement(m.Z,null),1!==e.isPublic&&n.createElement(o.Z,null)))))))};var b=(0,n.memo)(E),y=a(80852);const{Option:w}=r.default,$=(0,n.forwardRef)(((e,t)=>{const{id:a}=e,[d,p]=(0,n.useState)(!1),[g,h]=(0,n.useState)(!1),[E,$]=(0,n.useState)(1),[N,k]=(0,n.useState)(""),[Z,x]=(0,n.useState)(0),I=e=>{e.name===f.M0&&p(!0),e.name===f.nu&&(0,y.T)(a).then((e=>{var t;console.log(e),200===e.status&&(t="bottomLeft",i.Z.info({message:"已成功添加至稍后观看",description:'在"稍后观看"查看您添加的视频',placement:t}))})).catch((e=>{}))};(0,n.useImperativeHandle)(t,(()=>({liClick:I})));return n.createElement(u,null,n.createElement("div",{onClick:e=>{e.stopPropagation()}},n.createElement(l.Z,{key:a,title:"保存到...",width:"30%",destroyOnClose:!0,maskClosable:!1,open:d,onCancel:e=>{p(!1)},footer:g?[n.createElement("div",{className:"create-playlist"},n.createElement("p",null,"名称"),n.createElement(s.default,{placeholder:"请输入播放列表名称",showCount:!0,maxLength:20,onInput:e=>{(e=>{k(e.currentTarget.value)})(e)}}),n.createElement("p",null,"隐私设置"),n.createElement(r.default,{onChange:e=>{x(e)},value:Z,placeholder:"请选择播放列表属性"},n.createElement(w,{value:0},n.createElement("div",{className:"private"},n.createElement("div",{className:"name"},"私享"),n.createElement("div",{className:"icon"},n.createElement(o.Z,null)))),n.createElement(w,{value:1},n.createElement("div",{className:"private"},n.createElement("div",{className:"name"},"公开"),n.createElement("div",{className:"icon"},n.createElement(m.Z,null))))),n.createElement("div",{className:"create-label",onClick:e=>{N&&(0,v.cg)(N,N,Z).then((e=>{200===e.status&&(h(!1),$(E+1))}))}},"创建"))]:[n.createElement("div",{className:"add-new-playlist"},n.createElement(c.Z,null),n.createElement("div",{className:"add-label",onClick:e=>{(e=>{e.stopPropagation(),h(!0)})(e)}},"新建播放列表"))]},d&&n.createElement(b,{key:E,select:(e,t)=>{((e,t)=>{e&&(0,v.xW)(a,t.id).then((e=>{200===e.status&&i.Z.info({message:`已成功添加至${t.name}`,description:`在"${t.name}"查看您添加的视频`,placement:"bottomLeft"})}))})(e,t)}}))))}));var N=(0,n.memo)($)},63122:function(e,t,a){a.r(t),a.d(t,{default:function(){return ce}});var n=a(67294),r=a(95998),i=a(38648),l=a(60561),s=a(89250),c=a(53133);const o=c.ZP.div`
  width: 100%;
  height: 86vh;
  background-color: #fff;
  overflow-y: scroll;
  img {
    width: 100%;
  }
  .banner {
    min-height: ${5}rem;
  }
  .user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: flex-start;
      margin: ${.75}rem 0 ${.5}rem 0;

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
    .control-btn {
      display: flex;
      align-items: center;
      .sub-btn {
        margin: 0 0 0 ${.25}rem;
      }
    }
  }
`;var m=a(49314),d=a(97465),u=a(14277),f=a(30381),p=a.n(f),g=a(93041),h=a(48495);const v=c.ZP.div`
  .video-tip {
    font-weight: bold;
    margin: 0 0 ${.35}rem 0;
    font-size: ${.5}rem;
  }
  .trailer {
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #e5e5e5;
    padding: 0 0 ${.5}rem 0;
    margin: 0 0 ${.4}rem 0;
    .left-container {
      width: ${9.75}rem;
      position: relative;
      img {
        border-radius: ${.2}rem;
        width: 100%;
      }
      video {
        width: 100%;
        height: ${5.5}rem;
        border-radius: 4px;
        object-fit: contain;
        background-color: #333;
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
`;var E=a(49028);const b=e=>{const{channel:t}=e,a=(0,s.s0)(),[r,i]=(0,n.useState)(""),l=(0,n.useRef)(null);(0,n.useEffect)((()=>{console.log(t),t?.trailer&&(0,E.fY)(t.trailer.id).then((e=>{if(200===e.status){let t=e.data.vioUrl;0,i(t)}}))}),[t]),(0,n.useEffect)((()=>{if(l.current&&t)if(g.ZP.isSupported()){const e=new g.ZP;e.loadSource(r),e.attachMedia(l.current),t&&(0,h.Ve)(t.trailer.id)}else l.current.canPlayType("application/vnd.apple.mpegurl")&&(l.current.src=r)}),[l.current,r,t]);const c=e=>{e&&a("/videoDetail",{replace:!0,state:{id:e.id}})};return n.createElement(v,null,n.createElement("div",{className:"video-tip"},"频道预告片"),n.createElement("div",{className:"trailer"},n.createElement("div",{className:"left-container"},t?.trailer&&r&&n.createElement("video",{ref:l,controls:!0,muted:!1,loop:!0,onTimeUpdate:e=>{},onCanPlay:()=>{l.current&&(l.current.volume=.5)},autoPlay:!0}),!t?.trailer&&n.createElement(u.Z,{image:u.Z.PRESENTED_IMAGE_SIMPLE,description:"ta还没有添加频道预告片"})),t?.trailer&&n.createElement(n.Fragment,null,n.createElement("div",{className:"right-container"},n.createElement("p",{className:"video-name",onClick:()=>{c(t.trailer)}},t.trailer?.name),n.createElement("p",{className:"play-count-time"},n.createElement("p",{className:"count"},t.trailer?.playCount,"次观看"),n.createElement("p",null,p()(t.trailer?.createTime).fromNow())),n.createElement("p",{className:"desc"},t.trailer?.description)))),n.createElement("div",{className:"video-tip"},"频道精选视频"),n.createElement("div",{className:"trailer"},n.createElement("div",{className:"left-container"},t?.featured&&n.createElement("img",{src:t.featured?.picUrl,onClick:()=>{c(t.featured)}}),!t?.featured&&n.createElement(u.Z,{image:u.Z.PRESENTED_IMAGE_SIMPLE,description:"ta还没有添加频道精选视频"})),t?.featured&&n.createElement(n.Fragment,null,n.createElement("div",{className:"right-container"},n.createElement("p",{className:"video-name",onClick:()=>{c(t.featured)}},t.featured?.name),n.createElement("p",{className:"play-count-time"},n.createElement("p",{className:"count"},t.featured?.playCount,"次观看"),n.createElement("p",null,p()(t.featured?.createTime).fromNow())),n.createElement("p",{className:"desc"},t.featured?.description)))))};var y=(0,n.memo)(b),w=a(20902);const $=e=>{const{userId:t,channel:a}=e;return console.log(a),n.createElement("div",null,a&&n.createElement(w.Z,{userId:t,cId:a.id,isShowPub:!1}))};var N=(0,n.memo)($);const k=c.ZP.div``,Z=()=>n.createElement(k,null,"jianjie");var x=(0,n.memo)(Z);var I=a(93038),S=a(42752);const P=c.ZP.div`
  .video-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;var C=a(72249),U=a(35724);const M=e=>{const{userId:t}=e,a=(0,s.s0)(),[r,i]=(0,n.useState)([]),[l,c]=(0,n.useState)(0);(0,n.useEffect)((()=>{((e,t,a,n)=>{(0,E.sf)(e,t,a,n).then((e=>{200===e.status&&(i(e.data.list),c(e.data.count))}))})(t,"",0,10)}),[t]);return n.createElement(P,null,n.createElement("ul",{className:"video-list"},r&&0!==r.length&&r.map((e=>n.createElement("li",{key:e.id},n.createElement(C.Z,{img:n.createElement("img",{src:e.picUrl,onClick:()=>{(e=>{a("/videoDetail",{replace:!0,state:{id:e.id}})})(e)}}),dt:e.dt,isShowUser:!1,playCount:e.playCount,createTime:e.createTime,id:e.id,state:e.name,isShowVideo:!1,scale:.92,itemWidth:300,vioHeight:140,dtPos:{left:98,top:54},user:e.user})))),(0,U.Z)(r.length,5,300)))};var z=(0,n.memo)(M),T=a(54841),j=a(22263),F=a(92977),D=a(16114),H=a(28682),W=a(13790);const L=c.ZP.div`
  .play-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > li {
      width: ${7.5}rem;
      height: ${3.825}rem;
      margin: 0 0 ${3.5}rem 0;
      position: relative;
      .sub {
        display: flex;
        align-items: center;
        .label {
          margin: 0 0 0 5px;
        }
      }
      .container {
        display: flex;
        align-items: flex-start;
        width: 100%;
        justify-content: space-between;
        .g-more {
          margin: ${.375}rem 0 ${5/40}rem 0;
          cursor: pointer;
          svg {
            font-size: ${.75}rem;
          }
        }
      }
    }
    .cover {
      width: 100%;
      height: 100%;
      background-color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      overflow: hidden;
      img {
        height: 100%;
        width: auto;
        border-radius: 4px;
      }
    }
    .state {
      .name {
        font-size: ${.45}rem;
        margin: ${.375}rem 0 ${5/40}rem 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        width: 88%;
        word-break: break-all;
      }
      .create-time,
      .count {
        font-size: ${.4}rem;
        color: #606060;
      }
    }
  }
`,_=e=>{const{userId:t}=e,[a,r]=(0,n.useState)([]),[l,c]=(0,n.useState)(0),o=(0,s.s0)();(0,n.useEffect)((()=>{((e,t,a)=>{(0,W.N3)(e,t,a).then((e=>{200===e.status&&(r(e.data.list),c(e.data.count))}))})(t,0,10)}),[t]);return n.createElement(L,null,n.createElement("ul",{className:"play-list"},a&&0!==a.length&&a.map((e=>n.createElement("li",{key:e.id},n.createElement("div",{className:"cover",onClick:t=>{(e=>{o(`/home/playlist/${e.id}`,{replace:!1})})(e)}},n.createElement("img",{src:e.picUrl})),n.createElement("div",{className:"state"},n.createElement("div",{className:"container"},n.createElement("p",{className:"name"},e.name),n.createElement(D.Z,{overlay:n.createElement(H.Z,{onClick:t=>{((e,t)=>{console.log(e.key),"sub"===e.key&&(console.log(t),(0,W.U4)(t.id).then((e=>{200===e.status&&i.Z.info({message:`${e.message}`,description:"个人中心‘收藏的播放列表’中查看",placement:"bottomLeft"})})))})(t,e)}},n.createElement(H.Z.Item,{key:"sub"},n.createElement("div",{className:"g-sub-playlist"},n.createElement(j.Z,null),n.createElement("span",{className:"label"},"收藏")))),trigger:["click"]},n.createElement(F.Z,{className:"g-more"}))),n.createElement("p",{className:"create-time"},p()(e.createTime).format("yyyy-MM-DD HH:mm")),n.createElement("p",{className:"count"},e.video,"个视频"))))),(0,U.Z)(a.length,5,300)))};var R=(0,n.memo)(_);const A=c.ZP.div`
  padding: ${.5}rem 0;
  .sub-list {
    & > li {
      display: flex;
      align-items: flex-start;
      margin: 0 0 ${.65}rem 0;
      .left-container {
        width: ${3.5}rem;
        height: ${3.5}rem;
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
`;var V=a(2798);const Y=e=>{const{userId:t}=e,[a,r]=(0,n.useState)([]),[i,l]=(0,n.useState)(0);return(0,n.useEffect)((()=>{((e,t,a)=>{(0,d.yf)(e,t,a).then((e=>{200===e.status&&(r(e.data.list),l(e.data.count))}))})(t,0,10)}),[t]),n.createElement(A,null,n.createElement("ul",{className:"sub-list"},a&&0!==a.length&&a.map((e=>n.createElement("li",{key:e.id},n.createElement("div",{className:"left-container"},n.createElement("img",{src:e.up.avatarUrl})),n.createElement("div",{className:"center-container"},n.createElement("div",{className:"channel-name"},e.up.userName),n.createElement("div",{className:"count"},n.createElement("span",null,e.fans,"位订阅者"),n.createElement("span",null,e.video,"个视频")),n.createElement("div",{className:"desc text-nowrap-mul-line"},e.channel.description)),n.createElement("div",{className:"right-container"},n.createElement(V.Z,{userId:e.up.userId})))))))};var B=(0,n.memo)(Y),G=a(29143),O=a(8069);const Q=e=>{const{userId:t}=e;return n.createElement("div",null,"dddd")};var K=(0,n.memo)(Q);const q=e=>{const{userId:t}=e;return n.createElement("div",null,"dddd")};var J=(0,n.memo)(q);const X=e=>{const{userId:t}=e;return n.createElement("div",null,"dddd")};var ee=(0,n.memo)(X);const te=e=>{const{userId:t}=e;return n.createElement("div",null,"dddd")};var ae=(0,n.memo)(te);const ne=c.ZP.div`
  .video-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`,re=e=>{const{userId:t}=e,a=(0,s.s0)(),[r,i]=(0,n.useState)([]),[l,c]=(0,n.useState)(0);(0,n.useEffect)((()=>{((e,t,a,n)=>{(0,E.EL)(e,t,a,n).then((e=>{200===e.status&&(i(e.data.list),c(e.data.count))}))})(t,"",0,10)}),[t]);return n.createElement(ne,null,n.createElement("ul",{className:"video-list"},r&&0!==r.length&&r.map((e=>n.createElement("li",{key:e.id},n.createElement(C.Z,{img:n.createElement("img",{src:e.picUrl,onClick:()=>{(e=>{a("/videoDetail",{replace:!0,state:{id:e.id}})})(e)}}),dt:e.dt,isShowUser:!1,playCount:e.playCount,createTime:e.createTime,id:e.id,state:e.name,isShowVideo:!1,scale:.92,itemWidth:300,vioHeight:140,dtPos:{left:98,top:54},user:e.user})))),(0,U.Z)(r.length,5,300)))};var ie=(0,n.memo)(re),le=a(67294);const se=()=>{const e=(0,s.TH)(),t=(0,s.s0)(),{userId:a}=e.state,c=(0,r.I0)(),u=(0,G.$)(a),[f,p]=(0,n.useState)(0),[g,h]=(0,n.useState)(),[v,E]=(0,n.useState)([]),[b,w]=(0,n.useState)([]),$=(0,T.y)();(0,n.useEffect)((()=>{(0,m.Ff)(a).then((e=>{200===e.status&&(h(e.data),w(((e,t)=>[{label:"首页",key:"1001",children:n.createElement(y,{userId:e,channel:t})},{label:"社区",key:"1006",children:n.createElement(N,{userId:e,channel:t})},{label:"简介",key:"1008",children:n.createElement(x,{userId:e})}])(a,e.data)),p(1))}))}),[a]),(0,n.useEffect)((()=>{0!==f&&(0,I.Ds)(a).then((e=>{if(console.log(e),200===e.status&&(E(e.data),0!==e.data.length)){const t=[...b];for(const n of e.data)n.name===S.tn&&t.push({key:n.id,label:n.name,children:le.createElement(z,{userId:a})}),n.name===S.Yd&&t.push({key:n.id,label:n.name,children:le.createElement(ie,{userId:a})}),n.name===S.UE&&t.push({key:n.id,label:n.name,children:le.createElement(R,{userId:a})}),n.name===S.Bt&&t.push({key:n.id,label:n.name,children:le.createElement(B,{userId:a})}),n.name===S.cA&&t.push({key:n.id,label:n.name,children:le.createElement(ae,{userId:a})}),n.name===S.Qo&&t.push({key:n.id,label:n.name,children:le.createElement(K,{userId:a})}),n.name===S.ZU&&t.push({key:n.id,label:n.name,children:le.createElement(J,{userId:a})}),n.name===S.dh&&t.push({key:n.id,label:n.name,children:le.createElement(ee,{userId:a})});w(t)}}))}),[f]);return le.createElement(o,null,le.createElement("div",{className:"banner"},le.createElement("img",{src:g?.picUrl})),le.createElement("div",{className:"user-info"},le.createElement("div",{className:"left"},le.createElement("div",{className:"img-container"},le.createElement("img",{src:g?.user?.avatarUrl})),le.createElement("div",{className:"right-info"},le.createElement("div",{className:"user-name"},g?.user?.userName))),le.createElement("div",{className:"control-btn"},$.userMsg.userId!==a&&le.createElement("div",{className:"sub-btn",onClick:async()=>{await(async()=>{u?(await(0,d.eM)(a)).status:200===(await(0,d.lu)(a)).status&&i.Z.info({message:"订阅成功",description:"在“订阅内容中”查看您添加的视频",placement:"bottomLeft"});$&&$.userMsg&&c((0,O.ZN)($.userMsg.userId))})()}},u?"已订阅":"订阅"),$.userMsg.userId!==a&&le.createElement("div",{className:"sub-btn message",onClick:e=>{a&&g?.user&&t("/chatDetail",{state:{userId:a,userName:g.user.userName}})}},"私信"))),b&&0!==b.length&&le.createElement(l.Z,{defaultActiveKey:"1",items:b}))};var ce=(0,n.memo)(se)},72249:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(67294),r=a(89250);const i=a(53133).ZP.div`
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
`;var l=a(92977),s=a(16114),c=a(28682),o=a(50489),m=a(5521),d=a(27816),u=a(67294),f=a(30381);const p=e=>{const{user:t,isShowUser:a=!0,isPosUser:p=!1,img:g,vioHeight:h,dt:v,playCount:E,dtPos:b,isFlex:y,state:w,id:$,isShowMore:N,createTime:k,itemWidth:Z,scale:x,video:I,isShowVideo:S,isShowImg:P}=e,[C,U]=(0,n.useState)(!1),M=(0,r.s0)(),z=(0,n.useRef)(null),T=e=>{t&&(e.stopPropagation(),M("/home/userDetail",{state:{userId:t.userId},replace:!1}))};return u.createElement(i,{isShowUser:a,itemWidth:Z,scale:x,vioHeight:h,isFlex:y,dtPos:b},!S&&g,S&&u.createElement("div",{className:"video-container"},I),u.createElement("div",{className:"dt-pos"},(0,m.f)(v||"0")),u.createElement("div",{className:"msg-info"},a&&u.createElement("div",{className:"left-container",onClick:e=>{T(e)}},u.createElement("img",{src:t.avatarUrl})),u.createElement("div",{className:"right-container"},u.createElement("div",{className:"msg"},u.createElement("div",{className:"state"},u.createElement("div",{className:"video-name"},w),N&&u.createElement("div",{className:"more",onClick:e=>{(e=>{e.stopPropagation(),U(!0)})(e)}},u.createElement(s.Z,{trigger:["click"],overlay:u.createElement(c.Z,{onClick:e=>{z&&z.current&&z.current.liClick({icon:"",name:e.key})}},d.$8.map((e=>u.createElement(c.Z.Item,{key:e.name},u.createElement("div",{style:{display:"flex"}},u.createElement("div",null,e.icon),u.createElement("div",null,e.name))))))},u.createElement(l.Z,{className:"more-icon"})))),u.createElement("div",{className:p?"pos-user-container":""},p&&u.createElement("div",{className:"pos-user-container-avatar",onClick:e=>{T(e)}},u.createElement("img",{src:t.avatarUrl})),u.createElement("div",{className:"user-name"},t.userName)),u.createElement("div",{className:"play-count"},u.createElement("span",null,E,"次观看"),u.createElement("span",null,f(new Date(k).getTime()).locale("zh-CN").fromNow()))),u.createElement("div",{className:"more"}))),u.createElement(o.Z,{id:$,ref:z}))};var g=(0,n.memo)(p)},27816:function(e,t,a){a.d(t,{$8:function(){return i},M0:function(){return r},nu:function(){return n}});const n='保存到"稍后观看',r="保存到播放列表",i=[{icon:"",name:"添加到队列"},{icon:"",name:n},{icon:"",name:r}]},42752:function(e,t,a){a.d(t,{Bt:function(){return o},Qo:function(){return i},UE:function(){return s},Yd:function(){return r},ZU:function(){return c},cA:function(){return m},dh:function(){return l},tn:function(){return n}});const n="上传的视频",r="热门上传视频",i="短视频",l="单个播放列表",s="创建的播放列表",c="收藏的播放列表",o="订阅的频道",m="精选频道"},29143:function(e,t,a){a.d(t,{$:function(){return r}});var n=a(95998);const r=e=>{let t=-1;const a=(0,n.v9)((e=>e.getIn(["loginReducer","login"])));if(a){const{userDetail:n}=a;n&&0!==n.subscriber.length&&e&&(t=n.subscriber.findIndex(((t,a)=>e===t.userId)))}return-1!==t}},93038:function(e,t,a){a.d(t,{Ds:function(){return l},VA:function(){return i},cS:function(){return r}});var n=a(74283);async function r(){return await n.Z.get({url:"/block/all"})}async function i(e){return await n.Z.post({url:"/block/user/add",data:{blockId:e}})}async function l(e){return await n.Z.get({url:`/block/user/${e}`})}},48495:function(e,t,a){a.d(t,{Pf:function(){return l},Ve:function(){return r},p5:function(){return i}});var n=a(74283);async function r(e){return await n.Z.post({url:"/history/"+e,data:{}})}async function i(e,t,a,r){return await n.Z.post({url:"/history/user/"+e,params:{offset:t,limit:a,keyword:r}})}async function l(){return await n.Z.post({url:"/history/delete/all"})}},80852:function(e,t,a){a.d(t,{T:function(){return i},d:function(){return r}});var n=a(74283);async function r(e,t,a){return await n.Z.get({url:"/later/user/"+e,params:{offset:t,limit:a}})}async function i(e){return await n.Z.post({url:"/later/"+e})}},97465:function(e,t,a){a.d(t,{$p:function(){return s},eM:function(){return i},lu:function(){return r},yf:function(){return l}});var n=a(74283);function r(e){return n.Z.post({url:"/sub/",data:{upId:e}})}function i(e){return n.Z.post({url:"/sub/cancel",data:{upId:e}})}function l(e,t,a){return n.Z.post({url:"/sub/user/"+e,data:{offset:t,limit:a}})}function s(e){return n.Z.get({url:"/sub/count/"+e})}},5521:function(e,t,a){function n(e){"string"==typeof e&&(e=parseInt(e));const t=Math.floor(e/1e3)||0;if(0===t)return"00:00";{const e=Math.floor(t/60/60);let a=t%3600,n=0,r=0;0!==a&&(n=Math.floor(a/60),a%=60,0!==a&&(r=a));return`${0===e?"":`${e.toString().padStart(2,"0")}:`}${n.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}}a.d(t,{f:function(){return n}})}}]);
//# sourceMappingURL=3122.323701ed.chunk.js.map