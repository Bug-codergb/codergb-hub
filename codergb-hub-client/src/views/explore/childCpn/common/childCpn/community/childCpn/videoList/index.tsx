import React, { memo, FC, useState, useImperativeHandle, forwardRef, Ref } from 'react';
import { IVideo } from '../../../../../../../../types/video/IVideo';
import { Input, Pagination, Space } from 'antd';
import { VideoListWrapper } from './style';
import { getAllVideo, getUserVideo } from '../../../../../../../../network/video';
import { useLoginMsg } from '../../../../../../../../hook/useLoginMsg';
import { IResponseType } from '../../../../../../../../types/responseType';
import { IPage } from '../../../../../../../../types/IPage';
import HolderCpn from '../../../../../../../../components/holder';
interface IVideoListRef {
  videoSource: IVideo | null;
}
interface IProps {
  ref: Ref<IVideoListRef>;
}
const { Search } = Input;
const VideoList: FC<IProps> = forwardRef<IVideoListRef, IProps>((props, propsRef) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [videoList, setVideList] = useState<IVideo[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isSelf, setIsSelf] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>('');
  const [videoItem, setVideoItem] = useState<IVideo | null>(null);
  const loginMsg = useLoginMsg();
  const getVideoList = async (offset: number, limit: number, keyword: string, isSelf: boolean) => {
    if (isSelf) {
      const result = await getUserVideo<IResponseType<IPage<IVideo[]>>>(
        loginMsg.userMsg.userId,
        keyword,
        offset,
        limit
      );
      if (result.status === 200) {
        setTotal(result.data.count);
        setVideList(result.data.list);
      }
    } else {
      const result = await getAllVideo<IResponseType<IPage<IVideo[]>>>(offset, limit, keyword);
      if (result.status === 200) {
        setTotal(result.data.count);
        setVideList(result.data.list);
      }
    }
  };
  const onSelfSearch = async (value: string) => {
    setIsSelf(true);
    setKeyword(value);
    await getVideoList(0, 8, value, true);
  };
  const onAllSearch = async (value: string) => {
    setIsSelf(false);
    setKeyword(value);
    await getVideoList(0, 8, value, false);
  };
  useImperativeHandle<IVideoListRef, IVideoListRef>(propsRef, () => {
    return {
      videoSource: videoItem
    };
  });
  const selectVideo = (item: IVideo, index: number) => {
    setCurrentIndex(index);
    setVideoItem(item);
  };
  const pageChange = async (e: number) => {
    await getVideoList((e - 1) * 8, 8, keyword, isSelf);
  };
  return (
    <VideoListWrapper>
      <div className="header-content">
        <Search placeholder="搜索您的视频" onSearch={onSelfSearch} />
        <Search placeholder="搜索codergb-hub全站视频" onSearch={onAllSearch} />
      </div>
      <ul className="vio-list">
        {videoList &&
          videoList.length !== 0 &&
          videoList.map((item, index) => {
            return (
              <li
                key={item.id}
                onClick={(e) => selectVideo(item, index)}
                className={currentIndex === index ? 'active' : ''}
              >
                <div className="img-container">
                  <img src={item.picUrl} />
                </div>
                <div className="name text-nowrap" title={item.name}>
                  {item.name}
                </div>
                <div className="user-name">{item.user.userName}</div>
              </li>
            );
          })}
        {HolderCpn(videoList.length, 4, 240)}
      </ul>
      {total > 8 && (
        <div className={'page'}>
          <Pagination
            defaultCurrent={1}
            pageSize={8}
            total={total}
            onChange={(e) => pageChange(e)}
          />
        </div>
      )}
    </VideoListWrapper>
  );
});
export default memo(VideoList);
