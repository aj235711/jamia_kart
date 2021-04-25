import React from "react";

const Details = ({name, price, description}) => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          marginBottom: "30px",
                  borderBottom: "1px solid rgba(0,0,0,0.3",
          paddingBottom:"10px",
        }}
      >
        <h1>{name}</h1>
      </div>
      <h4 style={{ marginBottom: "20px" }}> Price : $ {price}</h4>
      <h4 style={{ color: "green" }}> In stock </h4>

      <div
        style={{
          width: "100%",
          marginTop: "30px",
                  borderTop: "1px solid rgba(0,0,0,0.3",
          paddingTop:"20px"
        }}
          >
              <h5>{description}</h5>
      </div>
    </div>
  );
};

export default Details;
