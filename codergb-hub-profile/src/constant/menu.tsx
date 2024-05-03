import {
  CHANNEL_PATH,
  COMMENT_PATH,
  PLAYLIST_PATH,
  USER_PATH,
  VIDEO_COLLECTION,
  VIDEO_DICT,
  VIDEO_DM,
  VIDEO_PATH,
  VIDEO_SOURCE,
  MOMENT_PATH,
  SETTING_PATH,
  OVERVIEW_PATH,
  MESSAGE_PATH
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
    index: '4',
    name: '评论管理',
    icon: 'chatLineSquare',
    children: [
      {
        index: '4-1',
        name: '用户评论',
        path: COMMENT_PATH
      }
    ]
  },
  {
    index: '5',
    name: '动态管理',
    icon: 'Postcard',
    children: [
      {
        index: '5-1',
        name: '动态信息',
        path: MOMENT_PATH
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
      },
      {
        index: '2-2',
        name: '频道',
        path: CHANNEL_PATH
      }
    ]
  },
  {
    index: '8',
    name: '消息通知',
    icon: 'Message',
    children: [
      {
        index: '8-1',
        name: '消息通知',
        path: MESSAGE_PATH
      }
    ]
  },
  {
    index: '7',
    name: '系统看板',
    icon: 'DataAnalysis',
    children: [
      {
        index: '7-1',
        name: '看板',
        path: OVERVIEW_PATH
      }
    ]
  },
  {
    index: '6',
    name: '系统设置',
    icon: 'Setting',
    children: [
      {
        index: '6-1',
        name: '设置',
        path: SETTING_PATH
      },
      {
        index: '6-2',
        name: '角色管理',
        path: '/role'
      }
    ]
  }
];
export { menu };
