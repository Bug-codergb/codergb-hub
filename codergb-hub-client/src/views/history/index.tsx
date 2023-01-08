import React, {memo, FC, ReactElement, useEffect, useState, FormEvent} from "react";
import { Button, Modal } from 'antd';
import { useNavigate } from "react-router-dom";
import moment from "moment";
import {
 SearchOutlined
} from '@ant-design/icons';
import { Map } from "immutable";
import {
  HistoryWrapper,
  LeftContentWrapper,
  RightContentWrapper
} from "./style";
import {useSelector} from "react-redux";
import {ILogin} from "../../types/login/ILogin";
import {deleteAllHistory, getUserHistory} from "../../network/history";
import {IResponseType} from "../../types/responseType";
import {IPage} from "../../types/IPage";
import {IVideo} from "../../types/video/IVideo";
import VideoItem from "../../components/videoItem";
const History:FC=()=>{
  const [video,setVideo] = useState<IVideo[]>([]);
  const [count,setCount] = useState<number>(0);
  const [isShowDelHisModal,setIsShowDelHisModal]= useState<boolean>(false);
  const [isBolderBorder,setIsBolderBorder] = useState<boolean>(false);
  const [keyword,setKeyword] = useState<string>("");
  const login = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin
  });
  const navigate = useNavigate();
  useEffect(()=>{
    getAllUserHistory(login.userMsg.userId,0,10,"");
  },[login.userMsg.userId]);
  const getAllUserHistory= async (userId:string,offset:number,limit:number,keyword:string)=>{
    getUserHistory<IResponseType<IPage<IVideo[]>>>(userId,offset,limit,keyword).then((data)=>{
      if(data.status===200){
        setVideo(data.data.list);
        setCount(data.data.count);
      }
    })
  }
  const handleDelHistOk=()=>{
    deleteAllHistory().then(async data=>{
      if(data.status === 200){
        await getAllUserHistory(login.userMsg.userId,0,10,"");
        setIsShowDelHisModal(false);
      }
    })
  }
  const handleDelHisCancel = async ()=>{
    setIsShowDelHisModal(false);
  }
  const searchHistory=(e:FormEvent<HTMLInputElement>)=>{
    setKeyword(e.currentTarget.value)
  }
  const confirmSearch=async ()=>{
    await getAllUserHistory(login.userMsg.userId,0,10,keyword);
  }
  const videoRouterHandle=(item:IVideo)=>{
    navigate("/videoDetail",{
      replace:true,
      state:{
        id:item.id
      }
    })
  }
  return (
    <HistoryWrapper>
      <LeftContentWrapper>
        <p className="label-title">观看记录</p>
       <ul className='vio-list'>
         {
           video && video.length!==0 && video.map((item,index)=>{
             return (
                 <li key={item.id} onClick={e=>videoRouterHandle(item)}>
                   <p className="time">
                     {
                       moment().format('yyyy-MM-DD') === moment(item.history).format('yyyy-MM-DD') ? moment(item.history).fromNow() : moment().format('yyyy-MM-DD')
                     }
                   </p>
                   <VideoItem img={<img src={item.picUrl}/>}
                               isShowVideo={false}
                              state={item.name}
                              id={item.id}
                              vioHeight={152.5}
                              user={item.user}
                              createTime={item.createTime}
                              dt={item.dt}
                              playCount={item.playCount}
                              itemWidth={330}
                              dtPos={
                                {left:38,
                                  top:97}
                              }
                              isShowMore={false}
                              isFlex={true}
                              scale={0.55}/>
                 </li>
             )
           })
         }
       </ul> 
      </LeftContentWrapper>
      <RightContentWrapper isBolderBorder={isBolderBorder}>
        <div className="search-outer">
          <SearchOutlined onClick={e=>confirmSearch()}/>
          <input type={'input'} placeholder="搜索观看记录"
                 onInput={(e)=>searchHistory(e)}
                 onFocus={e=>setIsBolderBorder(true)}
                 onBlur={e=>setIsBolderBorder(false)}/>
        </div>
        <ul className="operate">
          <li onClick={(e)=>setIsShowDelHisModal(true)}>清除所有历史记录</li>
          <li>暂停观看记录</li>
          <li>管理所有历史记录</li>
        </ul>
      </RightContentWrapper>
      <Modal title="要清除观看记录吗" open={isShowDelHisModal} onOk={handleDelHistOk} onCancel={handleDelHisCancel}>
        <p style={{fontWeight:'bolder'}}>{login.userMsg.userName}</p>
        <p>你的codergb-hub观看记录将从所有设备上的所有codergb-hub应用中清除</p>
      </Modal>
    </HistoryWrapper>
  )
}
export default memo(History)