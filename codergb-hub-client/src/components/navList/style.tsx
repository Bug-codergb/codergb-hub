import styled from "styled-components";
export const NavListWrapper= styled.div`
  .user-avatar{
    width: 100%;
    padding: ${24/40}rem 0;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    border-bottom: 1px solid #e5e5e5;
    .img-container{
      position: relative;
      width: ${120/40}rem;
      height: ${120/40}rem;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #eeeeee;
      img{
        width: 100%;
      }
      .upload-avatar-icon{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
    .label{
      font-family: "YouTube Sans","Roboto","Arial",sans-serif;
      font-weight: 600;
      font-size: ${20/40}rem; 
      white-space: nowrap;
      margin: ${15/40}rem;
    }
  }
  .main-menu,.profile-menu{
    &>li{
      display: flex;
      align-items: center;
      padding: ${12/40}rem ${20/40}rem ${12/40}rem ${20/40}rem;
      cursor: pointer;
      &.active{
        background-color: #e5e5e5;
        &:hover{
          background-color: #d9d9d9;
        }
      }
      &:hover{
        background-color: #f2f2f2;
      }
      .nav-icon{
        width: ${30/40}rem;
      }
      .nav-name{
        margin: 0 0 0 ${20/40}rem;
        font-size: ${20/40}rem;
        width: ${170/40}rem;
      }
    }
  }
  .main-menu{
    padding-bottom: 12px; 
  }
  .profile-menu{
    border-top: 1px solid #e5e5e5;
    padding-top: 12px;
  }
  .fold{
    max-height: 60vh;
    overflow-y: scroll;
    &::-webkit-scrollbar{
      width: 5px;
      background-color: #cccccc;
      height: ${40/50}rem;
    }
    &>li{
      border-left: 4px solid #ffffff;
      .nav-name{
        font-family: "YouTube Sans","Roboto","Arial",sans-serif;
        font-weight: 600;
        font-size: ${20/40}rem;
        color: #616161;
      }
      &.active{
        border-left-color: #cc0101;
        .nav-name{
          color: #cc0101;
        }
      }
    }
  }
`