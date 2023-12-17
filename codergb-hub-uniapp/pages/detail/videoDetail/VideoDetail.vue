<template>
	<view class="video-detail">
		<view class="video-container" :key="keyIndex">
			<video :src="url" autoplay />
		</view> 
		<scroll-view scroll-y class="info-container">
			<VideoInfo :videoId="videoId"/>
			<Similar :cateId="videoDetail.category.id" 
								:videoId="videoId"
							 @play="playHandler"/>
		</scroll-view>
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
	import Similar from "./childCpn/similar/Similar.vue";
	import { getVideoURL,getVideoDetail } from "../../../network/video/index.js";
	const url = ref("");
	const videoRef = ref(null);
	const videoId = ref("");
  const videoDetail = ref({
		category:{
			id:""
		}
	});
	onMounted(()=>{
		const instance = getCurrentInstance();
		let id = instance.data.id;
		videoId.value = id;
		getVideoDetailReq(id);
		getVideoURLReq(id);
	})
	const getVideoURLReq=(id)=>{
		getVideoURL(id).then((data)=>{
			if(data.status===200){
				url.value = data.data.vioUrl;
			}
		})
	}
	const getVideoDetailReq=(id)=>{
		getVideoDetail(id).then((res)=>{
			if(res.status ===200){
				videoDetail.value = res.data;
			}
		})	
	}
	const keyIndex = ref(0);
	const playHandler=(item)=>{
		videoId.value = item.id;
		keyIndex.value+=1;
		getVideoURL(item.id);
		getVideoDetailReq(item.id);
	}
	
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
		.info-container{
			height: 69vh;
		}
	}
</style>