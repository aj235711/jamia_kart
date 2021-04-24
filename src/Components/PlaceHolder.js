import React from "react";
import { Spinner } from "reactstrap";

const PlaceHolder = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "calc(100vh - 200px)", width: "100%" }}
    >
      <Spinner color="primary" />
    </div>
  );
};

export default PlaceHolder;
