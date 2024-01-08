/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 22139:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ WEBSOCKET_HOST_NAME; },
/* harmony export */   t: function() { return /* binding */ HOST_NAME; }
/* harmony export */ });
const HOST = "localhost";
const SERVER_PORT = "8888";
const WEBSOCKET_PORT = "8889";
const WEBPACK_SERVER_PORT = "MISSING_ENV_VAR".WEBPACK_SERVER_PORT;
let HOST_NAME = '';
let WEBSOCKET_HOST_NAME = '';
if (false) {} else if (true) {
  HOST_NAME = `http://${HOST}:${SERVER_PORT}`;
  WEBSOCKET_HOST_NAME = `ws://${HOST}:${WEBSOCKET_PORT}`;
}
console.log(HOST_NAME);
console.log("localhost");


/***/ }),

/***/ 48011:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  tQ: function() { return /* binding */ USER_PLAYLIST; },
  cy: function() { return /* binding */ mainMenu; },
  cK: function() { return /* binding */ profileMenu; },
  o2: function() { return /* binding */ studioMenu; }
});

// UNUSED EXPORTS: HOME_PATH

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/assets/html/home/homeIcon.tsx

const HomeIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var homeIcon = (/*#__PURE__*/(0,react.memo)(HomeIcon));
;// CONCATENATED MODULE: ./src/assets/html/home/homeShadowIcon.tsx

const HomeShadowIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M4,10V21h6V15h4v6h6V10L12,3Z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var homeShadowIcon = (/*#__PURE__*/(0,react.memo)(HomeShadowIcon));
;// CONCATENATED MODULE: ./src/assets/html/explore/exploreIcon.tsx

const ExploreIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var exploreIcon = (/*#__PURE__*/(0,react.memo)(ExploreIcon));
;// CONCATENATED MODULE: ./src/assets/html/explore/exploreShadowIcon.tsx

const ExploreShadowIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M11.23,13.08c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99c0.21-0.29,0.51-0.48,0.86-0.54 c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86c0.06,0.35-0.02,0.71-0.23,0.99c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02C11.72,13.33,11.45,13.25,11.23,13.08z M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12 C2,6.48,6.48,2,12,2S22,6.48,22,12z M18.03,5.97L9.8,9.8l-3.83,8.23l8.23-3.83L18.03,5.97z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var exploreShadowIcon = (/*#__PURE__*/(0,react.memo)(ExploreShadowIcon));
;// CONCATENATED MODULE: ./src/assets/html/short/shortsIcon.tsx

const ShortsIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var shortsIcon = (/*#__PURE__*/(0,react.memo)(ShortsIcon));
;// CONCATENATED MODULE: ./src/assets/html/short/shortsShadowIcon.tsx

const ShortsShadowIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M17.77 10.32c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var shortsShadowIcon = (/*#__PURE__*/(0,react.memo)(ShortsShadowIcon));
;// CONCATENATED MODULE: ./src/assets/html/subscribe/subscribeIcon.tsx

const SubscribeIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var subscribeIcon = (/*#__PURE__*/(0,react.memo)(SubscribeIcon));
;// CONCATENATED MODULE: ./src/assets/html/subscribe/subscribeShadowIcon.tsx

const SubscribeShadowIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M20,7H4V6h16V7z M22,9v12H2V9H22z M15,15l-5-3v6L15,15z M17,3H7v1h10V3z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var subscribeShadowIcon = (/*#__PURE__*/(0,react.memo)(SubscribeShadowIcon));
;// CONCATENATED MODULE: ./src/assets/html/library/libraryIcon.tsx

const LibraryIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var libraryIcon = (/*#__PURE__*/(0,react.memo)(LibraryIcon));
;// CONCATENATED MODULE: ./src/assets/html/library/libraryShadowIcon.tsx

const LibraryShadowIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M4,20h14v1H3V6h1V20z M21,3v15H6V3H21z M17,10.5L11,7v7L17,10.5z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var libraryShadowIcon = (/*#__PURE__*/(0,react.memo)(LibraryShadowIcon));
;// CONCATENATED MODULE: ./src/assets/html/history/historyIcon.tsx

const HistoryIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var historyIcon = (/*#__PURE__*/(0,react.memo)(HistoryIcon));
;// CONCATENATED MODULE: ./src/assets/html/history/historyShadowIcon.tsx

const HistoryShadowIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,2C8.73,2,5.8,3.44,4,5.83V3.02H2V9h6V7H5.62 C7.08,5.09,9.36,4,12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8H2c0,5.51,4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var historyShadowIcon = (/*#__PURE__*/(0,react.memo)(HistoryShadowIcon));
;// CONCATENATED MODULE: ./src/assets/html/later/laterIcon.tsx

const LaterIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var laterIcon = (/*#__PURE__*/(0,react.memo)(LaterIcon));
;// CONCATENATED MODULE: ./src/assets/html/later/laterShadowIcon.tsx

const LaterShadowIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M14.97,16.95L10,13.87V7h2v5.76 l4.03,2.49L14.97,16.95z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var laterShadowIcon = (/*#__PURE__*/(0,react.memo)(LaterShadowIcon));
;// CONCATENATED MODULE: ./src/assets/html/thumb/thumbIcon.tsx

const ThumbIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var thumbIcon = (/*#__PURE__*/(0,react.memo)(ThumbIcon));
;// CONCATENATED MODULE: ./src/assets/html/thumb/thumbShadowIcon.tsx

const ThumbShadowIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var thumbShadowIcon = (/*#__PURE__*/(0,react.memo)(ThumbShadowIcon));
;// CONCATENATED MODULE: ./src/assets/html/mineVideo/mineVideoIcon.tsx

const MineVideoIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false",
    className: "style-scope yt-icon",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("g", {
    className: "style-scope yt-icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z",
    className: "style-scope yt-icon"
  }))));
};
/* harmony default export */ var mineVideoIcon = (/*#__PURE__*/(0,react.memo)(MineVideoIcon));
;// CONCATENATED MODULE: ./src/assets/html/video/videoIcon.tsx

const VideoIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    focusable: "false",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("path", {
    d: "m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"
  })));
};
/* harmony default export */ var videoIcon = (/*#__PURE__*/(0,react.memo)(VideoIcon));
;// CONCATENATED MODULE: ./src/assets/html/video/videoShadowIcon.tsx

const videoShadowIcon_VideoIcon = () => {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    focusable: "false",
    style: {
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react.createElement("path", {
    d: "m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM18 9l1 3h-3l-1-3h3zm-5 0 1 3h-3l-1-3h3zM8 9l1 3H6L5 9h3z"
  })));
};
/* harmony default export */ var videoShadowIcon = (/*#__PURE__*/(0,react.memo)(videoShadowIcon_VideoIcon));
;// CONCATENATED MODULE: ./src/constant/menu.tsx




















