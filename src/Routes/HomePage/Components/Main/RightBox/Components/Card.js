import * as React from "react";
import "./Card.css";
import { Col } from "reactstrap";
import { useHistory } from "react-router-dom";

const Card = ({
  id,
  name,
  price,
  imgTag,
  category,
  description,
  sellerName,
  qty,
}) => {
  const history = useHistory();

  const pageChange = () => {
    if (JSON.parse(localStorage.getItem("user")).category === "customer")
      history.push(`/product:${id}`, {
        id,
        name,
        price,
        imgTag,
        category,
        description,
        sellerName,
        qty,
      });
    else history.push("/login");
  };

  return (
    <Col
      data-tip
      data-for="registerTip"
      md="12"
      id="TooltipExample"
      className="d-flex justify-content-center align-items-center flex-wrap p-4 m-3 text-center shadow container"
      style={{ height: "400px" }}
      onClick={pageChange}
    >
      <Col md="12" className="imgContainer">
        <img alt="product" src={imgTag} className="image" style={{}} />
      </Col>
      <Col
        md="12"
        className="d-flex justify-content-center align-items-between flex-wrap"
      >
        <Col md="12" className="d-flex justify-content-center flex-wrap">
          <h6>{name.length < 25 ? name : name.substring(0, 17) + "..."}</h6>
        </Col>
        <Col md="12" className="d-flex justify-content-center flex-wrap">
          <small>{category}</small>
        </Col>
        <Col md="12" className="d-flex justify-content-center flex-wrap">
          <small>Rs. {price}</small>
        </Col>
        {qty === 0 && (
          <Col md="12" className="my-0 d-flex justify-content-center flex-wrap">
            <small style={{ color: "red" }}>
              <small>Out Of Stock</small>
            </small>
          </Col>
        )}
      </Col>
    </Col>
  );
};
export default Card;
