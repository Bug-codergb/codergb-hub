import React, { memo, FC, useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { MusicWrapper } from './style';
import { getUserChannel } from '../../../../network/channel';
import { IResponseType } from '../../../../types/responseType';
import { IChannel } from '../../../../types/channel/IChannel';
import Home from './childCpn/home';
import Community from './childCpn/community';
import Desc from './childCpn/desc';
interface IProps {
  userId: string;
}
const Music: FC<IProps> = (props) => {
  const { userId } = props;
  const [channel, setChannel] = useState<IChannel>();
  useEffect(() => {
    getUserChannel<IResponseType<IChannel>>(userId).then((data) => {
      if (data.status === 200) {
        setChannel(data.data);
      }
    });
  }, [userId]);
  const items = [
    { label: '首页', key: 'item-1', children: <Home userId={userId} /> },
    { label: '社区', key: 'item-2', children: <Community /> },
    { label: '简介', key: 'item-3', children: <Desc /> }
  ];
  return (
    <MusicWrapper>
      <div className="music-header">
        <img src={channel?.picUrl} alt={channel?.name} />
      </div>
      <div className="channel-msg">
        <div className="left-container">
          <div className="left">
            <img src={channel?.user.avatarUrl} />
          </div>
          <div className="right">
            <div className={'name'}>{channel?.name}</div>
            <div className={'sub'}>1.8亿位订阅</div>
          </div>
        </div>
        <div className="right-container">订阅</div>
      </div>
      <Tabs items={items} />
    </MusicWrapper>
  );
};
export default memo(Music);
