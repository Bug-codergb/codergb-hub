<script setup lang="ts">
import { defineProps, ref, nextTick } from 'vue';
import Hls from 'hls.js';
import { deleteVideoSource, getVideoChunks, getVideoURL } from '@/network/video';
import { IResponseType } from '@/types/responseType';
import { ElMessage, ElMessageBox } from 'element-plus';
interface IProps {
  id: string;
}
const props = defineProps<IProps>();
const url = ref('');
const videoRef = ref<HTMLVideoElement | null>(null);

getVideoURL(props.id).then((res) => {
  if (res.status === 200) {
    nextTick(() => {
      if (Hls.isSupported() && videoRef.value) {
        let url = res.data.vioUrl;

        if (import.meta.env.VITE_NODE_ENV === 'development') {
          url = url.replace(
            `${import.meta.env.VITE_SERVER_PORT}`,
            `${import.meta.env.VITE_WEBPACK_SERVER_PORT}/gb`
          );
        }
        const hls = new Hls();
        hls.loadSource(url);

        hls.attachMedia(videoRef.value);
      } else if (videoRef.value.canPlayType('application/vnd.apple.mpegurl')) {
        let url = res.data.vioUrl;

        if (import.meta.env.VITE_NODE_ENV === 'development') {
          url = url.replace(
            `${import.meta.env.VITE_SERVER_PORT}`,
            `${import.meta.env.VITE_WEBPACK_SERVER_PORT}/gb`
          );
        }
        console.log(url);
        if (videoRef.value) videoRef.value.src = url;
      }
    });
  }
});
const chunks = ref<string[]>([]);
getVideoChunks<IResponseType<string[]>>(props.id).then((res) => {
  if (res.status === 200) {
    chunks.value = res.data;
  }
});
const canplayHandler = () => {
  if (videoRef.value) {
    videoRef.value.volume = 0.6;
  }
};
const deleteHandler = (item: string, index: number) => {
  ElMessageBox.confirm('删除视频切片可能会导致视频不完整，确定删除吗?', '警告', {
    type: 'warning',
    confirmButtonText: '确定',
    cancelButtonText: '取消'
  })
    .then(async () => {
      const result = await deleteVideoSource(item);
      if (result.status === 200) {
        ElMessage({
          type: 'success',
          message: '删除成功'
        });
        chunks.value.splice(index, 1);
      }
    })
    .catch(() => {});
};
</script>

<template>
  <div class="video-info">
    <el-row style="height: 100%">
      <el-col :span="8">
        <div class="video-container">
          <video class="vio" controls ref="videoRef" @canplay="canplayHandler" />
        </div>
      </el-col>

      <el-col :span="14" style="height: 100%">
        <el-scrollbar>
          <el-alert
            show-icon
            :title="`该视频切片共有${chunks.length}片，删除切片可能会导致视频不完整，当切片不关联视频时即可删除！`"
            type="warning"
            :closable="false"
          />

          <ul class="chunk-list">
            <li v-for="(item, index) in chunks" :key="item">
              <span class="item">{{ item }}</span>
              <el-button text type="danger" @click="deleteHandler(item, index)">删除</el-button>
            </li>
          </ul>
        </el-scrollbar>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less">
.video-info {
  width: 100%;
  height: 100%;
  .video-container {
    width: 100%;
    aspect-ratio: 1.8;
  }
  .vio {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: #000;
  }
  .el-col {
    margin: 0 15px 0 0;
  }
  .chunk-list {
    margin: 10px 0 0 0;
    & > li {
      padding: 10px 20px 10px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 4px;
      &:nth-child(odd) {
        background-color: #f5f7fa;
      }
    }
  }
}
</style>
