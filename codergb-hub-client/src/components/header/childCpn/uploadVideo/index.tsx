import React, {memo, FC, ChangeEvent, useState} from "react";
import {CloudUploadOutlined} from "@ant-design/icons"
import { Progress } from "antd"
import {
  UploadVideoWrapper
} from "./style"
import {shardUtils} from "../../../../utils/shard";
import VideoInfo from "./childCpn/videoInfo";
const UploadVideo:FC=()=>{
  const [file,setFile] = useState<File>();
  const [videoURL,setVideoURL]=useState<string>("");
  const [videoName,setVideoName]=useState<string>("");
  const [percent,setPercent] = useState<number>(0);
  const [isShowUpload,setIsShowUpload]=useState<boolean>(true);
  const fileChangeHandle=async (e:ChangeEvent<HTMLInputElement>)=>{
    if(e.currentTarget.files && e.currentTarget.files.length!==0){
      const file = e.currentTarget.files[0];
      setVideoURL(URL.createObjectURL(file));
      setVideoName(file.name);

      setFile(file);
      setPercent(0);
      setIsShowUpload(false);
      const result = await shardUtils(file,(e)=>{
        setPercent(e/file.size*100);
      });
      console.log(result);
    }
  }
  return (
      <UploadVideoWrapper>
        {
          isShowUpload && <div className="upload">
            <button className="select-btn">选择文件</button>
            <p className="upload-label">请选择您要上传的文件</p>
            <CloudUploadOutlined className="upload-icon"/>
            <input type='file' className="file-inp" onChange={(e)=>fileChangeHandle(e)}/>
          </div>
        }
        {
          (!isShowUpload) && <VideoInfo videoURL={videoURL} videoName={videoName}/>
        }
        {
          (!isShowUpload) && <Progress percent={parseFloat(percent.toFixed(2))}/>
        }
      </UploadVideoWrapper>
  )
}
export default memo(UploadVideo)