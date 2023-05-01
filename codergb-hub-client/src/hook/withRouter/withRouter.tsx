import React from "react";
import {useNavigate} from "react-router-dom";
function withRouter(WrapperComponent:any){
  return function(props:any){
    const navigate = useNavigate();
    const router={navigate};
    return <WrapperComponent {...props} router={router}/>
  }
}
export default withRouter;