const mainMenu = [{
  name: '首页',
  path: '/home/recommend',
  icon: /*#__PURE__*/react.createElement(homeIcon, null),
  shadowIcon: /*#__PURE__*/react.createElement(homeShadowIcon, null)
}, {
  name: '探索',
  path: '/home/explore',
  icon: /*#__PURE__*/react.createElement(exploreIcon, null),
  shadowIcon: /*#__PURE__*/react.createElement(exploreShadowIcon, null)
}, {
  name: 'shorts',
  path: '/home/shorts',
  icon: /*#__PURE__*/react.createElement(shortsIcon, null),
  shadowIcon: /*#__PURE__*/react.createElement(shortsShadowIcon, null)
}, {
  name: '分类',
  path: '/home/cate',
  icon: /*#__PURE__*/react.createElement(videoIcon, null),
  shadowIcon: /*#__PURE__*/react.createElement(videoShadowIcon, null)
}, {
  name: '订阅内容',
  path: '/home/subscriptions',
  icon: /*#__PURE__*/react.createElement(subscribeIcon, null),
  shadowIcon: /*#__PURE__*/react.createElement(subscribeShadowIcon, null)
}];
const profileMenu = [{
  name: '媒体库',
  path: '/home/library',
  icon: /*#__PURE__*/react.createElement(libraryIcon, null),
  shadowIcon: /*#__PURE__*/react.createElement(libraryShadowIcon, null)
}, {
  name: '历史记录',
  path: '/home/history',
  icon: /*#__PURE__*/react.createElement(historyIcon, null),
  shadowIcon: /*#__PURE__*/react.createElement(historyShadowIcon, null)
}, {
  name: '您的视频',
  path: '/studio/message',
  icon: /*#__PURE__*/react.createElement(mineVideoIcon, null),
  shadowIcon: /*#__PURE__*/react.createElement(mineVideoIcon, null)
}, {
  name: '稍后观看',
  path: '/home/playlist',
  icon: /*#__PURE__*/react.createElement(laterIcon, null),
  shadowIcon: /*#__PURE__*/react.createElement(laterShadowIcon, null)
}, {
  name: '顶过的视频',
  path: '/home/thumb',
  icon: /*#__PURE__*/react.createElement(thumbIcon, null),
  shadowIcon: /*#__PURE__*/react.createElement(thumbShadowIcon, null)
}];
const studioMenu = [{
  name: '信息中心',
  path: '/studio/message',
  shadowIcon: '',
  icon: ''
}, {
  name: '内容',
  shadowIcon: '',
  path: '/studio/content',
  icon: ''
}, {
  name: '播放列表',
  path: '/studio/playlist',
  shadowIcon: '',
  icon: ''
}, {
  name: '数据分析',
  path: '/studio/dataAnalyze',
  shadowIcon: '',
  icon: ''
}, {
  name: '评论',
  path: '/studio/comment',
  shadowIcon: '',
  icon: ''
},
// {
//   name:"字幕",
//   path:'/studio/subtitle',
//   shadowIcon:"",
//   icon:""
// },
// {
//   name:"版权",
//   path:'/studio/copyright',
//   shadowIcon:"",
//   icon:""
// },
// {
//   name:"创收",
//   path:'/studio/income',
//   shadowIcon:"",
//   icon:""
// },
{
  name: '自定义',
  path: '/studio/customize',
  shadowIcon: '',
  icon: ''
}, {
  name: '音频库',
  path: '/studio/audioLib',
  shadowIcon: '',
  icon: ''
}, {
  name: '设置',
  path: '/studio/setting',
  shadowIcon: '',
  icon: ''
}];
const HOME_PATH = '/home';
const USER_PLAYLIST = '/home/playlist';


/***/ }),

/***/ 11067:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ HOME_RECOMMEND; },
/* harmony export */   w: function() { return /* binding */ LOGIN_PATH; }
/* harmony export */ });
const LOGIN_PATH = '/login';
const HOME_RECOMMEND = '/home/recommend';


/***/ }),

/***/ 53947:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(20745);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(26946);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(89250);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(79655);
;// CONCATENATED MODULE: ./src/router/studio/index.tsx


const AudioLibRoute = /*#__PURE__*/(0,react.lazy)(async () => await __webpack_require__.e(/* import() */ 2851).then(__webpack_require__.bind(__webpack_require__, 2851)));
const CommentRoute = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(4423), __webpack_require__.e(8682), __webpack_require__.e(7491), __webpack_require__.e(4746), __webpack_require__.e(2146)]).then(__webpack_require__.bind(__webpack_require__, 42146)));
const ContentRoute = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(4423), __webpack_require__.e(8682), __webpack_require__.e(7491), __webpack_require__.e(561), __webpack_require__.e(4746), __webpack_require__.e(6635)]).then(__webpack_require__.bind(__webpack_require__, 96635)));
const CopyrightRoute = /*#__PURE__*/(0,react.lazy)(async () => await __webpack_require__.e(/* import() */ 1093).then(__webpack_require__.bind(__webpack_require__, 41093)));
const CustomizeRoute = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(4423), __webpack_require__.e(8889), __webpack_require__.e(8579), __webpack_require__.e(561), __webpack_require__.e(5109), __webpack_require__.e(6261)]).then(__webpack_require__.bind(__webpack_require__, 36261)));
const DataAnalyzeRouter = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(2866), __webpack_require__.e(537)]).then(__webpack_require__.bind(__webpack_require__, 20537)));
const IncomeRoute = /*#__PURE__*/(0,react.lazy)(async () => await __webpack_require__.e(/* import() */ 4412).then(__webpack_require__.bind(__webpack_require__, 64412)));
const MessageRoute = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(4423), __webpack_require__.e(8682), __webpack_require__.e(7491), __webpack_require__.e(4746), __webpack_require__.e(9132)]).then(__webpack_require__.bind(__webpack_require__, 69132)));
const PlaylistRoute = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(4423), __webpack_require__.e(8682), __webpack_require__.e(7491), __webpack_require__.e(4746), __webpack_require__.e(6996)]).then(__webpack_require__.bind(__webpack_require__, 96996)));
const SettingRoute = /*#__PURE__*/(0,react.lazy)(async () => await __webpack_require__.e(/* import() */ 7701).then(__webpack_require__.bind(__webpack_require__, 97701)));
const SubtitleRoute = /*#__PURE__*/(0,react.lazy)(async () => await __webpack_require__.e(/* import() */ 9332).then(__webpack_require__.bind(__webpack_require__, 19332)));
const routes = [{
  path: '/studio',
  element: /*#__PURE__*/react.createElement(dist/* Navigate */.Fg, {
    to: "/studio/message"
  })
}, {
  path: '/studio/audioLib',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(AudioLibRoute, null))
}, {
  path: '/studio/comment',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(CommentRoute, null))
}, {
  path: '/studio/content',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(ContentRoute, null))
}, {
  path: '/studio/copyright',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(CopyrightRoute, null))
}, {
  path: '/studio/customize',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(CustomizeRoute, null))
}, {
  path: '/studio/dataAnalyze',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(DataAnalyzeRouter, null))
}, {
  path: '/studio/income',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(IncomeRoute, null))
}, {
  path: '/studio/message',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(MessageRoute, null))
}, {
  path: '/studio/playlist',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(PlaylistRoute, null))
}, {
  path: '/studio/setting',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(SettingRoute, null))
}, {
  path: '/studio/subtitle',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(SubtitleRoute, null))
}];
/* harmony default export */ var studio = (routes);
;// CONCATENATED MODULE: ./src/router/detail/index.tsx

const VideoDetail = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(8889), __webpack_require__.e(3041), __webpack_require__.e(8579), __webpack_require__.e(1211), __webpack_require__.e(7055), __webpack_require__.e(5109), __webpack_require__.e(5376), __webpack_require__.e(9788), __webpack_require__.e(5092)]).then(__webpack_require__.bind(__webpack_require__, 95092)));
const UserDetail = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(4423), __webpack_require__.e(8889), __webpack_require__.e(8682), __webpack_require__.e(3041), __webpack_require__.e(7491), __webpack_require__.e(561), __webpack_require__.e(2856), __webpack_require__.e(6353), __webpack_require__.e(8376), __webpack_require__.e(610)]).then(__webpack_require__.bind(__webpack_require__, 30610)));
const ChatDetail = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(8889), __webpack_require__.e(8579), __webpack_require__.e(1211), __webpack_require__.e(5109), __webpack_require__.e(5376), __webpack_require__.e(6994)]).then(__webpack_require__.bind(__webpack_require__, 56991)));
const SearchDetail = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(4423), __webpack_require__.e(8889), __webpack_require__.e(8682), __webpack_require__.e(3580)]).then(__webpack_require__.bind(__webpack_require__, 73580)));
const MomentDetail = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(9788), __webpack_require__.e(7134)]).then(__webpack_require__.bind(__webpack_require__, 88941)));
const videoDetailRoute = {
  path: '/videoDetail',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(VideoDetail, null))
};
const userDetailRoute = {
  path: '/home/userDetail',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(UserDetail, null))
};
const chatDetailRoute = {
  path: '/chatDetail',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(ChatDetail, null))
};
const searchDetailRoute = {
  path: '/home/search',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(SearchDetail, null))
};
const momentDetailRoute = {
  path: '/home/moment',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(MomentDetail, null))
};

