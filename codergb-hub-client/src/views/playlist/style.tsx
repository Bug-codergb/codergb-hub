import styled from "styled-components"
export const PlaylistWrapper=styled.div`
  display: flex;
  align-items: flex-start;
`
export const LeftContainer:any = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: ${30/40}rem ${30/40}rem;
  height: 86vh;
  background-image: url(${props=>(props as any).bgc});
  background-repeat: no-repeat;
  background-size:auto 9999px;
  background-position: center;
  border-radius: ${16/40}rem;
  overflow: hidden;
  .mask{
    position: absolute;
    background-color: black;
    width: 100%;
    height:100%;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.08);
  }
  .img-container{
    width: ${450/40}rem;
    border-radius: ${16/40}rem;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  .later-label{
    font-size: ${30/40}rem;
    color: #fff;
    font-weight: bolder;
    margin: ${28/40}rem 0 0 0;
  }
  .user-name{
    font-size: ${18/40}rem;
    color: #fff;
    margin: ${20/40}rem 0 ${18/40}rem 0;
  }
  .vio-info{
    display: flex;
    align-items: center;
    .vio-count{
      font-size: ${16/40}rem;
      color: #d2cfd0;
    }
    .update-time{
      margin: 0 0 0 ${10/40}rem;
      font-size: ${16/40}rem;
      color:#d2cfd0;
    }
  }
`
export const RightContainer = styled.div`

`