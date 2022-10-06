import React, {memo, FC, ReactElement, useState} from "react";
import { Modal } from 'antd';
import {MenuUnfoldOutlined,
  SearchOutlined,
  VideoCameraOutlined
  ,MailOutlined,
  UserOutlined} from '@ant-design/icons';
import {
  HeaderWrapper,
  LeftContent,
  RightContent,
  CenterContent
} from "./style";
import logo from "../../assets/img/logo.png"
import UploadVideo from "./childCpn/uploadVideo";
import Fold from "../../assets/html/fold";
const Header:FC=():ReactElement=>{
  const [isModalOpen,setIsModelOpen] = useState<boolean>(false);
  const showDialogHandle=()=>{
    setIsModelOpen(true);
  }
  const handleOk=()=>{
    setIsModelOpen(false);
  }
  const handleCancel=()=>{
    setIsModelOpen(false);
  }
  return (
      <HeaderWrapper>
        <LeftContent>
          <Fold/>
          <div className="logo-outer">
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
                   width={'60%'}
                   onCancel={handleCancel}>
              <UploadVideo/>
            </Modal>
          </div>
          <div className="user">
            <UserOutlined />
          </div>
        </RightContent>
      </HeaderWrapper>
  )
}
export default memo(Header)