// src/components/Home.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: url('https://via.placeholder.com/1500x500') no-repeat center center;
  background-size: cover;
  color: white;
  text-align: center;
  padding: 100px 0;
`;

const CallToAction = styled.div`
  margin-top: 20px;
`;

const Home = () => {
  return (
    <>
      <HeroSection className="hero-section">
        <Container>
          <h1>Welcome to Shepherd's Care</h1>
          <p>Making a Difference Through Compassion and Care</p>
          <CallToAction>
            <Button className="cta-button">Donate Now</Button>
            <Button className="cta-button">Volunteer</Button>
          </CallToAction>
        </Container>
      </HeroSection>
      <Container>
        <Row className="my-5">
          <Col>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.</p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={4}>
            <img src="https://via.placeholder.com/300" alt="Our Mission" className="img-fluid" />
            <h3>Our Mission</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4}>
            <img src="https://via.placeholder.com/300" alt="Our Programs" className="img-fluid" />
            <h3>Our Programs</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4}>
            <img src="https://via.placeholder.com/300" alt="Contact Us" className="img-fluid" />
            <h3>Contact Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
