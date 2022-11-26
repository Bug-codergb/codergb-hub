import styled from "styled-components";
export const AddWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 0 ${15/40}rem rgba(0,0,0,.18);
  .add-list{
    padding: ${26/40}rem 0;
    &>li{
      padding: ${12/40}rem ${20/40}rem;
      cursor: pointer;
      .name{
        font-size: ${18/40}rem;
      }
      &:hover{
        background-color: #e5e5e5;
      }
    }
  }
  .ant-select{
    width: 100%;
  }
  .create-playlist{
    padding:0 0 ${20/40}rem 0;
    p{
      display: flex;
      justify-content: flex-start;
      font-size: ${18/40}rem;
      color: #606060;
      margin: ${14/40}rem 0;
    }
    .private{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .create-label{
      font-size: ${18/40}rem;
      color: #065fd4;
      margin: ${20/40}rem 0 0 0;
      cursor: pointer;
    }
  }
`