import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PromptInput from './components/promptinput/PromptInput';
import Chatroom from './components/chatroom/Chatroom';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>MyGPT</h1>
        </Col>
      </Row>
      <Chatroom/>
      <PromptInput/>
    </Container>
  );
}

export default App;
