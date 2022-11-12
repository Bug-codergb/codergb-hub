import {useSelector} from "react-redux";
import {Map} from "immutable";
import {ILogin} from "../../types/login/ILogin";

export const useThumb=(alias:'video'|'comment',id?:string):boolean=>{
  let isExists = -1;
  const loginState = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin;
  })
  if(loginState){
    const { userDetail } = loginState;
    if(userDetail &&userDetail.thumb[alias] && userDetail.thumb[alias].length!==0 && id){
      isExists = userDetail.thumb[alias].findIndex((item,index)=>{
        return id === item.id;
      })
    }
  }
  return isExists!==-1;
}
export const useTread=(alias:'video'|'comment',id?:string):boolean=>{
  let isExists = -1;
  const loginState = useSelector<Map<string,ILogin>,ILogin>(state=>{
    return state.getIn(['loginReducer','login']) as ILogin;
  })
  if(loginState){
    const { userDetail } = loginState;
    if(userDetail && userDetail.tread[alias] && userDetail.tread[alias].length!==0 && id){
      isExists = userDetail.tread[alias].findIndex((item,index)=>{
        return id === item.id;
      })
    }
  }
  return isExists!==-1;
}