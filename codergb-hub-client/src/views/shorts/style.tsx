import styled from "styled-components";
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
  }
`;
