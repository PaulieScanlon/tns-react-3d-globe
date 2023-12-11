import { Routes, Route } from 'react-router-dom';
import BasicImage from './routes/basic-image';
import GeojsonPolygon from './routes/geojson-polygon';
import GeojsonHexagon from './routes/geojson-hexagon';
import ArcsData from './routes/arcs-data';
import RingsData from './routes/rings-data';
import HTMLMarker from './routes/html-marker';
import NotFound from './routes/not-found';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/'>
          <Route index element={<BasicImage />} />
          <Route path='geojson-polygon' element={<GeojsonPolygon />} />
          <Route path='geojson-hexagon' element={<GeojsonHexagon />} />
          <Route path='arcs-data' element={<ArcsData />} />
          <Route path='rings-data' element={<RingsData />} />
          <Route path='html-marker' element={<HTMLMarker />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
