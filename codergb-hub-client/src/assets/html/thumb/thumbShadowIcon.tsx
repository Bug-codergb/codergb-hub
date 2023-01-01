import React,{memo,FC} from "react";
const ThumbShadowIcon:FC=()=>{
  return (
      <div>
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon"
             style={{pointerEvents: 'none', display:'block', width: '100%', height: '100%'}}>
          <g className="style-scope yt-icon">
            <path
                d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"
                className="style-scope yt-icon"></path>
          </g>
        </svg>
      </div>
  )
}
export default memo(ThumbShadowIcon)