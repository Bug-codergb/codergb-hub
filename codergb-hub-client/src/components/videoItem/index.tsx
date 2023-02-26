import React, {memo, FC, ReactElement, MouseEvent, useState} from "react";
import moment from "moment";
import {
  VideoItemWrapper
} from "./style";
import {
  MoreOutlined
} from '@ant-design/icons'
import {IUserMsg} from "../../types/user/IUserMsg";
import {Dropdown} from "antd";
import Add from "../content/add";
import {getDurationByTimestamp} from "../../utils/time";
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
  isShowImg?:boolean,
  id:string,
  isShowMore?:boolean,
  vioHeight:number,
  isFlex?:boolean,
  dtPos:{left:number,top:number}
}
const VideoItem:FC<IProps>=(props):ReactElement=>{
  const {user,img,vioHeight,dt,playCount,dtPos,isFlex,state,id,isShowMore,createTime,itemWidth,scale,video,isShowVideo,isShowImg} = props;
  const [isShowDrop,setIsShowDrop] = useState<boolean>(false);
  const moreOperatorHandle=(e:MouseEvent<HTMLDivElement>)=>{
    e.stopPropagation();
    setIsShowDrop(true);
  }
  const changeShowDrop=()=>{
    setIsShowDrop(false);
  }
  const openChangeHandle=()=>{
    setIsShowDrop(false);
  }
  return (
      <VideoItemWrapper itemWidth={itemWidth} scale={scale} vioHeight={vioHeight} isFlex={isFlex} dtPos={dtPos}>
        {
          (!isShowVideo) && img
        }
        {
          isShowVideo && <div className="video-container">
            {video}
          </div>
        }
        <div className="dt-pos">
          {getDurationByTimestamp(dt ? dt:"0")}
        </div>
        <div className="msg-info">
          <div className="left-container">
            <img src={user.avatarUrl}/>
          </div>
          <div className="right-container">
            <div className="msg">
              <div className="state">
                <div className="video-name">{state}</div>
                {
                  isShowMore && <div className="more" onClick={(e)=>moreOperatorHandle(e)}>
                    {isShowDrop+''}
                    <Dropdown open={isShowDrop}
                              onOpenChange={()=>openChangeHandle()}
                              overlayClassName={'profile-drop-style'}
                              trigger={['click']}
                              overlay={<Add id={id} changeShow={()=>changeShowDrop()}/>}>
                      <MoreOutlined className="more-icon"/>
                    </Dropdown>
                  </div>
                }
              </div>
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