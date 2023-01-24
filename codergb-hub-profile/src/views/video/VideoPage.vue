<template>
  <div>
    <GbHeader :header="header" :isShowRefresh="true" />
    <GbTable :tableData="tableData" ref="gbTable" />
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment';
import { reactive, ref } from 'vue';
import { IVideo } from '@/types/video/IVideo';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import { ITag } from '@/types/tag/ITag';
import { getDurationByTimestamp } from '@/utils/time';

const gbTable = ref<InstanceType<typeof GbHeader>>();
const tableData = reactive({
  url: '/video/all',
  method: 'post',
  pageSize: 9,
  params: {
    offset: 0,
    limit: 9
  },
  data: {
    keyword: '',
    cate: '',
    tag: []
  },
  columns: [
    {
      prop: 'name',
      label: '名称',
      'show-overflow-tooltip': true,
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
      'min-width': 80,
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
      prop: 'category',
      label: '分类',
      'min-width': 120,
      formatter: (row: IVideo) => {
        const { category } = row;
        return category.name;
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
const header = reactive([
  {
    type: 'input',
    hint: '请输入视频名称',
    id: '23',
    bingParam: '',
    onChange: (e: string) => {
      tableData.data.keyword = e;
      gbTable.value.search();
    }
  },
  {
    type: 'select',
    hint: '请选择标签',
    id: '232',
    bingParam: '',
    attr: {
      multiple: true,
      'multiple-limit': 4
    },
    options: [
      {
        label: 323232,
        value: '234433'
      }
    ],
    onChange: (e: string[]) => {
      tableData.data.tag = e;
      gbTable.value.search();
    }
  },
  {
    type: 'select',
    hint: '请选择分类',
    id: '23222',
    bingParam: '',
    options: [
      {
        label: 23,
        value: '23'
      }
    ],
    onChange: (e: string) => {
      tableData.data.cate = e;
      gbTable.value.search();
    }
  }
]);
</script>

<style scoped></style>
