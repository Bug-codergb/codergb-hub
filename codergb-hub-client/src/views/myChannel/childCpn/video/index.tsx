import React, {memo, FC, ReactElement, useState, useEffect, useRef} from "react";
import {
  VideoWrapper
} from "./style";
import {IVideo} from "../../../../types/video/IVideo";
import {getUserVideo, getVideoURL} from "../../../../network/video";
import {IResponseType} from "../../../../types/responseType";
import {IPage} from "../../../../types/IPage";
import VideoItem from "../../../../components/videoItem";
import {useNavigate} from "react-router-dom";
import Hls from "hls.js";
import HolderCpn from "../../../../components/holder";
interface IProps{
  userId:string
}
const Video:FC<IProps>=(props)=>{
  const [count,setCount] = useState<number>(0);
  const [video,setVideo] = useState<IVideo[]>([]);
  const [videoURL,setVideoURL]=useState<string>("");
  const [currentIndex,setCurrentIndex]=useState<number>(-1);
  const vioRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const { userId } = props;
  useEffect(()=>{
    getUserVideo<IResponseType<IPage<IVideo[]>>>(userId,'',0,10).then((data)=>{
      if(data.status===200){
        setCount(data.data.count);
        setVideo(data.data.list);
      }
    })
  },[userId]);
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
      <VideoWrapper>
        <ul className="user-video-list">
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
                               isShowMore={false}
                               isShowVideo={currentIndex===index}
                               state={item.name}
                               id={item.id}
                               vioHeight={200}
                               user={item.user}
                               createTime={item.createTime}
                               dt={item.dt}
                               playCount={item.playCount}
                               itemWidth={380}
                               scale={0.92}/>
                  </li>
              )
            })
          }
          {
            HolderCpn(video.length, 4, 380)
          }
        </ul>
      </VideoWrapper>
  )
}
export default memo(Video);