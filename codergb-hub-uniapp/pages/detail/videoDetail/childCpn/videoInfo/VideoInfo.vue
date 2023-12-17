<template>
	<view class="video-info">
		{{videoId}}----
		<view class="user-container">
			<view class="img-container">
				<img :src="videoDetail.user.avatarUrl"/>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { getVideoDetail } from "../../../../../network/video/index.js";
	import {reactive,ref,defineProps,watch} from "vue";
	const props = defineProps({
		videoId:{
			type:String,
			default:""
		}
	})
	console.log(props,"-----")
	const videoDetail=ref({
		user:{}
	});
	watch(()=>props.videoId,()=>{
		if(props.videoId){
			
			getVideoDetail(props.videoId).then((res)=>{
				if(res.status ===200){
					console.log(res.data)
					videoDetail.value = res.data;
				}
			})
		}
	})
	
</script>

<style>
</style>