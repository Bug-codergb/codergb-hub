import React, { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router-dom';
const VideoDetail = lazy(
  async () => await import('../../components/content/detail/videoDetail/index')
);
const UserDetail = lazy(
  async () => await import('../../components/content/detail/userDetail/index')
);
const ChatDetail = lazy(
  async () => await import('../../components/content/detail/chatDetail/index')
);
const SearchDetail = lazy(
  async () => await import('../../components/content/detail/searchDetail/index')
);
const MomentDetail = lazy(
  async () => await import('../../components/content/detail/momentDetail/index')
);

const videoDetailRoute: RouteObject = {
  path: '/videoDetail',
  element: (
    <Suspense>
      <VideoDetail />
    </Suspense>
  )
};
const userDetailRoute: RouteObject = {
  path: '/home/userDetail',
  element: (
    <Suspense>
      <UserDetail />
    </Suspense>
  )
};
const chatDetailRoute: RouteObject = {
  path: '/chatDetail',
  element: (
    <Suspense>
      <ChatDetail />
    </Suspense>
  )
};
const searchDetailRoute: RouteObject = {
  path: '/home/search',
  element: (
    <Suspense>
      <SearchDetail />
    </Suspense>
  )
};
const momentDetailRoute: RouteObject = {
  path: '/home/moment',
  element: (
    <Suspense>
      <MomentDetail />
    </Suspense>
  )
};
export { videoDetailRoute, userDetailRoute, chatDetailRoute, searchDetailRoute, momentDetailRoute };
