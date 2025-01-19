import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


function MapComponent({ onLocationSelect }: { onLocationSelect: (location: string) => void }) {
    useEffect(() => {
        const map = L.map('map').setView([6.7114, 79.9072], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        const marker = L.marker([6.7114, 79.9072]).addTo(map);

        map.on('click', (e) => {
            const { lat, lng } = e.latlng;
            marker.setLatLng([lat, lng]);

            const locationString = `${lat.toFixed(5)},${lng.toFixed(5)}`;
            onLocationSelect(locationString);
        });

        return () => {
            map.remove();
        };
    }, []);

    return (
        <div id="map" className="h-64 rounded-lg bg-gray-200"></div>
    );
}

export default MapComponent