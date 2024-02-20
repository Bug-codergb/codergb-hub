import React, { memo, type FC, type ReactElement } from 'react';
import { Col, Row } from 'antd';
import PlayData from './childCpn/playData/index';
import ThumbData from './childCpn/thumbData';
import SubData from './childCpn/subData';
import { DataAnalyzeWrapper } from './style';
const DataAnalyze: FC = (): ReactElement => {
  return (
    <DataAnalyzeWrapper>
      <Row gutter={16} className="gutter-row">
        <Col span={12}>
          <div className="card">
            <PlayData />
          </div>
        </Col>
        <Col span={12}>
          <div className="card">
            <ThumbData />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="card">
            <SubData />
          </div>
        </Col>
      </Row>
    </DataAnalyzeWrapper>
  );
};
export default memo(DataAnalyze);
