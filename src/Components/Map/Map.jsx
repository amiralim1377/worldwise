import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from "react-leaflet";
import "./Map.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Map() {
  const cities = useSelector((state) => state.trip.alltrip);
  console.log(cities);

  const selectedCity = useSelector((state) => state.trip.selectedCity);
  const navigate = useNavigate();
  const MapClickHandler = () => {
    useMapEvent({
      click: (e) => {
        const { lat, lng } = e.latlng;
        navigate(`/app/form?lat=${lat}&lng=${lng}`);
      },
    });
    return null;
  };

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

        {cities.map((cityitem) => (
          <Marker key={cities.id} position={[cityitem.lat, cityitem.lng]}>
            <Popup>
              {cityitem.city} <br /> {cityitem.note}
            </Popup>
          </Marker>
        ))}

        <MapClickHandler />
        {selectedCity && <FlyToLocation city={selectedCity} />}
      </MapContainer>
    </div>
  );
}

function FlyToLocation({ city }) {
  const map = useMap();
  map.setView([city.lat, city.lng], 12);
  return null;
}

export default Map;
