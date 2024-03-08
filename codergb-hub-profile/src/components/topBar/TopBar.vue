<template>
  <div class="top-bar">
    <div class="left-container">
      <div>codergb-hub</div>
    </div>
    <div class="right-container">
      <el-dropdown @command="handleCommand">
        <el-avatar
          shape="square"
          size="large"
          :src="`${loginMsg.userMsg.avatarUrl}?code=${new Date().getTime()}`"
        />
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
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue';
import useLoginStore from '@/views/login/store';
import { menu } from '@/constant/menu';
import { LOGIN_PATH, USER_DETAIL_PATH } from '@/router/constant';
const loginMsg = useLoginStore();
const router = useRouter();
const route = useRoute();
const handleCommand = (e: string) => {
  switch (e) {
    case 'exit':
      router.push({
        path: LOGIN_PATH
      });
      break;
    case 'profile':
      router.push({
        path: `${USER_DETAIL_PATH}/${loginMsg.userMsg.userId}`
      });
  }
};
const breadCrumb = computed(() => {
  const currentPath = route.path;
  let obj = {
    currentRoute: { name: '' },
    parentRoute: { name: '' }
  };
  for (let item of menu) {
    if (item.children) {
      for (let it of item.children) {
        if (it.path === currentPath) {
          obj.currentRoute = it;
          obj.parentRoute = item;
          break;
        }
      }
    }
  }
  console.log(obj);
  return obj;
});
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
