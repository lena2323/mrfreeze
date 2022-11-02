import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MrFreezeApp from './MrFreezeApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MrFreezeApp />
  </React.StrictMode>
);

reportWebVitals();
