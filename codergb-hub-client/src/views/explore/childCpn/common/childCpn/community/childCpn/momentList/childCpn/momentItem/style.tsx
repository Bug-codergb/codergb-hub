import styled from 'styled-components';
export const MomentItemWrapper = styled.div`
  width: 100%;
  display: flex;
  .avatar-container {
    width: ${50 / 40}rem;
    height: ${50 / 40}rem;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .right-container {
    margin: 0 0 0 ${20 / 40}rem;
    flex: 1;
    position: relative;

    .operation {
      position: absolute;
      left: 100%;
      top: 2%;
      transform: translate(-120%, 0);
      cursor: pointer;

      .more-icon {
        cursor: pointer;

        svg {
          font-size: ${34 / 40}rem;
        }
      }
    }

    .g-user-info {
      display: flex;
      align-items: center;

      .user-name {
        font-size: ${16 / 40}rem;
        font-weight: bolder;
        margin: 0 ${12 / 40}rem 0 0;
      }

      .create-time {
        font-size: ${16 / 40}rem;
        color: #606060;
      }
    }

    .title {
      color: #065fd4;
      font-size: ${20 / 40}rem;
      margin: ${15 / 40}rem 0;
      cursor: pointer;
    }

    .content {
      text-indent: 2em;
      font-size: ${18 / 40}rem;
      cursor: pointer;
    }

    .video-container {
      width: ${400 / 40}rem;
      margin: ${20 / 40}rem 0;

      img {
        width: 100%;
        cursor: pointer;
      }
    }

    .thumb {
      display: inline-flex;
      align-items: center;

      .tread {
        border-left: 1px solid #d9d9d9;
        padding: 0 0 0 ${18 / 40}rem;
        margin: 0 0 0 ${18 / 40}rem;
      }
    }

    .thumb {
      cursor: pointer;
      background-color: #f2f2f2;
      padding: ${9 / 40}rem ${18 / 40}rem ${5 / 40}rem;
      border-radius: ${20 / 40}rem;

      .thumb-icon,
      .collection-icon,
      .tread-icon {
        svg {
          font-size: ${24 / 40}rem;
        }
      }

      .label {
        margin: 0 0 0 ${15 / 40}rem;
      }

      .thumb-icon-active {
        svg {
          color: #ff0000;
        }
      }
    }
  }
`;
