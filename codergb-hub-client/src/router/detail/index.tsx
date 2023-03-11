import {lazy,Suspense} from "react";
import {RouteObject} from "react-router-dom";
const VideoDetail = lazy(()=>import("../../components/content/detail/videoDetail/index"));
const UserDetail=lazy(()=>import("../../components/content/detail/userDetail/index"))
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
export {
  videoDetailRoute,
  userDetailRoute
};
