import styled from "styled-components";
export const BlockPageWrapper = styled.div`
  margin: ${20/40}rem ${10/40}rem ${20/40}rem 0;
  width: 90%;
  .block-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header-left{
      .name{
        margin:0 0 ${8/40}rem 0;
      }
      .desc{
        font-size: ${16/40}rem;
      }
    }
    .header-right{
      display: flex;
      align-items: center;
      
      .add{
        cursor: pointer;
        svg{
          color: #065fd4;
        }
      }
      .add-label{
        cursor: pointer;
        color: #065fd4;
        margin: 0 0 0 ${10/40}rem;
      }
    }
  }
`