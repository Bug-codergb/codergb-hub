import { getRandom } from '@/constant/random';

const colors = ['#409eff', '#67c23a', '#909399', '#f56c6c', '#e6a23c'];
const getRandColor = () => {
  return colors[getRandom(0, colors.length - 1)];
};
export { colors, getRandColor };
