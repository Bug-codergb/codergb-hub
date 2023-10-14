<template>
	<view>
		<view ref="videoRef"></view>
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
			console.log(payload);
			this.id = payload.id;
		}
	}
</script>
<script setup>
	import { getCurrentInstance,onMounted,ref } from "vue";
	import { getVideoURL } from "../../../network/video/index.js";
	import Hls from "hls.js";
	import DPlayer from "dplayer";
	const url = ref("");
	const videoRef = ref(null);
	onMounted(()=>{
		const instance = getCurrentInstance();
		let id = instance.data.id;
		getVideoURL(id).then((data)=>{
			if(data.status===200){
				url.value = data.data.url;
				if(videoRef.value){
					const dp = new DPlayer({
					  container: videoRef.value,
						autoplay:true,
						loop:true,
						preload:"ayto",
						volume:0.7,
					  video: {
					    url: url.value,
							type:"customHls",
							customType:{
								customHls:function(video,player){
									const hls = new Hls();
									hls.loadSource(video.src),
									hls.attachMedia(video);
								}
							}
					  },
					});
				}
			}
		})
	})
	
</script>

<style>
</style>