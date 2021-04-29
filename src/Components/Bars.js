import React from "react";
import NavBar from "./NavBar";
import Nav2 from "./Nav2";

export default function Bars() {
  return (
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
      <NavBar/>
      <Nav2 />
    </div>
  );
}
