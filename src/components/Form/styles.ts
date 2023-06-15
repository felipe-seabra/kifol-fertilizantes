import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  margin-top: 2rem;

  @media screen and (max-width: 990px) {
    flex-direction: column;
  }

  .form {
    color: ${(prop) => prop.theme.colors.text};
    display: flex;
    flex-direction: column;
    min-width: 40vw;
  }

  .checkbox {
    color: ${(prop) => prop.theme.colors.text};
  }
`;

export const ContainerSpeak = styled.div`
  max-width: 300px;
  margin-left: 3rem;

  @media screen and (max-width: 990px) {
    max-width: 500px;
    margin-left: 0;
  }
`;
