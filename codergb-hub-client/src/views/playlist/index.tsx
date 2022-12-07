import React, {memo, FC, ReactElement, useState, useEffect} from "react";
import {Map} from "immutable";
import {
  PlaylistWrapper,
  LeftContainer,
  RightContainer
} from "./style"
import {ILater} from "../../types/later/ILater";
import {getUserLater} from "../../network/later";
import {IResponseType} from "../../types/responseType";
import {IPage} from "../../types/IPage";
import {useSelector} from "react-redux";
import {ILogin} from "../../types/login/ILogin";
const Playlist:FC=():ReactElement=>{
  const [userLater,setUserLater] = useState<ILater[]>([]);
  const [count,setCount] = useState<number>(0);
  const login = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin
  })
  const getUserLaterReq=async (userId:string,offset:number,limit:number)=>{
    const result = await getUserLater<IResponseType<IPage<ILater[]>>>(userId,offset,limit);
    if(result.status===200){
      setUserLater(result.data.list);
      setCount(result.data.count);
    }
  }
  useEffect(()=>{
    getUserLaterReq(login.userMsg.userId, 0, 10).then(r  =>{});
  },[])
  return (
    <PlaylistWrapper>
      {
        userLater && userLater.length!==0 &&<LeftContainer bgc={userLater[0]?.video?.picUrl}>
          <div className="img-container">
            {
              userLater&& userLater[0]&&<img src={userLater[0].video.picUrl}/>
            }
          </div>
          <p className="later-label">稍后观看</p>
          <p className="user-name">{login.userMsg.userName}</p>
          <div className="vio-info">
            <div className="vio-count">{count}个视频</div>
            <div className="update-time">昨日更新</div>
          </div>
          <div className="mask"></div>
        </LeftContainer>
      }
      <RightContainer>

      </RightContainer>
    </PlaylistWrapper>
  )
}
export default memo(Playlist)