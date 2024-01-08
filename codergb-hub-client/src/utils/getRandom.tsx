const charStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';
function randomIndex(min: number, max: number, i: number) {
  let index = Math.floor(Math.random() * (max - min + 1) + min);
  const numStart = charStr.length - 10;
  if (i === 0 && index >= numStart) {
    index = randomIndex(min, max, i);
  }
  return index;
}
function getRandomStr(len: number) {
  const min = 0;
  const max = charStr.length - 1;
  let str = '';
  len = len || 15;
  for (let i = 0, index; i < len; i++) {
    index = randomIndex(min, max, i);
    str += charStr[index];
  }
  return str;
}
const getRandom = (m: number, n: number) => {
  return Math.floor(Math.random() * (n - m + 1)) + m;
};
export { getRandom, getRandomStr };
