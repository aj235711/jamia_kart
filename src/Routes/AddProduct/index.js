import React from "react";
import ProductForm from "./Components/ProductForm";
import { Redirect } from "react-router-dom";

const ProductPage = () => {
  return (
    <>
      {JSON.parse(localStorage.getItem("user")).category === "seller" ? (
        <div style={{ marginTop: "15vh" }}>
          <ProductForm />
        </div>
      ) : (
        <Redirect to="/jamia_kart" />
      )}
    </>
  );
};

export default ProductPage;
