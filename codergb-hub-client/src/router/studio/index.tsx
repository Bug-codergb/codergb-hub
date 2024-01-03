import { type RouteObject, Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
const AudioLibRoute = lazy(async () => await import('../../views/profile/pages/audioLib/index'));
const CommentRoute = lazy(async () => await import('../../views/profile/pages/comment/index'));
const ContentRoute = lazy(async () => await import('../../views/profile/pages/content/index'));
const CopyrightRoute = lazy(async () => await import('../../views/profile/pages/copyright/index'));
const CustomizeRoute = lazy(async () => await import('../../views/profile/pages/customize/index'));
const DataAnalyzeRouter = lazy(
  async () => await import('../../views/profile/pages/dataAnalyze/index')
);
const IncomeRoute = lazy(async () => await import('../../views/profile/pages/income/index'));
const MessageRoute = lazy(async () => await import('../../views/profile/pages/message/index'));
const PlaylistRoute = lazy(async () => await import('../../views/profile/pages/playlist/index'));
const SettingRoute = lazy(async () => await import('../../views/profile/pages/setting/index'));
const SubtitleRoute = lazy(async () => await import('../../views/profile/pages/subtitle/index'));
const routes: RouteObject[] = [
  {
    path: '/studio',
    element: <Navigate to="/studio/message" />
  },
  {
    path: '/studio/audioLib',
    element: (
      <Suspense>
        <AudioLibRoute />
      </Suspense>
    )
  },
  {
    path: '/studio/comment',
    element: (
      <Suspense>
        <CommentRoute />
      </Suspense>
    )
  },
  {
    path: '/studio/content',
    element: (
      <Suspense>
        <ContentRoute />
      </Suspense>
    )
  },
  {
    path: '/studio/copyright',
    element: (
      <Suspense>
        <CopyrightRoute />
      </Suspense>
    )
  },
  {
    path: '/studio/customize',
    element: (
      <Suspense>
        <CustomizeRoute />
      </Suspense>
    )
  },
  {
    path: '/studio/dataAnalyze',
    element: (
      <Suspense>
        <DataAnalyzeRouter />
      </Suspense>
    )
  },
  {
    path: '/studio/income',
    element: (
      <Suspense>
        <IncomeRoute />
      </Suspense>
    )
  },
  {
    path: '/studio/message',
    element: (
      <Suspense>
        <MessageRoute />
      </Suspense>
    )
  },
  {
    path: '/studio/playlist',
    element: (
      <Suspense>
        <PlaylistRoute />
      </Suspense>
    )
  },
  {
    path: '/studio/setting',
    element: (
      <Suspense>
        <SettingRoute />
      </Suspense>
    )
  },
  {
    path: '/studio/subtitle',
    element: (
      <Suspense>
        <SubtitleRoute />
      </Suspense>
    )
  }
];
export default routes;
