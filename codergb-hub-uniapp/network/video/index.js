import {gbRequest} from "../request.js";
export function getAllVideo(offset,limit){
	return gbRequest.request({
		url:"/video/all",
		method:"post",
		data:{
			offset,
			limit
		}
	})
}
export function getVideoURL(id){
	return gbRequest.request({
		url:`/video/url/${id}`,
		methods:"get"
	})
}