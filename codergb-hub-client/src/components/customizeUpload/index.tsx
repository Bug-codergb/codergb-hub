import React, {memo, FC, ReactElement, useState, useEffect,useRef} from "react";
import Cropper from 'cropperjs';
import {
  CustomizeUploadWrapper
} from "./style";
import "../../assets/css/cropper.css";
interface IProps{
  file:File | null
}
const CustomizeUpload:FC<IProps>=(props):ReactElement=>{
  const {file } = props;
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgURL,setImgURL]=useState<string>("");
  const [cropper,setCropper] = useState<Cropper>();
  useEffect(()=>{
    if(file){
      let url = URL.createObjectURL(file);
      setImgURL(url);
      if(imgRef && imgRef.current){
        let cropperContainer = new Cropper(imgRef.current, {
          ready: function () {
            console.log("11")
          },
          dragMode:'move',
          aspectRatio: 1,
          viewMode: 1,
          background: false,
          zoomable: false,
          preview: ".small",
        });
        console.log(cropperContainer)
      }
    }
  },[file,imgRef,imgRef.current])
  return (
      <CustomizeUploadWrapper>
        <div className="container">
          <div>
            <img ref={imgRef} className="cropper-img" src={imgURL}/>
          </div>
        </div>
        <div className="preview">
          <div className="small"></div>
        </div>
      </CustomizeUploadWrapper>
  )
}
export default memo(CustomizeUpload)