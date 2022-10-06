import HomeIcon from "../assets/html/home/homeIcon";
import HomeShadowIcon from "../assets/html/home/homeShadowIcon";
import ExploreIcon from "../assets/html/explore/exploreIcon";
import ExploreShadowIcon from "../assets/html/explore/exploreShadowIcon";
import ShortsIcon from "../assets/html/short/shortsIcon";
import ShortsShadowIcon from "../assets/html/short/shortsShadowIcon";
import SubscribeIcon from "../assets/html/subscribe/subscribeIcon";
import SubscribeShadowIcon from "../assets/html/subscribe/subscribeShadowIcon";

import LibraryIcon from "../assets/html/library/libraryIcon";
import LibraryShadowIcon from "../assets/html/library/libraryShadowIcon";
import HistoryIcon from "../assets/html/history/historyIcon";
import HistoryShadowIcon from "../assets/html/history/historyShadowIcon";
const mainMenu=[
  {
    name:"首页",
    path:"/home/recommend",
    icon:<HomeIcon/>,
    shadowIcon:<HomeShadowIcon/>
  },
  {
    name:"探索",
    path:'/home/explore',
    icon:<ExploreIcon/>,
    shadowIcon: <ExploreShadowIcon/>
  },
  {
    name:"shorts",
    path:'/home/shorts',
    icon:<ShortsIcon/>,
    shadowIcon: <ShortsShadowIcon/>
  },
  {
    name:"订阅内容",
    path:'/home/subscriptions',
    icon: <SubscribeIcon/>,
    shadowIcon: <SubscribeShadowIcon/>
  },
]
const profileMenu=[
  {
    name:"媒体库",
    path:'/home/library',
    icon:<LibraryIcon/>,
    shadowIcon:<LibraryShadowIcon/>
  },
  {
    name:"历史记录",
    path:'/home/history',
    icon: <HistoryIcon/>,
    shadowIcon: <HistoryShadowIcon/>
  },
  {
    name:"您的视频",
    path:'/home/channel'
  },
  {
    name:"稍后观看",
    path:'/home/playlist'
  },
  {
    name:"顶过的视频",
    path:'/home/thumb'
  }
]
export {
  mainMenu,
  profileMenu
}