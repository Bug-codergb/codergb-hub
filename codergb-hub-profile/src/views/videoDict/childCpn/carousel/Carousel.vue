<script setup lang="tsx">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import moment from 'moment';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import CreateCarousel from '@/views/videoDict/childCpn/carousel/childCpn/CreateCarousel.vue';
import { deleteCarousel } from '@/network/video';
import { ElMessage } from 'element-plus';
import { VIDEO_DETAIL_PATH } from '@/router/constant';
const createHandle = () => {
  createCarouselRef.value.showDrawer();
};
const tableData = reactive({
  url: '/video/carousel/all',
  method: 'get',
  columns: [
    {
      label: '名称',
      prop: 'title',
      formatter: (row: any) => {
        return (
          <span class="carousel-content" onClick={() => videoRouter(row)}>
            {row.title}
          </span>
        );
      }
    },
    {
      label: '简介',
      prop: 'description'
    },
    {
      label: '封面',
      prop: 'picUrl',
      formatter: (scope: any) => {
        return <el-image style="width: 200px; height: 70px" src={scope.picUrl} fit="contain" />;
      }
    },
    {
      label: '创建时间',
      prop: 'createTime',
      formatter: (scope: any) => {
        return moment(scope.createTime).format('yyyy-MM-DD HH:mm');
      }
    },
    {
      label: '操作',
      prop: '',
      btns: [
        {
          text: '删除',
          type: 'danger',
          onClick: async (row: any) => {
            console.log(row);
            const res = await deleteCarousel(row.id);
            if (res.status === 200) {
              ElMessage({
                type: 'success',
                message: '删除成功'
              });
              refreshHandler();
            }
          }
        }
      ]
    }
  ]
});
const header = reactive([]);
const createCarouselRef = ref();
const router = useRouter();
const videoRouter = (video: any) => {
  router.push({
    path: VIDEO_DETAIL_PATH + '/' + video.videoId
  });
};
const gbTable = ref();
const refreshHandler = () => {
  if (gbTable.value) {
    gbTable.value.search();
  }
};
</script>

<template>
  <div class="table-box carousel-container">
    <GbHeader
      :header="header"
      :isShowRefresh="true"
      @create="createHandle"
      @refresh="refreshHandler"
    />
    <GbTable :tableData="tableData" ref="gbTable" />
    <CreateCarousel ref="createCarouselRef" @refresh="refreshHandler" />
  </div>
</template>

<style lang="less">
.carousel-content {
  cursor: pointer;
  color: #5a9cf8;
}
</style>
