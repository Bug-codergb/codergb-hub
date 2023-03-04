import { ref } from 'vue';
import { getAllCate } from '@/network/category';
import { IResponseType } from '@/types/responseType';
import { IPage } from '@/types/IPage';
import { ICate } from '@/types/category/ICate';
const useCate = async (offset: number, limit: number, keyword: string) => {
  const cate = ref<ICate[]>([]);
  const total = ref<number>(0);
  const result = await getAllCate<IResponseType<IPage<ICate[]>>>(offset, limit, keyword);
  if (result.status === 200) {
    cate.value = result.data.list;
    total.value = result.data.count;
  } else {
    cate.value = [];
    total.value = 0;
  }
  return {
    cate,
    total
  };
};
export default useCate;
