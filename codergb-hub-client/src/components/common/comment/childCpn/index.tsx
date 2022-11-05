import React, {memo, FC, ReactElement, useEffect, useState} from "react";
import {
  ReplyWrapper
}from "./style";
import {getAllReply} from "../../../../network/comment";
import {IResponseType} from "../../../../types/responseType";
import {IPage} from "../../../../types/IPage";
import {IComment} from "../../../../types/comment/IComment";
import moment from "moment";
import {DislikeOutlined, LikeOutlined} from "@ant-design/icons";
interface IProps{
  id:string
}
const Reply:FC<IProps>=(props)=>{
  const {id}=props;
  const [reply,setReply] = useState<IComment[]>([]);
  const [count,setCount] = useState<number>(0);
  useEffect(()=>{
    getAllReply<IResponseType<IPage<IComment[]>>>(id,0,10).then((data)=>{
      if(data.status===200){
        setReply(data.data.list);
        setCount(data.data.count);
      }
    })
  },[id])
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
                      <div className="reply-for-name">
                        @{item.reply? (typeof item.reply ==="object"  &&item.reply.hasOwnProperty("user") ? item.reply.user.userName :"") :''}
                      </div>
                      <div className="reply-controller-btn">
                        <div className="thumb">
                          <LikeOutlined/>
                          <span className="thumb-count">18w</span>
                        </div>
                        <div className="tread">
                          <DislikeOutlined/>
                        </div>
                        <div className="reply-label">
                          回复
                        </div>
                      </div>
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