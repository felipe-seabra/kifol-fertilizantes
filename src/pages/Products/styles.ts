import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 4rem;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
  }

  a:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }

  @media screen and (max-width: 990px) {
    width: 90%;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductTitle = styled.h4`
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.title};
`;

export const ProductImage = styled.img`
  width: 300px;
  border: 1px solid ${(props) => props.theme.colors.secundary};
  border-radius: 8px;
`;
