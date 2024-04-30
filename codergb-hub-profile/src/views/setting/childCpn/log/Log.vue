<template>
  <div class="login-log-chart-container"></div>
</template>
<script setup lang="ts">
import { defineProps, onMounted } from 'vue';
import { getLoginLog } from '@/network/login';
import * as echarts from 'echarts';
import { IResponseType } from '@/types/responseType';
interface ILoinLog {
  count: number;
  date: string;
}
interface IProps {
  userId: string;
}
const props = defineProps<IProps>();

onMounted(async () => {
  props.userId &&
    getLoginLog<IResponseType<ILoinLog[]>>(props.userId).then((res) => {
      if (res.status === 200) {
        let xAxis = [],
          yAxis = [];
        for (let item of res.data) {
          xAxis.push(item.date);
          yAxis.push(item.count);
        }
        let chartDom = document.querySelector('.login-log-chart-container');
        let myChart = echarts.init(chartDom);
        let option;

        option = {
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '2%',
            right: '4%',
            bottom: '18%',
            top: '10%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxis
          },
          yAxis: {
            type: 'value',
            name: '登录次数'
          },
          series: [
            {
              name: '登录次数',
              data: yAxis,
              type: 'line',
              areaStyle: {}
            }
          ]
        };

        option && myChart.setOption(option);
        window.addEventListener('resize', () => {
          myChart.resize();
        });
      }
    });
});
</script>

<style scoped lang="less">
.login-log-chart-container {
  width: 100%;
  height: 100%;
}
</style>
