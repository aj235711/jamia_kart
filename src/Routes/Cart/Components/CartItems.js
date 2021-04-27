import React from "react";
import { Row, Col, Button } from "reactstrap";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CartItem = () => {
  return (
    <div className="mb-5">
      <div
        className="shadow p-3 mt-5"
        style={{ borderRadius: "5px", border: "2px solid rgba(0, 0, 0, 0.3)" }}
      >
        <Row
          style={{
            width: "100%",
          }}
        >
          <Col
            md="3"
            className="h-100 d-flex justify-content-center align-items-center pt-3 pb-3"
          >
            <Col className="col-auto" style={{}}>
              <img
                src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
                height="180vh"
              />
            </Col>
          </Col>
          <Col md="9" className="d-flex flex-wrap mt-3">
            <h3>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
            <p>
              Slim-fitting style, contrast raglan long sleeve, three-button
              henley placket, light weight & soft fabric for breathable and
              comfortable wearing. And Solid stitched shirts with round neck
              made for durability and a great fit for casual fashion wear and
              diehard baseball fans. The Henley style round neckline includes a
              three-button placket.
            </p>
          </Col>
        </Row>

        <Row
          className="d-flex justify-content-between align-items-center"
          style={{
            height: "10vh",
            width: "100%",
          }}
        >
          <h5 className="ml-5">
            <RemoveIcon
              className="bg-dark text-white mr-2 p-1"
              style={{ cursor: "pointer" }}
            />
            {"      "}Quantity: 1{"      "}
            <AddIcon
              className="bg-dark text-white ml-2 p-1"
              style={{ cursor: "pointer" }}
            />
            {"      "}
          </h5>
          <Button color="info" outline className="mr-3">
            Order Now
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default CartItem;
