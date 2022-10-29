import React,{memo,FC,ReactElement} from "react";
import { Input } from 'antd';
import { BasicWrapper } from "./style"
const { TextArea } = Input;
const Basic:FC=():ReactElement=>{
  return (
      <BasicWrapper>
        <div className="name-label-first">名称</div>
        <p className="desc-label">
          选用的频道名称要能反映您的身份和内容。
        </p>
        <Input placeholder="请输入人频道名称"/>
        <div className="name-label-second">说明</div>
        <p className="desc-label">
          请介绍您的频道，方便大家认识你
        </p>
        <TextArea rows={4}
                  placeholder="请输入简介"
                  maxLength={200} />
      </BasicWrapper>
  )
}
export default memo(Basic)