import styled from "styled-components";
export const UploadVideoWrapper=styled.div`
  .upload{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    position: relative;
    padding: ${80/40}rem;
    width: 100%;
    .file-inp{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      opacity: 0;
      width: 100%;
      height: 100%;
    }
    .select-btn{
      font-size: ${20/40}rem;
      background-color: #065fd4;
      color: #fff;
      padding: ${10/40}rem ${20/40}rem;
      border-radius: 4px;
      cursor: pointer;
    }
    .upload-icon{
      svg{
        width: ${50/40}rem;
        height: ${50/40}rem;
        color: #909090;
      }
    }
    .upload-label{
      margin: ${30/40}rem 0;
    }
  }
  .video-upload-loading{
    display: flex;
    align-items: center;
    margin: 10px 0 0 0;
    .video-upload-loading-icon{
      display: flex;
      align-items: center;
      span{
        font-size: ${26/40}rem;
      }
    }
    .label{
      font-size: ${14/40}rem;
      margin: 0 0 0 20px;
    }
  }
`