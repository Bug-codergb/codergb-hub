import {lazy,Suspense} from "react";
import {RouteObject} from "react-router-dom";
const VideoDetail = lazy(()=>import("../../components/content/detail/videoDetail/index"));
const videoDetailRoute:RouteObject={
    path:"/videoDetail",
    element:<Suspense>
      <VideoDetail/>
    </Suspense>
  }
export {
  videoDetailRoute
};
