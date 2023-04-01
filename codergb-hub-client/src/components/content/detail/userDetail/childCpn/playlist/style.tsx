import styled from "styled-components";
export const PlaylistWrapper =styled.div`
  .play-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &>li{
      width: ${250/40}rem;
    }
    .cover{
      width: 100%;
      img{
        width: 100%;
        border-radius: 4px;
      }
    }
    .state{
      .name{
        font-size: ${18/40}rem;
        margin: ${15/40}rem 0 ${5/40}rem 0;
      }
      .create-time,.count{
        font-size: ${16/40}rem;
        color: #606060;
      }
    }
  }
`