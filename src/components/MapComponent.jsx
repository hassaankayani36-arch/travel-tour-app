import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';
import { destinations } from '../data/destinationsToursData';

function MapController({ selectedDestination }) {
    const map = useMap();

    useEffect(() => {
        if (selectedDestination !== null) {
            map.flyTo(selectedDestination, 15);
        }
    }, [selectedDestination, map]);

    return null;
}

function MapComponent({ selectedDestination }) {
    const myIcon = new Icon({
        iconUrl: 'https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png',
        iconSize: [45, 45],
    });

    return (
        <div className='map'>
            <MapContainer className='mapcontainer' center={[30, 70]} zoom={5}>
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; OpenStreetMap contributors'
                />

                <MapController selectedDestination={selectedDestination} />

                {destinations.map((destination) => (
                    <Marker
                        key={destination.id}
                        position={destination.coordinates}
                        icon={myIcon}
                    />
                ))}
            </MapContainer>
        </div>
    );
}

export default MapComponent;