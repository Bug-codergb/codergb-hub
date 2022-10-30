import {holder} from "../../utils/holder";
const HolderCpn=(total:number,lineCount:number,width:number)=>{
  return  holder(total,lineCount).map((item)=>{
            return <li style={{width:`${width/40}rem`}}> </li>
          })

}
export default HolderCpn;