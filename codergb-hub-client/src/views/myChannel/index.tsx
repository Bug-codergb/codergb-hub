import React, { memo, type FC } from 'react';
import { type Map } from 'immutable';
import { useLocation } from 'react-router-dom';
import { MyChannelWrapper } from './style';
import { useSelector } from 'react-redux';
import { type IChannel } from '../../types/channel/IChannel';
import { type ILogin } from '../../types/login/ILogin';
import TabContent from './childCpn/TabContent';
import { useLoginMsg } from '../../hook/useLoginMsg';
const MyChannel: FC = () => {
  const location = useLocation();
  const { id } = location.state; // userId
  const channel = useSelector<
    {
      channelReducer: {
        channel: IChannel;
      };
    },
    IChannel
  >((state) => {
    return state.channelReducer.channel;
  });
  const login = useLoginMsg();
  return (
    <MyChannelWrapper>
      <div className="banner">
        <img src={channel.picUrl} />
      </div>
      <div className="user-info">
        <div className="img-container">
          <img src={login.userMsg.avatarUrl} />
        </div>
        <div className="right-info">
          <div className="user-name">{login.userMsg.userName}</div>
        </div>
      </div>
      <TabContent userId={id} channelId={channel.id} />
    </MyChannelWrapper>
  );
};
export default memo(MyChannel);
