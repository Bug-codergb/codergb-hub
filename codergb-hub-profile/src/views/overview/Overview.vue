<template>
  <div class="overview">
    <el-row :gutter="24" class="data-analysis">
      <el-col :span="8">
        <el-card>
          <span class="label">视频数:</span>
          <span class="value">{{ dataAnalysis.video }}</span>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <span class="label">用户数:</span>
          <span class="value">{{ dataAnalysis.user }}</span>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <span class="label">播放列表数:</span>
          <span class="value">{{ dataAnalysis.playlist }}</span>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-card>
          <UserWorks />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import UserWorks from './childCpn/userWorks/UserWorks.vue';
import { getDataAnalysis } from '../../network/dashboard/index';
import { IResponseType } from '@/types/responseType';
interface IDataAnalysis {
  user: number;
  playlist: number;
  video: number;
}

const dataAnalysis = reactive<IDataAnalysis>({
  user: 0,
  playlist: 0,
  video: 0
});
getDataAnalysis<IResponseType<IDataAnalysis>>().then((res) => {
  if (res.status === 200) {
    dataAnalysis.user = res.data.user;
    dataAnalysis.playlist = res.data.playlist;
    dataAnalysis.video = res.data.video;
  }
});
</script>

<style scoped lang="less">
.overview {
  .el-row {
    margin: 0 0 15px 0;
  }
  .data-analysis {
    .el-col {
      text-align: left;
    }
    .label {
      margin: 0 5px 0 0;
      font-size: (28/40rem);
    }
    .value {
      font-size: (40/40rem);
    }
  }
}
</style>
