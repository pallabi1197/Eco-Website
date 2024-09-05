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
  return (
    <>
      <Router>
        <Navbar setData={setData}/>
        <Routes>
          <Route path="/" element={<Product items={data} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search/:term" element={<SearchItems />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
