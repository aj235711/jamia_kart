import * as React from "react";
import { Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { serverLink } from "../../utils/constants";
import axios from "axios";

import PlaceHolder from "../../Components/PlaceHolder";
import OrderItem from "./Components/OrderItem";

const Cart = () => {
  const [orderItems, setOrderItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`${serverLink}/order/`, {
        headers: {
          Authorization: "bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((res) => {
        console.log(res);
        setOrderItems([...res.data]);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Trouble reaching the servers");
        setLoading(false);
      });
  }, []);

  return (
    <>
      {localStorage.getItem("jwt") ? (
        <div style={{ marginTop: "10vh" }}>
          <Col md="12" className="d-flex justify-content-center mb-5">
            <Col md="9" className="d-flex align-items-center flex-wrap">
              {!loading ? (
                orderItems.length ? (
                  orderItems.map((item) => (
                    <OrderItem
                      id={item.id}
                      name={item.product_order.name}
                      description={item.product_order.desc}
                      quantity={item.qty}
                      image={item.product_order.imgurl}
                      setOrderItems={setOrderItems}
                      productId={item.product_order.id}
                      price={item.product_order.price}
                      productQty={item.product_order.qty}
                      sellerName={item.product_order.seller.name}
                      category={item.product_order.category}
                      setLoading={setLoading}
                      amount={item.amount}
                      status={item.product_order.status}
                      shipAddress={item.ship_add}
                      phoneNumber={item.phone_number}
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
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Cart;
