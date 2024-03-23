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