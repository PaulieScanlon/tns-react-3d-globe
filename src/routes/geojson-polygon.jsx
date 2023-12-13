import Globe from 'react-globe.gl';

import globeJson from '../assets/countries_110m.json';

const Page = () => {
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
        polygonsData={globeJson.features}
        polygonCapColor={(geometry) => {
          return ['#0000ff', '#0000cc', '#000099', '#000066'][geometry.properties.abbrev_len % 4];
        }}
        polygonSideColor={(geometry) => {
          return ['#0000ff', '#0000cc', '#000099', '#000066'][geometry.properties.abbrev_len % 4];
        }}
        polygonAltitude={0.08}
        pointsData={myData}
        pointAltitude='altitude'
        pointColor='color'
      />
    </div>
  );
};

export default Page;
