import React, {memo, FC, ReactElement, useState, ChangeEvent, useEffect,Suspense} from "react";
import {useNavigate} from "react-router";
import { Map } from "immutable";
import {NavListWrapper} from "./style";
import {HOME_PATH, mainMenu, MainMenuType, profileMenu, studioMenu, USER_PLAYLIST} from "../../constant/menu";
import {useSelector} from "react-redux";
import {ILogin} from "../../types/login/ILogin";
import UserIcon from "../../assets/html/user/userIcon";

import ImgUpload from "../common/imgUpload";
import {userUploadAvatar} from "../../network/user";
import {getUserPlaylist} from "../../network/playlist";
import {IResponseType} from "../../types/responseType";
import {IPage} from "../../types/IPage";
import {IPlaylist} from "../../types/playlist/IPlaylist";
import PlaylistIcon from "../../assets/html/playlist/playlistIcon";
import PlaylistShadowIcon from "../../assets/html/playlist/playlistShadowIcon";
import {routes} from "../../router";
import UserPlaylist from "../../views/user-playlist";
interface IProps{
  isHome:boolean
}
const NavList:FC<IProps>=(props):ReactElement=>{
  const { isHome } = props;
  const [isAvatarModalOpen,setIsAvatarModalOpen]=useState<boolean>(false);
  const [file,setFile]=useState<File|null>(null);
  const [homeMain,setHomeMain] = useState<MainMenuType[]>(profileMenu);
  //const [progress,setProgress]=useState<number>(0);
  const navigate = useNavigate();
  const login = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin
  })
  const [currentIndex,setCurrentIndex] = useState<number>(0);

  useEffect(()=>{
    if(isHome){
      getUserPlaylist<IResponseType<IPage<IPlaylist[]>>>(login.userMsg.userId,0,100000).then((data)=>{
        if(data.status === 200){
          if(data.data.list && data.data.list.length!==0){
            const list = data.data.list.map((item)=>{
              return {
                id:item.id,
                name:item.name,
                path:USER_PLAYLIST+"/"+item.id,
                icon:<PlaylistIcon/>,
                shadowIcon:<PlaylistShadowIcon/>
              }
            })
            if(list.length!==0){
              for(let item of list){
                const childrenRoute = routes.find((it)=>{
                  return it.path === HOME_PATH
                })
                if(childrenRoute && childrenRoute.children && childrenRoute.children.length!==0){
                  childrenRoute.children.push({
                    path:USER_PLAYLIST+"/"+item.id,
                    element:(
                        <Suspense>
                          <UserPlaylist id={item.id}/>
                        </Suspense>
                    )
                  })
                }
              }
              let newMenu = profileMenu.concat(list);
              setHomeMain(newMenu);
            }
          }
        }
      })
    }
  },[login.userMsg.userId])
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
                         realWidth={200}
                         fileSource={file}
                         aspectRatio={1}
                         handleOk={(file?:File)=>handleAvatarOk(file)}
                         handleCancel={()=>setIsAvatarModalOpen(false)}
                         uploadName={"avatar"}
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
            isHome && homeMain && homeMain && homeMain.map((item,index)=>{
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