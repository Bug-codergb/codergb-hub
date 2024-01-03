import React, { memo, type FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { type Map } from 'immutable';
import { HomeWrapper } from './style';
import { type IChannel } from '../../../../types/channel/IChannel';
interface IProps {
  userId: string;
}
const Home: FC<IProps> = (props) => {
  const channel = useSelector<Map<string, IChannel>, IChannel>((state) => {
    return state.getIn(['channelReducer', 'channel']) as IChannel;
  });
  return (
    <HomeWrapper>
      <div className="trailer">
        <div className="left-container">
          {channel?.trailer && <img src={channel.trailer?.picUrl} alt={channel.trailer.name} />}
        </div>
        <div className="right-container">
          <p className="video-name">{channel.trailer?.name}</p>
          <p className="play-count-time">
            <p className="count">{channel.trailer?.playCount}次观看</p>
            <p>{moment(channel.trailer?.createTime).fromNow()}</p>
          </p>
          <p className="desc">{channel.trailer?.description}</p>
        </div>
      </div>
    </HomeWrapper>
  );
};
export default memo(Home);
