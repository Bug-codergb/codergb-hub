<template>
	<div class="home-container"> 
		<scroll-view :scroll-y="true" height="100vh">
			<ul class="video-list">
				<li v-for="item in videoData.list" :key="item.id" class="item">
					<image class="img-item" mode="widthFix" :src="item.picUrl" @click="videoRouter(item)"/>
					<view class="name-container">
						<view class="name">{{item.name}}</view>
					</view> 
					<view class="creator">{{item.user.userName}} </view>
				</li>
			</ul>
		</scroll-view>
	</div>
</template>

<script setup>
import {reactive} from "vue";	
import {getAllVideo} from "../../network/video/index.js";
const videoData = reactive({
	count:0,
	list:[]
})
getAllVideo(0,8).then((data)=>{
	videoData.count = data.data.count;
	videoData.list = data.data.list;
})	
const videoRouter=(item)=>{
	uni.navigateTo({
		url:`/pages/detail/videoDetail/VideoDetail?id=${item.id}`,
	})
}
</script>

<style scoped lang="less">
	.home-container{
		padding: 20rpx;
		background-color:#f2f4f5 ;
		.video-list{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.item{
				width: 48%;
				margin: 0 0 20rpx;
				background-color: #fff;
				border-bottom-right-radius: 6rpx;
				border-bottom-left-radius: 6rpx;
				.img-item{
					width: 100%;
					border-radius: 6rpx;
				}
				.name-container{
					padding: 10rpx 20rpx 10rpx 20rpx;
				}
				.name{
					
					font-size: 26rpx;
					word-break: break-all;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					overflow: hidden;
					-webkit-box-orient: vertical;
				}
				.creator{
					font-size: 24rpx;
					padding: 0 20rpx 10rpx 20rpx;
					color: #aaa;
				}
			}
		}
	}
</style>