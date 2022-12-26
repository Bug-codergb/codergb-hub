import styled from "styled-components"
export const HistoryWrapper=styled.div`
  display: flex;
  align-items: flex-start;
`
export const LeftContentWrapper = styled.div`
  .label-title{
    font-size: ${24/40}rem;
    margin: 0 0 ${20/40}rem 0;
  }
  .vio-list{
    &>li{
      width: ${750/40}rem;
      margin: 0 0 ${50/40}rem 0;
      .time{
        font-size: ${18/40}rem;
        margin: 0 0 ${16/40}rem 0;
      }
    }
  }
`
export const RightContentWrapper = styled.div`
  .search-outer{
    border-bottom:1px solid #606060 ;
    padding: 0 0 ${10/40}rem 0;
    display: flex;
    align-items: center;
    input{
      padding: 0 0 0 ${15/40}rem;
      width: ${300/40}rem;
    }
    svg{
      font-size: ${28/40}rem;
      cursor: pointer;
    }
  }
`