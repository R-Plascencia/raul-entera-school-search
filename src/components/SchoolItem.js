import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SchoolItem = (props) => {
  const { name, city, url, state, zip, lat, long, showOnMap } = props;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <div>
            {city}, {state} {zip}
          </div>
          <div>
            <a href={url}>{url}</a>
          </div>
        </Card.Text>
        <div className="d-grid gap-2">
          <Button variant="success" onClick={()=>showOnMap(name, lat, long)}>See on Map</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SchoolItem;