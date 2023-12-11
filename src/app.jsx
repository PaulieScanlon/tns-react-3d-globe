import { Routes, Route } from 'react-router-dom';
import Image from './routes/image';
import GeojsonPolygon from './routes/geojson-polygon';
import NotFound from './routes/not-found';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/'>
          <Route index element={<Image />} />
          <Route path='geojson-polygon' element={<GeojsonPolygon />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
