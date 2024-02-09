<template>
  <div class="cate-video-chart-container">/dashboard/cate-video</div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
import { getCateVideo } from '@/network/dashboard';
import { IResponseType } from '@/types/responseType';
interface ICateVideo {
  id: string;
  name: string;
  count: number;
}
const cateVideo = ref<ICateVideo[]>([]);
let timer: number | null = null;
onMounted(async () => {
  const result = await getCateVideo<IResponseType<ICateVideo[]>>();
  if (result.status === 200) {
    cateVideo.value = result.data.map((item) => {
      return {
        id: item.id,
        name: item.name,
        count: item.count
      };
    });
  }
  const chartDom = document.querySelector('.cate-video-chart-container');
  const myChart = echarts.init(chartDom);
  let option;

  option = {
    title: {
      text: '视频分类'
    },
    tooltip: {
      trigger: 'item',
      confine: true
    },
    legend: {
      top: '10%',
      type: 'scroll'
    },
    grid: {
      top: '6%',
      bottom: 0,
      left: 0,
      right: 0
    },
    series: [
      {
        name: '视频分类',
        type: 'pie',
        radius: ['65%', '100%'],
        center: ['50%', '50%'],
        top: '30%',
        left: '10%',
        right: '10%',
        avoidLabelOverlap: false,
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: cateVideo.value.map((item) => {
          return {
            name: item.name,
            value: item.count
          };
        })
      }
    ]
  };

  option && myChart.setOption(option);
  window.addEventListener('resize', () => {
    myChart.resize();
  });

  let index = 0;
  timer = setInterval(() => {
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: index
    });
    for (let inner in cateVideo.value) {
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: inner
      });
    }
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: index
    });
    index++;
    if (index > cateVideo.value.length) {
      index = 0;
    }
  }, 2000);
});
onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<style scoped lang="less">
.cate-video-chart-container {
  height: 230px;
  width: 100%;
}
</style>
