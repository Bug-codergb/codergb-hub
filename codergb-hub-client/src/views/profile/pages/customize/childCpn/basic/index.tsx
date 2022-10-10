import React,{memo,FC,ReactElement} from "react";
import { BasicWrapper } from "./style"
const Basic:FC=():ReactElement=>{
  return (
      <BasicWrapper>
        基本信息
      </BasicWrapper>
  )
}
export default memo(Basic)