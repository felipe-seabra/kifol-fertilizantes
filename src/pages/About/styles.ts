import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 4rem;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;

  blockquote {
    font-size: 14px;
    font-style: italic;
    padding: 15px 20px 15px 15px;
    border-bottom-width: 1px;
    border-top-width: 1px;
    border-right-width: 0;
    border-left-width: 0;
    border-style: solid;
    margin: 2rem 0;
    text-align: center;
  }

  span {
    color: ${(props) => props.theme.colors.text};
  }

  @media screen and (max-width: 990px) {
    width: 90%;
  }
`;

export const LogoAbout = styled.img`
  max-width: 300px;
  margin-bottom: 3rem;
`;

export const Title = styled.h5`
  color: ${(props) => props.theme.colors.title};
`;

export const IconsContainer = styled.div`
  display: flex;
`;

export const Icon = styled.i`
  color: #00a859;
  font-size: 3rem;
  transition: 0.5s;
  margin: 0 0.5rem;

  :hover {
    color: ${(props) => props.theme.colors.secundary};
  }
`;
