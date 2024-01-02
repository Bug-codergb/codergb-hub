import React, { memo, FC, useRef, useEffect } from 'react';
import * as echarts from 'echarts';
import { ThumbDataWrapper } from './style';
import { getUserRecordThumb } from '../../../../../../network/video';
import { IResponseType } from '../../../../../../types/responseType';
import { useLoginMsg } from '../../../../../../hook/useLoginMsg';

interface IRecord {
  count: number;
  createTime: string;
}
const ThumbData: FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const login = useLoginMsg();
  useEffect(() => {
    if (divRef.current) {
      getUserRecordThumb<IResponseType<IRecord[]>>(login.userMsg.userId).then((res) => {
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
              text: '作品近一个月作品被点赞数',
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
                name: '点赞数',

                lineStyle: {
                  color: '#61c373'
                },
                itemStyle: {
                  color: '#61c373'
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
    <ThumbDataWrapper>
      <div className="charts-container" ref={divRef}></div>
    </ThumbDataWrapper>
  );
};
export default memo(ThumbData);
