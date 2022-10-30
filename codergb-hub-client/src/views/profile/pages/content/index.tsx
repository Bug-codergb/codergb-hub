import React,{memo,FC,ReactElement} from "react";
import {
  ContentWrapper
} from "./style"
import {Tabs} from "antd";
import VideoPage from "./childCpn/video";
import LiveStream from "./childCpn/liveStream";
const Content:FC=()=>{
  const onChange=()=>{

  }
  return (
      <ContentWrapper>
        <div className="title-label">频道内容</div>
        <Tabs
            defaultActiveKey="1"
            onChange={onChange}
            items={[
              {
                label: `视频`,
                key: '1',
                children: <VideoPage/>,
              },
              {
                label: `直播`,
                key: '2',
                children: <LiveStream/>,
              },
            ]}
        />
      </ContentWrapper>
  )
}
export default memo(Content);