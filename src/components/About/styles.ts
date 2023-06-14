import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
  margin-bottom: 5rem;
`;

export const TextContainer = styled.div`
  width: 590px;
  margin-top: 2rem;

  @media screen and (max-width: 990px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;

export const LogoAbout = styled.img`
  max-width: 300px;

  @media screen and (max-width: 990px) {
    display: none;
  }
`;
