<template>
	<view>
		<view class="profile-header">
			<view class="left-container">
				<image class="avatar" :src="userInfo.avatarUrl" mode="widthFix"/>
			</view>
			<view class="right-container">
				<text>{{userInfo.userName}}</text>
			</view>
		</view>
		
		<view class="user-operator">
			<view class="item" v-for="item in userOperator" :key="item.label">
				<uni-icons :type="item.type" size="30"></uni-icons>
				<view>{{item.label}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from "vue";
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
</script>
<style scoped lang="less">
	.profile-header{
		display: flex;
		align-items: center;
		padding: 40rpx 30rpx;
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
	.user-operator{
		display: flex;
		align-items: center;
		padding: 20rpx 30rpx;
		justify-content: space-between;
		.item{
			font-size: 26rpx;
			cursor: pointer;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>