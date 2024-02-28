import React, { memo, type FC, type ReactElement, useEffect, useState } from 'react';
import { Pagination, message } from 'antd';
import { ReplyWrapper } from './style';
import { deleteComment, getAllReply, replyComment } from '../../../../../network/comment';
import { type IResponseType } from '../../../../../types/responseType';
import { type IPage } from '../../../../../types/IPage';
import { type IComment } from '../../../../../types/comment/IComment';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import Publish from '../../../publish';
import { type IUserMsg } from '../../../../../types/user/IUserMsg';
import ReplyItem from './childCpn/replyItem';
interface IProps {
  id: string;
  user: IUserMsg;
  replyHandle: (count: number) => void; // 用于更改评论数
}
const Reply: FC<IProps> = (props): ReactElement => {
  const { id, user, replyHandle } = props;
  const [reply, setReply] = useState<IComment[]>([]);
  const [count, setCount] = useState<number>(0);
  const [replyIndex, setReplyIndex] = useState<number>(-1);
  useEffect(() => {
    getAllReplyHandle(id, 0, 10);
  }, [id]);
  const getAllReplyHandle = async (id: string, offset: number, limit: number) => {
    const data = await getAllReply<IResponseType<IPage<IComment[]>>>(id, offset, limit);
    if (data.status === 200) {
      setReply(data.data.list);
      setCount(data.data.count);
    }
  };
  const replyReplyHandle = async (content: string, item: IComment) => {
    const result = await replyComment(item.id, content);
    if (result.status === 200) {
      await getAllReplyHandle(id, 0, 10);
      setReplyIndex(-1);
      replyHandle(count);
    }
  };
  const showReplyHandle = (index: number) => {
    if (index === replyIndex) {
      setReplyIndex(-1);
    } else {
      setReplyIndex(index);
    }
  };
  const thubmHandler = async () => {
    await getAllReplyHandle(id, 0, 10);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const pageChange = async (e: number) => {
    setCurrentPage(e);
    await getAllReplyHandle(id, (e - 1) * 10, 10);
  };

  const deleteCommentHandler = (item: IComment) => {
    deleteComment(item.id).then((res) => {
      if (res.status === 200) {
        message.success('删除成功');
        pageChange(1);
        replyHandle(count - 2);
      }
    });
  };
  return (
    <ReplyWrapper>
      <ul className="reply-list">
        {reply &&
          reply.length !== 0 &&
          reply.map((item, index) => {
            return (
              <li key={item.id}>
                <ReplyItem
                  delComment={() => {
                    deleteCommentHandler(item);
                  }}
                  replyIndex={replyIndex}
                  index={index}
                  reply={item}
                  id={id}
                  user={user}
                  thubmHandler={async () => {
                    await thubmHandler();
                  }}
                  propsShowReplyHandle={(index) => {
                    showReplyHandle(index);
                  }}
                  propsReplyReplyHandle={async (content, item) => {
                    await replyReplyHandle(content, item);
                  }}
                />
              </li>
            );
          })}

        {count > 10 && (
          <div className="page-container">
            <Pagination
              defaultCurrent={1}
              current={currentPage}
              pageSize={10}
              total={count}
              onChange={(e) => {
                pageChange(e);
              }}
            />
          </div>
        )}
      </ul>
    </ReplyWrapper>
  );
};
export default memo(Reply);
