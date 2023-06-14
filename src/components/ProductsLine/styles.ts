import styled from 'styled-components';

import { background } from '../../images';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
  overflow: hidden;
  background-position: center 0px;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .home-btn {
    margin-top: 4rem;
    margin-bottom: 4rem;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 350px;
    min-height: 50px;
    border: 2px solid ${(props) => props.theme.colors.background};
    background: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.background};
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.1rem;
    z-index: 1;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
  }

  .home-btn:hover {
    color: ${(props) => props.theme.colors.background};
    border: 2px solid ${(props) => props.theme.colors.secundary};
  }

  .home-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: ${(props) => props.theme.colors.secundary};
    z-index: -1;
    transition: 0.5s;
  }

  .home-btn:hover::before {
    width: 100%;
    transition: 0.5s;
  }

  @media screen and (max-width: 990px) {
    .home-btn {
      min-width: 250px;
      font-size: 0.8rem;
    }
  }
`;

export const ProductsImage = styled.img`
  margin-top: 4rem;
  width: 70%;
  height: auto;

  @media screen and (max-width: 990px) {
    width: 90%;
  }
`;
