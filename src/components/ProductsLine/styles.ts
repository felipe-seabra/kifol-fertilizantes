import styled from 'styled-components';

import { BANNER } from '../../images';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${BANNER});
  overflow: hidden;
  background-position: center 0px;
  background-repeat: repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  .home-btn {
    // margin-top: 4rem;
    bottom: 0;
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
    height: 250px;
    background-size: 1000px auto;

    .home-btn {
      margin-bottom: 1rem;
      min-width: 250px;
      font-size: 0.8rem;
    }
  }
`;

export const Slogan = styled.h1`
  margin-top: 4rem;
  margin-bottom: 7rem;
  color: ${(props) => props.theme.colors.primary};
  display: inline;
  padding: 10px;
  text-shadow: 2px 2px 4px white;
  font-weight: 600;
  font-size: 3.5rem;

  -webkit-text-stroke: 1px #fff;
  text-stroke: 1px #fff;

  @media screen and (max-width: 1058px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 990px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;

    -webkit-text-stroke: 0;
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
