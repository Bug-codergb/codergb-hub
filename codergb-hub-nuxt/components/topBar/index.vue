<template>
  <div class="top-bar">
    <div class="left-container">
      <div class="left" @click="homeRouter">
        <img src="~/assets/img/new-logo.png"/>
      </div>
      <div class="right">
        <input v-model="keyword" placeholder="搜索你想看的"/>
      </div>
    </div>
    <div class="right-container"></div>
  </div>
</template>
<script setup>
const keyword = ref("");
const router = useRouter();
const homeRouter = () => {
  router.push({
    path:"/home"
  })
}
</script>
<style lang="less">
.top-bar{
  display: flex;
  border-bottom: 1px solid pink;
  .left-container{
    display: flex;
    align-items: center;
  }
}
</style>