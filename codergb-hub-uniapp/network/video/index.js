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
export function getVideoDetail(id){
	return gbRequest.request({
		url:"/video/detail/"+id,
		method:"post"
	})
}
export function getSimilarVideo(
  id,
  offset,
  limit
) {
  return gbRequest.request({
    url: "/video/similar/" + id+`?offset=${offset}&limit=${limit}`,
		method:"post",
    
  });
}