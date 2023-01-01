import styled from "styled-components"
export const HistoryWrapper=styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
`
export const LeftContentWrapper = styled.div`
  width: 65%;
  .label-title{
    font-size: ${24/40}rem;
    margin: 0 0 ${20/40}rem 0;
  }
  .vio-list{
    &>li{
      width: ${850/40}rem;
      margin: 0 0 ${50/40}rem 0;
      .time{
        font-size: ${20/40}rem;
        margin: 0 0 ${16/40}rem 0;
      }
    }
  }
`
export const RightContentWrapper:any = styled.div`
  width: 34%;
  .search-outer{
    border-bottom:${(props : any) => props.isBolderBorder?'2px solid #0f0f0f':'1px solid #606060'};
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
  .operate{
    margin: ${30/40}rem 0 0 0;
    &>li{
      padding: ${20/40}rem 0 ${20/40}rem ${20/40}rem;
      font-size: ${20/40}rem;
      cursor: pointer;
      &:hover{
        background-color: #e5e5e5;
      }
    }
  }
`