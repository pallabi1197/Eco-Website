import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container mt-4" style={{ width: "50%" }}>
        {cart.length == 0 ? (
          <>
            <div className="text-center">
              <h1>Your Cart is Empty</h1>
              <Link to={"/"} className="btn btn-warning">
                Continue Shopping...
              </Link>
            </div>
          </>
        ) : (
          cart.map((product) => {
            return (
              <>
                <div className="card mb-3" style={{ Width: "700px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={product.imgSrc}
                        className="img-fluid rounded-start"
                      />
                    </div>
                    <div className="col-md-8 m-auto">
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <Button variant="primary" className="mx-3">
                          {product.price} ₹{" "}
                        </Button>
                        <Button variant="warning">Buy Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div  >

      {cart.length != 0 && (
        <div className="container text-center my-5 d-flex justify-content-center align-items-center">
          <button className="btn btn-warning mx-5">Check Out</button>
          <button onClick={() => setCart("")} className="btn btn-danger">
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
