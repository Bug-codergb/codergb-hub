import React, {
  memo,
  FC,
  ReactElement,
  MouseEvent,
  useEffect,
  useState,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import { Map } from "immutable";
import Add from "../../../../../content/add/index";
import { useDispatch, useSelector } from "react-redux";
import {
  LikeOutlined,
  FileAddOutlined,
  DislikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import { VideoInfoWrapper } from "./style";
import { IVideo } from "../../../../../../types/video/IVideo";
import { ILogin } from "../../../../../../types/login/ILogin";
import {
  cancelSub,
  getUserSubCount,
  sub,
} from "../../../../../../network/subscriber";
import {
  cancelThumb,
  cancelTread,
  thumb,
  tread,
} from "../../../../../../network/thumb";
import { useSub } from "../../../../../../hook/useSub";
import { changeUserDetailAction } from "../../../../../../views/login/store/actionCreators";
import { Dispatch } from "redux";
import { useThumb, useTread } from "../../../../../../hook/useThumb";
import { IUserMsg } from "../../../../../../types/user/IUserMsg";
import { IResponseType } from "../../../../../../types/responseType";
import { IAddType } from "../../../../../../constant/addList";
import { ADD_PLAYLIST } from "../../../../../../constant/addList";
interface IAdd {
  liClick: (item: IAddType) => void;
}
interface IProps {
  videoInfo?: IVideo;
}
const VideoInfo: FC<IProps> = (props) => {
  const { videoInfo } = props;
  const loginState = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(["loginReducer", "login"]) as ILogin;
  });
  const isSub = useSub(videoInfo?.user.userId);
  const isThumb = useThumb("video", videoInfo?.id);
  const isTread = useTread("video", videoInfo?.id);
  const dispatch = useDispatch<Dispatch<any>>();
  const addRef = useRef<IAdd | null>(null);
  const [subCount, setSubCount] = useState<number>(0);
  useEffect(() => {
    if (videoInfo) {
      getUserSubCount<IResponseType<number>>(videoInfo.user.userId).then(
        (res) => {
          if (res.status === 200) {
            setSubCount(res.data);
          }
        }
      );
    }
  }, [videoInfo]);
  const subHandle = async () => {
    if (videoInfo && videoInfo.user && !isSub) {
      const result = await sub(videoInfo?.user.userId);
      if (result.status === 200) {
        console.log(result.data);
      }
    } else if (videoInfo && videoInfo.user && isSub) {
      const result = await cancelSub(videoInfo.user.userId);
      if (result.status === 200) {
        console.log(result.data);
      }
    }
    if (videoInfo && videoInfo.user && loginState && loginState.userMsg) {
      dispatch(changeUserDetailAction(loginState.userMsg.userId));
    }
    if (videoInfo) {
      getUserSubCount<IResponseType<number>>(videoInfo.user.userId).then(
        (res) => {
          if (res.status === 200) {
            setSubCount(res.data);
          }
        }
      );
    }
  };
  const thumbHandle = async () => {
    if (videoInfo) {
      console.log(isThumb);
      if (isThumb) {
        const result = await cancelThumb(videoInfo.id, "vId");
        if (result.status === 200) {
          console.log(result.data);
        }
      } else {
        const result = await thumb(videoInfo.id, "vId");
        if (result.status === 200) {
          console.log(result.data);
        }
      }
      if (videoInfo && videoInfo.user && loginState && loginState.userMsg) {
        dispatch(changeUserDetailAction(loginState.userMsg.userId));
      }
    }
  };
  const treadHandle = async () => {
    if (videoInfo) {
      if (!isTread) {
        const result = await tread(videoInfo.id, "vId");
        if (result.status === 200) {
          console.log(result.data);
        }
      } else {
        const result = await cancelTread(videoInfo.id, "vId");
        if (result.status === 200) {
          console.log(result.data);
        }
      }
      if (videoInfo && videoInfo.user && loginState && loginState.userMsg) {
        dispatch(changeUserDetailAction(loginState.userMsg.userId));
      }
    }
  };
  const navigate = useNavigate();
  const userRouter = (user: IUserMsg) => {
    if (user) {
      navigate("/home/userDetail", {
        state: {
          userId: user.userId,
        },
        replace: false,
      });
    }
  };
  const openChangeHandle = () => {
    if (addRef && addRef.current) {
      addRef.current.liClick({
        icon: "",
        name: ADD_PLAYLIST,
      });
    }
  };
  return (
    <VideoInfoWrapper>
      <p className="video-title text-nowrap-mul-line">{videoInfo?.name}</p>
      <div className="info">
        <div className="left-content">
          <div className="user-msg-container">
            {videoInfo && (
              <div
                className="img-container"
                onClick={(e) => userRouter(videoInfo?.user)}
              >
                <img src={videoInfo?.user.avatarUrl} />
              </div>
            )}
            <div className="right-msg">
              <p className="user-name">{videoInfo?.user.userName}</p>
              <p className="sub-counter">{subCount}位订阅者</p>
            </div>
          </div>
          {videoInfo && loginState.userMsg.userId !== videoInfo.user.userId && (
            <div className="sub-btn" onClick={(e) => subHandle()}>
              {isSub ? "已订阅" : "订阅"}
            </div>
          )}
        </div>
        <div className="right-content">
          <div className="thumb">
            <div className="thumb-inner">
              {videoInfo && !isThumb && (
                <LikeOutlined
                  className={`thumb-icon`}
                  onClick={(e) => thumbHandle()}
                />
              )}
              {videoInfo && isThumb && (
                <LikeFilled
                  className={`thumb-icon`}
                  onClick={(e) => thumbHandle()}
                />
              )}
              <span className="label">14万</span>
            </div>
            <div className="tread">
              {videoInfo && !isTread && (
                <DislikeOutlined
                  className="tread-icon"
                  onClick={(e) => treadHandle()}
                />
              )}
              {videoInfo && isTread && (
                <DislikeFilled
                  className="tread-icon"
                  onClick={(e) => treadHandle()}
                />
              )}
            </div>
          </div>
          <div className="collection" onClick={() => openChangeHandle()}>
            <FileAddOutlined className={"collection-icon"} />
            <span className="label">保存</span>
          </div>
        </div>
      </div>
      <div className="desc">{videoInfo?.description}</div>
      {videoInfo && <Add id={videoInfo.id} ref={addRef} />}
    </VideoInfoWrapper>
  );
};
export default memo(VideoInfo);
