import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import SearchItems from "./components/SearchItems";
import Cart from "./components/Cart";
import { items } from "./components/Data";

function App() {

  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Navbar cart = {cart} setData={setData}/>
        <Routes>
          <Route path="/" element={<Product items={data} cart={cart} setCart={setCart}/>} />
          <Route path="/product/:id" element={<ProductDetail items={data} cart={cart} setCart={setCart} />} />
          <Route path="/search/:term" element={<SearchItems cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
