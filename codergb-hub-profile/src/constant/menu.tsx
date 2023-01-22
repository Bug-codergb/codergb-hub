import { VIDEO_COLLECTION, VIDEO_DICT, VIDEO_DM, VIDEO_PATH } from '@/router/constant';

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
      }
    ]
  }
];
export { menu };
