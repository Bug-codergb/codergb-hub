import { Navigate, type RouteObject, Outlet } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import StudioChildrenRoute from './studio/index';
import {
  videoDetailRoute,
  userDetailRoute,
  chatDetailRoute,
  searchDetailRoute,
  momentDetailRoute
} from './detail/index';
import { LOGIN_PATH, HOME_RECOMMEND } from '../constant/routes';
import { USER_PLAYLIST } from '../constant/menu';
import UserPlaylist from '../views/user-playlist';

const LoginRoute = lazy(async () => await import('../views/login/index'));
const RegisterRoute = lazy(async () => await import('../views/register/index'));
const HomeRoute = lazy(async () => await import('../views/home/index'));
const Cate = lazy(async () => await import('../views/all/index'));
// home页主要内容
const ChannelRoute = lazy(async () => await import('../views/profile/pages/content/index'));
const ExploreRoute = lazy(async () => await import('../views/explore/index'));
const HistoryRoute = lazy(async () => await import('../views/history/index'));
const LibraryRoute = lazy(async () => await import('../views/library/index'));
const PlaylistRoute = lazy(async () => await import('../views/playlist/index'));
const RecommendRoute = lazy(async () => await import('../views/recommend/index'));
const ShortsRoute = lazy(async () => await import('../views/shorts/index'));
const SubscriptionsRoute = lazy(async () => await import('../views/subscriptions/index'));
const ThumbRoute = lazy(async () => await import('../views/thumb/index'));
const MyChannelRoute = lazy(async () => await import('../views/myChannel/index'));

const SubscriberManage = lazy(
  async () => await import('../views/subscriptions/childCpn/manage/index')
);
// 工作室
const StudioRoute = lazy(async () => await import('../views/profile/index'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={LOGIN_PATH} />
  },
  {
    path: LOGIN_PATH,
    element: (
      <Suspense>
        <LoginRoute />
      </Suspense>
    )
  },
  {
    path: 'register',
    element: (
      <Suspense>
        <RegisterRoute />
      </Suspense>
    )
  },
  {
    path: '/home',
    element: (
      <Suspense>
        <HomeRoute />
      </Suspense>
    ),
    children: [
      {
        path: '/home',
        element: <Navigate to={HOME_RECOMMEND} />
      },

      {
        path: '/home/explore',
        element: (
          <Suspense>
            <ExploreRoute />
          </Suspense>
        )
      },
      {
        path: '/home/history',
        element: (
          <Suspense>
            <HistoryRoute />
          </Suspense>
        )
      },
      {
        path: '/home/library',
        element: (
          <Suspense>
            <LibraryRoute />
          </Suspense>
        )
      },
      {
        path: '/home/playlist',
        element: (
          <Suspense>
            <PlaylistRoute />
          </Suspense>
        )
      },
      {
        path: '/home/recommend',
        element: (
          <Suspense>
            <RecommendRoute />
          </Suspense>
        )
      },
      {
        path: '/home/shorts',
        element: (
          <Suspense>
            <ShortsRoute />
          </Suspense>
        )
      },
      {
        path: '/home/cate',
        element: (
          <Suspense>
            <Cate />
          </Suspense>
        )
      },
      {
        path: '/home/subscriptions',
        element: (
          <Suspense>
            <SubscriptionsRoute />
          </Suspense>
        )
      },
      {
        path: '/home/sub-manage',
        element: (
          <Suspense>
            <SubscriberManage />
          </Suspense>
        )
      },
      {
        path: '/home/thumb',
        element: (
          <Suspense>
            <ThumbRoute />
          </Suspense>
        )
      },
      {
        path: '/home/myChannel',
        element: (
          <Suspense>
            <MyChannelRoute />
          </Suspense>
        )
      },
      {
        path: USER_PLAYLIST + '/:id',
        element: (
          <Suspense>
            <UserPlaylist />
          </Suspense>
        )
      },
      userDetailRoute,
      searchDetailRoute,
      momentDetailRoute
    ]
  },
  // 工作室
  {
    path: '/studio',
    element: (
      <Suspense>
        <StudioRoute />
      </Suspense>
    ),
    children: StudioChildrenRoute
  },
  // 详情页
  videoDetailRoute,
  chatDetailRoute
];
export { routes };
