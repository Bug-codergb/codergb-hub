import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/login/Login.vue';
import Home from '../views/home/Home.vue';

import VideoPage from '../views/video/VideoPage.vue';
import UserPage from '../views/user/User.vue';
import Playlist from '@/views/playlist/Playlist.vue';

import Dm from '../views/dm/Dm.vue';
import VideoDict from '../views/videoDict/VideoDict.vue';
import VideoCollection from '../views/collection/Collection.vue';

import {
  HOME_PATH,
  LOGIN_PATH,
  USER_PATH,
  VIDEO_COLLECTION,
  VIDEO_DICT,
  VIDEO_DM,
  VIDEO_PATH,
  PLAYLIST_PATH
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
      detailRoutes.collectionRoute
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
