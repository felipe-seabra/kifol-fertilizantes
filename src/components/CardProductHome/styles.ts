import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  width: 90%;

  color: #808080;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.title};
`;

export const ContainerProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1300px;

  a {
    text-decoration: none;
    transition: 0.5s;
  }

  a:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }

  @media screen and (max-width: 990px) {
    text-align: center;
  }
`;
