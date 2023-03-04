import React, { memo, FC, useState, useRef } from "react";
import { FormOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Form, Input, FormInstance,message } from "antd";
import { CommunityWrapper } from "./style";
import VideoList from "./childCpn/videoList";
import {IVideo} from "../../../../../../types/video/IVideo";
interface IVideoListRef{
  videoSource:IVideo|null
}
interface IProps {
  userId: string;
}
const { TextArea } = Input;
const Community: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const formRef = useRef<FormInstance | null>(null);
  const publishClick = () => {
    formRef.current?.resetFields();
    setIsModalOpen(true);
  };
  const handleOk = () => {
    formRef.current?.validateFields().then((value) => {
      console.log(value);
      setIsModalOpen(false);
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [isShowVideoModel, setShowVideoModel] = useState<boolean>(false);
  const selectVideo = () => {
    setShowVideoModel(true);
  };
  const videoListRef = useRef<IVideoListRef|null>(null);
  const [videoSource,setVideoSource] = useState<IVideo|null>(null);
  const [videoId,setVideoId] = useState<string>("");
  const selectFinish = () => {
    if(videoListRef.current && videoListRef.current.videoSource){
      setShowVideoModel(false);
      setVideoSource(videoListRef.current.videoSource);
      setVideoId(videoListRef.current.videoSource.id);
      if(formRef.current) formRef.current.setFieldValue('videoId',videoListRef.current.videoSource.id);
    }else{
      message.warning('请选择一个视频');
    }
  };
  const selectCancel = () => {
    setShowVideoModel(false);
  };
  const normFile=(a:any)=>{
    console.log(a)
  }
  return (
    <CommunityWrapper>
      <div className="publish-btn">
        <Button
          type="primary"
          icon={<FormOutlined />}
          onClick={(e) => publishClick()}
        >
          发表你的看法
        </Button>
      </div>
      <Modal
        title="发布动态"
        open={isModalOpen}
        maskClosable={false}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <Form
          ref={formRef}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 167 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          layout={"vertical"}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: "为你的动态添加一个标题吧!" }]}
          >
            <Input size="large" placeholder={"添加精彩标题"} />
          </Form.Item>

          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: "请添加你的动态内容" }]}
          >
            <TextArea rows={4} placeholder="发表你所想" maxLength={300} />
          </Form.Item>
          <Form.Item
            label="视频"
            name='videoId'
            valuePropName={'videoId'}
            rules={[{ required: true, message: "添加视频丰富一下你的动态吧" }]}
          >
            {
              videoSource&& videoSource.picUrl&&<div className="moment-out-of-body-img-container">
                <img src={videoSource.picUrl}/>
              </div>
            }
            <Button
              type="dashed"
              onClick={() => selectVideo()}
              block
              icon={<PlusOutlined />}
            >
              选择视频
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title={"视频列表"}
        open={isShowVideoModel}
        maskClosable={false}
        onOk={selectFinish}
        onCancel={selectCancel}
        destroyOnClose={true}
        width={"60%"}
      >
        <VideoList ref={videoListRef}/>
      </Modal>
    </CommunityWrapper>
  );
};
export default memo(Community);
