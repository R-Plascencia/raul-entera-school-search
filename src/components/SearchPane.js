import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchPane = (props) => {
  return (
    <div className="search-pane">
      <InputGroup className="mb-3 search-input">
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
  )
}

export default SearchPane;
