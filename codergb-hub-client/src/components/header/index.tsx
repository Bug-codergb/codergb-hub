import React, {memo, FC, ReactElement, useState,useRef} from "react";
import { useNavigate } from "react-router-dom";
import {Map} from "immutable";
import {Dropdown, Modal} from 'antd';
import {
  SearchOutlined,
  VideoCameraOutlined,
  MailOutlined} from '@ant-design/icons';
import {
  HeaderWrapper,
  LeftContent,
  RightContent,
  CenterContent
} from "./style";
import logo from "../../assets/img/logo.png"
import UploadVideo from "./childCpn/uploadVideo";
import Fold from "../../assets/html/fold";
import UserIcon from "../../assets/html/user/userIcon";
import {useSelector} from "react-redux";
import {ILogin} from "../../types/login/ILogin";
import Profile from "./childCpn/profile";
import {createVideo} from "../../network/video";
const Header:FC=():ReactElement=>{
  const [isModalOpen,setIsModelOpen] = useState<boolean>(false);
  const loginState = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin;
  })
  const navigate = useNavigate();
  const videoRef = useRef<any>(null);
  const showDialogHandle=()=>{
    setIsModelOpen(true);
  }
  const handleOk=async ()=>{
    console.log(videoRef.current);
    if(videoRef.current && videoRef.current.videoId && videoRef.current.imgId){
      const {
        videoId,
        title,
        desc,
        playlist,
        tag,
        cate,
        imgId
      }=videoRef.current;
      const result = await createVideo(videoId, title, desc,imgId, playlist, tag, cate,);
      if(result.status==200){
        console.log(result.data);
        setIsModelOpen(false);
      }
    }
    //setIsModelOpen(false);
  }
  const handleCancel=()=>{
    setIsModelOpen(false);
  }
  const login=()=>{
    navigate("/login",{
      replace:false
    })
  }
  const homeRouter=()=>{
    navigate("/home",{
      replace:false
    })
  }
  return (
      <HeaderWrapper>
        <LeftContent>
          <Fold/>
          <div className="logo-outer" onClick={e=>homeRouter()}>
            <img src={logo} alt={'logo'}/>
          </div>
        </LeftContent>
        <CenterContent>
          <div className="search-outer">
            <input placeholder="搜索"/>
            <div className="search-icon">
              <SearchOutlined />
            </div>
          </div>
        </CenterContent>
        <RightContent>
          <div className="upload" onClick={e => showDialogHandle()}>
            <VideoCameraOutlined />
          </div>
          <div className="tip">
            <MailOutlined />
            <Modal title="视频上传"
                   cancelText={"取消"}
                   okText={"确定"}
                   open={isModalOpen}
                   onOk={handleOk}
                   maskClosable={false}
                   destroyOnClose={true}
                   width={'70%'}
                   onCancel={handleCancel}>
              {
                isModalOpen && <UploadVideo
                    // @ts-ignore
                    ref={videoRef}/>
              }
            </Modal>
          </div>
          <div className="user">
            {
              (loginState && loginState.loginType===0) && <div className="logout" onClick={e=>login()}>
                <UserIcon/>
                <span className="label">登录</span>
              </div>
            }
            {
              loginState && loginState.loginType === 1 && <Dropdown overlayClassName={'profile-drop-style'} trigger={['click']} overlay={<Profile/>}>
                <div className="login-status">
                  {
                    loginState && loginState.userMsg && loginState.userMsg.avatarUrl &&
                    <img src={loginState.userMsg.avatarUrl} alt="avatar"/>
                  }
                  {
                    loginState && loginState.userMsg && (!loginState.userMsg.avatarUrl)&&<div className="no-avatar-container">
                      <UserIcon/>
                    </div>
                  }
              </div>
              </Dropdown>
            }
          </div>
        </RightContent>
      </HeaderWrapper>
  )
}
export default memo(Header)