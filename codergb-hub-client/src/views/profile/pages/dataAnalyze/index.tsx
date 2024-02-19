import React, { memo, type FC, type ReactElement } from 'react';
import PlayData from './childCpn/playData/index';
import ThumbData from './childCpn/thumbData';
import SubData from './childCpn/subData';
import { DataAnalyzeWrapper } from './style';
const DataAnalyze: FC = (): ReactElement => {
  return (
    <DataAnalyzeWrapper>
      <ul className="chart-list">
        <li className="item">
          <div className="card">
            <PlayData />
          </div>

          <div className="card">
            <ThumbData />
          </div>
        </li>
        <li className="item">
          <div className="card">
            <SubData />
          </div>
        </li>
      </ul>
    </DataAnalyzeWrapper>
  );
};
export default memo(DataAnalyze);
