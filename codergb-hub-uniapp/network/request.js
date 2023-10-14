import {baseURL,timeout} from "../constant/network.js";
import {LocalStorage} from "../utils/storage.js"
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
uni.addInterceptor("request",{
	invoke(args) {
		let storage = new LocalStorage(false);
		const res = storage.getItem("user")
		args.header={
			...args.header,
			'Authorization':res.token
		}
	}
})

export {
	gbRequest
}