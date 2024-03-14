import { memo, type FC, type ReactElement, useEffect, useState } from 'react';
import { Progress, Space, Table, Tag, message } from 'antd';
import type { TableProps } from 'antd';
import { LiveStreamWrapper } from './style';
import { createVideo } from '../../../../../../network/video';
import { type IUploadVideo } from '../../../../../../types/imperative/uploadVideo';

const LiveStream: FC = (): ReactElement => {
  const [percent, setPercent] = useState<number>(0);
  useEffect(() => {
    if (window.videoWebsocket && window.videoInfo) {
      window.videoWebsocket.onmessage = async function (e) {
        const value = JSON.parse(e.data as string);
        if (value) {
          const info = window.videoInfo as IUploadVideo | undefined;
          setPercent(value.percent as number);
          if (value.percent === 100 && info) {
            const result = await createVideo(
              value.id ? (value.id as string) : '',
              info.title,
              info.desc,
              info.imgId,
              info.playlist,
              info.tag,
              info.cate,
              info.dt ? info.dt : 0
            );
            if (result.status === 200) {
              window.videoInfo = undefined;
              window.videoWebsocket = undefined;
              message.success('视频上传成功');
            }
          }
        }
      };
    }
  }, [window.videoWebsocket]);

  const columns: TableProps<any>['columns'] = [
    {
      title: '视频名称',
      dataIndex: 'name',
      key: 'name',
      width: 350,
      render: (text) => <span>{window.videoInfo?.title}</span>
    },
    {
      title: '封面',
      dataIndex: 'age',
      width: 300,
      key: 'age',
      render: (text) => {
        return <img className="cover" width={200} src={window.videoInfo?.imgURL} />;
      }
    },

    {
      title: '进度',
      key: 'tags',
      dataIndex: 'tags',
      width: 500,
      render: (_, row) => (
        <div>
          <Progress percent={parseFloat(percent.toFixed(2))} />
        </div>
      )
    }
  ];
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    if (window.videoInfo) {
      setData([{}]);
    }
  }, []);
  return (
    <LiveStreamWrapper>
      <Table columns={columns} dataSource={data} pagination={false} />
    </LiveStreamWrapper>
  );
};
export default memo(LiveStream);
