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
    color: ${(props) => props.theme.colors.title};
  }

  @media screen and (max-width: 990px) {
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  max-width: 600px;
  margin-bottom: 2rem;
`;

export const VideosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1000px;
`;
