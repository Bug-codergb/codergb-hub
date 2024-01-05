import { reactive } from 'vue';
import { ITableData } from '@/types/tableData/tableData';
import { IDm } from '@/types/dm/IDm';

import moment from 'moment';
import { deleteDm } from '@/network/dm';
import { ElMessage } from 'element-plus';
const useTable = (id: string, gbTable: any) => {
  const tableData = reactive<ITableData<IDm>>({
    url: '/dm/video/' + id,
    params: {
      offset: 0,
      limit: 10
    },

    method: 'post',
    pageSize: 10,
    columns: [
      {
        label: '弹幕内容',
        prop: 'text',
        minWidth: 180
      },
      {
        label: '视频时间',
        prop: 'time'
      },
      {
        label: '用户',
        prop: '',
        formatter: (row: any) => {
          return <span>{row.user.userName}</span>;
        }
      },
      {
        label: '创建时间',
        prop: '',
        width: 150,
        formatter: (row: IDm) => {
          return <span>{moment(row.createTime).format('yyyy-MM-DD HH:mm')}</span>;
        }
      },
      {
        label: '操作',
        minWidth: 200,
        fixed: 'right',
        btns: [
          {
            text: '编辑',
            type: 'primary',
            onClick: () => {}
          },
          {
            text: '删除',
            type: 'danger',
            onClick: async (row: any) => {
              const res = await deleteDm(row.id);
              if (res.status === 200) {
                ElMessage.success('删除成功');
                if (gbTable.value) gbTable.value.search();
              }
            }
          }
        ]
      }
    ]
  });

  return {
    tableData
  };
};
export default useTable;
