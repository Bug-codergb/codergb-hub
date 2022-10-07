import React, {memo, FC, ReactElement, useState} from "react";
import {useNavigate} from "react-router";
import { Map } from "immutable";
import {NavListWrapper} from "./style";
import {mainMenu, profileMenu, studioMenu} from "../../constant/menu";
import {useSelector} from "react-redux";
import {ILogin} from "../../types/login/ILogin";

interface IProps{
  isHome:boolean
}
const NavList:FC<IProps>=(props):ReactElement=>{
  const { isHome } = props;
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
  return (
      <NavListWrapper>
        {
          (!isHome) && <div className="user-avatar">
            <span>{login.userMsg.userName}</span>
            <span className={"label"}>您的频道</span>
            <div className="img-container">
              <img src={login.userMsg.avatarUrl} alt={'avatar'}/>
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