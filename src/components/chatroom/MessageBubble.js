
import './MessageBubble.css';
import { Col, Container, Row } from 'react-bootstrap'

function MessageBubble(props) {

  let {sender, message} = props

  return (
    <Container>
    <Row className='msg-bubble'>
      <Col xs={1} className='sender'>
        {sender}
      </Col>
      <Col md="auto" className='message'>
        {message}
      </Col>
    </Row>
    </Container>
  )
}

export default MessageBubble