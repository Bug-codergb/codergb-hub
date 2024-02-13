import React from 'react';
import Channel from '../assets/html/profile/channel/channel';
import Studio from '../assets/html/profile/studio/studio';
import Change from '../assets/html/profile/change';
import Exit from '../assets/html/profile/exit/exit';

const profileMenu = [
  {
    name: '您的频道',
    icon: <Channel />,
    path: '/home/myChannel'
  },
  {
    name: 'codergb-hub工作室',
    icon: <Studio />,
    path: '/studio'
  },
  // {
  //   name: '切换账号',
  //   icon: <Change />,
  //   path: '/studio'
  // },
  {
    name: '退出账号',
    icon: <Exit />,
    path: '/login'
  }
];
export { profileMenu };
