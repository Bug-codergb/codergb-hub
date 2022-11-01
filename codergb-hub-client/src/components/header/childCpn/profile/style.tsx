import styled from "styled-components";
export const ProfileWrapper = styled.div`
  background-color: #fff;
  padding: ${30/40}rem 0;
  width: ${400/40}rem;
  .profile{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    padding: 0 ${20/40}rem ${20/40}rem ${20/40}rem;
    .avatar-container{
      width: ${50/40}rem;
      height: ${50/40}rem;
      background-color: #eeeeee;
      position: relative;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      margin: 0 ${24/40}rem 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
    }
    .user-name{
      font-size: ${20/40}rem;
    }
  }
  .mine{
    padding:${20/40}rem 0 0 0;
    .mine-list{
      &>li{
        display: flex;
        align-items: center;
        padding: ${10/40}rem ${20/40}rem ${10/40}rem ${20/40}rem;
        cursor: pointer;
        &:hover{
          background-color: #eeeef0;
        }
        .icon{
          width: ${32/40}rem;
        }
        .name{
          margin: 0 0 0 ${24/40}rem;
        }
      }
    }
  }
`