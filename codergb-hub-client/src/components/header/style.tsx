import styled from "styled-components";
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  .logo-outer{
    padding: 0 0 0 ${20/40}rem;
    img{
      width: ${120/40}rem;
    }
  }
`
export const CenterContent = styled.div`
  display: flex;
  align-items: center;
  width: ${640/40}rem;
  .search-outer{
    display: flex;
    align-items: center;
    border: 1px solid #cccccc;
    height: ${56/40}rem;
    width: 100%;
    input{
      padding: 2px 6px;
      height: 100%;
      width: 90%;
    }
    .search-icon{
      padding: 0 ${30/40}rem ;
      border-left: 1px solid #cccccc;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f8f8f8;
      cursor: pointer;
      &:hover{
        background-color: #f0f0f0;
      }
      svg{
        width: ${24/40}rem;
        height: ${24/40}rem;
      }
    }
  }
`
export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .tip{
    padding: 0 ${40/40}rem;
  }
  .upload,.tip,.user{
    display: flex;
    align-items: center;
    svg{
      width: ${30/40}rem;
      height: ${30/40}rem;
    }
  }
`