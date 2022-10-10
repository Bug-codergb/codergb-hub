import styled from "styled-components";
export const VideoSearchWrapper = styled.div`
  .search-container{
    display: flex;
    align-items: center;
    .user-self,.video-lib{
      flex: 1;
    }
  }
  .video-list{
    height: ${400/40}rem;
  }
`