import * as React from "react";
import { Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { serverLink } from "../../utils/constants";
import axios from "axios";

import PlaceHolder from "../../Components/PlaceHolder";
import Product from "./Components/Product";

const Cart = () => {
  const [myProducts, setMyProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`${serverLink}/products/saare/mere/`, {
        headers: {
          Authorization: "bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((res) => {
        console.log(res);
        setMyProducts([...res.data]);
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
                myProducts.length ? (
                  myProducts.map((item) => (
                    <Product
                      id={item.id}
                      name={item.name}
                      description={item.desc}
                      quantity={item.qty}
                      image={item.imgurl}
                      setMyProducts={setMyProducts}
                      price={item.price}
                      sellerName={item.seller.name}
                      category={item.category}
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
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Cart;
