import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import './map.css';
import { location_list } from '../../assets/assets';

const containerStyle = {
    width: '100%',
    height: '750px'
};

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
            {location_list.map((location, index) => (
                <Marker
                    key={index}
                    position={{ lat: location.lat, lng: location.lng }}
                    title={location.name}
                    onClick={() => setSelectedMarker(location)}
                    icon={{
                        url: location.marker,
                        scaledSize: new window.google.maps.Size(75, 75),
                        size: new window.google.maps.Size(75, 75), 
                    }}
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
                        <img src={selectedMarker.image} alt={selectedMarker.name} />
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