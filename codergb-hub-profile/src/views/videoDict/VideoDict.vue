<template>
  <div class="video-dict">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="视频分类" name="first"> <Cate /> </el-tab-pane>
      <el-tab-pane label="视频标签" name="second">视频标签</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Cate from './childCpn/cate/Cate.vue';
import type { TabsPaneContext } from 'element-plus';
const activeName = ref('first');
</script>

<style scoped></style>
