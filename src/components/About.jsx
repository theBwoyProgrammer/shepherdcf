// src/components/About.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <h1>About Us</h1>
      <img src="https://via.placeholder.com/800x400" alt="About Us" className="img-fluid my-4" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.</p>
    </Container>
  );
};

export default About;
