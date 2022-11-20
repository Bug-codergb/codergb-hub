import React, {memo, FC, ReactElement, useState} from "react";
import {Map} from "immutable"
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { VideoSearchWrapper } from "./style";
import {IVideo} from "../../../../../../../../types/video/IVideo";
import {getUserVideo} from "../../../../../../../../network/video";
import {useDispatch, useSelector} from "react-redux";
import {ILogin} from "../../../../../../../../types/login/ILogin";
import {IResponseType} from "../../../../../../../../types/responseType";
import {IPage} from "../../../../../../../../types/IPage";
import HolderCpn from "../../../../../../../../components/holder";
import {updateChannel} from "../../../../../../../../network/channel";
import {IChannel} from "../../../../../../../../types/channel/IChannel";
import {Dispatch} from "redux";
import {changeChannelAction} from "../../../../store/actionCreators";
import {log} from "util";

const { Search } = Input;
interface IProps{
  isTrailer:boolean,
  updateVideo:(obj:Object)=>void
}
const VideoSearch:FC<IProps>=(props):ReactElement=>{
  const { isTrailer,updateVideo } = props;
  const [userInp,setUserInp] = useState<string>("");
  const [userVideo,setUserVideo] = useState<IVideo[]>([]);
  const [userVideoCount,setUserVideoCount] = useState<number>(0);
  const [currentIndex,setCurrentIndex] = useState<number>(-1);
  const login = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin
  })
  const getUserVideoHandle = async(keyword:string,offset:number,limit:number)=>{
    const result = await getUserVideo<IResponseType<IPage<IVideo[]>>>(login.userMsg.userId,keyword,offset,limit);
    if(result.status === 200){
      setUserVideo(result.data.list);
      setUserVideoCount(result.data.count);
    }
  }
  const onSearchUserSelf= async (value:string)=>{
    setUserInp(value);
    await getUserVideoHandle(value,0,10);
  }
  const onSearchOther=()=>{

  }
  const changeVideo= async(item:IVideo,index:number)=>{
    setCurrentIndex(index);
    let obj={
      [isTrailer ? 'trailer':'featured']:item.id
    }
    updateVideo(obj);
  }
  return (
      <VideoSearchWrapper>
        <div className="search-container">
          <div className="user-self">
            <Search placeholder="搜索您的视频"
                    onSearch={(value, event)=>onSearchUserSelf(value)}/>
          </div>
          {
            (!isTrailer) && <div className="video-lib">
              <Search placeholder="搜索整站的视频" onSearch={e=>onSearchOther()} />
            </div>
          }
        </div>
        <ul className="video-list">
          {
            userVideo && userVideo.length!==0 && userVideo.map((item,index)=>{
              return (
                  <li key={item.id} onClick={e=>changeVideo(item,index)}
                      className={currentIndex===index?'active':''}>
                    <div className="video-cover">
                      <img src={item.picUrl} alt={item.name}/>
                    </div>
                    <div className="video-name text-nowrap-mul-line">
                      {item.name}
                    </div>
                  </li>
              )
            })
          }
          {
            HolderCpn(userVideo.length, 5, 220)
          }
        </ul>
      </VideoSearchWrapper>
  )
}
export default memo(VideoSearch)