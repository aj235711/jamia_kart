import React from "react";
import "./Card.css";
import Button from "@material-ui/core/Button";
import { Row, Col } from "reactstrap";
import {useHistory} from 'react-router-dom';

const Card = ({ id, name, price, imgTag, category, description, sellerName,qty }) => {

  const history = useHistory();

  const pageChange = () => {
    history.push(`/product:${id}`, {id, name, price, imgTag, category, description,sellerName,qty});
  };

  return (
    <Col
      md="12"
      className="d-flex justify-content-center align-items-center flex-wrap p-4 m-3 text-center shadow container"
      style={{ height: "420px" }}
      onClick={pageChange}
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
        {qty === 0 &&
        <Col md="12" className="">
          <p style={{color: 'red'}}>Out Of Stock</p>
        </Col>}
      </Col>
      {/* <Button
        onClick={pageChange}
        variant="outlined"
        style={{ border: "1px solid #ee8822aa", color: "#ee8822ff" }}
      >
        Show product
      </Button> */}
    </Col>
  );
};
export default Card;
