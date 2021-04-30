/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Row, Col, Button } from "reactstrap";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useHistory as history } from "react-router-dom";

const CartItem = ({name, description, quantity, image}) => {
  return (
    <div className="mb-5" style={{cursor:"pointer"}}>
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
                src={image}
                height="180vh"
              />
            </Col>
          </Col>
          <Col md="9" className="d-flex flex-wrap mt-3">
            <h3>{name}</h3>
            <p>{description}</p>
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
            {"      "}Quantity: {quantity}{"      "}
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
