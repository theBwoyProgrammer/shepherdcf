// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #f8f9fa;
  padding: 20px 0;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const FooterLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Built by <FooterLink href="https://ovrtilabs.com">OvrtiLabs Web Solutions</FooterLink>
      </p>
    </FooterContainer>
  );
};

export default Footer;
