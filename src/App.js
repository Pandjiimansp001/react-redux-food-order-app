import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Carts/Cart";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
