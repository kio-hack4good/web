import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback, useState } from "react";

export default function MapView() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB5TGwWCc-RM-xKoWGegoGFiNLoidedWrM",
  });

  const [map, setMap] = useState(null);
  const [centre, setCentre] = useState({ lat: 1.3082, lng: 103.7734 });

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
    <GoogleMap
      mapContainerStyle={{ width: "1535px", height: "720px" }}
      center={centre}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}></GoogleMap>
  ) : (
    <></>
  );
}