// EXTERNAL MODULE: ./src/constant/routes.ts
var constant_routes = __webpack_require__(11067);
// EXTERNAL MODULE: ./src/constant/menu.tsx + 19 modules
var menu = __webpack_require__(48011);
// EXTERNAL MODULE: ./src/views/user-playlist/style.tsx
var style = __webpack_require__(20865);
// EXTERNAL MODULE: ./src/network/playlist/index.tsx
var network_playlist = __webpack_require__(33422);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/views/user-playlist/index.tsx






const UserPlaylist = props => {
  const params = (0,dist/* useParams */.UO)();
  const {
    id
  } = params;
  const [playlist, setPlaylist] = (0,react.useState)();
  const [video, setVideo] = (0,react.useState)([]);
  const [count, setCount] = (0,react.useState)(0);
  const login = (0,es/* useSelector */.v9)(state => {
    return state.getIn(['loginReducer', 'login']);
  });
  const navigate = (0,dist/* useNavigate */.s0)();
  (0,react.useEffect)(() => {
    (0,network_playlist/* getPlaylistDetail */._V)(id).then(data => {
      setPlaylist(data.data);
    });
  }, [id]);
  (0,react.useEffect)(() => {
    (0,network_playlist/* getPlaylistVideo */.Oi)(id, 0, 30).then(data => {
      setVideo(data.data.list);
      setCount(data.data.count);
    });
  }, [id]);
  const videoRouterHandle = item => {
    navigate('/videoDetail', {
      replace: true,
      state: {
        id: item.id
      }
    });
  };
  return /*#__PURE__*/react.createElement(style/* UserPlaylistWrapper */.b5, null, playlist && /*#__PURE__*/react.createElement(style/* LeftContent */.PJ, {
    bgc: video && video.length !== 0 ? video[0].picUrl : login.userMsg.avatarUrl
  }, /*#__PURE__*/react.createElement("div", {
    className: "img-container"
  }, video && /*#__PURE__*/react.createElement("img", {
    alt: "gb-codergb",
    src: video && video.length !== 0 ? video[0].picUrl : login.userMsg.avatarUrl
  })), /*#__PURE__*/react.createElement("p", {
    className: "later-label"
  }, playlist.name), /*#__PURE__*/react.createElement("p", {
    className: "user-name"
  }, login.userMsg.userName), /*#__PURE__*/react.createElement("div", {
    className: "vio-info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "vio-count"
  }, count, "\u4E2A\u89C6\u9891"), /*#__PURE__*/react.createElement("div", {
    className: "update-time"
  }, moment_default()(playlist.updateTime).format('yyyy-MM-DD HH:MM'), "\u66F4\u65B0")), /*#__PURE__*/react.createElement("div", {
    className: "mask"
  })), /*#__PURE__*/react.createElement(style/* RightContent */.du, null, /*#__PURE__*/react.createElement("ul", {
    className: "vio-list"
  }, video && video.length !== 0 && video.map(item => {
    return /*#__PURE__*/react.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react.createElement("div", {
      className: "cover-container",
      onClick: e => {
        videoRouterHandle(item);
      }
    }, /*#__PURE__*/react.createElement("img", {
      src: item.picUrl
    })), /*#__PURE__*/react.createElement("div", {
      className: "later-right-info"
    }, /*#__PURE__*/react.createElement("p", {
      className: "vio-name text-nowrap-mul-line",
      onClick: e => {
        videoRouterHandle(item);
      }
    }, item.name), /*#__PURE__*/react.createElement("div", {
      className: "desc"
    }, /*#__PURE__*/react.createElement("div", {
      className: "user-name"
    }, item.user.userName, "."), /*#__PURE__*/react.createElement("div", {
      className: "play-count"
    }, item.playCount, "\u6B21\u89C2\u770B."), /*#__PURE__*/react.createElement("div", {
      className: "create-time"
    }, moment_default()(item.createTime).fromNow(), "\u52A0\u5165"))));
  }))));
};
/* harmony default export */ var user_playlist = (/*#__PURE__*/(0,react.memo)(UserPlaylist));
;// CONCATENATED MODULE: ./src/router/index.tsx







const LoginRoute = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(2856), __webpack_require__.e(1853)]).then(__webpack_require__.bind(__webpack_require__, 17378)));
const HomeRoute = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(8889), __webpack_require__.e(8579), __webpack_require__.e(1211), __webpack_require__.e(5109), __webpack_require__.e(5376), __webpack_require__.e(9974)]).then(__webpack_require__.bind(__webpack_require__, 39974)));
const Cate = /*#__PURE__*/(0,react.lazy)(async () => await __webpack_require__.e(/* import() */ 2068).then(__webpack_require__.bind(__webpack_require__, 24199)));
// home页主要内容
const ChannelRoute = /*#__PURE__*/(/* unused pure expression or super */ null && (lazy(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(4423), __webpack_require__.e(8682), __webpack_require__.e(7491), __webpack_require__.e(561), __webpack_require__.e(4746), __webpack_require__.e(6635)]).then(__webpack_require__.bind(__webpack_require__, 96635)))));
const ExploreRoute = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(4423), __webpack_require__.e(8889), __webpack_require__.e(8682), __webpack_require__.e(7491), __webpack_require__.e(561), __webpack_require__.e(2856), __webpack_require__.e(5893), __webpack_require__.e(8376), __webpack_require__.e(3506)]).then(__webpack_require__.bind(__webpack_require__, 85261)));
const HistoryRoute = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(4423), __webpack_require__.e(8889), __webpack_require__.e(8682), __webpack_require__.e(6482)]).then(__webpack_require__.bind(__webpack_require__, 46482)));
const LibraryRoute = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(4423), __webpack_require__.e(8889), __webpack_require__.e(8682), __webpack_require__.e(3041), __webpack_require__.e(3474)]).then(__webpack_require__.bind(__webpack_require__, 93474)));
const router_PlaylistRoute = /*#__PURE__*/(0,react.lazy)(async () => await __webpack_require__.e(/* import() */ 9222).then(__webpack_require__.bind(__webpack_require__, 99222)));
const RecommendRoute = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(4423), __webpack_require__.e(8889), __webpack_require__.e(8682), __webpack_require__.e(3041), __webpack_require__.e(3935)]).then(__webpack_require__.bind(__webpack_require__, 33935)));
const ShortsRoute = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(3041), __webpack_require__.e(9788), __webpack_require__.e(5056)]).then(__webpack_require__.bind(__webpack_require__, 77964)));
const SubscriptionsRoute = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(4423), __webpack_require__.e(8889), __webpack_require__.e(8682), __webpack_require__.e(3041), __webpack_require__.e(6431)]).then(__webpack_require__.bind(__webpack_require__, 36431)));
const ThumbRoute = /*#__PURE__*/(0,react.lazy)(async () => await __webpack_require__.e(/* import() */ 3495).then(__webpack_require__.bind(__webpack_require__, 83495)));
const MyChannelRoute = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(4423), __webpack_require__.e(8889), __webpack_require__.e(8682), __webpack_require__.e(3041), __webpack_require__.e(561), __webpack_require__.e(7842)]).then(__webpack_require__.bind(__webpack_require__, 57842)));
const SubscriberManage = /*#__PURE__*/(0,react.lazy)(async () => await __webpack_require__.e(/* import() */ 1068).then(__webpack_require__.bind(__webpack_require__, 61068)));
// 工作室
const StudioRoute = /*#__PURE__*/(0,react.lazy)(async () => await Promise.all(/* import() */[__webpack_require__.e(8749), __webpack_require__.e(5598), __webpack_require__.e(5987), __webpack_require__.e(8889), __webpack_require__.e(8579), __webpack_require__.e(1211), __webpack_require__.e(5109), __webpack_require__.e(5376), __webpack_require__.e(3322)]).then(__webpack_require__.bind(__webpack_require__, 93322)));
const router_routes = [{
  path: '/',
  element: /*#__PURE__*/react.createElement(dist/* Navigate */.Fg, {
    to: constant_routes/* LOGIN_PATH */.w
  })
}, {
  path: constant_routes/* LOGIN_PATH */.w,
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(LoginRoute, null))
}, {
  path: '/home',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(HomeRoute, null)),
  children: [{
    path: '/home',
    element: /*#__PURE__*/react.createElement(dist/* Navigate */.Fg, {
      to: constant_routes/* HOME_RECOMMEND */.e
    })
  }, {
    path: '/home/explore',
    element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(ExploreRoute, null))
  }, {
    path: '/home/history',
    element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(HistoryRoute, null))
  }, {
    path: '/home/library',
    element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(LibraryRoute, null))
  }, {
    path: '/home/playlist',
    element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(router_PlaylistRoute, null))
  }, {
    path: '/home/recommend',
    element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(RecommendRoute, null))
  }, {
    path: '/home/shorts',
    element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(ShortsRoute, null))
  }, {
    path: '/home/cate',
    element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(Cate, null))
  }, {
    path: '/home/subscriptions',
    element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(SubscriptionsRoute, null))
  }, {
    path: '/home/sub-manage',
    element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(SubscriberManage, null))
  }, {
    path: '/home/thumb',
    element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(ThumbRoute, null))
  }, {
    path: '/home/myChannel',
    element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(MyChannelRoute, null))
  }, {
    path: menu/* USER_PLAYLIST */.tQ + '/:id',
    element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(user_playlist, null))
  }, userDetailRoute, searchDetailRoute, momentDetailRoute]
},
// 工作室
{
  path: '/studio',
  element: /*#__PURE__*/react.createElement(react.Suspense, null, /*#__PURE__*/react.createElement(StudioRoute, null)),
  children: studio
},
// 详情页
videoDetailRoute, chatDetailRoute];

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__(53894);
// EXTERNAL MODULE: ./node_modules/redux-immutable/dist/index.js
var redux_immutable_dist = __webpack_require__(72739);
// EXTERNAL MODULE: ./node_modules/immutable/dist/immutable.es.js
var immutable_es = __webpack_require__(35369);
;// CONCATENATED MODULE: ./src/views/login/store/reducer.ts

