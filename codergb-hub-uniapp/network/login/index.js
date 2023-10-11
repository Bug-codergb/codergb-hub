import {gbRequest} from "../request.js";
export function loginReq(userName,password){
	return gbRequest.request({
		url:"/login",
		method:"post",
		data:{
			userName,
			password
		}
	})
}