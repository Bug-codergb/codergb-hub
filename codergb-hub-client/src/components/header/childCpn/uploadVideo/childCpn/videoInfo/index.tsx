import React,{memo,FC} from "react";
import { Input,Select  } from 'antd';
import {
  VideoInfoWrapper,
  LeftContent,
  RightContent
} from "./style";
const { TextArea } = Input;
const { Option } = Select;
interface IProps{
  videoURL:string,
  videoName:string
}
const VideoInfo:FC<IProps>=(props)=>{
  const { videoURL,videoName } = props;
  return (
      <VideoInfoWrapper>
        <LeftContent>
          <p className="title-tip">详细信息</p>
          <TextArea rows={4} placeholder="请输入标题" maxLength={100} showCount />
          <TextArea rows={4} placeholder="向观众介绍您的视频" maxLength={500} showCount />
          <p className="abbreviation">缩略图</p>
          <p className="desc">请上传一张可展示您视频内容的图片。好的缩略图能脱颖而出，吸引观看者的眼球</p>
          <div className="abbreviation">
            <input type="file"/>
          </div>
          <p className="abbreviation">播放列表</p>
          <p className="desc">
            将您的视频添加到一个或多个播放列表中。播放列表有助于观看者更快地发现您的内容。
          </p>
          <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
          <p className="abbreviation">标签</p>
          <p className="desc">
            标签可以帮助观看者找到您的视频
          </p>
          <p className="abbreviation">类别</p>
          <p className="desc">
            将您的视频添加到某个类别中，方便观看者找到它
          </p>
          <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </LeftContent>
        <RightContent>
          <video controls src={videoURL}></video>
          <div className="video-info">
            <div className="label">文件名</div>
            <div className="value">{videoName}</div>
          </div>
        </RightContent>
      </VideoInfoWrapper>
  )
}
export default memo(VideoInfo)