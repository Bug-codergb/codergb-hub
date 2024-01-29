<template>
  <div class="moment">
    <GbHeader :header="header" :isShowRefresh="true" />
    <GbTable :table-data="tableData" ref="gbTable" />
  </div>
</template>
<script setup lang="tsx">
import moment from 'moment';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { IMoment } from '@/types/moment';
import { MOMENT_DETAIL_PATH } from '@/router/constant';
const gbTable = ref();
const router = useRouter();
const tableData = reactive({
  url: '/moment/list',
  method: 'post',
  pageSize: 8,
  params: {
    offset: 0,
    limit: 8,
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
          type: 'primary',
          onClick: (scope: IMoment) => {
            router.push({
              path: MOMENT_DETAIL_PATH + `/${scope.id}`
            });
          }
        }
      ]
    }
  ]
});
const header = reactive([
  {
    type: 'input',
    hint: '请输入播放列表名称',
    id: 'name',
    bingParam: '',
    attr: {
      clearable: true
    },
    onChange: (e: string) => {
      tableData.params.keyword = e;
      gbTable.value.search();
    }
  }
]);
</script>

<style scoped lang="less"></style>
