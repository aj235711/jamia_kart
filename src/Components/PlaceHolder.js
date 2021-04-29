import React from "react";
import { Spinner } from "reactstrap";

const PlaceHolder = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "70vh", width: "100%",marginTop:"18vh" }}
    >
      <Spinner color="dark" />
    </div>
  );
};

export default PlaceHolder;
