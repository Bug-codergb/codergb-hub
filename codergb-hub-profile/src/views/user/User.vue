<template>
  <div class="g-inner-card table-box">
    <GbHeader :header="header" @create="createHandler" @refresh="search" />
    <CreateUser ref="createUserRef" @refresh="search" />
    <UserRole ref="userRoleRef" />
    <GbTable :tableData="tableData" ref="gbTable" />
  </div>
</template>

<script lang="tsx" setup>
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { IVideo } from '@/types/video/IVideo';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import moment from 'moment';
import { IUserMsg } from '@/types/user/IUserMsg';
import { deleteUser } from '@/network/user/index';
import CreateUser from '@/views/user/childCpn/createUser/CreateUser.vue';
import UserRole from '@/views/user/childCpn/userRole/UserRole.vue';
import { USER_DETAIL_PATH } from '@/router/constant';
const router = useRouter();
const tableData = reactive({
  url: '/user/all',
  method: 'post',
  pageSize: 8,
  params: {
    offset: 0,
    limit: 8
  },
  data: {
    keyword: ''
  },
  columns: [
    {
      prop: 'userName',
      label: '名称',
      width: 100
    },
    {
      prop: 'avatarUrl',
      label: '用户头像',
      width: 90,
      formatter: (row: IUserMsg) => {
        return (
          <el-avatar
            key={row.avatarUrl}
            shape="square"
            fit="contain"
            src={`${row.avatarUrl}?t=${Math.random()}`}
          />
        );
      }
    },
    {
      prop: 'createTime',
      label: '创建时间',
      width: 160,
      formatter: (row: IVideo) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm');
      }
    },
    {
      prop: 'updateTime',
      label: '更新时间',
      width: 160,
      formatter: (row: IVideo) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm');
      }
    },
    {
      prop: 'history',
      label: '是否存储历史记录',
      'min-width': 160,
      formatter: (row: IUserMsg) => {
        const { history } = row;
        return history === 1 ? '是' : '否';
      }
    },
    {
      prop: 'isExplore',
      label: '是否为探索模块',
      width: 160,
      formatter: (row: IUserMsg) => {
        const { isExplore } = row;
        return isExplore === 1 ? '是' : '否';
      }
    },
    {
      label: '操作',
      'min-width': 240,
      fixed: 'right',
      btns: [
        {
          text: '查看',
          type: 'primary',
          onClick: (row: IUserMsg, index: number) => {
            router.push({
              path: USER_DETAIL_PATH + '/' + row.userId
            });
          }
        },
        {
          text: '设置用户角色',
          type: 'success',
          onClick: (row: IUserMsg, index: number) => {
            handleSetUserRole(row);
          }
        },
        {
          text: '编辑',
          type: 'primary',
          onClick: (row: IUserMsg, index: number) => {
            if (createUserRef.value) {
              createUserRef.value.showDrawer(row);
            }
          }
        },
        {
          text: '删除',
          type: 'danger',
          onClick: async (row: IUserMsg, index: number) => {
            const result = await deleteUser(row.userId);
            if (result.status === 200) {
              ElMessage({
                type: 'success',
                message: '删除成功'
              });
              search();
            }
          }
        }
      ]
    }
  ]
});

const gbTable = ref<InstanceType<typeof GbHeader>>(null);
const header = reactive([
  {
    type: 'input',
    hint: '请输入用户名称',
    id: 'name',
    bingParam: '',
    attr: {
      clearable: true
    },
    onChange: (e: string) => {
      tableData.data.keyword = e;
      if (gbTable.value) gbTable.value.search();
    }
  }
]);

const createUserRef = ref<InstanceType<typeof CreateUser>>(null);
const createHandler = () => {
  if (createUserRef.value) {
    createUserRef.value.showDrawer();
  }
};
const search = () => {
  if (gbTable.value) gbTable.value.search();
};

const userRoleRef = ref();
const handleSetUserRole = (item: IUserMsg) => {
  userRoleRef.value && userRoleRef.value.showDrawer(item);
};
</script>

<style scoped lang="less">
.user-list {
  .img-container {
  }
}
</style>
