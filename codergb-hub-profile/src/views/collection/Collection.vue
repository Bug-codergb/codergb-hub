<template>
  <div class="g-inner-card table-box">
    <GbHeader
      :header="header"
      :isShowRefresh="true"
      @create="createHandle"
      @refresh="refreshHandler"
    />
    <GbTable :tableData="tableData" ref="gbTable" />
    <CreateCol ref="createColRef" @refresh="refresh" />
    <AddVideo ref="addVideo" @refresh="refreshHandler" />
  </div>
</template>

<script lang="tsx" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import moment from 'moment';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import CreateCol from './childCpn/CreateCol.vue';
import AddVideo from './childCpn/AddVideo.vue';
import { ICollection } from '@/types/collection/ICollection';

import { COLLECTION_DETAIL_PATH, USER_DETAIL_PATH } from '@/router/constant';
import { deleteCol } from '@/network/collection';
import { ElMessage } from 'element-plus';
import { User } from '@element-plus/icons-vue';
import { IUserMsg } from '@/types/user/IUserMsg';

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
      prop: 'name',
      label: '集合名称',
      'min-width': 180
    },
    {
      prop: 'count',
      label: '视频数'
    },
    {
      prop: 'description',
      label: '简介',
      'min-width': 180,
      formatter: (scope: ICollection) => {
        return <span class="text-mul-line">{scope.description}</span>;
      }
    },
    {
      prop: 'user',
      label: '创建者',
      'min-width': 140,
      formatter: (row: ICollection) => {
        const { user } = row;
        return (
          <div class="base-user-info-icon" onClick={() => userRouter(user)}>
            <el-icon>
              <User />
            </el-icon>
            <span>{user.userName}</span>
          </div>
        );
      }
    },
    {
      prop: 'createTime',
      label: '创建时间',
      'min-width': 160,
      formatter: (row: ICollection) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm');
      }
    },
    {
      prop: 'updateTime',
      label: '更新时间',
      'min-width': 160,
      formatter: (row: ICollection) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm');
      }
    },
    {
      label: '操作',
      'min-width': 230,
      fixed: 'right',
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
            addVideo.value?.showDrawer(row);
          }
        },
        {
          text: '编辑',
          type: 'primary',
          onClick: (row: ICollection, index: number) => {
            if (createColRef.value) {
              createColRef.value.showDrawer(row);
            }
          }
        },
        {
          text: '删除',
          type: 'danger',
          onClick: async (row: ICollection, index: number) => {
            const result = await deleteCol(row.id);
            if (result.status === 200) {
              ElMessage.success('删除成功');
              gbTable.value?.search();
            }
          }
        }
      ]
    }
  ]
});
const refreshHandler = () => {
  gbTable.value?.search();
};
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
  gbTable.value?.search();
};
const userRouter = (user: IUserMsg) => {
  router.push({
    path: `${USER_DETAIL_PATH}/${user.userId}`
  });
};
</script>

<style scoped lang="less"></style>
