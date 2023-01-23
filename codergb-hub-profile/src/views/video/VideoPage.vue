<template>
  <div>
    <GbTable :tableData="tableData" />
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment';
import { reactive, h } from 'vue';
import { IVideo } from '@/types/video/IVideo';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import { ITag } from '@/types/tag/ITag';
import { getDurationByTimestamp } from '@/utils/time';
const tableData = reactive({
  url: '/video/all',
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
      'min-width': 180
    },
    {
      prop: 'playCount',
      label: '播放量',
      'min-width': 90
    },
    {
      prop: 'dt',
      label: '时长',
      'min-width': 90,
      formatter: (row: IVideo) => {
        return getDurationByTimestamp(row.dt);
      }
    },
    {
      prop: 'user',
      label: '创建者',
      'min-width': 90,
      formatter: (row: IVideo) => {
        return row.user.userName;
      }
    },
    {
      prop: 'tag',
      label: '标签',
      'min-width': 180,
      formatter: (row: IVideo) => {
        const { tag } = row;
        return tag.map((item: ITag) => {
          return item.name + ' ';
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

<style scoped></style>
