import Globe from 'react-globe.gl';

import globeJson from '../assets/ne_110m_admin_0_countries.json';

const Page = () => {
  const myData = [
    {
      lat: 29.953204744601763,
      lng: -90.08925929478903,
      altitude: '0.4',
      color: '#00ff33',
    },
    {
      lat: 28.621322361013092,
      lng: 77.20347613099612,
      altitude: '0.4',
      color: '#ff0000',
    },
    {
      lat: -43.1571459086602,
      lng: 172.72338919659848,
      altitude: '0.4',
      color: '#ffff00',
    },
  ];

  return (
    <div className='cursor-move'>
      <Globe
        polygonsData={globeJson.features}
        polygonAltitude={0.1}
        polygonCapColor={() => '#0000ff'}
        polygonSideColor={() => '#0000cc'}
        pointsData={myData}
        pointAltitude='altitude'
        pointColor='color'
      />
    </div>
  );
};

export default Page;
