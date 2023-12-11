import { Routes, Route } from 'react-router-dom';
import BasicGlobe from './routes/basic-globe';
import JsonGlobe from './routes/json-globe';
import NotFound from './routes/not-found';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/'>
          <Route index element={<BasicGlobe />} />
          <Route path='json-globe' element={<JsonGlobe />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
