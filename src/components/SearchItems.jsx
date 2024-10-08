import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

const SearchItems = ({cart, setCart}) => {
  const [filterData, setfilterData] = useState([]);
  const { term } = useParams();

  useEffect(() => {
    const filteredProduct = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );

      setfilterData(data);
    };

    filteredProduct();
  }, [term]);

  return (

    <Product cart={cart} setCart={setCart} items = {filterData} />


  );
};

export default SearchItems;
