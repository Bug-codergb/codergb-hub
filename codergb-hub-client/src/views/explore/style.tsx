import styled from "styled-components"
export const ExploreWrapper=styled.div`
  .explore-list{
    display: flex;
    align-items: center;
    &>li{
      padding: 0 ${20/40}rem;
      &>span{
        padding: 0 0 ${5/40}rem 0;
        cursor: pointer;
      }
      &.active{
        &>span{
          border-bottom:3px solid #cc0101 ;
        }
      }
    }
  }
`