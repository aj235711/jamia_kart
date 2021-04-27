import React from "react";
import Main from "./Components/Main/index.js";
import {useLocation} from 'react-router-dom';
// import Bars from "../../Components/Bars.js";

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
        {/* <Bars /> */}
      </div>
      <Main selectedCategory={selectedCategory}/>
    </div>
  );
};

export default HomePage;
