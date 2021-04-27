import React from "react";

const Details = ({ name, price, description, sellerName, qty }) => {
  console.log(qty);
  return (
    <div>
      <div
        style={{
          width: "100%",
          marginBottom: "30px",
          borderBottom: "1px solid rgba(0,0,0,0.3",
          paddingBottom: "10px",
        }}
      >
        <h1>{name}</h1>
      </div>
      <h4 style={{ marginBottom: "20px" }}> Price : Rs. {price}</h4>
      <h4 style={{ color: `${qty > 0 ? "green" : "red"}` }}>
        {qty > 0 ? "In stock" : "Out of stock"}
      </h4>
      <h6> Sold by {sellerName} </h6>

      <div
        style={{
          width: "100%",
          marginTop: "30px",
          borderTop: "1px solid rgba(0,0,0,0.3",
          paddingTop: "20px",
        }}
      >
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default Details;
