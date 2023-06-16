import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 4rem;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 990px) {
    width: 90%;
  }
`;
