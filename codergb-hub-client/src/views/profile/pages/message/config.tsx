import React from 'react';
import { Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';

import { type NavigateFunction } from 'react-router-dom';
import { type INotify } from '../../../../types/message';
import { NotifyWrapper } from './style';
import { updateNotify } from '../../../../network/notify';
import { type IUserMsg } from '../../../../types/user/IUserMsg';
const videoRouter = (item: INotify, navigate: NavigateFunction) => {
  console.log(item);
  if (item.video) {
    updateNotify(item.id).then(() => {});
    navigate('/videoDetail', {
      state: {
        id: item.video.id
      }
    });
  }
};
const userSub = (id: string, user: IUserMsg, navigate: NavigateFunction) => {
  updateNotify(id).then(() => {});
  navigate('/home/userDetail', {
    state: {
      userId: user.userId
    },
    replace: false
  });
};
const userMomment = (item: INotify, navigate: NavigateFunction) => {
  updateNotify(item.id).then(() => {});
  item.moment &&
    navigate('/home/moment', {
      state: {
        id: item.moment.id
      }
    });
};
const columns = (navigate: NavigateFunction): ColumnsType<INotify> => {
  return [
    {
      title: '内容',
      dataIndex: 'name',
      width: '100',
      render: (text: string, item: INotify) => {
        return (
          <NotifyWrapper>
            {item.type === 'sub' && (
              <span
                className="user-name"
                onClick={() => {
                  userSub(item.id, item.operation, navigate);
                }}
              >
                {item.operation.userName}关注了你
              </span>
            )}
            {item.type === 'upload' && (
              <span>
                您关注的
                <span
                  className="user-name"
                  onClick={() => {
                    userSub(item.id, item.operation, navigate);
                  }}
                >
                  {item.operation.userName}
                </span>
                发布了视频
                <span
                  className="info text-nowrap-mul-line"
                  onClick={() => {
                    videoRouter(item, navigate);
                  }}
                >
                  {item.video?.name}
                </span>
              </span>
            )}
            {item.type === 'thumb-vId' && (
              <span>
                <span
                  className="user-name"
                  onClick={() => {
                    userSub(item.id, item.operation, navigate);
                  }}
                >
                  {item.operation.userName}
                </span>
                点赞了您的视频
                <span
                  className="info text-nowrap-mul-line"
                  onClick={() => {
                    videoRouter(item, navigate);
                  }}
                >
                  {item.video?.name}
                </span>
              </span>
            )}
            {item.type === 'thumb-commentId' && (
              <span>
                <span
                  className="user-name"
                  onClick={() => {
                    userSub(item.id, item.operation, navigate);
                  }}
                >
                  {item.operation.userName}
                </span>
                点赞了您的评论
                <span className="info text-nowrap-mul-line">{item.comment?.content}</span>
              </span>
            )}
            {item.type === 'thumb-mId' && (
              <span>
                <span
                  className="user-name"
                  onClick={() => {
                    userSub(item.id, item.operation, navigate);
                  }}
                >
                  {item.operation.userName}
                </span>
                点赞了您的动态
                <span
                  className="info text-nowrap-mul-line"
                  onClick={() => {
                    userMomment(item, navigate);
                  }}
                >
                  {item.moment?.title}
                </span>
              </span>
            )}
          </NotifyWrapper>
        );
      }
    },
    {
      title: '是否已读',
      dataIndex: 'isRead',
      render: (text: string, item: INotify) => {
        return (
          <Tag color={`${item.isRead}` === '0' ? 'blue' : 'green'}>
            {`${item.isRead}` === '0' ? '未读' : '已读'}
          </Tag>
        );
      }
    },
    {
      title: '日期',
      dataIndex: 'createTime',
      width: '140',
      sorter: (a, b) => new Date(a.createTime).getTime() - new Date(b.createTime).getTime(),
      render: (time: string) => {
        return moment(time).format('yyyy-MM-DD HH:mm');
      }
    }
  ];
};
export { columns };
