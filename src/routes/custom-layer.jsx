import { useRef } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

import globeImage from '../assets/earth-dark.jpg';

const Page = () => {
  const globeEl = useRef(null);

  const myData = [
    {
      lat: 29.953204744601763,
      lng: -90.08925929478903,
      altitude: 0.4,
      color: '#00ff33',
    },
    {
      lat: 28.621322361013092,
      lng: 77.20347613099612,
      altitude: 0.4,
      color: '#ff0000',
    },
    {
      lat: -43.1571459086602,
      lng: 172.72338919659848,
      altitude: 0.4,
      color: '#ffff00',
    },
  ];

  return (
    <div className='cursor-move'>
      <Globe
        ref={globeEl}
        globeImageUrl={globeImage}
        pointsData={myData}
        pointAltitude='altitude'
        pointColor='color'
        customLayerData={[...Array(500).keys()].map(() => ({
          lat: (Math.random() - 1) * 360,
          lng: (Math.random() - 1) * 360,
          altitude: Math.random() * 2,
          size: Math.random() * 1,
          color: '#9999cc',
        }))}
        customThreeObject={(data) => {
          const { size, color } = data;
          return new THREE.Mesh(new THREE.SphereGeometry(size), new THREE.MeshBasicMaterial({ color }));
        }}
        customThreeObjectUpdate={(obj, data) => {
          const { lat, lng, altitude } = data;
          return Object.assign(obj.position, globeEl.current?.getCoords(lat, lng, altitude));
        }}
      />
    </div>
  );
};

export default Page;
