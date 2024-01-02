import React from 'react';
import { holder } from '../../utils/holder';
const HolderCpn = (total: number, lineCount: number, width: number) => {
  return holder(total, lineCount).map((item, index) => {
    return (
      <li
        key={index}
        style={{
          width: `${width / 40}rem`,
          height: 0,
          border: 'none',
          padding: 0,
          margin: 0,
          outline: 'none'
        }}
      >
        {' '}
      </li>
    );
  });
};
export default HolderCpn;