const defaultState = (0,immutable_es.Map)({
  login: {
    userMsg: {
      userId: '',
      userName: '',
      avatarUrl: '',
      token: ''
    },
    userDetail: {
      userId: '',
      userName: '',
      avatarUrl: '',
      token: '',
      subscriber: [],
      thumb: {
        video: [],
        comment: []
      },
      tread: {
        video: [],
        comment: []
      }
    },
    loginType: 0
  }
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'changeUserMsg':
      return state.setIn(['login', 'userMsg'], action.userMsg);
    case 'changeLoginType':
      return state.setIn(['login', 'loginType'], action.loginType);
    case 'changeUserDetail':
      return state.setIn(['login', 'userDetail'], action.userDetail);
    default:
      return state;
  }
};
/* harmony default export */ var store_reducer = (reducer);
;// CONCATENATED MODULE: ./src/views/login/store/index.tsx


;// CONCATENATED MODULE: ./src/views/profile/pages/customize/store/reducer.tsx

const reducer_defaultState = (0,immutable_es.Map)({
  channel: {
    id: '',
    name: '',
    alias: '',
    official: 0,
    createTime: '',
    updateTime: '',
    description: '',
    user: {
      userId: '',
      userName: '',
      avatarUrl: '',
      token: ''
    }
  }
});
const reducer_reducer = (state = reducer_defaultState, action) => {
  switch (action.type) {
    case 'changeChannel':
      return state.setIn(['channel'], action.channel);
    default:
      return state;
  }
};
/* harmony default export */ var customize_store_reducer = (reducer_reducer);
;// CONCATENATED MODULE: ./src/views/profile/pages/customize/store/index.tsx


;// CONCATENATED MODULE: ./src/store/reducer.ts



const store_reducer_reducer = (0,redux_immutable_dist/* combineReducers */.U)({
  loginReducer: store_reducer,
  channelReducer: customize_store_reducer
});
/* harmony default export */ var src_store_reducer = (store_reducer_reducer);
;// CONCATENATED MODULE: ./src/store/index.tsx



const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux/* compose */.qC;
const store = (0,redux/* legacy_createStore */.jB)(src_store_reducer, composeEnhancers((0,redux/* applyMiddleware */.md)(redux_thunk_es/* default */.Z)));
/* harmony default export */ var src_store = (store);
// EXTERNAL MODULE: ./src/utils/cache.ts
var cache = __webpack_require__(81707);
// EXTERNAL MODULE: ./src/views/login/store/actionCreators.ts + 1 modules
var actionCreators = __webpack_require__(95085);
// EXTERNAL MODULE: ./src/views/profile/pages/customize/store/actionCreators.tsx
var store_actionCreators = __webpack_require__(92157);
;// CONCATENATED MODULE: ./src/store/actionCreators.ts




//store.dispatch(changeUserDetail(localCache.getCache("userDetail")));
//console.log(localCache.getCache("userMsg"))
src_store.dispatch((0,actionCreators/* changeUserMsg */.Rv)(cache/* default */.Z.getCache('userMsg')));
src_store.dispatch((0,actionCreators/* changeLoginType */.Zs)(cache/* default */.Z.getCache('loginType')));
src_store.dispatch((0,actionCreators/* changeUserDetail */.LG)(cache/* default */.Z.getCache('userDetail')));
src_store.dispatch((0,store_actionCreators/* changeChannel */.u)(cache/* default */.Z.getCache('channel')));

// EXTERNAL MODULE: ./node_modules/antd/es/layout/index.js
var layout = __webpack_require__(97183);
// EXTERNAL MODULE: ./node_modules/antd/es/result/index.js + 5 modules
var result = __webpack_require__(99683);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
;// CONCATENATED MODULE: ./src/hook/withRouter/withRouter.tsx
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function withRouter(WrapperComponent) {
  return function (props) {
    const navigate = (0,dist/* useNavigate */.s0)();
    const router = {
      navigate
    };
    return /*#__PURE__*/react.createElement(WrapperComponent, _extends({}, props, {
      router: router
    }));
  };
}
/* harmony default export */ var withRouter_withRouter = (withRouter);
;// CONCATENATED MODULE: ./src/components/error/index.tsx



class ErrorBoundary extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  loginRouter() {
    const {
      navigate
    } = this.props.router;
    navigate('/home/recommend');
    window.location.reload();
  }
  render() {
    if (this.state.hasError) {
      return /*#__PURE__*/react.createElement(result/* default */.ZP, {
        status: "404",
        title: "\u9519\u8BEF",
        subTitle: "\u62B1\u6B49\uFF0C\u9875\u9762\u597D\u50CF\u51FA\u73B0\u4E86\u4E00\u4E2A\u672A\u77E5\u9519\u8BEF\uFF0C\u8BF7\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u81F3\u9996\u9875",
        extra: /*#__PURE__*/react.createElement(es_button/* default */.Z, {
          type: "primary",
          onClick: () => {
            this.loginRouter();
          }
        }, "\u9996\u9875")
      });
    }
    return this.props.children;
  }
}
/* harmony default export */ var error = (withRouter_withRouter(ErrorBoundary));
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(53133);
;// CONCATENATED MODULE: ./src/assets/css/common.tsx

