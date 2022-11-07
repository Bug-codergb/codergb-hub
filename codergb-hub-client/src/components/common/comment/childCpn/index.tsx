import React, {memo, FC, ReactElement, useEffect, useState} from "react";
import {
  ReplyWrapper
}from "./style";
import {getAllReply, replyComment} from "../../../../network/comment";
import {IResponseType} from "../../../../types/responseType";
import {IPage} from "../../../../types/IPage";
import {IComment} from "../../../../types/comment/IComment";
import moment from "moment";
import {DislikeOutlined, LikeOutlined} from "@ant-design/icons";
import Publish from "../../publish";
import {IUserMsg} from "../../../../types/user/IUserMsg";
interface IProps{
  id:string,
  user:IUserMsg
}
const Reply:FC<IProps>=(props)=>{
  const {id,user}=props;
  const [reply,setReply] = useState<IComment[]>([]);
  const [count,setCount] = useState<number>(0);
  const [replyIndex,setReplyIndex] = useState<number>(-1);
  useEffect(()=>{
    getAllReplyHandle(id,0,10);
  },[id]);
  const getAllReplyHandle=(id:string,offset:number,limit:number)=>{
    getAllReply<IResponseType<IPage<IComment[]>>>(id,offset,limit).then((data)=>{
      if(data.status===200){
        setReply(data.data.list);
        setCount(data.data.count);
      }
    })
  }
  const replyReplyHandle=async (content:string,item:IComment)=>{
    const result = await replyComment(item.id,content);
    if(result.status===200){
      await getAllReplyHandle(id,0,10);
      setReplyIndex(-1);
    }
  }
  const showReplyHandle=(index:number)=>{
    if(index===replyIndex){
      setReplyIndex(-1)
    }else{
      setReplyIndex(index);
    }
  }
  return (
      <ReplyWrapper>
        <ul className="reply-list">
          {
            reply && reply.length!==0 && reply.map((item,index)=>{
              return (
                  <li key={item.id}>
                    <div className="left-msg">
                      <img src={item.user.avatarUrl}/>
                    </div>
                    <div className="right-msg">
                      <div className="user-name-time">
                        <span className="user-name">{item.user.userName}</span>
                        <span className="create-time">{moment(item.createTime).locale('zh-CN').fromNow()}</span>
                      </div>
                      <div className="content">
                        {item.content}
                      </div>
                      {
                        (id && typeof item.reply ==="object"  &&item.reply.hasOwnProperty("user") && item.reply.id !== id) && <div className="reply-for-name">
                          @{item.reply? (typeof item.reply ==="object"  &&item.reply.hasOwnProperty("user") ? item.reply.user.userName :"") :''}
                        </div>
                      }
                      <div className="reply-controller-btn">
                        <div className="thumb">
                          <LikeOutlined/>
                          <span className="thumb-count">18w</span>
                        </div>
                        <div className="tread">
                          <DislikeOutlined/>
                        </div>
                        <div className="reply-label" onClick={e=>showReplyHandle(index)}>
                          回复
                        </div>
                      </div>
                      {/*回复评论的回复*/}
                      {
                        index===replyIndex && <div className="reply-reply">
                          <Publish user={user}
                                   isShowAt={true}
                                   atUser={item.user}
                                   publish={(content)=>replyReplyHandle(content,item)}/>
                        </div>
                      }
                    </div>
                  </li>
              )
            })
          }
        </ul>
      </ReplyWrapper>
  )
}
export default memo(Reply);