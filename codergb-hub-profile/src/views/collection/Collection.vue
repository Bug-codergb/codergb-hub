<template>
  <div>
    <GbHeader :header="header" :isShowRefresh="true" @create="createHandle" />
    <GbTable :tableData="tableData" ref="gbTable" />
    <CreateCol ref="createColRef" @refresh="refresh" />
    <AddVideo ref="addVideo" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import moment from 'moment';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import { getAllCate } from '@/network/category';
import { IResponseType } from '@/types/responseType';
import { ICate } from '@/types/category/ICate';
import { IPage } from '@/types/IPage';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import CreateCol from './childCpn/CreateCol.vue';
import AddVideo from './childCpn/AddVideo.vue';
import { ICollection } from '@/types/collection/ICollection';
import { useRouter } from 'vue-router';
import { COLLECTION_DETAIL_PATH } from '@/router/constant';

const gbTable = ref<InstanceType<typeof GbHeader>>();
const createColRef = ref<InstanceType<typeof CreateCol>>();
const addVideo = ref<InstanceType<typeof AddVideo>>();
const router = useRouter();
const tableData = reactive({
  url: '/collection/all',
  method: 'get',
  pageSize: 9,
  params: {
    offset: 0,
    limit: 9,
    keyword: ''
  },
  columns: [
    {
      prop: 'id',
      label: '分类编号',
      'min-width': 180
    },
    {
      prop: 'name',
      label: '集合名称',
      'min-width': 180
    },
    {
      prop: 'user',
      label: '创建者',
      'min-width': 140,
      formatter: (row: ICollection) => {
        const { user } = row;
        return user.userName;
      }
    },
    {
      prop: 'createTime',
      label: '创建时间',
      'min-width': 160,
      formatter: (row: ICollection) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm:ss');
      }
    },
    {
      prop: 'updateTime',
      label: '更新时间',
      'min-width': 160,
      formatter: (row: ICollection) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm:ss');
      }
    },
    {
      label: '操作',
      'min-width': 230,
      btns: [
        {
          text: '查看',
          type: 'primary',
          onClick: (row: ICollection, index: number) => {
            router.push({
              path: COLLECTION_DETAIL_PATH + '/' + row.id
            });
          }
        },
        {
          text: '添加视频',
          type: 'primary',
          onClick: (row: ICollection, index: number) => {
            addVideo.value.showDrawer(row);
          }
        },
        {
          text: '编辑',
          type: 'primary',
          onClick: (row: ICollection, index: number) => {}
        },
        {
          text: '删除',
          type: 'danger',
          onClick: (row: ICollection, index: number) => {
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
    hint: '请输入集合名称',
    id: '23',
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
const createHandle = () => {
  if (createColRef.value) {
    createColRef.value.showDrawer();
  }
};
const refresh = () => {
  gbTable.value.search();
};
</script>

<style scoped lang="less"></style>
