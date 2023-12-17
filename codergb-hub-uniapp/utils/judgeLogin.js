import {LocalStorage} from "./storage.js"
export function judgeLogin(){
	const storage = new LocalStorage(false);
	const res = storage.getItem("user");
	if(res){
		uni.switchTab({
			url:"/pages/home/Home",
		})
	}else{
		uni.navigateTo({
			url:"/pages/index/index"
		})
	}
}