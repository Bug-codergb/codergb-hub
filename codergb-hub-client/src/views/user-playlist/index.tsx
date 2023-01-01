import React, {memo, FC, useState, useEffect} from "react";
import {Map} from "immutable";
import {
  UserPlaylistWrapper,
  LeftContent,
  RightContent
} from "./style";
import {IPlaylist} from "../../types/playlist/IPlaylist";
import {IVideo} from "../../types/video/IVideo";
import {getPlaylistDetail, getPlaylistVideo} from "../../network/playlist";
import {IResponseType} from "../../types/responseType";
import {IPage} from "../../types/IPage";
import moment from "moment";
import {useSelector} from "react-redux";

import {ILogin} from "../../types/login/ILogin";
interface IProps{
  id:string
}
const UserPlaylist:FC<IProps>=(props)=>{
  const {id} = props;
  const [playlist,setPlaylist] = useState<IPlaylist>();
  const [video,setVideo] = useState<IVideo[]>([]);
  const [count,setCount] = useState<number>(0);
  const login = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin
  })
  useEffect(()=>{
    getPlaylistDetail<IResponseType<IPlaylist>>(id).then((data)=>{
      setPlaylist(data.data);
    })
  },[id]);
  useEffect(()=>{
    getPlaylistVideo<IResponseType<IPage<IVideo[]>>>(id,0,30).then((data)=>{
      setVideo(data.data.list);
      setCount(data.data.count);
    })
  },[id])
  return (
      <UserPlaylistWrapper>
        {
          playlist && <LeftContent bgc={video && video.length!==0 ? video[0].picUrl : login.userMsg.avatarUrl}>
            <div className="img-container">
              {
                video&&<img src={video && video.length!==0 ? video[0].picUrl : login.userMsg.avatarUrl}/>
              }
            </div>
            <p className="later-label">{playlist.name}</p>
            <p className="user-name">{login.userMsg.userName}</p>
            <div className="vio-info">
              <div className="vio-count">{count}个视频</div>
              <div className="update-time">{moment(playlist.updateTime).format('yyyy-MM-DD HH:MM')}更新</div>
            </div>
            <div className="mask"></div>
          </LeftContent>
        }
        <RightContent>
          <ul className="vio-list">
            {
              video && video.length!==0 && video.map((item)=>{
                return (
                    <li key={item.id}>
                      <div className="cover-container">
                        <img src={item.picUrl}/>
                      </div>
                      <div className="later-right-info">
                        <p className="vio-name text-nowrap-mul-line">{item.name}</p>
                        <div className="desc">
                          <div className="user-name">{item.user.userName}.</div>
                          <div className="play-count">{item.playCount}次观看.</div>
                          <div className="create-time">{moment(item.createTime).fromNow()}加入</div>
                        </div>
                      </div>
                    </li>
                )
              })
            }
          </ul>
        </RightContent>
      </UserPlaylistWrapper>
  )
}
export default memo(UserPlaylist);