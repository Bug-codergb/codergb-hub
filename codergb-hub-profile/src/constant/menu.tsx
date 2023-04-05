import {
  PLAYLIST_PATH,
  USER_PATH,
  VIDEO_COLLECTION,
  VIDEO_DICT,
  VIDEO_DM,
  VIDEO_PATH,
  VIDEO_SOURCE
} from '@/router/constant';

const menu = [
  {
    index: '1',
    name: '视频管理',
    icon: 'monitor',
    children: [
      {
        index: '1-1',
        name: '视频',
        path: VIDEO_PATH
      },
      {
        index: '1-2',
        name: '弹幕',
        path: VIDEO_DM
      },
      {
        index: '1-3',
        name: '集合',
        path: VIDEO_COLLECTION
      },
      {
        index: '1-4',
        name: '字典',
        path: VIDEO_DICT
      },
      {
        index: '1-5',
        name: '源文件',
        path: VIDEO_SOURCE
      }
    ]
  },
  {
    index: '3',
    name: '播放列表',
    icon: 'memo',
    children: [
      {
        index: '3-1',
        name: '播放列表',
        path: PLAYLIST_PATH
      }
    ]
  },
  {
    index: '2',
    name: '用户管理',
    icon: 'user',
    children: [
      {
        index: '2-1',
        name: '用户',
        path: USER_PATH
      }
    ]
  }
];
export { menu };
