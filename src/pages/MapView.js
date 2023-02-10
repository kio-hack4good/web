import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Image from "mui-image";
import React, { useCallback, useEffect, useState } from "react";

const centre = { lat: 1.3082, lng: 103.7734 };

export default function MapView() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB5TGwWCc-RM-xKoWGegoGFiNLoidedWrM",
  });

  const [map, setMap] = useState(null);
  const [value, setValue] = React.useState(0);

  const onLoad = useCallback((map) => {
    const bounds = new google.maps.LatLngBounds();
    const marker = new google.maps.Marker({
      position: centre,
      map: map,
      draggable: true,
    });
    bounds.extend(marker.getPosition());
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <>
      <Box width="100%">
        <GoogleMap
          mapContainerStyle={{ width: "1500px", height: "800px" }}
          center={centre}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}></GoogleMap>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction label="Profile" variant="h1" />
          <BottomNavigationAction label="Map" variant="h1" />
          <BottomNavigationAction label="Resources" variant="h1" />
        </BottomNavigation>
      </Box>
    </>
  ) : (
    <></>
  );
}
