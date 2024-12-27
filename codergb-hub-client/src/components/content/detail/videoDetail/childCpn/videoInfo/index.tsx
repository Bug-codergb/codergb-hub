import React, { memo, type FC, ReactElement, MouseEvent, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { type Map } from 'immutable';
import Add from '../../../../../content/add/index';
import { useDispatch, useSelector } from 'react-redux';
import {
  LikeOutlined,
  FileAddOutlined,
  DislikeOutlined,
  DislikeFilled,
  LikeFilled,
  EyeOutlined
} from '@ant-design/icons';
import { VideoInfoWrapper } from './style';
import { type IVideo } from '../../../../../../types/video/IVideo';
import { type ILogin } from '../../../../../../types/login/ILogin';
import { cancelSub, getUserSubCount, sub } from '../../../../../../network/subscriber';
import {
  cancelThumb,
  cancelTread,
  getVideoThumb,
  thumb,
  tread
} from '../../../../../../network/thumb';
import { useSub } from '../../../../../../hook/useSub';
import { changeUserDetailAction } from '../../../../../../views/login/store/asyncThunk';
import { type Dispatch } from 'redux';
import { useThumb, useTread } from '../../../../../../hook/useThumb';
import { type IUserMsg } from '../../../../../../types/user/IUserMsg';
import { type IResponseType } from '../../../../../../types/responseType';
import { type IAddType, ADD_PLAYLIST } from '../../../../../../constant/addList';
import videoDetail from '../..';
import { useLoginMsg } from '../../../../../../hook/useLoginMsg';
interface IAdd {
  liClick: (item: IAddType) => void;
}
interface IProps {
  videoInfo?: IVideo;
  id: string;
  playCount: string | number;
}
const VideoInfo: FC<IProps> = (props) => {
  const { videoInfo, id: videoId, playCount } = props;
  const loginState = useLoginMsg();
  const isSub = useSub(videoInfo?.user.userId);
  const isThumb = useThumb('video', videoInfo?.id);
  const isTread = useTread('video', videoInfo?.id);
  const dispatch = useDispatch<Dispatch<any>>();
  const addRef = useRef<IAdd | null>(null);
  const [subCount, setSubCount] = useState<number>(0);
  useEffect(() => {
    if (videoInfo && videoInfo.user && videoInfo.user.userId) {
      getUserSubCount<IResponseType<number>>(videoInfo.user.userId).then((res) => {
        if (res.status === 200) {
          setSubCount(res.data);
        }
      });
    }
  }, [videoInfo?.user.userId]);

  const [videoThumb, setVideoThumb] = useState<number>(0);
  const getVideoThumbReq = (videoInfo: IVideo) => {
    getVideoThumb<IResponseType<{ count: number }>>(videoInfo.id).then((res) => {
      if (res.status === 200) {
        setVideoThumb(res.data.count);
      }
    });
  };
  useEffect(() => {
    if (videoInfo) {
      getVideoThumbReq(videoInfo);
    }
  }, [videoInfo, videoId]);
  const subHandle = async () => {
    if (videoInfo?.user && !isSub) {
      const result = await sub(videoInfo?.user.userId);
      if (result.status === 200) {
        console.log(result.data);
      }
    } else if (videoInfo?.user && isSub) {
      const result = await cancelSub(videoInfo.user.userId);
      if (result.status === 200) {
        console.log(result.data);
      }
    }
    if (videoInfo?.user && loginState && loginState.userMsg) {
      dispatch(changeUserDetailAction({ userId: loginState.userMsg.userId, setMsg: false }));
    }
    if (videoInfo) {
      getUserSubCount<IResponseType<number>>(videoInfo.user.userId).then((res) => {
        if (res.status === 200) {
          setSubCount(res.data);
        }
      });
    }
  };
  const thumbHandle = async () => {
    if (videoInfo) {
      console.log(isThumb);
      if (isThumb) {
        const result = await cancelThumb(videoInfo.id, 'vId');
        if (result.status === 200) {
          console.log(result.data);
        }
      } else {
        const result = await thumb(videoInfo.id, 'vId');
        if (result.status === 200) {
          console.log(result.data);
        }
      }
      if (videoInfo && videoInfo.user && loginState && loginState.userMsg) {
        dispatch(changeUserDetailAction({ userId: loginState.userMsg.userId, setMsg: false }));
      }
      if (videoInfo) {
        getVideoThumbReq(videoInfo);
      }
    }
  };
  const treadHandle = async () => {
    if (videoInfo) {
      if (!isTread) {
        const result = await tread(videoInfo.id, 'vId');
        if (result.status === 200) {
          console.log(result.data);
        }
      } else {
        const result = await cancelTread(videoInfo.id, 'vId');
        if (result.status === 200) {
          console.log(result.data);
        }
      }
      if (videoInfo && videoInfo.user && loginState && loginState.userMsg) {
        dispatch(changeUserDetailAction({ userId: loginState.userMsg.userId, setMsg: false }));
      }
      if (videoInfo) {
        getVideoThumbReq(videoInfo);
      }
    }
  };
  const navigate = useNavigate();
  const userRouter = (user: IUserMsg) => {
    if (user) {
      navigate('/home/userDetail', {
        state: {
          userId: user.userId
        },
        replace: false
      });
    }
  };
  const openChangeHandle = () => {
    if (addRef && addRef.current) {
      addRef.current.liClick({
        icon: '',
        name: ADD_PLAYLIST
      });
    }
  };
  return (
    <VideoInfoWrapper>
      <p className="video-title text-nowrap-mul-line">{videoInfo?.name}</p>
      <ul className="tag-list">
        {videoInfo?.tag &&
          videoInfo.tag.length !== 0 &&
          videoInfo.tag.map((item, index) => {
            return (
              <li key={item.id}>
                {index == 0 && <span className="icon">#</span>}
                <span className="name">{item.name}</span>
                <span className="icon">#</span>
              </li>
            );
          })}
      </ul>
      <div className="info">
        <div className="left-content">
          <div className="user-msg-container">
            {videoInfo && (
              <div
                className="img-container"
                onClick={(e) => {
                  userRouter(videoInfo?.user);
                }}
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
            <div
              className="sub-btn"
              onClick={async (e) => {
                await subHandle();
              }}
            >
              {isSub ? '已订阅' : '订阅'}
            </div>
          )}
        </div>
        <div className="right-content">
          <div
            className="collection"
            onClick={() => {
              openChangeHandle();
            }}
          >
            <EyeOutlined />
            <span className="label">{playCount}</span>
          </div>
          <div className="thumb">
            <div className="thumb-inner">
              {videoInfo && !isThumb && (
                <LikeOutlined
                  className={`thumb-icon`}
                  onClick={async (e) => {
                    await thumbHandle();
                  }}
                />
              )}
              {videoInfo && isThumb && (
                <LikeFilled
                  className={`thumb-icon`}
                  onClick={async (e) => {
                    await thumbHandle();
                  }}
                />
              )}
              <span className="label">{videoThumb}</span>
            </div>
            <div className="tread">
              {videoInfo && !isTread && (
                <DislikeOutlined
                  className="tread-icon"
                  onClick={async (e) => {
                    await treadHandle();
                  }}
                />
              )}
              {videoInfo && isTread && (
                <DislikeFilled
                  className="tread-icon"
                  onClick={async (e) => {
                    await treadHandle();
                  }}
                />
              )}
            </div>
          </div>
          <div
            className="collection"
            onClick={() => {
              openChangeHandle();
            }}
          >
            <FileAddOutlined className={'collection-icon'} />
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
