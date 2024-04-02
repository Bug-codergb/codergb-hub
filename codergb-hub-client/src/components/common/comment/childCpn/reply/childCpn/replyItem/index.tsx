import React, { memo, type FC } from 'react';
import { ReplyItemWrapper } from './style';
import { Popconfirm } from 'antd';
import moment from 'moment';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import Publish from '../../../../../publish';
import { type IComment } from '../../../../../../../types/comment/IComment';
import { type IUserMsg } from '../../../../../../../types/user/IUserMsg';
import { useThumb, useTread } from '../../../../../../../hook/useThumb';
import { cancelThumb, cancelTread, thumb, tread } from '../../../../../../../network/thumb';
import { changeUserDetailAction } from '../../../../../../../views/login/store/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { type Map } from 'immutable';
import { type ILogin } from '../../../../../../../types/login/ILogin';
import { type Dispatch } from 'redux';
import { useLoginMsg } from '../../../../../../../hook/useLoginMsg';
interface IProps {
  reply: IComment;
  id: string;
  user: IUserMsg;
  replyIndex: number;
  index: number;
  propsShowReplyHandle: (index: number) => void;
  propsReplyReplyHandle: (content: string, item: IComment) => void;
  thubmHandler: () => void;
  delComment: (index: number) => void;
}
const ReplyItem: FC<IProps> = (props) => {
  const {
    reply,
    id,
    user,
    replyIndex,
    index,
    propsShowReplyHandle,
    propsReplyReplyHandle,
    thubmHandler: propThumbHandler,
    delComment
  } = props;
  const loginState = useLoginMsg();
  const isThumb = useThumb('comment', reply.id);
  const isTread = useTread('comment', reply.id);
  const dispatch = useDispatch<Dispatch<any>>();
  const showReplyHandle = (index: number) => {
    propsShowReplyHandle(index);
  };
  const replyReplyHandle = (content: string, item: IComment) => {
    propsReplyReplyHandle(content, item);
  };
  const thumbHandle = async () => {
    if (reply) {
      console.log(isThumb);
      if (isThumb) {
        const result = await cancelThumb(reply.id, 'commentId');
        if (result.status === 200) {
          propThumbHandler();
        }
      } else {
        const result = await thumb(reply.id, 'commentId');
        if (result.status === 200) {
          propThumbHandler();
        }
      }
      if (reply && reply.user && loginState && loginState.userMsg) {
        dispatch(changeUserDetailAction(loginState.userMsg.userId, false));
      }
    }
  };
  const treadHandle = async () => {
    if (reply) {
      if (!isTread) {
        const result = await tread(reply.id, 'commentId');
        if (result.status === 200) {
          propThumbHandler();
        }
      } else {
        const result = await cancelTread(reply.id, 'commentId');
        if (result.status === 200) {
          propThumbHandler();
        }
      }
      if (reply && reply.user && loginState && loginState.userMsg) {
        dispatch(changeUserDetailAction(loginState.userMsg.userId, false));
      }
    }
  };
  const delCommentHandler = (index: number) => {
    delComment && delComment(index);
  };
  return (
    <ReplyItemWrapper>
      <div className="left-msg">
        <img src={reply.user.avatarUrl} />
      </div>
      <div className="right-msg">
        <div className="user-name-time">
          <span className="user-name">{reply.user.userName}</span>
          <span className="create-time">{moment(reply.createTime).locale('zh-CN').fromNow()}</span>
        </div>
        <div className="content">{reply.content}</div>
        {id &&
          typeof reply.reply === 'object' &&
          reply.reply.hasOwnProperty('user') &&
          reply.reply.id !== id && (
            <div className="reply-for-name">
              @
              {reply.reply
                ? typeof reply.reply === 'object' && reply.reply.hasOwnProperty('user')
                  ? reply.reply.user.userName
                  : ''
                : ''}
            </div>
          )}
        <div className="reply-controller-btn">
          <div className="thumb">
            {!isThumb && (
              <LikeOutlined
                onClick={async (e) => {
                  await thumbHandle();
                }}
              />
            )}
            {isThumb && (
              <LikeFilled
                onClick={async (e) => {
                  await thumbHandle();
                }}
              />
            )}
            <span className="thumb-count">{reply.thumb ?? 0}</span>
          </div>
          <div className="tread">
            {!isTread && (
              <DislikeOutlined
                onClick={async (e) => {
                  await treadHandle();
                }}
              />
            )}
            {isTread && (
              <DislikeFilled
                onClick={async (e) => {
                  await treadHandle();
                }}
              />
            )}
          </div>
          <div
            className="reply-label g-reply-label"
            onClick={(e) => {
              showReplyHandle(index);
            }}
          >
            回复
          </div>
          {loginState.userMsg && loginState.userMsg.userId === reply.user.userId && (
            <Popconfirm
              title="删除评论将删除该评论下的所有恢复"
              onConfirm={() => {
                delCommentHandler(index);
              }}
              onCancel={() => {}}
              okText="确认"
              cancelText="取消"
            >
              <div className="reply-label g-reply-label del-btn">删除</div>
            </Popconfirm>
          )}
        </div>
        {/* 回复评论的回复 */}
        {index === replyIndex && (
          <div className="reply-reply">
            <Publish
              user={user}
              isShowAt={true}
              atUser={reply.user}
              publish={(content) => {
                replyReplyHandle(content, reply);
              }}
            />
          </div>
        )}
      </div>
    </ReplyItemWrapper>
  );
};
export default memo(ReplyItem);
