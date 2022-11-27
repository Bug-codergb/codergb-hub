import React,{memo,FC} from "react";
import { Tabs } from 'antd';
import {
  TabContentWrapper
} from "./style";
import {tabs} from "../../../../constant/profile/tabs";

interface IProps{
  userId:string
}
const TabContent:FC<IProps>=(props)=>{
  const { userId } = props;
  return (
      <TabContentWrapper>
        <Tabs
            defaultActiveKey="1"
            items={tabs(userId)}
        />
      </TabContentWrapper>
  )
}
export default memo(TabContent)