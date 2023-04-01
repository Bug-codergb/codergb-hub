import styled from "styled-components";
export const SearchDetailWrapper = styled.div`
  height: 80vh;
  overflow-y: scroll;
  .search-list{
    &>li{
      padding: ${20/40}rem;
      &:hover{
        box-shadow: 0 0 10px rgba(0,0,0,.1);
      }
    }
  }
`