import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

function GoogleMaps({ lat, lng }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
  });
  if (!isLoaded) {
    return <div>loading...</div>;
  }
  return <Map center={{ lat, lng }} />;
}
function Map({ center }) {
  return (
    <GoogleMap zoom={18} center={center} mapContainerClassName="map">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default GoogleMaps;
