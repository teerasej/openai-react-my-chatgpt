import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function PromptInput() {
  return (
    <Row>
        <Col>
          <Form>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" placeholder="Type your message here" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
  )
}

export default PromptInput