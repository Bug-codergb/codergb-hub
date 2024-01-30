import { memo } from 'react';
import { Router } from 'react-router-dom';
const RouterBeforeEach = (Component: any) => {
  console.log(Component);
  return Component.children;
};
export default RouterBeforeEach;
