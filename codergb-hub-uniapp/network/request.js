import {baseURL,timeout} from "../constant/network.js"
class GBRequest{
	constructor(baseURL,timeout){
		this.baseURL = baseURL;
		this.timeout = timeout;
	}
	request(options){
		const {method,url,data}=options;
		return new Promise((resolve,reject)=>{
			uni.request({
				url:`${this.baseURL}${url}`,
				method,
				data,
				success:(res)=>{
					resolve(res.data);
				},
				fail:(res)=>{
					resolve(res);
				}
			})
		})
	}
}
let gbRequest = new GBRequest(baseURL,timeout);
export {
	gbRequest
}