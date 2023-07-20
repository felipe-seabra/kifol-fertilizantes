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
    margin-top: 7.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
  }

  .global-btn {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 150px;
    height: 100%;
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
  }

  .global-btn:hover {
    border: 2px solid ${(props) => props.theme.colors.secundary};
  }

  .global-btn::before {
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

  .global-btn:hover::before {
    width: 100%;
    transition: 0.5s;
  }
  
  .global-btn:disable {
    cursor: not-allowed;
  }

  .button-product {
    background: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.secundary};
    color: ${(props) => props.theme.colors.background};
  }

  .button-product:hover {
    background: ${(props) => props.theme.colors.secundary};
    border: 2px solid ${(props) => props.theme.colors.primary};
  }

  .required-field {
    color: #E5625E;
    font-size: 0.7em;
    margin: 0;
  }

  @media screen and (max-width: 990px) {
    main{
      margin-top: 6.5rem;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
    background: rgba(0, 0, 0, 0.2);
  }

  /* Estilizando o rastro da barra de rolagem */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background};
    border: 1px solid rgba(204, 204, 204, 0.5);
  }

  /* Estilizando o "polegar" da barra de rolagem */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.secundary};
    border-radius: 10px;
  }

  /* Estilizando os botões de seta da barra de rolagem */
  ::-webkit-scrollbar-button {
    background: rgba(204, 204, 204, 0.5); 
  }

  /* Estilizando o canto inferior direito da barra de rolagem */
  ::-webkit-scrollbar-corner {
    background: rgba(241, 241, 241, 0.5);
  }
`;
