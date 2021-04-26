import React from "react";
import {Col} from 'reactstrap';

import NavBar from "../../Components/NavBar.js";
import Nav2 from "../../Components/Nav2.js";

const Cart = () => {
  return (
    <>
      <NavBar />
      <Nav2 />
      <Col md="12" className="bg-light border border-secondary" style={{height: '30vh'}}>
          <Col md="3" className="h-100 d-flex align-items-center justify-content-center" style={{borderRight: '2px solid #444'}}>
              image yahan aayegi
          </Col>
      </Col>
    </>
  );
};

export default Cart;
