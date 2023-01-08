import styled from "styled-components";
export const PlaylistWrapper = styled.div`
  .title-label{
    font-size: ${30/40}rem;
    font-weight: bolder;
    margin: 0 0 ${16/40}rem 0;
  }
`
export const PlaylistItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  .left-container{
    .img-container{
      width: ${180/40}rem;
      height: ${96/40}rem;
      overflow: hidden;
      img{
        width: 100%;
        border-radius: 4px;
      }
    }
  }
  .right-container{
    margin: 0 0 0 ${24/40}rem;
    .name{
      font-size: ${20/40}rem;
      font-weight: bold;
      margin: 0 0 ${10/40}rem;
      color: #0d0d0d;
    }
    .desc{
      font-size: ${16/40}rem;
      color: #909090;
    }
  }
`
