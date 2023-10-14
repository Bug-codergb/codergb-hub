class LocalStorage{
	constructor(isAsync){
		this.isAsync = isAsync;
	}
	getItem(key){
		 return this.isAsync ?  new Promise((resolve,reject)=>{
			uni.getStorage({
				key:key,
				success:(res)=>{
					resolve(res.data);
				}
			})
		}) : uni.getStorageSync(key);
	}
	setItem(key,value){
		return this.isAsync ? new Promise((resolve,reject)=>{
			 uni.setStorage({
			 	key:key,
			 	data:value,
				success:()=>{
					resolve(true);
				}
			 })
		}): uni.setStorageSync(key,value);
	}
}
export {
	LocalStorage
}