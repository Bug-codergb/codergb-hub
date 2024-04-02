import React, { memo, type FC, type ReactElement, useState } from 'react';
import { type Map } from 'immutable';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Pagination } from 'antd';
import { VideoSearchWrapper } from './style';
import { type IVideo } from '../../../../../../../../types/video/IVideo';
import { getAllVideo, getUserVideo } from '../../../../../../../../network/video';
import { useDispatch, useSelector } from 'react-redux';
import { type ILogin } from '../../../../../../../../types/login/ILogin';
import { type IResponseType } from '../../../../../../../../types/responseType';
import { type IPage } from '../../../../../../../../types/IPage';
import HolderCpn from '../../../../../../../../components/holder';
import { updateChannel } from '../../../../../../../../network/channel';
import { IChannel } from '../../../../../../../../types/channel/IChannel';
import { Dispatch } from 'redux';
import { changeChannelAction } from '../../../../store/actionCreators';
import { log } from 'util';
import { useLoginMsg } from '../../../../../../../../hook/useLoginMsg';

const { Search } = Input;
interface IProps {
  isTrailer: boolean;
  updateVideo: (obj: Object) => void;
}
const VideoSearch: FC<IProps> = (props): ReactElement => {
  const { isTrailer, updateVideo } = props;
  const [userInp, setUserInp] = useState<string>('');
  const [userVideo, setUserVideo] = useState<IVideo[]>([]);
  const [userVideoCount, setUserVideoCount] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const login = useLoginMsg();
  const getUserVideoHandle = async (keyword: string, offset: number, limit: number) => {
    const result = await getUserVideo<IResponseType<IPage<IVideo[]>>>(
      login.userMsg.userId,
      keyword,
      offset,
      limit
    );
    if (result.status === 200) {
      setUserVideo(result.data.list);
      setUserVideoCount(result.data.count);
    }
  };

  const getAllVideoHandler = async (keyword: string, offset: number, limit: number) => {
    const result = await getAllVideo<IResponseType<IPage<IVideo[]>>>(offset, limit, keyword);
    if (result.status === 200) {
      setUserVideo(result.data.list);
      setUserVideoCount(result.data.count);
    }
  };
  const onSearchUserSelf = async (value: string) => {
    setUserInp(value);
    await getUserVideoHandle(value, 0, 10);
  };
  const onSearchOther = (value: string) => {
    getAllVideoHandler(value, 0, 10);
  };
  const changeVideo = async (item: IVideo, index: number) => {
    setCurrentIndex(index);
    const obj = {
      [isTrailer ? 'trailer' : 'featured']: item.id
    };
    updateVideo(obj);
  };
  return (
    <VideoSearchWrapper>
      <div className="search-container">
        <div className="user-self">
          <Search
            placeholder="搜索您的视频"
            onSearch={async (value, event) => {
              await onSearchUserSelf(value);
            }}
          />
        </div>
        {!isTrailer && (
          <div className="video-lib">
            <Search
              placeholder="搜索整站的视频"
              onSearch={(value, event) => {
                onSearchOther(value);
              }}
            />
          </div>
        )}
      </div>
      <ul className="video-list">
        {userVideo &&
          userVideo.length !== 0 &&
          userVideo.map((item, index) => {
            return (
              <li
                key={item.id}
                onClick={async (e) => {
                  await changeVideo(item, index);
                }}
                className={currentIndex === index ? 'active' : ''}
              >
                <div className="video-cover">
                  <img src={item.picUrl} alt={item.name} />
                </div>
                <div className="video-name text-nowrap-mul-line">{item.name}</div>
              </li>
            );
          })}
        {HolderCpn(userVideo.length, 5, 220)}
      </ul>
      {userVideoCount > 10 && (
        <div className="g-page">
          <Pagination defaultCurrent={1} total={userVideoCount} current={currentPage} />
        </div>
      )}
    </VideoSearchWrapper>
  );
};
export default memo(VideoSearch);
