import { ref } from 'vue';
interface IFormData {
  title: string;
  desc: string;
  videoId: string;
  playlist: string;
  tag: string[];
  cate: string;
  imgId: string;
  dt: number;
  imgURL: string;
}
const useFormData = () => {
  const formData = ref<IFormData>({
    title: '',
    desc: '',
    videoId: '',
    playlist: '',
    tag: [],
    cate: '',
    imgId: '',
    dt: 0,
    imgURL: ''
  });
  const resetFormData = () => {
    formData.value.title = '';
    formData.value.desc = '';
    formData.value.videoId = '';
    formData.value.playlist = '';
    formData.value.tag = [];
    formData.value.dt = 0;
    formData.value.cate = '';
    formData.value.imgId = '';
    formData.value.imgURL = '';
  };
  return {
    formData,
    resetFormData: resetFormData
  };
};
export default useFormData;
