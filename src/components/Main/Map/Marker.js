import { useEffect, useRef } from "react"
import mapboxgl from 'mapbox-gl';
import MarkerImg from '../../../assests/marker.svg';

const Marker = ({ map, feature }) => {
    const { geometry } = feature

    const markerRef = useRef()

    useEffect(() => {
        const el = document.createElement('div');
        el.className = 'custom-marker'; // Apply custom CSS for styling

        const img = document.createElement('img');
        img.src = MarkerImg;
        // img.style.width = '30px';
        // img.style.height = '30px';

        el.appendChild(img);
        markerRef.current = new mapboxgl.Marker({
            element: el,
            rotationAlignment: 'map'
        })
            .setLngLat([geometry.coordinates[0], geometry.coordinates[1]])
            .setRotation(0)
            .addTo(map)

        return () => {
            markerRef.current.remove()
        }
    }, [])

    return (
        <div
            className="custom-marker"
            style={{
                backgroundSize: '100%',
                cursor: 'pointer',
            }}
            onClick={() => { }}
        />
    );
}

export default Marker;