import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { DataProvider } from './context/DataContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>
);