<template>
  <div class="channel-detail">
    <template v-if="channel">
      <el-card header="频道横幅">
        <el-image :src="channel.picUrl" style="text-align: center; width: 100%" />
      </el-card>
      <el-card header="基本信息">
        <el-form inline>
          <el-row :gutter="12">
            <el-col :span="8">
              <el-form-item label="名称: ">{{ channel.name }}</el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="别名: ">{{ channel.alias ?? '--' }}</el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="创建时间: ">{{
                moment(channel.createTime).format('yyyy-MM-DD HH:mm')
              }}</el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="12">
            <el-col :span="8">
              <el-form-item label="用户: ">
                <el-avatar :src="channel.user.avatarUrl" />
                <span class="user-name">{{ channel.user.userName }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="预告片: ">
                <span
                  v-if="channel && channel.trailer"
                  class="user-name trailer"
                  @click="$videoRouter(channel.trailer?.id)"
                  >{{ channel.trailer?.name }}</span
                >
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="精选视频: ">
                <span
                  class="user-name featured"
                  v-if="channel.featured"
                  @click="$videoRouter(channel.featured?.id)"
                  >{{ channel.featured?.name }}</span
                >
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="12">
            <el-col :span="24">
              <el-form-item label="简介: ">{{ channel.description ?? '--' }}</el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
    </template>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import moment from 'moment';
import { useRoute } from 'vue-router';
import { getUserChannel } from '@/network/channel';
import { IResponseType } from '@/types/responseType';
import { IChannel } from '@/types/channel/IChannel';
const route = useRoute();
const { id } = route.params;
const channel = ref<IChannel | null>(null);
getUserChannel<IResponseType<IChannel>>(id as string).then((res) => {
  if (res.status === 200) {
    channel.value = res.data;
  } else {
    channel.value = null;
  }
});
</script>
<style scoped lang="less">
.el-card {
  margin: 0 0 15px 0;
}
.channel-detail {
  font-size: (24/40rem);
}
.user-name {
  font-size: (20/40rem);
  color: #47b1ff;
  margin: 0 0 0 10px;
  &.featured {
    cursor: pointer;
  }
  &.trailer {
    cursor: pointer;
  }
}
</style>
