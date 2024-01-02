import Home from '../../views/myChannel/childCpn/home';
import Video from '../../views/myChannel/childCpn/video';
import Shorts from '../../views/myChannel/childCpn/shorts';
import Live from '../../views/myChannel/childCpn/live';
import Playlist from '../../views/myChannel/childCpn/playlist';
import Moment from '../../views/myChannel/childCpn/moment';
import Channel from '../../views/myChannel/childCpn/channel';
import Desc from '../../views/myChannel/childCpn/desc';

const tabs = (userId: string) => {
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
      label: 'SHORTS',
      key: '1003',
      children: <Shorts userId={userId} />
    },
    {
      label: '直播',
      key: '1004',
      children: <Live userId={userId} />
    },
    {
      label: '播放列表',
      key: '1005',
      children: <Playlist userId={userId} />
    },
    {
      label: '社区',
      key: '1006',
      children: <Moment userId={userId} />
    },
    {
      label: '频道',
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
