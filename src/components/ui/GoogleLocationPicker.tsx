
import { useState, useRef } from 'react';
import { GoogleMap, Autocomplete, Marker, useJsApiLoader } from '@react-google-maps/api';
import { MapPin } from 'lucide-react';

const libraries: ("places" | "geometry")[] = ["places", "geometry"];

interface GoogleLocationPickerProps {
    onLocationSelect: (location: {
        address: string;
        lat: number;
        lng: number;
        components: unknown;
    }) => void;
    initialLat?: number;
    initialLng?: number;
}

const GoogleLocationPicker = ({ onLocationSelect, initialLat, initialLng }: GoogleLocationPickerProps) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY || '',
        libraries,
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [markerPos, setMarkerPos] = useState({ lat: initialLat || 25.2048, lng: initialLng || 55.2708 }); // Default Dubai
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    const onPlaceChanged = () => {
        if (autocompleteRef.current) {
            const place = autocompleteRef.current.getPlace();
            if (place.geometry && place.geometry.location) {
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();
                setMarkerPos({ lat, lng });
                map?.panTo({ lat, lng });
                map?.setZoom(15);

                onLocationSelect({
                    address: place.formatted_address || '',
                    lat,
                    lng,
                    components: place.address_components
                });
            }
        }
    };

    const onMarkerDragEnd = (e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
            const lat = e.latLng.lat();
            const lng = e.latLng.lng();
            setMarkerPos({ lat, lng });

            // Reverse geocode
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ location: { lat, lng } }, (results, status) => {
                if (status === 'OK' && results && results[0]) {
                    onLocationSelect({
                        address: results[0].formatted_address,
                        lat,
                        lng,
                        components: results[0].address_components
                    });
                }
            });
        }
    };

    if (!isLoaded) return <div>Loading Maps...</div>;

    return (
        <div className="space-y-4">
            <div className="relative">
                <Autocomplete
                    onLoad={ref => autocompleteRef.current = ref}
                    onPlaceChanged={onPlaceChanged}
                >
                    <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search property location..."
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        />
                    </div>
                </Autocomplete>
            </div>

            <div className="h-[300px] w-full rounded-lg overflow-hidden border border-gray-300">
                <GoogleMap
                    center={markerPos}
                    zoom={13}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    onLoad={map => setMap(map)}
                    options={{
                        streetViewControl: false,
                        mapTypeControl: false,
                    }}
                >
                    <Marker
                        position={markerPos}
                        draggable={true}
                        onDragEnd={onMarkerDragEnd}
                    />
                </GoogleMap>
            </div>
            <p className="text-xs text-gray-500">
                Drag the marker to pinpoint the exact location.
            </p>
        </div>
    );
};

export default GoogleLocationPicker;
