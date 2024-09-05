import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setrelatedProducts] = useState([]);

//when id will change useEffect will run and willshow filtered product

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);

    const relatedProducts = items.filter((p) => p.category === product.category);
     setrelatedProducts(relatedProducts);
  }, [id, product.category]);

  return (
    <>
      <Container>
        <Row className="d-flex align-items-center">
          <Col sm={6} className="product-img">
            <img src={product.imgSrc} />
          </Col>
          <Col sm={6}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <Button variant="primary" className="mx-3">
              {product.price} ₹{" "}
            </Button>
            <Button variant="warning">Add To Cart</Button>
          </Col>
        </Row>
      </Container>
      <h1 className="text-center">Related Products</h1>
      <Product items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
