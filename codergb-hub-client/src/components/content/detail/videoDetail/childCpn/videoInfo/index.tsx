import React, {memo, FC, ReactElement, MouseEvent} from "react";
import { useNavigate } from 'react-router-dom';
import {Map} from "immutable";
import {useDispatch, useSelector} from "react-redux";
import {
  LikeOutlined,
  FileAddOutlined,
  DislikeOutlined,
 DislikeFilled,
  LikeFilled
} from '@ant-design/icons'
import {
  VideoInfoWrapper
} from "./style";
import {IVideo} from "../../../../../../types/video/IVideo";
import {ILogin} from "../../../../../../types/login/ILogin";
import {cancelSub, sub} from "../../../../../../network/subscriber";
import {cancelThumb, cancelTread, thumb, tread} from "../../../../../../network/thumb";
import {useSub} from "../../../../../../hook/useSub";
import {changeUserDetailAction} from "../../../../../../views/login/store/actionCreators";
import {Dispatch} from "redux";
import {useThumb, useTread} from "../../../../../../hook/useThumb";
import {IUserMsg} from "../../../../../../types/user/IUserMsg";

interface IProps{
  videoInfo?:IVideo
}
const VideoInfo:FC<IProps>=(props)=>{
  const { videoInfo } = props;
  const loginState = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin;
  })
  const isSub = useSub(videoInfo?.user.userId);
  const isThumb = useThumb('video',videoInfo?.id);
  const isTread = useTread('video',videoInfo?.id);
  const dispatch = useDispatch<Dispatch<any>>();
  const subHandle=async ()=>{
    if(videoInfo && videoInfo.user && (!isSub)){
      const result = await sub(videoInfo?.user.userId);
      if(result.status===200){
        console.log(result.data)
      }
    }else if(videoInfo && videoInfo.user && isSub){
      const result = await cancelSub(videoInfo.user.userId);
      if(result.status===200){
        console.log(result.data)
      }
    }
    if(videoInfo && videoInfo.user && loginState && loginState.userMsg){
      dispatch(changeUserDetailAction(loginState.userMsg.userId));
    }
  }
  const thumbHandle=async ()=>{
    if(videoInfo){
      console.log(isThumb)
      if(isThumb){
        const result = await cancelThumb(videoInfo.id,"vId");
        if(result.status===200){
          console.log(result.data)
        }
      }else{
        const result = await thumb(videoInfo.id,"vId");
        if(result.status===200){
          console.log(result.data)
        }
      }
      if(videoInfo && videoInfo.user && loginState && loginState.userMsg){
        dispatch(changeUserDetailAction(loginState.userMsg.userId));
      }
    }
  }
  const treadHandle=async ()=>{
    if(videoInfo){
      if(!isTread){
        const result = await tread(videoInfo.id,"vId");
        if(result.status===200){
          console.log(result.data)
        }
      }else{
        const result = await cancelTread(videoInfo.id,'vId');
        if(result.status===200){
          console.log(result.data)
        }
      }
      if(videoInfo && videoInfo.user && loginState && loginState.userMsg){
        dispatch(changeUserDetailAction(loginState.userMsg.userId));
      }
    }
  }
  const navigate = useNavigate();
  const userRouter=(user:IUserMsg)=>{
    if(user){
      navigate("/home/userDetail",{
        state:{
          userId:user.userId
        },
        replace:false
      })
    }
  }
  return (
      <VideoInfoWrapper>
        <p className="video-title text-nowrap-mul-line">{videoInfo?.name}</p>
        <div className="info">
          <div className="left-content">
            <div className="user-msg-container">
              {
                videoInfo&& <div className="img-container" onClick={e=>userRouter(videoInfo?.user)}>
                  <img src={videoInfo?.user.avatarUrl}/>
                </div>
              }
              <div className="right-msg">
                <p className="user-name">{videoInfo?.user.userName}</p>
                <p className="sub-counter">270万位订阅者</p>
              </div>
            </div>
            <div className="sub-btn" onClick={e=>subHandle()}>
              {
                isSub?'已订阅':'订阅'
              }
            </div>
          </div>
          <div className="right-content">
            <div className="thumb">
              <div className="thumb-inner">
                {
                  videoInfo && (!isThumb) && <LikeOutlined className={`thumb-icon`}
                                onClick={e=>thumbHandle()}/>
                }
                {
                  videoInfo && (isThumb) && <LikeFilled  className={`thumb-icon`}
                                                                                onClick={e=>thumbHandle()}/>
                }
                <span className="label">14万</span>
              </div>
              <div className="tread">
                {
                  videoInfo && (!isTread) &&<DislikeOutlined className="tread-icon" onClick={e=>treadHandle()}/>
                }
                {
                  videoInfo && (isTread) &&<DislikeFilled className="tread-icon" onClick={e=>treadHandle()}/>
                }
              </div>
            </div>
            <div className="collection">
              <FileAddOutlined className={"collection-icon"}/>
              <span className="label">保存</span>
            </div>
          </div>
        </div>
        <div className="desc">{videoInfo?.description}</div>
      </VideoInfoWrapper>
  )
}
export default memo(VideoInfo)