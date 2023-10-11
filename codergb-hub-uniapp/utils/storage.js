class LocalStorage{
	getItem(key){
		return new Promise((resolve,reject)=>{
			uni.getStorage({
				key:key,
				success:()=>{
					resolve(res.data);
				}
			})
		})
	}
	setItem(key,value){
		return new Promise((resolve,reject)=>{
			 uni.setStorage({
			 	key:key,
			 	data:value,
				success:()=>{
					resolve(true);
				}
			 })
		})
	}
}
export default new LocalStorage();