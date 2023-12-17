<template>
	<view class="profile">
		<view class="profile-header">
			<view class="left-container">
				<image class="avatar" :src="userInfo.avatarUrl" mode="widthFix"/>
			</view>
			<view class="right-container">
				<text>{{userInfo.userName}}</text>
			</view>
		</view>
		
	<uni-grid :column="3" :show-border="false" :square="false">
		<uni-grid-item>
			<view class="grid-item-box">
				<text class="text">{{ userData.uploadCount }}</text>
				<view class="label">作品</view>
			</view>
		</uni-grid-item>
		<uni-grid-item>
			<view class="grid-item-box">
				<text class="text">{{ userData.subCount }}</text>
				<view class="label">关注</view>
			</view>
		</uni-grid-item>
		<uni-grid-item>
			<view class="grid-item-box">
				<text class="text">{{ userData.thumbCount }}</text>
				<view class="label">粉丝</view>
			</view>
		</uni-grid-item>
	</uni-grid>
		
		<view class="user-operator">
			<view class="item" v-for="item in userOperator" :key="item.label">
				<uni-icons :type="item.type" size="26" color="#5599c5"></uni-icons>
				<view class="label">{{item.label}}</view>
			</view>
		</view>
		
		
		<uni-list>
			<uni-list-item  title="消息中心" clickable link></uni-list-item>
			<uni-list-item  title="视频上传" clickable link @click="uploadHandler"></uni-list-item>
			<uni-list-item  title="空间信息" clickable link></uni-list-item>
			<uni-list-item  title="账号资料" clickable link></uni-list-item>
			<uni-list-item  title="数据分析" clickable link></uni-list-item>
			<uni-list-item  title="退出登录" clickable link @click="logoutHandler"></uni-list-item>
		</uni-list>
	</view>
</template>

<script setup>
	import { ref ,reactive} from "vue";
	import { getUserLibrary } from "../../network/user/index.js"
	import { LocalStorage } from "../../utils/storage.js"
	let storage = new LocalStorage(false);
	const userInfo = ref(storage.getItem('user')??{});
	
	const userOperator = ref([
		{
			label:"订阅内容",
			type:"calendar"
		},
		{
			label:"历史记录",
			type:"map"
		},
		{
			label:"稍后观看",
			type:"navigate"
		},
		{
			label:"顶过的视频",
			type:"hand-up"
		},
	])
	const logoutHandler=()=>{
		uni.navigateTo({   
			url:"/pages/login/Login"  
		}) 
	}
	const uploadHandler=()=>{
		uni.chooseVideo({
			success(e) {
				console.log(e);
			},
			fail(e){
				
			}
		})
	}
	
	const userData=reactive({
		subCount:0,
		thumbCount:0,
		uploadCount:0
	});
	console.log(userInfo);
	getUserLibrary(userInfo.value.userId).then((res)=>{
		if(res.status==200){
			userData.subCount = res.data.subCount;
			userData.thumbCount = res.data.thumbCount;
			userData.uploadCount = res.data.uploadCount
		}
	})
</script>
<style scoped lang="less">
	.profile{
		background-color: #f2f3f5;	
	}
	.profile-header{
		display: flex;
		align-items: center;
		padding: 30rpx 30rpx;
		border-bottom: 1px solid #dddfe5;
		background-color: #fff;
		.left-container{
			width: 140rpx;
			height: 140rpx;
			border-radius: 50%;
			overflow: hidden;
			margin: 0 20rpx 0 0;
			.avatar{
				width: 100%;  
			}
		}
	}
.grid-item-box {
	background-color: #fff;
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
		.label{
			color: #555557;
			font-size: 24rpx;
		}
		.text{
			font-size: 30rpx;
		}
	}
	.user-operator{
		display: flex;
		align-items: center;
		padding: 20rpx 30rpx;
		justify-content: space-between;
		background-color: #fff;
		.item{
			font-size: 26rpx;
			cursor: pointer;
			display: flex;
			flex-direction: column;
			align-items: center;
			.label{
				color: #555557;
				font-size: 24rpx;
			}
		}
	}
</style>