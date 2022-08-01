import React from "react";

const Map = (props) => {
  const { name, city } = props.targetData;

  function queryString() {
    if (name && city) {
      return `${encodeURIComponent(name)}+${city}`;
    }

    return "Los+Angeles";
  }

  return (
    <iframe
      title="map"
      loading="lazy"
      className="map"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBhogM_XW7c77ZcrP4_-ntnevDfMaELNpQ
        &q=${queryString()}&zoom=16`}>
    </iframe>
  )
}

export default Map;
