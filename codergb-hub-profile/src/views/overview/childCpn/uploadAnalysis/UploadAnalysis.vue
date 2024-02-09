<template>
  <div class="upload-analysis-container"></div>
</template>
<script setup lang="tsx">
import { onMounted, ref } from 'vue';
import moment from 'moment';
import * as echarts from 'echarts';

import { getUploadAnalysis } from '@/network/dashboard';
import { IResponseType } from '@/types/responseType';

interface IUploadAnalysis {
  count: number;
  time: string;
}
const year = ref<string>(moment().format('yyyy'));
onMounted(async () => {
  let maxNum = 0;
  let timeMap = new Map();
  const result = await getUploadAnalysis<IResponseType<IUploadAnalysis[]>>();
  if (result.status === 200) {
    for (let item of result.data) {
      timeMap.set(item.time, item.count);
      if (item.count > maxNum) {
        maxNum = item.count;
      }
    }
    setOption(year.value, maxNum, timeMap);
  }
});
const setOption = (year: string, maxNum: number, timeMap: Map<string, number>) => {
  function getVirtualData(year: string) {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time < end; time += dayTime) {
      let formatDate = echarts.time.format(time, '{yyyy}-{MM}-{dd}', false);
      let count = timeMap.get(formatDate) ?? 0;
      data.push([formatDate, count]);
    }
    return data;
  }
  let chartDom = document.querySelector('.upload-analysis-container');
  let myChart = echarts.init(chartDom);
  let option;
  option = {
    title: {
      top: 0,
      left: 'left',
      text: '一年内视频上传分析'
    },
    tooltip: {
      formatter: (a: any) => {
        return `<div>
            ${a.marker}
            ${a.value[0]}
            <div>视频上传数：<span style="font-weight: bolder;color:#ea3323">${a.value[1]}</span></div>
          </div>`;
      }
    },
    grid: {
      left: 0,
      right: 0,
      top: '1%'
    },
    visualMap: {
      min: 0,
      max: maxNum,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      top: '10%'
    },
    calendar: {
      top: 100,
      left: 20,
      right: 20,
      cellSize: 'auto',
      range: year,

      yearLabel: { show: false },
      dayLabel: {
        nameMap: 'ZH'
      },
      monthLabel: {
        nameMap: 'ZH'
      }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: getVirtualData(year)
    }
  };
  option && myChart.setOption(option);
};
</script>

<style scoped lang="less">
.upload-analysis-container {
  height: 230px;
  width: 100%;
}
</style>
