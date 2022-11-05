import React,{memo,FC,ReactElement} from "react";
import {
  LikeOutlined,
  FileAddOutlined,
  DislikeOutlined
} from '@ant-design/icons'
import {
  VideoInfoWrapper
} from "./style";
import {IVideo} from "../../../../../../types/video/IVideo";
interface IProps{
  videoInfo?:IVideo
}
const VideoInfo:FC<IProps>=(props)=>{
  const { videoInfo } = props;
  return (
      <VideoInfoWrapper>
        <p className="video-title">{videoInfo?.name}</p>
        <div className="info">
          <div className="left-content">
            <div className="user-msg-container">
              <div className="img-container">
                <img src={videoInfo?.user.avatarUrl}/>
              </div>
              <div className="right-msg">
                <p className="user-name">{videoInfo?.user.userName}</p>
                <p className="sub-counter">270万位订阅者</p>
              </div>
            </div>
            <div className="sub-btn">订阅</div>
          </div>
          <div className="right-content">
            <div className="thumb">
              <div className="thumb-inner">
                <LikeOutlined className="thumb-icon" />
                <span className="label">14万</span>
              </div>
              <div className="tread">
                <DislikeOutlined className="tread-icon" />
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