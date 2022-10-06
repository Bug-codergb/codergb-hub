import styled from "styled-components";
export const NavListWrapper= styled.div`
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
`