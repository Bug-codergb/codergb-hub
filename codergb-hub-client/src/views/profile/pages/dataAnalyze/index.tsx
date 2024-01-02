import React, { memo, FC, ReactElement } from 'react';
import PlayData from './childCpn/playData/index';
import ThumbData from './childCpn/thumbData';
import { DataAnalyzeWrapper } from './style';
const DataAnalyze: FC = () => {
  return (
    <DataAnalyzeWrapper>
      <ul className="chart-list">
        <li className="item">
          <PlayData />
          <ThumbData />
        </li>
      </ul>
    </DataAnalyzeWrapper>
  );
};
export default memo(DataAnalyze);
