import styled from 'styled-components';

export const Video = styled.div`
  position: relative;
  width: 300px;
  margin: 1rem;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  width: 300px;
  height: 150px;
`;
