import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-left: 30px;
  text-align: right;
  padding-right: ${window.matchMedia('(max-width: 768px)').matches ? '2em' : '30px'};
  border-top: 30px solid ${(props) => props.theme.colors.primary}};
  z-index: 999;

  .header__links {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: ${window.matchMedia('(max-width: 768px)').matches ? '0' : '2em'};
    font-size: 1em;
  }

  .navlink {
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
    transition: transform 0.4s;
  }

  .navlink:hover {
    color: ${(props) => props.theme.colors.secundary} !important;
    transform: scale(1.1);
  }

  .navlink:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.secundary};
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  .navlink:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .navlink.active {
    color: ${(props) => props.theme.colors.secundary} !important;
    transform: scale(1.1);
  }

  .navlink.active:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .navbar-toggler {
    background: ${(props) => props.theme.colors.secundary};
    opacity: 0.5;
    transition: 0.4s;
    margin-right: 30px;
  }
  
  .navbar-toggler:hover {
    opacity: 1;
  }
}
`;

export const Logo = styled.img`
  max-width: 200px;

  @media screen and (max-width: 990px) {
    max-width: 150px;
  }
`;

export const Icon = styled.i`
  margin-right: 0.5em;
`;
