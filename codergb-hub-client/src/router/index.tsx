import {Navigate, RouteObject} from "react-router-dom";
import {lazy,Suspense} from "react";
import Home from "../views/home";
const LoginRoute = lazy(()=>import('../views/login/index'));
const HomeRoute = lazy(()=>import("../views/home/index"));

//home页主要内容
const ChannelRoute = lazy(()=>import("../views/channel/index"));
const ExploreRoute = lazy(()=>import("../views/explore/index"));
const HistoryRoute = lazy(()=>import('../views/history/index'));
const LibraryRoute = lazy(()=>import("../views/library/index"));
const PlaylistRoute = lazy(()=>import("../views/playlist/index"));
const RecommendRoute = lazy(()=>import("../views/recommend/index"));
const ShortsRoute = lazy(()=>import("../views/shorts/index"));
const SubscriptionsRoute = lazy(()=>import("../views/subscriptions/index"));
const ThumbRoute = lazy(()=>import("../views/thumb/index"));

const routes:RouteObject[]=[
  {
    path:"/",
    element:(
        <Navigate to='/login'/>
    )
  },
  {
    path:"/login",
    element:(
        <Suspense>
          <LoginRoute/>
        </Suspense>
    )
  },
  {
    path:"/home",
    element:(
        <Suspense>
          <HomeRoute/>
        </Suspense>
    ),
    children:[
      {
        path:'/home',
        element:(
            <Navigate to='/home/recommend'/>
        ),
      },
      {
        path:"/home/channel",
        element:(
            <Suspense>
              <ChannelRoute/>
            </Suspense>
        )
      },
      {
        path:"/home/explore",
        element:(
            <Suspense>
              <ExploreRoute/>
            </Suspense>
        )
      },
      {
        path:"/home/history",
        element:(
            <Suspense>
              <HistoryRoute/>
            </Suspense>
        )
      },
      {
        path:"/home/library",
        element:(
            <Suspense>
              <LibraryRoute/>
            </Suspense>
        )
      },
      {
        path:"/home/playlist",
        element:(
            <Suspense>
              <PlaylistRoute/>
            </Suspense>
        )
      },
      {
        path:"/home/recommend",
        element:(
            <Suspense>
              <RecommendRoute/>
            </Suspense>
        )
      },
      {
        path:"/home/shorts",
        element:(
            <Suspense>
              <ShortsRoute/>
            </Suspense>
        )
      },
      {
        path:"/home/subscriptions",
        element:(
            <Suspense>
              <SubscriptionsRoute/>
            </Suspense>
        )
      },
      {
        path:"/home/thumb",
        element:(
            <Suspense>
              <ThumbRoute/>
            </Suspense>
        )
      }
    ]
  }
]
export {
  routes
}