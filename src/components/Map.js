import React from "react";

const Map = (props) => {
  const targetName = props.targetName;

  return (
    <iframe
      title="map"
      loading="lazy"
      className="map"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBhogM_XW7c77ZcrP4_-ntnevDfMaELNpQ
        &q=${encodeURIComponent(targetName || 'Los+Angeles')}&zoom=15`}>
    </iframe>
  )
}

export default Map;
