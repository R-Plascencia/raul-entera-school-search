import {React, useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from './Map';
import CollegeAPI from "../api/CollegeAPI";
import SchoolItem from "./SchoolItem";
import SearchInput from "./SearchInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const AppContainer = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [schoolResults, setSchoolResults] = useState();
  const [targetSchool, setTargetSchool] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      setSearchTerm(encodeURIComponent(e.target.value));
    }
  }

  const showOnMap = (name, city) => {
    setTargetSchool({name, city});
  }

  useEffect(() => {
    async function search() {
      if (searchTerm) {
        setIsLoading(true);

        const data = await CollegeAPI.searchSchools(searchTerm);
  
        setSchoolResults(data.results);

        setIsLoading(false);
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
            {isLoading && <FontAwesomeIcon icon={faSpinner} size="2x" spin={true} />}

            {!isLoading && schoolResults?.length === 0 && <span>No results found.</span>}

            {!isLoading && schoolResults && schoolResults.map(school => {
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
          <Map targetData={targetSchool} />
        </Col>
      </Row>
    </Container>
  );
}

export default AppContainer;