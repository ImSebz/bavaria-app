import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import './map.css';
import { assets } from '../../assets/assets';

const containerStyle = {
    width: '100%',
    height: '750px'
};

const locations = [
    { name: 'Don Juan', address: 'Av Carlos Escallón Cra 8 # 34-01', lat: 10.423491, lng: -75.548849, img: assets.don_juan },
    { name: 'The Clock pub', address: 'Calle 34 #7-33 Plaza de los coches', lat: 10.423475, lng: -75.549108, img: assets.clock_pub },
    { name: 'Inkanto', address: 'Carrera 5 #33-55 Portal de Los Dulces', lat: 10.423245, lng: -75.550352, img: assets.inkanto },
    { name: 'Casa Cruxada', address: 'Cl. 35 #3-30', lat: 10.424096, lng: -75.551877, img: assets.casa_cruxada },
    { name: 'Mistura', address: 'Carrera 8 #36-151', lat: 10.426658, lng: -75.548421, img: assets.mistura },
    { name: 'UMA', address: 'San Diego Calle del Curato. 38-99, Cartagena de Indias, Bolívar', lat: 10.427866, lng: -75.548328, img: assets.uma },
    { name: 'La Unica', address: 'Cra. 8 #38-47', lat: 10.427318, lng: -75.547911, img: assets.la_unica },
    { name: 'Hotel Movich', address: 'Calle de Vélez Danies No. 4-39', lat: 10.422797, lng: -75.550645, img: assets.hotel_movich },
    { name: 'Urania Rooftop', address: 'Calle 32 #4-45', lat: 10.422377, lng: -75.550434, img: assets.urania_rooftop },
    { name: 'Marina Todomar', address: 'Carrera 2 #15-364', lat: 10.417905, lng: -75.551496, img: assets.marina_todomar }
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