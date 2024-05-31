// src/components/Contact.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { emailjsConfig } from '../emailjsConfig';

const StyledForm = styled(Form)`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: '',
    user_name: 'Shepherd\'s Care Team' // You can customize this as needed
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      emailjsConfig.serviceID,
      emailjsConfig.templateID,
      formData,
      emailjsConfig.userID
    ).then(() => {
      setShowAlert(true);
      setFormData({
        from_name: '',
        email: '',
        message: '',
        user_name: 'Shepherd\'s Care Team' // Reset to default
      });
    }).catch((error) => {
      console.error('Failed to send the email', error);
    });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1>Contact Us</h1>
          <p>If you have any questions or need more information, please don't hesitate to send us a message. We're here to help!</p>
          {showAlert && <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>Message sent successfully!</Alert>}
          <StyledForm onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Enter your message"
                required
              />
            </Form.Group>
            <Button className="cta-button" type="submit">Send Message</Button>
          </StyledForm>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
