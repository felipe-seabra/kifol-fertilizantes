import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

export const ContainerProducts = styled.div`
  position: relative;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }

  a:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }

  @media screen and (max-width: 990px) {
    width: 90%;
    flex-direction: column;
  }
`;

export const TitleProducts = styled.h1`
  color: ${(props) => props.theme.colors.title};
  margin-bottom: 2rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

export const ProductTitle = styled.h4`
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.text};
`;

export const ProductImage = styled.img`
  width: 300px;
  border: 1px solid ${(props) => props.theme.colors.secundary};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
