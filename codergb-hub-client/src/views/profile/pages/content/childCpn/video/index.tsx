import React, {memo, FC, ReactElement, useEffect, useState} from "react";
import { Divider, Radio, Table } from 'antd';
import {
  VideoPageWrapper
} from "./style"
import {getAllVideo} from "../../../../../../network/video";
import {IResponseType} from "../../../../../../types/responseType";
import {IPage} from "../../../../../../types/IPage";
import {IVideo} from "../../../../../../types/video/IVideo";
import {columns} from "./config";
const VideoPage:FC=():ReactElement=>{
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [video,setVideo] = useState<IVideo[]>([]);
  const [count,setCount] = useState<number>(0);
  useEffect(()=>{
    getAllVideo<IResponseType<IPage<IVideo[]>>>(0,20).then((data)=>{
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
    console.log(e);
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