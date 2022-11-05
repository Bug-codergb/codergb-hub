import React, {memo, FC, ReactElement, useEffect, useState, ChangeEvent, FormEvent} from "react";
import moment from "moment";
import {
  LikeOutlined,
  DislikeOutlined,
  CaretUpOutlined,
  CaretDownOutlined
} from '@ant-design/icons'
import {
  CommentWrapper
} from "./style";
import {IUserMsg} from "../../../types/user/IUserMsg";
import {getAllComment, publishComment} from "../../../network/comment";
import {IResponseType} from "../../../types/responseType";
import {IPage} from "../../../types/IPage";
import {IComment} from "../../../types/comment/IComment";
import Reply from "./childCpn";
interface IProps{
  user:IUserMsg,
  alias:string,
  id:string,
}
const Comment:FC<IProps>=(props)=>{
  const { user,alias,id } = props;
  const [isShowReply,setIsShowReply] = useState<boolean>(false);
  const [comment,setComment] = useState<IComment[]>([]);
  const [commentCount,setCommentCount]=useState<number>(0);
  const [isFocus,setIsFocus] = useState<boolean>(false);
  const [content,setContent] = useState<string>("");
  useEffect(()=>{
    getAllCommentHandle(id,0,10,alias);
  },[id]);
  const getAllCommentHandle=(id:string,offset:number,limit:number,alias:string)=>{
    getAllComment<IResponseType<IPage<IComment[]>>>(id,offset,limit,alias).then((data)=>{
      if(data.status===200){
        setComment(data.data.list);
        setCommentCount(data.data.count);
      }
    })
  }
  const inpFocusHandle=()=>{
    setIsFocus(true);
  }
  const inpBlurHandle=()=>{
    //setIsFocus(false);
  }
  const inpChangeHandle=(e:FormEvent<HTMLInputElement>)=>{
    setContent(e.currentTarget.value);
  }
  const cancelHandle=()=>{
    setIsFocus(false);
    setContent("")
  }
  //发表评论
  const publishHandle=()=>{
    publishComment(id,alias,content).then((data)=>{
      console.log(data)
      if(data.status===200){
        setContent("");
        setIsFocus(false);
        getAllCommentHandle(id,0,10,alias);
      }
    })
  }
  const showReply=()=>{
    setIsShowReply(!isShowReply);
  }
  return (
      <CommentWrapper>
        <div className={`publish-outer ${isFocus?'publish-outer-start':''}`}>
          <div className="user-msg">
            <img src={user.avatarUrl}/>
          </div>
          <div className="right-input">
            <div className={`input-container ${isFocus ? 'input-focus':''}`}>
              <input type={'text'} placeholder="添加评论..."
                     value={content}
                     onFocus={e=>inpFocusHandle()}
                     onBlur={e=>inpBlurHandle()}
                     onInput={(e)=>inpChangeHandle(e)} />
            </div>
            {
              isFocus && <div className="btn-controller">
                <button className="cancel" onClick={e=>cancelHandle()}>取消</button>
                <button className="confirm" disabled={content.length===0} onClick={e=>publishHandle()}>评论</button>
              </div>
            }
          </div>
        </div>
        <ul className="comment-list">
          {
            comment && comment.length!==0 && comment.map((item,index)=>{
              return (
                  <li key={item.id}>
                    <div className="comment-content">
                      <div className="left-container">
                        <img src={item.user.avatarUrl}/>
                      </div>
                      <div className="right-container">
                        <div className="user-name-time">
                          <span className="user-name">{item.user.userName}</span>
                          <span className="create-time">{moment(item.createTime).locale('zh-CN').fromNow()}</span>
                        </div>
                        <div className="content">
                          {item.content}
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
                        {
                          (typeof item.reply==="number" && item.reply!==0)&&<div className="reply-count-btn" onClick={e=>showReply()}>
                            {
                              (!isShowReply)&&<CaretDownOutlined />
                            }
                            {
                              isShowReply &&<CaretUpOutlined />
                            }
                            <span className={"count"}>{typeof item.reply==="number"?item.reply:''}</span>
                            <span className={"label"}>条回复</span>
                          </div>
                        }
                        {
                          isShowReply&& <Reply id={item.id}/>
                        }
                      </div>
                    </div>
                  </li>
              )
            })
          }
        </ul>
      </CommentWrapper>
  )
}
export default memo(Comment);