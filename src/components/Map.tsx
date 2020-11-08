import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Container } from "@/styles/components/Map";

const LAT = 53.3364736;
const LONG = -6.275072;

export default function Map() {
  return (
    <Container>
      <MapContainer
        center={[LAT, LONG]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_REACT_APP_TILE_LAYER_MAP}`}
        />
        <Marker position={[LAT, LONG]}>
          <Popup zoomAnimation autoPan >
            Olá! Venha nos visitar.
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
}
