import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header'
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Cart from './component/Cart';

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App