<template>
  <div class="collection-detail">
    <div class="detail-header">
      <el-row>
        <el-col :span="4" class="img-container">
          <el-image :src="colDetail.detail.picUrl" />
        </el-col>
        <el-col :span="18">
          <el-row class="item">
            <el-col :span="12">
              <span class="key">集合名称</span>
              <span class="value">{{ colDetail.detail.name }}</span>
            </el-col>
            <el-col :span="12">
              <span class="key">创建用户</span>
              <span class="value">{{ colDetail.detail.user?.userName }}</span>
            </el-col>
          </el-row>
          <el-row class="item">
            <el-col :span="12">
              <span class="key">创建时间</span>
              <span class="value">{{
                moment(colDetail.detail.createTime).format('yyyy-MM-DD HH:mm:ss')
              }}</span>
            </el-col>
            <el-col :span="12">
              <span class="key">更新时间</span>
              <span class="value">{{
                moment(colDetail.detail.updateTime).format('yyyy-MM-DD HH:mm:ss')
              }}</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="detail-body">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="集合视频" name="first">
          <VideoTable :key="keyIndex" :url="url" :isOperate="false">
            <template v-slot:video-end>
              <el-table-column label="操作" fixed="right">
                <template #default="scope">
                  <el-button
                    type="danger"
                    style="font-size: 13px; padding: 5px"
                    text
                    @click="delHandle(scope.row)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </template>
          </VideoTable>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { ICollection } from '@/types/collection/ICollection';
import { delColVideo, getColDetail } from '@/network/collection';
import { IResponseType } from '@/types/responseType';
import moment from 'moment';
import VideoTable from '@/components/content/videoTable/VideoTable.vue';
import { IVideo } from '@/types/video/IVideo';
import { ElMessageBox, ElMessage } from 'element-plus';

const route = useRoute();
const { id } = route.params;
const url = ref('');
const activeName = 'first';
const keyIndex = ref(0);
url.value = `/video/collection/${id}`;
const colDetail = reactive<{ detail: ICollection }>({
  detail: {}
});
getColDetail<IResponseType<ICollection>>(id).then((data) => {
  if (data.status === 200) {
    colDetail.detail = data.data;
  }
});
const delHandle = (item: IVideo) => {
  console.log(item);
  ElMessageBox.confirm('确定要删除么?', '警告', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      const result = await delColVideo(id, item.id);
      if (result.status === 200) {
        keyIndex.value = keyIndex.value + 1;
        ElMessage({
          type: 'success',
          message: '删除成功'
        });
      }
    })
    .catch(() => {});
};
</script>

<style scoped lang="less">
.img-container {
  margin: 0 (20/40rem) 0 0;
}
.item {
  margin: 0 (20/40rem) 0 0;
}
.key,
.value {
  font-size: (20/40rem);
}
.key::after {
  content: ' :';
}
.key {
  margin: 0 (14/40rem) 0 0;
}
</style>
