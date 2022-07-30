import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SplitPane = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col>{props.left}</Col>
        <Col>{props.right}</Col>
      </Row>
    </Container>
  );
}

export default SplitPane;