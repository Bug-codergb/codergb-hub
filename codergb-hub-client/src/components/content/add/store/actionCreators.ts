import { type IVideo } from '../../../../types/video/IVideo';

export function changeQueue(video: IVideo) {
  return {
    type: 'changeQueue',
    video
  };
}
export function changeQueueAction(queue: IVideo[]) {
  return {
    type: 'changeQueueList',
    queue
  };
}
