<template>
  <div class="sub-user-container">
    <GbTable :table-data="tableData" />
  </div>
</template>
<script setup lang="tsx">
import { defineProps, reactive, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import moment from 'moment';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import { ISubscriber } from '@/types/subscriber/ISubscriber';
import { USER_DETAIL_PATH } from '@/router/constant';
interface IProps {
  userId: string;
}
const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: 'userDetail', userId: string);
}>();
const router = useRouter();
const tableData = reactive({
  url: `/sub/user/${props.userId}`,
  method: 'post',
  pageSize: 9,
  data: {
    offset: 0,
    limit: 9
  },
  columns: [
    {
      label: '头像',
      prop: 'id',
      formatter: (scope: ISubscriber) => {
        return <el-avatar src={scope.up.avatarUrl} size={60} />;
      }
    },
    {
      label: '用户名称',
      prop: 'channel',
      formatter: (scope: ISubscriber) => {
        return <span>{scope.channel.name}</span>;
      }
    },
    {
      label: '粉丝数',
      prop: 'fans'
    },
    {
      label: '视频数',
      prop: 'video'
    },
    {
      label: '订阅时间',
      formatter: (scope: ISubscriber) => {
        return moment(scope.createTime).format('yyyy-MM-DD HH:mm');
      }
    },
    {
      label: '操作',
      btns: [
        {
          text: '查看',
          type: 'primary',
          onClick: (row: ISubscriber) => {
            emit('userDetail', row.up.userId);
          }
        }
      ]
    }
  ]
});
</script>

<style scoped lang="less"></style>
