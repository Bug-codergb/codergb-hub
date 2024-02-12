import React, { memo, type FC } from 'react';
import { type Map } from 'immutable';
import { useLocation } from 'react-router-dom';
import { MyChannelWrapper } from './style';
import { useSelector } from 'react-redux';
import { type IChannel } from '../../types/channel/IChannel';
import { type ILogin } from '../../types/login/ILogin';
import TabContent from './childCpn/TabContent';
const MyChannel: FC = () => {
  const location = useLocation();
  const { id } = location.state; // userId
  const channel = useSelector<Map<string, IChannel>, IChannel>((state) => {
    return state.getIn(['channelReducer', 'channel']) as IChannel;
  });
  const login = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(['loginReducer', 'login']) as ILogin;
  });
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