const CommonWrapper = styled_components_browser_esm/* default */.ZP.div`
  height: 100%;
  .sub-btn {
    background-color: #0f0f0f;
    color: #fff;
    cursor: pointer;
    font-size: ${20 / 40}rem;
    padding: ${10 / 40}rem ${20 / 40}rem;
    border-radius: ${24 / 40}rem;
    margin: 0 0 0 ${40 / 40}rem;
  }
  .App {
    height: 100%;
  }
`;
;// CONCATENATED MODULE: ./src/App.tsx










const {
  Header
} = layout["default"];
function App() {
  function RouteElement() {
    return (0,dist/* useRoutes */.V$)(router_routes);
  }
  return /*#__PURE__*/react.createElement(CommonWrapper, null, /*#__PURE__*/react.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react.createElement(es/* Provider */.zt, {
    store: src_store
  }, /*#__PURE__*/react.createElement(react_router_dom_dist/* HashRouter */.UT, null, /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement("div", null, "wwww")
  }, /*#__PURE__*/react.createElement(error, null, /*#__PURE__*/react.createElement(RouteElement, null)))))));
}
/* harmony default export */ var src_App = (App);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(93379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(90569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(19216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(44589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/assets/css/base.css
var base = __webpack_require__(45467);
;// CONCATENATED MODULE: ./src/assets/css/base.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(base/* default */.Z, options);




       /* harmony default export */ var css_base = (base/* default */.Z && base/* default */.Z.locals ? base/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/constant/format.tsx

moment_default().defineLocale('zh-cn', {
  relativeTime: {
    future: '%s内',
    past: '%s前',
    s: '几秒',
    m: '1 分钟',
    mm: '%d 分钟',
    h: '1 小时',
    hh: '%d 小时',
    d: '1 天',
    dd: '%d 天',
    M: '1 个月',
    MM: '%d 个月',
    y: '1 年',
    yy: '%d 年'
  }
});
;// CONCATENATED MODULE: ./src/index.tsx





const root = client.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render( /*#__PURE__*/react.createElement(src_App, null));

/***/ }),

/***/ 38306:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ff: function() { return /* binding */ getUserChannel; },
/* harmony export */   gg: function() { return /* binding */ uploadAvatar; },
/* harmony export */   pW: function() { return /* binding */ updateChannel; }
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

// 上传频道头像
async function uploadAvatar(formData, getProgress) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/channel/avatar/upload',
    data: formData,
    headers: {
      'Content-type': 'multipart/form-data'
    },
    onUploadProgress(progressEvent) {
      getProgress(progressEvent);
    }
  });
}
async function updateChannel(id, params) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: `/channel/${id}`,
    data: params
  });
}
// 获取用户频道
async function getUserChannel(id) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: '/channel/user/' + id
  });
}

/***/ }),

/***/ 16398:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ network; }
});

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 42 modules
var axios = __webpack_require__(71257);
;// CONCATENATED MODULE: ./src/network/request/index.ts

class GBRequest {
  constructor(config) {
    this.instance = axios/* default */.Z.create(config);
    this.interceptor = config.interceptors;
    // 请求拦截器
    this.instance.interceptors.request.use(this.interceptor?.requestInterceptor, this.interceptor?.requestInterceptorCatch);
    // 响应拦截器
    this.instance.interceptors.response.use(this.interceptor?.responseInterceptor, this.interceptor?.responseInterceptorCatch);

    // 实例拦截器
    this.instance.interceptors.request.use(config => {
      return config;
    }, err => {
      return err;
    });
    this.instance.interceptors.response.use(res => {
      return res.data;
    }, err => {
      console.log(err);
      return err;
    });
  }
  async request(config) {
    return await new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance.request(config).then(res => {
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res);
        }
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
  async get(config) {
    return await this.request({
      ...config,
      method: 'get'
    });
  }
  async post(config) {
    return await this.request({
      ...config,
      method: 'post'
    });
  }
}
/* harmony default export */ var request = (GBRequest);
// EXTERNAL MODULE: ./src/constant/host.ts
var host = __webpack_require__(22139);
// EXTERNAL MODULE: ./src/utils/cache.ts
var cache = __webpack_require__(81707);
// EXTERNAL MODULE: ./node_modules/antd/es/notification/index.js + 1 modules
var notification = __webpack_require__(38648);
;// CONCATENATED MODULE: ./src/network/index.ts




const openNotification = (placement, message) => {
  notification/* default */.Z.warning({
    message: `提示`,
    description: message,
    placement
  });
};
const gbRequest = new request({
  baseURL: `${host/* HOST_NAME */.t}${ false ? 0 : ''}`,
  timeout: 5000,
  interceptors: {
    requestInterceptor: config => {
      if (cache/* default */.Z.getCache('userMsg') && config.headers) {
        const token = cache/* default */.Z.getCache('userMsg').token;
        config.headers.Authorization = token;
      }
      return config;
    },
    requestInterceptorCatch: err => {
      return err;
    },
    responseInterceptor: res => {
      return res;
    },
    responseInterceptorCatch: err => {
      openNotification('bottomLeft', err.response.data.message);
      return err;
    }
  }
});
/* harmony default export */ var network = (gbRequest);

/***/ }),

/***/ 33422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N3: function() { return /* binding */ getUserPlaylist; },
/* harmony export */   Oi: function() { return /* binding */ getPlaylistVideo; },
/* harmony export */   _V: function() { return /* binding */ getPlaylistDetail; },
/* harmony export */   cg: function() { return /* binding */ createPlaylist; },
/* harmony export */   xW: function() { return /* binding */ addVideoPlaylist; }
/* harmony export */ });
/* unused harmony export getAllPlaylist */
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

// 获取所有播放列表
async function getAllPlaylist(offset, limit) {
  return await gbRequest.post({
    url: '/playlist/all',
    params: {
      offset,
      limit
    }
  });
}
// 获取用户播放列表
async function getUserPlaylist(userId, offset, limit) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: '/playlist/user/' + userId,
    params: {
      offset,
      limit
    }
  });
}
// 创建播放列表
async function createPlaylist(name, description, isPublic) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/playlist',
    data: {
      name,
      description,
      isPublic
    }
  });
}
// 将视频添加到播放列表
async function addVideoPlaylist(vId, pId) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/playlist/video',
    data: {
      vId,
      pId
    }
  });
}
// 获取播放列表详情
async function getPlaylistDetail(id) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/playlist/' + id
  });
}
async function getPlaylistVideo(id, offset, limit) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/playlist/video/' + id,
    params: {
      offset,
      limit
    }
  });
}

/***/ }),

/***/ 80854:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Td: function() { return /* binding */ getUserMsg; },
/* harmony export */   hN: function() { return /* binding */ userUploadAvatar; },
/* harmony export */   n1: function() { return /* binding */ updateAvatar; },
/* harmony export */   ur: function() { return /* binding */ getUserLibrary; }
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16398);

async function userUploadAvatar(formData, getProgress) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/user/avatar/upload',
    data: formData,
    headers: {
      'Content-type': 'multipart/form-data'
    },
    onUploadProgress: getProgress
  });
}
// 更换用户头像
async function updateAvatar(id, formData, getProgress) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: '/user/avatar/update/' + id,
    data: formData,
    headers: {
      'Content-type': 'multipart/form-data'
    },
    onUploadProgress: getProgress
  });
}
// 获取userMsg
async function getUserMsg(userId) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post({
    url: `/user/msg/${userId}`
  });
}
// 获取用户媒体库
async function getUserLibrary(id) {
  return await _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get({
    url: `/user/library/` + id
  });
}

