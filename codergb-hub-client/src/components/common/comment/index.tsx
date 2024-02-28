import React, {
  memo,
  type FC,
  type ReactElement,
  useEffect,
  useState,
  type FormEvent,
  useRef
} from 'react';
import { Pagination, message } from 'antd';
import moment from 'moment';
import {
  LikeOutlined,
  DislikeOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  LikeFilled,
  DislikeFilled
} from '@ant-design/icons';
import { Map } from 'immutable';
import { CommentWrapper } from './style';
import { type IUserMsg } from '../../../types/user/IUserMsg';
import {
  deleteComment,
  getAllComment,
  publishComment,
  replyComment
} from '../../../network/comment';
import { type IResponseType } from '../../../types/responseType';
import { type IPage } from '../../../types/IPage';
import { type IComment } from '../../../types/comment/IComment';
import Reply from './childCpn/reply';
import Publish from '../publish';
import { useThumb, useTread } from '../../../hook/useThumb';
import CommentItem from './childCpn/commentItem';
import EmptyHolder from '../emptyHolder';

interface IProps {
  user: IUserMsg;
  alias: string;
  id: string;
}
const Comment: FC<IProps> = (props): ReactElement => {
  const { user, alias, id } = props;
  const [comment, setComment] = useState<IComment[]>([]);
  const [commentCount, setCommentCount] = useState<number>(0);
  const [isShowReply, setIsShowReply] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [content, setContent] = useState<string>('');
  const [comIndex, setComIndex] = useState<number>(-1);
  const [replyIndex, setReplyIndex] = useState<number>(-1);
  useEffect(() => {
    getAllCommentHandle(id, 0, 10, alias);
  }, [id]);
  const isThumb = useThumb;
  const isTread = useTread;
  const getAllCommentHandle = (id: string, offset: number, limit: number, alias: string) => {
    getAllComment<IResponseType<IPage<IComment[]>>>(id, offset, limit, alias).then((data) => {
      if (data.status === 200) {
        setComment(data.data.list);
        setCommentCount(data.data.count);
      }
    });
  };
  const inpFocusHandle = () => {
    setIsFocus(true);
  };
  const inpBlurHandle = () => {
    // setIsFocus(false);
  };
  const inpChangeHandle = (e: FormEvent<HTMLInputElement>) => {
    setContent(e.currentTarget.value);
  };
  const cancelHandle = () => {
    setIsFocus(false);
    setContent('');
  };
  // 发表评论
  const publishHandle = () => {
    publishComment(id, alias, content).then((data) => {
      console.log(data);
      if (data.status === 200) {
        setContent('');
        setIsFocus(false);
        getAllCommentHandle(id, 0, 10, alias);
      }
    });
  };
  // 显示回复评论内容
  const showReply = (index: number) => {
    if (index === comIndex) {
      setComIndex(-1);
    } else {
      setComIndex(index);
    }
  };
  // 显示回复发布框
  const showReplyHandle = (index: number) => {
    if (index === replyIndex) {
      setReplyIndex(-1);
    } else {
      setReplyIndex(index);
    }
  };
  // 回复评论
  const publishReplyHandle = async (content: string, item: IComment) => {
    console.log(content, item);
    const result = await replyComment(item.id, content);
    if (result.status === 200) {
      getAllCommentHandle(id, 0, 10, alias);
    }
  };
  const thumbHandler = () => {
    getAllCommentHandle(id, 0, 10, alias);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const pageChange = (e: number) => {
    setCurrentPage(e);
    getAllCommentHandle(id, (e - 1) * 10, 10, alias);
  };

  const deleteCommentHandler = (item: IComment) => {
    console.log(item);
    deleteComment(item.id).then((res) => {
      if (res.status === 200) {
        message.success('删除成功');
        pageChange(1);
      }
    });
  };
  return (
    <CommentWrapper>
      <div className={`publish-outer ${isFocus ? 'publish-outer-start' : ''}`}>
        <div className="user-msg">
          <img src={user.avatarUrl} />
        </div>
        <div className="right-input">
          <div className={`input-container ${isFocus ? 'input-focus' : ''}`}>
            <input
              type={'text'}
              placeholder="添加评论..."
              value={content}
              onFocus={(e) => {
                inpFocusHandle();
              }}
              onBlur={(e) => {
                inpBlurHandle();
              }}
              onInput={(e) => {
                inpChangeHandle(e);
              }}
            />
          </div>
          {isFocus && (
            <div className="btn-controller">
              <button
                className="cancel"
                onClick={(e) => {
                  cancelHandle();
                }}
              >
                取消
              </button>
              <button
                className="confirm"
                disabled={content.length === 0}
                onClick={(e) => {
                  publishHandle();
                }}
              >
                评论
              </button>
            </div>
          )}
        </div>
      </div>
      <ul className="comment-list">
        {comment &&
          comment.length !== 0 &&
          comment.map((item, index) => {
            return (
              <li key={item.id}>
                <CommentItem
                  comment={item}
                  user={user}
                  index={index}
                  comIndex={comIndex}
                  replyIndex={replyIndex}
                  propsPublishReplyHandle={async (content, item) => {
                    await publishReplyHandle(content, item);
                  }}
                  propsShowReply={(index) => {
                    showReply(index);
                  }}
                  thumbHandler={() => {
                    thumbHandler();
                  }}
                  propsShowReplyHandle={(index) => {
                    showReplyHandle(index);
                  }}
                  delComment={() => {
                    deleteCommentHandler(item);
                  }}
                />
              </li>
            );
          })}
        {(!comment || (comment && comment.length === 0)) && (
          <EmptyHolder padding={200} msg={'暂无评论，快来发布您的第一条评论'} />
        )}
      </ul>
      {commentCount > 10 && (
        <div className="page-container">
          <Pagination
            defaultCurrent={1}
            current={currentPage}
            pageSize={10}
            total={commentCount}
            onChange={(e) => {
              pageChange(e);
            }}
          />
        </div>
      )}
    </CommentWrapper>
  );
};
export default memo(Comment);
