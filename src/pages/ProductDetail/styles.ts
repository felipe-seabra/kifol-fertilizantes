import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 4rem;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .product-btn {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 50px;
    border: 2px solid ${(props) => props.theme.colors.secundary};
    border-radius: 8px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.background};
    background: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.1rem;
    z-index: 1;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 1rem;
  }

  .product-btn:hover {
    border: 2px solid ${(props) => props.theme.colors.secundary};
    background: ${(props) => props.theme.colors.secundary};
  }

  .product-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: ${(props) => props.theme.colors.primary};
    z-index: -1;
    transition: 0.5s;
  }

  .product-btn:hover::before {
    width: 100%;
    transition: 0.5s;
  }

  .product-btn:disable {
    cursor: not-allowed;
  }

  @media screen and (max-width: 990px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const DescriptionContainer = styled.div`
  padding: 2rem;

  @media screen and (max-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

export const ProductImage = styled.img`
  width: 400px;
  border: 1px solid ${(props) => props.theme.colors.secundary};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 990px) {
    width: 90%;
  }
`;

export const ProductTitle = styled.h4`
  font-size: 1.6rem;
  margin: 1rem 0;
  color: ${(props) => props.theme.colors.title};

  @media screen and (max-width: 990px) {
    text-align: center;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
`;
