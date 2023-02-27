
import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import MessageBubble from './MessageBubble';
function Chatroom() {
  return (
    <Row>
        <Container>
          <div className="chatroom">
            <MessageBubble sender={'user'} message={'How are you?'}/>
            <MessageBubble sender={'GPT'} message={'Fine, thank you. How are you?'}/>
          </div>
        </Container>
    </Row>
  )
}

export default Chatroom