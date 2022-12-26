import React, {memo, FC, ReactElement, useEffect, useState} from "react";
import {
 SearchOutlined
} from '@ant-design/icons';
import { Map } from "immutable";
import {
  HistoryWrapper,
  LeftContentWrapper,
  RightContentWrapper
} from "./style";
import {useSelector} from "react-redux";
import {ILogin} from "../../types/login/ILogin";
import {getUserHistory} from "../../network/history";
import {IResponseType} from "../../types/responseType";
import {IPage} from "../../types/IPage";
import {IVideo} from "../../types/video/IVideo";
import VideoItem from "../../components/videoItem";
const History:FC=()=>{
  const [video,setVideo] = useState<IVideo[]>([]);
  const [count,setCount] = useState<number>(0);
  const login = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin
  });
  useEffect(()=>{
    getUserHistory<IResponseType<IPage<IVideo[]>>>(login.userMsg.userId,0,10,"").then((data)=>{
      if(data.status===200){
        setVideo(data.data.list);
        setCount(data.data.count);
      }
    })
  },[login.userMsg.userId]);
  return (
    <HistoryWrapper>
      <LeftContentWrapper>
        <p className="label-title">观看记录</p>
       <ul className='vio-list'>
         {
           video && video.length!==0 && video.map((item,index)=>{
             return (
                 <li key={item.id}>
                   <p className="time">星期三</p>
                   <VideoItem img={<img src={item.picUrl}/>}
                               isShowVideo={false}
                              state={item.name}
                              id={item.id}
                              vioHeight={152.5}
                              user={item.user}
                              createTime={item.createTime}
                              dt={item.dt}
                              playCount={item.playCount}
                              itemWidth={330}
                              isShowMore={false}
                              isFlex={true}
                              scale={0.55}/>
                 </li>
             )
           })
         }
       </ul> 
      </LeftContentWrapper>
      <RightContentWrapper>
        <div className="search-outer">
          <SearchOutlined />
          <input type={'input'} placeholder="搜索观看记录"/>
        </div>
      </RightContentWrapper>
    </HistoryWrapper>
  )
}
export default memo(History)