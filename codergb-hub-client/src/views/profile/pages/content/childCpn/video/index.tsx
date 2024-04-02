import { type FC, type ReactElement } from 'react';
import type React from 'react';
import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type Map } from 'immutable';
import { Divider, Radio, Table, Empty } from 'antd';
import { VideoPageWrapper } from './style';
import { getUserVideo } from '../../../../../../network/video';
import { type IResponseType } from '../../../../../../types/responseType';
import { type IPage } from '../../../../../../types/IPage';
import { type IVideo } from '../../../../../../types/video/IVideo';
import { columns } from './config';
import { useSelector } from 'react-redux';
import { type ILogin } from '../../../../../../types/login/ILogin';
import { useLoginMsg } from '../../../../../../hook/useLoginMsg';
const VideoPage: FC = (): ReactElement => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [video, setVideo] = useState<IVideo[]>([]);
  const [count, setCount] = useState<number>(0);
  const navigate = useNavigate();
  const login = useLoginMsg();
  useEffect(() => {
    getUserVideo<IResponseType<IPage<IVideo[]>>>(login.userMsg.userId, '', 0, 4).then((data) => {
      if (data.status === 200) {
        setVideo(data.data.list);
        setCount(data.data.count);
      }
    });
  }, []);
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: IVideo[]) => {
      console.log('selectedRows: ', selectedRows);
    }
  };
  const pageChangeHandle = (e: number) => {
    setPageIndex(e);
    getUserVideo<IResponseType<IPage<IVideo[]>>>(login.userMsg.userId, '', (e - 1) * 4, 4).then(
      (data) => {
        if (data.status === 200) {
          setVideo(data.data.list);
          setCount(data.data.count);
        }
      }
    );
  };
  const [currentPageIndex, setPageIndex] = useState<number>(1);
  const getUserVideoReq = () => {
    getUserVideo<IResponseType<IPage<IVideo[]>>>(login.userMsg.userId, '', 0, 4).then((data) => {
      if (data.status === 200) {
        setPageIndex(1);
        setVideo(data.data.list);
        setCount(data.data.count);
      }
    });
  };
  return (
    <VideoPageWrapper>
      {video && video.length !== 0 && (
        <Table
          rowKey={'id'}
          columns={columns(navigate, getUserVideoReq)}
          dataSource={video}
          pagination={{
            pageSize: 4,
            total: count,
            current: currentPageIndex,
            onChange: (e) => {
              pageChangeHandle(e);
            }
          }}
        />
      )}
      {(!video || video.length === 0) && (
        <div className="empty-container">
          <Empty description="您还没有上传作品" />
        </div>
      )}
    </VideoPageWrapper>
  );
};
export default memo(VideoPage);
