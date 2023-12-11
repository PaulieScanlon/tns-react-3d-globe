import { useRef } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

import globeJson from '../assets/ne_110m_admin_0_countries.json';
import pointsData from '../assets/random-locations.json';

const min = 1000;
const max = 3000;
const data = pointsData.sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 30);

const arcsData = data.map(() => {
  const randStart = Math.floor(Math.random() * data.length);
  const randEnd = Math.floor(Math.random() * data.length);
  const randTime = Math.floor(Math.random() * (max - min + 1) + min);
  return {
    startLat: data[randStart].lat,
    startLng: data[randStart].lng,
    endLat: data[randEnd].lat,
    endLng: data[randEnd].lng,
    time: randTime,
    color: ['#c362e9', '#352c56'],
  };
});

const Page = () => {
  const globeRef = useRef(null);

  const globeReady = () => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().enableZoom = false;

      globeRef.current.pointOfView({
        lat: 19.054339351561637,
        lng: -50.421161072148465,
        altitude: 1.8,
      });
    }
  };

  return (
    <div className='cursor-move'>
      <Globe
        ref={globeRef}
        onGlobeReady={globeReady}
        backgroundColor='#000000'
        globeMaterial={
          new THREE.MeshPhongMaterial({
            color: '#3e3e59',
          })
        }
        atmosphereColor='#5784a7'
        atmosphereAltitude={0.5}
        pointsMerge={true}
        pointsData={pointsData}
        pointAltitude={0.01}
        pointRadius={0.2}
        pointResolution={5}
        pointColor={() => '#77d8dc'}
        arcsData={arcsData}
        arcAltitudeAutoScale={0.3}
        arcColor='color'
        arcStroke={0.5}
        arcDashGap={2}
        arcDashAnimateTime='time'
        polygonsData={globeJson.features}
        polygonCapColor={() => '#000000'}
        polygonSideColor={() => '#000000'}
        customLayerData={[...Array(500).keys()].map(() => ({
          lat: (Math.random() - 1) * 360,
          lng: (Math.random() - 1) * 360,
          altitude: Math.random() * 2,
          size: Math.random() * 0.7,
          color: '#4b4f70',
        }))}
        customThreeObject={(data) => {
          const { size, color } = data;
          return new THREE.Mesh(new THREE.SphereGeometry(size), new THREE.MeshBasicMaterial({ color }));
        }}
        customThreeObjectUpdate={(obj, data) => {
          const { lat, lng, altitude } = data;
          return Object.assign(obj.position, globeRef.current?.getCoords(lat, lng, altitude));
        }}
      />
    </div>
  );
};

export default Page;
