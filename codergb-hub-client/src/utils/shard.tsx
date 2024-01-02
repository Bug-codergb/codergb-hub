import { mergeVideo, uploadVideo } from '../network/video';
import { WEBSOCKET_HOST_NAME } from '../constant/host';
import SparkMD5 from 'spark-md5';
import { getSocketMsg, socketClose, socketOpen } from '../network/websocket/mergeVideo';
import { getVideoDuration } from './video';
const chunkSize = 1024 * 1000;
async function getFileHash(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function (e) {
      if (e.target) {
        let buffer = e.target.result as ArrayBuffer;
        let spark = new SparkMD5.ArrayBuffer();
        let HASH;
        let suffix;
        if (buffer) {
          spark.append(buffer);
          HASH = spark.end();
          suffix = file.name.substring(file.name.lastIndexOf('.') + 1);
          resolve({
            buffer,
            HASH,
            suffix
          });
        }
      }
    };
  });
}
async function chunkHandle(
  HASH: string,
  index: number,
  file: File,
  name: string,
  total: number,
  type: string,
  uploadedSize: number,
  dest: string,
  dt: number,
  fn: (size: number) => void,
  handle: (progress: number) => void
) {
  try {
    fn(uploadedSize);
    if (uploadedSize > total) {
      let videoId = '';
      let params = `?dest=${dest}&hash=${HASH}&originalname=${name}&type=${type}&total=${total}&dt=${dt}`;
      let websocket = new WebSocket(`${WEBSOCKET_HOST_NAME}/video/merge${params}`);
      await socketOpen(websocket);
      videoId = await getSocketMsg(websocket, handle);
      return await socketClose(websocket, videoId);
    }
    let end = index * chunkSize + chunkSize;
    if (end > total - 1) {
      end = total - 1;
    }
    let blobFile = file.slice(index * chunkSize, end);

    let formData = new FormData();
    let fileBlob = new File([blobFile], name, {
      type: type
    });
    formData.append('index', `${index}`);
    formData.append('hash', HASH);
    formData.append('name', name);
    formData.append('size', `${total}`);
    formData.append('type', type);
    formData.append('chunkSize', `${chunkSize}`);
    formData.append('uploadedSize', `${uploadedSize}`);
    formData.append('video', fileBlob);
    const result = await uploadVideo(formData);
    if (result.status === 200) {
      const res: any = await chunkHandle(
        HASH,
        index + 1,
        file,
        name,
        total,
        type,
        result.data.uploadedSize,
        result.data.dest,
        dt,
        fn,
        handle
      );
      return res;
    }
  } catch (e) {
    console.log(e);
  }
}
async function shardUtils(
  file: File,
  fn: (size: number) => void,
  handle: (progress: number) => void
) {
  const { name, size, type } = file;
  let index = 0;
  const fileData: any = await getFileHash(file);
  const dt: number = await getVideoDuration(file);
  return await chunkHandle(fileData.HASH, index, file, name, size, type, 0, '', dt, fn, handle);
}
export { shardUtils };
