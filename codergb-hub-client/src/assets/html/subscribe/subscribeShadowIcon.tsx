import React, { memo, FC } from 'react';
const SubscribeShadowIcon: FC = () => {
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
          <path
            d="M20,7H4V6h16V7z M22,9v12H2V9H22z M15,15l-5-3v6L15,15z M17,3H7v1h10V3z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    </div>
  );
};
export default memo(SubscribeShadowIcon);
