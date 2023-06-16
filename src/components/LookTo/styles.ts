import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  width: 90%;

  h2 {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 990px) {
    text-align: center;
  }
`;

export const VideosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const VideosCard = styled.div`
  display: flex;
  max-width: 300px;
  flex-direction: column;
  margin: 0 1rem;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
`;

export const VideosTitle = styled.h4`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const LogoAbout = styled.img`
  max-width: 300px;

  @media screen and (max-width: 990px) {
    display: none;
  }
`;
