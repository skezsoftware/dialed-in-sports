import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/dialed-logo.png';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const closeMenu = (e) => {
      if (expanded) {
        const navbar = document.querySelector('.navbar-custom');
        if (navbar && !navbar.contains(e.target)) {
          setExpanded(false);
        }
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [expanded]);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      collapseOnSelect 
      expand="lg" 
      className="navbar-custom" 
      fixed="top"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
          <img
            src={logo}
            height="150"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleNavClick}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
