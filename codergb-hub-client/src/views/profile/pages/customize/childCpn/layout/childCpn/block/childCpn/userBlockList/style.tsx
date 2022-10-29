import styled from "styled-components";
export const UserBlockListWrapper = styled.div`
  margin: ${20/40}rem 0 0 0;
  .user-block-list{
    &>li{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #e5e5e5;
      margin: 0 0 ${20/40}rem 0;
      padding: ${17/40}rem ${20/40}rem;
      border-radius: 4px;
      .left-container{
        .layout-icon{
          width: 10%;
        } 
        .block{
          .block-name{
            font-size: ${18/40}rem;
            color: #0d0d0d;
            margin: 0 0 ${13/40}rem 0;
          }
          .block-desc{
            font-size: ${16/40}rem;
            color: #606060;
          }
        }
      }
    }
  }
`