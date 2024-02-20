import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { ExclamationCircleOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Tag, Button, Modal, message } from 'antd';
import moment from 'moment';
import { type IComment } from '../../../../types/comment/IComment';
import { CommentItemWrapper } from './style';
import { type NavigateFunction } from 'react-router-dom';
import { deleteComment } from '../../../../network/comment';

const deleteCommentHandler = (item: IComment, fn: () => void) => {
  Modal.confirm({
    title: '提示',
    icon: <ExclamationCircleOutlined />,
    content: '此操作将永久删除播放列表，确认继续么？',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      deleteComment(item.id).then((res) => {
        if (res.status === 200) {
          fn();
          message.info('删除成功');
        }
      });
    }
  });
};
const columns = (navigate: NavigateFunction, fn: () => void): ColumnsType<IComment> => {
  return [
    {
      title: '内容',
      dataIndex: 'content',
      render: (text: string, item) => {
        return (
          <CommentItemWrapper>
            <div className="comment-container" title={text}>
              {text}
            </div>
          </CommentItemWrapper>
        );
      }
    },
    {
      title: '创建人',
      dataIndex: 'user.userName',
      render: (_, item) => {
        return (
          <CommentItemWrapper>
            <div className="avatar-container">
              <img src={item.user.avatarUrl} />
              <span className="user-name">{item.user.userName}</span>
            </div>
          </CommentItemWrapper>
        );
      }
    },
    {
      title: '评论时间',
      dataIndex: 'createTime',
      render: (_, item) => {
        return (
          <CommentItemWrapper>
            <span>{moment(item.createTime).format('yyyy-MM-DD HH:mm')}</span>
          </CommentItemWrapper>
        );
      }
    },
    {
      title: '评论来自',
      dataIndex: 'createTime',
      width: 200,
      render: (_, item: IComment) => {
        return (
          <CommentItemWrapper>
            <div className="comment-from">
              <Tag key={item.id} color={'geekblue'}>
                {item.video
                  ? '视频'
                  : item.moment
                    ? '动态'
                    : item.reply && typeof item.reply === 'object'
                      ? '评论'
                      : ''}
              </Tag>
              <div key={item.id} className={'content'}>
                {item.video
                  ? item.video.name
                  : item.moment
                    ? item.moment.title
                    : item.reply && typeof item.reply === 'object'
                      ? item.reply.content
                      : ''}
              </div>
            </div>
          </CommentItemWrapper>
        );
      }
    },
    {
      title: '操作',
      dataIndex: 'operation',
      width: '140',
      fixed: 'right',
      render: (_, item: IComment) => {
        return (
          <span>
            <Button
              type="link"
              danger
              onClick={() => {
                deleteCommentHandler(item, fn);
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
