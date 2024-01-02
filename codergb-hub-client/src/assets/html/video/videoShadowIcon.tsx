import React, { memo } from 'react';
const VideoIcon = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        focusable="false"
        style={{
          pointerEvents: 'none',
          display: 'block',
          width: '100%',
          height: '100%'
        }}
      >
        <path d="m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM18 9l1 3h-3l-1-3h3zm-5 0 1 3h-3l-1-3h3zM8 9l1 3H6L5 9h3z"></path>
      </svg>
    </div>
  );
};
export default memo(VideoIcon);
