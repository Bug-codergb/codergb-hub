import React, { memo, type FC, ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type Map } from 'immutable';
import { LibraryWrapper } from './style';
import { useSelector } from 'react-redux';
import { type ILogin } from '../../types/login/ILogin';
import { type IVideo } from '../../types/video/IVideo';
import { getUserHistory } from '../../network/history';
import { type IResponseType } from '../../types/responseType';
import { type IPage } from '../../types/IPage';
import VideoList from './childCpn/videoList';
import { getUserLater } from '../../network/later';
import { type ILater } from '../../types/later/ILater';
import { getUserBlock } from '../../network/block';
import { getUserLibrary } from '../../network/user';
import { useLoginMsg } from '../../hook/useLoginMsg';
interface IUserLib {
  subCount: number;
  uploadCount: number;
  thumbCount: number;
}
const Library: FC = () => {
  const [history, setHistory] = useState<IVideo[]>([]);
  const [later, setLater] = useState<IVideo[]>([]);
  const login = useLoginMsg();

  const navigate = useNavigate();
  useEffect(() => {
    getUserHistory<IResponseType<IPage<IVideo[]>>>(login.userMsg.userId, 0, 4, '').then((data) => {
      if (data.status === 200) {
        setHistory(data.data.list);
      }
    });
  }, [login.userMsg.userId]);
  useEffect(() => {
    getUserLater<IResponseType<IPage<ILater[]>>>(login.userMsg.userId, 0, 4).then((data) => {
      if (data.status === 200) {
        const video = data.data.list.map((item) => {
          return item.video;
        });
        setLater(video);
      }
    });
  }, []);

  const [userlib, setUserlib] = useState<IUserLib>({
    subCount: 0,
    uploadCount: 0,
    thumbCount: 0
  });
  useEffect(() => {
    getUserLibrary<IResponseType<IUserLib>>(login.userMsg.userId).then((res) => {
      if (res.status === 200) {
        setUserlib(res.data);
      }
    });
  }, []);
  const moreHandle = (alias: string) => {
    if (alias === '稍后观看') {
      navigate('/home/playlist', {
        replace: false
      });
    } else if (alias === '历史记录') {
      navigate('/home/history', {
        replace: false
      });
    }
  };
  return (
    <LibraryWrapper>
      <div className="left-content">
        <VideoList
          video={history}
          more={'查看更多'}
          title={'历史记录'}
          moreClickHandle={() => {
            moreHandle('历史记录');
          }}
        />
        <div className="line"> </div>
        <VideoList
          video={later}
          more={'查看更多'}
          title={'稍后观看'}
          moreClickHandle={() => {
            moreHandle('稍后观看');
          }}
        />
      </div>
      <div className="right-content">
        <div className="avatar-outer">
          <img src={login.userMsg.avatarUrl} alt={login.userMsg.userName} />
        </div>
        <div className="user-name">{login.userMsg.userName}</div>
        <ul className="sub-upload-thumb">
          <li>
            <span>订阅数量</span>
            <span>{userlib.subCount}</span>
          </li>
          <li>
            <span>上传数量</span>
            <span>{userlib.uploadCount}</span>
          </li>
          <li>
            <span>顶过的视频数</span>
            <span>{userlib.thumbCount}</span>
          </li>
        </ul>
      </div>
    </LibraryWrapper>
  );
};
export default memo(Library);
