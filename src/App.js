import React from "react";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Cart from "./components/cart";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
