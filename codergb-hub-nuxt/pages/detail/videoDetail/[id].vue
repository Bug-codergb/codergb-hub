<template>
  <div class="video-container">
    <video ref="videoRef" class="vio" controls="true"/>
  </div>
</template>
<script setup>
import Hls from "hls.js";
const route = useRoute();
const { id } = route.params;
const videoRef = ref();
definePageMeta({
  validate: async (route) => {
    console.log(/^\d+$/.test(route.params.id))
    // 检查id是否由数字组成
    return /^\d+$/.test(route.params.id)
  }
})
$fetch(`/api/video/url/${id}`, {
  headers: {
    'Authorization':cache.getCache("userMsg").token
  },
}).then((res) => {
  if (res.status === 200) {
    console.log(res.data)
    let vioURL = res.data.vioUrl;
    vioURL = vioURL.replace("8888","7877/api")
    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(vioURL);
        // hls.loadSource('http://localhost:8888/video/0718294d1c07ee39c7ebb9cb93b0f9580.ts');
        hls.attachMedia(videoRef.value);
      } else if (videoRef.value.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.value.src = vioURL;
      }
  }
})
console.log(id)
</script>
<style lang="less" scoped>
.video-container{
  .vio{
    width: 400px;
    height: 200px;
    object-fit: contain;
  }
}
</style>