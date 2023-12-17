import React, {
  memo,
  FC,
  useState,
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { Dispatch } from "redux";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { VideoItemWrapper } from "./style";
import {
  LikeOutlined,
  FileAddOutlined,
  DislikeOutlined,
  DislikeFilled,
  LikeFilled,
  MessageFilled,
  CloseOutlined,
} from "@ant-design/icons";
import { changeUserDetailAction } from "../../../login/store/actionCreators";
import Comment from "../../../../components/common/comment";
import { IVideo } from "../../../../types/video/IVideo";
import { useLoginMsg } from "../../../../hook/useLoginMsg";
import { useThumb, useTread } from "../../../../hook/useThumb";
import {
  cancelThumb,
  cancelTread,
  thumb,
  tread,
} from "../../../../network/thumb";

interface IProps {
  video: IVideo;
  ref: Ref<IVideoItem>;
}
interface IVideoItem {
  changeShow: () => void;
}
const VideItem: FC<IProps> = forwardRef<IVideoItem, IProps>(
  (props, propsRef) => {
    const { video } = props;
    const loginState = useLoginMsg();

    const navigate = useNavigate();
    const isThumb = useThumb("video", video.id);
    const isTread = useTread("video", video.id);

    const dispatch = useDispatch<Dispatch<any>>();

    const [isShowComment, setIsShowComment] = useState<boolean>(false);
    const showComment = () => {
      setIsShowComment(true);
    };

    const changeShow = () => {
      setIsShowComment(false);
    };
    useImperativeHandle<IVideoItem, IVideoItem>(propsRef, () => {
      return {
        changeShow: changeShow,
      };
    });

    const thumbClick = async () => {
      if (video) {
        if (isThumb) {
          const result = await cancelThumb(video.id, "vId");
          if (result.status === 200) {
            console.log(result.data);
          }
        } else {
          const result = await thumb(video.id, "vId");
          if (result.status === 200) {
            console.log(result.data);
          }
        }
        if (loginState && loginState.userMsg) {
          dispatch(changeUserDetailAction(loginState.userMsg.userId));
        }
      }
    };
    const threadHandler = async () => {
      if (video) {
        if (!isTread) {
          const result = await tread(video.id, "vId");
          if (result.status === 200) {
            console.log(result.data);
          }
        } else {
          const result = await cancelTread(video.id, "vId");
          if (result.status === 200) {
            console.log(result.data);
          }
        }
        if (loginState && loginState.userMsg) {
          dispatch(changeUserDetailAction(loginState.userMsg.userId));
        }
      }
    };
    const userRouter = () => {
      if (video) {
        navigate("/home/userDetail", {
          state: {
            userId: video.user.userId,
          },
        });
      }
    };

    const commentRef = useRef<HTMLDivElement>(null);

    return (
      <VideoItemWrapper>
        <div className="container">
          <img src={video.picUrl} />
          <div className="top-level"></div>
          <div className="bottom-level">
            <div className="user">
              <div className="img-container" onClick={() => userRouter()}>
                <img src={video.user.avatarUrl} />
              </div>
              <div className="user-name">{video.user.userName}</div>
            </div>
            <div className="title">{video.name}</div>
          </div>
        </div>

        <div className={`control ${isShowComment ? "move-control" : ""}`}>
          <ul className="control-list">
            <li className="item">
              <div className="icon" onClick={() => thumbClick()}>
                <LikeFilled
                  className={`thumb-icon ${isThumb ? "thumb-active" : ""}`}
                />
              </div>
              <div className="label">134万</div>
            </li>
            <li className="item">
              <div className="icon" onClick={() => threadHandler()}>
                <DislikeFilled
                  className={`un-thumb-icon ${
                    isTread ? "un-thumb-active" : ""
                  }`}
                />
              </div>
              <div className="label">踩</div>
            </li>
            <li className="item">
              <div className="icon" onClick={() => showComment()}>
                <MessageFilled className="msg-icon" />
              </div>
              <div className="label">1233</div>
            </li>
          </ul>
        </div>
        <div
          className={`comment-container ${isShowComment ? "show-comment" : ""}`}
          ref={commentRef}
        >
          <div className="close-handler">
            <CloseOutlined
              className="close-outlined"
              onClick={() => setIsShowComment(false)}
            />
          </div>
          {video && (
            <Comment alias="vId" id={video.id} user={loginState.userMsg} />
          )}
        </div>
      </VideoItemWrapper>
    );
  }
);
export default memo(VideItem);
