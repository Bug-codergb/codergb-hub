import styled from 'styled-components';
export const RecommendWrapper: any = styled.div`
  position: relative;
  .video-list {
    height: 87vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 8px;
      height: 50px;
    }
    & > li {
      margin: 0 0 ${30 / 40}rem 0;
      transition: transform 0.3s;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      overflow: hidden;
      &.active {
        transform: ${(props: any) =>
          props.isRightBoundray
            ? props.isTopBoundray
              ? 'scale(1.3) translate(-14%,12%)'
              : 'scale(1.3) translate(-14%,8%)'
            : props.isLeftBoundray
              ? props.isTopBoundray
                ? 'scale(1.3) translate(14%,12%)'
                : 'scale(1.3) translate(14%,8%)'
              : props.isTopBoundray
                ? 'scale(1.3) translate(0,12%)'
                : 'scale(1.3) translate(0,8%)'};
        box-shadow: 0 0 ${24 / 40}rem rgba(0, 0, 0, 0.1);
        z-index: 999999;
      }
    }
  }
`;
