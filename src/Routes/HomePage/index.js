import React from "react";
import Main from "./Components/Main/index.js";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  console.log(localStorage.getItem("jwt"));
  const location = useLocation();

  const searchValue = location.state ? location.state.searchValue : "";

  return <Main searchValue={searchValue} />;
};

export default HomePage;
