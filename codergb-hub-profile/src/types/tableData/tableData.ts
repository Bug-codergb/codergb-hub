import { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';

interface IBtn<T> {
  text: string;
  type: string;
  onClick: (item: T, index: number) => void;
}
interface IColumns<T = any>
  extends Partial<Omit<TableColumnCtx<T>, 'children' | 'renderHeader' | 'renderCell'>> {
  prop?: string;
  label?: string;

  btns?: IBtn<T>[];
}
interface ITableData<T = any> {
  url: string;
  pageSize: number;
  method?: string;
  params: any;
  columns: IColumns<T>[];
}
export type { ITableData };
