import React from "react";
import NavBar from "./NavBar";

export default function Bars() {
  return (
    <div
      style={{
        position: "fixed",
        minWidth: "1000px",
        overflowX: "auto",
        top: "0",
        width: "100%",
        zIndex: "1000",
      }}
    >
      <NavBar />
    </div>
  );
}
