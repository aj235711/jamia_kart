import React from "react";
import { useLocation } from "react-router-dom";

import NavBar from "../../Components/NavBar.js";
import Nav2 from "../../Components/Nav2.js";
import ProductForm from './Components/ProductForm';


const ProductPage = () => {
  const location = useLocation();

  return (
      <>
      <NavBar />
      <Nav2 />
      <ProductForm />
</>
  );
};

export default ProductPage;
