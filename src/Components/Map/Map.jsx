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
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCity } from "../../tripSlice/tripSlice";
import { useEffect } from "react";

function Map() {
  const cities = useSelector((state) => state.trip.alltrip);
  console.log(cities);
  const dispatch = useDispatch();

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
          <Marker key={cityitem.id} position={[cityitem.lat, cityitem.lng]}>
            <Popup>
              {cityitem.city} <br /> {cityitem.note}
            </Popup>
          </Marker>
        ))}

        <MapClickHandler />
        {selectedCity && (
          <FlyToLocation city={selectedCity} dispatch={dispatch} />
        )}
      </MapContainer>
    </div>
  );
}

function FlyToLocation({ city, dispatch }) {
  const map = useMap();
  useEffect(() => {
    if (city) {
      map.setView([city?.lat, city?.lng], 12, {
        animate: true,
      });
      dispatch(setSelectedCity(null));
    }
  }, [city, map, dispatch]);
  return null;
}

export default Map;
