<template>
	<view class="similar-container">
		<view v-for="item in videoList" :key="item.id" class="item">
			<view class="img-container" @click="playVideo(item)">
				<image :src="item.picUrl" mode="widthFix"></image>
			</view>
			<view class="right-container">
				<view class="name" @click="playVideo(item)">{{ item.name }}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { watch ,ref} from "vue";
	import {getSimilarVideo} from "../../../../../network/video/index.js"
	const props = defineProps({
		cateId:{
			type:String,
			default:""
		},
		videoId:{
			type:String,
			default:""
		}
	})
	const emit = defineEmits(['play'])
	const videoList = ref([]);
	watch(()=>props.cateId,()=>{
		if(props.cateId){
			getSimilarVideo(props.cateId,0,10).then((res)=>{
				if(res.status == 200){
					videoList.value = res.data.list.filter((item)=>{
						return item.id !==props.videoId
					});
				}
			})
		}
	})
	const playVideo=(item)=>{
		emit("play",item);
	}
</script>

<style lang="scss" scoped>
	.similar-container{
		padding: 0 20rpx;
		.item{
			display: flex;
			align-items: flex-start;
			padding: 15rpx 0;
			border-bottom: 1px solid #bbbbbb;
			.img-container{
				width:260rpx;
				image{
					width:100%;
					border-radius: 4px;
				}
			}
			.right-container{
				flex: 1;
				margin: 0 0 0 15rpx;
				.name{
					font-size: 24rpx;
				}
			}
		}
	}
</style>