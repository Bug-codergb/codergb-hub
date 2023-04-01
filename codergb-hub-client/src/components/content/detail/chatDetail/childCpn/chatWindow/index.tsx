import React, {ChangeEvent, FC, memo, useEffect, useState,useRef} from 'react';
import {Input, Layout} from 'antd';
import {ChatWindowWrapper} from "./style";
import {CHAT, CHAT_CONTENT, CHAT_QUEUE, CommonWebSocket} from "../../../../../../network/websocket/chat";
import {useLoginMsg} from "../../../../../../hook/useLoginMsg";
import {IChatQueue} from "../../../../../../types/chat/IChat";
import {IPage} from "../../../../../../types/IPage";
import moment from "moment";
import {IResponseType} from "../../../../../../types/responseType";

const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;
interface IProps{
  userId:string;
  userName:string
}
const ChatWindow:FC<IProps>=(props)=>{
  const { userName,userId }=props;//目标用户
  //目标聊天用户
  const [targetUser,setTargetUser] = useState<string>(userId);
  const [targetUserName,setTargetUserName] = useState<string>(userName);

  const [chatQueue,setChatQueue] = useState<IChatQueue[]>([]);
  const [chatQueueTotal,setChatQueueTotal] = useState<number>(0)

  const [chatContent,setContent] = useState<string>("");
  const login = useLoginMsg();

  const [chatWebSocket,setChatWebSocket] = useState<CommonWebSocket|null>(null);//发布聊天
  const [historyWebSocket,setHistoryWebSocket] = useState<CommonWebSocket|null>(null);//聊天记录
  const [queueWebSocket,setQueueWebSocket] = useState<CommonWebSocket|null>(null);//聊天队列
  useEffect(()=>{
    //获取聊天队列(当前登陆人)
    let params={
      targetUser:login.userMsg.userId,//当前登陆人
      targetChatUser:targetUser //目标聊天用户是否再聊天队列里
    }
    const webSocket = new CommonWebSocket(CHAT_QUEUE,params);
    setQueueWebSocket(webSocket);
    webSocket.websocket.onmessage=function(e){
      const data:IResponseType<IPage<IChatQueue[]>> = JSON.parse(e.data);
      if(data.status===200){
        setChatQueue(data.data.list);
        setChatQueueTotal(data.data.count);
      }
    }
  },[login.userMsg.userId]);
  //聊天发布(交互socket)
  useEffect(()=>{
    if(targetUser && login.userMsg.userId){
      let params={
        targetUser:targetUser,
        sourceUser:login.userMsg.userId
      }
      let webSocket = new CommonWebSocket(CHAT, params);
      setChatWebSocket(webSocket);
      webSocket.websocket.onmessage=function(e){
        if(historyWebSocket){
          historyWebSocket.sendSocketMsg('pull');
        }
        if(queueWebSocket){
          queueWebSocket.sendSocketMsg('pull');
        }
      }
      webSocket.websocket.onopen=function(){
        console.log("建立成功")
      }
    }
  },[targetUser,login.userMsg.userId,historyWebSocket])
  //聊天记录
  const [contentHistory,setContentHistory] = useState<IChatQueue[]>([]);
  const [contentHistoryTotal,setContentHistoryTotal] = useState<number>(0);
  useEffect(()=>{
    if(targetUser){
      let params={
        targetUser:targetUser,
        sourceUser:login.userMsg.userId,
        limit:30000
      }
      let webSocket = new CommonWebSocket(CHAT_CONTENT, params);
      setHistoryWebSocket(webSocket);
      webSocket.websocket.onmessage=function(e){
        const data:IResponseType<IPage<IChatQueue[]>> = JSON.parse(e.data);
        if(data.status===200){
          setContentHistory(data.data.list);
        }
        if(queueWebSocket){
          queueWebSocket.sendSocketMsg("pull")
        }
      }
      webSocket.websocket.onopen=function(){
        console.log("建立成功")
      }
    }
  },[targetUser,queueWebSocket])
  //聊天输入
  const chatInp=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    if(e.currentTarget && e.currentTarget.value!==undefined && e.currentTarget.value!==null){
      setContent(e.currentTarget.value)
    }
  }
  const publishContent=()=>{
    if(chatWebSocket){
      chatWebSocket.sendSocketMsg(chatContent);
      setContent("")
      // if(historyWebSocket){
      //   historyWebSocket.sendSocketMsg('pull');
      // }
      // if(queueWebSocket){
      //   queueWebSocket.sendSocketMsg('pull');
      // }
    }
  }
  const [currentIndex,setCurrentIndex] = useState<number>(0);
  const userClick=(item:IChatQueue,index:number)=>{
    setTargetUser(item.sourceUser.userId);
    setTargetUserName(item.sourceUser.userName);
    setCurrentIndex(index);
  }

  const contentRef = useRef<HTMLDivElement|null>(null);
  useEffect(()=>{
    console.log(contentRef.current?.offsetHeight,contentRef.current?.scrollHeight)
    if(contentRef.current && (contentRef.current.offsetHeight <= contentRef.current.scrollHeight)){
      contentRef.current.scrollTop = contentRef.current.scrollHeight//-contentRef.current.offsetHeight
    }
  },[contentRef.current,contentHistory.length])
  return <ChatWindowWrapper>
    <Layout>
      <Sider className="gb-chat-side">
        <div className="recent-title">近期消息</div>
        <ul className="chat-queue">
          {
            chatQueue && chatQueue.length!==0 && chatQueue.map((item,index)=>{
              return (
                  <li key={item.id} onClick={e=>userClick(item,index)} className={currentIndex===index?'active':''}>
                    <div className="img-container">
                      <img src={item.sourceUser.avatarUrl}/>
                    </div>
                    <div className="right-container">
                      <div className="user-name">{item.sourceUser.userName}</div>
                      <div className="content text-nowrap">{ item.content}</div>
                    </div>
                  </li>
              )
            })
          }
        </ul>
      </Sider>
      <Layout>
        <Header className="gb-chat-header">{targetUserName}</Header>
        <Content className='gb-chat' ref={contentRef}>
          <ul className="chat-history">
            {
              contentHistory && contentHistory.length!==0 && contentHistory.map((item)=>{
                return (
                    <li key={item.id} className={item.sourceUser.userId!==targetUser?'active':''}>
                      <div className="img-container">
                        <img src={item.sourceUser.avatarUrl}/>
                      </div>
                      <div className="content-container">
                        <div className="content">{item.content}</div>
                        <div className="time">{ moment(item.createTime).fromNow() }</div>
                      </div>
                    </li>
                )
              })
            }
          </ul>
        </Content>
        <Footer className="gb-chat-footer">
          <div className="chat-inp">
            <TextArea rows={3}
                      maxLength={500}
                      value={chatContent}
                      onChange={(e)=>chatInp(e)}/>
          </div>
          <div className="publish-container">
            <div className="publish-btn" onClick={e=>publishContent()}>发布</div>
          </div>
        </Footer>
      </Layout>
    </Layout>
  </ChatWindowWrapper>
}
export default memo(ChatWindow)