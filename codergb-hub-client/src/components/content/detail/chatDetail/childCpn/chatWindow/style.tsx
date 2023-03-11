import styled from "styled-components";
export const ChatWindowWrapper=styled.div`
  background-color: #ffffff;
  .recent-title{
    font-size: ${16/40}rem;
    color: #666666;
    padding: ${20/40}rem ${20/40}rem;
    white-space: nowrap;
    box-sizing: border-box;
  }
  .gb-chat-header{
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .gb-chat{
    height: ${520/40}rem;
  }
  .gb-chat-side{
    min-width: ${320/40}rem!important;
    max-width: ${320/40}rem!important;
    width: ${320/40}rem!important;
  }
  .gb-chat-footer{
    background-color: #ffffff;
    border-top: 1px solid #e5e5e5;
    height: ${200/40}rem;
    padding: ${20/40}rem ${10/40}rem ${20/40}rem ${10/40}rem;
    .publish-container{
      padding: ${10/40}rem 0 0 0;
      display: flex;
      justify-content: flex-end;
      .publish-btn{
        display: inline-flex;
        border: 1px solid #cccccc;
        justify-content: center;
        font-size: ${18/40}rem;
        padding: ${5/40}rem ${10/40}rem;
        cursor: pointer;
        border-radius: 4px;
      }
    }
    .ant-input{
      border: none;
      resize: none;
      outline: none;
      box-shadow: none;
    }
    .ant-input:focus{
     border: none;
      outline: none;
    }
  }
`