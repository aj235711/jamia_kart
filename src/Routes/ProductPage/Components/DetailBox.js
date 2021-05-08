import * as React from "react";
import Details from "./Details";

const DetailBox = ({ name, price, description, sellerName, qty }) => {
  return (
    <div
      style={{
        position: "fixed",
        left: "30%",
        backgroundColor: "white",
        borderRight: "1px solid rgba(0,0,0,0.3)",
        height: "87vh",
        padding: "8px",
        paddingTop: "1vh",
        display: "flex",
        width: "50%",
      }}
    >
      <Details
        name={name}
        price={price}
        description={description}
        sellerName={sellerName}
        qty={qty}
      />
    </div>
  );
};

export default DetailBox;
