import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, NavLink } from 'react-router-dom';

import App from './app.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavLink to='/basic-image'>/basic-image</NavLink>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
