import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/login/Login.vue';
import Home from '../views/home/Home.vue';

import VideoPage from '../views/video/VideoPage.vue';
import UserPage from '../views/user/User.vue';
import Playlist from '@/views/playlist/Playlist.vue';
const Comment = import('../views/comment/Comment.vue');

import Dm from '../views/dm/Dm.vue';
import VideoDict from '../views/videoDict/VideoDict.vue';
import VideoCollection from '../views/collection/Collection.vue';
const VideoSource = import('../views/videoSource/VideoSource.vue');

const Channel = import('../views/channel/Channel.vue');
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
  CHANNEL_PATH
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
        component: VideoPage
      },
      {
        path: VIDEO_DM,
        name: 'dm',
        component: Dm
      },
      {
        path: VIDEO_DICT,
        name: 'videoDict',
        component: VideoDict
      },
      {
        path: VIDEO_COLLECTION,
        name: 'videoCollection',
        component: VideoCollection
      },
      {
        path: PLAYLIST_PATH,
        name: 'playlist',
        component: Playlist
      },
      {
        path: USER_PATH,
        name: 'user',
        component: UserPage
      },
      {
        path: CHANNEL_PATH,
        name: 'channel',
        component: Channel
      },
      {
        path: COMMENT_PATH,
        name: 'comment',
        component: Comment
      },
      {
        path: VIDEO_SOURCE,
        name: 'videoSource',
        component: VideoSource
      },
      detailRoutes.collectionRoute,
      detailRoutes.cateVideoRoute
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
