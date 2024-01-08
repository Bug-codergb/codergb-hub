function getDurationByTimestamp(time: string | number) {
  if (typeof time === 'string') time = parseInt(time);
  const timestamp: number = Math.floor(time / 1000) || 0;
  if (timestamp === 0) {
    return '00:00';
  } else {
    const hour: number = Math.floor(timestamp / 60 / 60);
    let yTimestamp = timestamp % 3600;
    let minute = 0;
    let second = 0;
    if (yTimestamp !== 0) {
      minute = Math.floor(yTimestamp / 60);
      yTimestamp = yTimestamp % 60;
      if (yTimestamp !== 0) {
        second = yTimestamp;
      }
    }
    const newHour = hour === 0 ? '' : `${hour.toString().padStart(2, '0')}:`;
    return `${newHour}${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
  }
}
export { getDurationByTimestamp };
