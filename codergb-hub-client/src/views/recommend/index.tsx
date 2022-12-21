import React, {memo, FC, ReactElement, useEffect, useState, useRef, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import {
  RecommendWrapper
} from "./style"
import {IVideo} from "../../types/video/IVideo";
import {getAllVideo, getVideoURL} from "../../network/video";
import {IResponseType} from "../../types/responseType";
import {IPage} from "../../types/IPage";
import VideoItem from "../../components/videoItem";
import HolderCpn from "../../components/holder";
import Hls from "hls.js";
import {debounce} from "../../utils/debounce";
const Recommend:FC=():ReactElement=>{
  const [video,setVideo] = useState<IVideo[]>([]);
  const [videoURL,setVideoURL]=useState<string>("");
  const [currentIndex,setCurrentIndex]=useState<number>(-1);
  const navigate = useNavigate();
  const vioRef = useRef<HTMLVideoElement>(null);
  useEffect(()=>{
    getAllVideo<IResponseType<IPage<IVideo[]>>>(0,50).then(data=>{
      if(data.status===200){
        setVideo(data.data.list);
      }
    });
  },[]);
  useEffect(()=>{
    if(vioRef.current){
      if(Hls.isSupported()){
        let hls = new Hls();
        hls.loadSource(videoURL);
        hls.attachMedia(vioRef.current)
      }else if(vioRef.current.canPlayType("application/vnd.apple.mpegurl")){
        vioRef.current.src=videoURL;
      }
    }
  },[vioRef.current])
  const videoRouterHandle=(item:IVideo)=>{
    navigate("/videoDetail",{
      replace:true,
      state:{
        id:item.id
      }
    })
  }
  const mouseImgHandle= async (item:IVideo,index:number)=>{
      setCurrentIndex(index);
      const res = await getVideoURL(item.id);
      if(res.status===200){
        setVideoURL(res.data.vioUrl);
      }
  };
  const mouseLeaveHandle=()=>{
    setCurrentIndex(-1)
  }
  return (
    <RecommendWrapper>
      <ul className="video-list">
        {
          video && video.length!==0 && video.map((item,index)=>{
            return (
                <li key={item.id} onClick={e=>videoRouterHandle(item)} className={currentIndex===index?'active':''}>
                  <VideoItem img={<img src={item.picUrl}
                                       onMouseLeave={e=>mouseLeaveHandle()}
                                       onMouseEnter={e=>mouseImgHandle(item,index)}/>}
                             video={
                               <video src={videoURL}
                                      ref={vioRef}
                                      autoPlay={true}
                                      onMouseLeave={e=>mouseLeaveHandle()}
                                      muted={true}/>
                             }
                             isShowVideo={currentIndex===index}
                             state={item.name}
                             vioHeight={200}
                             id={item.id}
                             user={item.user}
                             createTime={item.createTime}
                             dt={item.dt}
                             playCount={item.playCount}
                             itemWidth={380}
                             isShowMore={true}
                              scale={0.92}/>
                </li>
            )
          })
        }
        {
          HolderCpn(video.length, 4, 380)
        }
      </ul>
    </RecommendWrapper>
  )
}
export default memo(Recommend)