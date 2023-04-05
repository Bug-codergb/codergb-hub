<template>
  <div class="video-table">
    <GbHeader :header="header" :isShowRefresh="true" @create="createHandle" />
    <GbTable
      :tableData="tableData"
      ref="gbTable"
      :isOperate="isOperate"
      @selectionChange="selectionChange"
    >
      <template v-slot:end>
        <slot name="video-end"></slot>
      </template>
    </GbTable>
  </div>
</template>

<script lang="tsx" setup>
import moment from 'moment';
import { reactive, ref, defineProps, defineEmits, defineExpose } from 'vue';
import { IVideo } from '@/types/video/IVideo';
import GbTable from '@/components/common/gbTable/GbTable.vue';
import GbHeader from '@/components/common/gbHeader/GbHeader.vue';
import { ITag } from '@/types/tag/ITag';
import { getDurationByTimestamp } from '@/utils/time';
import { ICate } from '@/types/category/ICate';
import { getAllCate } from '@/network/category';
import { IResponseType } from '@/types/responseType';
import { IPage } from '@/types/IPage';
import { getAllTag } from '@/network/tag';
import { getRandColor } from '@/constant/color';
import { deleteVideo } from '@/network/video';
import { ElMessage } from 'element-plus';
const props = defineProps({
  isOperate: {
    type: Boolean,
    default: true
  },
  url: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['selectionChange', 'create']);
const gbTable = ref<InstanceType<typeof GbHeader>>();
const cateList = reactive<{ list: ICate[] }>({
  list: []
});

const tableData = reactive({
  url: props.url,
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
          return (
            <el-tag class="video-tag" type="success" color={getRandColor()} effect="light">
              {item.name}
            </el-tag>
          );
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
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm');
      }
    },
    {
      prop: 'updateTime',
      label: '更新时间',
      'min-width': 160,
      formatter: (row: IVideo) => {
        return moment(row.updateTime).format('yyyy-MM-DD HH:mm');
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
          onClick: async (row: IVideo, index: number) => {
            console.log(index);
            const result = await deleteVideo(row.id);
            if (result.status === 200) {
              ElMessage.closeAll();
              ElMessage({
                type: 'success',
                message: '删除成功'
              });
              gbTable.value?.search();
            }
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
    id: 'name',
    bingParam: '',
    attr: {
      clearable: true
    },
    onChange: (e: string) => {
      tableData.data.keyword = e;
      gbTable.value.search();
    }
  },
  {
    type: 'select',
    hint: '请选择标签',
    id: 'tag',
    bingParam: '',
    attr: {
      multiple: true,
      'multiple-limit': 4,
      style: 'min-width:40%',
      clearable: true
    },
    options: [],
    onChange: (e: string[]) => {
      tableData.data.tag = e;
      gbTable.value.search();
    }
  },
  {
    type: 'select',
    hint: '请选择分类',
    id: 'cate',
    bingParam: '',
    options: [],
    attr: {
      clearable: true,
      style: 'min-width:30%'
    },
    onChange: (e: string) => {
      tableData.data.cate = e;
      gbTable.value.search();
    }
  }
]);
const getAllCateReq = async () => {
  const result = await getAllCate<IResponseType<IPage<ICate[]>>>(0, 15000, '');
  if (result.status === 200) {
    for (let item of header) {
      if (item.id === 'cate') {
        item.options = result.data.list.map((it) => {
          return {
            label: it.name,
            value: it.id
          };
        });
      }
    }
  }
};
const getAllTagReq = async () => {
  const result = await getAllTag<IResponseType<IPage<ITag[]>>>(0, 15000, '');
  if (result.status === 200) {
    for (let item of header) {
      if (item.id === 'tag') {
        item.options = result.data.list.map((it) => {
          return {
            label: it.name,
            value: it.id
          };
        });
      }
    }
  }
};
getAllCateReq();
getAllTagReq();
const selectionChange = (row: IVideo[]) => {
  emit('selectionChange', row);
};
const createHandle = () => {
  emit('create');
};
defineExpose({
  tableData,
  gbTable
});
</script>

<style lang="less">
.video-table {
  .video-tag {
    .el-tag__content {
      color: #ffffff !important;
    }
  }
}
</style>
<style scoped lang="less"></style>
