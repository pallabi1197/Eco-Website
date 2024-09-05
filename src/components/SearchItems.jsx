import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";

const SearchItems = () => {
  const [filterData, setfilterData] = useState([]);
  const { term } = useParams();

  useEffect(() => {
    const filteredProduct = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );

      console.log(data);
    };

    filteredProduct();
  }, [term]);

  return <div>SearchItems - {term}</div>;
};

export default SearchItems;
