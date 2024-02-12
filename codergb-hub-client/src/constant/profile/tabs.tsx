import Home from '../../views/myChannel/childCpn/home';
import Video from '../../views/myChannel/childCpn/video';
import Shorts from '../../views/myChannel/childCpn/shorts';
import Live from '../../views/myChannel/childCpn/live';
import Playlist from '../../views/myChannel/childCpn/playlist';
import Moment from '../../views/myChannel/childCpn/moment';
import Channel from '../../views/myChannel/childCpn/channel';
import Desc from '../../views/myChannel/childCpn/desc';

const tabs = (userId: string, channelId: string) => {
  return [
    {
      label: '首页',
      key: '1001',
      children: <Home userId={userId} />
    },
    {
      label: '视频',
      key: '1002',
      children: <Video userId={userId} />
    },
    {
      label: '短视频',
      key: '1003',
      children: <Shorts userId={userId} />
    },

    {
      label: '播放列表',
      key: '1005',
      children: <Playlist userId={userId} />
    },
    {
      label: '收藏的播放列表',
      key: '1004',
      children: <Live userId={userId} />
    },
    {
      label: '社区',
      key: '1006',
      children: <Moment userId={userId} channelId={channelId} />
    },
    {
      label: '订阅的频道',
      key: '1007',
      children: <Channel userId={userId} />
    },
    {
      label: '简介',
      key: '1008',
      children: <Desc userId={userId} />
    }
  ];
};
export { tabs };
