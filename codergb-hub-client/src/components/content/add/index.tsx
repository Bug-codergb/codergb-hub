import React, {memo, FC, ReactElement, useState, FormEvent} from "react";
import {Modal, Input, Select,notification} from "antd";
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import type { NotificationPlacement } from 'antd/es/notification';
import {
  AddWrapper
} from "./style";
import {ADD_PLAYLIST, ADD_WATCH_LATER, addList, IAddType} from "../../../constant/addList";
import Playlist from "../playlist";
import {
  PlusOutlined
} from "@ant-design/icons";
import {addVideoPlaylist, createPlaylist} from "../../../network/playlist";
import {IPlaylist} from "../../../types/playlist/IPlaylist";
import {addLater} from "../../../network/later";

const { Option } = Select;
interface IProps{
  id:string
}
const Add:FC<IProps>=(props):ReactElement=>{
  const { id } = props;
  const [isShowAddPlay,setIsShowPlay] = useState<boolean>(false);
  const [isCreate,setIsCreate] = useState<boolean>(false);
  const [keyIndex,setKeyIndex] = useState<number>(1);

  const [name,setName] = useState<string>("");
  const [isPublic,setIsPublic] = useState<number>(0);

  const openNotification = (placement: NotificationPlacement) => {
    notification.info({
      message: `已成功添加至稍后观看`,
      description: '在"稍后观看"查看您添加的视频',
      placement,
    });
  };

  const liClick=(item:IAddType)=>{
    if(item.name === ADD_PLAYLIST){
      console.log(1)
      setIsShowPlay(true);
    }
    if(item.name === ADD_WATCH_LATER){
      addLater(id).then(data=>{
        console.log(data)
        if(data.status===200){
          openNotification('bottomLeft');
        }
      }).catch(err=>{
      })
    }
  }
  const cancelHandle=()=>{
    setIsShowPlay(false);
  }
  const nameInpHandle=(e:FormEvent<HTMLInputElement>)=>{
    setName(e.currentTarget.value)
  }
  const selectPublicHandle=(value:number)=>{
    setIsPublic(value)
  }
  //创建播放列表
  const createHandle=()=>{
    if(name){
      createPlaylist(name,name,isPublic).then(data=>{
        if(data.status===200){
          setIsCreate(false);
          setKeyIndex(keyIndex+1)
        }
      })
    }
  }
  const checkHandle=(checked:boolean,item:IPlaylist)=>{
    if(checked){
      addVideoPlaylist(id,item.id).then((data)=>{
        if(data.status===200){
          console.log(data);
        }
      })
    }
  }
  return(
      <AddWrapper>
        <ul className="add-list">
          {
            addList.map((item,index)=>{
              return (
                  <li key={item.name} onClick={e=>liClick(item)}>
                    <div className="icon">{item.icon}</div>
                    <div className="name">{item.name}</div>
                  </li>
              )
            })
          }
        </ul>
        <Modal title="保存到..."
               width={"30%"}
               destroyOnClose={true}
               maskClosable={false}
               open={isShowAddPlay}
               getContainer={".add-list"}
               onCancel={e=>cancelHandle()}
               footer={(!isCreate)?[
                 <div className="add-new-playlist">
                   <PlusOutlined />
                   <div className="add-label" onClick={()=>setIsCreate(true)}>新建播放列表</div>
                 </div>
               ]:[
                  <div className="create-playlist">
                    <p>名称</p>
                    <Input placeholder="请输入播放列表名称" showCount maxLength={20} onInput={(e)=>nameInpHandle(e)}/>
                    <p>隐私设置</p>
                    <Select onChange={selectPublicHandle} value={isPublic} placeholder={"请选择播放列表属性"}>
                      <Option value={0}>
                        <div className="private">
                          <div className="name">私享</div>
                          <div className="icon">
                            <EyeInvisibleOutlined/>
                          </div>
                        </div>
                      </Option>
                      <Option value={1}>
                        <div className="private">
                          <div className="name">公开</div>
                          <div className="icon">
                            <EyeOutlined/>
                          </div>
                        </div>
                      </Option>
                    </Select>
                    <div className="create-label" onClick={e=>createHandle()}>创建</div>
                  </div>
               ]}>
          {
            isShowAddPlay && <Playlist key={keyIndex} select={(checked,item)=>checkHandle(checked,item)}/>
          }
        </Modal>
      </AddWrapper>
  )
}
export default memo(Add);