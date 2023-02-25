import React,{memo,FC} from 'react';
interface IProps{
  userId:string
}
const Desc:FC=()=>{
  return (
      <div>简介</div>
  )
}
export default memo(Desc);