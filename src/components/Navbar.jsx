import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { BsCartCheckFill } from "react-icons/bs";


const Navbar = ({ setData, cart }) => {
  const location = useLocation();  
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
    console.log(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
    console.log(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setsearchTerm("");
  };

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-cart
          </Link>

          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setsearchTerm(e.target.value)}
              placeholder="Search Products"
            />
          </form>

          <Link to={"/cart"} className="cart">
          <button type="button" className="btn btn-primary position-relative">
 <BsCartCheckFill style={{fontSize:'1.5rem'}} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
          </Link>
        </div>

          {location.pathname== '/' && (

<div className="nav-bar-wrapper">
          <div className="items">Filter By {"->"}</div>
          <div className="items" onClick={() => setData(items)}>
            No Filter
          </div>
          <div className="items" onClick={() => filterByCategory("mobiles")}>
            Mobiles
          </div>
          <div className="items" onClick={() => filterByCategory("laptops")}>
            Laptops
          </div>
          <div className="items" onClick={() => filterByCategory("tablets")}>
            Tablets
          </div>
          <div className="items" onClick={() => filterByPrice(29999)}>
            {">="}29999
          </div>
          <div className="items" onClick={() => filterByPrice(49999)}>
            {">="}49999
          </div>
          <div className="items" onClick={() => filterByPrice(69999)}>
            {">="}69999
          </div>
          <div className="items" onClick={() => filterByPrice(89999)}>
            {">="}89999
          </div>
        </div>

          ) }


        
      </header>
    </>
  );
};

export default Navbar;
