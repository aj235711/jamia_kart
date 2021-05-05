import React from "react";
import Image from "./Components/Image.js";
import DetailBox from "./Components/DetailBox.js";
import RightBox from "./Components/RightBox.js";
import { useLocation } from "react-router-dom";

const ProductPage = () => {
  const location = useLocation();

  const {
    id,
    name,
    price,
    imgTag,
    category,
    description,
    sellerName,
    qty,
  } = location.state;

  return (
    <div
      style={{
        marginTop: "11vh",
      }}
    >
      <Image imgTag={imgTag} />
      <DetailBox
        name={name}
        price={price}
        description={description}
        sellerName={sellerName}
        qty={qty}
      />
      <RightBox
        qty={qty}
        id={id}
        name={name}
        price={price}
        sellerName={sellerName}
      />
    </div>
  );
};

export default ProductPage;
