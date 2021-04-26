import React from "react";
import {Col} from 'reactstrap';

import NavBar from "../../Components/NavBar.js";
import Nav2 from "../../Components/Nav2.js";
import CartItem from './Components/CartItems';

const Cart = () => {
  return (
    <>
      <NavBar />
      <Nav2 />
      <Col md="12" className="d-flex justify-content-center mt-5">
        <Col md="9" className="d-flex align-items-center flex-wrap">
          <CartItem id={0}/>
          </Col>
      </Col>
    </>
  );
};

export default Cart;
