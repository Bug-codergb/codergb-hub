import styled from 'styled-components';
export const CommentWrapper = styled.div``;
export const CommentItemWrapper = styled.div`
  .comment-container {
    width: ${400 / 40}rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .avatar-container {
    img {
      width: ${70 / 40}rem;
      height: ${70 / 40}rem;
      border-radius: 50%;
      margin: 0 10px 0 0;
    }
    .user-name {
      font-size: ${18 / 40}rem;
      color: #616161;
    }
  }
  .comment-from {
    .content {
      width: ${400 / 40}rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;
