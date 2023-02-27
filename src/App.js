import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>MyGPT</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="chatroom"></div>
        </Col>
      </Row>
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
    </Container>
  );
}

export default App;
