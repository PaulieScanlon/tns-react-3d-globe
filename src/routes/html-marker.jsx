import Globe from 'react-globe.gl';

import globeImage from '../assets/earth-night.jpg';

const Page = () => {
  const myData = [
    {
      city: 'New Orleans',
      lat: 29.953204744601763,
      lng: -90.08925929478903,
      altitude: 0.1,
      color: '#00ff33',
    },
    {
      city: 'New Delhi',
      lat: 28.621322361013092,
      lng: 77.20347613099612,
      altitude: 0.1,
      color: '#ff0000',
    },
    {
      city: 'New Zealand',
      lat: -43.1571459086602,
      lng: 172.72338919659848,
      altitude: 0.1,
      color: '#ffff00',
    },
  ];

  const icon = `
`;

  return (
    <div className='cursor-move'>
      <Globe
        globeImageUrl={globeImage}
        htmlElementsData={myData}
        htmlAltitude='altitude'
        htmlElement={(data) => {
          const { city, color } = data;
          const element = document.createElement('div');
          element.style.color = color;
          element.innerHTML = `
          <div>
            <svg viewBox="0 0 24 24" style="width:24px;margin:0 auto;">
              <path fill="currentColor" fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>
            <strong style="font-size:10px;text-align:center">${city}</strong>
          </div>`;
          return element;
        }}
      />
    </div>
  );
};

export default Page;
