import styled from "styled-components";
export const VideoItemWrapper:any = styled.div`
  background-color: #fff;
  width: ${props=>(props as any).itemWidth / 40+'rem'};
  height: ${props=>(props as any).itemWidth* (props as any).scale /40 + 'rem'};
  &>img{
    width: 100%;
    border-radius: ${8/40}rem ${8/40}rem 0 0;
  }
  .video-container{
    border-radius: ${8/40}rem ${8/40}rem 0 0;
    overflow: hidden;
    width: 100%;
    height:${props=>(props as any).vioHeight/40+'rem'};;
    background-color: black;
    &>video{
      width: 100%;
      height:${props=>(props as any).vioHeight/40+'rem'};;
      object-position: 50% 50%;
      object-fit: contain;
    } 
  }
  .msg-info{
    display: flex;
    align-items: flex-start;
    margin: ${20/40}rem 0 0 0;
    padding: 0 ${15/40}rem;
    width: 100%;
    .left-container{
      width: ${50/40}rem;
      height: ${50/40}rem;
      border-radius: 50%;
      background-color: #eeeeee;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .right-container{
      flex: 1;
      margin: 0 0 0 ${20/40}rem;
      .msg{
        .state{
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
          .video-name{
            font-size: ${props=>(props as any).itemWidth/20/40+'rem'};
            color: #0f0f0f;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            width: 84%;
          }
          .more{
            width: 10%;
            .more-icon{
              cursor: pointer;
              svg{
                font-size: ${34/40}rem;
              }
            }
          }
        }
        .user-name{
          font-size: ${16/40}rem;
          color: #606060;
          margin: ${5/40}rem 0 0 0;
        }
        .play-count{
          &>span{
            color: #606060;
            font-size: ${16/40}rem;
            &:nth-child(1){
              margin: 0 ${5/40}rem 0 0;
            }
          }
        }
      }
    }
  }
`