import styled from "styled-components";
export const ShortsWrapper = styled.div`
  .outer {
    height: 87vh;
    overflow-y: scroll;
  }
  .short-video-list {
    .item {
      height: 60vh;
      background-color: #333;
      &:nth-child(1) {
        background-color: pink;
      }
      &:nth-child(2) {
        background-color: skyblue;
      }
      &:nth-child(3) {
        background-color: #bfa;
      }
    }
  }
`;
