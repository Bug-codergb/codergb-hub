import React, {memo, FC, ReactElement, useState, useEffect,useRef} from "react";
import { useLocation } from "react-router-dom";
import {
  VideoDetailWrapper,
  CenterContent,
  LeftContentWrapper,
  RightContentWrapper
} from "./style"
import {getVideoDetail, getVideoURL} from "../../../../network/video";
import {IResponseType} from "../../../../types/responseType";
import Hls from "hls.js";
import {IVideo} from "../../../../types/video/IVideo";
import VideoInfo from "./childCpn/videoInfo";
import Comment from "../../../common/comment";
import {useSelector} from "react-redux";
import {Map} from "immutable";
import {ILogin} from "../../../../types/login/ILogin";
const VideoDetail:FC=():ReactElement=>{
  const location = useLocation();
  const { id } = location.state;
  const [vioURL,setVioURL] = useState<string>("");
  const [vioId,setVioId] = useState<string>(id);
  const [videoDetail,setVideoDetail] = useState<IVideo>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const loginState = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin;
  })

  useEffect(()=>{
    getVideoURL<IResponseType<{vioUrl:string}>>(id).then((data)=>{
      if(data.status===200){
        console.log(data);
        setVioURL(data.data.vioUrl);
      }
    })
    getVideoDetail(vioId).then((data)=>{
      if(data.status===200){
        setVideoDetail(data.data)
      }
    })
  },[vioId])
  useEffect(()=>{
    if(videoRef.current){
      if(Hls.isSupported()){
        let hls = new Hls();
        hls.loadSource(vioURL);
        hls.attachMedia(videoRef.current)
      }else if(videoRef.current.canPlayType("application/vnd.apple.mpegurl")){
        videoRef.current.src=vioURL;
      }
    }
  },[videoRef.current,vioURL])
  return (
      <VideoDetailWrapper>
        <CenterContent>
          <LeftContentWrapper videoRef={videoRef}>
            <div className="video-container">
              {
                vioURL && <video ref={videoRef} controls={true} muted={true}  autoPlay={true}/>
              }
            </div>
            <div className="video-info">
              <VideoInfo videoInfo={videoDetail}/>
            </div>
            <div className="video-comment">
              {
                loginState && loginState.userMsg && videoDetail&&<Comment user={loginState.userMsg} id={videoDetail.id} alias={'vId'}/>
              }
            </div>
          </LeftContentWrapper>
          <RightContentWrapper>

          </RightContentWrapper>
        </CenterContent>
      </VideoDetailWrapper>
  )
}
export default memo(VideoDetail);