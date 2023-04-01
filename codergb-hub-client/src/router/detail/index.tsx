import {lazy,Suspense} from "react";
import {RouteObject} from "react-router-dom";
const VideoDetail = lazy(()=>import("../../components/content/detail/videoDetail/index"));
const UserDetail=lazy(()=>import("../../components/content/detail/userDetail/index"));
const ChatDetail=lazy(()=>import("../../components/content/detail/chatDetail/index"));
const SearchDetail=lazy(()=>import("../../components/content/detail/searchDetail/index"));
const videoDetailRoute:RouteObject={
    path:"/videoDetail",
    element:<Suspense>
      <VideoDetail/>
    </Suspense>
  }
const userDetailRoute:RouteObject={
  path:"/home/userDetail",
  element:<Suspense>
    <UserDetail/>
  </Suspense>
}
const chatDetailRoute:RouteObject={
  path:"/chatDetail",
  element:<Suspense>
    <ChatDetail/>
  </Suspense>
}
const searchDetailRoute:RouteObject={
  path:"/home/search",
  element:<Suspense>
    <SearchDetail/>
  </Suspense>
}
export {
  videoDetailRoute,
  userDetailRoute,
  chatDetailRoute,
  searchDetailRoute
};
