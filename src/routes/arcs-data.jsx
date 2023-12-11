import Globe from 'react-globe.gl';

import globeImage from '../assets/earth-night.jpg';

const Page = () => {
  const myData = [
    {
      startLat: 29.953204744601763,
      startLng: -90.08925929478903,
      endLat: 28.621322361013092,
      endLng: 77.20347613099612,
      color: ['#00ff33', '#ff0000'],
      stroke: 1,
      gap: 0.02,
      dash: 0.02,
      scale: 0.3,
      time: 2000,
    },
    {
      startLat: 28.621322361013092,
      startLng: 77.20347613099612,
      endLat: -43.1571459086602,
      endLng: 172.72338919659848,
      color: ['#ff0000', '#ffff00'],
      stroke: 3,
      gap: 0.05,
      dash: 0.3,
      scale: 0.5,
      time: 8000,
    },
  ];

  return (
    <div className='cursor-move'>
      <Globe
        globeImageUrl={globeImage}
        arcsData={myData}
        arcColor='color'
        arcStroke='stroke'
        arcDashGap='gap'
        arcDashLength='dash'
        arcAltitudeAutoScale='scale'
        arcDashAnimateTime='time'
      />
    </div>
  );
};

export default Page;
