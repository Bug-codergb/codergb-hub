import React, {memo, FC, ReactElement, useEffect, useState} from "react";
import {Map} from "immutable";
import { Divider, Radio, Table } from 'antd';
import {
  VideoPageWrapper
} from "./style"
import { getUserVideo} from "../../../../../../network/video";
import {IResponseType} from "../../../../../../types/responseType";
import {IPage} from "../../../../../../types/IPage";
import {IVideo} from "../../../../../../types/video/IVideo";
import {columns} from "./config";
import {useSelector} from "react-redux";
import {ILogin} from "../../../../../../types/login/ILogin";
const VideoPage:FC=():ReactElement=>{
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [video,setVideo] = useState<IVideo[]>([]);
  const [count,setCount] = useState<number>(0);
  const login = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin
  })
  useEffect(()=>{
    getUserVideo<IResponseType<IPage<IVideo[]>>>(login.userMsg.userId,"",0,4).then((data)=>{
      if(data.status===200){
        setVideo(data.data.list);
        setCount(data.data.count);
      }
    })
  },[]);
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: IVideo[]) => {
      console.log('selectedRows: ', selectedRows);
    },
  };
  const pageChangeHandle=(e:number)=>{
    getUserVideo<IResponseType<IPage<IVideo[]>>>(login.userMsg.userId,"",e-1,4).then((data)=>{
      if(data.status===200){
        setVideo(data.data.list);
        setCount(data.data.count);
      }
    })
  }
  return (
      <VideoPageWrapper>
        {
          video && video.length!==0 && <Table
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              rowKey={'id'}
              columns={columns}
              dataSource={video}
              pagination={{
                pageSize:4,
                total:count,
                onChange:(e)=>pageChangeHandle(e)
              }}
          />
        }
      </VideoPageWrapper>
  )
}
export default memo(VideoPage);