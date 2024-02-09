<template>
  <div class="user-works-container"></div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
import { getUserWorks } from '@/network/dashboard';
import { IResponseType } from '@/types/responseType';
interface IUserWork {
  userId: string;
  userName: string;
  count: number;
  playlist: number;
}
let timer: number | null = null;
onMounted(async () => {
  const res = await getUserWorks<IResponseType<IUserWork[]>>();
  let startIndex = 0;
  let endIndex = 8;
  let total = 0;

  let xAxisData: string[] = [];
  let yAxisData: number[] = [];
  let userPlaylist: number[] = [];
  if (res.status === 200) {
    total = res.data.length;
    for (let item of res.data) {
      xAxisData.push(item.userName);
      yAxisData.push(item.count);
      userPlaylist.push(item.playlist);
    }
  }
  const chartDom = document.querySelector('.user-works-container');
  const myChart = echarts.init(chartDom);

  setOption(xAxisData, yAxisData, userPlaylist, startIndex, endIndex);
  timer = setInterval(() => {
    startIndex += 1;
    endIndex += 1;
    if (endIndex > total) {
      startIndex = 0;
      endIndex = 8;
    }
    setOption(xAxisData, yAxisData, userPlaylist, startIndex, endIndex);
  }, 3500);
  window.addEventListener('resize', () => {
    myChart.resize();
  });

  function setOption(
    xAxisData: string[],
    yAxisData: number[],
    userPlaylist: number[],
    startIndex: number,
    endIndex: number
  ) {
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      legend: {},
      grid: {
        left: '1%',
        right: '2%',
        bottom: 0,
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: xAxisData.slice(startIndex, endIndex),
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '用户作品'
        },
        {
          type: 'value',
          name: '播放列表数'
        }
      ],
      series: [
        {
          name: '作品数',
          type: 'line',
          data: yAxisData.slice(startIndex, endIndex),
          yAxisIndex: 0,

          itemStyle: {
            color: '#f2ca6b'
          }
        },
        {
          name: '播放列表数',
          type: 'bar',
          data: userPlaylist.slice(startIndex, endIndex),
          yAxisIndex: 1,
          barWidth: '20%',

          itemStyle: {
            color: '#5a6fc0'
          }
        }
      ]
    };

    option && myChart.setOption(option);
  }
});
onBeforeUnmount(() => {
  timer && clearInterval(timer);
  timer = null;
});
</script>
<style scoped lang="less">
.user-works-container {
  width: 100%;
  height: 260px;
}
</style>
