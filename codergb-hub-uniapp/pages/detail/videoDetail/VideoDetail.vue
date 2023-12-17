<template>
	<view class="video-detail">
		<view class="video-container">
			<video :src="url"/>
		</view> 
		<VideoInfo :videoId="videoId"/>
	</view>
</template>
<script>
	export default{
		data(){
			return {
				id:""
			}
		},
		onLoad(payload) {
			this.id = payload.id;
		}
	}
</script>
<script setup>
	import { getCurrentInstance,onMounted,ref } from "vue";
	import VideoInfo from "./childCpn/videoInfo/VideoInfo.vue";
	import { getVideoURL } from "../../../network/video/index.js";
	const url = ref("");
	const videoRef = ref(null);
	const videoId = ref("");

	onMounted(()=>{
		const instance = getCurrentInstance();
		let id = instance.data.id;
			videoId.value = id;
			
		getVideoURL(id).then((data)=>{
			if(data.status===200){
				url.value = data.data.url;
			}
		})
	})
	
</script>

<style lang="scss" scoped>
	.video-detail{
		.video-container{
			width: 100%;
			height: 30vh;
			video{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>