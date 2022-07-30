import {React, useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from './Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const SplitLayout = (props) => {
  const [searchTerm, setSearchTerm] = useState();

  const handleKeyPress = (e) => {
    console.log('Get here???', e);
    if (e.keyCode === 13) {
      setSearchTerm(e.target.value);
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="search-pane">
            <InputGroup className="mb-3 search-input" onKeyUp={handleKeyPress}>
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Find a school"
                aria-label="search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
        </Col>
        <Col>
          <Map schoolName={searchTerm} />
        </Col>
      </Row>
    </Container>
  );
}

export default SplitLayout;