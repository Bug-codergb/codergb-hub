<template>
  <div class="playlist">
    <GbTable :tableData="tableData" />
  </div>
</template>

<script lang="ts" setup>
import { h, reactive } from 'vue';
import moment from 'moment';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import { IPlaylist } from '../../types/playlist';
import { IUserMsg } from '@/types/user/IUserMsg';

const tableData = reactive({
  url: '/playlist/all',
  method: 'get',
  pageSize: 9,
  params: {
    offset: 0,
    limit: 9
  },
  columns: [
    {
      prop: 'name',
      label: '名称',
      'min-width': 100
    },
    {
      prop: 'isPublic',
      label: '状态',
      'min-width': 90,
      formatter: (row: IPlaylist) => {
        const { isPublic } = row;
        return isPublic === 1 ? '公开' : '私有';
      }
    },
    {
      prop: 'user',
      label: '用户',
      'min-width': 100,
      formatter: (row: IPlaylist) => {
        const { user } = row;
        return user.userName;
      }
    },
    {
      prop: 'createTime',
      label: '创建时间',
      'min-width': 160,
      formatter: (row: IPlaylist) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm:ss');
      }
    },
    {
      prop: 'updateTime',
      label: '更新时间',
      'min-width': 160,
      formatter: (row: IPlaylist) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm:ss');
      }
    },
    {
      prop: 'history',
      label: '是否存储历史记录',
      'min-width': 120,
      formatter: (row: IPlaylist) => {
        const { history } = row;
        return history === 1 ? '是' : '否';
      }
    },
    {
      prop: 'isExplore',
      label: '是否为探索模块',
      'min-width': 120,
      formatter: (row: IPlaylist) => {
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
          onClick: (row: IPlaylist, index: number) => {
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
          onClick: (row: IPlaylist, index: number) => {
            console.log(index);
          }
        }
      ]
    }
  ]
});
</script>

<style scoped></style>
