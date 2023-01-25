import styled from "styled-components";
export const MusicWrapper = styled.div`
  height: 80vh;
  overflow-y: scroll;
.music-header{
  width: 100%;
  img{
    width: 100%;
  }
}
  .channel-msg{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${24/40}rem 0;
    .left-container{
      display: flex;
      align-items: center;
      .left{
        width: ${100/40}rem;
        height: ${100/40}rem;
        border-radius: 50%;
        overflow: hidden;
        &>img{
          width: 100%;
        }
      }
      .right{
        margin: 0 0 0 ${30/40}rem;
        .name{
          font-size: ${40/40}rem;
        }
        .sub{
          font-size: ${20/40}rem;
          color: #606060;
        }
      }
    }
  }
`