export async function getVideoDuration(file: File):Promise<number> {
  let url: string = URL.createObjectURL(file);
  let oVideo: HTMLVideoElement = document.createElement('video');
  oVideo.setAttribute('src', url);
  return new Promise((resolve, reject) => {
    oVideo.oncanplay = () => {
      resolve(oVideo.duration * 1000);
    };
  });
}