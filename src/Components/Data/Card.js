import React from "react";
import "./Card.css";
import Button from "@material-ui/core/Button";
import { Row, Col } from "reactstrap";

const Card = ({ id, name, price, imgTag, category }) => {
  return (
    <Col
      md="12"
      className="d-flex justify-content-center align-items-center flex-wrap p-4 m-3 text-center border shadow container"
      style={{ height: "450px" }}
    >
      <Col md="12" className="p-2">
        <img alt="robots" src={imgTag} className="image" />
      </Col>
      <Col
        md="12"
        className="d-flex justify-content-center align-items-between flex-wrap"
      >
        <Col md="12" className="">
          <h5>{name.length < 25 ? name : name.substring(0, 20) + "..."}</h5>
        </Col>
        <Col md="12" className="">
          <h6>{category}</h6>
        </Col>
        <Col md="12" className="">
          <p>Rs. {price}</p>
        </Col>
      </Col>
      <Button
        variant="outlined"
        style={{ border: "1px solid #ee8822aa", color: "#ee8822ff" }}
      >
        Show product
      </Button>
    </Col>
  );
};
export default Card;
