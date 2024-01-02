import styled from 'styled-components';
import chat from '../../assets/img/chat-window.jpg';
export const ShortsWrapper = styled.div`
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .outer {
      height: 87vh;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 0px;
      }
      scrollbar-width: none;

      .g-video-container {
        position: absolute;
        left: 0;
        top: 0;
        width: ${500 / 40}rem;
        height: 87vh;
        z-index: 999;
        video {
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0);
          object-fit: contain;
        }
      }
    }
    .box-inner {
      position: relative;
    }
    .scroll-container {
      height: 87vh;
      width: ${500 / 40}rem;

      position: absolute;
      z-index: 99999999;
      left: 0;
      top: 0;
      overflow-y: scroll;
      opacity: 0;
      .scroll-inner {
        width: 100%;
        height: 130%;
      }
    }
  }
`;
