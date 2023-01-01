import styled from "styled-components";
export const DmWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${20/40}rem 0 0 0;
  .dm-outer{
    display: flex;
    align-items: center;
    border-radius: ${8/40}rem;
    overflow: hidden;
    margin: 0 0 0 ${15/40}rem;
    &>input{
      display: inline-block;
      width: ${500/40}rem;
      background-color: #f1f2f3;
      padding: ${8/40}rem ${15/40}rem;
    }
    .pub{
      cursor: pointer;
      background-color: #ff0000;
      color: #fff;
      height: 100%;
      padding: ${8/40}rem ${15/40}rem;
    }
  }
`