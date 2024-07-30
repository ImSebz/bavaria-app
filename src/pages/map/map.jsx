import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import './map.css';
import { assets } from '../../assets/assets';

const containerStyle = {
    width: '100%',
    height: '750px'
};

const locations = [
    { name: 'Don Juan', address: 'Av Carlos Escallón Cra 8 # 34-01', lat: 10.4242861308465, lng: -75.5489356306894, img: assets.don_juan },
    { name: 'The Clock pub', address: 'Calle 34 #7-33 Plaza de los coches', lat: 10.4236940224763, lng: -75.5491482304822, img: assets.clock_pub },
    { name: 'Inkanto', address: 'Carrera 5 #33-55 Portal de Los Dulces', lat: 10.4233377408453, lng: -75.5497013661753, img: assets.inkanto },
    { name: 'Casa Cruxada', address: 'Cl. 35 #3-30', lat: 10.4242818986334, lng: -75.5518245146989, img: assets.casa_cruxada },
    { name: 'Mistura', address: 'Carrera 8 #36-151', lat: 10.426823278194, lng: -75.5484583052338, img: assets.mistura },
    { name: 'UMA', address: 'Cll del Curato # 38-99', lat: 10.4280822085015, lng: -75.5484067238443, img: assets.uma },
    { name: 'La Unica', address: 'Cra. 8 #38-47', lat: 10.4275191032595, lng: -75.5479865877157, img: assets.la_unica },
    { name: 'Hotel Movich', address: 'Calle de Vélez Danies No. 4-39', lat: 10.4231751472625, lng: -75.5506840917423, img: assets.hotel_movich },
    { name: 'Urania Rooftop', address: 'Calle 32 #4-45', lat: 10.4226779223445, lng: -75.5504704052338, img: assets.urania_rooftop },
    { name: 'Marina Todomar', address: 'Carrera 2 #15-364', lat: 10.4178692, lng: -75.5515702, img: assets.marina_todomar }
];

function MyComponent() {
    const apiKey = import.meta.env.VITE_API_KEY;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey
    });

    const [map, setMap] = useState(null);
    const [currentPosition, setCurrentPosition] = useState(null);
    const [selectedMarker, setSelectedMarker] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                () => {
                    console.error("Error getting the current position");
                }
            );
        }
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    const handleNavigate = (lat, lng) => {
        const url = `https://www.google.com/maps/dir/?api=1&origin=${currentPosition.lat},${currentPosition.lng}&destination=${lat},${lng}&travelmode=walking`;
        window.open(url, '_blank');
    };

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
                    onClick={() => setSelectedMarker(location)}
                />
            ))}
            <Marker
                position={currentPosition}
            />
            {selectedMarker && (
                <InfoWindow
                    position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                    onCloseClick={() => setSelectedMarker(null)}
                >
                    <div className='marker-popup'>
                        <h2>{selectedMarker.name}</h2>
                        <img src={selectedMarker.img} alt={selectedMarker.name} />
                        <div className='marker-popup-adress-btn'>
                            <div className='marker-popup-adress'>{selectedMarker.address}</div>
                            <div className='marker-popup-btn'>
                                <button onClick={() => handleNavigate(selectedMarker.lat, selectedMarker.lng)}>Ir ahora</button>
                            </div>

                        </div>

                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    ) : <></>;
}

export default React.memo(MyComponent);