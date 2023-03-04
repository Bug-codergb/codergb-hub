import { ref } from 'vue';
import { getAllTag } from '@/network/tag';
import { IResponseType } from '@/types/responseType';
import { IPage } from '@/types/IPage';
import { ITag } from '@/types/tag/ITag';
const useTag = async (offset: number, limit: number) => {
  const tag = ref<ITag[]>([]);
  const total = ref<number>(0);
  const result = await getAllTag<IResponseType<IPage<ITag[]>>>(offset, limit);
  if (result.status === 200) {
    tag.value = result.data.list;
    total.value = result.data.count;
  } else {
    tag.value = [];
    total.value = 0;
  }
  return {
    tag,
    total
  };
};
export default useTag;
