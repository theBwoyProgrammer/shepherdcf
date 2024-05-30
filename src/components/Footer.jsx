// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">
            <p>© 2024 Shepherd's Care. Built by <a href="https://ovrtilabs.com" target="_blank" rel="noopener noreferrer">OvrtiLabs Web Solutions</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
