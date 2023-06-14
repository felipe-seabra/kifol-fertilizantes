import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { logo } from '../../images';
import { Container, Logo, Icon } from './styles';

interface Props {
  toggleTheme(): void;
}

const NAV_LINKS = [
  { path: '/', label: 'Home', iconClass: 'bx bx-home' },
  { path: '/about', label: 'Quem Somos', iconClass: 'bx bx-user' },
  { path: '/products', label: 'Produtos', iconClass: 'bx bx-lemon' },
  { path: '/news', label: 'Novidades', iconClass: 'bx bx-news' },
  { path: '/depositions', label: 'Depoimentos', iconClass: 'bx bx-notepad' },
  { path: '/contact', label: 'Contato', iconClass: 'bx bx-envelope' }
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
    if (window.matchMedia('(max-width: 768px)').matches) {
      setOpen(!open);
    }
  };

  return (
    <header>
      <Container>
        <Navbar collapseOnSelect expand="md">
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
            <Nav className="container header__links">
              {NAV_LINKS.map((link) => (
                <Nav.Link
                  key={link.path}
                  as={Link}
                  to={link.path}
                  className="navlink"
                  onClick={handleClick}
                  active={activeLink === link.path}>
                  <Icon className={link.iconClass} />
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
            <Switch
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor={shade(0.15, colors.primary)}
              onColor={colors.secundary}
            />
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
