// src/components/About.jsx
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 60px 0;
  background-color: #f4f4f4;
`;

const Title = styled.h1`
  color: #FFA500;
  text-align: center;
  margin-bottom: 40px;
`;

const Subtitle = styled.h2`
  color: #32CD32;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #333;
  font-size: 1.1em;
  line-height: 1.6;
`;

const Highlight = styled.span`
  color: #FFA500;
`;

const AboutImage = styled(Image)`
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const About = () => {
  return (
    <AboutSection>
      <Container>
        <Title>About Us</Title>
        <Row>
          <Col md={6}>
            <AboutImage src="https://via.placeholder.com/500x300" fluid />
          </Col>
          <Col md={6}>
            <Subtitle>Who We Are</Subtitle>
            <Text>
              Shepherd's Care is a Christian-based charity organization dedicated to providing support and care to those in need. Our mission is to spread love, compassion, and hope through our various programs and services.
            </Text>
            <Subtitle>Our Mission</Subtitle>
            <Text>
              Our mission is to <Highlight>serve</Highlight> the community by offering essential services, including food distribution, education, and healthcare support. We believe in making a positive impact on the lives of individuals and families by addressing their physical, emotional, and spiritual needs.
            </Text>
            <Subtitle>Get Involved</Subtitle>
            <Text>
              We welcome individuals, groups, and organizations to join us in our efforts to make a difference. Whether through volunteering, donating, or partnering with us, your involvement can help bring hope and support to those who need it most.
            </Text>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
