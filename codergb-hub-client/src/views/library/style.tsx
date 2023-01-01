import styled from "styled-components"
export const LibraryWrapper=styled.div`
  display: flex;
  align-items: flex-start;
  .left-content{
    width: 75%;
    .line{
      width: 100%;
      height: 1px;
      background-color: #e5e5e5;
      margin: ${25/40}rem 0;
    }
  }
  .right-content{
    width: 24%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${60/40}rem;
    .avatar-outer{
      width: ${120/40}rem;
      height: ${120/40}rem;
      img{
        width: 100%;
        border-radius:50% ;
      }
    }
    .user-name{
      margin: ${20/40}rem 0 0 0;
    }
    .sub-upload-thumb{
      width: 60%;
      border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      margin: ${40/40}rem 0 0 0;
      &>li{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: ${8/40}rem 0;
        &:nth-child(2){
          border-top: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
        }
        &>span{
          &:nth-child(1){
            font-size: ${16/40}rem;
            color: #606060;
          }
        }
      }
    }
  }
`