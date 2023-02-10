import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback, useState } from "react";

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
      <Box
        sx={{
          height: "100vh",
        }}>
        <Box
          sx={{
            display: "flex",
            height: "100%",
          }}>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={centre}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
        </Box>
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
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
        </Paper>
      </Box>
    </>
  ) : (
    <></>
  );
}
