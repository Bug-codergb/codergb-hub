<template>
  <div class="moment">
    <GbTable :table-data="tableData" ref="gbTable" />
  </div>
</template>
<script setup lang="tsx">
import moment from 'moment';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import { reactive, ref } from 'vue';
import { IMoment } from '@/types/moment';

const tableData = reactive({
  url: '/moment/list',
  method: 'post',
  pageSize: 9,
  params: {
    offset: 0,
    limit: 9,
    keyword: ''
  },
  columns: [
    {
      label: '标题',
      prop: 'title',
      'min-width': 120,
      formatter: (scope: IMoment) => {
        return <div class="text-mul-line">{scope.content}</div>;
      }
    },
    {
      label: '内容',
      prop: 'content',
      'min-width': 160,
      formatter: (scope: IMoment) => {
        return <div class="text-mul-line">{scope.content}</div>;
      }
    },
    {
      label: '关联视频',
      prop: 'video',
      'min-width': 100,
      formatter: (scope: IMoment) => {
        return <span class="text-mul-line">{scope.video.name}</span>;
      }
    },
    {
      label: '创建人',
      prop: 'user',
      formatter: (scope: IMoment) => {
        return <span>{scope.user.userName}</span>;
      }
    },
    {
      label: '频道',
      prop: 'channel',
      formatter: (scope) => {
        return <span>{scope.channel.name}</span>;
      }
    },
    {
      label: '创建时间',
      prop: 'createTime',
      width: 180,
      formatter: (scope) => {
        return <span>{moment(scope.createTime).format('yyyy-MM-DD HH:mm')}</span>;
      }
    },
    {
      label: '操作',
      fixed: 'right',
      width: 170,
      btns: [
        {
          text: '编辑',
          type: 'primary'
        },
        {
          text: '删除',
          type: 'danger'
        },
        {
          text: '查看',
          type: 'primary'
        }
      ]
    }
  ]
});
</script>

<style scoped lang="less"></style>
