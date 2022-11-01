import React, {memo, FC, ReactElement, useState, ChangeEvent} from "react";
import {useNavigate} from "react-router";
import { Map } from "immutable";
import {NavListWrapper} from "./style";
import {mainMenu, profileMenu, studioMenu} from "../../constant/menu";
import {useSelector} from "react-redux";
import {ILogin} from "../../types/login/ILogin";
import UserIcon from "../../assets/html/user/userIcon";
import AvatarUpload from "../../views/profile/pages/customize/childCpn/brand/childCpn/avatarUpload";
import {Modal, Progress} from "antd";
import ImgUpload from "../common/imgUpload";
import {userUploadAvatar} from "../../network/user";

interface IProps{
  isHome:boolean
}
const NavList:FC<IProps>=(props):ReactElement=>{
  const { isHome } = props;
  const [isAvatarModalOpen,setIsAvatarModalOpen]=useState<boolean>(false);
  const [file,setFile]=useState<File|null>(null);
  //const [progress,setProgress]=useState<number>(0);
  const navigate = useNavigate();
  const login = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin
  })
  const [currentIndex,setCurrentIndex] = useState<number>(0);
  const navClickHandle=(item:{name:string,path:string},index:number)=>{
    document.title = item.name;
    setCurrentIndex(index)
    navigate(item.path,{
      replace:true
    })
  }
  const fileChange=(e:ChangeEvent<HTMLInputElement>)=>{
    if(e.currentTarget.files && e.currentTarget.files.length!==0){
      const file = e.currentTarget.files[0];
      setFile(file)
      setIsAvatarModalOpen(true);
    }
  }
  const handleAvatarOk=(f?:File)=>{
    setIsAvatarModalOpen(false);
  }
  const handleAvatarCancel=()=>{

  }
  return (
      <NavListWrapper>
        {
          (!isHome) && <div className="user-avatar">
            <span>{login.userMsg.userName}</span>
            <span className={"label"}>您的频道</span>
            <div className="img-container" title={login.userMsg && (!login.userMsg.avatarUrl) ? "上传头像":""}>
              {
                login.userMsg && login.userMsg.avatarUrl &&<img src={login.userMsg.avatarUrl} alt={'avatar'}/>
              }
              {
                login.userMsg && (!login.userMsg.avatarUrl) &&<UserIcon/>
              }
              {
                login.userMsg && (!login.userMsg.avatarUrl) && <input type={'file'}
                                                                      onChange={e=>fileChange(e)}
                                                                      className="upload-avatar-icon"/>
              }
              <ImgUpload isShow={isAvatarModalOpen}
                         isCustom={true}
                         fileSource={file}
                         handleOk={(file?:File)=>handleAvatarOk(file)}
                         network={userUploadAvatar} />
            </div>
          </div>
        }
        <ul className={`main-menu ${isHome? '' : 'fold'}`}>
          {
            isHome && mainMenu && mainMenu.length!==0 && mainMenu.map((item,index)=>{
              return (
                  <li key={item.name} onClick={e=>navClickHandle(item,index)}
                      className={currentIndex === index? 'active':''}>
                    <div className="nav-icon">
                      {currentIndex === index?item.shadowIcon : item.icon}
                    </div>
                    <div className="nav-name">{item.name}</div>
                  </li>
              )
            })
          }
          {
            (!isHome) && studioMenu && studioMenu.length!==0 && studioMenu.map((item,index)=>{
              return (
                  <li key={item.name} onClick={e=>navClickHandle(item,index)}
                      className={currentIndex === index? 'active':''}>
                    <div className="nav-icon">
                      {currentIndex === index?item.shadowIcon : item.icon}
                    </div>
                    <div className="nav-name">{item.name}</div>
                  </li>
              )
            })
          }
        </ul>
        <ul className="profile-menu">
          {
            isHome && profileMenu && profileMenu && profileMenu.map((item,index)=>{
              return (
                  <li key={item.name} onClick={e=>navClickHandle(item,index+mainMenu.length)}>
                    <div className="nav-icon">
                      {currentIndex === index+mainMenu.length?item.shadowIcon : item.icon}
                    </div>
                    <div className="nav-name">{item.name}</div>
                  </li>
              )
            })
          }
        </ul>
      </NavListWrapper>
  )
}
export default memo(NavList);