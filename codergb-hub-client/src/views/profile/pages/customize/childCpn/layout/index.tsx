import React, {memo, FC, ReactElement, useState} from "react";
import { Modal } from 'antd';
import VideoIcon from "../../../../../../assets/html/other/video/videoIcon";
import {
  LayoutWrapper
} from "./style"
import VideoSearch from "./childCpn/videoSearch";
import BlockPage from "./childCpn/block";
const Layout:FC=()=>{
  const [isModalOpen,setIsModalOpen] = useState<boolean>(false);
  const [isTrailer,setTrailer] = useState<boolean>(true);
  //添加预告片
  const addTrailHandle=()=>{
    setTrailer(true);
    setIsModalOpen(true);
  }
  //添加推荐视频
  const addRecHandle=()=>{
    setTrailer(false);
    setIsModalOpen(true);
  }
  const handleOk=()=>{
    setIsModalOpen(false);
  }
  const handleCancel=()=>{
    setIsModalOpen(false);
  }
  return (
      <LayoutWrapper>
        <div className="label">主推视频</div>
        <div className="tip">在您的频道首页顶部添加一个视频</div>
        <div className="trailer-outer">
          <div className="left-content">
            <div className="video-container">
              <VideoIcon/>
            </div>
            <div>
              <div className="label">频道预告片-用来吸引尚未订阅的用户</div>
              <div className="tip">向尚未订阅的用户分享您的频道的预览</div>
            </div>
          </div>
          <div className="right-content" onClick={e=>addTrailHandle()}>
            添加
          </div>
        </div>
        <div className="trailer-outer">
          <div className="left-content">
            <div className="video-container">
              <VideoIcon/>
            </div>
            <div>
              <div className="label">精选视频 - 用来吸引回访的订阅者</div>
              <div className="tip">重点推荐一个视频，吸引您的订阅者观看。</div>
            </div>
          </div>
          <div className="right-content" onClick={e=>addRecHandle()}>
            添加
          </div>
        </div>
        <Modal open={isModalOpen}
               onOk={handleOk}
               cancelText={'取消'}
               destroyOnClose={true}
               okText={'确定'}
               title={'选择视频'}
               width={'65%'}
               onCancel={handleCancel}>
          <VideoSearch isTrailer={isTrailer}/>
        </Modal>
        <BlockPage/>
      </LayoutWrapper>
  )
}
export default memo(Layout);