/***/ }),

/***/ 81707:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
class LocalCache {
  setCache(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  getCache(key) {
    const data = window.localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  }
  deleteCache(key) {
    window.localStorage.removeItem(key);
  }
  clearCache() {
    window.localStorage.clear();
  }
}
/* harmony default export */ __webpack_exports__.Z = (new LocalCache());

/***/ }),

/***/ 95085:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Zs: function() { return /* binding */ changeLoginType; },
  LG: function() { return /* binding */ changeUserDetail; },
  ZN: function() { return /* binding */ changeUserDetailAction; },
  Rv: function() { return /* binding */ changeUserMsg; },
  y: function() { return /* binding */ loginAction; }
});

// EXTERNAL MODULE: ./src/network/index.ts + 1 modules
var network = __webpack_require__(16398);
;// CONCATENATED MODULE: ./src/network/login/index.tsx

async function login(username, password) {
  return await network/* default */.Z.post({
    url: '/login',
    data: {
      userName: username,
      password
    }
  });
}
// EXTERNAL MODULE: ./src/utils/cache.ts
var cache = __webpack_require__(81707);
// EXTERNAL MODULE: ./src/network/user/index.tsx
var user = __webpack_require__(80854);
// EXTERNAL MODULE: ./src/views/profile/pages/customize/store/actionCreators.tsx
var actionCreators = __webpack_require__(92157);
;// CONCATENATED MODULE: ./src/views/login/store/actionCreators.ts




function changeUserMsg(userMsg) {
  return {
    type: 'changeUserMsg',
    userMsg: userMsg
  };
}
function changeUserDetail(userDetail) {
  return {
    type: 'changeUserDetail',
    userDetail: userDetail
  };
}
function changeLoginType(loginType) {
  return {
    type: 'changeLoginType',
    loginType: loginType
  };
}
function loginAction(userName, password, navigate) {
  return async dispatch => {
    try {
      const data = await login(userName, password);
      if (data.status === 200) {
        cache/* default */.Z.setCache('userMsg', data.data);
        cache/* default */.Z.setCache('loginType', 1);
        await dispatch(changeUserMsg(data.data));
        await dispatch(changeUserDetailAction(data.data.userId));
        await dispatch(changeLoginType(1));
        await dispatch((0,actionCreators/* changeChannelAction */.Q)(data.data.userId));
        navigate('/Home', {
          replace: true
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
}
function changeUserDetailAction(userId) {
  return async dispatch => {
    try {
      const data = await (0,user/* getUserMsg */.Td)(userId);
      if (data.status === 200) {
        dispatch(changeUserDetail(data.data));
        cache/* default */.Z.deleteCache('userDetail');
        cache/* default */.Z.setCache('userDetail', data.data);
        await dispatch((0,actionCreators/* changeChannelAction */.Q)(userId));
      }
    } catch (e) {
      console.log(e);
    }
  };
}

/***/ }),

/***/ 92157:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: function() { return /* binding */ changeChannelAction; },
/* harmony export */   u: function() { return /* binding */ changeChannel; }
/* harmony export */ });
/* harmony import */ var _network_channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38306);
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81707);


function changeChannel(channel) {
  return {
    type: 'changeChannel',
    channel: channel
  };
}
function changeChannelAction(userId) {
  return async dispatch => {
    const data = await (0,_network_channel__WEBPACK_IMPORTED_MODULE_0__/* .getUserChannel */ .Ff)(userId);
    if (data.status === 200) {
      console.log(data);
      dispatch(changeChannel(data.data));
      _utils_cache__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.setCache('channel', data.data);
    }
  };
}

/***/ }),

/***/ 20865:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PJ: function() { return /* binding */ LeftContent; },
/* harmony export */   b5: function() { return /* binding */ UserPlaylistWrapper; },
/* harmony export */   du: function() { return /* binding */ RightContent; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53133);

const UserPlaylistWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.div`
  display: flex;
  align-items: flex-start;
`;
const LeftContent = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: ${30 / 40}rem ${30 / 40}rem;
  height: 86vh;
  background-image: url(${props => props.bgc});
  background-repeat: no-repeat;
  background-size: auto 9999px;
  background-position: center;
  border-radius: ${16 / 40}rem;
  overflow: hidden;
  .mask {
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.08);
  }
  .img-container {
    width: ${430 / 40}rem;
    height: ${220 / 40}rem;
    border-radius: ${16 / 40}rem;
    overflow: hidden;
    img {
      width: 100%;
      border-radius: 4px;
    }
  }
  .later-label {
    font-size: ${30 / 40}rem;
    color: #fff;
    font-weight: bolder;
    margin: ${28 / 40}rem 0 0 0;
    width: ${450 / 40}rem;
  }
  .user-name {
    font-size: ${18 / 40}rem;
    color: #fff;
    margin: ${20 / 40}rem 0 ${18 / 40}rem 0;
  }
  .vio-info {
    display: flex;
    align-items: center;
    .vio-count {
      font-size: ${16 / 40}rem;
      color: #fff;
      text-shadow: 0 0 2px rgba(0, 0, 0, 1);
    }
    .update-time {
      margin: 0 0 0 ${10 / 40}rem;
      font-size: ${16 / 40}rem;
      color: #fff;
      text-shadow: 0 0 2px rgba(0, 0, 0, 1);
    }
  }
`;
const RightContent = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.div`
  margin: 0 0 0 ${30 / 40}rem;
  width: 70%;
  height: 86vh;
  overflow-y: scroll;
  .vio-list {
    & > li {
      display: flex;
      align-items: flex-start;
      cursor: pointer;
      padding: ${20 / 40}rem 0 ${20 / 40}rem ${18 / 40}rem;
      border-radius: ${8 / 40}rem;
      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .cover-container {
        margin: 0 ${24 / 20}rem 0 0;
        width: ${200 / 40}rem;
        img {
          width: 100%;
          border-radius: 8px;
        }
      }
      .later-right-info {
        width: 70%;
        .desc {
          display: flex;
          align-items: center;
          margin: ${16 / 40}rem 0 0 0;
          .user-name,
          .play-count,
          .create-time {
            font-size: ${16 / 40}rem;
            color: #606060;
          }
          .play-count {
            margin: 0 ${8 / 40}rem;
          }
        }
      }
    }
  }
