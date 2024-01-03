import React, { memo, type FC, ReactElement, useEffect, useState } from 'react';
import { ReplyWrapper } from './style';
import { getAllReply, replyComment } from '../../../../../network/comment';
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
const Reply: FC<IProps> = (props) => {
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
  return (
    <ReplyWrapper>
      <ul className="reply-list">
        {reply &&
          reply.length !== 0 &&
          reply.map((item, index) => {
            return (
              <li key={item.id}>
                <ReplyItem
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
      </ul>
    </ReplyWrapper>
  );
};
export default memo(Reply);
