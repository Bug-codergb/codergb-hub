<template>
  <div class="cate-video">
    <div class="cate-title">
      <el-tag class="ml-2" type="success" size="large">{{ name }}</el-tag>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="分类视频" name="first">
        <VideoTable :key="keyIndex" :url="url" :isOperate="false" :exclude-header="['cate']" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import VideoTable from '@/components/content/videoTable/VideoTable.vue';
const route = useRoute();
const { id } = route.params;
const { name } = route.query;
const url = ref('');
url.value = `/video/cate/${id}`;
const keyIndex = ref(0);
const activeName = ref('first');
</script>

<style scoped lang="less">
.cate-title {
  font-size: (24/40rem);
  margin: 0 0 (12/40rem) 0;
}
</style>