`;

/***/ }),

/***/ 45467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  font-size: 2.083333333333vw;\n}\n:root {\n  --line-color: #d9d9d9;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-family: 'Roboto', 'Arial', sans-serif;\n  word-break: break-all;\n}\nul,\nli {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\np {\n  margin: 0;\n  padding: 0;\n}\na {\n  text-decoration: none;\n}\n.text-nowrap {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n::-webkit-scrollbar {\n  width: 5px;\n  background-color: #e0e0e0;\n}\n.ant-layout-header {\n  background-color: #fff;\n  padding: 0 16px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.ant-layout-sider {\n  background-color: #fff;\n  border-right: 1px solid #e5e5e5;\n}\n.ant-layout-content {\n  padding: 16px;\n}\n.ant-tabs-tab {\n  padding: 6px 0;\n}\ninput,\ntextarea,\nbutton {\n  outline: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n}\n.profile-drop-style {\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ant-input-textarea,\n.ant-input-textarea-show-count {\n}\n.ant-input {\n  border-radius: 6px;\n}\n.ant-layout-content {\n  background-color: #fff;\n}\n.text-nowrap-mul-line {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  word-break: break-all;\n}\n.add-new-playlist {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.add-new-playlist .add-label {\n  margin: 0 0 0 15px;\n  padding: 10px 0;\n}\n.create-playlist {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.create-playlist p {\n  margin: 8px 0 5px 0;\n}\n.create-playlist .ant-select {\n  width: 100%;\n}\n.create-label {\n  font-size: 16px;\n  color: #065fd4;\n  margin: 18px 0 0 0;\n  cursor: pointer;\n  width: 100%;\n}\n.create-playlist .private {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.ant-select-item-option-content .private {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.moment-out-of-body-img-container {\n  display: flex;\n  justify-content: center;\n  height: 120px;\n  background-color: var(--line-color);\n  margin: 15px 0;\n}\n#root {\n  height: 100%;\n}\n.ant-slider-track {\n  background-color: #ea3323;\n}\n.ant-slider:hover .ant-slider-track {\n  background-color: #ea3323;\n}\n.ant-slider-handle {\n  border: solid 2px #ea3323;\n}\n.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {\n  border-color: #ea3323;\n}\n.ant-slider {\n  margin: 5px 10px;\n}\n.ant-slider-handle:focus {\n  border-color: #ea3323;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/base.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;AAC7B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,eAAe;EACf,0CAA0C;EAC1C,qBAAqB;AACvB;AACA;;EAEE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,qBAAqB;AACvB;AACA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,yBAAyB;AAC3B;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,gCAAgC;AAClC;AACA;EACE,sBAAsB;EACtB,+BAA+B;AACjC;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;;;EAGE,aAAa;EACb,YAAY;EACZ,UAAU;EACV,SAAS;AACX;AACA;EACE,wCAAwC;EACxC,kBAAkB;EAClB,gBAAgB;AAClB;AACA;;AAEA;AACA;EACE,kBAAkB;AACpB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,oBAAoB;EACpB,4BAA4B;EAC5B,qBAAqB;EACrB,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,WAAW;AACb;AACA;EACE,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;AACb;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,mCAAmC;EACnC,cAAc;AAChB;AACA;EACE,YAAY;AACd;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,qBAAqB;AACvB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,qBAAqB;AACvB","sourcesContent":["html {\n  font-size: 2.083333333333vw;\n}\n:root {\n  --line-color: #d9d9d9;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-family: 'Roboto', 'Arial', sans-serif;\n  word-break: break-all;\n}\nul,\nli {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\np {\n  margin: 0;\n  padding: 0;\n}\na {\n  text-decoration: none;\n}\n.text-nowrap {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n::-webkit-scrollbar {\n  width: 5px;\n  background-color: #e0e0e0;\n}\n.ant-layout-header {\n  background-color: #fff;\n  padding: 0 16px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.ant-layout-sider {\n  background-color: #fff;\n  border-right: 1px solid #e5e5e5;\n}\n.ant-layout-content {\n  padding: 16px;\n}\n.ant-tabs-tab {\n  padding: 6px 0;\n}\ninput,\ntextarea,\nbutton {\n  outline: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n}\n.profile-drop-style {\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ant-input-textarea,\n.ant-input-textarea-show-count {\n}\n.ant-input {\n  border-radius: 6px;\n}\n.ant-layout-content {\n  background-color: #fff;\n}\n.text-nowrap-mul-line {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  word-break: break-all;\n}\n.add-new-playlist {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.add-new-playlist .add-label {\n  margin: 0 0 0 15px;\n  padding: 10px 0;\n}\n.create-playlist {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.create-playlist p {\n  margin: 8px 0 5px 0;\n}\n.create-playlist .ant-select {\n  width: 100%;\n}\n.create-label {\n  font-size: 16px;\n  color: #065fd4;\n  margin: 18px 0 0 0;\n  cursor: pointer;\n  width: 100%;\n}\n.create-playlist .private {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.ant-select-item-option-content .private {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.moment-out-of-body-img-container {\n  display: flex;\n  justify-content: center;\n  height: 120px;\n  background-color: var(--line-color);\n  margin: 15px 0;\n}\n#root {\n  height: 100%;\n}\n.ant-slider-track {\n  background-color: #ea3323;\n}\n.ant-slider:hover .ant-slider-track {\n  background-color: #ea3323;\n}\n.ant-slider-handle {\n  border: solid 2px #ea3323;\n}\n.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {\n  border-color: #ea3323;\n}\n.ant-slider {\n  margin: 5px 10px;\n}\n.ant-slider-handle:focus {\n  border-color: #ea3323;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 46700:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": 42786,
	"./af.js": 42786,
	"./ar": 30867,
	"./ar-dz": 14130,
	"./ar-dz.js": 14130,
	"./ar-kw": 96135,
	"./ar-kw.js": 96135,
	"./ar-ly": 56440,
	"./ar-ly.js": 56440,
	"./ar-ma": 47702,
	"./ar-ma.js": 47702,
	"./ar-ps": 20315,
	"./ar-ps.js": 20315,
	"./ar-sa": 16040,
	"./ar-sa.js": 16040,
	"./ar-tn": 37100,
	"./ar-tn.js": 37100,
	"./ar.js": 30867,
	"./az": 31083,
	"./az.js": 31083,
	"./be": 9808,
	"./be.js": 9808,
	"./bg": 68338,
	"./bg.js": 68338,
	"./bm": 67438,
	"./bm.js": 67438,
	"./bn": 8905,
	"./bn-bd": 76225,
	"./bn-bd.js": 76225,
	"./bn.js": 8905,
	"./bo": 11560,
	"./bo.js": 11560,
	"./br": 1278,
	"./br.js": 1278,
	"./bs": 80622,
	"./bs.js": 80622,
	"./ca": 2468,
	"./ca.js": 2468,
	"./cs": 5822,
	"./cs.js": 5822,
	"./cv": 50877,
	"./cv.js": 50877,
	"./cy": 47373,
	"./cy.js": 47373,
	"./da": 24780,
	"./da.js": 24780,
	"./de": 59740,
	"./de-at": 60217,
	"./de-at.js": 60217,
	"./de-ch": 60894,
	"./de-ch.js": 60894,
	"./de.js": 59740,
	"./dv": 5300,
	"./dv.js": 5300,
	"./el": 50837,
	"./el.js": 50837,
	"./en-au": 78348,
	"./en-au.js": 78348,
	"./en-ca": 77925,
	"./en-ca.js": 77925,
	"./en-gb": 22243,
	"./en-gb.js": 22243,
	"./en-ie": 46436,
	"./en-ie.js": 46436,
	"./en-il": 47207,
	"./en-il.js": 47207,
	"./en-in": 44175,
	"./en-in.js": 44175,
	"./en-nz": 76319,
	"./en-nz.js": 76319,
	"./en-sg": 31662,
	"./en-sg.js": 31662,
	"./eo": 92915,
	"./eo.js": 92915,
	"./es": 55655,
	"./es-do": 55251,
	"./es-do.js": 55251,
	"./es-mx": 96112,
	"./es-mx.js": 96112,
	"./es-us": 71146,
	"./es-us.js": 71146,
	"./es.js": 55655,
	"./et": 5603,
	"./et.js": 5603,
	"./eu": 77763,
	"./eu.js": 77763,
	"./fa": 76959,
	"./fa.js": 76959,
	"./fi": 11897,
	"./fi.js": 11897,
	"./fil": 42549,
	"./fil.js": 42549,
	"./fo": 94694,
	"./fo.js": 94694,
	"./fr": 94470,
	"./fr-ca": 63049,
	"./fr-ca.js": 63049,
	"./fr-ch": 52330,
	"./fr-ch.js": 52330,
	"./fr.js": 94470,
	"./fy": 5044,
	"./fy.js": 5044,
	"./ga": 29295,
	"./ga.js": 29295,
	"./gd": 2101,
	"./gd.js": 2101,
	"./gl": 38794,
	"./gl.js": 38794,
	"./gom-deva": 27884,
	"./gom-deva.js": 27884,
	"./gom-latn": 23168,
	"./gom-latn.js": 23168,
	"./gu": 95349,
	"./gu.js": 95349,
	"./he": 24206,
	"./he.js": 24206,
	"./hi": 30094,
	"./hi.js": 30094,
	"./hr": 30316,
	"./hr.js": 30316,
	"./hu": 22138,
	"./hu.js": 22138,
	"./hy-am": 11423,
	"./hy-am.js": 11423,
	"./id": 29218,
	"./id.js": 29218,
	"./is": 90135,
	"./is.js": 90135,
	"./it": 90626,
	"./it-ch": 10150,
	"./it-ch.js": 10150,
	"./it.js": 90626,
	"./ja": 39183,
	"./ja.js": 39183,
	"./jv": 24286,
	"./jv.js": 24286,
	"./ka": 12105,
	"./ka.js": 12105,
	"./kk": 47772,
	"./kk.js": 47772,
	"./km": 18758,
	"./km.js": 18758,
	"./kn": 79282,
	"./kn.js": 79282,
	"./ko": 33730,
	"./ko.js": 33730,
	"./ku": 1408,
	"./ku-kmr": 90563,
	"./ku-kmr.js": 90563,
	"./ku.js": 1408,
	"./ky": 33291,
	"./ky.js": 33291,
	"./lb": 36841,
	"./lb.js": 36841,
	"./lo": 55466,
	"./lo.js": 55466,
	"./lt": 57010,
	"./lt.js": 57010,
	"./lv": 37595,
	"./lv.js": 37595,
	"./me": 39861,
	"./me.js": 39861,
	"./mi": 35493,
	"./mi.js": 35493,
	"./mk": 95966,
	"./mk.js": 95966,
	"./ml": 87341,
	"./ml.js": 87341,
	"./mn": 5115,
	"./mn.js": 5115,
	"./mr": 10370,
	"./mr.js": 10370,
	"./ms": 9847,
	"./ms-my": 41237,
	"./ms-my.js": 41237,
	"./ms.js": 9847,
	"./mt": 72126,
	"./mt.js": 72126,
	"./my": 56165,
	"./my.js": 56165,
	"./nb": 64924,
	"./nb.js": 64924,
	"./ne": 16744,
	"./ne.js": 16744,
	"./nl": 93901,
	"./nl-be": 59814,
	"./nl-be.js": 59814,
	"./nl.js": 93901,
	"./nn": 83877,
	"./nn.js": 83877,
	"./oc-lnc": 92135,
	"./oc-lnc.js": 92135,
	"./pa-in": 15858,
	"./pa-in.js": 15858,
	"./pl": 64495,
	"./pl.js": 64495,
	"./pt": 89520,
	"./pt-br": 57971,
	"./pt-br.js": 57971,
	"./pt.js": 89520,
	"./ro": 96459,
	"./ro.js": 96459,
	"./ru": 21793,
	"./ru.js": 21793,
	"./sd": 40950,
	"./sd.js": 40950,
	"./se": 10490,
	"./se.js": 10490,
	"./si": 90124,
	"./si.js": 90124,
	"./sk": 64249,
	"./sk.js": 64249,
	"./sl": 14985,
	"./sl.js": 14985,
	"./sq": 51104,
	"./sq.js": 51104,
	"./sr": 49131,
	"./sr-cyrl": 79915,
	"./sr-cyrl.js": 79915,
	"./sr.js": 49131,
	"./ss": 85893,
	"./ss.js": 85893,
	"./sv": 98760,
	"./sv.js": 98760,
	"./sw": 91172,
	"./sw.js": 91172,
	"./ta": 27333,
	"./ta.js": 27333,
	"./te": 23110,
	"./te.js": 23110,
	"./tet": 52095,
	"./tet.js": 52095,
	"./tg": 27321,
	"./tg.js": 27321,
	"./th": 9041,
	"./th.js": 9041,
	"./tk": 19005,
	"./tk.js": 19005,
	"./tl-ph": 75768,
	"./tl-ph.js": 75768,
	"./tlh": 89444,
	"./tlh.js": 89444,
	"./tr": 72397,
	"./tr.js": 72397,
	"./tzl": 28254,
	"./tzl.js": 28254,
	"./tzm": 51106,
	"./tzm-latn": 30699,
	"./tzm-latn.js": 30699,
	"./tzm.js": 51106,
	"./ug-cn": 9288,
	"./ug-cn.js": 9288,
	"./uk": 67691,
	"./uk.js": 67691,
	"./ur": 13795,
	"./ur.js": 13795,
	"./uz": 6791,
	"./uz-latn": 60588,
	"./uz-latn.js": 60588,
	"./uz.js": 6791,
	"./vi": 65666,
	"./vi.js": 65666,
	"./x-pseudo": 14378,
	"./x-pseudo.js": 14378,
	"./yo": 75805,
	"./yo.js": 75805,
	"./zh-cn": 83839,
	"./zh-cn.js": 83839,
	"./zh-hk": 55726,
	"./zh-hk.js": 55726,
	"./zh-mo": 99807,
	"./zh-mo.js": 99807,
	"./zh-tw": 74152,
	"./zh-tw.js": 74152
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 52445:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + {"537":"df17232ea09f443337fc","561":"30ca8208c62f561658ff","610":"62a0b42f8982051e8528","1068":"d58c79f4f6bf6fa8b204","1093":"743ce12a02bea4cb69b0","1211":"a9d8f45a3fb65af82065","1853":"d65c9eb11c1023877538","2068":"91c92fafff44eb153c74","2146":"c62e8b3fbf5431be6928","2851":"0aea12a02f386e633afd","2856":"a1a75fed56b2005496a5","2866":"bd102783e1987e81e381","3041":"622fab919863f1517d02","3322":"669a3d449c9bc32a1df7","3474":"0d5e68799c82a6c314b4","3495":"f1ab027ea6032f833b35","3506":"b00fc08340ddc5323b07","3580":"442ebebdcff384763a4e","3935":"5b675c7033e23daa415f","4412":"f63299155d0895bb4466","4423":"07308aa495eec0f7bbcc","4746":"b4ad656f989d6270a7f8","5056":"6d5e3c7e5edb5266b24d","5092":"83e7474805b22047a593","5109":"82c20bc6f69f02a7c747","5376":"a2f1a0545b72ae55b3f0","5598":"67cf3b2930e610b38db4","5893":"40c7827fc27ade6b73f9","5987":"1b62d0d5aee6f3ec1b00","6261":"666de548831405d0dc63","6353":"cfb8c9c12432345bd2da","6431":"5a492cfddfee6625f1af","6482":"4ddd99a3af781b3fc686","6635":"fc27376ee5ec0ce931b2","6994":"29b4b6da4068561dd654","6996":"c3cf2d82ec9e670061f0","7055":"d292d9e481df0b8d072a","7134":"a1ec07cccfc5a2572834","7491":"0c2b9502efc37922fef0","7701":"2f46389b2d19e040b58f","7842":"33ab206a50e206d46834","8376":"cbe90669a01434a8c196","8579":"f41214cc3332db0db8ac","8682":"0d6e72f7ac8f97dea2f9","8749":"55be5208363dfa08daf0","8889":"095679618bf001039198","9132":"c109d44e7d4fdebab386","9222":"749aaef034ff465bcbb6","9332":"f386dd0b7ac551e198d8","9788":"26c2f3cea97f445841b4","9974":"3e01e4fca571f9f3c2dc"}[chunkId] + ".bundle.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "codergb-hub-client:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcodergb_hub_client"] = self["webpackChunkcodergb_hub_client"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [8666], function() { return __webpack_require__(53947); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=4936afab8b3184fed5db.bundle.js.map