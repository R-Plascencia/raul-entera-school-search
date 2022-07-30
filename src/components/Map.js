import React from "react";

const Map = (props) => {
  const schoolName = props.schoolName;

  return (
    <iframe
      title="map"
      loading="lazy"
      style={{width: "100%", height: "100vh", overflow: "auto"}}
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBhogM_XW7c77ZcrP4_-ntnevDfMaELNpQ
        &q=${schoolName || 'Los+Angeles'}`}>
    </iframe>
  )
}

export default Map;
