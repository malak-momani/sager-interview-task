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
      style:'mapbox://styles/mapbox/navigation-night-v1',
      // minZoom: 5.5,
      zoom: 5.5
    });

    return () => {
      mapRef.current.remove()
    }
  }, []);
  console.log({ droneData })


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