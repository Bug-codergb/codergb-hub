<template>
  <div class="channel-container">
    <GbHeader :header="header" :is-show-create="false" />
    <GbTable :table-data="tableData" ref="gbTable" />
  </div>
</template>
<script setup lang="tsx">
import GbTable from '@/components/common/gbTable/GbTable.vue';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import { reactive, ref, getCurrentInstance } from 'vue';
import { IChannel } from '@/types/channel/IChannel';
import moment from 'moment';
import { User } from '@element-plus/icons-vue';
import router from '@/router';
import { CHANNEL_DETAIL_PATH } from '@/router/constant';

const instance = getCurrentInstance();

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
      'min-width': 150
    },
    {
      label: '别名',
      prop: 'alias',
      width: 120,
      formatter: (scope: IChannel) => {
        return <span>{scope.alias ?? '--'}</span>;
      }
    },
    {
      label: '用户',
      prop: '',
      width: 150,
      formatter: (row: IChannel) => {
        return (
          <div class="base-user-info-icon">
            <el-icon>
              <User />
            </el-icon>
            <span onClick={() => instance?.proxy?.$userRouter(row.user.userId)}>
              {row.user.userName}
            </span>
          </div>
        );
      }
    },
    {
      label: '官方频道',
      prop: '1',
      formatter: (row: IChannel) => {
        return <span>{row.official == 1 ? '是' : '否'}</span>;
      }
    },
    {
      label: '简介',
      prop: '2',
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
        return (
          <span
            class="text-mul-line g-trailer"
            onClick={() => instance?.proxy?.$videoRouter(row.trailer?.id)}
          >
            {row.trailer?.name}
          </span>
        );
      }
    },
    {
      label: '精选视频',
      prop: '',
      'min-width': 130,
      formatter: (row: IChannel) => {
        return (
          <span
            class="text-mul-line g-featured"
            onClick={() => instance?.proxy?.$videoRouter(row.featured?.id)}
          >
            {row.featured?.name}
          </span>
        );
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
      'min-width': 160,
      fixed: 'right',
      btns: [
        {
          text: '查看',
          type: 'primary',
          onClick: (row: IChannel) => {
            console.log(row);
            router.push({
              path: `${CHANNEL_DETAIL_PATH}/${row.user.userId}`
            });
          }
        },
        {
          text: '编辑',
          type: 'primary',
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
<style lang="less">
.g-trailer,
.g-featured {
  cursor: pointer;
  color: #47b1ff;
}
</style>
