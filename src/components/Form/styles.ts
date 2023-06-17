import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  margin-top: 2rem;
  align-items: center;

  @media screen and (max-width: 990px) {
    flex-direction: column;
    align-items: stretch;
  }

  .form {
    color: ${(prop) => prop.theme.colors.text};
    display: flex;
    flex-direction: column;
    min-width: 40vw;
  }

  input {
    margin-top: 0.5rem;
  }

  textarea {
    margin-top: 0.5rem;
  }

  checkbox {
    color: ${(prop) => prop.theme.colors.text};
  }
`;

export const TitleForm = styled.h2`
  color: ${(prop) => prop.theme.colors.title};
`;

export const ContainerSpeak = styled.div`
  max-width: 300px;
  margin-left: 3rem;

  h4 {
    color: ${(prop) => prop.theme.colors.title};
  }

  @media screen and (max-width: 990px) {
    max-width: 500px;
    margin-left: 0;
  }
`;
