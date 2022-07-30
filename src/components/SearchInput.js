import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchInput = (props) => {
  const { keyUpHandler } = props;

  return (
    <InputGroup className="mb-3 search-input" onKeyUp={keyUpHandler}>
      <InputGroup.Text id="basic-addon1">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
      </InputGroup.Text>
      <Form.Control
        placeholder="Find a school"
        aria-label="search"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  )
}

export default SearchInput;
