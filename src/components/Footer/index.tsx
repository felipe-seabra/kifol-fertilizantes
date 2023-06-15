import React from 'react';
import { Link } from 'react-router-dom';
import {
  Copy,
  FooterColumn,
  FooterContainer,
  FooterLink,
  FooterText,
  LogoFooter,
  MapIcon
} from './styles';
import { logo } from '../../images';

const LOCATION = `https://www.google.com.br/maps/place/Kifol+Fertilizantes/@-22.1139596,-51.3532768,261m/data=!3m1!1e3!4m6!3m5!1s0x9493f5b555ffdba3:0x69b7fcf9cc1039f9!8m2!3d-22.1139596!4d-51.3526331!16s%2Fg%2F11svj7ljbw?entry=ttu`;

const LINK_WHATSAPP =
  'https://api.whatsapp.com/send?phone=55189975140&text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20os%20produtos!';

function Footer() {
  return (
    <footer>
      <FooterContainer>
        <FooterColumn>
          <LogoFooter src={logo} alt="Logo Kifol" />
        </FooterColumn>
        <FooterColumn>
          <h4>Contato:</h4>
          <Link to="tel:+551832216618">
            <FooterLink>
              <i className="bx bxs-phone" /> (18) 3221-6618
            </FooterLink>
          </Link>
          <Link to={LINK_WHATSAPP} target="_blank">
            <FooterLink>
              <i className="bx bxl-whatsapp" /> WhatsApp
            </FooterLink>
          </Link>
          <Link to="mailto:kifol@kifol.com.br">
            <FooterLink>
              <i className="bx bxs-envelope" /> Email
            </FooterLink>
          </Link>
        </FooterColumn>
        <FooterColumn>
          <h4>Localização:</h4>
          <FooterText>
            <MapIcon>
              <i className="bx bxs-map" />
            </MapIcon>
            Estrada para 7 copas, Km 02 Bairro União
          </FooterText>
          <FooterText>Presidente Prudente - SP</FooterText>
          <FooterText>Caixa Postal 2311 CEP19030-972</FooterText>
          <FooterLink href={LOCATION} target="_blank">
            <MapIcon>
              <i className="bx bxs-map" />
            </MapIcon>
            Como Chegar
          </FooterLink>
        </FooterColumn>
      </FooterContainer>
      <Copy className="mt-2">Kifol Fertilizantes - &copy; 2023</Copy>
    </footer>
  );
}

export default Footer;
