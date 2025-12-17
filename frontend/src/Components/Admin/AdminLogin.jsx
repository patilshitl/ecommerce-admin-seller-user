import React from 'react'
import { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap'


function AdminLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
  };

  return (
    <>
      <Container className="my-5"> 
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} lg={4}>
          <Card>
            <Card.Header className="text-center bg-primary text-white">
              <Card.Title className="mb-0">Admin Login</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                
                {/* Email Field */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Password Field */}
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Submit Button */}
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100" // Makes the button full width
                >
                  Sign In
                </Button>
                
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default AdminLogin
