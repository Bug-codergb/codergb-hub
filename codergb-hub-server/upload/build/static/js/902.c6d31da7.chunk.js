"use strict";(self.webpackChunkcodergb_hub_client=self.webpackChunkcodergb_hub_client||[]).push([[902],{35724:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);var a=(e,t,n)=>function(e,t){let n=[];for(let r=0;r<Math.ceil(e/t)*t-e;r++)n.push(r);return n}(e,t).map(((e,t)=>r.createElement("li",{key:t,style:{width:n/40+"rem",height:0,border:"none",padding:0,margin:0,outline:"none"}}," ")))},54841:function(e,t,n){n.d(t,{y:function(){return a}});var r=n(95998);const a=()=>(0,r.v9)((e=>e.getIn(["loginReducer","login"])))},47099:function(e,t,n){n.d(t,{bM:function(){return l},lm:function(){return a},p6:function(){return i},uy:function(){return o}});var r=n(74283);async function a(e,t,n,a,i){return await r.Z.post({url:"/moment",data:{title:e,content:t,vid:n,cId:i,userId:a}})}async function i(e,t,n){return await r.Z.post({url:"/moment/channel/"+e,params:{offset:t,limit:n}})}async function l(e){return await r.Z.post({url:"/moment/"+e})}async function o(e){return await r.Z.post({url:"/moment/delete/"+e})}},49028:function(e,t,n){n.d(t,{$x:function(){return a},Ay:function(){return E},EL:function(){return m},Ek:function(){return v},Fx:function(){return f},Mo:function(){return u},N$:function(){return l},O2:function(){return c},Ty:function(){return i},_M:function(){return p},b0:function(){return w},dd:function(){return g},fY:function(){return o},hk:function(){return y},lq:function(){return d},qI:function(){return h},sf:function(){return s}});var r=n(74283);async function a(e){return await r.Z.post({url:"/video/upload",data:e,headers:{"Content-type":"multipart/form-data"}})}async function i(e,t,n,a,i,l,o,c){return await r.Z.post({url:"/video/create",data:{videoId:e,title:t,desc:n,imgId:a,playlistId:i,tagIds:l,cateId:o,dt:c}})}async function l(e,t,n){return await r.Z.post({url:"/video/all",params:{offset:e,limit:t},data:{keyword:n}})}async function o(e){return await r.Z.get({url:`/video/url/${e}`})}async function c(e){return await r.Z.post({url:`/video/detail/${e}`})}async function s(e,t,n,a){return await r.Z.post({url:`/user/video/${e}`,params:{offset:n,limit:a},data:{keyword:t}})}async function m(e,t,n,a){return await r.Z.post({url:`/user/video/hot/${e}`,params:{offset:n,limit:a},data:{keyword:t}})}async function u(e,t,n,a){return await r.Z.post({url:`/video/sub/user/${e}`,params:{offset:t,limit:n},data:{isMonth:a}})}async function d(e,t,n){return await r.Z.post({url:"/video/thumb/user/"+e,params:{offset:t,limit:n}})}async function f(e,t,n){return await r.Z.post({url:"/video/similar/"+e,params:{offset:t,limit:n}})}async function p(e,t,n){return await r.Z.post({url:"/video/collection/"+e,params:{offset:t,limit:n}})}async function g(e){return await r.Z.post({url:"/record/"+e})}async function v(e){return await r.Z.get({url:"/record/user/"+e})}async function h(e){return await r.Z.get({url:"/record/thumb/"+e})}async function y(e){return await r.Z.post({url:"video/playCount/"+e})}async function E(){return await r.Z.get({url:"/video/carousel/all"})}async function w(e,t,n){return await r.Z.post({url:"/video/cate/"+e,params:{offset:t,limit:n}})}},20902:function(e,t,n){n.d(t,{Z:function(){return _}});var r=n(67294),a=n(54977),i=n(49101),l=n(50817),o=n(38648),c=n(55026),s=n(71577),m=n(48889),u=n(42856),d=n(53133);const f=d.ZP.div`
  .img-container {
    width: 100%;
    height: ${4.5}rem;
    display: flex;
    justify-content: center;
    background-color: var(--line-color);
    img {
      height: 100%;
    }
  }
`;var p=n(97491);const g=d.ZP.div`
  min-height: ${5}rem;
  .header-content {
    display: flex;
    align-items: center;
  }
  .vio-list {
    display: flex;
    justify-content: space-between;
    margin: ${.5}rem 0 0 0;
    flex-wrap: wrap;
    & > li {
      width: ${6}rem;
      margin: 0 0 ${.375}rem 0;
      border: 1px solid var(--line-color);
      padding: ${.25}rem;
      border-radius: 4px;
      &:hover {
        border-color: #3399ff;
      }
      &.active {
        border-color: #3399ff;
      }
      .img-container {
        width: ${5.5}rem;
        img {
          vertical-align: middle;
          width: 100%;
        }
      }
      .name {
        font-size: ${.45}rem;
        margin: ${.375}rem 0;
        word-break: break-all;
      }
      .user-name {
        font-size: ${.4}rem;
      }
    }
  }
  .page {
    display: flex;
    align-items: center;
    padding: ${.375}rem 0;
    justify-content: center;
  }
`;var v=n(49028),h=n(54841),y=n(35724);const{Search:E}=l.default,w=(0,r.forwardRef)(((e,t)=>{const[n,a]=(0,r.useState)(-1),[i,l]=(0,r.useState)([]),[o,c]=(0,r.useState)(0),[s,m]=(0,r.useState)(!0),[u,d]=(0,r.useState)(""),[f,w]=(0,r.useState)(null),b=(0,h.y)(),Z=async(e,t,n,r)=>{if(r){const r=await(0,v.sf)(b.userMsg.userId,n,e,t);200===r.status&&(c(r.data.count),l(r.data.list))}else{const r=await(0,v.N$)(e,t,n);200===r.status&&(c(r.data.count),l(r.data.list))}};(0,r.useImperativeHandle)(t,(()=>({videoSource:f})));return r.createElement(g,null,r.createElement("div",{className:"header-content"},r.createElement(E,{placeholder:"搜索您的视频",onSearch:async e=>{m(!0),d(e),await Z(0,8,e,!0)}}),r.createElement(E,{placeholder:"搜索codergb-hub全站视频",onSearch:async e=>{m(!1),d(e),await Z(0,8,e,!1)}})),r.createElement("ul",{className:"vio-list"},i&&0!==i.length&&i.map(((e,t)=>r.createElement("li",{key:e.id,onClick:n=>{((e,t)=>{a(t),w(e)})(e,t)},className:n===t?"active":""},r.createElement("div",{className:"img-container"},r.createElement("img",{src:e.picUrl})),r.createElement("div",{className:"name text-nowrap",title:e.name},e.name),r.createElement("div",{className:"user-name"},e.user.userName)))),(0,y.Z)(i.length,4,240)),o>8&&r.createElement("div",{className:"page"},r.createElement(p.Z,{defaultCurrent:1,pageSize:8,total:o,onChange:async e=>{await(async e=>{await Z(8*(e-1),8,u,s)})(e)}})))}));var b=(0,r.memo)(w),Z=n(47099),$=n(89250);const N=d.ZP.div`
  margin: ${.75}rem ${.75}rem 0 0;

  .moment-list {
    & > li {
      display: flex;
      align-items: flex-start;
      border: 1px solid #e5e5e5;
      margin: 0 0 ${.75}rem 0;
      border-radius: ${.3}rem;
      padding: ${.4}rem ${.75}rem ${.75}rem ${.4}rem;

      .avatar-container {
        width: ${1.25}rem;
        height: ${1.25}rem;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
        }
      }

      .right-container {
        margin: 0 0 0 ${.5}rem;
        flex: 1;
        position: relative;

        .operation {
          position: absolute;
          left: 100%;
          top: 2%;
          transform: translate(-120%, 0);
          cursor: pointer;

          .more-icon {
            cursor: pointer;

            svg {
              font-size: ${.85}rem;
            }
          }
        }

        .g-user-info {
          display: flex;
          align-items: center;

          .user-name {
            font-size: ${.4}rem;
            font-weight: bolder;
            margin: 0 ${.3}rem 0 0;
          }

          .create-time {
            font-size: ${.4}rem;
            color: #606060;
          }
        }

        .title {
          color: #065fd4;
          font-size: ${.5}rem;
          margin: ${.375}rem 0;
          cursor: pointer;
        }

        .content {
          text-indent: 2em;
          font-size: ${.45}rem;
          cursor: pointer;
        }

        .video-container {
          width: ${10}rem;
          margin: ${.5}rem 0;

          img {
            width: 100%;
            cursor: pointer;
          }
        }

        .thumb {
          display: inline-flex;
          align-items: center;

          .tread {
            border-left: 1px solid #d9d9d9;
            padding: 0 0 0 ${.45}rem;
            margin: 0 0 0 ${.45}rem;
          }
        }

        .thumb {
          cursor: pointer;
          background-color: #f2f2f2;
          padding: ${9/40}rem ${.45}rem ${5/40}rem;
          border-radius: ${.5}rem;

          .thumb-icon,
          .collection-icon,
          .tread-icon {
            svg {
              font-size: ${.6}rem;
            }
          }

          .label {
            margin: 0 0 0 ${.375}rem;
          }

          .thumb-icon-active {
            svg {
              color: #ff0000;
            }
          }
        }
      }
    }
  }
  .page {
    display: flex;
    justify-content: center;
    padding: ${.5}rem 0 ${.75}rem 0;
  }
`;var k=n(30381),I=n.n(k),C=n(16114),S=n(28682),x=n(92977),z=n(58812),M=n(80177),R=n(81825),q=n(6073);const P=(0,r.forwardRef)(((e,t)=>{const{cId:n}=e,[a,i]=(0,r.useState)(0),[l,o]=(0,r.useState)([]),s=async(e,t,n)=>{const r=await(0,Z.p6)(e,t,n);200===r.status&&(i(r.data.count),o(r.data.list))};(0,r.useImperativeHandle)(t,(()=>({getChannelMomentReq:s}))),(0,r.useEffect)((()=>{s(n,0,10).then((()=>{}))}),[n]);const m=(0,$.s0)(),u=e=>{m("/home/moment",{replace:!1,state:{id:e.id}})};return r.createElement(N,null,r.createElement("ul",{className:"moment-list"},l&&0!==l.length&&l.map(((e,t)=>r.createElement("li",{key:e.id},r.createElement("div",{className:"avatar-container"},r.createElement("img",{src:e.user.avatarUrl})),r.createElement("div",{className:"right-container"},r.createElement("div",{className:"operation"},r.createElement(C.Z,{trigger:["click"],overlay:r.createElement(S.Z,{onClick:t=>{((e,t)=>{console.log(e);const{key:r}=e;"del"===r&&(0,Z.uy)(t.id).then((e=>{200===e.status&&(c.ZP.info("删除成功"),s(n,0,10).then((()=>{})))}))})(t,e)}},r.createElement(S.Z.Item,{key:"del"},r.createElement("div",null,"删除"))),placement:"bottom"},r.createElement(x.Z,{className:"more-icon"}))),r.createElement("div",{className:"g-user-info"},r.createElement("p",{className:"user-name"},e.user.userName),r.createElement("p",{className:"create-time"},I()(e.createTime).fromNow())),r.createElement("p",{className:"title",onClick:()=>{u(e)}},e.title),r.createElement("p",{className:"content"},e.content),r.createElement("div",{className:"video-container",onClick:()=>{u(e)}},r.createElement("img",{src:e.video.picUrl})),r.createElement("div",{className:"thumb"},r.createElement("div",{className:"thumb-inner"},r.createElement(z.Z,{className:"thumb-icon"}),r.createElement(M.Z,{className:"thumb-icon"}),r.createElement("span",{className:"label"},"14万")),r.createElement("div",{className:"tread"},r.createElement(R.Z,{className:"tread-icon"}),r.createElement(q.Z,{className:"tread-icon"})))))))),a>10&&r.createElement(r.Fragment,null,r.createElement("div",{className:"page"},r.createElement(p.Z,{defaultCurrent:1,pageSize:10,total:a,onChange:e=>{(e=>{s(n,10*(e-1),10).then((()=>{}))})(e)}}))))}));var F=(0,r.memo)(P);const{TextArea:O}=l.default,U=e=>{const[t,n]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,h.y)(),g=(0,r.useRef)(null),[v,y]=(0,r.useState)(!1),E=(0,r.useRef)(null),[w,$]=(0,r.useState)(null),[N,k]=(0,r.useState)("");return r.createElement(f,null,(p.userMsg.userId===e.userId||e.isShowPub)&&r.createElement("div",{className:"publish-btn"},r.createElement(s.Z,{type:"primary",icon:r.createElement(a.Z,null),onClick:e=>(d.current?.resetFields(),n(!0),void $(null))},"发表你的看法")),r.createElement(m.Z,{title:"发布动态",open:t,maskClosable:!1,onOk:()=>{d.current?.validateFields().then((async t=>{200===(await(0,Z.lm)(t.title,t.content,t.videoId,e.userId,e.cId)).status&&(n(!1),g.current?.getChannelMomentReq(e.cId,0,15),o.Z.info({message:"动态创建成功",description:"请在您的频道社区查看您的发布",placement:"bottomLeft"}))}))},onCancel:()=>{n(!1)},destroyOnClose:!0},r.createElement(u.Z,{ref:d,name:"basic",labelCol:{span:8},wrapperCol:{span:167},initialValues:{remember:!0},autoComplete:"off",layout:"vertical"},r.createElement(u.Z.Item,{label:"标题",name:"title",rules:[{required:!0,message:"为你的动态添加一个标题吧!"}]},r.createElement(l.default,{size:"large",placeholder:"添加精彩标题"})),r.createElement(u.Z.Item,{label:"内容",name:"content",rules:[{required:!0,message:"请添加你的动态内容"}]},r.createElement(O,{rows:4,placeholder:"发表你所想",maxLength:300})),r.createElement(u.Z.Item,{label:"视频",name:"videoId",valuePropName:"videoId",rules:[{required:!0,message:"添加视频丰富一下你的动态吧"}]},w&&w.picUrl&&r.createElement("div",{className:"moment-out-of-body-img-container"},r.createElement("img",{src:w.picUrl})),r.createElement(s.Z,{type:"dashed",onClick:()=>{y(!0)},block:!0,icon:r.createElement(i.Z,null)},"选择视频")))),r.createElement(m.Z,{title:"视频列表",open:v,maskClosable:!1,onOk:()=>{E.current&&E.current.videoSource?(y(!1),$(E.current.videoSource),k(E.current.videoSource.id),d.current&&d.current.setFieldValue("videoId",E.current.videoSource.id)):c.ZP.warning("请选择一个视频")},onCancel:()=>{y(!1)},destroyOnClose:!0,width:"60%"},r.createElement(b,{ref:E})),e.cId&&r.createElement(F,{cId:e.cId,ref:g}))};var _=(0,r.memo)(U)}}]);
//# sourceMappingURL=902.c6d31da7.chunk.js.map