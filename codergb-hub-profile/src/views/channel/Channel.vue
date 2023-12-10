<template>
  <div class="channel-container">
    <GbHeader :header="header" />
    <GbTable :table-data="tableData" ref="gbTable" />
  </div>
</template>
<script setup lang="tsx">
import GbTable from '@/components/common/gbTable/GbTable.vue';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import { reactive, ref } from 'vue';
import { IChannel } from '@/types/channel/IChannel';
import moment from 'moment';
const tableData = reactive({
  url: '/channel/all',
  method: 'get',
  pageSize: 9,
  params: {
    offset: 0,
    limit: 9,
    keyword: ''
  },
  columns: [
    {
      label: '名称',
      prop: 'name',
      'min-width': 100
    },
    {
      label: '别名',
      prop: 'alias'
    },
    {
      label: '用户',
      prop: '',
      formatter: (row: IChannel) => {
        return <span>{row.user.userName}</span>;
      }
    },
    {
      label: '官方频道',
      prop: '',
      formatter: (row: IChannel) => {
        return <span>{row.official == 1 ? '是' : '否'}</span>;
      }
    },
    {
      label: '简介',
      prop: '',
      'min-width': 200,
      formatter: (row: IChannel) => {
        return <span class="text-mul-line">{row.description}</span>;
      }
    },
    {
      label: '频道预告片',
      prop: '',
      'min-width': 130,
      formatter: (row: IChannel) => {
        return <span class="text-mul-line">{row.trailer?.name}</span>;
      }
    },
    {
      label: '精选视频',
      prop: '',
      'min-width': 130,
      formatter: (row: IChannel) => {
        return <span class="text-mul-line">{row.featured?.name}</span>;
      }
    },
    {
      label: '创建时间',
      prop: '',
      width: 150,
      formatter: (row: IChannel) => {
        return <span>{moment(row.createTime).format('yyyy-MM-DD HH:mm')}</span>;
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
          onClick: () => {}
        },
        {
          text: '编辑',
          type: 'primary',
          onClick: () => {}
        },
        {
          text: '删除',
          type: 'danger',
          onClick: () => {}
        }
      ]
    }
  ]
});
const gbTable = ref<InstanceType<typeof GbHeader>>(null);
const header = reactive([
  {
    type: 'input',
    hint: '请输入播放频道名称',
    id: 'name',
    bingParam: '',
    attr: {
      clearable: true
    },
    onChange: (e: string) => {
      tableData.params.keyword = e;
      if (gbTable.value) gbTable.value.search();
    }
  }
]);
</script>
<style scoped lang="less"></style>
