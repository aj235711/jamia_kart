import * as React from "react";
import { Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { serverLink } from "../../utils/constants";
import axios from "axios";
import PlaceHolder from "../../Components/PlaceHolder";

import CartItem from "./Components/CartItems";

const Cart = () => {
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${serverLink}/cart/`, {
        headers: {
          Authorization: "bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((res) => {
        console.log(res);
        setCartItems([...res.data]);
      })
      .catch((err) => toast.error("Trouble reaching the servers"));
  }, []);

  return (
    <>
      {localStorage.getItem("jwt") ? (
        <div style={{ marginTop: "10vh" }}>
          <Col md="12" className="d-flex justify-content-center mt-5 mb-5">
            <Col md="9" className="d-flex align-items-center flex-wrap">
              {cartItems.length ? (
                cartItems.map((item) => (
                  <CartItem
                    id={item.id}
                    name={item.product_cart.name}
                    description={item.product_cart.desc}
                    quantity={item.qty}
                    image={item.product_cart.imgurl}
                    setCartItems={setCartItems}
                    productId={item.product_cart.id}
                    price={item.product_cart.price}
                    productQty={item.product_cart.qty}
                    sellerName={item.product_cart.seller.name}
                    category={item.product_cart.category}
                  />
                ))
              ) : (
                <PlaceHolder />
              )}
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
