import React from 'react';
import Home from '../childCpn/home';
import Community from '../childCpn/community';
import Desc from '../childCpn/desc';
import { type IChannel } from '../../../../../types/channel/IChannel';

const tabs = (userId: string, channel?: IChannel) => {
  return [
    {
      label: '首页',
      key: '1001',
      children: <Home userId={userId} channel={channel} />
    },
    {
      label: '社区',
      key: '1006',
      children: <Community userId={userId} channel={channel} />
    },
    {
      label: '简介',
      key: '1008',
      children: <Desc userId={userId} />
    }
  ];
};
export { tabs };
