import React,{memo,FC,ReactElement} from "react";
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { VideoSearchWrapper } from "./style";
const { Search } = Input;
const VideoSearch:FC=():ReactElement=>{
  const onSearchUserSelf=()=>{

  }
  const onSearchOther=()=>{

  }
  return (
      <VideoSearchWrapper>
        <div className="search-container">
          <div className="user-self">
            <Search placeholder="搜索您的视频" onSearch={e=>onSearchUserSelf()}/>
          </div>
          <div className="video-lib">
            <Search placeholder="搜索您的视频" onSearch={e=>onSearchOther()} />
          </div>
        </div>
        <ul className="video-list">

        </ul>
      </VideoSearchWrapper>
  )
}
export default memo(VideoSearch)