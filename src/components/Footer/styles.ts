import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border-top: 1px solid ${(props) => props.theme.colors.secundary};
  border-bottom: 1px solid ${(props) => props.theme.colors.secundary};
  margin-top: 30px;

  h4 {
    color: ${(props) => props.theme.colors.secundary};
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: ${(props) => props.theme.colors.secundary};
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 150px;
  margin: 10px;
  position: relative;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 5px 0;
`;

export const FooterLink = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  font-size: 0.9rem;
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;
  display: flex;
  margin: 5px 0;

  &:hover {
    opacity: 0.8;
  }
`;

export const FooterIcon = styled.i`
  color: ${(props) => props.theme.colors.secundary};
  font-size: 1.3rem;
  margin-right: 5px;
`;

export const MapIcon = styled.i`
  font-size: 18px;
  margin-right: 5px;
`;

export const Copy = styled.div`
  color: ${(props) => props.theme.colors.secundary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 999;
`;

export const LogoFooter = styled.img`
  width: 250px;
`;
