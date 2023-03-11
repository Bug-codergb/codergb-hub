import Home from "../childCpn/home";
import Community from "../childCpn/community";
import Desc from "../childCpn/desc";

const tabs = (userId: string) => {
  return [
    {
      label: "首页",
      key: "1001",
      children: <Home userId={userId}/>
    },
    {
      label: "社区",
      key: "1006",
      children: <Community userId={userId}/>
    },
    {
      label: "简介",
      key: "1008",
      children: <Desc userId={userId}/>
    }
  ]
}
export {
  tabs
}