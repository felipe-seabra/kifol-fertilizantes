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

  .button-product-home {
    background: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.secundary};
    color: ${(props) => props.theme.colors.background};
  }

  .button-product-home:hover {
    background: ${(props) => props.theme.colors.secundary};
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
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

  .button-product-home {
    background: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.secundary};
    color: ${(props) => props.theme.colors.background};
  }

  .button-product-home:hover {
    background: ${(props) => props.theme.colors.secundary};
    border: 2px solid ${(props) => props.theme.colors.primary};
  }

  @media screen and (max-width: 990px) {
    text-align: center;
  }
`;
