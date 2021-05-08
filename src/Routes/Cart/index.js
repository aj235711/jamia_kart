import * as React from "react";
import { Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { serverLink } from "../../utils/constants";
import axios from "axios";
import PlaceHolder from "../../Components/PlaceHolder";

import CartItem from "./Components/CartItem";

const Cart = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`${serverLink}/cart/`, {
        headers: {
          Authorization: "bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((res) => {
        console.log(res);
        setCartItems([...res.data]);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Trouble reaching the servers");
        setLoading(false);
      });
  }, []);

  return (
    <>
      {JSON.parse(localStorage.getItem("user")).category === "customer" ? (
        <div style={{ marginTop: "10vh" }}>
          <Col md="12" className="d-flex justify-content-center mb-5">
            <Col md="9" className="d-flex align-items-center flex-wrap">
              {!loading ? (
                cartItems.length ? (
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
                      setLoading={setLoading}
                    />
                  ))
                ) : (
                  <Col
                    data-aos="zoom-in-left"
                    md="12"
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "80vh" }}
                  >
                    Your cart is empty...
                  </Col>
                )
              ) : (
                <PlaceHolder />
              )}
            </Col>
          </Col>
        </div>
      ) : JSON.parse(localStorage.getItem("user")).category === "seller" ? (
        <Redirect to="/sellerhomepage" />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Cart;
