import React from "react";

const Image = () => {
  return (
    <div
    style={{
        position: "fixed",
        backgroundColor: "white",
              borderRight: "1px solid rgba(0,0,0,0.3)",
            //   marginTop: "1vh",
        height: "80vh",
        padding: "8px",
        display:"flex",
        width:"30%",
        alignItems:"center",
        justifyContent:"center"
      }}
    >
      <img
        style={{
          display: "flex",
          justifyContent: "flex-start",
          height: "25vw",
        }}
        src="https://images-na.ssl-images-amazon.com/images/I/81SdJG3OUjL._SL1500_.jpg"
        alt="laptop"
      />
    </div>
  );
};

export default Image;
