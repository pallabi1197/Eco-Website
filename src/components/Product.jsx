import React from "react";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const Product = ({items}) => {
  return (
    <>
      <Container className="my-5">
        <Row>
          {items.map((product) => {
            return (
              <>
                <Col key={product.id} lg={4} md={6} sm={12} className="my-3 text-center">
                  <Card style={{ width: "18rem" }}>
                    <Link to = {`/product/${product.id}`}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                      }}>
                      <Card.Img variant="top" src={product.imgSrc} />
                    </Link>
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Button variant="primary" className="mx-3">
                        {product.price} ₹{" "}
                      </Button>
                      <Button variant="warning">Add To Cart</Button>
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
