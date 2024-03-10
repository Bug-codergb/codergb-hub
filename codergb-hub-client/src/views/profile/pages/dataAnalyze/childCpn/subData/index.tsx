import { memo, type FC, useRef, useState, useEffect } from 'react';
import { SubDataWrapper } from './style';
import * as echarts from 'echarts';
import { getUserSub } from '../../../../../../network/video';
import { useLoginMsg } from '../../../../../../hook/useLoginMsg';
import { type IResponseType } from '../../../../../../types/responseType';

interface IRecord {
  count: number;
  createTime: string;
}
const SubData: FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const login = useLoginMsg();
  useEffect(() => {
    if (divRef.current) {
      getUserSub<IResponseType<IRecord[]>>(login.userMsg.userId).then((res) => {
        if (res.status === 200 && res.data.length !== 0) {
          const key = [];
          const value = [];
          for (const item of res.data) {
            key.push(item.time);
            value.push(item.count);
          }
          const chartDom = divRef.current;
          const myChart = echarts.init(chartDom);
          const option = {
            title: {
              text: '近一个涨粉数据分析',
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
                name: '粉丝',
                lineStyle: {
                  color: '#479fd1'
                },
                itemStyle: {
                  color: '#479fd1'
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
    <SubDataWrapper>
      <div className="charts-container" ref={divRef}></div>
    </SubDataWrapper>
  );
};
export default memo(SubData);
