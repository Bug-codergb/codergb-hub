import React, {
  memo,
  FC,
  ChangeEvent,
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  RefAttributes, ForwardRefExoticComponent, PropsWithoutRef, Ref, MutableRefObject
} from "react";
import {CloudUploadOutlined,RocketOutlined} from "@ant-design/icons"
import { Input,Select,Modal  } from 'antd';
import {
  VideoInfoWrapper,
  LeftContent,
  RightContent
} from "./style";

import CustomizeUpload from "../../../../../customizeUpload";
import {deleteImage, uploadImage} from "../../../../../../network/image";
import {IResponseType} from "../../../../../../types/responseType";
import {IImage} from "../../../../../../types/upload/image";
import {IPlaylist} from "../../../../../../types/playlist/IPlaylist";
import {getAllPlaylist} from "../../../../../../network/playlist";
import {IPage} from "../../../../../../types/IPage";
import {ITag} from "../../../../../../types/tag/ITag";
import {getAllTag} from "../../../../../../network/tag";
import {ICate} from "../../../../../../types/category/ICate";
import {getAllCate} from "../../../../../../network/category";
import {IUploadVideo} from "../../../../../../types/imperative/uploadVideo";
const { TextArea } = Input;
const { Option } = Select;
interface IProps{
  videoURL:string,
  videoName:string,
  ref: Ref<IUploadVideo>
}

