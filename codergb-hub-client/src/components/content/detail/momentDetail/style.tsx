import styled from "styled-components";
export const MomentDetailWrapper = styled.div`
  max-height: 87vh;
  overflow-y: scroll;
  padding-bottom: ${20/40}rem;
  .moment-header{
    display: flex;
    align-items: flex-start;
    .left-container{
    width: ${80/40}rem;
    img{
      width: 100%;
      border-radius: 50%;
    }
  }
  .right-container{
    flex: 1;
    margin: 0 0 0 ${20/40}rem;
    .user-name{
      font-weight: bold;
      font-size: ${18/40}rem;
    }
    .title{
      font-size: ${18/40}rem;
      color: #065fd4;
      margin: ${10/40}rem 0 0 0;
    }
    .content{
      font-size: ${18/40}rem;
      margin: ${10/40}rem 0;
    }
  }
  }
  .moment-body{
    margin: ${50/40}rem 0 0 0;
    padding: 0 ${50/40}rem 0 ${10/40}rem;
  }
`