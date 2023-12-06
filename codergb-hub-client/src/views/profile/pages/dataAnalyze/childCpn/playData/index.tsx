import React, { memo, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { PlayDataWrapper } from "./style";
const PlayData = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (divRef.current) {
      var chartDom = divRef.current;
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        legend: {
          show: true,
        },
        tooltip: {
          show: true,
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        grid: {
          left: 0,
          bottom: 0,
          top: "10%",
          right: 0,
          containLabel: true,
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
            name: "近一个月作品播放量",
          },
        ],
      };

      option && myChart.setOption(option);
    }
  }, [divRef, divRef.current]);
  return (
    <PlayDataWrapper>
      <div className="charts-container" ref={divRef}></div>
    </PlayDataWrapper>
  );
};
export default memo(PlayData);
