import styled from 'styled-components';
export const PlaylistWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;
export const LeftContainer: any = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: ${30 / 40}rem;
  height: 86vh;
  background-image: url(${(props) => (props as any).bgc});
  background-repeat: no-repeat;
  background-size: auto 9999px;
  background-position: center;
  border-radius: ${16 / 40}rem;
  overflow: hidden;
  box-sizing: border-box;
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
    width: ${430 / 40}rem;
  }
  .user-name {
    font-size: ${18 / 40}rem;
    color: #fff;
    margin: ${20 / 40}rem 0 ${18 / 40}rem 0;
  }
  .vio-info {
    display: flex;
    align-items: center;
    .vio-count {
      font-size: ${16 / 40}rem;
      color: #d2cfd0;
    }
    .update-time {
      margin: 0 0 0 ${10 / 40}rem;
      font-size: ${16 / 40}rem;
      color: #d2cfd0;
    }
  }
`;
export const RightContainer = styled.div`
  margin: 0 0 0 ${30 / 40}rem;
  flex: 1;
  height: 86vh;
  overflow-y: scroll;
  .vio-list {
    & > li {
      display: flex;
      align-items: flex-start;
      cursor: pointer;
      padding: ${20 / 40}rem 0 ${20 / 40}rem ${18 / 40}rem;
      border-radius: ${8 / 40}rem;
      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
