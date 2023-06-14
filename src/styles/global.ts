import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: 'Josefin Sans', sans-serif;
    height: 100%;
  }

  main {
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    color: ${(props) => props.theme.colors.secundary};
  }
`;
