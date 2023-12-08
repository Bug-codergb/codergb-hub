import React, { memo, FC, ReactElement, useState } from "react";
import { Map } from "immutable";
import { Modal } from "antd";
import VideoIcon from "../../../../../../assets/html/other/video/videoIcon";
import { LayoutWrapper } from "./style";
import VideoSearch from "./childCpn/videoSearch";
import BlockPage from "./childCpn/block";
import { useDispatch, useSelector } from "react-redux";
import { IChannel } from "../../../../../../types/channel/IChannel";
import { updateChannel } from "../../../../../../network/channel";
import { changeChannelAction } from "../../store/actionCreators";
import { Dispatch } from "redux";
import { ILogin } from "../../../../../../types/login/ILogin";
const Layout: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isTrailer, setTrailer] = useState<boolean>(true);
  const [videoInfo, setVideoInfo] = useState<Object>({});
  const login = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(["loginReducer", "login"]) as ILogin;
  });
  const channel = useSelector<Map<string, IChannel>, IChannel>((state) => {
    return state.getIn(["channelReducer", "channel"]) as IChannel;
  });
  const dispatch = useDispatch<Dispatch<any>>();
  console.log(channel);
  //添加预告片
  const addTrailHandle = () => {
    setTrailer(true);
    setIsModalOpen(true);
  };
  //添加推荐视频
  const addRecHandle = () => {
    setTrailer(false);
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    console.log(channel);
    await updateChannel(channel.id, videoInfo);
    if (
      login &&
      login.userMsg &&
      channel &&
      Object.keys(videoInfo).length !== 0
    ) {
      dispatch(changeChannelAction(login.userMsg.userId));
    }
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const changeVideo = async (obj: Object) => {
    console.log(obj);
    setVideoInfo(obj);
  };
  return (
    <LayoutWrapper>
      <div className="label">主推视频</div>
      <div className="tip">在您的频道首页顶部添加一个视频</div>
      <div className="trailer-outer">
        <div
          className={`left-content ${
            channel && channel.trailer ? "trailer-start" : ""
          }`}
        >
          <div className="video-container">
            <VideoIcon />
          </div>
          <div style={{ flex: 1 }}>
            <div className="label">频道预告片-用来吸引尚未订阅的用户</div>
            <div className="tip">向尚未订阅的用户分享您的频道的预览</div>
            {channel && channel.trailer && (
              <div className="trailer">
                <div className="trailer-img-container">
                  <img src={channel.trailer.picUrl} />
                </div>
                <div className="trailer-video-name">{channel.trailer.name}</div>
              </div>
            )}
          </div>
        </div>
        {
          <div className="right-content" onClick={(e) => addTrailHandle()}>
            {!channel || (channel && !channel.trailer) ? "添加" : "更换"}
          </div>
        }
      </div>
      <div className="trailer-outer">
        <div
          className={`left-content ${
            channel && channel.trailer ? "trailer-start" : ""
          }`}
        >
          <div className="video-container">
            <VideoIcon />
          </div>
          <div style={{ flex: 1 }}>
            <div className="label">精选视频 - 用来吸引回访的订阅者</div>
            <div className="tip">重点推荐一个视频，吸引您的订阅者观看。</div>
            {channel && channel.featured && (
              <div className="trailer">
                <div className="trailer-img-container">
                  <img src={channel.featured.picUrl} />
                </div>
                <div className="trailer-video-name">
                  {channel.featured.name}
                </div>
              </div>
            )}
          </div>
        </div>
        {
          <div className="right-content" onClick={(e) => addRecHandle()}>
            {!channel || (channel && !channel.featured) ? "添加" : "更换"}
          </div>
        }
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        cancelText={"取消"}
        destroyOnClose={true}
        okText={"确定"}
        title={"选择视频"}
        width={"65%"}
        onCancel={handleCancel}
      >
        <VideoSearch
          isTrailer={isTrailer}
          updateVideo={(obj) => changeVideo(obj)}
        />
      </Modal>
      <BlockPage />
    </LayoutWrapper>
  );
};
export default memo(Layout);
