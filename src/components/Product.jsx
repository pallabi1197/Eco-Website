import React from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ items, cart, setCart }) => {
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

      <Container className="my-5">
        <Row>
          {items.map((product) => {
            return (
              <>
                <Col
                  key={product.id}
                  lg={4}
                  md={6}
                  sm={12}
                  className="my-3 text-center"
                >
                  <Card style={{ width: "18rem" }}>
                    <Link
                      to={`/product/${product.id}`}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <Card.Img variant="top" src={product.imgSrc} />
                    </Link>
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
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
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Product;
