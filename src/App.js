import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


// import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/product" element={<Products />} /> */}
        {/* <Route path="/product/:id" element={<Product />} /> */}
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
        {/* <Route path="/product/*" element={<PageNotFound />} /> */}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;