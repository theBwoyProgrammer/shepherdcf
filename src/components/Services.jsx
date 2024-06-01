// src/components/Services.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 60px 0;
  background-color: #fff;
`;

const Title = styled.h1`
  color: #FFA500;
  text-align: center;
  margin-bottom: 40px;
`;

const ServiceCard = styled(Card)`
  margin-bottom: 30px;
  border: none;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceCardBody = styled(Card.Body)`
  text-align: center;
`;

const ServiceCardTitle = styled(Card.Title)`
  color: #32CD32;
  margin-bottom: 15px;
`;

const ServiceCardText = styled(Card.Text)`
  color: #333;
  font-size: 1.1em;
`;

const Services = () => {
  return (
    <ServicesSection>
      <Container>
        <Title>Our Services</Title>
        <Row>
          <Col md={4}>
            <ServiceCard>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <ServiceCardBody>
                <ServiceCardTitle>Food Distribution</ServiceCardTitle>
                <ServiceCardText>
                  We provide nutritious meals to individuals and families in need, ensuring that no one goes hungry.
                </ServiceCardText>
              </ServiceCardBody>
            </ServiceCard>
          </Col>
          <Col md={4}>
            <ServiceCard>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <ServiceCardBody>
                <ServiceCardTitle>Education Support</ServiceCardTitle>
                <ServiceCardText>
                  Our educational programs offer support to children and adults, helping them achieve their academic goals.
                </ServiceCardText>
              </ServiceCardBody>
            </ServiceCard>
          </Col>
          <Col md={4}>
            <ServiceCard>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <ServiceCardBody>
                <ServiceCardTitle>Healthcare Assistance</ServiceCardTitle>
                <ServiceCardText>
                  We provide access to essential healthcare services for those who are underserved and in need.
                </ServiceCardText>
              </ServiceCardBody>
            </ServiceCard>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <ServiceCard>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <ServiceCardBody>
                <ServiceCardTitle>Community Outreach</ServiceCardTitle>
                <ServiceCardText>
                  Our outreach programs are designed to engage and support the local community through various initiatives.
                </ServiceCardText>
              </ServiceCardBody>
            </ServiceCard>
          </Col>
          <Col md={4}>
            <ServiceCard>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <ServiceCardBody>
                <ServiceCardTitle>Spiritual Guidance</ServiceCardTitle>
                <ServiceCardText>
                  We offer spiritual counseling and guidance to help individuals navigate life's challenges.
                </ServiceCardText>
              </ServiceCardBody>
            </ServiceCard>
          </Col>
          <Col md={4}>
            <ServiceCard>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <ServiceCardBody>
                <ServiceCardTitle>Job Training</ServiceCardTitle>
                <ServiceCardText>
                  Our job training programs equip individuals with the skills needed to secure stable employment.
                </ServiceCardText>
              </ServiceCardBody>
            </ServiceCard>
          </Col>
        </Row>
      </Container>
    </ServicesSection>
  );
};

export default Services;
