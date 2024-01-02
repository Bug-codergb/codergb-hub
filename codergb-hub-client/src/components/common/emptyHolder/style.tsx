import styled from 'styled-components';
export const EmptyHolderWrapper: any = styled.div`
  padding: ${(props) => `${(props as any).padding / 40}rem 0`};
  display: flex;
  align-items: center;
  justify-content: center;
`;
