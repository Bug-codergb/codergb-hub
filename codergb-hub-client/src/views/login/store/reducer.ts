import {Map} from "immutable";
import {ILogin} from "../../../types/login/ILogin";
const defaultState = Map<ILogin>({
  login:{
    userMsg:{
      userId:"",
      userName:"",
      avatarUrl:"",
      token:""
    },
    userDetail:{}
  }
})
const reducer=(state=defaultState,action:any)=>{
  switch (action.type){
    case "changeUserMsg":
      return state.setIn(['login','userMsg'],action.userMsg);
    case "changeLoginType":
      return state.setIn(['login','loginType'],action.loginType);
    case "changeUserDetail":
      return state.setIn(['login','userDetail'],action.userDetail);
    default:
      return state;
  }
}
export default reducer;