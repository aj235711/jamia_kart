import React from "react";
import NavBar from "../../Components/NavBar.js";
import Nav2 from "../../Components/Nav2.js";
import Main from "./Components/Main/index.js";
import {useLocation} from 'react-router-dom';

const HomePage = () => {
  console.log(localStorage.getItem("jwt"));
  const location = useLocation();
  const selectedCategory = location.state ?  location.state.selectedCategory :  'all';
  console.log(selectedCategory);
  return (
    <div>
      <div
        style={{
          position: "fixed",
          minWidth: "1294px",
          overflowX: "auto",
          top: "0",
          width: "100%",
          zIndex: "1000",
        }}
      >
        <NavBar />
        <Nav2 />
      </div>
      <Main selectedCategory={selectedCategory}/>
    </div>
  );
};

export default HomePage;
