"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[9698],{80852:function(e,t,r){r.d(t,{T:function(){return n},d:function(){return i}});var a=r(74283);async function i(e,t,r){return await a.Z.get({url:"/later/user/"+e,params:{offset:t,limit:r}})}async function n(e){return await a.Z.post({url:"/later/"+e})}},89698:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var a=r(67294),i=r(89250),n=r(30381),l=r.n(n),o=r(53133);const c=o.ZP.div`
  display: flex;
  align-items: flex-start;
`,s=o.ZP.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: ${.75}rem ${.75}rem;
  height: 86vh;
  background-image: url(${e=>e.bgc});
  background-repeat: no-repeat;
  background-size: auto 9999px;
  background-position: center;
  border-radius: ${.4}rem;
  overflow: hidden;
  .mask {
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.08);
  }
  .img-container {
    width: ${11.25}rem;
    border-radius: ${.4}rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .later-label {
    font-size: ${.75}rem;
    color: #fff;
    font-weight: bolder;
    margin: ${.7}rem 0 0 0;
  }
  .user-name {
    font-size: ${.45}rem;
    color: #fff;
    margin: ${.5}rem 0 ${.45}rem 0;
  }
  .vio-info {
    display: flex;
    align-items: center;
    .vio-count {
      font-size: ${.4}rem;
      color: #d2cfd0;
    }
    .update-time {
      margin: 0 0 0 ${.25}rem;
      font-size: ${.4}rem;
      color: #d2cfd0;
    }
  }
`,m=o.ZP.div`
  margin: 0 0 0 ${.75}rem;
  width: 70%;
  height: 86vh;
  overflow-y: scroll;
  .vio-list {
    & > li {
      display: flex;
      align-items: flex-start;
      cursor: pointer;
      padding: ${.5}rem 0 ${.5}rem ${.45}rem;
      border-radius: ${.2}rem;
      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .cover-container {
        margin: 0 ${1.2}rem 0 0;
        width: ${5}rem;
        img {
          width: 100%;
          border-radius: 8px;
        }
      }
      .later-right-info {
        width: 70%;
        .desc {
          display: flex;
          align-items: center;
          margin: ${.4}rem 0 0 0;
          .user-name,
          .play-count,
          .create-time {
            font-size: ${.4}rem;
            color: #606060;
          }
          .play-count {
            margin: 0 ${.2}rem;
          }
        }
      }
    }
  }
`;var d=r(80852),u=r(95998);const g=()=>{const[e,t]=(0,a.useState)([]),[r,n]=(0,a.useState)(0),o=(0,u.v9)((e=>e.getIn(["loginReducer","login"]))),g=(0,i.s0)();(0,a.useEffect)((()=>{(async(e,r,a)=>{const i=await(0,d.d)(e,r,a);200===i.status&&(t(i.data.list),n(i.data.count))})(o.userMsg.userId,0,10).then((e=>{}))}),[]);const f=e=>{g("/videoDetail",{replace:!0,state:{id:e.id}})};return a.createElement(c,null,e&&0!==e.length&&a.createElement(s,{bgc:e[0]?.video?.picUrl},a.createElement("div",{className:"img-container"},e&&e[0]&&a.createElement("img",{src:e[0].video.picUrl})),a.createElement("p",{className:"later-label"},"稍后观看"),a.createElement("p",{className:"user-name"},o.userMsg.userName),a.createElement("div",{className:"vio-info"},a.createElement("div",{className:"vio-count"},r,"个视频"),a.createElement("div",{className:"update-time"},"昨日更新")),a.createElement("div",{className:"mask"})),a.createElement(m,null,a.createElement("ul",{className:"vio-list"},e&&0!==e.length&&e.map((e=>a.createElement("li",{key:e.id},a.createElement("div",{className:"cover-container",onClick:t=>{f(e.video)}},a.createElement("img",{src:e.video.picUrl})),a.createElement("div",{className:"later-right-info"},a.createElement("p",{className:"vio-name text-nowrap-mul-line",onClick:t=>{f(e.video)}},e.video.name),a.createElement("div",{className:"desc"},a.createElement("div",{className:"user-name"},e.video.user.userName,"."),a.createElement("div",{className:"play-count"},e.video.playCount,"次观看."),a.createElement("div",{className:"create-time"},l()(e.createTime).fromNow(),"加入")))))))))};var f=(0,a.memo)(g)}}]);
//# sourceMappingURL=9698.f1695bcd.chunk.js.map