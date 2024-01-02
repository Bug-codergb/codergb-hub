import React, { memo, FC } from 'react';
const HomeShadowIcon: FC = () => {
  return (
    <div>
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="style-scope yt-icon"
        style={{ pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}
      >
        <g className="style-scope yt-icon">
          <path d="M4,10V21h6V15h4v6h6V10L12,3Z" className="style-scope yt-icon"></path>
        </g>
      </svg>
    </div>
  );
};
export default memo(HomeShadowIcon);
