import React,{memo,FC} from 'react';
interface IProps{
  userId:string
}
const Community:FC=()=>{
  return (
      <div>社区</div>
  )
}
export default memo(Community);