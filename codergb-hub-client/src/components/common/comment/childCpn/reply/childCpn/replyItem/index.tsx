import React, { memo, FC } from "react";
import { ReplyItemWrapper } from "./style";
import moment from "moment";
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";
import Publish from "../../../../../publish";
import { IComment } from "../../../../../../../types/comment/IComment";
import { IUserMsg } from "../../../../../../../types/user/IUserMsg";
import { useThumb, useTread } from "../../../../../../../hook/useThumb";
import {
  cancelThumb,
  cancelTread,
  thumb,
  tread,
} from "../../../../../../../network/thumb";
import { changeUserDetailAction } from "../../../../../../../views/login/store/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { Map } from "immutable";
import { ILogin } from "../../../../../../../types/login/ILogin";
import { Dispatch } from "redux";
interface IProps {
  reply: IComment;
  id: string;
  user: IUserMsg;
  replyIndex: number;
  index: number;
  propsShowReplyHandle: (index: number) => void;
  propsReplyReplyHandle: (content: string, item: IComment) => void;
  thubmHandler: () => void;
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
  } = props;
  const loginState = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(["loginReducer", "login"]) as ILogin;
  });
  const isThumb = useThumb("comment", reply.id);
  const isTread = useTread("comment", reply.id);
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
        const result = await cancelThumb(reply.id, "commentId");
        if (result.status === 200) {
          propThumbHandler();
        }
      } else {
        const result = await thumb(reply.id, "commentId");
        if (result.status === 200) {
          propThumbHandler();
        }
      }
      if (reply && reply.user && loginState && loginState.userMsg) {
        dispatch(changeUserDetailAction(loginState.userMsg.userId));
      }
    }
  };
  const treadHandle = async () => {
    if (reply) {
      if (!isTread) {
        const result = await tread(reply.id, "commentId");
        if (result.status === 200) {
          propThumbHandler();
        }
      } else {
        const result = await cancelTread(reply.id, "commentId");
        if (result.status === 200) {
          propThumbHandler();
        }
      }
      if (reply && reply.user && loginState && loginState.userMsg) {
        dispatch(changeUserDetailAction(loginState.userMsg.userId));
      }
    }
  };
  return (
    <ReplyItemWrapper>
      <div className="left-msg">
        <img src={reply.user.avatarUrl} />
      </div>
      <div className="right-msg">
        <div className="user-name-time">
          <span className="user-name">{reply.user.userName}</span>
          <span className="create-time">
            {moment(reply.createTime).locale("zh-CN").fromNow()}
          </span>
        </div>
        <div className="content">{reply.content}</div>
        {id &&
          typeof reply.reply === "object" &&
          reply.reply.hasOwnProperty("user") &&
          reply.reply.id !== id && (
            <div className="reply-for-name">
              @
              {reply.reply
                ? typeof reply.reply === "object" &&
                  reply.reply.hasOwnProperty("user")
                  ? reply.reply.user.userName
                  : ""
                : ""}
            </div>
          )}
        <div className="reply-controller-btn">
          <div className="thumb">
            {!isThumb && <LikeOutlined onClick={(e) => thumbHandle()} />}
            {isThumb && <LikeFilled onClick={(e) => thumbHandle()} />}
            <span className="thumb-count">{reply.thumb ?? 0}</span>
          </div>
          <div className="tread">
            {!isTread && <DislikeOutlined onClick={(e) => treadHandle()} />}
            {isTread && <DislikeFilled onClick={(e) => treadHandle()} />}
          </div>
          <div className="reply-label" onClick={(e) => showReplyHandle(index)}>
            回复
          </div>
        </div>
        {/*回复评论的回复*/}
        {index === replyIndex && (
          <div className="reply-reply">
            <Publish
              user={user}
              isShowAt={true}
              atUser={reply.user}
              publish={(content) => replyReplyHandle(content, reply)}
            />
          </div>
        )}
      </div>
    </ReplyItemWrapper>
  );
};
export default memo(ReplyItem);
