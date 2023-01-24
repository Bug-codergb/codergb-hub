<template>
  <div class="user-list">
    <GbTable :tableData="tableData" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, h } from 'vue';
import { IVideo } from '@/types/video/IVideo';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import { getDurationByTimestamp } from '@/utils/time';
import { ITag } from '@/types/tag/ITag';
import moment from 'moment';
import { IUserMsg } from '@/types/user/IUserMsg';

const tableData = reactive({
  url: '/user/all',
  method: 'post',
  pageSize: 9,
  params: {
    offset: 0,
    limit: 9
  },
  columns: [
    {
      prop: 'userName',
      label: '名称',
      'min-width': 100
    },
    {
      prop: 'avatarUrl',
      label: '用户头像',
      'min-width': 90,
      formatter: (row: IUserMsg) => {
        return h('img', {
          src: row.avatarUrl,
          class: 'img-container',
          style: { width: '60px' }
        });
      }
    },
    {
      prop: 'createTime',
      label: '创建时间',
      'min-width': 160,
      formatter: (row: IVideo) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm:ss');
      }
    },
    {
      prop: 'updateTime',
      label: '更新时间',
      'min-width': 160,
      formatter: (row: IVideo) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm:ss');
      }
    },
    {
      prop: 'history',
      label: '是否存储历史记录',
      'min-width': 120,
      formatter: (row: IUserMsg) => {
        const { history } = row;
        return history === 1 ? '是' : '否';
      }
    },
    {
      prop: 'isExplore',
      label: '是否为探索模块',
      'min-width': 120,
      formatter: (row: IUserMsg) => {
        const { isExplore } = row;
        return isExplore === 1 ? '是' : '否';
      }
    },
    {
      label: '操作',
      'min-width': 200,
      fixed: 'right',
      btns: [
        {
          text: '查看',
          type: 'primary',
          onClick: (row: IVideo, index: number) => {
            console.log(row);
          }
        },
        {
          text: '编辑',
          type: 'primary'
          /*onClick: (row: ICate, index: number) => {
            if (createCateRef.value) {
              createCateRef.value.showDrawer(row);
            }
          }*/
        },
        {
          text: '删除',
          type: 'danger',
          onClick: (row: IVideo, index: number) => {
            console.log(index);
          }
        }
      ]
    }
  ]
});
</script>

<style scoped lang="less">
.user-list {
  .img-container {
  }
}
</style>
