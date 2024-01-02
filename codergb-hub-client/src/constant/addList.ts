interface IAddType {
  icon: string;
  name: string;
}
const ADD_QUEUE = '添加到队列';
const ADD_WATCH_LATER = `保存到"稍后观看`;
const ADD_PLAYLIST = '保存到播放列表';
const addList = [
  {
    icon: '',
    name: ADD_QUEUE
  },
  {
    icon: '',
    name: ADD_WATCH_LATER
  },
  {
    icon: '',
    name: ADD_PLAYLIST
  }
];
export { addList, ADD_QUEUE, ADD_WATCH_LATER, ADD_PLAYLIST };
export type { IAddType };
