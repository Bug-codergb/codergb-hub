import React, { memo, FC } from 'react';
const Exit: FC = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      className="style-scope yt-icon"
      style={{ pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}
    >
      <g className="style-scope yt-icon">
        <path
          d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z"
          className="style-scope yt-icon"
        ></path>
      </g>
    </svg>
  );
};
export default memo(Exit);
