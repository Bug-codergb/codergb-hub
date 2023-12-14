import styled from "styled-components";
import chat from "../../assets/img/chat-window.jpg";
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
    }
    .box-inner {
      position: relative;
    }
    .scroll-container {
      height: 87vh;
      width: ${500 / 40}rem;
      background-color: pink;
      position: absolute;
      z-index: 999;
      left: 100%;
      top: 0;
      overflow-y: scroll;
      .scroll-inner {
        width: 100%;
        height: 130%;
        background-color: skyblue;
        background-image: url(${chat});
      }
    }
  }
`;
