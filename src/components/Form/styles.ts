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

  .form-check-label {
    margin-top: 0.3rem;
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

export const SocialLinkContacts = styled.a`
  text-decoration: none;
  color: ${(prop) => prop.theme.colors.secundary};
  font-size: 1rem;
  display: flex;
  margin-top: 0.7rem;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    color: ${(prop) => prop.theme.colors.primary};
    opacity: 0.8;
  }
`;

export const SocialIconContacts = styled.i`
  font-size: 1.5rem;
  margin-right: 0.4rem;
`;

export const SocialLinkContactsContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  flex-wrap: wrap;
`;
