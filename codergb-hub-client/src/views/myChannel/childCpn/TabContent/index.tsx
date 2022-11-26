import React,{memo,FC} from "react";
import { Tabs } from 'antd';
import {
  TabContentWrapper
} from "./style";
import {tabs} from "../../../../constant/profile/tabs";
const TabContent:FC=()=>{
  return (
      <TabContentWrapper>
        <Tabs
            defaultActiveKey="1"
            items={tabs}
        />
      </TabContentWrapper>
  )
}
export default memo(TabContent)