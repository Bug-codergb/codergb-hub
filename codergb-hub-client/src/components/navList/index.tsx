import React, {memo, FC, ReactElement, useState} from "react";
import {useNavigate} from "react-router";
import {NavListWrapper} from "./style";
import {mainMenu,profileMenu} from "../../constant/menu";
const NavList:FC=()=>{
  const navigate = useNavigate();
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
        <ul className="main-menu">
          {
            mainMenu && mainMenu.length!==0 && mainMenu.map((item,index)=>{
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
            profileMenu && profileMenu && profileMenu.map((item,index)=>{
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