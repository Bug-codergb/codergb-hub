import React, { type ReactElement } from 'react';
import HomeIcon from '../assets/html/home/homeIcon';
import HomeShadowIcon from '../assets/html/home/homeShadowIcon';
import ExploreIcon from '../assets/html/explore/exploreIcon';
import ExploreShadowIcon from '../assets/html/explore/exploreShadowIcon';
import ShortsIcon from '../assets/html/short/shortsIcon';
import ShortsShadowIcon from '../assets/html/short/shortsShadowIcon';
import SubscribeIcon from '../assets/html/subscribe/subscribeIcon';
import SubscribeShadowIcon from '../assets/html/subscribe/subscribeShadowIcon';

import LibraryIcon from '../assets/html/library/libraryIcon';
import LibraryShadowIcon from '../assets/html/library/libraryShadowIcon';
import HistoryIcon from '../assets/html/history/historyIcon';
import HistoryShadowIcon from '../assets/html/history/historyShadowIcon';
import LaterIcon from '../assets/html/later/laterIcon';
import LaterShadowIcon from '../assets/html/later/laterShadowIcon';
import ThumbIcon from '../assets/html/thumb/thumbIcon';
import ThumbShadowIcon from '../assets/html/thumb/thumbShadowIcon';
import MineVideoIcon from '../assets/html/mineVideo/mineVideoIcon';
import VideoIcon from '../assets/html/video/videoIcon';
import VideoShadowIcon from '../assets/html/video/videoShadowIcon';
interface MainMenuType {
  name: string;
  path: string;
  icon: ReactElement;
  shadowIcon: ReactElement;
}
const mainMenu: MainMenuType[] = [
  {
    name: '首页',
    path: '/home/recommend',
    icon: <HomeIcon />,
    shadowIcon: <HomeShadowIcon />
  },
  {
    name: '探索',
    path: '/home/explore',
    icon: <ExploreIcon />,
    shadowIcon: <ExploreShadowIcon />
  },
  // {
  //   name: 'shorts',
  //   path: '/home/shorts',
  //   icon: <ShortsIcon />,
  //   shadowIcon: <ShortsShadowIcon />
  // },
  {
    name: '分类',
    path: '/home/cate',
    icon: <VideoIcon />,
    shadowIcon: <VideoShadowIcon />
  },
  {
    name: '订阅内容',
    path: '/home/subscriptions',
    icon: <SubscribeIcon />,
    shadowIcon: <SubscribeShadowIcon />
  }
];
const profileMenu: MainMenuType[] = [
  {
    name: '媒体库',
    path: '/home/library',
    icon: <LibraryIcon />,
    shadowIcon: <LibraryShadowIcon />
  },
  {
    name: '历史记录',
    path: '/home/history',
    icon: <HistoryIcon />,
    shadowIcon: <HistoryShadowIcon />
  },
  {
    name: '您的视频',
    path: '/studio/message',
    icon: <MineVideoIcon />,
    shadowIcon: <MineVideoIcon />
  },
  {
    name: '稍后观看',
    path: '/home/playlist',

    icon: <LaterIcon />,
    shadowIcon: <LaterShadowIcon />
  },
  {
    name: '顶过的视频',
    path: '/home/thumb',

    icon: <ThumbIcon />,
    shadowIcon: <ThumbShadowIcon />
  }
];
const studioMenu = [
  {
    name: '信息中心',
    path: '/studio/message',
    shadowIcon: '',
    icon: ''
  },
  {
    name: '内容',
    shadowIcon: '',
    path: '/studio/content',
    icon: ''
  },
  {
    name: '播放列表',
    path: '/studio/playlist',
    shadowIcon: '',
    icon: ''
  },
  {
    name: '数据分析',
    path: '/studio/dataAnalyze',
    shadowIcon: '',
    icon: ''
  },
  {
    name: '评论',
    path: '/studio/comment',
    shadowIcon: '',
    icon: ''
  },
  // {
  //   name:"字幕",
  //   path:'/studio/subtitle',
  //   shadowIcon:"",
  //   icon:""
  // },
  // {
  //   name:"版权",
  //   path:'/studio/copyright',
  //   shadowIcon:"",
  //   icon:""
  // },
  // {
  //   name:"创收",
  //   path:'/studio/income',
  //   shadowIcon:"",
  //   icon:""
  // },
  {
    name: '自定义',
    path: '/studio/customize',
    shadowIcon: '',
    icon: ''
  },
  // {
  //   name: '音频库',
  //   path: '/studio/audioLib',
  //   shadowIcon: '',
  //   icon: ''
  // },
  {
    name: '设置',
    path: '/studio/setting',
    shadowIcon: '',
    icon: ''
  }
];
const HOME_PATH = '/home';
const USER_PLAYLIST = '/home/playlist';
export { mainMenu, profileMenu, studioMenu, HOME_PATH, USER_PLAYLIST };
export type { MainMenuType };
