<template>
  <div class="top-bar">
    <div class="left-container">codergb-hub</div>
    <div class="right-container">
      <el-avatar shape="square" size="large" :src="loginMsg.userMsg.avatarUrl" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import useLoginStore from '@/views/login/store';
const loginMsg = useLoginStore();
</script>

<style scoped lang="less">
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-container {
    display: flex;
    align-items: center;
    font-size: (40/40rem);
    color: #ff0000;
  }
}
</style>
