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

const LOCATION = `https://www.google.com/maps/place/Kifol+Fertilizantes/@-22.1205939,-51.3899879,17z/data=!3m1!4b1!4m6!3m5!1s0x9493f57ecc8add7d:0xb426a735286ed776!8m2!3d-22.1205939!4d-51.3874076!16s%2Fg%2F11kq9hsd49?hl=pt-BR&entry=ttu`;

const LINK_WHATSAPP =
  'https://api.whatsapp.com/send?phone=5518997230188&text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20os%20produtos!';

function Footer() {
  return (
    <footer>
      <FooterContainer>
        <FooterColumn>
          <LogoFooter src={logo} alt="Logo Kifol" />
        </FooterColumn>
        <FooterColumn>
          <h4>Contato:</h4>
          <Link to="tel:+5518997230188">
            <FooterLink>
              <i className="bx bxs-phone" /> (18) 99723-0188
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
      <Copy className="mt-2">Kifol Fertilizantes &copy;</Copy>
    </footer>
  );
}

export default Footer;
