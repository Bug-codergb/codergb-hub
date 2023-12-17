<template>
	<view class="video-info">
		<view class="header">
			<view class="user-container">
				<view class="img-container">
					<image :src='videoDetail.user.avatarUrl' mode="widthFix"></image>
				</view>
				<text class="user-name">{{ videoDetail.user.userName }}</text>
			</view>
			<view class="sub">关注</view>
		</view>
		<uni-collapse ref="collapse">
			<uni-collapse-item :title="videoDetail.name" titleBorder="none">
				<template #title>
					<view class="name">{{ videoDetail.name }}</view>
				</template>
				<view class="desc">{{ videoDetail.description }}</view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script setup>
	import {
		getVideoDetail
	} from "../../../../../network/video/index.js";
	import {
		reactive,
		ref,
		defineProps,
		watch
	} from "vue";
	const props = defineProps({
		videoId: {
			type: String,
			default: ""
		}
	})
	console.log(props, "-----")
	const videoDetail = ref({
		user: {}
	});
	watch(() => props.videoId, () => {
		if (props.videoId) {

			getVideoDetail(props.videoId).then((res) => {
				if (res.status === 200) {
					console.log(res.data)
					videoDetail.value = res.data;
				}
			})
		}
	})
</script>

<style lang="scss" scoped>
	.video-info {
		padding: 15rpx 20rpx;
		margin: 0 0 10rpx 0;
		.header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 0 0 15rpx 0;
		}

		.user-container {
			display: flex;
			align-items: center;

			.img-container {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				overflow: hidden;

				image {
					width: 100%;
				}
			}

			.user-name {
				font-size: 24rpx;
				margin: 0 0 0 10rpx;
			}
		}

		.name {
			font-size: 28rpx;
		}

		.desc {
			font-size: 26rpx;
			color: #bbbbbb;
			margin: 10rpx 0 0 0;
		}
	}
</style>
