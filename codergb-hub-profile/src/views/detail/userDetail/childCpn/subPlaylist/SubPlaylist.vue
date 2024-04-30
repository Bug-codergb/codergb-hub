<template>
  <div class="sub-playlist">
    <gb-table :table-data="tableData" />
  </div>
</template>
<script setup lang="tsx">
import { reactive, defineProps } from 'vue';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import { IPlaylist } from '@/types/playlist/IPlaylist';
import moment from 'moment/moment';
import { PLAYLIST_DETAIL_PATH } from '@/router/constant';
import { View, Hide } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
interface IProps {
  userId: string;
}
const props = defineProps<IProps>();
const router = useRouter();
const tableData = reactive({
  url: `/playlist/user/sub/${props.userId}`,
  method: 'post',
  data: {
    offset: 0,
    limit: 10
  },
  pageSize: 10,
  columns: [
    {
      label: '名称',
      prop: 'name',
      formatter: (scope: IPlaylist) => {
        return <span class="text-mul-line">{scope.name}</span>;
      }
    },
    {
      label: '是否公开',
      prop: 'isPublic',
      formatter: (row: IPlaylist) => {
        const { isPublic } = row;
        return isPublic === 1 ? (
          <div class="playlist-status">
            <el-icon>
              <View />
            </el-icon>
            <span class="label">公开</span>
          </div>
        ) : (
          <div class="playlist-status">
            <el-icon>
              <Hide />
            </el-icon>
            <span class="label">私有</span>
          </div>
        );
      }
    },
    {
      label: '视频数量',
      prop: 'video'
    },
    {
      label: '简介',
      prop: 'description'
    },
    {
      label: '创建时间',
      prop: 'createTime',
      formatter: (scope: IPlaylist) => {
        return moment(scope.createTime).format('yyyy-MM-DD HH:mm');
      }
    },
    {
      label: '操作',
      prop: 'operation',
      btns: [
        {
          text: '查看',
          type: 'primary',
          onClick: (row: IPlaylist) => {
            router.push({
              path: PLAYLIST_DETAIL_PATH + '/' + row.id
            });
          }
        }
      ]
    }
  ]
});
</script>

<style scoped lang="less">
.sub-playlist {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
