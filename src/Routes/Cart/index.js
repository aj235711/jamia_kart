import * as React from "react";
import { Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import {toast} from 'react-toastify';
import {serverLink} from '../../utils/constants';
import axios from 'axios';

import CartItem from "./Components/CartItems";

const Cart = () => {

  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${serverLink}/cart/`,
    {
      headers: {
        Authorization: "bearer " + localStorage.getItem("jwt"),
      },
    }).then(res => {console.log(res); setCartItems([...res.data])}).catch(err => toast.error('Trouble reaching the servers'));
  }, [])

  return (
    <>
      {localStorage.getItem("jwt") ? (
        <div style={{ marginTop: "18vh" }}>
          <Col md="12" className="d-flex justify-content-center mt-5">
            <Col md="9" className="d-flex align-items-center flex-wrap">
              {cartItems.map(item => 
              <CartItem name={item.product_cart.name} description={item.product_cart.desc} quantity={item.qty} image={item.product_cart.imgurl} />)}
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
