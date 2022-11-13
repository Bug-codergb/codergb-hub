import React, {memo, FC, ReactElement, useEffect, useState, FormEvent} from "react";
import moment from "moment";
import {
  LikeOutlined,
  DislikeOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  LikeFilled,
  DislikeFilled
} from '@ant-design/icons'
import {Map} from "immutable"
import {
  CommentWrapper
} from "./style";
import {IUserMsg} from "../../../types/user/IUserMsg";
import {getAllComment, publishComment, replyComment} from "../../../network/comment";
import {IResponseType} from "../../../types/responseType";
import {IPage} from "../../../types/IPage";
import {IComment} from "../../../types/comment/IComment";
import Reply from "./childCpn";
import Publish from "../publish";
import {useThumb, useTread} from "../../../hook/useThumb";

interface IProps{
  user:IUserMsg,
  alias:string,
  id:string,
}
const Comment:FC<IProps>=(props):ReactElement=>{
  const { user,alias,id } = props;

  const [comment,setComment] = useState<IComment[]>([]);
  const [commentCount,setCommentCount]=useState<number>(0);
  const [isShowReply,setIsShowReply] = useState<boolean>(false);
  const [isFocus,setIsFocus] = useState<boolean>(false);
  const [content,setContent] = useState<string>("");
  const [comIndex,setComIndex] = useState<number>(-1);
  const [replyIndex,setReplyIndex] = useState<number>(-1);
  useEffect(()=>{
    getAllCommentHandle(id,0,10,alias);
  },[id]);
  const isThumb = useThumb;
  const isTread =useTread;
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
  //显示回复评论内容
  const showReply=(index:number)=>{
    if(index === comIndex){
      setComIndex(-1);
    }else{
      setComIndex(index);
    }
  }
  //显示回复发布框
  const showReplyHandle=(index:number)=>{
    if(index===replyIndex){
      setReplyIndex(-1)
    }else{
      setReplyIndex(index);
    }
  }
  //回复评论
  const publishReplyHandle = async (content:string,item:IComment)=>{
    console.log(content,item);
    const result = await replyComment(item.id,content);
    if(result.status===200){
      getAllCommentHandle(id,0,10,alias);
    }
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
                            {
                              (!isThumb('comment',item.id))&&<LikeOutlined/>
                            }
                            {
                              isThumb('comment',item.id)&&<LikeFilled/>
                            }
                            <span className="thumb-count">18w</span>
                          </div>
                          <div className="tread">
                            {
                              (!isTread('comment',item.id))&&<DislikeOutlined/>
                            }
                            {
                              (isTread('comment',item.id))&&<DislikeFilled/>
                            }
                          </div>
                          <div className="reply-label" onClick={e=>showReplyHandle(index)}>
                            回复
                          </div>
                        </div>
                        {/* 发表回复 */}
                        {
                          (index === replyIndex) && <div className="publish-comment-reply-container">
                            <Publish isShowAt={false} user={user} publish={(content:string)=>publishReplyHandle(content,item)}/>
                          </div>
                        }
                        {
                          (typeof item.reply==="number" && item.reply!==0)&&<div className="reply-count-btn" onClick={e=>showReply(index)}>
                            {
                              (index!==comIndex)&&<CaretDownOutlined />
                            }
                            {
                              index===comIndex &&<CaretUpOutlined />
                            }
                            <span className={"count"}>{typeof item.reply==="number"?item.reply:''}</span>
                            <span className={"label"}>条回复</span>
                          </div>
                        }
                        {
                          (index===comIndex)&& <Reply id={item.id} user={user}/>
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