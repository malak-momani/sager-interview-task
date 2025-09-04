import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { useSelector } from 'react-redux';

import 'mapbox-gl/dist/mapbox-gl.css';
import Marker from './Marker';
import './index.css'


function MainMap() {

  const mapRef = useRef()
  const mapContainerRef = useRef();
  const droneData = useSelector((state) => state.drones);


  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFsYWs5NiIsImEiOiJjbWV3a3Nyd2MwNnB1Mm5zYTRkeGw5a24wIn0.rupSThKg-Cd6d3VF_P5kEQ'
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [116.14815, -1.99628],
      style: 'mapbox://styles/mapbox/dark-v11',
      // minZoom: 5.5,
      zoom: 5.5
    });

    return () => {
      mapRef.current.remove()
    }
  }, []);
  console.log({ droneData })

  useEffect(() => {
    if (!mapRef.current) return;

    mapRef.current.on('load', () => {
      const routeGeometry = {
        type: 'LineString',
        coordinates: [
          [-70.9, 42.35], // Example coordinates
          [-70.95, 42.4],
          [-71.0, 42.45]
        ]
      };

      // mapRef.current.addSource('route', {
      //   type: 'geojson',
      //   data: {
      //     type: 'Feature',
      //     geometry: routeGeometry
      //   }
      // });

      mapRef.current.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#dd6666ff',
          'line-width': 6
        }
      });
    });
  }, [mapRef.current]); // Re-run effect if map instance changes (unlikely in this setup)
  return (
    <>
      <div id='map-container' ref={mapContainerRef} />
      {mapRef.current && droneData && droneData?.data?.features?.map((feature) => {
        return (<Marker
          key={feature.id}
          map={mapRef.current}
          feature={feature}
        />)
      })}
    </>
  )
}

export default MainMap;