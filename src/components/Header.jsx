// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.img`
  width: 150px;
`;

const StyledNavLink = styled(NavLink)`
  &.nav-link {
    color: #000;
    &.active {
      font-weight: bold;
    }
  }
`;

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={StyledNavLink} to="/">
          <Logo src="https://via.placeholder.com/150x50" alt="Shepherd's Care Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={StyledNavLink} to="/" exact>Home</Nav.Link>
            <Nav.Link as={StyledNavLink} to="/about">About Us</Nav.Link>
            <Nav.Link as={StyledNavLink} to="/services">Services</Nav.Link>
            <Nav.Link as={StyledNavLink} to="/get-involved">Get Involved</Nav.Link>
            <Nav.Link as={StyledNavLink} to="/news">News</Nav.Link>
            <Nav.Link as={StyledNavLink} to="/resources">Resources</Nav.Link>
            <Nav.Link as={StyledNavLink} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