const VideoInfo:FC<IProps>=forwardRef<IUploadVideo,IProps>((props,propsRef)=>{
  const { videoURL,videoName } = props;
  const [ isModalOpen,setIsModalOpen ] = useState<boolean>(false);
  const [file,setFile] = useState<File | null>(null);

  const [isShowAbbreviation,setIsShowAbbreviation] = useState<boolean>(true);
  const [imgURL,setImgURL] = useState<string>("");
  const [imgID,setImgID]=useState<string>("");

  //播放列表
  const [playlist,setPlaylist]=useState<IPlaylist[]>([]);
  const uploadRef = useRef<any>(null);
  //标签
  const [tag,setTag]=useState<ITag[]>([]);
  //分类
  const [cate,setCate]=useState<ICate[]>([]);

  //创建视频时传的参数
  const [title,setTitle] = useState<string>("");
  const [desc,setDesc] = useState<string>("");
  const [playlistParam,setPlaylistParam] = useState<string>("2");
  const [tagParam,setTagParam] =useState<string[]>([]);
  const [cateParam,setCateParam] = useState<string>("1");

  useImperativeHandle<IUploadVideo,IUploadVideo>(propsRef,()=>{
    return {
      videoId:"",
      imgId:imgID,
      title:title,
      desc:desc,
      playlist:playlistParam,
      tag:tagParam,
      cate:cateParam,
      file:null
    }
  },[imgID,title,desc,playlistParam,cateParam,tagParam.length]);
  useEffect(()=>{
    getAllPlaylist<IResponseType<IPage<IPlaylist[]>>>(0,10).then(data=>{
      if(data.status===200){
        setPlaylist(data.data.list);
      }
    })
  },[])
  useEffect(()=>{
    getAllTag<IResponseType<IPage<ITag[]>>>(0,50).then(data=>{
      if(data.status===200){
        setTag(data.data.list);
      }
    })
  },[]);
  useEffect(()=>{
    getAllCate<IResponseType<IPage<ICate[]>>>(0,50).then(data=>{
      if(data.status===200){
        setCate(data.data.list);
      }
    })
  },[])
  const abbreviationHandle=(e:ChangeEvent<HTMLInputElement>)=>{
    if(e.currentTarget.files){
      setFile(e.currentTarget.files[0])
      setIsModalOpen(true);
    }
  }
  const handleOk=async ()=>{
    const file = await uploadRef.current.getCropperFile();
    let formData = new FormData();
    formData.append("file",file);
    const result = await uploadImage<IResponseType<IImage>>(formData,()=>{

    })
    if(result.status===200){
      setImgURL(result.data.picUrl);
      setImgID(result.data.id);
      setIsShowAbbreviation(false);
      setIsModalOpen(false);
    }else{

    }
  }
  const handleCancel=()=>{

  }
  //删除缩略图
  const deleteAbb=async ()=>{
    const result = await deleteImage(imgID);
    if(result.status===200){
      setImgURL("");
      setIsShowAbbreviation(true);
    }
  }
  //选择播放列表
  const selectPlaylistHandle=(e:string)=>{
    setPlaylistParam(e);
  }
  //选择标签
  const selectTagHandle=(e:string[])=>{
    setTagParam(e);
  }
  //选择分类
  const selectCateHandle=(e:string)=>{
    setCateParam(e);
  }
  //视频title
  const titleChangeHandle=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    console.log(e.currentTarget.value)
    setTitle(e.currentTarget.value);
  }
  //视频内容
  const contentChangeHandle=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    setDesc(e.currentTarget.value);
  }
  return (
      <VideoInfoWrapper>
        <LeftContent>
          <p className="title-tip">详细信息</p>
          <TextArea rows={4}
                    placeholder="请输入标题"
                    maxLength={100}
                    showCount
                    onChange={(e)=>titleChangeHandle(e)}/>
          <TextArea rows={4}
                    placeholder="向观众介绍您的视频"
                    maxLength={500}
                    showCount
                    onChange={e=>contentChangeHandle(e)}/>
          <p className="abbreviation">缩略图</p>
          <p className="desc">请上传一张可展示您视频内容的图片。好的缩略图能脱颖而出，吸引观看者的眼球</p>
          <div className="abbreviation-upload-outer">
            <div className="abbreviation-upload">
              {
                isShowAbbreviation &&<input type="file" onChange={(e)=>abbreviationHandle(e)}/>
              }
              {
                isShowAbbreviation && <CloudUploadOutlined/>
              }
              {
                (!isShowAbbreviation) && <img src={imgURL} alt="缩略图"/>
              }
              <Modal title="缩略图上传"
                     cancelText={"取消"}
                     okText={"确定"}
                     open={isModalOpen}
                     destroyOnClose={true}
                     onOk={handleOk}
                     width={'70%'}
                     onCancel={handleCancel}>
                {
                  isModalOpen && <CustomizeUpload file={file}
                                                  imgWidth={7}
                                                  scale={1.95}
                                                  aspectRatio={1.95}
                                                  isCircle={false}
                                                  realWidth={300}
                      //@ts-ignore
                                                  ref={uploadRef}/>
                }
              </Modal>
            </div>
            {/*删除缩略图*/}
            {
              (!isShowAbbreviation)&&<div className="delete-abb" title={'删除缩略图'} onClick={e=>deleteAbb()}>
                <RocketOutlined />
              </div>
            }
          </div>
          <p className="abbreviation">播放列表</p>
          <p className="desc">
            将您的视频添加到一个或多个播放列表中。播放列表有助于观看者更快地发现您的内容。
          </p>
          <Select
              showSearch
              placeholder="请选择播放列表"
              className="playlist"
              optionFilterProp="children"
              onChange={(e)=>selectPlaylistHandle(e)}>
            {
              playlist && playlist.length!==0 && playlist.map((item,index)=>{
                return (
                    <Option key={item.id} value={item.id}>{item.name}</Option>
                )
              })
            }
          </Select>
          <p className="abbreviation">标签</p>
          <p className="desc">
            标签可以帮助观看者找到您的视频
          </p>
          <Select
              showSearch
              placeholder="请选择标签"
              className="playlist"
              optionFilterProp="children"
              mode="multiple"
              onChange={(e)=>selectTagHandle(e)}>
            {
              tag && tag.length!==0 && tag.map((item,index)=>{
                return (
                    <Option key={item.id} value={item.id}>{item.name}</Option>
                )
              })
            }
          </Select>
          <p className="abbreviation">类别</p>
          <p className="desc">
            将您的视频添加到某个类别中，方便观看者找到它
          </p>
          <Select
              showSearch
              placeholder="请选择分类"
              className="playlist"
              optionFilterProp="children"
              onChange={(e)=>selectCateHandle(e)}>
            {
              cate && cate.length!==0 && cate.map((item,index)=>{
                return (
                    <Option key={item.id} value={item.id}>{item.name}</Option>
                )
              })
            }
          </Select>
        </LeftContent>
        <RightContent>
          <video controls src={videoURL}> </video>
          <div className="video-info">
            <div className="label">文件名</div>
            <div className="value">{videoName}</div>
          </div>
        </RightContent>
      </VideoInfoWrapper>
  )
})
export default memo(VideoInfo)