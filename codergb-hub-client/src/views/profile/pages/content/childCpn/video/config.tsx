import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Tag, Button, Modal, message, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import { type IVideo } from '../../../../../../types/video/IVideo';
import { type ICate } from '../../../../../../types/category/ICate';
import { VideoListItemWrapper } from './style';
import { type NavigateFunction } from 'react-router-dom';
import { deleteVideo } from '../../../../../../network/video';

const videoRouter = (item: IVideo, navigate: NavigateFunction) => {
  navigate(`/videoDetail/${item.id}`, {
    replace: false,
    state: {}
  });
};
const deleteVideoHandler = (item: IVideo, fn: () => void) => {
  Modal.confirm({
    title: '提示',
    icon: <ExclamationCircleOutlined />,
    content: '此操作将永久删除视频，确认继续么？',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      console.log(11);
      deleteVideo(item.id).then((res) => {
        if (res.status === 200) {
          fn();
          message.info('删除成功');
        }
      });
    }
  });
};
const columns = (navigate: NavigateFunction, fn: () => void): ColumnsType<IVideo> => {
  return [
    {
      title: '视频',
      dataIndex: 'name',
      width: '100',
      render: (text: string, item) => {
        return (
          <VideoListItemWrapper>
            <div className="left-container">
              <div
                className="img-container"
                onClick={() => {
                  videoRouter(item, navigate);
                }}
              >
                <img src={item.picUrl} alt={item.name} />
              </div>
            </div>
            <div className="right-container">
              <div className="right-msg">
                <p
                  className="name text-nowrap-mul-line"
                  onClick={() => {
                    videoRouter(item, navigate);
                  }}
                >
                  {item.name}
                </p>
                <Tooltip placement="topLeft" title={item.description}>
                  <p className="desc text-nowrap-mul-line">{item.description}</p>
                </Tooltip>
              </div>
            </div>
          </VideoListItemWrapper>
        );
      }
    },
    {
      title: '分类',
      dataIndex: 'category',
      render: (cate: ICate) => {
        return <Tag color={'green'}>{cate.name}</Tag>;
      }
    },
    {
      title: '标签',
      dataIndex: 'tag',
      render: (_, item) => {
        return (
          item.tag &&
          item.tag.length !== 0 &&
          item.tag.map((record) => {
            return (
              <Tag key={record.id} color={'geekblue'}>
                {record.name}
              </Tag>
            );
          })
        );
      }
    },
    {
      title: '日期',
      dataIndex: 'createTime',
      width: '180',
      sorter: (a, b) => new Date(a.createTime).getTime() - new Date(b.createTime).getTime(),
      render: (time: string) => {
        return moment(time).format('yyyy-MM-DD HH:mm');
      }
    },
    {
      title: '操作',
      dataIndex: 'operation',
      width: '140',
      fixed: 'right',
      render: (_, item: IVideo) => {
        return (
          <span>
            <Button
              type="link"
              danger
              onClick={() => {
                deleteVideoHandler(item, fn);
              }}
            >
              删除
            </Button>
          </span>
        );
      }
    }
  ];
};
export { columns };
