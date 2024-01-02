import styled from 'styled-components';
export const CollectionVideoWrapper = styled.div`
  margin: ${20 / 40}rem 0 0 0;
  width: 100%;
  .col-header {
    background-color: #f1f2f3;
    padding: ${15 / 40}rem 0 ${10 / 40}rem ${15 / 40}rem;
    font-size: ${21 / 40}rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    .name {
      max-width: 60%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .count {
      color: #a8acb1;
      font-weight: normal;
      margin: 0 0 0 ${10 / 40}rem;
    }
  }
  .video-list {
    background-color: #f1f2f3;
    padding: 0 0 ${15 / 40}rem 0;
    width: 100%;
    max-height: 410px;
    overflow-y: auto;
    margin-bottom: ${12 / 40}rem;
    .item {
      display: flex;
      align-items: center;
      padding: ${10 / 40}rem;
      justify-content: space-between;
      border-bottom: 1px solid #fff;
      &:hover {
        background-color: #e0e4eb;
        cursor: pointer;
      }
      .gb-play {
        color: #ea3323;
        margin: 0 ${5 / 40}rem 0;
        margin-left: 0 !important;
        svg {
          font-size: ${23 / 40}rem;
        }
      }
      .sort {
        color: #ea3323;
        text-align: left;
        color: #969aa0;
        white-space: nowrap;
        padding-right: 5.7px;
        font-size: ${18.4 / 40}rem;
      }
      .img-container {
        width: ${150 / 40}rem;
        margin: 0 ${10 / 40}rem 0 0;
        img {
          width: 100%;
          border-radius: 4px;
        }
      }
      .right-container {
        display: flex;
        justify-content: space-between;
        width: 67%;
        .label {
          flex: 7;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: #18191c;
        }
        .dt {
          flex: 2;
          text-align: right;
          color: #969aa0;
        }
      }
    }
  }
`;
