import React, { memo, FC, ReactElement } from "react";
import PlayData from "./childCpn/playData/index";
const DataAnalyze: FC = () => {
  return (
    <div>
      <PlayData />
    </div>
  );
};
export default memo(DataAnalyze);
