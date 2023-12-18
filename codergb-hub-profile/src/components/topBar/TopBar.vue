<template>
  <div class="top-bar">
    <div class="left-container">codergb-hub</div>
    <div class="right-container">
      <el-dropdown @command="handleCommand">
        <el-avatar shape="square" size="large" :src="loginMsg.userMsg.avatarUrl" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="profile">个人中心</el-dropdown-item>
            <el-dropdown-item command="exit">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import useLoginStore from '@/views/login/store';
import { LOGIN_PATH } from '@/router/constant';
const loginMsg = useLoginStore();
const router = useRouter();
const handleCommand = (e: string) => {
  switch (e) {
    case 'exit':
      router.push({
        path: LOGIN_PATH
      });
  }
};
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
