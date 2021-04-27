import React from "react";
import { Col } from "reactstrap";
import { Redirect } from "react-router-dom";

import CartItem from "./Components/CartItems";

const Cart = () => {
  return (
    <>
      {localStorage.getItem("jwt") ? (
        <div style={{ marginTop: "18vh" }}>
          <Col md="12" className="d-flex justify-content-center mt-5">
            <Col md="9" className="d-flex align-items-center flex-wrap">
              <CartItem />
            </Col>
          </Col>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Cart;
