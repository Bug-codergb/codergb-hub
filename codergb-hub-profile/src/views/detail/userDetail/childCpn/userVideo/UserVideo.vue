<template>
  <div class="video-page">
    <video-page :url="url" :exclude-header="['tag', 'cate']" :is-show-create="false" />
  </div>
</template>
<script setup lang="ts">
interface IProps {
  url: string;
}
import { defineProps, withDefaults } from 'vue';
import VideoPage from '@/components/content/videoTable/VideoTable.vue';
const props = withDefaults(defineProps<IProps>(), {});
</script>

<style scoped lang="less">
.video-page {
  height: 100%;
}
</style>
