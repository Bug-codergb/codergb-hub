<template>
  <div>
    <ul class="video-container">
      <li v-for="item in videoList" :key="item.id">
        <div class="img-container" @click="videoRouter(item)">
          <img :src="item.picUrl"/>
        </div>
        <div class="state">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup>
const videoList = ref([]);
const router = useRouter();
onMounted(async () => {
  console.log(1)
  const result = await $fetch(`/api/video/all?offset=0&limit=44`, {
    method: "post",
    headers: {
      'Authorization':cache.getCache("userMsg").token
    },
    body: {
      keyword:""
    }
  })
  if (result.status === 200) {
    console.log(result.data)
    videoList.value = result.data.list;
  }
})
const videoRouter = (item) => {
  console.log(item)
  router.push({
    path:`/detail/videoDetail/${item.id}`
  })
}
</script>
<style lang="less" scoped>
  .video-container{
    height: 88vh;
    overflow-y: auto;
    display:flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    &>li{
      width:300px;
      margin: 0 0 20px 0;
      img{
        width:100%;
        border-radius: 5px;
      }
      .state{
        margin: 10px 0 0 0;
      }
    }
  }
</style>