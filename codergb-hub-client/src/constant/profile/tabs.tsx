import Home from "../../views/myChannel/childCpn/home";
import Video from "../../views/myChannel/childCpn/video";
import Shorts from "../../views/myChannel/childCpn/shorts";
import Live from "../../views/myChannel/childCpn/live";
import Playlist from "../../views/myChannel/childCpn/playlist";
import Moment from "../../views/myChannel/childCpn/moment";
import Channel from "../../views/myChannel/childCpn/channel";
import Desc from "../../views/myChannel/childCpn/desc";

const tabs=[
  {
    label:"首页",
    key:"1001",
    children:<Home/>
  },
  {
    label:"视频",
    key:"1002",
    children:<Video/>
  },
  {
    label:"SHORTS",
    key:"1003",
    children:<Shorts/>
  },
  {
    label:"直播",
    key:"1004",
    children:<Live/>
  },
  {
    label:"播放列表",
    key:"1005",
    children:<Playlist/>
  },
  {
    label: "社区",
    key:"1006",
    children:<Moment/>
  },
  {
    label: "频道",
    key:"1007",
    children:<Channel/>
  },
  {
    label: "简介",
    key:"1008",
    children:<Desc/>
  }
]
export {
  tabs
}