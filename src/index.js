import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Board from './Board';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('react-container'));
root.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>
);
reportWebVitals();
