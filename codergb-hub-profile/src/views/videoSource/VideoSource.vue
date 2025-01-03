<template>
  <div class="g-inner-card table-box">
    <GbHeader :header="header" :isShowRefresh="true" :is-show-create="false" @refresh="refresh">
      <template #btnContent> </template>
    </GbHeader>
    <GbTable :table-data="tableData" ref="gbTableRef" />
    <AssociateVideo ref="associateVideo" />
    <Chunk ref="chunkRef" />
  </div>
</template>
<script setup lang="tsx">
import GbTable from '@/components/common/gbTable/GbTable.vue';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import { IVideoSource } from '@/types/video/IVideo';
import { reactive, ref } from 'vue';
import { useHeader } from './config';
import { ITableData } from '@/types/tableData/tableData';
import { ElMessage, ElMessageBox } from 'element-plus';
import AssociateVideo from './childCpn/associateVideo/AssociateVideo.vue';
import Chunk from './childCpn/chunk/Chunk.vue';
import { deleteVideoSource } from '@/network/video';

const associateVideo = ref();
const chunkRef = ref();
const tableData = reactive<ITableData<IVideoSource>>({
  url: '/video/source',
  pageSize: 9,
  method: 'post',
  params: {
    offset: 0,
    limit: 9,
    keyword: '',
    isNull: 2
  },
  columns: [
    {
      prop: 'name',
      label: '文件名称',
      minWidth: 150,
      formatter: (row: IVideoSource) => {
        return <span className="chunk-name">{row.name}</span>;
      }
    },
    {
      prop: 'count',
      label: '关联视频个数',
      minWidth: 80
    },
    {
      prop: 'count',
      label: '切片数',
      minWidth: 80,
      formatter: (row: IVideoSource) => {
        return <span>{row.chunk.length}</span>;
      }
    },
    {
      prop: '',
      label: '操作',
      btns: [
        {
          text: '关联视频',
          type: 'primary',
          onClick: (item, index) => {
            if (item.count > 0) {
              associateVideo.value.showDialog(item);
            } else {
              ElMessage({
                type: 'warning',
                message: '文件未关联视频'
              });
            }
          }
        },
        {
          text: '删除',
          type: 'danger',
          onClick: async (item, index) => {
            if (item.count > 0) {
              ElMessage.closeAll();
              ElMessage({
                type: 'warning',
                message: '该文件关联多个视频,请先删除视频'
              });
            } else {
              const result = await deleteVideoSource(item.name);
              if (result.status === 200) {
                ElMessage.closeAll();
                ElMessage({
                  type: 'success',
                  message: '删除成功'
                });
                gbTableRef.value.search();
              }
            }
          }
        },
        {
          text: '查看切片',
          type: 'primary',
          onClick: (item, index) => {
            if (item.chunk && item.chunk.length !== 0) {
              chunkRef.value.showDialog(item);
            } else {
              ElMessage({
                type: 'warning',
                message: '文件暂无切片'
              });
            }
          }
        }
      ]
    }
  ]
});
const gbTableRef = ref();
const { header } = useHeader(tableData, gbTableRef);

const refresh = () => {
  gbTableRef.value && gbTableRef.value.search();
};
</script>
<style lang="less">
.chunk-name {
  font-size: (18/40rem);
  color: #00a1d6;
}
</style>
