import { ref } from 'vue';
import { getUserPlaylist } from '@/network/playlist';
import { IResponseType } from '@/types/responseType';
import { IPage } from '@/types/IPage';
import { IPlaylist } from '@/types/playlist/IPlaylist';
const useUserPlay = async (userId: string, offset: number, limit: number) => {
  const playlist = ref<IPlaylist[]>([]);
  const total = ref<number>(0);
  const result = await getUserPlaylist<IResponseType<IPage<IPlaylist[]>>>(userId, offset, limit);
  if (result.status === 200) {
    playlist.value = result.data.list;
    total.value = result.data.count;
  } else {
    playlist.value = [];
    total.value = 0;
  }
  return {
    playlist,
    total
  };
};
export default useUserPlay;
