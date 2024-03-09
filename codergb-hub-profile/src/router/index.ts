import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import NProgress from '@/config/nprogress';
import Login from '../views/login/Login.vue';
import Home from '../views/home/Home.vue';

import VideoPage from '../views/video/VideoPage.vue';
import UserPage from '../views/user/User.vue';
const Playlist = () => import('@/views/playlist/Playlist.vue');
const Comment = () => import('../views/comment/Comment.vue');
const Moment = () => import('../views/moment/Moment.vue');
const Dm = () => import('../views/dm/Dm.vue');
const VideoDict = () => import('../views/videoDict/VideoDict.vue');
const VideoCollection = () => import('../views/collection/Collection.vue');
const VideoSource = () => import('../views/videoSource/VideoSource.vue');

const Channel = () => import('../views/channel/Channel.vue');
import {
  HOME_PATH,
  LOGIN_PATH,
  USER_PATH,
  VIDEO_COLLECTION,
  VIDEO_DICT,
  VIDEO_DM,
  VIDEO_PATH,
  PLAYLIST_PATH,
  VIDEO_SOURCE,
  COMMENT_PATH,
  CHANNEL_PATH,
  MOMENT_PATH,
  SETTING_PATH,
  OVERVIEW_PATH,
  MESSAGE_PATH
} from '@/router/constant';
import * as detailRoutes from './detail/index';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: LOGIN_PATH,
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    component: () => import('../views/register/Register.vue')
  },
  {
    path: HOME_PATH,
    name: 'home',
    component: Home,
    children: [
      {
        path: HOME_PATH,
        redirect: VIDEO_PATH
      },
      {
        path: VIDEO_PATH,
        name: 'video',
        meta: {
          title: '视频'
        },
        component: VideoPage
      },
      {
        path: VIDEO_DM,
        name: 'dm',
        meta: {
          title: '弹幕'
        },
        component: Dm
      },
      {
        path: VIDEO_DICT,
        name: 'videoDict',
        meta: {
          title: '字典'
        },
        component: VideoDict
      },
      {
        path: VIDEO_COLLECTION,
        name: 'videoCollection',
        meta: {
          title: '集合'
        },
        component: VideoCollection
      },
      {
        path: PLAYLIST_PATH,
        name: 'playlist',
        meta: {
          title: '播放列表'
        },
        component: Playlist
      },
      {
        path: USER_PATH,
        name: 'user',
        meta: {
          title: '用户'
        },
        component: UserPage
      },
      {
        path: CHANNEL_PATH,
        name: 'channel',
        meta: {
          title: '频道'
        },
        component: Channel
      },
      {
        path: COMMENT_PATH,
        name: 'comment',
        meta: {
          title: '评论'
        },
        component: Comment
      },
      {
        path: MOMENT_PATH,
        name: 'moment',
        meta: {
          title: '动态'
        },
        component: Moment
      },
      {
        path: VIDEO_SOURCE,
        name: 'videoSource',
        component: VideoSource
      },
      {
        path: SETTING_PATH,
        name: 'setting',
        meta: {
          title: '设置'
        },
        component: () => import('../views/setting/Setting.vue')
      },
      {
        path: OVERVIEW_PATH,
        name: 'overview',
        meta: {
          title: '看板'
        },
        component: () => import('../views/overview/Overview.vue')
      },
      {
        path: MESSAGE_PATH,
        name: 'message',
        meta: {
          title: '消息通知'
        },
        component: () => import('../views/message/Message.vue')
      },
      detailRoutes.collectionRoute,
      detailRoutes.cateVideoRoute,
      detailRoutes.playlistRoute,
      detailRoutes.tagRoute,
      detailRoutes.videoRoute,
      detailRoutes.momentRoute,
      detailRoutes.userRoute,
      detailRoutes.channelRoute
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
