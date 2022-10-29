import styled from "styled-components";
export const BlockListWrapper = styled.div`
  background-color: #fff;
  padding: ${15/40}rem 0;
  .block-list{
    &>li{
      padding: ${8/40}rem ${25/40}rem;
      white-space: nowrap;
      &:hover{
        background-color: #f9f9f9;
        cursor: pointer;
      }
    }
  }
`