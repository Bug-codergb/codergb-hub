export async function getVideoDuration(file: File): Promise<number> {
  const url: string = URL.createObjectURL(file);
  const oVideo: HTMLVideoElement = document.createElement('video');
  oVideo.setAttribute('src', url);
  return await new Promise((resolve, reject) => {
    oVideo.oncanplay = () => {
      resolve(oVideo.duration * 1000);
    };
  });
}
