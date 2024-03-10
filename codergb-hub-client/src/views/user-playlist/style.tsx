import styled from 'styled-components';
export const UserPlaylistWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;
export const LeftContent: any = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: ${30 / 40}rem ${30 / 40}rem;
  height: 86vh;
  background-image: url(${(props) => (props as any).bgc});
  background-repeat: no-repeat;
  background-size: auto 9999px;
  background-position: center;
  border-radius: ${16 / 40}rem;
  overflow: hidden;
  .mask {
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.08);
  }
  .img-container {
    width: ${430 / 40}rem;
    height: ${220 / 40}rem;
    border-radius: ${16 / 40}rem;
    overflow: hidden;
    img {
      width: 100%;
      border-radius: 4px;
    }
  }
  .later-label {
    font-size: ${30 / 40}rem;
    color: #fff;
    font-weight: bolder;
    margin: ${28 / 40}rem 0 0 0;
    width: ${450 / 40}rem;
    text-shadow: 0 0 2px rgba(0, 0, 0, 1);
  }
  .user-name {
    font-size: ${18 / 40}rem;
    color: #fff;
    margin: ${20 / 40}rem 0 ${18 / 40}rem 0;
    text-shadow: 0 0 2px rgba(0, 0, 0, 1);
  }
  .vio-info {
    display: flex;
    align-items: center;
    .vio-count {
      font-size: ${16 / 40}rem;
      color: #fff;
      text-shadow: 0 0 2px rgba(0, 0, 0, 1);
    }
    .update-time {
      margin: 0 0 0 ${10 / 40}rem;
      font-size: ${16 / 40}rem;
      color: #fff;
      text-shadow: 0 0 2px rgba(0, 0, 0, 1);
    }
  }
  .sub {
    display: inline-flex;
    align-items: center;

    width: auto;
    justify-content: flex-start;

    position: relative;
    z-index: 999999;
    .inner {
      border: 1px solid #fff;
      color: #fff;
      padding: ${8 / 40}rem ${20 / 40}rem;
      margin: ${20 / 40}rem 0 0 0;
      border-radius: 18px;
      cursor: pointer;
      text-shadow: 0 0 2px rgba(0, 0, 0, 1);
    }
    .label {
      margin: 0 0 0 10px;
      svg {
        text-shadow: 0 0 2px rgba(0, 0, 0, 1);
      }
    }
  }
`;
export const RightContent = styled.div`
  margin: 0 0 0 ${30 / 40}rem;
  width: 70%;
  height: 86vh;
  overflow-y: scroll;
  .vio-list {
    & > li {
      display: flex;
      align-items: flex-start;
      cursor: pointer;
      padding: ${20 / 40}rem 0 ${20 / 40}rem ${18 / 40}rem;
      border-radius: ${8 / 40}rem;
      justify-content: space-between;
      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .more-icon {
        cursor: pointer;
        svg {
          font-size: ${34 / 40}rem;
        }
      }
      .info-container {
        display: flex;
        align-items: center;
        width: 90%;
      }
      .operator {
        white-space: nowrap;
        padding: 0 12px 0 0;
      }
      .cover-container {
        margin: 0 ${24 / 20}rem 0 0;
        width: ${200 / 40}rem;
        img {
          width: 100%;
          border-radius: 8px;
        }
      }
      .later-right-info {
        width: 70%;
        .desc {
          display: flex;
          align-items: center;
          margin: ${16 / 40}rem 0 0 0;
          .user-name,
          .play-count,
          .create-time {
            font-size: ${16 / 40}rem;
            color: #606060;
          }
          .play-count {
            margin: 0 ${8 / 40}rem;
          }
        }
      }
    }
  }
  .page {
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;
  }
`;
