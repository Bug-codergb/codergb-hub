import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Tag } from 'antd';
import moment from 'moment';
import { IComment } from '../../../../types/comment/IComment';
import { CommentItemWrapper } from './style';

const columns: ColumnsType<IComment> = [
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
  }
];
export { columns };
