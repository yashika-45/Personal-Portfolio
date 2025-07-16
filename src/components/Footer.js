import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container
      id="connect"
      className="footer connect-section"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "60px 0",
        color: "#fff", // Ensure there's enough height
      }}
    >
      {/* ✅ Only one Particle component */}

      <Container style={{ position: "relative", zIndex: 1 }}>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center mb-4 mt-4">Connect With Me</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Type your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="text-center mb-4">
                <Button className="connect-btn mt-3"
                  type="submit"
                  size="lg"
                  style={{ cursor: "pointer" }}
                >
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
