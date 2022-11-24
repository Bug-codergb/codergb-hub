import styled from "styled-components";
export const BasicWrapper = styled.div`
  .desc-label{
    font-size: ${18/40}rem;
    color: #606060;
  }
  .name-label-second{
    margin: ${16/40}rem 0 0 0 ;
  }
  .publish-outer{
    display: flex;
    justify-content: flex-end;
    button{
      padding: ${5/40}rem ${15/40}rem;
      background-color: #1162cc;
      color: #fff;
      font-size: ${18/40}rem;
      border-radius:${4/40}rem ;
    }
    [disabled]{
      background-color: #e5e5e5;
      color: #000000;
      cursor: not-allowed
    }
  }
`