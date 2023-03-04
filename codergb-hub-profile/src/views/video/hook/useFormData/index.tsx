import { ref } from 'vue';
const useFormData = () => {
  const formData = ref({
    title: '',
    desc: '',
    videoId: '',
    playlist: '',
    tag: [],
    cate: '',
    imgId: '',
    dt: 0
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
  };
  return {
    formData,
    resetFormData: resetFormData
  };
};
export default useFormData;
