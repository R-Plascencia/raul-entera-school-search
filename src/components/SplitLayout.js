import {React, useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from './Map';
import CollegeAPI from "../api/CollegeAPI";
import SchoolItem from "./SchoolItem";
import SearchInput from "./SearchInput";


const SplitLayout = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [schoolResults, setSchoolResults] = useState();
  const [targetSchool, setTargetSchool] = useState();

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      setSearchTerm(e.target.value);
    }
  }

  const showOnMap = (name) => {
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
            <SearchInput keyUpHandler={handleKeyUp} />
            
            <br />

            {schoolResults && schoolResults.map(school => {
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