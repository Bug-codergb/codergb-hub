import React, {
  memo,
  type FC,
  type ReactElement,
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  type FormEvent,
  type KeyboardEvent
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { type Map } from 'immutable';
import { Dropdown, Modal, Badge, Button, message } from 'antd';
import { SearchOutlined, VideoCameraOutlined, MailOutlined } from '@ant-design/icons';
import { HeaderWrapper, LeftContent, RightContent, CenterContent } from './style';
import logo from '../../assets/img/new-logo.png';
import UploadVideo from './childCpn/uploadVideo';
import Fold from '../../assets/html/fold';
import UserIcon from '../../assets/html/user/userIcon';
import { useSelector } from 'react-redux';
import { type ILogin } from '../../types/login/ILogin';
import Profile from './childCpn/profile';
import { createVideo } from '../../network/video';
import { type IUploadVideo } from '../../types/imperative/uploadVideo';
import { debounce } from '../../utils/debounce';
import { getVideoDuration } from '../../utils/video';
import { HOME_RECOMMEND } from '../../constant/routes';
import { getAllNotify } from '../../network/notify';
import { type IResponseType } from '../../types/responseType';
import { type IPage } from '../../types/IPage';
import { type INotify } from '../../types/message';
const Header: FC = (): ReactElement => {
  const [isModalOpen, setIsModelOpen] = useState<boolean>(false);
  const [searchContent, setSearchContent] = useState<string>('');
  const [keyIndex, setKeyIndex] = useState<number>(0);
  const loginState = useSelector<Map<string, ILogin>, ILogin>((state) => {
    return state.getIn(['loginReducer', 'login']) as ILogin;
  });
  const navigate = useNavigate();
  const location = useLocation();
  const videoRef = useRef<IUploadVideo>(null);
  const showDialogHandle = () => {
    window.videoInfo = undefined;
    window.videoWebsocket = undefined;
    setIsModelOpen(true);
  };
  useEffect(() => {
    if (videoRef.current && videoRef.current.videoId && videoRef.current.imgId) {
      const { videoId, title, desc, playlist, tag, cate, imgId, file } = videoRef.current;
      if (file) {
        try {
          getVideoDuration(file).then((data) => {
            createVideo(videoId, title, desc, imgId, playlist, tag, cate, data).then((data) => {
              if (data.status === 200) {
                setIsModelOpen(false);
              }
            });
          });
        } catch (e) {}
      } else {
        message.warning('请完善视频信息');
      }
    }
  }, [keyIndex]);
  const backUpload = () => {
    const { title, desc, playlist, tag, cate, imgId, file, imgURL } = videoRef.current;
    if (
      title.trim().length === 0 ||
      desc.trim().length === 0 ||
      playlist.trim().length === 0 ||
      !imgId ||
      imgURL.trim().length === 0 ||
      !cate ||
      tag.length === 0
    ) {
      window.videoInfo = undefined;
      message.destroy();
      message.warning('请完善视频信息');
    } else {
      getVideoDuration(file)
        .then((data) => {
          window.videoInfo = {
            ...videoRef.current,
            dt: data
          };
          setIsModelOpen(false);
        })
        .catch(() => {
          message.warning('文件异常');
        });
    }
  };

  const handleOk = async (): void => {
    setKeyIndex(keyIndex + 1);
  };
  const handleCancel = (): void => {
    setIsModelOpen(false);
  };
  const login = (): void => {
    navigate('/login', {
      replace: false
    });
  };
  const homeRouter = debounce(
    () => {
      if (location.pathname === HOME_RECOMMEND) {
      } else {
        navigate('/home', {
          replace: false
        });
      }
    },
    100,
    false
  );
  const searchInp = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget && e.currentTarget.value !== undefined && e.currentTarget.value !== null) {
      setSearchContent(e.currentTarget.value);
    }
  };
  const searchRouter = () => {
    if (searchContent.trim().length !== 0) {
      navigate('/home/search', {
        replace: false,
        state: {
          keyword: searchContent
        }
      });
    }
  };
  const searchKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'enter' || e.code === 'Enter') {
      searchRouter();
    }
  };

  const [unReadCount, setUnReadCount] = useState<number>(0);
  useEffect(() => {
    getAllNotify<IResponseType<IPage<INotify[]>>>(loginState.userMsg.userId, 0, 1, 0).then(
      (res) => {
        if (res.status === 200) {
          setUnReadCount(res.data.count);
        }
      }
    );
  }, []);
  const messageRouter = () => {
    navigate('/studio/message', {
      replace: false
    });
  };
  return (
    <HeaderWrapper>
      <LeftContent>
        <Fold />
        <div className="logo-outer" onClick={(e) => homeRouter()}>
          <img src={logo} alt={'logo'} />
        </div>
      </LeftContent>
      <CenterContent>
        <div className="search-outer">
          <input
            placeholder="搜索"
            value={searchContent}
            maxLength={30}
            onKeyUp={(e) => {
              searchKeyDownHandler(e);
            }}
            onInput={(e) => {
              searchInp(e);
            }}
          />
          <div
            className="search-icon"
            onClick={(e) => {
              searchRouter();
            }}
          >
            <SearchOutlined />
          </div>
        </div>
      </CenterContent>
      <RightContent>
        {/* 视频上传按钮 */}
        <div
          className="upload"
          onClick={(e) => {
            showDialogHandle();
          }}
        >
          <VideoCameraOutlined />
        </div>
        <div className="tip">
          <Badge
            onClick={() => {
              messageRouter();
            }}
            count={unReadCount}
            size="default"
            offset={[4, -1]}
          >
            <MailOutlined />
          </Badge>
        </div>
        <Modal
          title="视频上传"
          cancelText={'取消'}
          okText={'确定'}
          open={isModalOpen}
          onOk={handleOk}
          maskClosable={false}
          destroyOnClose={true}
          width={'74%'}
          onCancel={handleCancel}
          closable={false}
          footer={
            <div>
              <Button type="default" onClick={handleCancel}>
                取消
              </Button>
              <Button
                className="g-upload-backgrounds"
                style={{ background: '#7ec050', color: '#ffffff' }}
                onClick={() => {
                  backUpload();
                }}
              >
                后台上传
              </Button>
              <Button type="primary" onClick={handleOk}>
                确定
              </Button>
            </div>
          }
        >
          {isModalOpen && <UploadVideo keyIndex={keyIndex} ref={videoRef} />}
        </Modal>
        <div className="user">
          {loginState && loginState.loginType === 0 && (
            <div
              className="logout"
              onClick={(e) => {
                login();
              }}
            >
              <UserIcon />
              <span className="label">登录</span>
            </div>
          )}
          {loginState && loginState.loginType === 1 && (
            <Dropdown
              overlayClassName={'profile-drop-style'}
              trigger={['click']}
              overlay={<Profile />}
            >
              <div className="login-status">
                {loginState && loginState.userMsg && loginState.userMsg.avatarUrl && (
                  <img
                    src={`${loginState.userMsg.avatarUrl}?code=${new Date().getTime()}`}
                    alt="avatar"
                  />
                )}
                {loginState && loginState.userMsg && !loginState.userMsg.avatarUrl && (
                  <div className="no-avatar-container">
                    <UserIcon />
                  </div>
                )}
              </div>
            </Dropdown>
          )}
        </div>
      </RightContent>
    </HeaderWrapper>
  );
};
export default memo(Header);
