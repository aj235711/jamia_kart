import React from "react";
import NavBar from "./NavBar";
import Nav2 from "./Nav2";

export default function Bars() {
  return (
      <div style={{
          position: "fixed",
          width: "100%",
          zIndex: "2000",
          marginBottom:"500px"
      }}>
      <NavBar />
      <Nav2 />
    </div>
  );
}
