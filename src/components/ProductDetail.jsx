import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ items, cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setrelatedProducts] = useState([]);

  //when id will change useEffect will run and willshow filtered product

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);

    const relatedProducts = items.filter(
      (p) => p.category === product.category
    );
    setrelatedProducts(relatedProducts);
  }, [id, product.category]);

  const addtoCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log("Cart element = ", cart);
    toast.success("Item added to the cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
            <Button
              variant="warning"
              onClick={() =>
                addtoCart(
                  product.id,
                  product.price,
                  product.title,
                  product.description,
                  product.imgSrc
                )
              }
            >
              Add To Cart
            </Button>
          </Col>
        </Row>
      </Container>
      <h1 className="text-center">Related Products</h1>
      <Product cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
