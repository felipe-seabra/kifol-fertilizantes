import React from 'react';
import { Link } from 'react-router-dom';
import {
  Copy,
  FooterColumn,
  FooterContainer,
  FooterIcon,
  FooterLink,
  FooterText,
  LogoColumn,
  LogoFooter,
  MapIcon,
  TitleFooter
} from './styles';
import { logo } from '../../images';
import ChatPopup from '../ChatPopup';

import {
  URL_WHATSAPP_FORMATED,
  URL_GOOGLE_MAPS,
  URL_INSTAGRAM,
  URL_FACEBOOK,
  URL_MAIL,
  URL_MAIL_FORMATED,
  URL_WHATSAPP_NUMBER,
  URL_PHONE,
  URL_PHONE_FORMATED,
  URL_LINKEDIN
} from '../../database/social';

function Footer() {
  return (
    <footer>
      <FooterContainer>
        <FooterColumn>
          <LogoColumn>
            <Link to="/">
              <LogoFooter src={logo} alt="Logo Kifol" />
            </Link>
          </LogoColumn>
        </FooterColumn>

        <FooterColumn>
          <TitleFooter>Contato:</TitleFooter>

          <FooterLink href={URL_PHONE_FORMATED}>
            <FooterIcon className="bx bxs-phone" /> {URL_PHONE}
          </FooterLink>

          <FooterLink href={URL_WHATSAPP_FORMATED} target="_blank">
            <FooterIcon className="bx bxl-whatsapp" /> {URL_WHATSAPP_NUMBER}
          </FooterLink>

          <FooterLink href={URL_MAIL_FORMATED}>
            <FooterIcon className="bx bxs-envelope" /> {URL_MAIL}
          </FooterLink>

          <FooterLink href={URL_INSTAGRAM} target="_blank" rel="noreferrer">
            <FooterIcon className="bx bxl-instagram" /> Instagram
          </FooterLink>

          <FooterLink href={URL_FACEBOOK} target="_blank" rel="noreferrer">
            <FooterIcon className="bx bxl-facebook-circle" /> Facebook
          </FooterLink>

          <FooterLink href={URL_LINKEDIN} target="_blank" rel="noreferrer">
            <FooterIcon className="bx bxl-linkedin" /> Linkedin
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <TitleFooter>Localização:</TitleFooter>
          <FooterText>Estrada para 7 copas, Km 02</FooterText>
          <FooterText>Bairro União</FooterText>
          <FooterText>Presidente Prudente - SP</FooterText>
          <FooterText>CEP: 19065-000</FooterText>
          <FooterText>Caixa Postal 2311 </FooterText>

          <FooterLink href={URL_GOOGLE_MAPS} target="_blank">
            <MapIcon>
              <FooterIcon className="bx bxs-map" />
            </MapIcon>
            Como Chegar
          </FooterLink>
        </FooterColumn>
      </FooterContainer>

      <Copy className="mt-2">
        Kifol Fertilizantes &copy; - Todos os direitos reservados
      </Copy>
      <ChatPopup />
    </footer>
  );
}

export default Footer;
