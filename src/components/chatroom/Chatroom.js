
import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import MessageBubble from './MessageBubble';
function Chatroom() {

  const publishPrompts = useSelector(state => state.publishPrompts);

  const renderedPosts = publishPrompts.map(prompts => (
    <MessageBubble sender={prompts.sender} message={prompts.message}/>
  ))

  return (
    <Row>
        <Container>
          <div className="chatroom">
            {renderedPosts}
          </div>
        </Container>
    </Row>
  )
}

export default Chatroom