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
import { Dropdown, Modal, Badge } from 'antd';
import { SearchOutlined, VideoCameraOutlined, MailOutlined } from '@ant-design/icons';
import { HeaderWrapper, LeftContent, RightContent, CenterContent } from './style';
import logo from '../../assets/img/logo.png';
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
    setIsModelOpen(true);
  };
  useEffect(() => {
    if (videoRef.current && videoRef.current.videoId && videoRef.current.imgId) {
      const { videoId, title, desc, playlist, tag, cate, imgId, file } = videoRef.current;
      if (file) {
        try {
          getVideoDuration(file).then((data) => {
            createVideo(videoId, title, desc, imgId, playlist, tag, cate, data).then((data) => {
              if (data.status == 200) {
                console.log(data.data);
                setIsModelOpen(false);
              }
            });
          });
        } catch (e) {}
      }
    }
  }, [keyIndex]);
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
          <Badge count={100} size="default" offset={[4, -1]}>
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
                  <img src={loginState.userMsg.avatarUrl} alt="avatar" />
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
