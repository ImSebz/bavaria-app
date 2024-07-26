import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './map.css';

const containerStyle = {
    width: '100%',
    height: '800px'
};

const locations = [
    { name: 'Don Juan', address: 'Av Carlos Escallón Cra 8 # 34-01', lat: 10.4242861308465, lng: -75.5489356306894 },
    { name: 'The Clock pub', address: 'Calle 34 #7-33 Plaza de los coches', lat: 10.4236940224763, lng: -75.5491482304822 },
    { name: 'Inka', address: 'Carrera 5 #33-55 Portal de Los Dulces', lat: 10.4233377408453, lng: -75.5497013661753 },
    { name: 'Casa Cruxada', address: 'Cl. 35 #3-30', lat: 10.4242818986334, lng: -75.5518245146989 },
    { name: 'Mistura', address: 'Carrera 8 #36-151', lat: 10.426823278194, lng: -75.5484583052338 },
    { name: 'UMA', address: 'Cll del Curato # 38-99', lat: 10.4280822085015, lng: -75.5484067238443 },
    { name: 'La Unica', address: 'Cra. 8 #38-47', lat: 10.4275191032595, lng: -75.5479865877157 },
    { name: 'Hotel Movich', address: 'Calle de Vélez Danies No. 4 – 39', lat: 10.4231751472625, lng: -75.5506840917423 },
    { name: 'Sophía Rooftop', address: 'Calle 32 #4-45', lat: 10.4226779223445, lng: -75.5504704052338 },
    { name: 'Marina Todomar', address: 'Carrera 2 #15-364', lat: 10.4178692, lng: -75.5515702 }
];

function MyComponent() {
    const apiKey = import.meta.env.VITE_API_KEY;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey
    });

    const [map, setMap] = useState(null);
    const [currentPosition, setCurrentPosition] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentPosition({ lat: 10.4043241, lng: -75.5522719 });
                },
                (error) => {
                    console.error("Error getting location: ", error);
                }
            );
        }
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded && currentPosition ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentPosition}
            zoom={15}
            onUnmount={onUnmount}
        >
            {locations.map((location, index) => (
                <Marker
                    key={index}
                    position={{ lat: location.lat, lng: location.lng }}
                    title={location.name}
                />
            ))}
            <Marker
                position={currentPosition}
                icon={{
                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                }}
            />
        </GoogleMap>
    ) : <></>;
}

export default React.memo(MyComponent);