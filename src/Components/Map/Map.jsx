import { Marker, Popup } from "react-leaflet";

import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "./Map.css";

function Map() {
  return (
    <div id="map">
      <MapContainer
        className="map"
        center={[51.505, -0.09]}
        zoom={8}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        attributionControl={false}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
