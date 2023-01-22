import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/login/Login.vue';
import Home from '../views/home/Home.vue';

import VideoPage from '../views/video/VideoPage.vue';
import Dm from '../views/dm/Dm.vue';
import VideoDict from '../views/videoDict/VideoDict.vue';
import VideoCollection from '../views/collection/Collection.vue';

import {
  HOME_PATH,
  LOGIN_PATH,
  VIDEO_COLLECTION,
  VIDEO_DICT,
  VIDEO_DM,
  VIDEO_PATH
} from '@/router/constant';
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
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
