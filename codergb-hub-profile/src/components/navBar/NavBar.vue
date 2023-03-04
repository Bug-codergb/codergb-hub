<template>
  <div class="nav-bar">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :unique-opened="true"
      @open="handleOpen"
      default-active="1-1"
      @close="handleClose"
    >
      <template v-for="item in menu" :key="item.index">
        <el-sub-menu :index="item.index">
          <template #title>
            <el-icon> <component v-bind:is="item.icon" /></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-if="item.children && item.children.length !== 0">
            <template v-for="it in item.children" :key="it.index">
              <el-menu-item :index="it.index" @click="menuClick(it)">{{ it.name }}</el-menu-item>
            </template>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { menu } from '@/constant/menu';
const router = useRouter();
const menuClick = (it) => {
  console.log(it);
  router.push(it.path);
};
</script>
<style lang="less">
.nav-bar {
  .el-sub-menu__title:hover {
    background-color: #0a1a2a !important;
  }
  .el-menu-item {
    min-width: 180px;
  }
  .el-menu {
    border-right-color: #0c2135 !important;
  }
}
</style>
<style scoped lang="less">
.nav-bar {
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #00a1d6 !important;
    width: 100% !important;
  }

  .el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    height: calc(100% - 48px);
  }
}
</style>
