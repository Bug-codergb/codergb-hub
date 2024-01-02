import React, { memo, FC, ReactElement } from 'react';
import { LiveStreamWrapper } from './style';
const LiveStream: FC = () => {
  return <LiveStreamWrapper>直播</LiveStreamWrapper>;
};
export default memo(LiveStream);
