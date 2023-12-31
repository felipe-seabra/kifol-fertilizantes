import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  padding-left: 30px;
  text-align: right;
  padding-right: 30px;
  border-top: 25px solid ${(props) => props.theme.colors.primary};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  z-index: 999;

  .header__links {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 2em;
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
    border: none;
    opacity: 1;
    transition: 0.4s;
    background-color: ${(props) => props.theme.colors.primary};
  }

  .navbar-toggler:hover {
    opacity: 0.5;
  }

  #dropdown-menu {
    color: ${(props) => props.theme.colors.primary};
  }

  .dropdown-item {
    color: ${(props) => props.theme.colors.primary};
  }

  .dropdown-item:hover {
    color: ${(props) => props.theme.colors.secundary};
  }

  .emoji {
    display: flex;
    height: 22px;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 991px) {
    padding-right: 2em;

    .header__links {
      padding-right: 0;
    }
  }

  @media screen and (max-width: 991px) {
    .navlink,
    .switch {
      margin-top: 0.5rem;
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
