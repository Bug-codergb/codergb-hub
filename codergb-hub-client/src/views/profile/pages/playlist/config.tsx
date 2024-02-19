import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { message, Button, Modal } from 'antd';
import { ExclamationCircleOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import moment from 'moment';
import { PlaylistItemWrapper } from './style';
import { type IPlaylist } from '../../../../types/playlist/IPlaylist';
import { USER_PLAYLIST } from '../../../../constant/menu';
import { type NavigateFunction } from 'react-router/dist/lib/hooks';
import { deletePlaylist } from '../../../../network/playlist';

const playlistRouter = (item: IPlaylist, navigate: NavigateFunction) => {
  navigate(`${USER_PLAYLIST}/${item.id}`, {
    replace: false
  });
};
const deletePlaylistHandler = (item: IPlaylist, fn: () => void) => {
  Modal.confirm({
    title: '提示',
    icon: <ExclamationCircleOutlined />,
    content: '此操作将永久删除播放列表，确认继续么？',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      deletePlaylist(item.id).then((res) => {
        if (res.status === 200) {
          fn();
          message.info('删除成功');
        }
      });
    }
  });
};
const columns = (navigate: NavigateFunction, fn: () => void): ColumnsType<IPlaylist> => {
  return [
    {
      title: '播放列表',
      dataIndex: 'name',
      render: (text: string, item) => {
        return (
          <PlaylistItemWrapper>
            <div className="left-container">
              <div
                className="img-container"
                onClick={(e) => {
                  playlistRouter(item, navigate);
                }}
              >
                <img src={item.picUrl} alt={item.name} />
              </div>
            </div>
            <div className="right-container">
              <div className="right-msg">
                <p className="name">{item.name}</p>
                <p className="desc">{item.description}</p>
              </div>
            </div>
          </PlaylistItemWrapper>
        );
      }
    },
    {
      title: '公开范围',
      dataIndex: 'isPublic',
      render: (text: string, item: IPlaylist) => {
        const { isPublic } = item;
        if (isPublic === 1) {
          return <EyeOutlined />;
        } else {
          return <EyeInvisibleOutlined />;
        }
      }
    },
    {
      title: '上次更新时间',
      dataIndex: 'createTime',
      sorter: (a, b) => new Date(a.createTime).getTime() - new Date(b.createTime).getTime(),
      render: (time: string) => {
        return moment(time).format('yyyy-MM-DD HH:mm');
      }
    },
    {
      title: '视频数',
      dataIndex: 'video',
      render: (video: number | null) => {
        return video || 0;
      }
    },
    {
      title: '操作',
      dataIndex: 'operation',
      width: '140',
      fixed: 'right',
      render: (_, item: IPlaylist) => {
        return (
          <span>
            <Button
              type="link"
              danger
              onClick={() => {
                deletePlaylistHandler(item, fn);
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
