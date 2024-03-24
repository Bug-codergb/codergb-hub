<template>
  <div>
    <TopBar/>
    <div class="body-content">
      <NavBar/>
      <div class="content">
        <NuxtPage/>
      </div>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();

definePageMeta({
  needLogin: 'auth',
  middleware: 'route-middleware'
})

router.push({
  path:"/home/recommend"
})
</script>
<style lang="less">
  .body-content{
    display: flex;
    align-items: center;
    .content{
      padding:20px;
      width:100%;
      height: 100%;
    }
  }
</style>