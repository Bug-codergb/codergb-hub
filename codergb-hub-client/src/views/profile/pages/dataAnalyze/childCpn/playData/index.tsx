import React, { memo, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { PlayDataWrapper } from './style';
import { IResponseType } from '../../../../../../types/responseType';
import { useLoginMsg } from '../../../../../../hook/useLoginMsg';
import { getUserRecordVideo } from '../../../../../../network/video';
interface IRecord {
  count: number;
  createTime: string;
}
const PlayData = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const login = useLoginMsg();
  useEffect(() => {
    if (divRef.current) {
      getUserRecordVideo<IResponseType<IRecord[]>>(login.userMsg.userId).then((res) => {
        if (res.status === 200 && res.data.length !== 0) {
          const key = [];
          const value = [];
          for (let item of res.data) {
            key.push(item.createTime);
            value.push(item.count);
          }
          let chartDom = divRef.current;
          let myChart = echarts.init(chartDom);
          const option = {
            title: {
              text: '作品近一个月播放量',
              textAlign: 'center',
              left: '50%',
              textStyle: {
                fontSize: 12
              }
            },
            legend: {
              show: false
            },
            tooltip: {
              show: true,
              trigger: 'axis'
            },
            xAxis: {
              type: 'category',
              data: key
            },
            yAxis: {
              type: 'value'
            },
            grid: {
              left: '5%',
              bottom: 0,
              top: '15%',
              right: '5%',
              containLabel: true
            },
            series: [
              {
                data: value,
                type: 'line',
                smooth: true,
                name: '播放量',
                lineStyle: {
                  color: '#ec5b56'
                },
                itemStyle: {
                  color: '#ec5b56'
                }
              }
            ]
          };

          option && myChart.setOption(option);
          window.addEventListener('resize', () => {
            myChart.resize();
          });
        }
      });
    }
  }, [divRef, divRef.current]);
  return (
    <PlayDataWrapper>
      <div className="charts-container" ref={divRef}></div>
    </PlayDataWrapper>
  );
};
export default memo(PlayData);
