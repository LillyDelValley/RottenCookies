import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import TestComp from './components/TestComp';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TestComp />
  </React.StrictMode>,
)
