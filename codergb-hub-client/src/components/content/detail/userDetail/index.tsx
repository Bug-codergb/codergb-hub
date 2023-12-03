import React, { memo, FC, ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Tabs, notification } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { UserDetailWrapper } from "./style";
import { IChannel } from "../../../../types/channel/IChannel";
import { getUserChannel } from "../../../../network/channel";
import { sub, cancelSub } from "../../../../network/subscriber";
import { IResponseType } from "../../../../types/responseType";

import { tabs } from "./config";
import { getUserBlock } from "../../../../network/block";
import { IBlock } from "../../../../types/block/IBlock";
import {
  CREATED_PLAYLIST,
  SUB_CHANNEL,
  UPLOADED_VIDEO,
} from "../../../../constant/block";
import UploadedVideo from "./childCpn/uploadedVideo";
import { useLoginMsg } from "../../../../hook/useLoginMsg";
import CreatePlaylist from "./childCpn/playlist";
import Subscriber from "./childCpn/subscriber";
import { useSub } from "../../../../hook/useSub";
import { Dispatch } from "redux";
import { changeUserDetailAction } from "../../../../views/login/store/actionCreators";

const UserDetail: FC = (): ReactElement => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = location.state;
  const dispatch = useDispatch<Dispatch<any>>();

  const isSub = useSub(userId);

  const [keyIndex, setKeyIndex] = useState<number>(0);
  const [userChannel, setUserChannel] = useState<IChannel>();
  const [block, setBlock] = useState<IBlock[]>([]);
  const [userTabs, setUserTabs] = useState<any[]>([]);

  const loginMsg = useLoginMsg();
  useEffect(() => {
    getUserChannel<IResponseType<IChannel>>(userId).then((data) => {
      if (data.status === 200) {
        setUserChannel(data.data);
        setUserTabs(tabs(userId, data.data));
        setKeyIndex(1);
      }
    });
  }, [userId]);
  useEffect(() => {
    if (keyIndex !== 0) {
      getUserBlock<IResponseType<IBlock[]>>(userId).then((data) => {
        if (data.status === 200) {
          setBlock(data.data);
          if (data.data.length !== 0) {
            let tabList = [...userTabs];
            for (let item of data.data) {
              if (item.name === UPLOADED_VIDEO) {
                tabList.push({
                  key: item.id,
                  label: item.name,
                  children: <UploadedVideo userId={userId} />,
                });
              }
              if (item.name === CREATED_PLAYLIST) {
                tabList.push({
                  key: item.id,
                  label: item.name,
                  children: <CreatePlaylist userId={userId} />,
                });
              }
              if (item.name === SUB_CHANNEL) {
                tabList.push({
                  key: item.id,
                  label: item.name,
                  children: <Subscriber userId={userId} />,
                });
              }
            }
            setUserTabs(tabList);
          }
        }
      });
    }
  }, [keyIndex]);
  const chatRouter = () => {
    if (userId && userChannel && userChannel.user) {
      navigate("/chatDetail", {
        state: {
          userId: userId,
          userName: userChannel!.user.userName,
        },
      });
    }
  };
  const subHandler = async () => {
    if (!isSub) {
      const result = await sub(userId);
      if (result.status === 200) {
        notification.info({
          message: `订阅成功`,
          description: `在“订阅内容中”查看您添加的视频`,
          placement: "bottomLeft",
        });
      }
    } else {
      const result = await cancelSub(userId);
      if (result.status === 200) {
      }
    }
    if (loginMsg && loginMsg.userMsg) {
      dispatch(changeUserDetailAction(loginMsg.userMsg.userId));
    }
  };
  return (
    <UserDetailWrapper>
      <div className={"banner"}>
        <img src={userChannel?.picUrl} />
      </div>
      <div className="user-info">
        <div className="left">
          <div className="img-container">
            <img src={userChannel?.user?.avatarUrl} />
          </div>
          <div className="right-info">
            <div className="user-name">{userChannel?.user?.userName}</div>
          </div>
        </div>
        <div className="control-btn">
          {loginMsg.userMsg.userId !== userId && (
            <div className="sub-btn" onClick={() => subHandler()}>
              {isSub ? "已订阅" : "订阅"}
            </div>
          )}
          {loginMsg.userMsg.userId !== userId && (
            <div className="sub-btn message" onClick={(e) => chatRouter()}>
              私信
            </div>
          )}
        </div>
      </div>
      {userTabs && userTabs.length !== 0 && (
        <Tabs defaultActiveKey="1" items={userTabs} />
      )}
    </UserDetailWrapper>
  );
};
export default memo(UserDetail);
