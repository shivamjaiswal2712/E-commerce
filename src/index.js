import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store()}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/app' element={<App />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
