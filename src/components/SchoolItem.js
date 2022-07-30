import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SchoolItem = (props) => {
  const { name, city, url, state, zip, showOnMap } = props;

  function fixURL(url) {
    if (url.includes("http:") || url.includes("https:")) {
      return url;
    } 

    return "//" + url;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <div>
            {city}, {state} {zip}
          </div>
          <div>
            <a href={fixURL(url)} target="_blank" rel="noopener noreferrer">{url}</a>
          </div>
        </Card.Text>
        <div className="d-grid gap-2">
          <Button variant="success" onClick={()=>showOnMap(name)}>See on Map</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SchoolItem;