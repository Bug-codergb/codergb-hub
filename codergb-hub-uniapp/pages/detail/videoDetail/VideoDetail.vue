<template>
	<view>
		<video :src="url"/>
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
	//import DPlayer from "dplayer";
	const url = ref("");
	const videoRef = ref(null);
	onMounted(()=>{
		const instance = getCurrentInstance();
		let id = instance.data.id;
		getVideoURL(id).then((data)=>{
			if(data.status===200){
				url.value = data.data.url;
			}
		})
	})
	
</script>

<style>
</style>