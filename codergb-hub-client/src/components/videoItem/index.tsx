import React,{memo,FC,ReactElement} from "react";
import moment from "moment";
import {
  VideoItemWrapper
} from "./style";
import {IUserMsg} from "../../types/user/IUserMsg";
interface IProps{
  user:IUserMsg,
  img:ReactElement,
  dt:string,
  playCount:string,
  state:string,
  createTime:string,
  itemWidth:number,
  scale:number,
  video?:ReactElement,
  isShowVideo?:boolean,
  isShowImg?:boolean
}
const VideoItem:FC<IProps>=(props):ReactElement=>{
  const {user,img,dt,playCount,state,createTime,itemWidth,scale,video,isShowVideo,isShowImg} = props;
  return (
      <VideoItemWrapper itemWidth={itemWidth} scale={scale}>
        {
          (!isShowVideo) && img
        }
        {
          isShowVideo && <div className="video-container">
            {video}
          </div>
        }
        <div className="msg-info">
          <div className="left-container">
            <img src={user.avatarUrl}/>
          </div>
          <div className="right-container">
            <div className="msg">
              <div className="state">{state}</div>
              <div className="user-name">{user.userName}</div>
              <div className="play-count">
                <span>{playCount}次观看</span>
                <span>{moment(new Date(createTime).getTime()).locale('zh-CN').fromNow()}</span>
              </div>
            </div>
            <div className="more">

            </div>
          </div>
        </div>
      </VideoItemWrapper>
  )
}
export default memo(VideoItem);