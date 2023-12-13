import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, NavLink } from 'react-router-dom';

import App from './app.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ul className='hidden'>
        <li>
          <NavLink to='/basic-image'>/basic-image</NavLink>
        </li>
        <li>
          <NavLink to='/geojson-polygon'>/geojson-polygon</NavLink>
        </li>
        <li>
          <NavLink to='/geojson-hexagon'>/geojson-hexagon</NavLink>
        </li>
        <li>
          <NavLink to='/arcs-data'>/arcs-data</NavLink>
        </li>
        <li>
          <NavLink to='/rings-data'>/rings-data</NavLink>
        </li>
        <li>
          <NavLink to='/html-marker'>/html-marker</NavLink>
        </li>
        <li>
          <NavLink to='/custom-layer'>/custom-layer</NavLink>
        </li>
      </ul>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
