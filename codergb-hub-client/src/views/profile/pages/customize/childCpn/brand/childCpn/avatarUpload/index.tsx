import React, {memo, FC, ReactElement, ChangeEvent, useState} from "react";
import {
  AvatarUploadWrapper
} from "./style"
import {useDispatch} from "react-redux";
import CustomizeUpload from "../../../../../../../../components/customizeUpload";
const AvatarUpload:FC=()=>{
  const [file,setFile] = useState<File|null>(null);
  const fileChange=(e:ChangeEvent<HTMLInputElement>)=>{
    console.log(e.currentTarget.files)
    if(e.currentTarget.files){
      setFile(e.currentTarget.files[0]);
    }
  }
  return (
      <AvatarUploadWrapper>
        <div className="upload-outer">
          <input type='file' onChange={(e)=>fileChange(e)}/>
          <CustomizeUpload file={file}/>
        </div>
      </AvatarUploadWrapper>
  )
}
export default memo(AvatarUpload)