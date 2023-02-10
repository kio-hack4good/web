import locationIcon from "@iconify/icons-mdi/map-marker";
import { Icon } from "@iconify/react";
import { InfoWindow, MarkerF } from "@react-google-maps/api";
import React, { useState } from "react";

export default function LocationPin(props) {
  const { text, lat, lng, label } = props;
  const [expanded, setExpanded] = useState(false);

  const onClick = () => {
    setExpanded(true);
  };

  const onCloseClick = () => {
    setExpanded(false);
  };

  const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15,
  };

  return (
    <MarkerF position={{ lat: lat, lng: lng }} onClick={onClick}>
      {expanded ? (
        <InfoWindow onCloseClick={onCloseClick}>
          <div style={divStyle}>{text}</div>
        </InfoWindow>
      ) : null}
    </MarkerF>
  );
}
