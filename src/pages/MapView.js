import { collection, getDocs, query } from "@firebase/firestore";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback, useEffect, useState } from "react";

import { db } from "../firebase";

export default function MapViewPage() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB5TGwWCc-RM-xKoWGegoGFiNLoidedWrM",
  });

  const [map, setMap] = useState(null);
  const [centre, setCentre] = useState({ lat: 1.3082, lng: 103.7734 });
  const [value, setValue] = useState(0);
  const [locations, setLocations] = useState([]);

  // useEffect(() => {
  //   return async () => {
  //     const q = query(collection(db, "locations"));
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       setLocations([...locations, doc._document.data.value.mapValue.fields]);
  //     });
  //     console.log(locations);
  //   };
  // }, []);

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
      <GoogleMap
        mapContainerStyle={{ width: "1535px", height: "720px" }}
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
        <BottomNavigationAction label="Recents" />
        <BottomNavigationAction label="Favorites" />
        <BottomNavigationAction label="Nearby" />
      </BottomNavigation>
    </>
  ) : (
    <></>
  );
}
