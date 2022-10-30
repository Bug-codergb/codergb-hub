import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/css/base.css"
import "./constant/format"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

