<template>
	<view class="login-container">
		<view class="account">
			<input placeholder="请输入您的账号" v-model="login.account"/>
		</view>
		<view class="password">
			<input placeholder="请输入密码" type="password" v-model="login.password"/>
		</view>
		<view class="login-btn">
			<button class="login" type="default" @click="loginHandler">登陆</button>
		</view>
		<view class="tip">
			<checkbox class="checkbox-style" :checked="read"></checkbox>
			<span>我已经阅读并同意用户协议和隐私政策</span>
		</view>
	</view>
</template>

<script setup>
import {reactive,computed,ref} from "vue";
import {loginReq} from "../../network/login/index.js";
import {LocalStorage} from "../../utils/storage.js"
const login = reactive({
	account:"",
	password:""
})	
const read = ref(false);
const loginHandler=()=>{
	if(
	  login.account.trim().length!==0 && 
		login.password.trim().length!==0
	){
		loginReq(login.account,login.password).then((data)=>{
			if(data.status===200){
				let storage = new LocalStorage(false);
				storage.setItem("user",data.data)
				uni.switchTab({
					url:"/pages/home/Home",
				})
			}
		})
	}
}
</script>

<style scoped lang="less">
	.login-container{
		background-color: #cbcbcd;
		width: 100%;
		/*height: 100vh;*/
		.account,.password{
			border-bottom: 1rpx solid #bebebe;
			background: #fff;
			padding: 20rpx 40rpx;
		}
		.login-btn{
			padding: 30rpx;
			.login{
				background-color: #d74532;
				color: #fff;
			}
		}
		.tip{
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			.checkbox-style{
				transform: scale(0.6);
			}
		}
	}
</style>
