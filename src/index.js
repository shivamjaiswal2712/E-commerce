import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
