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

const LOCATION = `https://www.google.com/maps/place/Kifol+Fertilizantes/@-22.1205939,-51.3899879,17z/data=!3m1!4b1!4m6!3m5!1s0x9493f57ecc8add7d:0xb426a735286ed776!8m2!3d-22.1205939!4d-51.3874076!16s%2Fg%2F11kq9hsd49?hl=pt-BR&entry=ttu`;

const LINK_WHATSAPP =
  'https://api.whatsapp.com/send?phone=5518997514067&text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20os%20produtos!';

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

          <FooterLink href="tel:+5518997514067">
            <FooterIcon className="bx bxs-phone" /> (18) 99723-0188
          </FooterLink>

          <FooterLink href={LINK_WHATSAPP} target="_blank">
            <FooterIcon className="bx bxl-whatsapp" /> (18) 99751-4067
          </FooterLink>

          <FooterLink href="mailto:kifol@kifol.com.br">
            <FooterIcon className="bx bxs-envelope" /> kifol@kifol.com.br
          </FooterLink>

          <FooterLink
            href="https://www.instagram.com/kifol_fertilizantes"
            target="_blank"
            rel="noreferrer">
            <FooterIcon className="bx bxl-instagram" /> Instagram
          </FooterLink>

          <FooterLink
            href="https://www.facebook.com/kifol"
            target="_blank"
            rel="noreferrer">
            <FooterIcon className="bx bxl-facebook-circle" /> Facebook
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <TitleFooter>Localização:</TitleFooter>
          <FooterText>Estrada para 7 copas, Km 02</FooterText>
          <FooterText>Bairro União</FooterText>
          <FooterText>Presidente Prudente - SP</FooterText>
          <FooterText>CEP: 19065-000</FooterText>
          <FooterText>Caixa Postal 2311 </FooterText>

          <FooterLink href={LOCATION} target="_blank">
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
