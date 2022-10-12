import styled from "styled-components";
import "../../assets/css/cropper.css";
export const CustomizeUploadWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  .container{
    height: 200px;
    flex: 1;
    background-color: pink;
    img{
      height: 100%;
    }
  }
  .preview{
    flex: 1;
    background-color: skyblue;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .small{
      width: 200px;
      height: 200px;
      background-color: pink; 
      overflow: hidden;
      border-radius: 50%;
      img{
        height: 100%;
      }
    } 
  }
`