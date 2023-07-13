import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Switch from 'react-switch';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { logo } from '../../images';
import { Container, Logo, Icon } from './styles';
import {
  URL_WHATSAPP_FORMATED,
  URL_INSTAGRAM,
  URL_FACEBOOK,
  URL_LINKEDIN
} from '../../database/social';

interface Props {
  toggleTheme(): void;
}

const NAV_LINKS = [
  { path: '/', label: 'Home', iconClass: 'bx bx-home' },
  { path: '/sobre', label: 'Quem Somos', iconClass: 'bx bx-user' },
  { path: '/produtos', label: 'Produtos', iconClass: 'bx bx-lemon' },
  // { path: '/novidades', label: 'Novidades', iconClass: 'bx bx-news' },
  // { path: '/depoimentos', label: 'Depoimentos', iconClass: 'bx bx-notepad' },
  { path: '/contato', label: 'Contato', iconClass: 'bx bx-envelope' },
  {
    path: URL_WHATSAPP_FORMATED,
    label: 'WhatsApp',
    target: '_blank',
    iconClass: 'bx bxl-whatsapp'
  }
];

const DROPDOWN_LINKS = [
  {
    path: URL_INSTAGRAM,
    label: 'Instagram',
    target: '_blank',
    iconClass: 'bx bxl-instagram'
  },
  {
    path: URL_FACEBOOK,
    label: 'Facebook',
    target: '_blank',
    iconClass: 'bx bxl-facebook-circle'
  },
  {
    path: URL_LINKEDIN,
    label: 'Linkedin',
    target: '_blank',
    iconClass: 'bx bxl-linkedin'
  }
];

function Header({ toggleTheme }: Props): JSX.Element {
  const location = useLocation();
  const { colors, title } = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState('/');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleClick = () => {
    if (window.matchMedia('(max-width: 991px)').matches) {
      setOpen(!open);
    }
  };

  const clasNameLinks = () => {
    if (window.matchMedia('(max-width: 991px)').matches) {
      return 'header__links';
    }
    return 'container header__links';
  };

  return (
    <header>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand>
            <Link to="/" className="header__logo">
              <Logo src={logo} alt="Logo Kifol" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setOpen(!open)}
          />
          <Navbar.Collapse in={open} id="responsive-navbar-nav">
            <Nav className={clasNameLinks()}>
              {NAV_LINKS.map((link) => (
                <Nav.Link
                  key={link.path}
                  as={Link}
                  to={link.path}
                  target={link.target}
                  className="navlink"
                  onClick={handleClick}
                  active={activeLink === link.path}>
                  <Icon className={link.iconClass} />
                  {link.label}
                </Nav.Link>
              ))}

              <NavDropdown className="navlink" title="Redes Sociais" id="dropdown-menu">
                {DROPDOWN_LINKS.map((link) => (
                  <NavDropdown.Item
                    key={link.path}
                    as={Link}
                    to={link.path}
                    target={link.target}
                    className="dropdown-item"
                    onClick={handleClick}>
                    <Icon className={link.iconClass} />
                    {link.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Switch
              className="switch"
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              uncheckedHandleIcon={<div className="emoji">🌚</div>}
              checkedHandleIcon={<div className="emoji">🌞</div>}
              height={10}
              width={40}
              handleDiameter={20}
              offColor={shade(0.15, colors.secundary)}
              onColor={colors.secundary}
            />
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
