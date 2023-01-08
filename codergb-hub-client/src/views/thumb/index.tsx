import React, {memo, FC, ReactElement, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Map } from "immutable";
import {
  ThumbWrapper
} from "./style"
import {IThumb} from "../../types/thumb/IThumb";
import {getThumbUserVideo} from "../../network/video";
import {useSelector} from "react-redux";
import {ILogin} from "../../types/login/ILogin";
import {IResponseType} from "../../types/responseType";
import {IPage} from "../../types/IPage";
import {LeftContent, RightContent} from "../user-playlist/style";
import moment from "moment";
import {IVideo} from "../../types/video/IVideo";
const Thumb:FC=()=>{
  const [count,setCount] = useState<number>(0);
  const [videoThumb,setVideoThumb] = useState<IThumb[]>([]);
  const login = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin
  })
  const navigate = useNavigate();
  useEffect(()=>{
    getThumbUserVideo<IResponseType<IPage<IThumb[]>>>(login.userMsg.userId,0,10).then(data=>{
      if(data.status === 200){
        setCount(data.data.count);
        setVideoThumb(data.data.list);
      }
    })
  },[])

  const videoRouterHandle=(item:IVideo)=>{
    navigate("/videoDetail",{
      replace:true,
      state:{
        id:item.id
      }
    })
  }
  return (
    <ThumbWrapper>
      {
        videoThumb && <LeftContent bgc={videoThumb && videoThumb.length!==0 && videoThumb[0].video ? videoThumb[0].video.picUrl : login.userMsg.avatarUrl}>
          <div className="img-container">
            {
              videoThumb&&<img src={videoThumb && videoThumb.length!==0 ? videoThumb[0].video.picUrl : login.userMsg.avatarUrl}/>
            }
          </div>
          <p className="later-label">顶过的视频</p>
          <p className="user-name">{login.userMsg.userName}</p>
          <div className="vio-info">
            <div className="vio-count">{count}个视频</div>
            <div className="update-time">{
              videoThumb && videoThumb[0] ?
                  moment(videoThumb && videoThumb[0] ? videoThumb[0].updateTime :'').format('yyyy-MM-DD HH:MM'):
                  '暂无'
            }更新</div>
          </div>
          <div className="mask"></div>
        </LeftContent>
      }
      <RightContent>
        <ul className="vio-list">
          {
            videoThumb && videoThumb.length!==0 && videoThumb.map((item)=>{
              return (
                  <li key={item.id}>
                    <div className="cover-container" onClick={e=>videoRouterHandle(item.video)}>
                      <img src={item.video.picUrl}/>
                    </div>
                    <div className="later-right-info">
                      <p className="vio-name text-nowrap-mul-line" onClick={e=>videoRouterHandle(item.video)}>{item.video.name}</p>
                      <div className="desc">
                        <div className="user-name">{item.user.userName}.</div>
                        <div className="play-count">{item.video.playCount}次观看.</div>
                        <div className="create-time">{moment(item.createTime).fromNow()}加入</div>
                      </div>
                    </div>
                  </li>
              )
            })
          }
        </ul>
      </RightContent>
    </ThumbWrapper>
  )
}
export default memo(Thumb)