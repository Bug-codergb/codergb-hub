import React,{memo,FC} from "react";
interface IProps{
  userId:string
}
const Game:FC<IProps>=(props)=>{
  return (
      <div>
        游戏
      </div>
  )
}
export default memo(Game)