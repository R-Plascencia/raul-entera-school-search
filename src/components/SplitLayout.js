import {React, useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from './Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CollegeAPI from "../api/CollegeAPI";
import SchoolItem from "./SchoolItem";


const SplitLayout = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [schoolResults, setSchoolResults] = useState();
  const [targetSchool, setTargetSchool] = useState();

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      setSearchTerm(e.target.value);
    }
  }

  const showOnMap = (name, long, lat) => {
    setTargetSchool(name);
  }

  useEffect(() => {
    async function search() {
      if (searchTerm) {
        const data = await CollegeAPI.searchSchools(searchTerm);
  
        setSchoolResults(data.results);
      }
    }

    search();
  }, [searchTerm]);

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
            
            <br />

            {schoolResults && schoolResults.map(school => {
              console.log(school);
              return (
                <SchoolItem 
                  key={school.id}
                  name={school["school.name"]}
                  city={school["school.city"]}
                  url={school["school.school_url"]}
                  state={school["school.state"]}
                  zip={school["school.zip"]}
                  showOnMap={showOnMap}
                />
              );
            })}
          </div>
        </Col>
        <Col>
          <Map targetName={targetSchool} />
        </Col>
      </Row>
    </Container>
  );
}

export default SplitLayout;