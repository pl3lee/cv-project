import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.padding = '0px';
document.body.style.margin = '0px';

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
