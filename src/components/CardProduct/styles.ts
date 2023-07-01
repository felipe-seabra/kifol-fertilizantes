import styled from 'styled-components';

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
