import { memo, type FC, type ReactElement } from 'react';
import { Tabs } from 'antd';
import Basic from './childCpn/basic';
import Brand from './childCpn/brand';
import Layout from './childCpn/layout';
import { CustomizeWrapper } from './style';
const Customize: FC = (): ReactElement => {
  const onChange = () => {};
  return (
    <CustomizeWrapper>
      <div className="title-tip">频道自定义</div>
      <div className="tab-pub">
        <div className="customize-tabs">
          <Tabs
            defaultActiveKey="1"
            onChange={onChange}
            items={[
              {
                label: `布局`,
                key: '1',
                children: <Layout />
              },
              {
                label: `品牌`,
                key: '2',
                children: <Brand />
              },
              {
                label: `基本信息`,
                key: '3',
                children: <Basic />
              }
            ]}
          />
        </div>
      </div>
    </CustomizeWrapper>
  );
};
export default memo(Customize);
