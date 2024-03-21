<template>
  <div class="top-bar">
    <div class="left-container">
      <div class="left">
        <img src="~/assets/img/new-logo.png"/>
      </div>
      <div class="right">
        <input v-model="keyword" placeholder="搜索你想看的"/>
      </div>
    </div>
    <div class="right-container"></div>
  </div>
</template>
<script>
const keyword = ref("")
</script>
<style lang="less"></style>