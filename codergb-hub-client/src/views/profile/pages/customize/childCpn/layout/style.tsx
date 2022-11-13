import styled from "styled-components";
export const LayoutWrapper = styled.div`
  background-color: #ffffff;
  .label{
    font-family: "Roboto","Noto",sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    font-size: ${20/40}rem;
  }
  .tip{
    font-family: "Roboto","Noto",sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-size: ${15/40}rem;
  }
  .trailer-outer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e5e5e5;
    padding: ${20/40}rem ${20/40}rem ${20/40}rem 0;
    margin: ${20/40}rem 0 ${20/40}rem 0;
    border-radius: 5px;
    .left-content{
      display: flex;
      align-items: center;
      .video-container{
        width: ${45/40}rem;
        height: ${45/40}rem;
        background-color: #e9e9e9;
        margin: 0 ${16/40}rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: ${5/40}rem;
      }
    }
    .right-content{
      color: #065fd4;
      cursor: pointer;
    }
  }
`