import React from "react";
import Image from "./Components/Image.js";
import DetailBox from "./Components/DetailBox.js";
import RightBox from "./Components/RightBox.js";
import { useLocation } from "react-router-dom";
// import Bars from "../../Components/Bars.js";

const ProductPage = () => {
  const location = useLocation();

  const { id, name, price, imgTag, category, description } = location.state;

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "1000",
        marginTop:"18vh"
      }}
    >
      {/* <Bars /> */}
      <Image imgTag={imgTag} />
      <DetailBox name={name} price={price} description={description} />
      <RightBox />
    </div>
  );
};

export default ProductPage;
