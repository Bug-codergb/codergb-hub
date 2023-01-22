<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
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

<style scoped></style>
