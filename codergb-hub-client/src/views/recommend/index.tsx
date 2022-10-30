import React, {memo, FC, ReactElement, useEffect, useState} from "react";
import {
  RecommendWrapper
} from "./style"
import {IVideo} from "../../types/video/IVideo";
import {getAllVideo} from "../../network/video";
import {IResponseType} from "../../types/responseType";
import {IPage} from "../../types/IPage";
import VideoItem from "../../components/videoItem";
import HolderCpn from "../../components/holder";

const Recommend:FC=()=>{
  const [video,setVideo] = useState<IVideo[]>([]);
  useEffect(()=>{
    getAllVideo<IResponseType<IPage<IVideo[]>>>(0,50).then(data=>{
      if(data.status===200){
        setVideo(data.data.list);
      }
    });
  },[])
  return (
    <RecommendWrapper>
      <ul className="video-list">
        {
          video && video.length!==0 && video.map((item,index)=>{
            return (
                <li key={item.id}>
                  <VideoItem img={<img src={item.picUrl}/>}
                             state={item.name}
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
    </RecommendWrapper>
  )
}
export default memo(Recommend)