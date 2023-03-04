import { reactive } from 'vue';
import useUserPlay from '@/hook/useUserPlay';
import useTag from '@/hook/useTag';
import useCate from '@/hook/useCate';
const useTableConstructor = async (userId: string) => {
  const { playlist, total } = await useUserPlay(userId, 0, 1500);
  const userPlaylist = playlist.value.map((item) => {
    return {
      label: item.name,
      value: item.id
    };
  });
  const tag = await useTag(0, 1500);
  const tagList = tag.tag.value.map((item) => {
    return {
      label: item.name,
      value: item.id
    };
  });

  const cate = await useCate(0, 1500, '');
  const cateList = cate.cate.value.map((item) => {
    return {
      label: item.name,
      value: item.id
    };
  });
  const tableConstructor = reactive([
    [
      {
        type: {
          name: 'input'
        },
        hint: '请输入视频标题',
        label: '视频名称',
        prop: 'title',
        required: true,
        trigger: 'blue'
      },
      {
        type: {
          name: 'input',
          attr: {
            type: 'textarea',
            rows: 3
          }
        },
        hint: '请输入视频简介',
        label: '视频简介',
        prop: 'desc',
        required: true,
        trigger: 'blue'
      },
      {
        type: {
          name: 'select',
          attr: {
            style: 'width:100%'
          }
        },
        hint: '请选择视频播放列表',
        label: '播放列表',
        prop: 'playlist',
        required: true,
        trigger: 'change',
        options: userPlaylist
      },
      {
        type: {
          name: 'select',
          attr: {
            style: 'width:100%',
            multiple: true,
            'multiple-limit': 6
          }
        },
        hint: '请选择视频标签',
        label: '视频标签',
        prop: 'tag',
        required: true,
        trigger: 'change',
        options: tagList
      },
      {
        type: {
          name: 'select',
          attr: {
            style: 'width:100%',
            multiple: false
          }
        },
        hint: '请选择视频分类',
        label: '视频分类',
        prop: 'cate',
        required: true,
        trigger: 'change',
        options: cateList
      },
      {
        type: {
          name: 'avatar',
          attr: {
            style: 'width:100%',
            alias: 'avatar'
          }
        },
        hint: '请选择集合封面',
        label: '视频封面',
        prop: 'imgId',
        required: true,
        trigger: 'change'
      },
      {
        type: {
          name: 'video',
          attr: {
            style: 'width:100%',
            alias: 'video'
          }
        },
        hint: '请选择视频源文件',
        label: '视频文件',
        prop: 'videoId',
        required: true,
        trigger: 'change'
      }
    ]
  ]);
  return tableConstructor;
};
export default useTableConstructor;
