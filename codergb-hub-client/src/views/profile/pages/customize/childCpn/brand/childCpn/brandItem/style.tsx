import styled from "styled-components";
export const BrandItemWrapper:any = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 0 0 ${20/40}rem 0;
  .title{
    font-family: "Roboto","Noto",sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    font-size: 15px;
  }
  .label{
    font-family: "Roboto","Noto",sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-size: 13px;
  }
  .content{
    display: flex;
    align-items: flex-start;
    margin: ${20/40}rem 0 0 0;
    .img-container{
      width: ${300/40}rem;
      height: ${170/40}rem;
      background-color: #f9f9f9;
      position: relative;
      margin: 0 ${24/40}rem 0 0;
      overflow: hidden;
      img{
        border-radius:${(props:any)=> props.isAvatar? "50%":0};
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
    }
    .right-content{
      width: 50%;
      .desc{
        font-size: 13px;
        color: #606060;
      }
      .upload{
        color: #1162cc;
        cursor: pointer;
        margin: 5px 0 0 0;
      }
    }
  }
`