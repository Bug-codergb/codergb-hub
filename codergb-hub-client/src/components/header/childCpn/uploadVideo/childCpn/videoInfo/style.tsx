import styled from "styled-components";
export const VideoInfoWrapper = styled.div`
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`
export const LeftContent = styled.div`
  height: ${440/40}rem;
  overflow-y: scroll;
  width: 60%;
  p{
    margin: 0;
    padding: 0;
  }
  .title-tip{
    font-weight: bolder;
    font-size: ${26/40}rem;
    margin: 0 0 ${10/40}rem;
  }
  .ant-input-textarea-show-count{
    .ant-input{border-radius: 4px};
  }
  .abbreviation{
    font-family: "Roboto","Noto",sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    font-size: ${20/40}rem;
    line-height: ${30/40}rem;
    margin: ${10/40}rem 0 ${10/40}rem 0;
  }
  .desc{
    font-family: "Roboto","Noto",sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-size: ${18/40}rem;
    line-height: ${20/40}rem;
    padding-bottom: 8px;
    color: #606060;
  }
  .abbreviation-upload-outer{
    display: flex;
    align-items: center;
    .delete-abb{
      width: ${130/40}rem;
      height: ${130/40}rem;
      background-color: rgba(238, 238, 238,.7);
      border-left:1px solid #f2f2f2;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        background-color: #e3e3e3; 
      }
      &>span{
        svg{
          font-size:${40/40}rem;
          color: #cc0101;
          cursor: pointer;
        }
      }
    }
  }
  .abbreviation-upload{
    width: ${280/40}rem;
    height: ${130/40}rem;
    margin: ${15/40}rem 0;
    background-color: #eeeeee;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    input{
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    &>img{
      width: 100%;
    }
    &>span{
      svg{
        display: inline-block;
        width: ${40/40}rem;
        height: ${40/40}rem;
        font-size: ${30/40}rem;
        color: #cc0101;
      }
    }
  }
  .playlist{
    width: ${300/40}rem;
  }
`
export const RightContent = styled.div`
  width: 38%;
  video{
    margin: ${46/40}rem 0 0 0;
    width: 100%;
  }
  .video-info{
    width: 100%;
    margin: ${20/40}rem 0 0 0;
    border-radius: 5px;
    padding: ${15/40}rem ${8/40}rem;
    background-color: #f9f9f9;
    .label,.value{
      font-size: ${16/40}rem;
    }
  }
`