import { ITableData } from '@/types/tableData/tableData';
import { reactive, Ref } from 'vue';
const useHeader = (tableData: ITableData, tableDataRef: Ref<any>) => {
  const header = reactive([
    {
      type: 'input',
      hint: '文件名称',
      attr: {
        clearable: true
      },
      onChange: (e: string) => {
        tableData.params.keyword = e;
        tableDataRef.value.search();
      }
    },
    {
      type: 'select',
      hint: '关联视频',
      attr: {
        clearable: false
      },
      onChange: (e: number) => {
        tableData.params.isNull = e;
        tableDataRef.value.search();
      },
      options: [
        {
          label: '全部',
          value: 2
        },
        {
          label: '未关联视频',
          value: 1
        },
        {
          label: '已关联视频',
          value: 0
        }
      ]
    }
  ]);
  return { header };
};
export { useHeader };
