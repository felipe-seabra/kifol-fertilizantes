import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
  margin: 2rem 0;

  .home-btn {
    margin-top: 1rem;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 150px;
    min-height: 40px;
    border: 2px solid ${(props) => props.theme.colors.secundary};
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
    border: 2px solid ${(props) => props.theme.colors.primary};
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
`;

export const TextContainer = styled.div`
  width: 590px;
  margin-top: 2rem;

  @media screen and (max-width: 990px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: stretch;
  }
`;

export const LogoAbout = styled.img`
  max-width: 300px;

  @media screen and (max-width: 990px) {
    display: none;
  }
`;
